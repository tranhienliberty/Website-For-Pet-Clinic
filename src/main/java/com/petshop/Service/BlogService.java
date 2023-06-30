package com.petshop.Service;

import java.sql.Timestamp;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.petshop.Entity.Blog;
import com.petshop.Repository.BlogRepository;

@Service
public class BlogService {
	@Autowired
	private BlogRepository blogRepository;

	public List<Blog> showBlogList(int id_animal_type) {
		return blogRepository.showBlogList(id_animal_type);
	}

	public Blog showBlogByID(int id_blog) {
		return blogRepository.showBlogByID(id_blog);
	}

	public List<Blog> showAllBlog() {
		return blogRepository.showAllBlog();
	}
	
}
