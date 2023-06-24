package com.petshop.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.petshop.Entity.CartItems;
import com.petshop.Repository.CartItemsRepository;

@Service
public class CartItemsService {
	@Autowired
	private CartItemsRepository cartItemsRepository;

	public void addToCart(CartItems cartItems) throws Exception {
		cartItemsRepository.addToCart(cartItems);
	}

	public List<CartItems> showAllCartItems(int id_cart) {
		return cartItemsRepository.showAllCartItems(id_cart);
	}

	public boolean isProductExistInCart(int id_cart, int id_product) {
		CartItems cartItems = cartItemsRepository.isProductExistInCart(id_cart, id_product);
		if (cartItems!=null) return true;
		else return false;
	}

	public void updateCartItem(int id_cart, int id_product, int count) throws Exception {
		cartItemsRepository.updateCartItem(id_cart, id_product, count);
	}

	public void deleteAllCartItems(int id_cart) throws Exception {
		cartItemsRepository.deleteAllCartItems(id_cart);
	}
	
}
