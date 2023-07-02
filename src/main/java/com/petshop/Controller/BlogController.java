package com.petshop.Controller;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.petshop.Entity.AnimalType;
import com.petshop.Entity.Blog;
import com.petshop.Entity.Product;
import com.petshop.Entity.ProductType;
import com.petshop.Service.AnimalTypeService;
import com.petshop.Service.BlogService;

@Controller
public class BlogController {
	@Autowired
	private BlogService blogService;
	@Autowired
	private AnimalTypeService animalTypeService;
	
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
		model.addAttribute("blogs", blogs);
		return "admin/admin-blog";
	}
    @RequestMapping(value = "/showFormBlogInfo")
    public String showFormBlogInfo(@RequestParam(value = "id_blog", required = false) Integer id_blog, Model model) {
    	if (id_blog != null) {
    		int blogID = id_blog.intValue();
    		Blog blog = blogService.showBlogByID(blogID);
    		List<AnimalType> at = animalTypeService.showAllAnimalType();
    		model.addAttribute("animal_type", at);
    		model.addAttribute("blog", blog);
    		return "admin/admin-blog-edit";
    	}
		List<AnimalType> at = animalTypeService.showAllAnimalType();
		model.addAttribute("animal_type", at);
    	return "admin/admin-blog-edit";
    }
    @RequestMapping(value = "adminEditBlog")
    public String editBlog(@RequestParam(value = "id_blog", required = false) Integer id_blog, @RequestParam("title") String title, @RequestParam(value = "image1", required = false) String image1, 
    		@RequestParam("content1") String content1, @RequestParam(value = "image2", required = false) String image2, @RequestParam("content2") String content2, 
    		@RequestParam(value = "image3", required = false) String image3,@RequestParam("content3") String content3, @RequestParam("id_animal_type") int id_animal_type) {
    	if(id_blog!=null&&image1!=""&&image2!=""&&image3=="") {
    		int blogID = id_blog.intValue();
    		blogService.editBlog1(blogID, title, image1, content1, image2, content2, content3, id_animal_type);
        	return "redirect:adminShowAllBlog";
    	}
    	else if(id_blog!=null&&image1!=""&&image2==""&&image3!="") {
    		int blogID = id_blog.intValue();
    		blogService.editBlog2(blogID, title, image1, content1, content2, image3, content3, id_animal_type);
        	return "redirect:adminShowAllBlog";
    	}
    	else if(id_blog!=null&&image1==""&&image2!=""&&image3!="") {
    		int blogID = id_blog.intValue();
    		blogService.editBlog3(blogID, title, content1, image2, content2, image3, content3, id_animal_type);
        	return "redirect:adminShowAllBlog";
    	}
    	else if(id_blog!=null&&image1==""&&image2==""&&image3!="") {
    		int blogID = id_blog.intValue();
    		blogService.editBlog4(blogID, title, content1, content2, image3, content3, id_animal_type);
        	return "redirect:adminShowAllBlog";
    	}
    	else if(id_blog!=null&&image1!=""&&image2==""&&image3=="") {
    		int blogID = id_blog.intValue();
    		blogService.editBlog5(blogID, title, image1, content1, content2, content3, id_animal_type);
        	return "redirect:adminShowAllBlog";
    	}
    	else if(id_blog!=null&&image1==""&&image2!=""&&image3=="") {
    		int blogID = id_blog.intValue();
    		blogService.editBlog6(blogID, title, content1, image2, content2, content3, id_animal_type);
        	return "redirect:adminShowAllBlog";
    	}
    	else if(id_blog!=null&&image1==""&&image2==""&&image3=="") {
    		int blogID = id_blog.intValue();
    		blogService.editBlog7(blogID, title, content1, content2, content3, id_animal_type);
        	return "redirect:adminShowAllBlog";
    	}
    	else if(id_blog!=null&&image1!=""&&image2!=""&&image3!="") {
    		int blogID = id_blog.intValue();
    		blogService.editBlog(blogID, title, image1, content1, image2, content2, image3, content3, id_animal_type);
        	return "redirect:adminShowAllBlog";
    	}
    	else {
    		LocalDateTime currentDateTime = LocalDateTime.now();
            Timestamp timestamp = Timestamp.valueOf(currentDateTime);
        	blogService.addBlog(title, timestamp, image1, content1, image2, content2, image3, content3, id_animal_type);
        	return "redirect:adminShowAllBlog";
    	}
    }
    @RequestMapping(value = "/adminDeleteBlog")
    public String deleteBlog(@RequestParam("id_blog") int id_blog) {
    	blogService.deleteBlog(id_blog);
    	return "redirect:adminShowAllBlog";
    }
}
