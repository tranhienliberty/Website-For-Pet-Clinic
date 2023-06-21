package com.petshop.Entity;

import java.sql.Timestamp;

public class Appointment {
	private int id_appointment;
	protected String name;
	protected int phone;
	protected Timestamp appointment_date;
	protected String email;
	protected String note;
	protected String token;
	protected String information;
	protected String appointment_status;
	protected Service service;
	protected AnimalType animalType;
	protected boolean isDeleted;
	public int getId_appointment() {
		return id_appointment;
	}
	public void setId_appointment(int id_appointment) {
		this.id_appointment = id_appointment;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getPhone() {
		return phone;
	}
	public void setPhone(int phone) {
		this.phone = phone;
	}
	public Timestamp getAppointment_date() {
		return appointment_date;
	}
	public void setAppointment_date(Timestamp appointment_date) {
		this.appointment_date = appointment_date;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getNote() {
		return note;
	}
	public void setNote(String note) {
		this.note = note;
	}
	public String getToken() {
		return token;
	}
	public void setToken(String token) {
		this.token = token;
	}
	public String getInformation() {
		return information;
	}
	public void setInformation(String information) {
		this.information = information;
	}
	public String getAppointment_status() {
		return appointment_status;
	}
	public void setAppointment_status(String appointment_status) {
		this.appointment_status = appointment_status;
	}
	public Service getService() {
		return service;
	}
	public void setService(Service service) {
		this.service = service;
	}
	public AnimalType getAnimalType() {
		return animalType;
	}
	public void setAnimalType(AnimalType animalType) {
		this.animalType = animalType;
	}
	public boolean isDeleted() {
		return isDeleted;
	}
	public void setDeleted(boolean isDeleted) {
		this.isDeleted = isDeleted;
	}
}
