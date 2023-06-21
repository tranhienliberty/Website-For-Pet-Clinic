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
}
