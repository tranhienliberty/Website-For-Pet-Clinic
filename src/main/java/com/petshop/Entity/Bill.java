package com.petshop.Entity;

import java.sql.Timestamp;
import java.util.List;

public class Bill {
	private int id_bill;
	protected double total_amount;
	protected String payment_status;
	protected int id_cart;
	protected Cart cart;
	protected Timestamp time;
	protected String payment_method;
	List<BillDetail> billDetail;
	
	
	public int getId_bill() {
		return id_bill;
	}
	public void setId_bill(int id_bill) {
		this.id_bill = id_bill;
	}
	public double getTotal_amount() {
		return total_amount;
	}
	public void setTotal_amount(double total_amount) {
		this.total_amount = total_amount;
	}
	public String getPayment_status() {
		return payment_status;
	}
	public void setPayment_status(String payment_status) {
		this.payment_status = payment_status;
	}
	public int getId_cart() {
		return id_cart;
	}
	public void setId_cart(int id_cart) {
		this.id_cart = id_cart;
	}
	public List<BillDetail> getBillDetail() {
		return billDetail;
	}
	public void setBillDetail(List<BillDetail> billDetail) {
		this.billDetail = billDetail;
	}
	public Cart getCart() {
		return cart;
	}
	public void setCart(Cart cart) {
		this.cart = cart;
	}
	public Timestamp getTime() {
		return time;
	}
	public void setTime(Timestamp time) {
		this.time = time;
	}
	public String getPayment_method() {
		return payment_method;
	}
	public void setPayment_method(String payment_method) {
		this.payment_method = payment_method;
	}
	
}
