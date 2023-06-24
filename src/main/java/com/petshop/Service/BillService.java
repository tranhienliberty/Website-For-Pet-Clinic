package com.petshop.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.petshop.Entity.Bill;
import com.petshop.Repository.BillRepository;

@Service
public class BillService {
	@Autowired
	private BillRepository billRepository;

	public void addBill(Bill bill) throws Exception {
		billRepository.addBill(bill);
	}

	public int getNewID() {
		return billRepository.getNewID();
	}
}
