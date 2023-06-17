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
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
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
        int id_animal_type = dogProducts.get(0).getId_animal_type();
        model.addAttribute("id_animal_type", id_animal_type);
        model.addAttribute("dogProductList", dogProducts);
        return "customer/shopfordog";
    }
    @RequestMapping(value = "/showCatProduct")
    public String showCatProduct(Model model) {
        List<Product> catProducts = productService.showCatProduct();
        int id_animal_type = catProducts.get(0).getId_animal_type();
        model.addAttribute("id_animal_type", id_animal_type);
        model.addAttribute("catProductList", catProducts);
        return "customer/shopforcat";
    }

    @RequestMapping(value = "/filterProduct")
    public String filterProduct(@RequestParam("minPrice") long minPrice, @RequestParam("maxPrice") long maxPrice, @RequestParam("id_animal_type") int id_animal_type, Model model) {
    	List<Product> products = productService.filterProduct(minPrice, maxPrice, id_animal_type);
    	model.addAttribute("id_animal_type", id_animal_type);
    	model.addAttribute("filteredProduct", products);
    	return "customer/shopfordog";
    }
    @RequestMapping(value = "searchProduct")
	public String searchProduct(@RequestParam("keyword") String keyword, @RequestParam("id_animal_type") int id_animal_type, Model model) {
		List<Product> products = productService.searchProduct(keyword, id_animal_type);
		model.addAttribute("id_animal_type", id_animal_type);
		model.addAttribute("dogProductList", products);
		return "customer/shopfordog";
	}
    
    @RequestMapping(value = "/showProductDetail{id_product}")
    public String showProductDetail (@PathVariable("id_product") long id, Model model) {
    	Product product = productService.getProductByID(id);
    	// Lấy id_product_type của sản phẩm hiện tại
        long id_product_type = product.getId_product_type();
    	List<Product> relatedProducts = productService.getRelatedProduct(id, id_product_type);
    	model.addAttribute("productByID", product);
    	model.addAttribute("relatedProduct", relatedProducts);
    	return "customer/product-detail";
    }
    //Viết lại các hàm chung của chó mèo như search, filter thêm id_animal_type để chia shop chó mèo, nếu là return shopfordog, là 2 return shopforcat
}


