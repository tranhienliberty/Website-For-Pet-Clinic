package com.petshop.Controller;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.petshop.Entity.Bill;
import com.petshop.Entity.BillDetail;
import com.petshop.Entity.Cart;
import com.petshop.Entity.CartItems;
import com.petshop.Service.BillDetailService;
import com.petshop.Service.BillService;
import com.petshop.Service.CartItemsService;
import com.petshop.Service.CartService;
import com.petshop.Service.ProductService;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;


@Controller
public class CartController {
	@Autowired
	private CartItemsService cartItemsService;
	@Autowired 
	private CartService cartService;
	@Autowired
	private BillService billService;
	@Autowired 
	private BillDetailService billDetailService;
	@Autowired
	private ProductService productService;
	
	public int getNewID() {
		return billService.getNewID() + 1;
	}
	@GetMapping (value = "/showCart")
    public String showCart(HttpServletRequest request, Model model) {
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
    		List<CartItems> cartItems = cartItemsService.showAllCartItems(cart.getId_cart());
    		model.addAttribute("cartItems", cartItems);
    		return "customer/cart";
    }
	
	@RequestMapping(value = "/addToCart")
    public String addToCart(HttpServletRequest request,@RequestParam("username") String username, @RequestParam("id_product") int id_product, @RequestParam("count") int count, Model model) throws Exception {
		// Kiểm tra sự tồn tại của cookie userIsLoggedIn
	    boolean isLoggedIn = false;
	    Cookie[] cookies = request.getCookies();
	    if (cookies != null) {
	        for (Cookie cookie : cookies) {
	            if (cookie.getName().equals("userIsLoggedIn")) {
	                isLoggedIn = Boolean.parseBoolean(cookie.getValue());
	                break;
	            }
	        }
	    }
	    if (!isLoggedIn) {
	        return "redirect:/login";
	    }
		
		CartItems cartItems = new CartItems();
        Cart cart = cartService.getCartByUsername(username);
        cartItems.setId_cart(cart.getId_cart());
        cartItems.setId_product(id_product);
        cartItems.setCount(count);
        
        boolean isProductExist = cartItemsService.isProductExistInCart(cart.getId_cart(), id_product);
        
        if (isProductExist) {
            cartItemsService.updateCartItem(cart.getId_cart(), id_product, count);
        } else {
            cartItemsService.addToCart(cartItems);
        }
        return "redirect:/showCart";
    }
	@RequestMapping(value = "/checkOut")
	public String checkOut(@RequestParam("username") String username, @RequestParam("total_amount") double total_amount, @RequestParam("payment_method") String payment_method, Model model) throws Exception {
        Cart cart = cartService.getCartByUsername(username);
        int id = getNewID();
		if (cart != null) {
            Bill bill = new Bill();
            bill.setId_bill(id);
            bill.setId_cart(cart.getId_cart());
            bill.setTotal_amount(total_amount);
            bill.setPayment_status("Đã thanh toán!");
            LocalDateTime currentDateTime = LocalDateTime.now();
            Timestamp timestamp = Timestamp.valueOf(currentDateTime);
            bill.setTime(timestamp);
            bill.setPayment_method(payment_method);
            billService.addBill(bill);
            
            List<CartItems> cartItems = cartItemsService.showAllCartItems(cart.getId_cart());
            for (CartItems cartItem : cartItems) {
               BillDetail billDetail = new BillDetail();
               billDetail.setId_bill(id);
               billDetail.setId_product(cartItem.getId_product());
               billDetail.setQuantity(cartItem.getCount());
               billDetail.setTotal_price(cartItem.getCount()*cartItem.getProduct().getPrice());
               billDetailService.addBillDetail(billDetail);
               productService.updateQuantityProduct(cartItem.getId_product(), cartItem.getCount());
            }
            cartItemsService.deleteAllCartItems(cart.getId_cart());
            
        }
		return "redirect:showCart";
	}
	@RequestMapping(value = "/deleteCartItem")
	public String deleteCartItem (HttpServletRequest request,@RequestParam("username") String username, @RequestParam("id_product") int id_product, Model model) {
		Cart cart = cartService.getCartByUsername(username);
		cartItemsService.deleteCartItem(cart.getId_cart(), id_product);
		return "redirect:showCart";
	}
	@RequestMapping(value = "/updateQuantityCartItem")
	public String updateQuantityCartItem(HttpServletRequest request,@RequestParam("username") String username, @RequestParam("id_product") int id_product, @RequestParam("count") int count) {
		if(count == 0) {
			return "redirect:deleteCartItem?username=" +username +"&id_product=" +id_product;
		}
		Cart cart = cartService.getCartByUsername(username);
		cartItemsService.updateQuantityCartItem(cart.getId_cart(), id_product, count);
		return "redirect:showCart";
	}
	
}
