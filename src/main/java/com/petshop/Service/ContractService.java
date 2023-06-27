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
	
	
}
