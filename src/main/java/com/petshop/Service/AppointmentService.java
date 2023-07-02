package com.petshop.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.petshop.Entity.Appointment;
import com.petshop.Repository.AppointmentRepository;

@Service
public class AppointmentService {
	@Autowired
	private AppointmentRepository appointmentRepository;

	public void setAppointment(int id_appointment, String name, String phone, String date, String email, int id_animal_type, int id_service,
			String note, String token)  throws Exception {
		appointmentRepository.setAppointment(id_appointment,name, phone, date, email, id_animal_type, id_service, note, token);
		
	}

	public List<Appointment> showMyAllAppointment(String username) {
		return appointmentRepository.showMyAllAppointment(username);
	}

	public void setAppointmentUser(int id_appointment, String username, String name, String phone, String date, String email,
			int id_animal_type, int id_service, String note, String token) {
		appointmentRepository.setAppointmentUser(id_appointment, username, name, phone, date, email, id_animal_type, id_service, note, token);
	}

	public List<Appointment> showAllAppointment() {
		return appointmentRepository.showAllAppointment();
	}

	public int getNewID() {
		return appointmentRepository.getNewID();
	}

	public Appointment showAppointmentByID(int id_appointment) {
		return appointmentRepository.showAppointmentByID(id_appointment);
	}
	
	
}
