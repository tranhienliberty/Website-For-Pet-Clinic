package com.petshop.Controller;


import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import com.petshop.Entity.Account;
import com.petshop.Entity.Customer;
import com.petshop.Entity.Service;
import com.petshop.Service.AccountService;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Controller
public class AccountController {
    @Autowired
    private AccountService accountService;
    
    @RequestMapping("/admin_home")
    public String admin_home() {
        // Xử lý logic và trả về tên của view để hiển thị
        return "admin/admin-home";
    }

    @GetMapping("/login")
    public String showLoginForm(Model model, @RequestHeader(value = "Referer", required = false) String previousUrl, 
    		@RequestParam(value = "message", required = false) String message) {
        model.addAttribute("previousUrl", previousUrl);
        model.addAttribute("message", message);
        return "customer/login";
    }

    @PostMapping("/login")
    public String login(@RequestParam("Username") String username, @RequestParam("Password") String password,
                        Model model, HttpServletResponse response, @RequestParam(value = "previousUrl", defaultValue = "/") String previousUrl) {
    	String encodePass = hashPassword(password);
        try {
            boolean isAuthenticated = accountService.authenticate(username, encodePass);
            String role = accountService.getRole(username);

            if (isAuthenticated) {
                model.addAttribute("success", "Login successful");

                if ("admin".equals(role) || "staff".equals(role)) {
                    addLoggedInCookie(response, "adminIsLoggedIn");
                    addUsernameCookie(response, "adminUsername", username);
                    return "redirect:/admin_home";
                } 
                else {
                    addLoggedInCookie(response, "userIsLoggedIn");
                    addUsernameCookie(response, "userUsername", username);
                    return "redirect:" + previousUrl;
                }
            } else {
                model.addAttribute("error", "Invalid username or password");
                return "customer/login";
            }
        } catch (UsernameNotFoundException e) {
            model.addAttribute("error", e.getMessage());
            return "customer/login";
        }
    }
    
    @RequestMapping("/logout")
    public String logout(HttpServletRequest request, HttpServletResponse response) {
        // Xóa cookie và trở về trang chủ
        deleteCookie(request, response, "adminIsLoggedIn");
        deleteCookie(request, response, "adminUsername");
        deleteCookie(request, response, "userIsLoggedIn");
        deleteCookie(request, response, "userUsername");

        return "redirect:/";
    }
    
    public static String hashPassword(String pass) {
        try {
            MessageDigest digest = MessageDigest.getInstance("SHA-256");
            byte[] hashedBytes = digest.digest(pass.getBytes());
            StringBuilder stringBuilder = new StringBuilder();
            for (byte b : hashedBytes) {
                stringBuilder.append(String.format("%02x", b));
            }
            return stringBuilder.toString();
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }
        return null;
    }
 
	private boolean checkExistUsername(String username) {
		return accountService.checkExistUsername(username);
	}
    
    @GetMapping("/register")
    public String showRegisterForm() {
        return "customer/register";
    }
	
    @RequestMapping(value = "/register")
    public String register(@RequestParam("Username") String username, @RequestParam("Email") String email,
			@RequestParam("Password") String password, @RequestParam("Password2") String password2, Model model) throws UnsupportedEncodingException {
    	String encodePass = hashPassword(password);
		if(password.equals(password2)) {
			if (checkExistUsername(username)) {
				accountService.register(username, email, encodePass);
				String message = "Đăng ký thành công! Hãy đăng nhập bằng tài khoản bạn vừa đăng ký nhé!";
				model.addAttribute("message", message);
				return "customer/login";
			}
			else {
				String message = "Tài khoản đã tồn tại! Hãy sử dụng tên đăng nhập khác!";
				model.addAttribute("message", message);
				return "customer/register";
			}
		}
		else {
			String message = "Mật khẩu nhập không khớp nhau! Hãy nhập lại!";
			model.addAttribute("message", message);
			return "customer/register";
		}
		
	}
    
    private void deleteCookie(HttpServletRequest request, HttpServletResponse response, String cookieName) {
        Cookie[] cookies = request.getCookies();
        if (cookies != null) {
            for (Cookie cookie : cookies) {
                if (cookie.getName().equals(cookieName)) {
                    cookie.setMaxAge(0);
                    cookie.setPath("/");
                    response.addCookie(cookie);
                    break;
                }
            }
        }
    }

    private void addLoggedInCookie(HttpServletResponse response, String cookieName) {
        Cookie isLoggedInCookie = new Cookie(cookieName, "true");
        isLoggedInCookie.setMaxAge(30 * 24 * 60 * 60); // Số giây trong 30 ngày
        isLoggedInCookie.setPath("/");
        response.addCookie(isLoggedInCookie);
    }

    private void addUsernameCookie(HttpServletResponse response, String cookieName, String username) {
        Cookie usernameCookie = new Cookie(cookieName, username);
        usernameCookie.setMaxAge(30 * 24 * 60 * 60); // Số giây trong 30 ngày
        usernameCookie.setPath("/");
        response.addCookie(usernameCookie);
    }
    
    @RequestMapping(value = "/EditAccount")
    public String EditPassword(@RequestParam("username") String username, 
			@RequestParam("new_password") String new_password, Model model) throws UnsupportedEncodingException {
    		String encodePass = hashPassword(new_password);
    		accountService.editAccount(username, encodePass);
    		String message = "Đã đổi thông tin tài khoản của bạn thành công!";
        	String encodedMessage = URLEncoder.encode(message, "UTF-8");
    		model.addAttribute("message", encodedMessage);
    		return "redirect:showCustomerProfile?username=" + username + "&message=" + encodedMessage;
    }
    
    //ADMIN
    @RequestMapping(value = "/adminShowAllAccount")
	public String showAllAccount(Model model, @RequestParam(value = "message", required = false) String message) {
		List<Account> accounts = accountService.getAllAccount();
		model.addAttribute("message", message);
		model.addAttribute("accounts", accounts);
		return "admin/admin-account";
	}
    @RequestMapping(value = "/resetPassword")
    public String resetPassword(@RequestParam("username") String username, Model model) throws UnsupportedEncodingException {
    	String encodePass = hashPassword("1");
    	accountService.changePassword(username, encodePass);
    	String message = "Đã reset mật khẩu cho tài khoản " + username + " thành công!";
    	String encodedMessage = URLEncoder.encode(message, "UTF-8");
		model.addAttribute("message", encodedMessage);
    	return "redirect:adminShowAllAccount?message=" + encodedMessage;
    }
	@RequestMapping(value = "/showFormAccountInfo")
	public String showFormAccountInfo( Model model) {
    	return "admin/admin-account-edit";
	}
	@RequestMapping(value = "/adminAddAccount")
	public String adminAddAccount(@RequestParam("username") String username, @RequestParam("password") String password, 
			@RequestParam("role") String role, Model model) throws UnsupportedEncodingException {
			String encodePass = hashPassword("password");
			if (!checkExistUsername(username)) {
				String message = "Tài khoản đã tồn tại! Vui lòng nhập tên tài khoản khác!";
	    		model.addAttribute("message", message);
	        	return "admin/admin-account-edit";
			}
        	if ("user".equals(role)) {
        		accountService.addAccount(username, encodePass);
        		String message = "Thêm tài khoản thành công!";
            	String encodedMessage = URLEncoder.encode(message, "UTF-8");
        		model.addAttribute("message", encodedMessage);
            	return "redirect:adminShowAllAccount?message=" + encodedMessage;
        	}
			accountService.addAccountAdmin(username, encodePass, role);
        	String message = "Thêm tài khoản thành công!";
        	String encodedMessage = URLEncoder.encode(message, "UTF-8");
    		model.addAttribute("message", encodedMessage);
        	return "redirect:adminShowAllAccount?message=" + encodedMessage;
	}
	@RequestMapping(value = "/changeRole")
	public String changeRole(@RequestParam("username") String username, @RequestParam("role") String role, Model model) throws UnsupportedEncodingException {
		if ("user".equals(role)) {
			accountService.changeRole(username, "admin");
			String message = "Thay đổi quyền tài khoản thành công!";
        	String encodedMessage = URLEncoder.encode(message, "UTF-8");
    		model.addAttribute("message", encodedMessage);
        	return "redirect:adminShowAllAccount?message=" + encodedMessage;
		}
		accountService.changeRole(username, "user");
		String message = "Thay đổi quyền tài khoản thành công!";
    	String encodedMessage = URLEncoder.encode(message, "UTF-8");
		model.addAttribute("message", encodedMessage);
    	return "redirect:adminShowAllAccount?message=" + encodedMessage;
	}
}
