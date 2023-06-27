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
}
