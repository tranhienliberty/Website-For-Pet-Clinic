package com.petshop.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.petshop.Entity.Cart;
import com.petshop.Repository.CartRepository;

@Service
public class CartService {
	@Autowired
	private CartRepository cartRepository;
	
	public Cart getCartByUsername(String username) {
		return cartRepository.getCartByUsername(username);
	}

	public Cart getCartByIDBill(int id_bill) {
		// TODO Auto-generated method stub
		return null;
	}
}
