package com.petshop.Repository;
import com.petshop.Entity.*;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

@Repository
public class ProductRepository {
	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	private class productRowmapper implements RowMapper<Product>{
		public Product mapRow(ResultSet rs, int rowNum) throws SQLException {
			Product product = new Product();
			product.setId_product(rs.getInt("id_product"));
			product.setName_product(rs.getString("name_product"));
			product.setBenefit(rs.getString("benefit"));
			product.setNote(rs.getString("note"));
			product.setProducer(rs.getString("producer"));
			product.setPrice(rs.getDouble("price"));
			product.setImage(rs.getString("image"));
			product.setDeleted(rs.getBoolean("isDeleted"));
			product.setId_animal_type(rs.getInt("id_animal_type"));
			product.setId_product_type(rs.getInt("id_product_type"));
			ProductType pt = new ProductType();
			pt.setId_product_type(rs.getInt("id_product_type"));
			pt.setName_product_type(rs.getString("name_product_type"));
			product.setProductType(pt);
			return product;
		}
	}
	//Show Dog Product
	public List<Product> showDogProduct(){
		String sql = "SELECT p.id_product, p.name_product, p.benefit, p.note, p.producer, p.price, p.image, p.isDeleted, p.id_animal_type, p.id_product_type, pt.name_product_type\r\n"
				+ "FROM product p\r\n"
				+ "JOIN product_type pt ON p.id_product_type = pt.id_product_type\r\n"
				+ "WHERE p.id_animal_type = 1;\r\n"
				+ "";
		return jdbcTemplate.query(sql, new productRowmapper());
	}
		public List<Product> showCategoryProduct(int id_product_type, int id_animal_type){
			String sql = "SELECT p.id_product, p.name_product, p.benefit, p.note, p.producer, p.price, p.image, p.isDeleted, p.id_animal_type, p.id_product_type, pt.name_product_type\r\n"
					+ "FROM product p\r\n"
					+ "JOIN product_type pt ON p.id_product_type = pt.id_product_type\r\n"
					+ "WHERE p.id_animal_type = ? AND pt.id_product_type = ?;";
			return jdbcTemplate.query(sql, new productRowmapper(), id_animal_type, id_product_type);
		}

	//Show Cat Product
	public List<Product> showCatProduct(){
		String sql = "SELECT p.id_product, p.name_product, p.benefit, p.note, p.producer, p.price, p.image, p.isDeleted, p.id_animal_type, p.id_product_type, pt.name_product_type\r\n"
				+ "FROM product p\r\n"
				+ "JOIN product_type pt ON p.id_product_type = pt.id_product_type\r\n"
				+ "WHERE p.id_animal_type = 2;\r\n"
				+ "";
		return jdbcTemplate.query(sql, new productRowmapper());
	}

	public List<Product> searchProduct(String keyword, int id_animal_type) {
	    String sql = "SELECT p.*, pt.name_product_type\r\n"
	    		+ "FROM product p\r\n"
	    		+ "JOIN product_type pt ON p.id_product_type = pt.id_product_type\r\n"
	    		+ "WHERE p.name_product LIKE ? AND p.id_animal_type = ?;\r\n"
	    		+ "";
	    String searchKeyword = "%" + keyword + "%";
	    
	    return jdbcTemplate.query(sql, new productRowmapper(), searchKeyword, id_animal_type);
	}
	public Product getProductByID(long id) {
		String sql = "SELECT p.id_product, p.name_product, p.benefit, p.note, p.producer, p.price, p.image, p.isDeleted, p.id_animal_type, p.id_product_type, pt.name_product_type\r\n"
				+ "FROM product p\r\n"
				+ "JOIN product_type pt ON p.id_product_type = pt.id_product_type\r\n"
				+ "WHERE p.id_product = ?;\r\n"
				+ "";
		return jdbcTemplate.queryForObject(sql, new productRowmapper(), id);
	}
	public List<Product> getRelatedProduct (long id,long id_product_type){
		String sql = "SELECT p.*, pt.name_product_type FROM product p JOIN product_type pt ON p.id_product_type = pt.id_product_type "
					+ "WHERE p.id_product_type = ? AND id_product <> ?";
		return jdbcTemplate.query(sql, new productRowmapper(), id_product_type, id);
	}
	public List<Product> filterProduct(long minPrice, long maxPrice, int id_animal_type){
		String sql = "SELECT p.*, pt.name_product_type "
	            + "FROM product p "
	            + "JOIN product_type pt ON p.id_product_type = pt.id_product_type "
	            + "WHERE p.price >= ? AND p.price <= ? AND p.id_animal_type = ?;";

		return jdbcTemplate.query(sql, new productRowmapper(), minPrice, maxPrice, id_animal_type);
	}
	public List<Product> showProductListByName (String name_product, int id_animal_type){
		    String sql = "SELECT p.*, pt.name_product_type\r\n"
		    		+ "FROM product p\r\n"
		    		+ "JOIN product_type pt ON p.id_product_type = pt.id_product_type\r\n"
		    		+ "WHERE p.name_product LIKE ? AND p.id_animal_type = ?;\r\n"
		    		+ "";
		    String searchKeyword = "%" + name_product + "%";
		    
		    return jdbcTemplate.query(sql, new productRowmapper(), searchKeyword, id_animal_type);
	}
	
}
