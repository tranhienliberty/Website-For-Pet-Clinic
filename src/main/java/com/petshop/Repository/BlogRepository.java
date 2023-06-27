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
			blog.setImage(rs.getString("image"));
			blog.setContent(rs.getString("content"));
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

		public void addBlog(String title, Timestamp timestamp, String image, String content, int id_animal_type) {
			String sql = "INSERT INTO blog(title, created_date, image, content, id_animal_type)"
					+ " VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)";
			Object[] params = new Object[] {title, timestamp, image, content, id_animal_type};
			int rs =jdbcTemplate.update(sql, params);
		}

		public void editBlog(int id_blog, String title, String image, String content, int id_animal_type) {
			String sql = "UPDATE blog SET title = ?, image = ?, content = ?, content = ?, id_animal_type = ?"
					+ "WHERE id_blog = ?;";
			Object[] params = new Object[] {title, image, content, id_animal_type, id_blog};
			int rs =jdbcTemplate.update(sql, params);
		}

		public void deleteBlog(String id_blog) {
			String sql = "DELETE FROM blog WHERE id_blog = ?";
			Object[] params = new Object[] {id_blog};
			int rs =jdbcTemplate.update(sql, params);
		}
}
