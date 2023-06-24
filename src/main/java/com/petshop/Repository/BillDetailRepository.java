package com.petshop.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import com.petshop.Entity.Bill;
import com.petshop.Entity.BillDetail;

@Repository
public class BillDetailRepository {
	@Autowired
	private JdbcTemplate jdbcTemplate;

	private class billDetailRowmapper implements RowMapper<BillDetail>{
		public BillDetail mapRow(ResultSet rs, int rowNum) throws SQLException {
			BillDetail billDetail = new BillDetail();
			billDetail.setId_bill_detail(rs.getInt("id_bill_detail"));
			billDetail.setId_bill(rs.getInt("id_bill"));
			billDetail.setId_product(rs.getInt("id_product"));
			billDetail.setQuantity(rs.getInt("quantity"));
			billDetail.setTotal_price(rs.getDouble("total_price"));
			return billDetail;
		}
	}
	
	public void addBillDetail(BillDetail billDetail) throws Exception {
			String sql = "INSERT INTO bill_detail (id_bill, id_product, quantity, total_price)\r\n"
					+ "VALUES (?, ?, ?, ?);\r\n"
					+ "";
			Object[] params = new Object[] {billDetail.getId_bill(), billDetail.getId_product(), billDetail.getQuantity(), billDetail.getTotal_price()};
			int rs =jdbcTemplate.update(sql, params);
			if(rs!= 1) {
				throw new Exception(); 
			}
	}
}
