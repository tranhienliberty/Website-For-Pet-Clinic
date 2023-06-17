<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>

<!-- Head -->
<head>

<title>Login</title>

<!-- Meta-Tags -->
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta name="keywords" content="Existing Login Form Widget Responsive, Login Form Web Template, Flat Pricing Tables, Flat Drop-Downs, Sign-Up Web Templates, Flat Web Templates, Login Sign-up Responsive Web Template, Smartphone Compatible Web Template, Free Web Designs for Nokia, Samsung, LG, Sony Ericsson, Motorola Web Design">
<script type="application/x-javascript"> addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false); function hideURLbar(){ window.scrollTo(0,1); } </script>
<!-- //Meta-Tags -->

<link  rel="stylesheet" href="<c:url value = "/resources/css/popuo-box.css"/>"type="text/css" media="all" />

<!-- Style --> 
<link rel="stylesheet" href="<c:url value = "/resources/css/style.css"/>" type="text/css" media="all">

<!-- Fonts -->
<link href="//fonts.googleapis.com/css?family=Quicksand:300,400,500,700" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
<!-- //Fonts -->

</head>
<!-- //Head -->
<style>
body {
	background: url('<c:url value="/resources/images/bg2.jpg"/>');
	background-repeat: no-repeat;
	background-attachment: fixed;
	background-position: center;
	background-size: cover;
	-webkit-background-size: cover;
	-moz-background-size: cover;
	-o-background-size: cover;
	color: #FFF;
	font-family: 'Quicksand', sans-serif;
	text-align: center;
}
</style>
<!-- Body -->
<body>
	<!-- Hiển thị thông báo lỗi -->
    <div th:if="${error}">
        <p style="color: red" th:text="${error}"></p>
    </div>
    <!-- Hiển thị thông báo thành công -->
	<div th:if="${success}">
		<p style="color: green" th:text="${success}"></p>
	</div>
	<div class="w3layoutscontaineragileits">
	<h2>Đăng nhập</h2>
		<form action="<%=request.getContextPath()%>/login" method="post">
			<input type="text" Name="Username" placeholder="USERNAME" required="" autofocus>
			<input type="password" Name="Password" placeholder="PASSWORD" required="">
			<ul class="agileinfotickwthree">
				<li>
					<input type="checkbox" id="brand1" value="">
					<label for="brand1"><span></span>Nhớ tài khoản</label>
					<a href="#">Quên mật khẩu?</a>
				</li>
			</ul>
			<div class="aitssendbuttonw3ls">
				<input type="submit" value="LOGIN">
				<p> Chưa có tài khoản? <span>→</span> <a class="w3_play_icon1" href="#small-dialog1"> Bấm vào đây!</a></p>
				<div class="clear"></div>
			</div>
		</form>
	</div>
	
	<!-- for register popup -->
	<div id="small-dialog1" class="mfp-hide">
		<div class="contact-form1">
			<div class="contact-w3-agileits">
				<h3>Đăng ký</h3>
				<form action="#" method="post">
						<div class="form-sub-w3ls">
							<input placeholder="User Name"  type="text" required="" autofocus>
<!-- 							<div class="icon-agile"> -->
<!-- 								<i class="fa fa-user" aria-hidden="true"></i> -->
<!-- 							</div> -->
						</div>
						<div class="form-sub-w3ls">
							<input placeholder="Email" class="mail" type="email" required="">
<!-- 							<div class="icon-agile"> -->
<!-- 								<i class="fa fa-envelope-o" aria-hidden="true"></i> -->
<!-- 							</div> -->
						</div>
						<div class="form-sub-w3ls">
							<input placeholder="Password"  type="password" required="">
<!-- 							<div class="icon-agile"> -->
<!-- 								<i class="fa fa-unlock-alt" aria-hidden="true"></i> -->
<!-- 							</div> -->
						</div>
						<div class="form-sub-w3ls">
							<input placeholder="Confirm Password"  type="password" required="">
<!-- 							<div class="icon-agile"> -->
<!-- 								<i class="fa fa-unlock-alt" aria-hidden="true"></i> -->
<!-- 							</div> -->
						</div>
					<div class="login-check">
						 <label class="checkbox"><input type="checkbox" name="checkbox" checked="">Tôi chấp nhận đăng ký tài khoản</label>
					</div>
					<div class="submit-w3l">
						<input type="submit" value="Register">
					</div>
				</form>
			</div>
		</div>	
	</div>


</body>
<!-- //Body -->
	<!-- //for register popup -->

	<!-- pop-up-box-js-file -->  
		<script src="http://code.jquery.com/jquery-1.10.1.min.js"></script>
		<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.js"></script>
<%-- 		<script src="<c:url value='/resources/js/jquery-2.1.4.min.js' />"></script> --%>
<%-- 		<script src="<c:url value='/resources/js/jquery.magnific-popup.js' />"></script> --%>
	<!--//pop-up-box-js-file -->
	<script>
		$(document).ready(function() {
		$('.w3_play_icon,.w3_play_icon1,.w3_play_icon2').magnificPopup({
			type: 'inline',
			fixedContentPos: false,
			fixedBgPos: true,
			overflowY: 'auto',
			closeBtnInside: true,
			preloader: false,
			midClick: true,
			removalDelay: 300,
			mainClass: 'my-mfp-zoom-in'
		});
																		
		});
	</script>
</html>