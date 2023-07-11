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
	public List<Product> showLimitProduct(int id_animal_type){
		return productRepository.showLimitProduct(id_animal_type);
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
	public void updateQuantityProduct(int id_product, int count) {
		productRepository.updateQuantityProduct(id_product, count);
	}
	public List<Product> showAllProduct() {
		return productRepository.showAllProduct();
	}
	public void addProduct(String name_product, String benefit, String note, String producer, float price, int quantity,
			String image, int id_animal_type, int id_product_type) {
		productRepository.addProduct(name_product, benefit, note, producer, price, quantity, image, id_animal_type, id_product_type);
	}
	public void editProduct(int id_product, String name_product, String benefit, String note, String producer,
			float price, int quantity, String image, int id_animal_type, int id_product_type) {
		productRepository.editProduct(id_product, name_product, benefit, note, producer, price, quantity, image, id_animal_type, id_product_type);
	}
	public void deleteProduct(int id_product) {
		productRepository.deleteProduct(id_product);
	}
	public List<Product> showProductByProductType(int id_product_type) {
		return productRepository.showProductByProductType(id_product_type);
	}
	public boolean checkExistProduct(int id_product) {
		int i = productRepository.checkExistProduct(id_product);
		if(i != 0) {
			return false;
		}
		else return true;
	}
	public void updateQuantityProductAgain(int id_product, int quantity) {
		productRepository.updateQuantityProductAgain(id_product, quantity);
	}

}
