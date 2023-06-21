package com.petshop.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.petshop.Entity.Blog;
import com.petshop.Service.BlogService;

@Controller
public class BlogController {
	@Autowired
	private BlogService blogService;
	
	@RequestMapping(value = "/showBlogList")
	public String showBlogList(@RequestParam("id_animal_type") int id_animal_type, Model model) {
		List<Blog> blogs = blogService.showBlogList(id_animal_type);
		model.addAttribute("id_animal_type", id_animal_type);
		model.addAttribute("blogList", blogs);
		return "customer/blog";
	}
	@RequestMapping(value = "/showBlogDetail")
	public String showBlogDetail(@RequestParam("id_blog") int id_blog,@RequestParam("id_animal_type") int id_animal_type, Model model) {
		Blog blog = blogService.showBlogByID(id_blog);
		model.addAttribute("id_animal_type", id_animal_type);
		model.addAttribute("blogDetail", blog);
		return "customer/blog-detail";
	}
}
