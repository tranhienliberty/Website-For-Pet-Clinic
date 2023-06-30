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
	
	public void addCustomer(String name_customer, String date_of_birth, String phone, String email, String address, String username) {
		customerRepository.addCustomer(name_customer, date_of_birth, phone, email, address, username);
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

	public Customer getCustomerByID(int id_customer) {
		return customerRepository.getCustomerByID(id_customer);
	}

	public boolean checkExistCustomer(int id_customer) {
		int i = customerRepository.checkExistCustomer(id_customer);
		if(i != 0) {
			return false;
		}
		else return true;
	}

	public void adminEditCustomer(int customerID, String name_customer, String date_of_birth, String phone,
			String email, String address, String username) {
		customerRepository.adminEditCustomer(customerID, name_customer, date_of_birth, phone, email, address, username);
	}

	public void adminEditCustomer(int customerID, String name_customer, String date_of_birth, String phone,
			String email, String address) {
		customerRepository.adminEditCustomer(customerID, name_customer, date_of_birth, phone, email, address);
	}

	public void addCustomer(String name_customer, String date_of_birth, String phone, String email, String address) {
		customerRepository.addCustomer(name_customer, date_of_birth, phone, email, address);
	}

	public boolean checkExistCustomerAccount(String username) {
		int i = customerRepository.checkExistCustomerAccount(username);
		if(i != 0) {
			return false;
		}
		else return true;
	}
}
