package com.petshop.Entity;

import java.util.List;

public class Position {
	private int id_position;
	protected String name_position;
	List<Staff> staff;
	public int getId_position() {
		return id_position;
	}
	public void setId_position(int id_position) {
		this.id_position = id_position;
	}
	public String getName_position() {
		return name_position;
	}
	public void setName_position(String name_position) {
		this.name_position = name_position;
	}
	public List<Staff> getStaff() {
		return staff;
	}
	public void setStaff(List<Staff> staff) {
		this.staff = staff;
	}
	public Position() {
		super();
	}
	
}
