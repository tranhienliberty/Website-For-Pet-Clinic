package com.petshop.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.petshop.Service.AccountService;

@Controller
public class AccountController {
	@Autowired
	private AccountService accountService;
	
	@GetMapping("/login")
    public String showLoginForm() {
        return "customer/login";
    }
	
	@RequestMapping(value = "/login")
	public String login(@RequestParam("Username") String username, @RequestParam("Password") String password,
			Model model) {
		try {
		boolean isAuthenticated = accountService.authenticate(username, password);
		if (isAuthenticated) {
		// Xử lý sau khi đăng nhập thành công
			model.addAttribute("success", "Login successful");
			return "redirect:/";
		} else {
		// Xử lý sau khi đăng nhập thất bại
			model.addAttribute("error", "Invalid username or password");
			return "customer/login";
			}
		} catch (UsernameNotFoundException e) {
	        model.addAttribute("error", e.getMessage());
	        return "customer/login";
	    }
	}
	
}
