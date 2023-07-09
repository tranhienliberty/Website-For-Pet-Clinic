package com.petshop.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import com.petshop.Entity.Contract;
import com.petshop.Entity.Position;

@Repository
public class ContractRepository {
	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	private class contractRowMapper implements RowMapper<Contract> {
        public Contract mapRow(ResultSet rs, int rowNum) throws SQLException {
        	Contract contract = new Contract();
        	contract.setId_contract(rs.getInt("id_contract"));
        	contract.setName(rs.getString("name"));
        	contract.setGender(rs.getString("gender"));
        	contract.setDate_of_birth(rs.getDate("date_of_birth"));
        	contract.setNationality(rs.getString("nationality"));
        	contract.setCountry(rs.getString("country"));
        	contract.setAddress(rs.getString("address"));
        	contract.setIdentity_card(rs.getString("identity_card"));
        	contract.setIdentity_date(rs.getDate("identity_date"));
        	contract.setIdentity_place(rs.getString("identity_place"));
        	contract.setPhone(rs.getString("phone"));
        	contract.setEmail(rs.getString("email"));
        	contract.setGraduate(rs.getString("graduate"));
        	contract.setPayment(rs.getString("payment"));
        	contract.setDate_sign(rs.getTimestamp("date_sign"));
        	contract.setDate_begin(rs.getDate("date_begin"));
        	contract.setDate_end(rs.getDate("date_end"));
        	contract.setSalary(rs.getFloat("salary"));
        	contract.setBank_number(rs.getString("bank_number"));
        	contract.setBank_name(rs.getString("bank_name"));
        	contract.setId_position(rs.getInt("id_position"));
        	Position position = new Position();
        	position.setId_position(rs.getInt("id_position"));
        	position.setName_position(rs.getString("name_position"));
        	contract.setPosition(position);
            return contract;
        }
    }
	
	public int getNewID() {
		String sql = "SELECT MAX(id_contract) FROM contract";
		Integer id = jdbcTemplate.queryForObject(sql, Integer.class);
		if(id == null) {
			id = 0;
		}
		return id;
	}
	
	public Contract getContractByStaff(int id_contract) {
		String sql = "SELECT c.*, p.name_position\r\n"
				+ "FROM contract c\r\n"
				+ "JOIN position p ON c.id_position = p.id_position WHERE c.id_contract = ?;";
		return jdbcTemplate.queryForObject(sql, new contractRowMapper(), id_contract);
	}

	public void addContract(int id_contract, String name, String identity_card, String identity_date,
			String identity_place, String date_of_birth, String phone, String email, String nationality,
			String graduate, String payment, String address, String country, String gender, String bank_name,
			String bank_number, String date_begin, String date_end, float salary, int id_position) {
		String sql = "INSERT INTO contract (id_contract, name, identity_card, identity_date, identity_place, \r\n"
				+ "                      date_of_birth, phone, email, nationality, graduate, payment, address, country, \r\n"
				+ "                      gender, bank_name, bank_number, date_begin, date_end, salary, id_position)\r\n"
				+ "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);";
		Object[] params = new Object[] {id_contract, name, identity_card, identity_date, identity_place, date_of_birth, phone, email, nationality, 
				graduate, payment, address, country, gender, bank_name, bank_number, date_begin, date_end, salary, id_position};
		int rs =jdbcTemplate.update(sql, params);
	}

	public void editContract(int id_contract, String name, String identity_card, String identity_date,
			String identity_place, String date_of_birth, String phone, String email, String nationality,
			String graduate, String payment, String address, String country, String gender, String bank_name,
			String bank_number, String date_begin, String date_end, float salary, int id_position) {
		String sql = "UPDATE contract SET name = ?, identity_card = ?, identity_date = ?, identity_place = ?, date_of_birth = ?, phone = ?, email = ?, "
				+ "nationality = ?, graduate = ?, payment = ?, address = ?, country = ?, gender = ?, bank_name = ?, bank_number = ?, "
				+ "date_begin = ?, date_end = ?, salary = ?, id_position = ? WHERE id_contract = ?";
		Object[] params = new Object[] {name, identity_card, identity_date, identity_place, date_of_birth, phone, email, nationality, 
				graduate, payment, address, country, gender, bank_name, bank_number, date_begin, date_end, salary, id_position, id_contract};
		int rs =jdbcTemplate.update(sql, params);
	}
	
	
	
}
