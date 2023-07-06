package com.petshop.Controller;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.petshop.Entity.Bill;
import com.petshop.Entity.BillDetail;
import com.petshop.Entity.Cart;
import com.petshop.Entity.CartItems;
import com.petshop.Service.BillDetailService;
import com.petshop.Service.BillService;
import com.petshop.Service.CartService;
import com.petshop.Service.ProductService;

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
	@Autowired 
	private ProductService productService;
	
	@RequestMapping(value = "/showListBillByUser")
	public String showListBillByUser(@RequestParam("delivered") String delivered, @RequestParam(value = "message", required = false) String message,
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
		model.addAttribute("message", message);
		if("Chưa giao hàng".equals(delivered)) {
			List<Bill> bills =  billService.ListBill(cart.getId_cart(), delivered);
			model.addAttribute("bills", bills);
			return "customer/bill-delivering";
		}
		else {
			List<Bill> bills =  billService.HistoryBill(cart.getId_cart(), "Chưa giao hàng");
			model.addAttribute("bills", bills);
			return "customer/bill-delivered";
		}
	}
	@RequestMapping(value = "/showBillDetail")
	public String ShowBillDetail(@RequestParam("id_bill") int id_bill, Model model) {
		List<BillDetail> billDetails = billDetailService.adminShowBillInfo(id_bill);
		model.addAttribute("billDetails", billDetails);
		return "customer/bill-detail";
	}
	@RequestMapping(value = "/deliveredCheck")
	public String deliveredCheck(@RequestParam("id_bill") int id_bill, Model model) throws UnsupportedEncodingException {
		billService.changeDelivered(id_bill);
		String delivered = "Đã giao hàng";
		String encodedDelivered = URLEncoder.encode(delivered, "UTF-8");
		String message = "Nhận hàng thành công!";
		String encodedMessage = URLEncoder.encode(message, "UTF-8");
		model.addAttribute("message", encodedMessage);
		return "redirect:showListBillByUser?delivered=" + encodedDelivered + "&message=" + encodedMessage;
	}
	@RequestMapping(value = "/cancelBill")
	public String cancelBill(@RequestParam("id_bill") int id_bill, Model model) throws UnsupportedEncodingException {
		List<BillDetail> billDetails = billDetailService.showBillInfo(id_bill);
		for (BillDetail billDetail : billDetails) {
			productService.updateQuantityProduct(billDetail.getId_product(), -(billDetail.getQuantity()));
		}
		billService.deleteBill(id_bill);
		String delivered = "Đã giao hàng";
		String message = "Hủy hàng thành công!";
		String encodedMessage = URLEncoder.encode(message, "UTF-8");
		model.addAttribute("message", encodedMessage);
		String encodedDelivered = URLEncoder.encode(delivered, "UTF-8");
		return "redirect:showListBillByUser?delivered=" + encodedDelivered + "&message=" + encodedMessage;
	}
	@RequestMapping(value = "/adminShowAllBill")
	public String showAllBill(Model model) {
		List<Bill> bills = billService.showAllBill();
		model.addAttribute("bills", bills);
		return "admin/admin-bill";
	}
	@RequestMapping(value = "/adminshowBillDetail")
	public String adminShowBillDetail(@RequestParam("id_bill") int id_bill, Model model) {
		List<BillDetail> billDetails = billDetailService.adminShowBillInfo(id_bill);
		model.addAttribute("billDetails", billDetails);
		return "admin/admin-bill-detail";
	}
	@RequestMapping(value = "/adminStatisticByDate")
	public String statisticByDate(@RequestParam("date_begin") String date_begin, @RequestParam("date_end") String date_end,
			Model model) {
		
		return "admin/admin-statistic";
	}
}
