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
import com.petshop.Service.ProductTypeService;

import jakarta.annotation.PostConstruct;

@Controller
public class ProductController implements ApplicationContextAware {
	@Autowired
	private ProductService productService;
	@Autowired
	private AnimalTypeService animalTypeService;
	@Autowired
	private ProductTypeService productTypeService;
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
		System.out.print(products.get(0).getName_product());
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
    
    //ADMIN
    @RequestMapping(value = "/adminShowAllProduct")
    public String showAllProduct(Model model) {
    	List<Product> products = productService.showAllProduct();
    	List<ProductType> pt = productTypeService.showAllProductType();
    	model.addAttribute("productTypes", pt);
    	model.addAttribute("products", products);
    	return "admin/admin-product";
    }
    
    @RequestMapping(value = "/adminShowProductByProducType")
    public String showProductByProductType(@RequestParam("id_product_type") int id_product_type, Model model) {
		List<Product> products = productService.showProductByProductType(id_product_type);
		List<ProductType> pt = productTypeService.showAllProductType();
    	model.addAttribute("productTypes", pt);
		model.addAttribute("listByProductType", products);
		return "admin/admin-product";
	}
    
    @RequestMapping(value = "/showFormProductInfo")
    public String showFormProductInfo(@RequestParam(value = "id_product", required = false) Integer id_product, Model model) {
    	if (id_product != null) {
    		int productID = id_product.intValue();
    		Product product = productService.getProductByID(productID);
    		List<ProductType> pt = productTypeService.showAllProductType();
    		List<AnimalType> at = animalTypeService.showAllAnimalType();
    		model.addAttribute("animal_type", at);
        	model.addAttribute("product_type", pt);
    		model.addAttribute("product", product);
    		return "admin/admin-product-edit";
    	}
    	List<ProductType> pt = productTypeService.showAllProductType();
		List<AnimalType> at = animalTypeService.showAllAnimalType();
		model.addAttribute("animal_type", at);
    	model.addAttribute("product_type", pt);
    	return "admin/admin-product-edit";
    }
    @RequestMapping(value = "adminEditProduct")
    public String editProduct(@RequestParam(value = "id_product", required = false) Integer id_product, @RequestParam("name_product") String name_product, @RequestParam("benefit") String benefit, 
    		@RequestParam("note") String note, @RequestParam("producer") String producer, @RequestParam("price") float price, 
    		@RequestParam("quantity") int quantity,@RequestParam("image") String image, @RequestParam("id_animal_type") int id_animal_type, 
    		@RequestParam("id_product_type") int id_product_type) {
    	if(id_product!=null) {
    		int productID = id_product.intValue();
    		productService.editProduct(productID, name_product, benefit, note, producer, price, quantity, image, id_animal_type, id_product_type);
        	return "redirect:adminShowAllProduct";
    	}
    	else {
        	productService.addProduct(name_product, benefit, note, producer, price, quantity, image, id_animal_type, id_product_type);
        	return "redirect:adminShowAllProduct";
    	}
    }
    @RequestMapping(value = "/adminDeleteProduct")
    public String deleteProduct(@RequestParam("id_product") int id_product) {
    	productService.deleteProduct(id_product);
    	return "redirect:adminShowAllProduct";
    }
}


