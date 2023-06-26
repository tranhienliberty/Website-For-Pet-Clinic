package com.petshop.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import com.petshop.Entity.Bill;
import com.petshop.Entity.CartItems;
import com.petshop.Entity.Product;

@Repository
public class BillRepository {
	@Autowired
	private JdbcTemplate jdbcTemplate;
	private class billRowmapper implements RowMapper<Bill>{
		public Bill mapRow(ResultSet rs, int rowNum) throws SQLException {
			Bill bill = new Bill();
			bill.setId_bill(rs.getInt("id_bill"));
			bill.setTotal_amount(rs.getDouble("total_amount"));
			bill.setPayment_status(rs.getString("payment_status"));
			bill.setId_cart(rs.getInt("id_cart"));
			bill.setTime(rs.getTimestamp("time"));
			bill.setPayment_method(rs.getString("payment_method"));
			bill.setDelivered(rs.getString("delivered"));
			return bill;
		}
	}
	public void addBill(Bill bill) throws Exception {
		String sql = "INSERT INTO bill (id_bill, total_amount, payment_status, id_cart, time, payment_method,delivered)\r\n"
				+ "VALUES (?, ?, ?, ?, ?, ?, ?);\r\n"
				+ "";
		Object[] params = new Object[] {bill.getId_bill(), bill.getTotal_amount(), bill.getPayment_status(), bill.getId_cart(), bill.getTime(), bill.getPayment_method(), bill.getDelivered()};
		int rs =jdbcTemplate.update(sql, params);
		if(rs!= 1) {
			throw new Exception(); 
		}
	}
	public int getNewID() {
		String sql = "SELECT MAX(ID_BILL) FROM BILL";
		Integer id = jdbcTemplate.queryForObject(sql, Integer.class);
		if(id == null) {
			id = 0;
		}
		return id;
	}
	public List<Bill> ListBillDelivered(int id_cart, String delivered) {
		String sql = "SELECT * FROM bill WHERE id_cart = ? AND delivered = ?";
		return jdbcTemplate.query(sql, new billRowmapper(), id_cart, delivered);
	}
}
