package com.petshop.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.petshop.Entity.AnimalType;
import com.petshop.Entity.Product;
import com.petshop.Entity.ProductType;
import com.petshop.Entity.Service;
import com.petshop.Service.ServiceService;

@Controller
public class ServiceController {
	@Autowired
	private ServiceService serviceService;
	
	@RequestMapping(value = "/adminShowAllService")
	public String showAllService(Model model) {
		List<Service> services = serviceService.showAllService();
		model.addAttribute("services", services);
		return "admin/admin-service";
	}
	@RequestMapping(value = "/showFormServiceInfo")
	public String showFormServiceInfo(@RequestParam(value = "id_service", required = false) Integer id_service, Model model) {
		if (id_service != null) {
    		int serviceID = id_service.intValue();
    		Service service = serviceService.getServiceByID(serviceID);
    		model.addAttribute("service", service);
    		return "admin/admin-service-edit";
    	}
    	return "admin/admin-service-edit";
	}
	@RequestMapping(value = "/adminEditService")
	public String adminEditService(@RequestParam(value = "id_service", required = false) Integer id_service, @RequestParam("name_service") String name_service,Model model) {
		if(id_service!=null) {
    		int serviceID = id_service.intValue();
    		serviceService.editService(serviceID, name_service);
        	return "redirect:adminShowAllService";
    	}
    	else {
        	serviceService.addService(name_service);
        	return "redirect:adminShowAllService";
    	}
	}
    @RequestMapping(value = "/adminDeleteService")
    public String deleteService(@RequestParam("id_service") int id_service) {
    	serviceService.deleteService(id_service);
    	return "redirect:adminShowAllService";
    }
}
