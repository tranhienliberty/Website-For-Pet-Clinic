package com.petshop.Service;

import java.util.List;

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

	public List<Bill> ListBill(int id_cart, String delivered) {
		return billRepository.ListBill(id_cart, delivered);
	}

	public List<Bill> showAllBill() {
		return billRepository.showAllBill();
	}

	public void changeDelivered(int id_bill) {
		billRepository.changeDelivered(id_bill);
	}
}
