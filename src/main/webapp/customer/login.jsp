<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<!DOCTYPE html>
<html  xmlns:th="http://www.thymeleaf.org">
<head>
<meta charset="UTF-8">
<link rel="icon" type="image/x-icon" href="<c:url value ="/resources/images/logo-removebg-preview.png"/>">
<link rel="stylesheet" href="<c:url value = "/resources/css/login-style.css"/>" type="text/css" media="all">
<title>Đăng nhập</title>
<!-- Style --> 
<style>
	.cont {
    position: relative;
    height: 100%;
    background-image: url('<c:url value="/resources/images/bg2.jpg"/>');
    background-size: cover;
    overflow: auto;
    font-family: "Open Sans", Helvetica, Arial, sans-serif;
}
</style>
</head>
<body>
	<div class="cont">
	  <div class="demo">
	    <div class="login">
	      <div class="login__check"></div>
	      <div class="login__form">
	      	<form action="<%=request.getContextPath()%>/login?previousUrl=${previousUrl}" method="post">
	      	<p style = "color:#00EE00; font-size:16px">${message}</p>
	      	<p style = "color:red; font-size:16px">${error}</p>
	        <div class="login__row">
	          <svg class="login__icon name svg-icon" viewBox="0 0 20 20">
	            <path d="M0,20 a10,8 0 0,1 20,0z M10,0 a4,4 0 0,1 0,8 a4,4 0 0,1 0,-8" />
	          </svg>
	          <input type="text" class="login__input name" name = "Username" placeholder="Username" style="color: white;"/>
	        </div>
	        <div class="login__row">
	          <svg class="login__icon pass svg-icon" viewBox="0 0 20 20">
	            <path d="M0,20 20,20 20,8 0,8z M10,13 10,16z M4,8 a6,8 0 0,1 12,0" />
	          </svg>
	          <input type="password" class="login__input pass" name = "Password" placeholder="Password" style="color: white;"/>
	        </div>
	        <button type="submit" class="login__submit">Đăng nhập</button>
	        <p class="login__signup">Chưa có tài khoản? &nbsp;<a href = "<%=request.getContextPath()%>/register">Đăng ký</a></p>
	        </form>
	      </div>
	    </div>
	    <div class="app">
	      <div class="app__top">
	        <div class="app__menu-btn">
	          <span></span>
	        </div>
	        <svg class="app__icon search svg-icon" viewBox="0 0 20 20">
	          <!-- yeap, its purely hardcoded numbers straight from the head :D (same for svg above) -->
	          <path d="M20,20 15.36,15.36 a9,9 0 0,1 -12.72,-12.72 a 9,9 0 0,1 12.72,12.72" />
	        </svg>
	        <p class="app__hello">Good Morning!</p>
	        <div class="app__user">
	          <img src="//s3-us-west-2.amazonaws.com/s.cdpn.io/142996/profile/profile-512_5.jpg" alt="" class="app__user-photo" />
	          <span class="app__user-notif">3</span>
	        </div>
	        <div class="app__month">
	          <span class="app__month-btn left"></span>
	          <p class="app__month-name">March</p>
	          <span class="app__month-btn right"></span>
	        </div>
	      </div>
	      <div class="app__bot">
	        <div class="app__days">
	          <div class="app__day weekday">Sun</div>
	          <div class="app__day weekday">Mon</div>
	          <div class="app__day weekday">Tue</div>
	          <div class="app__day weekday">Wed</div>
	          <div class="app__day weekday">Thu</div>
	          <div class="app__day weekday">Fri</div>
	          <div class="app__day weekday">Sad</div>
	          <div class="app__day date">8</div>
	          <div class="app__day date">9</div>
	          <div class="app__day date">10</div>
	          <div class="app__day date">11</div>
	          <div class="app__day date">12</div>
	          <div class="app__day date">13</div>
	          <div class="app__day date">14</div>
	        </div>
	        <div class="app__meetings">
	          <div class="app__meeting">
	            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/profile/profile-80_5.jpg" alt="" class="app__meeting-photo" />
	            <p class="app__meeting-name">Feed the cat</p>
	            <p class="app__meeting-info">
	              <span class="app__meeting-time">8 - 10am</span>
	              <span class="app__meeting-place">Real-life</span>
	            </p>
	          </div>
	          <div class="app__meeting">
	            <img src="//s3-us-west-2.amazonaws.com/s.cdpn.io/142996/profile/profile-512_5.jpg" alt="" class="app__meeting-photo" />
	            <p class="app__meeting-name">Feed the cat!</p>
	            <p class="app__meeting-info">
	              <span class="app__meeting-time">1 - 3pm</span>
	              <span class="app__meeting-place">Real-life</span>
	            </p>
	          </div>
	          <div class="app__meeting">
	            <img src="//s3-us-west-2.amazonaws.com/s.cdpn.io/142996/profile/profile-512_5.jpg" alt="" class="app__meeting-photo" />
	            <p class="app__meeting-name">FEED THIS CAT ALREADY!!!</p>
	            <p class="app__meeting-info">
	              <span class="app__meeting-time">This button is just for demo ></span>
	            </p>
	          </div>
	        </div>
	      </div>
	      <div class="app__logout">
	        <svg class="app__logout-icon svg-icon" viewBox="0 0 20 20">
	          <path d="M6,3 a8,8 0 1,0 8,0 M10,0 10,12"/>
	        </svg>
	      </div>
	    </div>
	  </div>
	</div>
	<script>
	$(document).ready(function() {
		  
		  var animating = false,
		      submitPhase1 = 1100,
		      submitPhase2 = 400,
		      logoutPhase1 = 800,
		      $login = $(".login"),
		      $app = $(".app");
		  
		  function ripple(elem, e) {
		    $(".ripple").remove();
		    var elTop = elem.offset().top,
		        elLeft = elem.offset().left,
		        x = e.pageX - elLeft,
		        y = e.pageY - elTop;
		    var $ripple = $("<div class='ripple'></div>");
		    $ripple.css({top: y, left: x});
		    elem.append($ripple);
		  };
		  
		  $(document).on("click", ".login__submit", function(e) {
		    if (animating) return;
		    animating = true;
		    var that = this;
		    ripple($(that), e);
		    $(that).addClass("processing");
		    setTimeout(function() {
		      $(that).addClass("success");
		      setTimeout(function() {
		        $app.show();
		        $app.css("top");
		        $app.addClass("active");
		      }, submitPhase2 - 70);
		      setTimeout(function() {
		        $login.hide();
		        $login.addClass("inactive");
		        animating = false;
		        $(that).removeClass("success processing");
		      }, submitPhase2);
		    }, submitPhase1);
		  });
		  
		  $(document).on("click", ".app__logout", function(e) {
		    if (animating) return;
		    $(".ripple").remove();
		    animating = true;
		    var that = this;
		    $(that).addClass("clicked");
		    setTimeout(function() {
		      $app.removeClass("active");
		      $login.show();
		      $login.css("top");
		      $login.removeClass("inactive");
		    }, logoutPhase1 - 120);
		    setTimeout(function() {
		      $app.hide();
		      animating = false;
		      $(that).removeClass("clicked");
		    }, logoutPhase1);
		  });
		  
		});
	</script>
</body>
</html>