package com.petshop.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.petshop.Entity.Account;
import com.petshop.Entity.Contract;
import com.petshop.Entity.Customer;
import com.petshop.Entity.Position;
import com.petshop.Entity.Staff;
import com.petshop.Service.AccountService;
import com.petshop.Service.ContractService;
import com.petshop.Service.PositionService;
import com.petshop.Service.StaffService;

@Controller
public class StaffController {
	@Autowired
	private StaffService staffService;
	@Autowired
	private ContractService contractService;
	@Autowired
	private AccountService accountService;
	@Autowired
	private PositionService positionService;
	
	@RequestMapping(value="/adminShowAllStaff")
	public String showAllStaff(Model model) {
		List<Staff> staffs = staffService.showAllStaff();
		model.addAttribute("staffs", staffs);
		return "admin/admin-staff";
	}
	@RequestMapping(value = "/adminShowContract")
	public String showContract(@RequestParam("id_staff") int id_staff, Model model) {
		Staff staff = staffService.getStaffByID(id_staff);
		Contract contract = contractService.getContractByStaff(staff.getId_contract());
		model.addAttribute("contract", contract);
		return null;
	}
    @RequestMapping(value = "/showFormStaffInfo")
    public String showFormProductInfo(@RequestParam(value = "id_staff", required = false) Integer id_staff, Model model) {
    	if (id_staff != null) {
    		int staffID = id_staff.intValue();
    		Staff staff = staffService.getStaffByID(staffID);
    		List<Account> accounts = accountService.getAccountFree();
    		List<Position> positions = positionService.showAllPosition();
    		model.addAttribute("positions", positions);
    		model.addAttribute("accounts", accounts);
    		model.addAttribute("staff", staff);
    		return "admin/admin-staff-edit";
    		}
    	List<Account> accounts = accountService.getAccountFree();
    	List<Position> positions = positionService.showAllPosition();
		model.addAttribute("positions", positions);
		model.addAttribute("accounts", accounts);
    	return "admin/admin-staff-edit";
    }
    private boolean checkExistStaff(int id_staff) {
		return staffService.checkExistStaff(id_staff);
	}
	@RequestMapping(value = "/adminEditStaff")
	public String editProduct(@RequestParam(value = "id_staff", required = false) Integer id_staff,@RequestParam("name_staff") String name_staff, @RequestParam("identity_card") String identity_card, 
			@RequestParam("date_of_birth") String date_of_birth, @RequestParam("phone") String phone, @RequestParam("email") String email, 
			@RequestParam("address") String address, @RequestParam("certificate") String certificate, @RequestParam("experience") String experience,
			@RequestParam("bank_name") String bank_name, @RequestParam("id_position") int id_position, @RequestParam(value = "username", required = false) String username,
			@RequestParam("bank_number") String bank_number, Model model) {
    	if(username!=null&&id_staff!=null&&!checkExistStaff(id_staff)) {
    		int staffID = id_staff.intValue();
    		staffService.editStaff(staffID, name_staff, identity_card, date_of_birth, phone, email, address, certificate, experience, bank_name, bank_number, id_position, username);
        	return "redirect:adminShowAllStaff";
    	}
    	else if (username==null&&id_staff!=null&&!checkExistStaff(id_staff)){
    		int staffID = id_staff.intValue();
    		staffService.editStaff(staffID, name_staff, identity_card, date_of_birth, phone, email, address, certificate, experience, bank_name, bank_number, id_position);
        	return "redirect:adminShowAllStaff";
    	}
    	else if (username!=null){
    		staffService.addStaff(name_staff, identity_card, date_of_birth, phone, email, address, certificate, experience, bank_name, bank_number, id_position, username);
        	return "redirect:adminShowAllStaff";
    	}
    	else {
    		staffService.addStaff(name_staff, identity_card, date_of_birth, phone, email, address, certificate, experience, bank_name, bank_number, id_position);
        	return "redirect:adminShowAllStaff";
    	}
    }
	@RequestMapping(value = "/adminDeleteStaff")
	public String deleteStaff(@RequestParam("id_staff") String id_staff) {
		staffService.deleteStaff(id_staff);
		return "redirect:adminShowAllStaff";
	}
	
}
