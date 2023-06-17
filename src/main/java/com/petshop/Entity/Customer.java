package com.petshop.Entity;

import java.util.Date;

public class Customer {
	private int id_customer;
	protected String name_customer;
	protected Date date_of_birth;
	protected int phone;
	protected String email;
	protected String address;
	protected String username;
	protected int id_appointment;
	protected boolean isDeleted;
	public Customer(int id_customer, String name_customer, Date date_of_birth, int phone, String email, String address, String username,
			int id_appointment, boolean isDeleted) {
		super();
		this.id_customer = id_customer;
		this.name_customer = name_customer;
		this.date_of_birth = date_of_birth;
		this.phone = phone;
		this.email = email;
		this.address = address;
		this.username = username;
		this.id_appointment = id_appointment;
		this.isDeleted = isDeleted;
	}
	public Customer() {
		// TODO Auto-generated constructor stub
	}
	public int getId_customer() {
		return id_customer;
	}
	public void setId_customer(int id_customer) {
		this.id_customer = id_customer;
	}
	public String getName_customer() {
		return name_customer;
	}
	public void setName_customer(String name_customer) {
		this.name_customer = name_customer;
	}
	public Date getDate_of_birth() {
		return date_of_birth;
	}
	public void setDate_of_birth(Date date_of_birth) {
		this.date_of_birth = date_of_birth;
	}
	public int getPhone() {
		return phone;
	}
	public void setPhone(int phone) {
		this.phone = phone;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public int getId_appointment() {
		return id_appointment;
	}
	public void setId_appointment(int id_appointment) {
		this.id_appointment = id_appointment;
	}
	public boolean isDeleted() {
		return isDeleted;
	}
	public void setDeleted(boolean isDeleted) {
		this.isDeleted = isDeleted;
	}
}
