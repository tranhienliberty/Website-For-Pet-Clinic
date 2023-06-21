package com.petshop.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import com.petshop.Entity.AnimalType;

@Repository
public class AnimalTypeRepository {
	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	private class animalTypeRowMapper implements RowMapper<AnimalType> {
        public AnimalType mapRow(ResultSet rs, int rowNum) throws SQLException {
        	AnimalType animalType = new AnimalType();
        	animalType.setId_animal_type(rs.getInt("id_animal_type"));
        	animalType.setName_animal_type(rs.getString("name_animal_type"));
            return animalType;
        }
    }
	public List<AnimalType> showAllAnimalType(){
		String sql = "select * from animal_type";
		return jdbcTemplate.query(sql, new animalTypeRowMapper());
	}
}
