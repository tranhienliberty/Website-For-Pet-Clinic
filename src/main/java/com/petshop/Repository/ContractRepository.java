package com.petshop.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import com.petshop.Entity.Contract;
import com.petshop.Entity.Staff;

@Repository
public class ContractRepository {
	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	private class contractRowMapper implements RowMapper<Contract> {
        public Contract mapRow(ResultSet rs, int rowNum) throws SQLException {
        	Contract contract = new Contract();
        	contract.setId_contract(rs.getInt("id_contract"));
        	contract.setDate_sign(rs.getDate("date_sign"));
        	contract.setDate_begin(rs.getDate("date_begin"));
        	contract.setDate_end(rs.getDate("date_end"));
        	contract.setJob_descript(rs.getString("job_descript"));
        	contract.setSalary(rs.getFloat("salary"));
            return contract;
        }
    }

	public Contract getContractByStaff(int id_contract) {
		String sql = "SELECT * FROM contract WHERE id_contract = ?";
		return jdbcTemplate.queryForObject(sql, new contractRowMapper(), id_contract);
	}
	
	
}
