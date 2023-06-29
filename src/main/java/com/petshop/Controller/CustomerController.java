package com.petshop.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.petshop.Entity.Customer;
import com.petshop.Service.CustomerService;

@Controller
public class CustomerController {
	@Autowired
	private CustomerService customerService;
	
	@RequestMapping(value = "/showCustomerProfile")
	public String showCustomerProfile(@RequestParam("username") String username, @RequestParam(value = "message", required = false) String message,  Model model) {
		Customer customer = customerService.showCustomerInfo(username);
	    System.out.print(message);
		model.addAttribute("message", message);
		model.addAttribute("customer", customer);
		return "customer/profile";
	}
	
	@RequestMapping(value = "/adminShowAllCustomer")
	public String showAllCustomer(Model model) {
		List<Customer> customers = customerService.showAllCustomer();
		model.addAttribute("customers", customers);
		return null;
	}
	
	@RequestMapping(value = "/adminAddCustomer")
	public String addCustomer(@RequestParam("name_customer") String name_customer, @RequestParam("date_of_birth") String date_of_birth, 
			@RequestParam("phone") String phone, @RequestParam("email") String email, @RequestParam("address") String address, Model model) {
		customerService.addCustomer(name_customer, date_of_birth, phone, email, address);
		return null;
	}
	@RequestMapping(value = "/EditCustomer")
	public String editCustomer(@RequestParam("username") String username, @RequestParam("name_customer") String name_customer, 
			@RequestParam("date_of_birth") String date_of_birth, @RequestParam("phone") String phone, @RequestParam("email") String email, 
			@RequestParam("address") String address, Model model) {
		customerService.editCustomer(username, name_customer, date_of_birth, phone, email, address);
		return "redirect:showCustomerProfile?username=" + username;
	}
	@RequestMapping(value = "/adminDeleteCustomer")
	public String deleteCustomer(@RequestParam("id_customer") int id_customer) {
		customerService.deleteCustomer(id_customer);
		return null;
	}
}
