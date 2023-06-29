package com.petshop.Entity;

import java.sql.Date;

public class Staff {
	private int id_staff;
	protected String name_staff;
	protected long identity_card;
	protected Date date_of_birth;
	protected String phone;
	protected String email;
	protected String address;
	protected String certificate;
	protected String experience;
	protected long bank_number;
	protected String bank_name;
	protected int id_position;
	protected Position position;
	protected int id_contract;
	protected Contract contract;
	protected String username;
	public int getId_staff() {
		return id_staff;
	}
	public void setId_staff(int id_staff) {
		this.id_staff = id_staff;
	}
	public String getName_staff() {
		return name_staff;
	}
	public void setName_staff(String name_staff) {
		this.name_staff = name_staff;
	}
	public long getIdentity_card() {
		return identity_card;
	}
	public void setIdentity_card(long identity_card) {
		this.identity_card = identity_card;
	}
	public Date getDate_of_birth() {
		return date_of_birth;
	}
	public void setDate_of_birth(Date date_of_birth) {
		this.date_of_birth = date_of_birth;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
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
	public String getCertificate() {
		return certificate;
	}
	public void setCertificate(String certificate) {
		this.certificate = certificate;
	}
	public String getExperience() {
		return experience;
	}
	public void setExperience(String experience) {
		this.experience = experience;
	}
	public long getBank_number() {
		return bank_number;
	}
	public void setBank_number(long bank_number) {
		this.bank_number = bank_number;
	}
	public String getBank_name() {
		return bank_name;
	}
	public void setBank_name(String bank_name) {
		this.bank_name = bank_name;
	}
	public int getId_position() {
		return id_position;
	}
	public void setId_position(int id_position) {
		this.id_position = id_position;
	}
	public int getId_contract() {
		return id_contract;
	}
	public void setId_contract(int id_contract) {
		this.id_contract = id_contract;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public Staff() {
		super();
	}	
	
}
