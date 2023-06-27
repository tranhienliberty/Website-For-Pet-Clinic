package com.petshop.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import com.petshop.Entity.ProductType;


@Repository
public class ProductTypeRepository {
	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	private class productTypeRowMapper implements RowMapper<ProductType> {
        public ProductType mapRow(ResultSet rs, int rowNum) throws SQLException {
        	ProductType productType = new ProductType();
        	productType.setId_product_type(rs.getInt("id_product_type"));
        	productType.setName_product_type(rs.getString("name_product_type"));
            return productType;
        }
    }
	public List<ProductType> showAllProductType(int id_animal_type){
		String sql = "select * from product_type where id_animal_type = ?";
		return jdbcTemplate.query(sql, new productTypeRowMapper(), id_animal_type);
	}
}
