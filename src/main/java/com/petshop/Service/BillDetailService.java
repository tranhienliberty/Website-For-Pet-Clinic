package com.petshop.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.petshop.Entity.BillDetail;
import com.petshop.Repository.BillDetailRepository;

@Service
public class BillDetailService {
	@Autowired
	private BillDetailRepository billDetailRepository;

	public void addBillDetail(BillDetail billDetail) throws Exception {
		billDetailRepository.addBillDetail(billDetail);
	}
	
}
