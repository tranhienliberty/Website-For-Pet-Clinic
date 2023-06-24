package com.petshop.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import com.petshop.Entity.AnimalType;
import com.petshop.Entity.Cart;

@Repository
public class CartRepository {
	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	private class cartRowMapper implements RowMapper<Cart> {
        public Cart mapRow(ResultSet rs, int rowNum) throws SQLException {
        	Cart cart = new Cart();
        	cart.setId_cart(rs.getInt("id_cart"));
        	cart.setUsername(rs.getString("username"));
            return cart;
        }
    }
	public Cart getCartByUsername(String username) {
		String sql = "SELECT * FROM cart WHERE username = ?";
		return jdbcTemplate.queryForObject(sql, new cartRowMapper(), username);
	}
}
