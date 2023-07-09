package com.petshop.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import com.petshop.Entity.Contract;
import com.petshop.Entity.Position;
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
        	staff.setGender(rs.getString("gender"));
        	staff.setCountry(rs.getString("country"));
        	staff.setIdentity_card(rs.getLong("identity_card"));
        	staff.setDate_of_birth(rs.getDate("date_of_birth"));
        	staff.setPhone(rs.getString("phone"));
        	staff.setEmail(rs.getString("email"));
        	staff.setAddress(rs.getString("address"));
        	staff.setCertificate(rs.getString("certificate"));
        	staff.setBank_number(rs.getString("bank_number"));
        	staff.setBank_name(rs.getString("bank_name"));
        	staff.setId_position(rs.getInt("id_position"));
        	staff.setId_contract(rs.getInt("id_contract"));
        	staff.setUsername(rs.getString("username"));
            return staff;
        }
    }
	private class staffPositionRowMapper implements RowMapper<Staff> {
        public Staff mapRow(ResultSet rs, int rowNum) throws SQLException {
        	Staff staff = new Staff();
        	staff.setId_staff(rs.getInt("id_staff"));
        	staff.setName_staff(rs.getString("name_staff"));
        	staff.setGender(rs.getString("gender"));
        	staff.setCountry(rs.getString("country"));
        	staff.setIdentity_card(rs.getLong("identity_card"));
        	staff.setDate_of_birth(rs.getDate("date_of_birth"));
        	staff.setPhone(rs.getString("phone"));
        	staff.setEmail(rs.getString("email"));
        	staff.setAddress(rs.getString("address"));
        	staff.setCertificate(rs.getString("certificate"));
        	staff.setBank_number(rs.getString("bank_number"));
        	staff.setBank_name(rs.getString("bank_name"));
        	staff.setId_position(rs.getInt("id_position"));
        	staff.setId_contract(rs.getInt("id_contract"));
        	staff.setUsername(rs.getString("username"));
        	Position position = new Position();
        	position.setId_position(rs.getInt("id_position"));
        	position.setName_position(rs.getString("name_position"));
        	staff.setPosition(position);
            return staff;
        }
    }
	public List<Staff> showAllStaff(){
		String sql = "SELECT s.*, p.name_position\r\n"
				+ "FROM staff s\r\n"
				+ "JOIN position p ON s.id_position = p.id_position WHERE s.is_deleted = 0\r\n"
				+ "ORDER BY s.id_staff ASC;";
		return jdbcTemplate.query(sql, new staffPositionRowMapper());
	}
	public Staff getStaffByID(int id_staff) {
		String sql = "SELECT * FROM staff WHERE id_staff = ?";
		return jdbcTemplate.queryForObject(sql, new staffRowMapper(), id_staff);
	}
	public void addStaff(String name_staff, String identity_card, String date_of_birth, String phone, String email,
			String address, String certificate, String country, String gender, String bank_name, String bank_number,
			int id_contract, int id_position, String username) {
		String sql = "INSERT INTO staff(name_staff, identity_card, date_of_birth, phone, email, address, certificate, country, gender, bank_number, bank_name, id_contract, id_position, username)"
				+ " VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
		Object[] params = new Object[] {name_staff, identity_card, date_of_birth, phone, email, address, certificate, country, gender, bank_number, bank_name, id_contract, id_position, username};
		int rs =jdbcTemplate.update(sql, params);
	}
	public void editStaff(int id_staff, String name_staff, String identity_card, String date_of_birth, String phone,
			String email, String address, String certificate, String country, String gender, String bank_name, String bank_number,
			int id_position, String username) {
		String sql = "UPDATE staff SET name_staff = ?, identity_card = ?, date_of_birth = ?, phone = ?, email = ?, address = ?, "
				+ "certificate = ?, country = ?, gender = ?, bank_number = ?, bank_name = ?, id_position = ?, username = ? "
				+ "WHERE id_staff = ?;";
		Object[] params = new Object[] {name_staff, identity_card, date_of_birth, phone, email, address, certificate, country, gender, bank_number, bank_name, id_position, username,id_staff};
		int rs =jdbcTemplate.update(sql, params);
	}
	public void deleteStaff(String id_staff) {
		String sql = "UPDATE staff SET is_deleted = 1 WHERE id_staff = ? ";
		Object[] params = new Object[] {id_staff};
		int rs =jdbcTemplate.update(sql, params);
	}
	public int checkExistStaff(int id_staff) {
		String sql = "SELECT COUNT(*) FROM staff where id_staff = ?";
		return jdbcTemplate.queryForObject(sql, Integer.class, id_staff);
	}
	public void editStaff(int staffID, String name_staff, String identity_card, String date_of_birth, String phone,
			String email, String address, String certificate, String country, String gender, String bank_name, String bank_number,
			int id_position) {
		String sql = "UPDATE staff SET name_staff = ?, identity_card = ?, date_of_birth = ?, phone = ?, email = ?, address = ?, "
				+ "certificate = ?, country = ?, gender = ?, bank_number = ?, bank_name = ?, id_position = ? "
				+ "WHERE id_staff = ?;";
		Object[] params = new Object[] {name_staff, identity_card, date_of_birth, phone, email, address, certificate, country, gender, bank_number, bank_name, id_position, staffID};
		int rs =jdbcTemplate.update(sql, params);
	}
	public void addStaff(String name_staff, String identity_card, String date_of_birth, String phone, String email,
			String address, String certificate, String country, String gender, String bank_name, String bank_number,
			int id_contract,int id_position) {
		String sql = "INSERT INTO staff(name_staff, identity_card, date_of_birth, phone, email, address, certificate, country, gender, bank_number, bank_name,id_contract,id_position)\r\n"
				+ " VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
		Object[] params = new Object[] {name_staff, identity_card, date_of_birth, phone, email, address, certificate, country, gender, bank_number, bank_name, id_contract, id_position};
		int rs =jdbcTemplate.update(sql, params);
	}
	
}
