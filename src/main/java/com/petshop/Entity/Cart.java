package com.petshop.Entity;

import java.util.List;

public class Cart {
	private int id_cart;
	protected String username;
	protected List<CartItems> cartItems;
	
	public int getId_cart() {
		return id_cart;
	}
	public void setId_cart(int id_cart) {
		this.id_cart = id_cart;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public List<CartItems> getCartItems() {
		return cartItems;
	}
	public void setCartItems(List<CartItems> cartItems) {
		this.cartItems = cartItems;
	}
	
}
