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
		String sql = "select * from service where is_deleted = 0";
		return jdbcTemplate.query(sql, new serviceRowMapper());
	}
	public Service getServiceByID(int serviceID) {
		String sql = "select * from service where id_service = ?";
		return jdbcTemplate.queryForObject(sql, new serviceRowMapper(), serviceID);
	}
	public void editService(int serviceID, String name_service) {
		String sql = "UPDATE service SET name_service = ? WHERE id_service = ?";
		Object[] params = new Object[] {name_service, serviceID};
		int rs =jdbcTemplate.update(sql, params);
	}
	public void editService(String name_service) {
		String sql = "INSERT INTO service(name_service)"
				+ " VALUES(?)";
		Object[] params = new Object[] {name_service};
		int rs =jdbcTemplate.update(sql, params);
	}
	public void deleteService(int id_service) {
		String sql = "UPDATE service SET is_deleted = 1 WHERE id_service = ?";
		Object[] params = new Object[] {id_service};
		int rs =jdbcTemplate.update(sql, params);
	}
}
