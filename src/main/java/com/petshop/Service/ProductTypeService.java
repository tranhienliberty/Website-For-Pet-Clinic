package com.petshop.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.petshop.Entity.ProductType;
import com.petshop.Repository.ProductTypeRepository;

@Service
public class ProductTypeService {
	@Autowired
	private ProductTypeRepository productTypeRepository;

	public List<ProductType> showAllProductType(int id_animal_type) {
		return productTypeRepository.showAllProductType(id_animal_type);
	}
}
