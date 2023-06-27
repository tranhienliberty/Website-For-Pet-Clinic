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
	
	private class productExtraRowMapper implements RowMapper<Product>{
		public Product mapRow(ResultSet rs, int rowNum) throws SQLException {
			Product product = new Product();
			product.setId_product(rs.getInt("id_product"));
			product.setName_product(rs.getString("name_product"));
			product.setBenefit(rs.getString("benefit"));
			product.setNote(rs.getString("note"));
			product.setProducer(rs.getString("producer"));
			product.setPrice(rs.getDouble("price"));
			product.setImage(rs.getString("image"));
			product.setQuantity(rs.getInt("quantity"));
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
	private class productRowMapper implements RowMapper<Product>{
		public Product mapRow(ResultSet rs, int rowNum) throws SQLException {
			Product product = new Product();
			product.setId_product(rs.getInt("id_product"));
			product.setName_product(rs.getString("name_product"));
			product.setBenefit(rs.getString("benefit"));
			product.setNote(rs.getString("note"));
			product.setProducer(rs.getString("producer"));
			product.setPrice(rs.getDouble("price"));
			product.setImage(rs.getString("image"));
			product.setQuantity(rs.getInt("quantity"));
			product.setDeleted(rs.getBoolean("isDeleted"));
			product.setId_animal_type(rs.getInt("id_animal_type"));
			product.setId_product_type(rs.getInt("id_product_type"));
			return product;
		}
	}
	//Show Dog Product
	public List<Product> showDogProduct(){
		String sql = "SELECT p.*, pt.name_product_type\r\n"
				+ "FROM product p\r\n"
				+ "JOIN product_type pt ON p.id_product_type = pt.id_product_type\r\n"
				+ "WHERE p.id_animal_type = 1;\r\n"
				+ "";
		return jdbcTemplate.query(sql, new productExtraRowMapper());
	}
	public List<Product> showLimitProduct(int id_animal_type){
		String sql = "SELECT p.*, pt.name_product_type\r\n"
				+ "FROM product p\r\n"
				+ "JOIN product_type pt ON p.id_product_type = pt.id_product_type\r\n"
				+ "WHERE p.id_animal_type = ? ORDER BY RAND() LIMIT 8;\r\n"
				+ "";
		return jdbcTemplate.query(sql, new productExtraRowMapper(), id_animal_type);
	}
		public List<Product> showCategoryProduct(int id_product_type, int id_animal_type){
			String sql = "SELECT p.*, pt.name_product_type\r\n"
					+ "FROM product p\r\n"
					+ "JOIN product_type pt ON p.id_product_type = pt.id_product_type\r\n"
					+ "WHERE p.id_animal_type = ? AND pt.id_product_type = ?;";
			return jdbcTemplate.query(sql, new productExtraRowMapper(), id_animal_type, id_product_type);
		}

	//Show Cat Product
	public List<Product> showCatProduct(){
		String sql = "SELECT p.*, pt.name_product_type\r\n"
				+ "FROM product p\r\n"
				+ "JOIN product_type pt ON p.id_product_type = pt.id_product_type\r\n"
				+ "WHERE p.id_animal_type = 2;\r\n"
				+ "";
		return jdbcTemplate.query(sql, new productExtraRowMapper());
	}

	public List<Product> searchProduct(String keyword, int id_animal_type) {
	    String sql = "SELECT p.*, pt.name_product_type\r\n"
	    		+ "FROM product p\r\n"
	    		+ "JOIN product_type pt ON p.id_product_type = pt.id_product_type\r\n"
	    		+ "WHERE p.name_product LIKE ? AND p.id_animal_type = ?;\r\n"
	    		+ "";
	    String searchKeyword = "%" + keyword + "%";
	    
	    return jdbcTemplate.query(sql, new productExtraRowMapper(), searchKeyword, id_animal_type);
	}
	public Product getProductByID(long id) {
		String sql = "SELECT p.*, pt.name_product_type\r\n"
				+ "FROM product p\r\n"
				+ "JOIN product_type pt ON p.id_product_type = pt.id_product_type\r\n"
				+ "WHERE p.id_product = ?;\r\n"
				+ "";
		return jdbcTemplate.queryForObject(sql, new productExtraRowMapper(), id);
	}
	public List<Product> getRelatedProduct (long id,long id_product_type){
		String sql = "SELECT p.*, pt.name_product_type FROM product p JOIN product_type pt ON p.id_product_type = pt.id_product_type "
					+ "WHERE p.id_product_type = ? AND id_product <> ?";
		return jdbcTemplate.query(sql, new productExtraRowMapper(), id_product_type, id);
	}
	public List<Product> filterProduct(long minPrice, long maxPrice, int id_animal_type){
		String sql = "SELECT p.*, pt.name_product_type "
	            + "FROM product p "
	            + "JOIN product_type pt ON p.id_product_type = pt.id_product_type "
	            + "WHERE p.price >= ? AND p.price <= ? AND p.id_animal_type = ?;";

		return jdbcTemplate.query(sql, new productExtraRowMapper(), minPrice, maxPrice, id_animal_type);
	}
	public List<Product> showProductListByName (String name_product, int id_animal_type){
		    String sql = "SELECT p.*, pt.name_product_type\r\n"
		    		+ "FROM product p\r\n"
		    		+ "JOIN product_type pt ON p.id_product_type = pt.id_product_type\r\n"
		    		+ "WHERE p.name_product LIKE ? AND p.id_animal_type = ?;\r\n"
		    		+ "";
		    String searchKeyword = "%" + name_product + "%";
		    
		    return jdbcTemplate.query(sql, new productExtraRowMapper(), searchKeyword, id_animal_type);
	}
	public void updateQuantityProduct(int id_product, int count) {
		String sql = "UPDATE product SET quantity = quantity - ? WHERE id_product = ?";
		Object[] params = new Object[] {count, id_product};
		int rs = jdbcTemplate.update(sql, params);
	}
	public List<Product> showAllProduct() {
		String sql = "SELECT * FROM product";
		return jdbcTemplate.query(sql, new productRowMapper());
	}
	public void addProduct(String name_product, String benefit, String note, String producer, float price,
			int quantity, String image, int id_animal_type, int id_product_type) {
		String sql = "INSERT INTO appointment(name_product, benefit, note, producer, price, quantity, image, id_animal_type, id_product_type)"
				+ " VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)";
		Object[] params = new Object[] {name_product, benefit, note, producer, price, quantity, image, id_animal_type, id_product_type};
		int rs =jdbcTemplate.update(sql, params);
	}
	public void editProduct(int id_product, String name_product, String benefit, String note, String producer,
			float price, int quantity, String image, int id_animal_type, int id_product_type) {
		String sql = "UPDATE product SET name_product = ?, benefit = ?, note = ?, producer = ?, price = ?, quantity = ?, image = ?, id_animal_type = ?, id_product_type = ?"
				+ "WHERE id_product = ?;";
		Object[] params = new Object[] {name_product, benefit, note, producer, price, quantity, image, id_animal_type, id_product_type, id_product};
		int rs =jdbcTemplate.update(sql, params);
	}
	public void deleteProduct(int id_product) {
		String sql = "DELETE FROM product WHERE id_product = ?";
		Object[] params = new Object[] {id_product};
		int rs =jdbcTemplate.update(sql, params);
	}

}
