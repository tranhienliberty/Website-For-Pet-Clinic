package com.petshop.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.petshop.Entity.Product;
import com.petshop.Entity.ProductType;
import com.petshop.Repository.ProductRepository;

@Service
public class ProductService {
	@Autowired
	private ProductRepository productRepository;
	public List<Product> showDogProduct() {
		return productRepository.showDogProduct();
	}
	public List<Product> showCatProduct(){
		return productRepository.showCatProduct();
	}
	public List<Product> showCategoryProduct(int id_product_type, int id_animal_type){
		return productRepository.showCategoryProduct(id_product_type, id_animal_type);
	}
	public List<Product> searchProduct (String keyword, int id_animal_type){
		return productRepository.searchProduct(keyword, id_animal_type);
	}
//	public List<Product> searchProduct (String keyword){
//		return productRepository.searchProduct(keyword);
//	}
	public Product getProductByID (long id){
		return productRepository.getProductByID(id);
	}
	public List<Product> getRelatedProduct(long id, long id_product_type){
		return productRepository.getRelatedProduct(id, id_product_type);
	}
	public List<Product> filterProduct(long minPrice, long maxPrice, int id_animal_type){
		return productRepository.filterProduct(minPrice, maxPrice, id_animal_type);
	}
	public List<Product> showProductListByName(String name_product, int id_animal_type) {
		return productRepository.showProductListByName(name_product, id_animal_type);
	}
}
