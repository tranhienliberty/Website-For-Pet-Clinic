package com.petshop.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.petshop.Entity.Contract;
import com.petshop.Entity.Staff;
import com.petshop.Service.ContractService;
import com.petshop.Service.StaffService;

@Controller
public class StaffController {
	@Autowired
	private StaffService staffService;
	@Autowired
	private ContractService contractService;
	
	@RequestMapping(value="/adminShowAllStaff")
	public String showAllStaff(Model model) {
		List<Staff> staffs = staffService.showAllStaff();
		model.addAttribute("staffs", staffs);
		return null;
	}
	@RequestMapping(value = "/adminShowContract")
	public String showContract(@RequestParam("id_staff") int id_staff, Model model) {
		Staff staff = staffService.getStaffByID(id_staff);
		Contract contract = contractService.getContractByStaff(staff.getId_contract());
		model.addAttribute("contract", contract);
		return null;
	}
	@RequestMapping(value = "/adminAddStaff")
	public String addStaff(@RequestParam("name_staff") String name_staff, @RequestParam("identity_card") String identity_card, 
			@RequestParam("date_of_birth") String date_of_birth, @RequestParam("phone") String phone, @RequestParam("email") String email, 
			@RequestParam("address") String address, @RequestParam("certificate") String certificate, @RequestParam("experience") String experience,
			@RequestParam("bank_name") String bank_name, @RequestParam("id_position") int id_position, @RequestParam("id_contract") int id_contract,
			@RequestParam("bank_number") String bank_number, Model model) {
		staffService.addStaff(name_staff, identity_card, date_of_birth, phone, email, address, certificate, experience, bank_name, bank_number, id_position, id_contract);
		return null;
	}
	@RequestMapping(value = "/adminEditStaff")
	public String editStaff(@RequestParam("id_staff") int id_staff, @RequestParam("name_staff") String name_staff, @RequestParam("identity_card") String identity_card, 
			@RequestParam("date_of_birth") String date_of_birth, @RequestParam("phone") String phone, @RequestParam("email") String email, 
			@RequestParam("address") String address, @RequestParam("certificate") String certificate, @RequestParam("experience") String experience,
			@RequestParam("bank_name") String bank_name, @RequestParam("id_position") int id_position, @RequestParam("id_contract") int id_contract,
			@RequestParam("bank_number") String bank_number, Model model) {
		staffService.editStaff(id_staff, name_staff, identity_card, date_of_birth, phone, email, address, certificate, experience, bank_name, bank_number, id_position, id_contract);
		return null;
	}
	@RequestMapping(value = "/adminDeleteStaff")
	public String deleteStaff(@RequestParam("id_staff") String id_staff) {
		staffService.deleteStaff(id_staff);
		return null;
	}
	
}
