package com.petshop.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import com.petshop.Entity.Contract;
import com.petshop.Entity.Staff;


@Repository
public class StaffRepository {
	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	private class staffRowMapper implements RowMapper<Staff> {
        public Staff mapRow(ResultSet rs, int rowNum) throws SQLException {
        	Staff staff = new Staff();
        	staff.setId_staff(rs.getInt("id_staff"));
        	staff.setName_staff(rs.getString("name_staff"));
        	staff.setIdentity_card(rs.getLong("identity_card"));
        	staff.setDate_of_birth(rs.getDate("date_of_birth"));
        	staff.setPhone(rs.getString("phone"));
        	staff.setEmail(rs.getString("email"));
        	staff.setAddress(rs.getString("address"));
        	staff.setCertificate(rs.getString("certificate"));
        	staff.setExperience(rs.getString("experience"));
        	staff.setBank_number(rs.getLong("bank_number"));
        	staff.setBank_name(rs.getString("bank_name"));
        	staff.setId_position(rs.getInt("id_position"));
        	staff.setId_contract(rs.getInt("id_contract"));
        	staff.setUsername(rs.getString("username"));
            return staff;
        }
    }
	private class staffExtraRowMapper implements RowMapper<Staff> {
        public Staff mapRow(ResultSet rs, int rowNum) throws SQLException {
        	Staff staff = new Staff();
        	staff.setId_staff(rs.getInt("id_staff"));
        	staff.setName_staff(rs.getString("name_staff"));
        	staff.setIdentity_card(rs.getLong("identity_card"));
        	staff.setDate_of_birth(rs.getDate("date_of_birth"));
        	staff.setPhone(rs.getString("phone"));
        	staff.setEmail(rs.getString("email"));
        	staff.setAddress(rs.getString("address"));
        	staff.setCertificate(rs.getString("certificate"));
        	staff.setExperience(rs.getString("experience"));
        	staff.setBank_number(rs.getLong("bank_number"));
        	staff.setBank_name(rs.getString("bank_name"));
        	staff.setId_position(rs.getInt("id_position"));
        	staff.setId_contract(rs.getInt("id_contract"));
        	Contract contract = new Contract();
        	contract.setId_contract(rs.getInt("id_contract"));
        	contract.setDate_sign(rs.getDate("date_sign"));
        	contract.setDate_begin(rs.getDate("date_begin"));
        	contract.setDate_end(rs.getDate("date_end"));
        	contract.setJob_descript(rs.getString("job_descript"));
        	contract.setSalary(rs.getFloat("salary"));
        	staff.setUsername(rs.getString("username"));
            return staff;
        }
    }
	public List<Staff> showAllStaff(){
		String sql = "select * from staff";
		return jdbcTemplate.query(sql, new staffRowMapper());
	}
	public Staff getStaffByID(int id_staff) {
		String sql = "SELECT * FROM staff WHERE id_staff = ?";
		return jdbcTemplate.queryForObject(sql, new staffRowMapper(), id_staff);
	}
	public void addStaff(String name_staff, String identity_card, String date_of_birth, String phone, String email,
			String address, String certificate, String experience, String bank_name, String bank_number,
			int id_position, int id_contract) {
		String sql = "INSERT INTO staff(name_staff, identity_card, date_of_birth, phone, email, address, certificate, experience, bank_number, bank_name, id_position, id_contract)"
				+ " VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
		Object[] params = new Object[] {name_staff, identity_card, date_of_birth, phone, email, address, certificate, experience, bank_number, bank_name, id_position, id_contract};
		int rs =jdbcTemplate.update(sql, params);
	}
	public void editStaff(int id_staff, String name_staff, String identity_card, String date_of_birth, String phone,
			String email, String address, String certificate, String experience, String bank_name, String bank_number,
			int id_position, int id_contract) {
		String sql = "UPDATE staff SET name_staff = ?, identity_card = ?, date_of_birth = ?, phone = ?, email = ?, address = ?, "
				+ "certificate = ?, experience = ?, bank_number = ?, bank_name = ?, id_position = ?, id_contract = ?"
				+ "WHERE id_staff = ?;";
		Object[] params = new Object[] {name_staff, identity_card, date_of_birth, phone, email, address, certificate, experience, bank_number, bank_name, id_position, id_contract, id_staff};
		int rs =jdbcTemplate.update(sql, params);
	}
	public void deleteStaff(String id_staff) {
		String sql = "DELETE FROM staff WHERE id_staff = ?";
		Object[] params = new Object[] {id_staff};
		int rs =jdbcTemplate.update(sql, params);
	}
	
}
