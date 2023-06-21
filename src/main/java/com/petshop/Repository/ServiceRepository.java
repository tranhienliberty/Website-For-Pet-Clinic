package com.petshop.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import com.petshop.Entity.Service;

@Repository
public class ServiceRepository {
	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	private class serviceRowMapper implements RowMapper<Service> {
        public Service mapRow(ResultSet rs, int rowNum) throws SQLException {
            Service service = new Service();
            service.setId_service(rs.getInt("id_service"));
            service.setName_service(rs.getString("name_service"));
            return service;
        }
    }
	public List<Service> showAllService(){
		String sql = "select * from service";
		return jdbcTemplate.query(sql, new serviceRowMapper());
	}
}
