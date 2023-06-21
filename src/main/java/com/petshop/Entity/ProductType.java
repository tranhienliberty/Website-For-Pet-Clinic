package com.petshop.Entity;

import java.util.List;

public class ProductType {
	private int id_product_type;
	protected String name_product_type;
	protected List<Product> products;
	public ProductType(int id_product_type, String name_product_type) {
		super();
		this.id_product_type = id_product_type;
		this.name_product_type = name_product_type;
	}
	public ProductType() {
		// TODO Auto-generated constructor stub
	}
	public int getId_product_type() {
		return id_product_type;
	}
	public void setId_product_type(int id_product_type) {
		this.id_product_type = id_product_type;
	}
	public String getName_product_type() {
		return name_product_type;
	}
	public void setName_product_type(String name_product_type) {
		this.name_product_type = name_product_type;
	}
	public List<Product> getProducts() {
		return products;
	}
	public void setProducts(List<Product> products) {
		this.products = products;
	}
	@Override
	public String toString() {
		return "product_type [id_product_type=" + id_product_type + ", name_product_type=" + name_product_type + "]";
	}
}

