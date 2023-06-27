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
	public String addStaff(Model model) {
		return null;
	}
}
