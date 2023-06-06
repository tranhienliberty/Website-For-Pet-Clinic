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
	public List<Product> searchProduct (String keyword){
		return productRepository.searchProduct(keyword);
	}
}
