package com.petshop.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import com.petshop.Entity.Customer;

@Repository
public class CustomerRepository {
	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	private class customerRowMapper implements RowMapper<Customer> {
        public Customer mapRow(ResultSet rs, int rowNum) throws SQLException {
        	Customer customer = new Customer();
        	customer.setId_customer(rs.getInt("id_customer"));
        	customer.setName_customer(rs.getString("name_customer"));
        	customer.setDate_of_birth(rs.getDate("date_of_birth"));
        	customer.setPhone(rs.getString("phone"));
        	customer.setEmail(rs.getString("email"));
        	customer.setAddress(rs.getString("address"));
        	customer.setUsername(rs.getString("username"));
            return customer;
        }
    }
	public List<Customer> showAllCustomer(){
		String sql = "select * from customer";
		return jdbcTemplate.query(sql, new customerRowMapper());
	}
	public void addCustomer(String name_customer, String date_of_birth, String phone, String email, String address, String username) {
			String sql = "INSERT INTO customer(name_customer, date_of_birth, phone, email, address, username)"
			+ " VALUES(?, ?, ?, ?, ?, ?)";
			Object[] params = new Object[] {name_customer, date_of_birth, phone, email, address, username};
			int rs =jdbcTemplate.update(sql, params);
	}
	public void editCustomer(String username, String name_customer, String date_of_birth, String phone, String email,
			String address) {
		String sql = "UPDATE customer SET name_customer = ?, date_of_birth = ?, phone = ?, email = ?, address = ? "
				+ "WHERE username = ?;";
		Object[] params = new Object[] {name_customer, date_of_birth, phone, email, address, username};
		int rs =jdbcTemplate.update(sql, params);
	}
	public void deleteCustomer(int id_customer) {
		String sql = "DELETE FROM customer WHERE id_customer = ?";
		Object[] params = new Object[] {id_customer};
		int rs =jdbcTemplate.update(sql, params);
		
	}
	public Customer showCustomerInfo(String username) {
		String sql = "SELECT * FROM customer WHERE username = ?";
		return jdbcTemplate.queryForObject(sql, new customerRowMapper(), username);
	}
	public Customer getCustomerByID(int id_customer) {
		String sql = "SELECT * FROM customer WHERE id_customer = ?";
		return jdbcTemplate.queryForObject(sql, new customerRowMapper(), id_customer);
	}
	public int checkExistCustomer(int id_customer) {
		String sql = "SELECT COUNT(*) FROM customer where id_customer = ?";
		return jdbcTemplate.queryForObject(sql, Integer.class, id_customer);
	}
	public void adminEditCustomer(int customerID, String name_customer, String date_of_birth, String phone,
			String email, String address, String username) {
		String sql = "UPDATE customer SET name_customer = ?, date_of_birth = ?, phone = ?, email = ?, address = ?,  username = ? "
				+ "WHERE id_customer = ?;";
		Object[] params = new Object[] {name_customer, date_of_birth, phone, email, address, username, customerID};
		int rs =jdbcTemplate.update(sql, params);
	}
	public void adminEditCustomer(int customerID, String name_customer, String date_of_birth, String phone,
			String email, String address) {
		String sql = "UPDATE customer SET name_customer = ?, date_of_birth = ?, phone = ?, email = ?, address = ?  "
				+ "WHERE id_customer = ?;";
		Object[] params = new Object[] {name_customer, date_of_birth, phone, email, address, customerID};
		int rs =jdbcTemplate.update(sql, params);
	}
	public void addCustomer(String name_customer, String date_of_birth, String phone, String email, String address) {
		String sql = "INSERT INTO customer(name_customer, date_of_birth, phone, email, address)"
				+ " VALUES(?, ?, ?, ?, ?)";
		Object[] params = new Object[] {name_customer, date_of_birth, phone, email, address};
		int rs =jdbcTemplate.update(sql, params);
	}
	public int checkExistCustomerAccount(String username) {
		String sql = "SELECT COUNT(*) FROM customer where username = ?";
		return jdbcTemplate.queryForObject(sql, Integer.class, username);
	}
	
}
