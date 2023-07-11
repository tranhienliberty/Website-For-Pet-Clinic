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
			return blog;
		}
	}
	
	private class blogDetailRowmapper implements RowMapper<Blog>{
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
			return jdbcTemplate.query(sql, new blogDetailRowmapper(), id_animal_type);
		}
		
		public List<Blog> showLastestBlogs() {
			String sql = "SELECT * FROM blog ORDER BY created_date DESC LIMIT 5;\r\n";
			return jdbcTemplate.query(sql, new blogRowmapper());
		}
		
		public List<Blog> showRandomBlogs() {
			String sql = "SELECT * FROM blog ORDER BY RAND() LIMIT 4;";
			return jdbcTemplate.query(sql, new blogRowmapper());
		}

		public Blog showBlogByID(int id_blog) {
			String sql = "SELECT b.*, a.name_animal_type\r\n"
					+ "FROM blog b\r\n"
					+ "JOIN animal_type a ON b.id_animal_type = a.id_animal_type\r\n"
					+ "WHERE b.id_blog = ?\r\n"
					+ "";
			return jdbcTemplate.queryForObject(sql, new blogDetailRowmapper(), id_blog);
		}

		public List<Blog> showAllBlog() {
			String sql = "SELECT b.*, a.name_animal_type\r\n"
					+ "FROM blog b\r\n"
					+ "JOIN animal_type a ON b.id_animal_type = a.id_animal_type;";
			return jdbcTemplate.query(sql, new blogDetailRowmapper());
		}

		public void editBlog(int blogID, String title, String image1, String content1, String image2, String content2,
				String image3, String content3, int id_animal_type) {
			String sql = "UPDATE blog SET title = ?, image1 = ?, content1 = ?, image2 = ?, content2 =?, image3 = ?, content3 = ?, id_animal_type = ?\r\n"
					+ "WHERE id_blog = ?;";
			Object[] params = new Object[] {title, image1, content1, image2, content2, image3, content3, id_animal_type, blogID};
			int rs =jdbcTemplate.update(sql, params);
		}

		public void addBlog(String title, Timestamp timestamp, String image1, String content1, String image2, String content2, String image3,
				String content3, int id_animal_type) {
			String sql = "INSERT INTO blog(title, created_date, image1, content1, image2, content2, image3, content3, id_animal_type)"
					+ " VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)";
			Object[] params = new Object[] {title, timestamp, image1, content1, image2, content2, image3, content3, id_animal_type};
			int rs =jdbcTemplate.update(sql, params);
		}

		public void deleteBlog(int id_blog) {
			String sql = "DELETE FROM blog WHERE id_blog = ?";
			Object[] params = new Object[] {id_blog};
			int rs =jdbcTemplate.update(sql, params);
		}

		public void editBlog1(int blogID, String title, String image1, String content1, String image2, String content2,
				String content3, int id_animal_type) {
			String sql = "UPDATE blog SET title = ?, image1 = ?, content1 = ?, image2 = ?, content2 =?, content3 = ?, id_animal_type = ?\r\n"
					+ "WHERE id_blog = ?;";
			Object[] params = new Object[] {title, image1, content1, image2, content2, content3, id_animal_type, blogID};
			int rs =jdbcTemplate.update(sql, params);
		}

		public void editBlog2(int blogID, String title, String image1, String content1, String content2, String image3,
				String content3, int id_animal_type) {
			String sql = "UPDATE blog SET title = ?, image1 = ?, content1 = ?,  content2 =?, image3 = ?, content3 = ?, id_animal_type = ?\r\n"
					+ "WHERE id_blog = ?;";
			Object[] params = new Object[] {title, image1, content1, content2, image3, content3, id_animal_type, blogID};
			int rs =jdbcTemplate.update(sql, params);
		}

		public void editBlog3(int blogID, String title, String content1, String image2, String content2, String image3,
				String content3, int id_animal_type) {
			String sql = "UPDATE blog SET title = ?, content1 = ?, image2 = ?, content2 =?, image3 = ?, content3 = ?, id_animal_type = ?\r\n"
					+ "WHERE id_blog = ?;";
			Object[] params = new Object[] {title, content1, image2, content2, image3, content3, id_animal_type, blogID};
			int rs =jdbcTemplate.update(sql, params);
		}

		public void editBlog4(int blogID, String title, String content1, String content2, String image3,
				String content3, int id_animal_type) {
			String sql = "UPDATE blog SET title = ?,  content1 = ?,  content2 =?, image3 = ?, content3 = ?, id_animal_type = ?\r\n"
					+ "WHERE id_blog = ?;";
			Object[] params = new Object[] {title, content1, content2, image3, content3, id_animal_type, blogID};
			int rs =jdbcTemplate.update(sql, params);
		}

		public void editBlog5(int blogID, String title, String image1, String content1, String content2, String content3,
				int id_animal_type) {
			String sql = "UPDATE blog SET title = ?, image1 = ?, content1 = ?, content2 =?, content3 = ?, id_animal_type = ?\r\n"
					+ "WHERE id_blog = ?;";
			Object[] params = new Object[] {title, image1, content1, content2, content3, id_animal_type, blogID};
			int rs =jdbcTemplate.update(sql, params);
		}

		public void editBlog6(int blogID, String title, String content1, String image2, String content2,
				String content3, int id_animal_type) {
			String sql = "UPDATE blog SET title = ?, content1 = ?, image2 = ?, content2 =?, content3 = ?, id_animal_type = ?\r\n"
					+ "WHERE id_blog = ?;";
			Object[] params = new Object[] {title, content1, image2, content2, content3, id_animal_type, blogID};
			int rs =jdbcTemplate.update(sql, params);
		}

		public void editBlog7(int blogID, String title, String content1, String content2, String content3,
				int id_animal_type) {
			String sql = "UPDATE blog SET title = ?, content1 = ?, content2 =?, content3 = ?, id_animal_type = ?\r\n"
					+ "WHERE id_blog = ?;";
			Object[] params = new Object[] {title, content1, content2, content3, id_animal_type, blogID};
			int rs =jdbcTemplate.update(sql, params);
		}


}
