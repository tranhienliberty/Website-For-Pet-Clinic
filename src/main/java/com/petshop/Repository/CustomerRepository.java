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
        	customer.setPhone(rs.getInt("phone"));
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
}
