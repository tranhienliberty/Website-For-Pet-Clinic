package com.petshop.Entity;

import java.sql.Date;
import java.sql.Timestamp;

public class Contract {
	private int id_contract;
	protected String name;
	protected Date date_of_birth;
	protected String nationality;
	protected String gender;
	protected String country;
	protected String address;
	protected String identity_card;
	protected Date identity_date;
	protected String identity_place;
	protected String phone;
	protected String email;
	protected String graduate;
	protected String payment;
	protected Timestamp date_sign;
	protected Date date_begin;
	protected Date date_end;
	protected float salary;
	protected String bank_number;
	protected String bank_name;
	protected int id_position;
	protected Position position;
	public int getId_contract() {
		return id_contract;
	}
	public void setId_contract(int id_contract) {
		this.id_contract = id_contract;
	}
	public Timestamp getDate_sign() {
		return date_sign;
	}
	public void setDate_sign(Timestamp date_sign) {
		this.date_sign = date_sign;
	}
	public Date getDate_begin() {
		return date_begin;
	}
	public void setDate_begin(Date date_begin) {
		this.date_begin = date_begin;
	}
	public Date getDate_end() {
		return date_end;
	}
	public void setDate_end(Date date_end) {
		this.date_end = date_end;
	}
	public float getSalary() {
		return salary;
	}
	public void setSalary(float salary) {
		this.salary = salary;
	}
	public String getBank_number() {
		return bank_number;
	}
	public void setBank_number(String bank_number) {
		this.bank_number = bank_number;
	}
	public String getBank_name() {
		return bank_name;
	}
	public void setBank_name(String bank_name) {
		this.bank_name = bank_name;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Date getDate_of_birth() {
		return date_of_birth;
	}
	public void setDate_of_birth(Date date_of_birth) {
		this.date_of_birth = date_of_birth;
	}
	public String getNationality() {
		return nationality;
	}
	public void setNationality(String nationality) {
		this.nationality = nationality;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getIdentity_card() {
		return identity_card;
	}
	public void setIdentity_card(String identity_card) {
		this.identity_card = identity_card;
	}
	public Date getIdentity_date() {
		return identity_date;
	}
	public void setIdentity_date(Date identity_date) {
		this.identity_date = identity_date;
	}
	public String getIdentity_place() {
		return identity_place;
	}
	public void setIdentity_place(String identity_place) {
		this.identity_place = identity_place;
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
	public String getGraduate() {
		return graduate;
	}
	public void setGraduate(String graduate) {
		this.graduate = graduate;
	}
	public String getPayment() {
		return payment;
	}
	public void setPayment(String payment) {
		this.payment = payment;
	}
	public int getId_position() {
		return id_position;
	}
	public void setId_position(int id_position) {
		this.id_position = id_position;
	}
	public Position getPosition() {
		return position;
	}
	public void setPosition(Position position) {
		this.position = position;
	}
	public Contract() {
		super();
	}
}
