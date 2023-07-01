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

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;

@Controller
public class BillController {
	@Autowired
	private BillService billService;
	@Autowired
	private BillDetailService billDetailService;
	@Autowired
	private CartService cartService;
	
	@RequestMapping(value = "/showListBillByUser")
	public String showListBillByUser(@RequestParam("delivered") String delivered,
			HttpServletRequest request, Model model) {
		boolean isLoggedIn = false;
	    String username = null;
	    Cookie[] cookies = request.getCookies();
	    if (cookies != null) {
	        for (Cookie cookie : cookies) {
	            if (cookie.getName().equals("userIsLoggedIn")) {
	                isLoggedIn = Boolean.parseBoolean(cookie.getValue());
	            }
	            else if (cookie.getName().equals("userUsername")) {
	                username = cookie.getValue();
	            }
	        }
	    }
	    if (!isLoggedIn) {
	        // Cookie không tồn tại hoặc giá trị là false, chuyển hướng đến trang login
	        return "redirect:/login";
	    }
		Cart cart = cartService.getCartByUsername(username);
		List<Bill> bills =  billService.ListBill(cart.getId_cart(), delivered);
		model.addAttribute("bills", bills);
		if("Chưa giao hàng".equals(delivered)) {
			return "customer/bill-delivering";
		}
		else return "customer/bill-delivered";
	}
	@RequestMapping(value = "/adminShowAllBill")
	public String showAllBill(Model model) {
		List<Bill> bills = billService.showAllBill();
		model.addAttribute("bills", bills);
		return "admin/admin-bill";
	}
	@RequestMapping(value = "/showBillDetail")
	public String adminShowBillDetail(@RequestParam("id_bill") int id_bill, Model model) {
		List<BillDetail> billDetails = billDetailService.adminShowBillInfo(id_bill);
		model.addAttribute("billDetails", billDetails);
		return "admin/admin-bill-detail";
	}
}
