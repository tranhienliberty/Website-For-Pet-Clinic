package com.petshop.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import com.petshop.Entity.Bill;
import com.petshop.Entity.BillDetail;
import com.petshop.Entity.Product;
import com.petshop.Entity.ProductType;

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
	
	private class billDetailProductRowmapper implements RowMapper<BillDetail>{
		public BillDetail mapRow(ResultSet rs, int rowNum) throws SQLException {
			BillDetail billDetail = new BillDetail();
			billDetail.setId_bill_detail(rs.getInt("id_bill_detail"));
			billDetail.setId_bill(rs.getInt("id_bill"));
			billDetail.setId_product(rs.getInt("id_product"));
			Product product = new Product();
			product.setId_product(rs.getInt("id_product"));
			product.setName_product(rs.getString("name_product"));
			product.setPrice(rs.getDouble("price"));
			product.setId_product_type(rs.getInt("id_product_type"));
			ProductType pt = new ProductType();
			pt.setId_product_type(rs.getInt("id_product_type"));
			pt.setName_product_type(rs.getString("name_product_type"));
			product.setProductType(pt);
			billDetail.setProduct(product);
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

	public List <BillDetail> showBillInfo(int id_bill) {
		String sql = "SELECT * FROM bill_detail WHERE id_bill = ?";
		return jdbcTemplate.query(sql, new billDetailRowmapper(), id_bill);
	}
	
	public List<BillDetail> adminShowBillInfo(int id_bill) {
		String sql = "SELECT bill_detail.*, product.id_product_type, product.name_product, product.price, product_type.name_product_type\r\n"
				+ "FROM bill_detail\r\n"
				+ "JOIN product ON bill_detail.id_product = product.id_product\r\n"
				+ "JOIN product_type ON product.id_product_type = product_type.id_product_type WHERE bill_detail.id_bill = ?;";
		return jdbcTemplate.query(sql, new billDetailProductRowmapper(), id_bill);
	}


}
