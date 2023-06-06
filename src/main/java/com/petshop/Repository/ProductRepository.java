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
			return product;
		}
	}
	public List<Product> showDogProduct(){
		String sql = "select * from product where id_animal_type = 1";
		return jdbcTemplate.query(sql, new productRowmapper());
	}
	public List<Product> searchProduct(String keyword) {
	    String sql = "SELECT * FROM product WHERE name_product LIKE ?";
	    String searchKeyword = "%" + keyword + "%";
	    
	    return jdbcTemplate.query(sql, new Object[]{searchKeyword}, new productRowmapper());
	}

}
