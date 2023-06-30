package com.petshop.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import com.petshop.Entity.AnimalType;
import com.petshop.Entity.Blog;

@Repository
public class BlogRepository {
	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	private class blogRowmapper implements RowMapper<Blog>{
		public Blog mapRow(ResultSet rs, int rowNum) throws SQLException {
			Blog blog = new Blog();
			blog.setId_blog(rs.getInt("id_blog"));
			blog.setCreated_date(rs.getDate("created_date"));
			blog.setTitle(rs.getString("title"));
			blog.setImage1(rs.getString("image1"));
			blog.setImage2(rs.getString("image2"));
			blog.setImage3(rs.getString("image3"));
			blog.setContent1(rs.getString("content1"));
			blog.setContent2(rs.getString("content2"));
			blog.setContent3(rs.getString("content3"));
			blog.setId_animal_type(rs.getInt("id_animal_type"));
			blog.setDeleted(rs.getBoolean("isDeleted"));
			AnimalType at = new AnimalType();
			at.setId_animal_type(rs.getInt("id_animal_type"));
			at.setName_animal_type(rs.getString("name_animal_type"));
			blog.setAnimalType(at);
			return blog;
		}
	}
	
	//Show List Blog
		public List<Blog> showBlogList(int id_animal_type){
			String sql = "SELECT b.*, a.name_animal_type\r\n"
					+ "FROM blog b\r\n"
					+ "JOIN animal_type a ON b.id_animal_type = a.id_animal_type\r\n"
					+ "WHERE b.id_animal_type = ?;";
			return jdbcTemplate.query(sql, new blogRowmapper(), id_animal_type);
		}

		public Blog showBlogByID(int id_blog) {
			String sql = "SELECT b.*, a.name_animal_type\r\n"
					+ "FROM blog b\r\n"
					+ "JOIN animal_type a ON b.id_animal_type = a.id_animal_type\r\n"
					+ "WHERE b.id_blog = ?\r\n"
					+ "";
			return jdbcTemplate.queryForObject(sql, new blogRowmapper(), id_blog);
		}

		public List<Blog> showAllBlog() {
			String sql = "SELECT b.*, a.name_animal_type\r\n"
					+ "FROM blog b\r\n"
					+ "JOIN animal_type a ON b.id_animal_type = a.id_animal_type;";
			return jdbcTemplate.query(sql, new blogRowmapper());
		}
}
