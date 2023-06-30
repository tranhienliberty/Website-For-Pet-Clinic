package com.petshop.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import com.petshop.Entity.Position;


@Repository
public class PositionRepository {
	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	private class positionTypeRowMapper implements RowMapper<Position> {
        public Position mapRow(ResultSet rs, int rowNum) throws SQLException {
        	Position position = new Position();
        	position.setId_position(rs.getInt("id_position"));
        	position.setName_position(rs.getString("name_position"));
            return position;
        }
    }
	public List<Position> showAllPosition(){
		String sql = "select * from position WHERE is_deleted = 0";
		return jdbcTemplate.query(sql, new positionTypeRowMapper());
	}
}
