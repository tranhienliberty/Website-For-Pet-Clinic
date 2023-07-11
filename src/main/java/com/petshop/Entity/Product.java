package com.petshop.Entity;

import java.util.List;

public class Product {
	private int id_product;
	protected String name_product;
	protected String benefit;
	protected String note;
	protected String producer;
	protected double price;
	protected String image;
	protected int quantity;
	protected boolean is_deleted;
	protected int id_animal_type;
	protected int id_product_type;
	protected ProductType productType;
	protected List<CartItems> cartItems;
	public Product() {
		// TODO Auto-generated constructor stub
	}
	public int getId_product() {
		return id_product;
	}
	public void setId_product(int id_product) {
		this.id_product = id_product;
	}
	public String getName_product() {
		return name_product;
	}
	public void setName_product(String name_product) {
		this.name_product = name_product;
	}
	public String getBenefit() {
		return benefit;
	}
	public void setBenefit(String benefit) {
		this.benefit = benefit;
	}
	public String getNote() {
		return note;
	}
	public void setNote(String note) {
		this.note = note;
	}
	public String getProducer() {
		return producer;
	}
	public void setProducer(String producer) {
		this.producer = producer;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	public boolean isDeleted() {
		return is_deleted;
	}
	public void setDeleted(boolean is_deleted) {
		this.is_deleted = is_deleted;
	}
	public int getId_animal_type() {
		return id_animal_type;
	}
	public void setId_animal_type(int id_animal_type) {
		this.id_animal_type = id_animal_type;
	}
	public int getId_product_type() {
		return id_product_type;
	}
	public void setId_product_type(int id_product_type) {
		this.id_product_type = id_product_type;
	}
	public ProductType getProductType() {
		return productType;
	}
	public void setProductType(ProductType productType) {
		this.productType = productType;
	}
	public List<CartItems> getCartItems() {
		return cartItems;
	}
	public void setCartItems(List<CartItems> cartItems) {
		this.cartItems = cartItems;
	}
	public Product(int id_product, String name_product, double price, String image, int quantity) {
		super();
		this.id_product = id_product;
		this.name_product = name_product;
		this.price = price;
		this.image = image;
		this.quantity = quantity;
	}
}
