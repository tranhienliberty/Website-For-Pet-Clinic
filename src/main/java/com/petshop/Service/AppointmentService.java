package com.petshop.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.petshop.Repository.AppointmentRepository;

@Service
public class AppointmentService {
	@Autowired
	private AppointmentRepository appointmentRepository;

	public void setAppointment(String name, String phone, String date, String email, int id_animal_type, int id_service,
			String note, String token)  throws Exception {
		appointmentRepository.setAppointment(name, phone, date, email, id_animal_type, id_service, note, token);
		
	}
	
	
}
