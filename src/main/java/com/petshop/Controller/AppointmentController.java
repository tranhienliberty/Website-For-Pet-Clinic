package com.petshop.Controller;

import java.util.List;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.petshop.Entity.AnimalType;
import com.petshop.Entity.Appointment;
import com.petshop.Entity.Bill;
import com.petshop.Entity.Customer;
import com.petshop.Entity.Service;
import com.petshop.Service.AnimalTypeService;
import com.petshop.Service.AppointmentService;
import com.petshop.Service.CustomerService;
import com.petshop.Service.ServiceService;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;

@Controller
public class AppointmentController {
	@Autowired
	private AppointmentService appointmentService;
	@Autowired
	private ServiceService serviceService;
	@Autowired
	private AnimalTypeService animalTypeService;
	@Autowired
	private CustomerService customerService;
	
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
	@RequestMapping(value = "/showMyAllAppointment")
	public String showMyAllAppointment(HttpServletRequest request, Model model) throws Exception {
		boolean isLoggedIn = false;
	    String username = null;
	    Cookie[] cookies = request.getCookies();
	    if (cookies != null) {
	        for (Cookie cookie : cookies) {
	            if (cookie.getName().equals("userIsLoggedIn")) {
	                isLoggedIn = Boolean.parseBoolean(cookie.getValue());
	            }
	            else if (cookie.getName().equals("userUsername")) {
	                username = cookie.getValue();
	            }
	        }
	    }
	    if (!isLoggedIn) {
	        return "redirect:/showAppointmentForm";
	    }
		List<Appointment> appointments = appointmentService.showMyAllAppointment(username);
		model.addAttribute("appointments", appointments);
		return "customer/my-appointment";
	}
	@RequestMapping(value = "/showAppointmentForm")
	public String showAppointmentForm(@RequestParam(value = "username", required = false) String username,Model model) throws Exception {
		if(username!=null) {
		List<Service> service = serviceService.showAllService();
		List<AnimalType> animal_type = animalTypeService.showAllAnimalType();
		Customer customer = customerService.showCustomerInfo(username);
		model.addAttribute("customer", customer);
		model.addAttribute("service", service);
		model.addAttribute("animal_type", animal_type);
		return "customer/appointment-form";	
		}
		else
		{
			List<Service> service = serviceService.showAllService();
			List<AnimalType> animal_type = animalTypeService.showAllAnimalType();
			model.addAttribute("service", service);
			model.addAttribute("animal_type", animal_type);
			return "customer/appointment-form";	
		}
	}
	@RequestMapping(value = "/setAppointment")
	public String setApointment(@RequestParam(value = "username", required = false) String username, @RequestParam("name") String name, @RequestParam("phone") String phone,
			@RequestParam("date") String date, @RequestParam("email") String email, 
			@RequestParam("animal_type") int id_animal_type,@RequestParam("service") int id_service, 
			@RequestParam("note") String note, Model model) throws Exception {
		if(username!=null) {
			String token = generateToken(10);
			System.out.print(username);
			appointmentService.setAppointmentUser(username, name, phone, date, email, id_animal_type, id_service, note, token);
			return "customer/my-appointment";
		}
		else 
		{
			String token = generateToken(10);
			System.out.print("A");
			System.out.print(username);
			appointmentService.setAppointment(name, phone, date, email, id_animal_type, id_service, note, token);
			model.addAttribute("token", token);
			return "customer/appointment-success";
		}
	}
	@RequestMapping(value = "/adminShowAllAppointment")
	public String showAllBill(Model model) {
		List<Appointment> appointments = appointmentService.showAllAppointment();
		model.addAttribute("appointments", appointments);
		return "admin/admin-appointment";
	}
}
