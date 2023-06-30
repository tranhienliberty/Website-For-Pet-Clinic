package com.petshop.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.petshop.Entity.Position;
import com.petshop.Repository.PositionRepository;

@Service
public class PositionService {
	@Autowired
	private PositionRepository positionRepository;
	
	public List<Position> showAllPosition(){
		return positionRepository.showAllPosition();
	}
}
