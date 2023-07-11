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

	public List<Blog> showRandomBlogs() {
		return blogRepository.showRandomBlogs();
	}

	public List<Blog> showLastestBlogs() {
		return blogRepository.showLastestBlogs();
	}

	public Blog showBlogByID(int id_blog) {
		return blogRepository.showBlogByID(id_blog);
	}

	public List<Blog> showAllBlog() {
		return blogRepository.showAllBlog();
	}

	public void editBlog(int blogID, String title, String image1, String content1, String image2, String content2,
			String image3, String content3, int id_animal_type) {
		blogRepository.editBlog(blogID, title, image1, content1, image2, content2, image3, content3, id_animal_type);
	}

	public void addBlog(String title, Timestamp timestamp, String image1, String content1, String image2, String content2, String image3,
			String content3, int id_animal_type) {
		blogRepository.addBlog(title, timestamp, image1, content1, image2, content2, image3, content3, id_animal_type);
	}

	public void deleteBlog(int id_blog) {
		blogRepository.deleteBlog(id_blog);
	}

	public void editBlog1(int blogID, String title, String image1, String content1, String image2, String content2,
			String content3, int id_animal_type) {
		blogRepository.editBlog1(blogID, title, image1, content1, image2, content2, content3, id_animal_type);
	}

	public void editBlog2(int blogID, String title, String image1, String content1, String content2, String image3,
			String content3, int id_animal_type) {
		blogRepository.editBlog2(blogID, title, image1, content1,  content2, image3, content3, id_animal_type);
	}

	public void editBlog3(int blogID, String title, String content1, String image2, String content2, String image3,
			String content3, int id_animal_type) {
		blogRepository.editBlog3(blogID, title, content1, image2, content2, image3, content3, id_animal_type);
	}

	public void editBlog4(int blogID, String title, String content1, String content2, String image3, String content3,
			int id_animal_type) {
		blogRepository.editBlog4(blogID, title, content1, content2, image3, content3, id_animal_type);
	}

	public void editBlog5(int blogID, String title, String image1, String content1, String content2, String content3,
			int id_animal_type) {
		blogRepository.editBlog5(blogID, title, image1, content1, content2, content3, id_animal_type);
	}

	public void editBlog6(int blogID, String title, String content1, String image2, String content2, String content3,
			int id_animal_type) {
		blogRepository.editBlog6(blogID, title, content1, image2, content2, content3, id_animal_type);
	}

	public void editBlog7(int blogID, String title, String content1, String content2, String content3,
			int id_animal_type) {
		blogRepository.editBlog7(blogID, title, content1, content2, content3, id_animal_type);
	}

}
