<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>
<html  xmlns:th="http://www.thymeleaf.org">
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
Hello admin!
								<c:set var="isLoggedIn" value="false" />
								<c:set var="username" value="" />

								<c:if test="${not empty cookie.adminIsLoggedIn}">
									<c:set var="isLoggedIn" value="${cookie.adminIsLoggedIn.value}" />
								</c:if>

								<c:if test="${not empty cookie.adminUsername}">
									<c:set var="username" value="${cookie.adminUsername.value}" />
								</c:if>
								<div class="account-item has-icon"><c:choose>
										<c:when test="${isLoggedIn}">
											<a href="#" style = "margin-right: 10px; font-size: 13.5px" 
												class="nav-top-link nav-top-not-logged-in"> <span>
													${username} </span>
											</a>
											<a href="<%=request.getContextPath()%>/logout"
												class="nav-top-link nav-top-not-logged-in"> <span>
													Đăng xuất </span>
											</a>
										</c:when>
										<c:otherwise>
											<a href="<%=request.getContextPath()%>/login"
												class="nav-top-link nav-top-not-logged-in"> <span>
													Đăng nhập ${username}</span>
											</a>
										</c:otherwise>
									</c:choose></div>
</body>
</html>