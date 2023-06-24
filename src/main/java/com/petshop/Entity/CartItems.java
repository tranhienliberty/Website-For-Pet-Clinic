package com.petshop.Entity;

public class CartItems {
	private int id_cart_item;
	protected int id_cart;
	protected int id_product;
	protected Product product;
	protected int count;
	public int getId_cart_item() {
		return id_cart_item;
	}
	public void setId_cart_item(int id_cart_item) {
		this.id_cart_item = id_cart_item;
	}
	public int getId_cart() {
		return id_cart;
	}
	public void setId_cart(int id_cart) {
		this.id_cart = id_cart;
	}
	public int getId_product() {
		return id_product;
	}
	public void setId_product(int id_product) {
		this.id_product = id_product;
	}
	public Product getProduct() {
		return product;
	}
	public void setProduct(Product product) {
		this.product = product;
	}
	public int getCount() {
		return count;
	}
	public void setCount(int count) {
		this.count = count;
	}
	
}
