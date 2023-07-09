package com.petshop.Controller;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.sql.Timestamp;
import java.time.LocalDateTime;
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
	
	private int getNewID() {
		return contractService.getNewID() + 1;
	}
	
	@RequestMapping(value="/adminShowAllStaff")
	public String showAllStaff(@RequestParam(value = "message", required = false) String message, Model model) {
		List<Staff> staffs = staffService.showAllStaff();
		model.addAttribute("message", message);
		model.addAttribute("staffs", staffs);
		return "admin/admin-staff";
	}
	@RequestMapping(value = "/adminShowContract")
	public String showContract(@RequestParam("id_contract") int id_contract, Model model) {
		Contract contract = contractService.getContractByStaff(id_contract);
		model.addAttribute("contract", contract);
		return "admin/admin-contract";
	}
    @RequestMapping(value = "/showFormStaffInfo")
    public String showFormProductInfo(@RequestParam(value = "id_staff", required = false) Integer id_staff, Model model) {
    	if (id_staff != null) {
    		int staffID = id_staff.intValue();
    		Staff staff = staffService.getStaffByID(staffID);
    		List<Account> accounts = accountService.getAccountFree();
    		List<Position> positions = positionService.showAllPosition();
    		Contract contract = contractService.getContractByStaff(staff.getId_contract());
    		model.addAttribute("positions", positions);
    		model.addAttribute("accounts", accounts);
    		model.addAttribute("staff", staff);
    		model.addAttribute("contract", contract);
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
	public String editStaff(@RequestParam(value = "id_staff", required = false) Integer id_staff,@RequestParam("name_staff") String name_staff, 
			@RequestParam("identity_card") String identity_card, @RequestParam("identity_date") String identity_date, @RequestParam("nationality") String nationality, 
			@RequestParam("identity_place") String identity_place, @RequestParam("date_of_birth") String date_of_birth, @RequestParam("phone") String phone, 
			@RequestParam("email") String email, @RequestParam("address") String address, @RequestParam("certificate") String certificate, 
			@RequestParam("country") String country, @RequestParam("gender") String gender, @RequestParam("bank_name") String bank_name, 
			@RequestParam("id_position") int id_position, @RequestParam(value = "username", required = false) String username, @RequestParam("salary") float salary,
			@RequestParam("bank_number") String bank_number, @RequestParam("payment") String payment, @RequestParam("date_begin") String date_begin, 
			@RequestParam("date_end") String date_end, Model model) throws UnsupportedEncodingException {
		int id_contract = getNewID();
    	if(username!=""&&id_staff!=null&&!checkExistStaff(id_staff)) {
    		int staffID = id_staff.intValue();
    		Staff staff = staffService.getStaffByID(staffID);
    		contractService.editContract(staff.getId_contract(), name_staff, identity_card, identity_date, identity_place, date_of_birth, phone, 
    				email, nationality, certificate, payment, address, country, gender, bank_name, bank_number, date_begin, date_end, salary, 
    				id_position);
    		staffService.editStaff(staffID, name_staff, identity_card, date_of_birth, phone, email, address, certificate, country, gender, 
    				bank_name, bank_number, id_position, username);
    		String message = "Sửa thông tin thành công!";
        	String encodedMessage = URLEncoder.encode(message, "UTF-8");
    		model.addAttribute("message", encodedMessage);
        	return "redirect:adminShowAllStaff?message=" + encodedMessage;
    	}
    	else if (username==""&&id_staff!=null&&!checkExistStaff(id_staff)){
    		int staffID = id_staff.intValue();
    		Staff staff = staffService.getStaffByID(staffID);
    		contractService.editContract(staff.getId_contract(), name_staff, identity_card, identity_date, identity_place, date_of_birth, 
    				phone, email, nationality,certificate, payment, address, country, gender, bank_name, bank_number, date_begin, date_end, 
    				salary, id_position);
    		staffService.editStaff(staffID, name_staff, identity_card, date_of_birth, phone, email, address, certificate, country, gender, 
    				bank_name, bank_number, id_position);
    		String message = "Sửa thông tin thành công!";
        	String encodedMessage = URLEncoder.encode(message, "UTF-8");
    		model.addAttribute("message", encodedMessage);
        	return "redirect:adminShowAllStaff?message=" + encodedMessage;
    	}
    	else if (username!=""){
    		contractService.addContract(id_contract, name_staff, identity_card, identity_date, identity_place, date_of_birth, phone, email, 
    				nationality, username, payment, address, country, gender, bank_name, bank_number, date_begin, date_end, salary, 
    				id_position);
    		staffService.addStaff(name_staff, identity_card, date_of_birth, phone, email, address, certificate, country, gender, bank_name, 
    				bank_number, id_contract, id_position, username);
    		String message = "Thêm nhân viên thành công!";
        	String encodedMessage = URLEncoder.encode(message, "UTF-8");
    		model.addAttribute("message", encodedMessage);
        	return "redirect:adminShowAllStaff?message=" + encodedMessage;
    	}
    	else {
    		contractService.addContract(id_contract, name_staff, identity_card, identity_date, identity_place, date_of_birth, phone, email, 
    				nationality, username, payment, address, country, gender, bank_name, bank_number, date_begin, date_end, salary, 
    				id_position);
    		staffService.addStaff(name_staff, identity_card, date_of_birth, phone, email, address, certificate, country, gender, 
    				bank_name, bank_number, id_contract, id_position);
    		String message = "Thêm nhân viên thành công!";
        	String encodedMessage = URLEncoder.encode(message, "UTF-8");
    		model.addAttribute("message", encodedMessage);
        	return "redirect:adminShowAllStaff?message=" + encodedMessage;
    	}
    }
	@RequestMapping(value = "/adminDeleteStaff")
	public String deleteStaff(@RequestParam("id_staff") String id_staff, Model model) throws UnsupportedEncodingException {
		staffService.deleteStaff(id_staff);
		String message = "Xóa nhân viên thành công!";
    	String encodedMessage = URLEncoder.encode(message, "UTF-8");
		model.addAttribute("message", encodedMessage);
		return "redirect:adminShowAllStaff?message=" + encodedMessage;
	}
	
}
