package com.petshop.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.petshop.Entity.Product;
import com.petshop.Service.ProductService;

@Controller
public class HomeController {
	@Autowired
	private ProductService productService;
	
    @RequestMapping("/")
    public String home( Model model) {
        // Xử lý logic và trả về tên của view để hiển thị
    	List<Product> productDogLimit = productService.showLimitProduct(1);
    	List<Product> productCatLimit = productService.showLimitProduct(2);
    	model.addAttribute("productDogLimit", productDogLimit);
    	model.addAttribute("productCatLimit", productCatLimit);
        return "customer/index";
    }
    @RequestMapping(value = "/adminHome")
    public String adminHome( Model model) {
    	return "admin/admin-home";
    }
}
