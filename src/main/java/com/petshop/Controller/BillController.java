package com.petshop.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.petshop.Entity.Bill;
import com.petshop.Entity.BillDetail;
import com.petshop.Entity.Cart;
import com.petshop.Service.BillDetailService;
import com.petshop.Service.BillService;
import com.petshop.Service.CartService;

@Controller
public class BillController {
	@Autowired
	private BillService billService;
	@Autowired
	private BillDetailService billDetailService;
	@Autowired
	private CartService cartService;
	
	@RequestMapping(value = "/showListBillByUser")
	public String showListBillByUser(@RequestParam("username") String username, @RequestParam("delivered") String delivered,Model model) {
		Cart cart = cartService.getCartByUsername(username);
		List<Bill> bills =  billService.ListBill(cart.getId_cart(), delivered);
		model.addAttribute("bills", bills);
		if("Chưa giao hàng".equals(delivered)) {
			return "customer/bill-delivering";
		}
		else return "customer/bill-delivered";
	}
	@RequestMapping(value = "/showBillDetail")
	public String showBillDetail(@RequestParam("id_bill") int id_bill, Model model) {
		List<BillDetail> billDetail = billDetailService.showBillInfo(id_bill);
		model.addAttribute("billDetail", billDetail);
		return null;
	}
	@RequestMapping(value = "/adminShowAllBill")
	public String showAllBill(Model model) {
		List<Bill> bills = billService.showAllBill();
		model.addAttribute("bills", bills);
		return null;
	}
}
