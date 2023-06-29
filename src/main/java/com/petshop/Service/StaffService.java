package com.petshop.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.petshop.Entity.Staff;
import com.petshop.Repository.StaffRepository;

@Service
public class StaffService {
	@Autowired
	private StaffRepository staffRepository;

	public List<Staff> showAllStaff() {
		return staffRepository.showAllStaff();
	}

	public Staff getStaffByID(int id_staff) {
		return staffRepository.getStaffByID(id_staff);
	}

	public void addStaff(String name_staff, String identity_card, String date_of_birth, String phone, String email,
			String address, String certificate, String experience, String bank_name, String bank_number,
			int id_position, int id_contract) {
		staffRepository.addStaff(name_staff, identity_card, date_of_birth, phone, email, address, certificate, experience, bank_name, bank_number, id_position, id_contract);
	}

	public void editStaff(int id_staff, String name_staff, String identity_card, String date_of_birth, String phone,
			String email, String address, String certificate, String experience, String bank_name, String bank_number,
			int id_position, int id_contract) {
		staffRepository.editStaff(id_staff, name_staff, identity_card, date_of_birth, phone, email, address, certificate, experience, bank_name, bank_number, id_position, id_contract);
	}

	public void deleteStaff(String id_staff) {
		staffRepository.deleteStaff(id_staff);
	}
}
