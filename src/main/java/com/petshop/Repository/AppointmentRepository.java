package com.petshop.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import com.petshop.Entity.AnimalType;
import com.petshop.Entity.Appointment;
import com.petshop.Entity.Service;

@Repository
public class AppointmentRepository {
	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	private class appointmentRowMapper implements RowMapper<Appointment> {
        public Appointment mapRow(ResultSet rs, int rowNum) throws SQLException {
        	Appointment appointment = new Appointment();
        	appointment.setId_appointment(rs.getInt("id_appointment"));
        	appointment.setName(rs.getString("name"));
        	appointment.setPhone(rs.getInt("phone"));
        	appointment.setAppointment_date(rs.getTimestamp("appointment_date"));
        	appointment.setEmail(rs.getString("email"));
        	appointment.setNote(rs.getString("note"));
        	appointment.setToken(rs.getString("token"));
        	appointment.setInformation(rs.getString("information"));
        	appointment.setAppointment_status(rs.getString("appointment_status"));
        	Service service = new Service();
        	service.setId_service(rs.getInt("id_service"));
        	service.setName_service(rs.getString("name_service"));
        	appointment.setService(service);
        	AnimalType animalType = new AnimalType();
        	animalType.setId_animal_type(rs.getInt("id_animal_type"));
        	animalType.setName_animal_type(rs.getString("name_animal_type"));
        	appointment.setAnimalType(animalType);
            return appointment;
        }
    }

	public void setAppointment(String name, String phone, String date, String email, int id_animal_type, int id_service,
		String note, String token) throws Exception {
		String sql = "INSERT INTO appointment(name, phone, appointment_date, email, id_animal_type, id_service, note, token, information)"
				+ " VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)";
		Object[] params = new Object[] {name, phone, date, email, id_animal_type, id_service, note, token, "Không có thông báo"};
		int rs =jdbcTemplate.update(sql, params);
		if(rs!= 1) {
			throw new Exception(); 
		}
	}
	
}
