package com.petshop.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.petshop.Entity.Customer;
import com.petshop.Repository.CustomerRepository;

@Service
public class CustomerService {
	@Autowired
	private CustomerRepository customerRepository;

	public List<Customer> showAllCustomer() {
		return customerRepository.showAllCustomer();
	}
	
	public void addCustomer(String name_customer, String date_of_birth, String phone, String email, String address) {
		customerRepository.addCustomer(name_customer, date_of_birth, phone, email, address);
	}

	public void editCustomer(String username, String name_customer, String date_of_birth, String phone, String email,
			String address) {
		customerRepository.editCustomer(username, name_customer, date_of_birth, phone, email, address);
	}

	public void deleteCustomer(int id_customer) {
		customerRepository.deleteCustomer(id_customer);
	}

	public Customer showCustomerInfo(String username) {
		return customerRepository.showCustomerInfo(username);
	}

	
	
}
