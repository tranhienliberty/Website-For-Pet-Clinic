package com.petshop.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.petshop.Entity.Account;
import com.petshop.Entity.AnimalType;
import com.petshop.Entity.Customer;
import com.petshop.Entity.Product;
import com.petshop.Entity.ProductType;
import com.petshop.Service.AccountService;
import com.petshop.Service.CustomerService;

@Controller
public class CustomerController {
	@Autowired
	private CustomerService customerService;
	@Autowired
	private AccountService accountService;
	
	@RequestMapping(value = "/showCustomerProfile")
	public String showCustomerProfile(@RequestParam("username") String username, @RequestParam(value = "message", required = false) String message,  Model model) {
		Customer customer = customerService.showCustomerInfo(username);
		Account account = accountService.findByUsername(username);
		model.addAttribute("message", message);
		model.addAttribute("customer", customer);
		model.addAttribute("account", account);
		return "customer/profile";
	}
	@RequestMapping(value = "/EditCustomer")
	public String editCustomer(@RequestParam("username") String username, @RequestParam("name_customer") String name_customer, 
			@RequestParam("date_of_birth") String date_of_birth, @RequestParam("phone") String phone, @RequestParam("email") String email, 
			@RequestParam("address") String address, Model model) {
		customerService.editCustomer(username, name_customer, date_of_birth, phone, email, address);
		return "redirect:showCustomerProfile?username=" + username;
	}
	@RequestMapping(value = "/adminShowAllCustomer")
	public String showAllCustomer(Model model) {
		List<Customer> customers = customerService.showAllCustomer();
		model.addAttribute("customers", customers);
		return "admin/admin-customer";
	}
    @RequestMapping(value = "/showFormCustomerInfo")
    public String showFormProductInfo(@RequestParam(value = "id_customer", required = false) Integer id_customer, Model model) {
    	if (id_customer != null) {
    		int productID = id_customer.intValue();
    		Customer customer = customerService.getCustomerByID(productID);
    		List<Account> accounts = accountService.getAccountFree();
    		model.addAttribute("accounts", accounts);
    		model.addAttribute("customer", customer);
    		return "admin/admin-customer-edit";
    		}
    	List<Account> accounts = accountService.getAccountFree();
		model.addAttribute("accounts", accounts);
    	return "admin/admin-customer-edit";
    }
	@RequestMapping(value = "/adminEditCustomer")
	public String editProduct(@RequestParam(value = "id_customer", required = false) Integer id_customer,@RequestParam("name_customer") String name_customer, 
			@RequestParam("date_of_birth") String date_of_birth, @RequestParam("phone") String phone, @RequestParam("email") String email, 
			@RequestParam("address") String address, @RequestParam(value = "username", required = false) String username, Model model) {
    	if(username!=null&&id_customer!=null) {
    		int customerID = id_customer.intValue();
    		customerService.adminEditCustomer(customerID, name_customer, date_of_birth, phone, email, address, username);
        	return "redirect:adminShowAllCustomer";
    	}
    	else if (username==null&&id_customer!=null){
    		int customerID = id_customer.intValue();
    		customerService.adminEditCustomer(customerID, name_customer, date_of_birth, phone, email, address);
        	return "redirect:adminShowAllCustomer";
    	}
    	else if (username!=null&&id_customer==null){
    		customerService.addCustomer(name_customer, date_of_birth, phone, email, address, username);
        	return "redirect:adminShowAllCustomer";
    	}
    	else {
    		customerService.addCustomer(name_customer, date_of_birth, phone, email, address);
        	return "redirect:adminShowAllCustomer";
    	}
    }
	
	@RequestMapping(value = "/adminDeleteCustomer")
	public String deleteCustomer(@RequestParam("id_customer") int id_customer) {
		customerService.deleteCustomer(id_customer);
		return "redirect:adminShowAllCustomer";
	}
}
