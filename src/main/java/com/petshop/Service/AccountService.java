package com.petshop.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.petshop.Entity.Account;
import com.petshop.Repository.AccountRepository;

@Service
public class AccountService {
	@Autowired
	private AccountRepository accountRepository;
	
	//Dùng để mã hóa mật khẩu
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	public boolean authenticate(String username, String password) {
		try {
		Account account = accountRepository.findByUsername(username);
		if (account == null) {
			throw new UsernameNotFoundException("Invalid username");
	    }
//	    return passwordEncoder.matches(password, account.getPassword());
		 return account != null && account.getPassword().equals(password);
	} catch (EmptyResultDataAccessException e){
		 throw new UsernameNotFoundException("Invalid username");
	}
	}

	public String getRole(String username) {
		return accountRepository.getRole(username);
	}

	public boolean checkExistUsername(String username) {
		int i = accountRepository.checkExistUsername(username);
		if(i != 0) {
			return false;
		}
		else return true;
	}

	public void register(String username, String email, String encodePass) {
		accountRepository.register(username, email, encodePass);
	}
}
