package com.petshop.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.petshop.Entity.AnimalType;
import com.petshop.Repository.AnimalTypeRepository;


@Service
public class AnimalTypeService {
	@Autowired
	private AnimalTypeRepository animalTypeRepository;
	
	public List<AnimalType> showAllAnimalType(){
		return animalTypeRepository.showAllAnimalType();
	}
}
