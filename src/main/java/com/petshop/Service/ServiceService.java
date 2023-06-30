package com.petshop.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.petshop.Repository.ServiceRepository;

@Service
public class ServiceService {
	@Autowired
	private ServiceRepository serviceRepository;
	
	public List<com.petshop.Entity.Service> showAllService(){
		return serviceRepository.showAllService();
	}

	public com.petshop.Entity.Service getServiceByID(int serviceID) {
		return serviceRepository.getServiceByID(serviceID);
	}

	public void editService(int serviceID, String name_service) {
		serviceRepository.editService(serviceID, name_service);
	}

	public void addService(String name_service) {
		serviceRepository.editService(name_service);
	}

	public void deleteService(int id_service) {
		serviceRepository.deleteService(id_service);
	}
}
