package com.petshop.Entity;

public class BillDetail {
	private int id_bill_detail;
	protected int id_bill;
	protected int id_product;
	protected int quantity;
	protected double total_price;
	protected Bill bill;
	protected Product product;
	public int getId_bill_detail() {
		return id_bill_detail;
	}
	public void setId_bill_detail(int id_bill_detail) {
		this.id_bill_detail = id_bill_detail;
	}
	public int getId_bill() {
		return id_bill;
	}
	public void setId_bill(int id_bill) {
		this.id_bill = id_bill;
	}
	public int getId_product() {
		return id_product;
	}
	public void setId_product(int id_product) {
		this.id_product = id_product;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	public double getTotal_price() {
		return total_price;
	}
	public double setTotal_price(double total_price) {
		return this.total_price = total_price;
	}
	public Bill getBill() {
		return bill;
	}
	public void setBill(Bill bill) {
		this.bill = bill;
	}
	public Product getProduct() {
		return product;
	}
	public void setProduct(Product product) {
		this.product = product;
	}
	
}
