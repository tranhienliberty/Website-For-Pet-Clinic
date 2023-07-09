package com.petshop.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

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
        	appointment.setPhone(rs.getString("phone"));
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
        	appointment.setUsername(rs.getString("username"));
            return appointment;
        }
    }

	public void setAppointment(int id_appointment, String name, String phone, String date, String email, int id_animal_type, int id_service,
		String note, String token) throws Exception {
		String sql = "INSERT INTO appointment(id_appointment, name, phone, appointment_date, email, id_animal_type, id_service, note, token, information)"
				+ " VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
		Object[] params = new Object[] {id_appointment, name, phone, date, email, id_animal_type, id_service, note, token, "Không có thông báo"};
		int rs =jdbcTemplate.update(sql, params);
	}

	public List<Appointment> showMyAllAppointment(String username) {
		String sql = "SELECT *\r\n"
				+ "FROM appointment AS a\r\n"
				+ "JOIN service AS s ON a.id_service = s.id_service\r\n"
				+ "JOIN animal_type AS t ON a.id_animal_type = t.id_animal_type WHERE username= ?;";
		return jdbcTemplate.query(sql, new appointmentRowMapper(), username);
	}

	public void setAppointmentUser(int id_appointment, String username, String name, String phone, String date, String email,
			int id_animal_type, int id_service, String note, String token) {
		String sql = "INSERT INTO appointment(id_appointment, name, phone, appointment_date, email, id_animal_type, id_service, note, token, information, username)"
				+ " VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
		Object[] params = new Object[] {id_appointment, name, phone, date, email, id_animal_type, id_service, note, token, "Không có thông báo", username};
		int rs =jdbcTemplate.update(sql, params);
	}

	public List<Appointment> showAllAppointment() {
		String sql = "SELECT *\r\n"
				+ "FROM appointment AS a\r\n"
				+ "JOIN service AS s ON a.id_service = s.id_service\r\n"
				+ "JOIN animal_type AS t ON a.id_animal_type = t.id_animal_type;";
		return jdbcTemplate.query(sql, new appointmentRowMapper());
	}

	public int getNewID() {
		String sql = "SELECT MAX(id_appointment) FROM appointment";
		Integer id = jdbcTemplate.queryForObject(sql, Integer.class);
		if(id == null) {
			id = 0;
		}
		return id;
	}

	public Appointment showAppointmentByID(int id_appointment) {
		String sql = "SELECT *\r\n"
				+ "FROM appointment AS a\r\n"
				+ "JOIN service AS s ON a.id_service = s.id_service\r\n"
				+ "JOIN animal_type AS t ON a.id_animal_type = t.id_animal_type WHERE id_appointment = ?;";
		return jdbcTemplate.queryForObject(sql, new appointmentRowMapper(), id_appointment);
	}

	public void setDoneAppointment(String id_appointment) {
		String sql = "UPDATE appointment SET appointment_status = 'Đã xong' WHERE id_appointment = ?";
		Object[] params = new Object[] {id_appointment};
		int rs =jdbcTemplate.update(sql, params);
	}

	public void cancelAppointment(String id_appointment) {
		String sql = "UPDATE appointment SET appointment_status = 'Bị hủy' WHERE id_appointment = ?";
		Object[] params = new Object[] {id_appointment};
		int rs =jdbcTemplate.update(sql, params);
	}
	
}
