package com.petshop.Entity;

import java.sql.Date;

public class Contract {
	private int id_contract;
	protected Date date_sign;
	protected Date date_begin;
	protected Date date_end;
	protected String job_descript;
	protected float salary;
	public int getId_contract() {
		return id_contract;
	}
	public void setId_contract(int id_contract) {
		this.id_contract = id_contract;
	}
	public Date getDate_sign() {
		return date_sign;
	}
	public void setDate_sign(Date date_sign) {
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
	public String getJob_descript() {
		return job_descript;
	}
	public void setJob_descript(String job_descript) {
		this.job_descript = job_descript;
	}
	public float getSalary() {
		return salary;
	}
	public void setSalary(float salary) {
		this.salary = salary;
	}
	public Contract() {
		super();
	}
}
