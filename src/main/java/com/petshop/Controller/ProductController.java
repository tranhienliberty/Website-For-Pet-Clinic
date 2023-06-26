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

import com.petshop.Entity.AnimalType;
import com.petshop.Entity.Product;
import com.petshop.Entity.ProductType;
import com.petshop.Service.AnimalTypeService;
import com.petshop.Service.ProductService;

import jakarta.annotation.PostConstruct;

@Controller
public class ProductController implements ApplicationContextAware {
	@Autowired
	private ProductService productService;
	@Autowired
	private AnimalTypeService animalTypeService;
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
    
    @RequestMapping(value = "/showAllAnimalType")
    public String showAllTypeAnimal(Model model) {
    	List<AnimalType> pt = animalTypeService.showAllAnimalType();
    	model.addAttribute("animalTypes", pt);
    	return "admin/admin-product";
    }
    
    @RequestMapping(value = "/showDogProduct")
    public String showDogProduct(Model model) {
        List<Product> dogProducts = productService.showDogProduct();
        int id_animal_type = dogProducts.get(0).getId_animal_type();
        List<ProductType> pt = productService.showProductType(id_animal_type);
        model.addAttribute("id_animal_type", id_animal_type);
        model.addAttribute("dogProductList", dogProducts);
        model.addAttribute("productTypeList", pt);
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
    
    @RequestMapping(value = "/showCategoryProduct")
    public String showCategoryProduct(@RequestParam("id_animal_type") int id_animal_type, @RequestParam("id_product_type") int id_product_type,Model model) {
    	List<Product> categoryProduct = productService.showCategoryProduct(id_product_type,id_animal_type);
    	model.addAttribute("id_animal_type", id_animal_type);
    	model.addAttribute("categoryProduct", categoryProduct);
    	if(id_animal_type == 1) return "customer/shopfordog";
    	else return "customer/shopforcat";
    }
    @RequestMapping(value = "/filterProduct{id_animal_type}")
    public String filterProduct(@RequestParam("minPrice") long minPrice, @RequestParam("maxPrice") long maxPrice, @PathVariable("id_animal_type") int id_animal_type, Model model) {
    	List<Product> products = productService.filterProduct(minPrice, maxPrice, id_animal_type);
    	model.addAttribute("id_animal_type", id_animal_type);
    	model.addAttribute("filteredProduct", products);
    	if(id_animal_type == 1) return "customer/shopfordog";
    	else return "customer/shopforcat";
    }
    @RequestMapping(value = "searchProduct")
	public String searchProduct(@RequestParam("keyword") String keyword, @RequestParam("id_animal_type") int id_animal_type, Model model) {
		List<Product> products = productService.searchProduct(keyword, id_animal_type);
		model.addAttribute("id_animal_type", id_animal_type);
		model.addAttribute("dogProductList", products);
		if(id_animal_type == 1) return "customer/shopfordog";
    	else return "customer/shopforcat";
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
    @RequestMapping(value = "/showProductListByName")
    public String showProductListByName(@RequestParam("name_product") String name_product, @RequestParam("id_animal_type") int id_animal_type, Model model){
    	List<Product> products = productService.showProductListByName(name_product, id_animal_type);
    	model.addAttribute("id_animal_type", id_animal_type);
    	model.addAttribute("ProductListByName", products);
    	if(id_animal_type == 1) return "customer/shopfordog";
    	else return "customer/shopforcat";
    }
    //Viết lại các hàm chung của chó mèo như search, filter thêm id_animal_type để chia shop chó mèo, nếu là return shopfordog, là 2 return shopforcat
}


