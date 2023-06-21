package com.petshop.Entity;

import java.sql.Date;

public class Blog {
	private int id_blog;
	protected Date created_date;
	protected String title;
	protected String image;
	protected String content;
	protected int id_animal_type;
	protected boolean isDeleted;
	protected AnimalType animalType;
	public int getId_blog() {
		return id_blog;
	}
	public void setId_blog(int id_blog) {
		this.id_blog = id_blog;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	public Date getCreated_date() {
		return created_date;
	}
	public void setCreated_date(Date created_date) {
		this.created_date = created_date;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public int getId_animal_type() {
		return id_animal_type;
	}
	public void setId_animal_type(int id_animal_type) {
		this.id_animal_type = id_animal_type;
	}
	public boolean isDeleted() {
		return isDeleted;
	}
	public void setDeleted(boolean isDeleted) {
		this.isDeleted = isDeleted;
	}
	public AnimalType getAnimalType() {
		return animalType;
	}
	public void setAnimalType(AnimalType animalType) {
		this.animalType = animalType;
	}
	@Override
	public String toString() {
		return "Blog [id_blog=" + id_blog + ", created_date=" + created_date + ", title=" + title + ", image=" + image
				+ ", content=" + content + ", id_animal_type=" + id_animal_type + ", isDeleted=" + isDeleted
				+ ", animalType=" + animalType + "]";
	}
	
}
