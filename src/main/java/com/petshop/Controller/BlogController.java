package com.petshop.Controller;

import java.sql.Timestamp;
import java.time.LocalDateTime;
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
	@RequestMapping (value = "/adminShowAllBlog")
	public String showAllBlog(Model model) {
		List<Blog> blogs = blogService.showAllBlog();
		model.addAttribute("allBlog", blogs);
		return "admin/admin-blog";
	}
//	@RequestMapping(value = "/adminAddBlog")
//	public String addBlog(@RequestParam("title") String title, @RequestParam("image") String image, @RequestParam("content") String content, 
//			@RequestParam("id_animal_type") int id_animal_type) {
//		LocalDateTime currentDateTime = LocalDateTime.now();
//        Timestamp timestamp = Timestamp.valueOf(currentDateTime);
//		blogService.addBlog(title, timestamp, image, content, id_animal_type);
//		return "redirect:adminShowAllBlog";
//	}
//	@RequestMapping(value = "/adminEditBlog")
//	public String editBlog(@RequestParam("id_blog") int id_blog, @RequestParam("title") String title, @RequestParam("image") String image, 
//			@RequestParam("content") String content, @RequestParam("id_animal_type") int id_animal_type) {
//		blogService.editBlog(id_blog, title, image, content, id_animal_type);
//		return "redirect:adminShowAllBlog";
//	}
//	@RequestMapping(value = "/adminDeleteBlog")
//	public String deleteBlog(@RequestParam("id_blog") String id_blog) {
//		blogService.deleteBlog(id_blog);
//		return "redirect:adminShowAllBlog";
//	}
}
