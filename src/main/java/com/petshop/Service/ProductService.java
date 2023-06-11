package com.petshop.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.petshop.Entity.Product;
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
	public List<Product> searchProduct (String keyword){
		return productRepository.searchProduct(keyword);
	}
	public Product getProductByID (long id){
		return productRepository.getProductByID(id);
	}
	public List<Product> getRelatedProduct(long id, long id_product_type){
		return productRepository.getRelatedProduct(id, id_product_type);
	}
	public List<Product> filterProduct(long minPrice, long maxPrice){
		return productRepository.filterProduct(minPrice, maxPrice);
	}
}
