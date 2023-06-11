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
			product.setId_product_type(rs.getInt("id_product_type"));
			return product;
		}
	}
	//Show Dog Product
	public List<Product> showDogProduct(){
		String sql = "select * from product where id_animal_type = 1";
		return jdbcTemplate.query(sql, new productRowmapper());
	}
	public List<Product> showDogFood(){
		String sql = "select * from product where id_product_type = 1";
		return jdbcTemplate.query(sql, new productRowmapper());
	}
	public List<Product> showDogPate(){
		String sql = "select * from product where id_product_type = 2";
		return jdbcTemplate.query(sql, new productRowmapper());
	}
	public List<Product> showDogCatBowl(){
		String sql = "select * from product where id_product_type = 3";
		return jdbcTemplate.query(sql, new productRowmapper());
	}
	public List<Product> showDogNeck(){
		String sql = "select * from product where id_product_type = 4";
		return jdbcTemplate.query(sql, new productRowmapper());
	}
	public List<Product> showDogState(){
		String sql = "select * from product where id_product_type = 5";
		return jdbcTemplate.query(sql, new productRowmapper());
	}
	public List<Product> showDogCare(){
		String sql = "select * from product where id_product_type = 6";
		return jdbcTemplate.query(sql, new productRowmapper());
	}
	public List<Product> showDogStyle(){
		String sql = "select * from product where id_product_type = 7";
		return jdbcTemplate.query(sql, new productRowmapper());
	}
	public List<Product> showDogPlay(){
		String sql = "select * from product where id_product_type = 8";
		return jdbcTemplate.query(sql, new productRowmapper());
	}
	public List<Product> showDogHealth(){
		String sql = "select * from product where id_product_type = 9";
		return jdbcTemplate.query(sql, new productRowmapper());
	}
	//Show Cat Product
	public List<Product> showCatProduct(){
		String sql = "select * from product where id_animal_type = 2";
		return jdbcTemplate.query(sql, new productRowmapper());
	}
	public List<Product> showCatFood(){
		String sql = "select * from product where id_product_type = 10";
		return jdbcTemplate.query(sql, new productRowmapper());
	}
	public List<Product> showCatPate(){
		String sql = "select * from product where id_product_type = 11";
		return jdbcTemplate.query(sql, new productRowmapper());
	}
	public List<Product> showCatLitter(){
		String sql = "select * from product where id_product_type = 12";
		return jdbcTemplate.query(sql, new productRowmapper());
	}
	public List<Product> showCatBowl(){
		String sql = "select * from product where id_product_type = 13";
		return jdbcTemplate.query(sql, new productRowmapper());
	}
	public List<Product> showCatCare(){
		String sql = "select * from product where id_product_type = 14";
		return jdbcTemplate.query(sql, new productRowmapper());
	}
	public List<Product> showCatState(){
		String sql = "select * from product where id_product_type = 15";
		return jdbcTemplate.query(sql, new productRowmapper());
	}
	public List<Product> showCatStyle(){
		String sql = "select * from product where id_product_type = 16";
		return jdbcTemplate.query(sql, new productRowmapper());
	}
	public List<Product> showCatPlay(){
		String sql = "select * from product where id_product_type = 17";
		return jdbcTemplate.query(sql, new productRowmapper());
	}
	public List<Product> showCatHealth(){
		String sql = "select * from product where id_product_type = 18";
		return jdbcTemplate.query(sql, new productRowmapper());
	}
	public List<Product> searchProduct(String keyword) {
	    String sql = "SELECT * FROM product WHERE name_product LIKE ?";
	    String searchKeyword = "%" + keyword + "%";
	    
	    return jdbcTemplate.query(sql, new productRowmapper(), searchKeyword);
	}
	public Product getProductByID(long id) {
		String sql = "select * from product where id_product = ?";
		return jdbcTemplate.queryForObject(sql, new productRowmapper(), id);
	}
	public List<Product> getRelatedProduct (long id,long id_product_type){
		String sql = "SELECT p.*, pt.name_product_type FROM product p JOIN product_type pt ON p.id_product_type = pt.id_product_type "
					+ "WHERE p.id_product_type = ? AND id_product <> ?";
		return jdbcTemplate.query(sql, new productRowmapper(), id_product_type, id);
	}
	public List<Product> filterProduct(long minPrice, long maxPrice){
		String sql = "SELECT *\r\n"
				+ "FROM product\r\n"
				+ "WHERE price >= ? AND price <= ?;";
		return jdbcTemplate.query(sql, new productRowmapper(), minPrice, maxPrice);
	}
}
