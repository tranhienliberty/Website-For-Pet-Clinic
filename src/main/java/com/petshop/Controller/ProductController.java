package com.petshop.Controller;

import java.util.List;

import org.springframework.beans.BeansException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ExtendedModelMap;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.petshop.Entity.Product;
import com.petshop.Service.ProductService;

import jakarta.annotation.PostConstruct;

@Controller
public class ProductController implements ApplicationContextAware {
	@Autowired
	private ProductService productService;
	@Autowired
    private ApplicationContext applicationContext;

    @Override
    public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
        this.applicationContext = applicationContext;
    }

    @PostConstruct
    public void init() {
        Model model = new ExtendedModelMap();
        showDogProduct(model);
    }

    @RequestMapping(value = "/showDogProduct")
    public String showDogProduct(Model model) {
        List<Product> dogProducts = productService.showDogProduct();
        model.addAttribute("dogProductList", dogProducts);
        return "customer/shopfordog";
    }
    @RequestMapping(value = "/searchProduct")
    public String searchProduct(@RequestParam("keyword")String keyword, Model model) {
    	List<Product> products = productService.searchProduct(keyword);
    	model.addAttribute("productListSearch", products);
    	return "customer/shopfordog";
    }
//    @RequestMapping(value = "/showProductInfo")
//    public String showProductInfo 
}



