package com.petshop.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.petshop.Entity.Contract;
import com.petshop.Repository.ContractRepository;

@Service
public class ContractService {
	@Autowired
	private ContractRepository contractRepository;

	public Contract getContractByStaff(int id_contract) {
		return contractRepository.getContractByStaff(id_contract);
	}
	
	public int getNewID() {
		return contractRepository.getNewID();
	}
	
	public void addContract(int id_contract, String name, String identity_card, String identity_date, String identity_place, 
			String date_of_birth, String phone, String email, String nationality, String graduate, String payment, 
			String address, String country, String gender, String bank_name, String bank_number,
			String date_begin, String date_end, float salary, int id_position) {
		contractRepository.addContract(id_contract, name, identity_card, identity_date, identity_place, date_of_birth, phone, email, nationality,
				graduate, payment, address, country, gender, bank_name, bank_number, date_begin, date_end, salary, id_position);
	}
	public void editContract(int id_contract, String name, String identity_card, String identity_date, String identity_place, 
			String date_of_birth, String phone, String email, String nationality, String graduate, String payment, 
			String address, String country, String gender, String bank_name, String bank_number, 
			String date_begin, String date_end, float salary, int id_position) {
		contractRepository.editContract(id_contract, name, identity_card, identity_date, identity_place, date_of_birth, phone, email, nationality,
				graduate, payment, address, country, gender, bank_name, bank_number, date_begin, date_end, salary, id_position);
	}
	
}
