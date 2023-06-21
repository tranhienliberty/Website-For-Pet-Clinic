package com.petshop.Controller;

import java.util.List;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.petshop.Entity.AnimalType;
import com.petshop.Entity.Service;
import com.petshop.Service.AnimalTypeService;
import com.petshop.Service.AppointmentService;
import com.petshop.Service.ServiceService;

@Controller
public class AppointmentController {
	@Autowired
	private AppointmentService appointmentService;
	@Autowired
	private ServiceService serviceService;
	@Autowired
	private AnimalTypeService animalTypeService;
	
	public static String generateToken(int length) {
        String characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        StringBuilder token = new StringBuilder();

        Random random = new Random();
        for (int i = 0; i < length; i++) {
            int index = random.nextInt(characters.length());
            char randomChar = characters.charAt(index);
            token.append(randomChar);
        }

        return token.toString();
    }
	@RequestMapping(value = "/showMyAppointment")
	public String showMyAppointment(Model model) throws Exception {
		return "customer/my-appointment";
	}
	@RequestMapping(value = "/showAppointmentForm")
	public String showAppointmentForm(Model model) throws Exception {
		List<Service> service = serviceService.showAllService();
		List<AnimalType> animal_type = animalTypeService.showAllAnimalType();
		model.addAttribute("service", service);
		model.addAttribute("animal_type", animal_type);
		return "customer/appointment-form";
	}
	@RequestMapping(value = "/setAppointment")
	public String setApointment(@RequestParam("name") String name, @RequestParam("phone") String phone,
			@RequestParam("date") String date, @RequestParam("email") String email, 
			@RequestParam("animal_type") int id_animal_type,@RequestParam("service") int id_service, 
			@RequestParam("note") String note, Model model) throws Exception {
		String token = generateToken(10);
		appointmentService.setAppointment(name, phone, date, email, id_animal_type, id_service, note, token);
		model.addAttribute("token", token);
		return "customer/my-appointment";
	}
}
