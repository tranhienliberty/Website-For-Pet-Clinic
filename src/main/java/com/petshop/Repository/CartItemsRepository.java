package com.petshop.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import com.petshop.Entity.CartItems;
import com.petshop.Entity.Product;

@Repository
public class CartItemsRepository {
	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	private class cartItemsRowMapper implements RowMapper<CartItems>{
		public CartItems mapRow(ResultSet rs, int rowNum) throws SQLException {
			CartItems cartItems = new CartItems();
			cartItems.setId_cart_item(rs.getInt("id_cart_item"));
			cartItems.setId_cart(rs.getInt("id_cart"));
			cartItems.setId_product(rs.getInt("id_product"));
			Product product = new Product();
			product.setId_product(rs.getInt("id_product"));
			product.setName_product(rs.getString("name_product"));
			product.setImage(rs.getString("image"));
			product.setPrice(rs.getDouble("price"));
			product.setQuantity(rs.getInt("quantity"));
			cartItems.setProduct(product);
			cartItems.setCount(rs.getInt("count"));
			return cartItems;
		}
	}
	private class itemRowMapper implements RowMapper<CartItems>{
		public CartItems mapRow(ResultSet rs, int rowNum) throws SQLException {
			CartItems cartItems = new CartItems();
			cartItems.setId_cart_item(rs.getInt("id_cart_item"));
			cartItems.setId_cart(rs.getInt("id_cart"));
			cartItems.setId_product(rs.getInt("id_product"));
			return cartItems;
		}
	}
	public void addToCart(CartItems cartItems) throws Exception {
		String sql = "INSERT INTO cart_items (id_cart, id_product, count)\r\n"
				+ "VALUES (?, ?, ?);\r\n"
				+ "";
		Object[] params = new Object[] {cartItems.getId_cart(), cartItems.getId_product(), cartItems.getCount()};
		int rs =jdbcTemplate.update(sql, params);
		if(rs!= 1) {
			throw new Exception(); 
		}
	}
	public List<CartItems> showAllCartItems(int id_cart){
		String sql = "SELECT ci.*, p.name_product, p.image, p.price, p.quantity\r\n"
				+ "FROM cart_items ci\r\n"
				+ "JOIN product p ON ci.id_product = p.id_product\r\n"
				+ "WHERE ci.id_cart = ?;\r\n"
				+ "";
		return jdbcTemplate.query(sql, new cartItemsRowMapper(), id_cart);
	}
	public CartItems isProductExistInCart(int id_cart, int id_product) {
		String sql = "SELECT cart_items.* FROM cart_items WHERE id_cart = ? AND id_product = ?";
		try {
	        return jdbcTemplate.queryForObject(sql, new itemRowMapper(), id_cart, id_product);
	    } catch (EmptyResultDataAccessException e) {
	        return null; 
	    }
	}
	public void updateCartItem(int id_cart, int id_product, int count) throws Exception {
		String sql = "UPDATE cart_items\r\n"
				+ "SET count = count + ?\r\n"
				+ "WHERE id_cart = ? AND id_product = ?;";
		Object[] params = new Object[] {count, id_cart, id_product};
		int rs =jdbcTemplate.update(sql, params);
	}
	public void deleteAllCartItems(int id_cart) throws Exception {
		String sql = "DELETE FROM cart_items WHERE id_cart = ?";
		Object[] params = new Object[] {id_cart};
		int rs =jdbcTemplate.update(sql, params);
	}
	public void deleteCartItem(int id_cart, int id_product) {
		String sql = "DELETE FROM cart_items WHERE id_cart = ? AND id_product = ?";
		Object[] params = new Object[] {id_cart, id_product};
		int rs =jdbcTemplate.update(sql, params);
	}
	public void updateQuantityCartItem(int id_cart, int id_product, int count) {
		String sql = "UPDATE cart_items\r\n"
				+ "SET count = ?\r\n"
				+ "WHERE id_cart = ? AND id_product = ?;";
		Object[] params = new Object[] {count, id_cart, id_product};
		int rs =jdbcTemplate.update(sql, params);
	}
	
}
