<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Login</title>
<link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
<link href='<c:url value="/resources/css/login.css" />' rel="stylesheet" type="text/css">
<style>
form {
	background-image:
		 url('<c:url value="/resources/images/MeowLogin.png" />'), linear-gradient(-225deg, #E3FDF5 50%, #FFE6FA 50%);
	background-repeat: no-repeat;
	background-position: center center;
	background-attachment: fixed;
	background-size: 30% 100%
}
</style>
</head>
<body>
	<div class="overlay">
		<!-- LOGN IN FORM by Omar Dsoky -->
		<form>
			<!--   con = Container  for items in the form-->
			<div class="con">
				<!--     Start  header Content  -->
				<header class="head-form">
					<h2>Log In</h2>
					<!--     A welcome message or an explanation of the login form -->
					<p>Login here using your username and password</p>
				</header>
				<!--     End  header Content  -->
				<br>
				<div class="field-set">

					<!--   user name -->
					<span class="input-item"> <i class="bx bxs-user-circle"></i>
					</span>
					<!--   user name Input-->
					<input class="form-input" id="txt-input" type="text"
						placeholder="@UserName" required> <br>

					<!--   Password -->

					<span class="input-item"> <i class="bx bx-key"></i>
					</span>
					<!--   Password Input-->
					<input class="form-input" type="password" placeholder="Password"
						id="pwd" name="password" required>

					<!--      Show/hide password  -->
					<span> <i class="bx bxs-low-vision" aria-hidden="true" type="button"
						id="eye"></i>
					</span> <br>
					<!--        buttons -->
					<!--      button LogIn -->
					<button class="log-in">Log In</button>
				</div>

				<!--   other buttons -->
				<div class="other">
					<!--      Forgot Password button-->
					<button class="btn submits frgt-pass">Forgot Password</button>
					<!--     Sign Up button -->
					<button class="btn submits sign-up">
						Sign Up
						<!--         Sign Up font icon -->
						<i class="fa fa-user-plus" aria-hidden="true"></i>
					</button>
					<!--      End Other the Division -->
				</div>

				<!--   End Conrainer  -->
			</div>

			<!-- End Form -->
		</form>
	</div>
	
</body>
<script src='<c:url value="/resources/js/login.js" />'></script>
</html>