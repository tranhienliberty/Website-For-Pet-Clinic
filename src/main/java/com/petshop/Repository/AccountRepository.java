package com.petshop.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import com.petshop.Entity.Account;
import com.petshop.Entity.Customer;

@Repository
public class AccountRepository {
	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	private class accountRowmapper implements RowMapper<Account>{
		public Account mapRow(ResultSet rs, int rowNum) throws SQLException {
			Account account = new Account();
			account.setUsername(rs.getString("username"));
			account.setPassword(rs.getString("password"));
			account.setRole(rs.getString("role"));
			return account;
		}
	}
	public Account findByUsername(String username) {
		String sql = "SELECT * FROM account WHERE username = ?";
		return jdbcTemplate.queryForObject(sql, new accountRowmapper(),username);
	}
	public String getRole(String username) {
		String sql = "SELECT role FROM account WHERE username = ?";
		String role = jdbcTemplate.queryForObject(sql, String.class ,username);
		System.out.println("");
		return role;
	}
	public int checkExistUsername(String username) {
		String sql = "SELECT COUNT(*) FROM account where username = ?";
		return jdbcTemplate.queryForObject(sql, Integer.class, username);
	}
	public void register(String username, String email, String encodePass) {
		String sql1 = "INSERT INTO account(username, password)\r\n"
				+ "VALUES (?, ?);";
		Object[] params1 = new Object[] {username, encodePass};
		jdbcTemplate.update(sql1, params1);
		String sql2 = "INSERT INTO customer (username, email)\r\n"
				+ "VALUES (?, ?);";
		Object[] params2 = new Object[] {username, email};
		jdbcTemplate.update(sql2, params2);
		String sql3 = "INSERT INTO cart (username)\r\n"
				+ "VALUES (?);";
		Object[] params3 = new Object[] {username};
		jdbcTemplate.update(sql3, params3);
	}
	public List<Account> getAllAccount() {
		String sql = "SELECT * FROM account";
		return jdbcTemplate.query(sql, new accountRowmapper());
	}
	public List<Account> getAccountFree() {
		String sql = "SELECT *\r\n"
				+ "FROM account\r\n"
				+ "WHERE username NOT IN (\r\n"
				+ "    SELECT username\r\n"
				+ "    FROM customer)";
		return jdbcTemplate.query(sql, new accountRowmapper());
	}
	public void changePassword(String username, String encodePass) {
		String sql = "UPDATE account SET password = ? WHERE username = ?";
		Object[] params = new Object[] {encodePass, username};
		jdbcTemplate.update(sql, params);
	}
	public void editAccount(String username, String new_password) {
		String sql = "UPDATE account SET password = ? WHERE username = ?";
		Object[] params = new Object[] {new_password, username};
		jdbcTemplate.update(sql, params);
	}
	public void addAccountUser(String username, String password) {
		String sql1 = "INSERT INTO account(username, password)\r\n"
				+ "VALUES (?, ?);";
		Object[] params1 = new Object[] {username, password};
		jdbcTemplate.update(sql1, params1);
		String sql2 = "INSERT INTO customer (username)\r\n"
				+ "VALUES (?);";
		Object[] params2 = new Object[] {username};
		jdbcTemplate.update(sql2, params2);
		String sql3 = "INSERT INTO cart (username)\r\n"
				+ "VALUES (?);";
		Object[] params3 = new Object[] {username};
		jdbcTemplate.update(sql3, params3);
	}
	public void addAccountAdmin(String username, String password, String role) {
		String sql1 = "INSERT INTO account(username, password, role)\r\n"
				+ "VALUES (?, ?, ?);";
		Object[] params1 = new Object[] {username, password, role};
		jdbcTemplate.update(sql1, params1);
	}
}
