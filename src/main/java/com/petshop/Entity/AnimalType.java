package com.petshop.Entity;

import java.util.List;

public class AnimalType {
	private int id_animal_type;
	protected String name_animal_type;
	protected List<Blog> blogs;
	public AnimalType(int id_animal_type, String name_animal_type) {
		super();
		this.id_animal_type = id_animal_type;
		this.name_animal_type = name_animal_type;
	}
	public AnimalType() {
		// TODO Auto-generated constructor stub
	}
	public int getId_animal_type() {
		return id_animal_type;
	}
	public void setId_animal_type(int id_animal_type) {
		this.id_animal_type = id_animal_type;
	}
	public String getName_animal_type() {
		return name_animal_type;
	}
	public void setName_animal_type(String name_animal_type) {
		this.name_animal_type = name_animal_type;
	}
	public List<Blog> getBlogs() {
		return blogs;
	}
	public void setBlogs(List<Blog> blogs) {
		this.blogs = blogs;
	}
	@Override
	public String toString() {
		return "animal_type [id_animal_type=" + id_animal_type + ", name_animal_type=" + name_animal_type + "]";
	}
}
