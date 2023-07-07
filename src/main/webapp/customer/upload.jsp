<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<form action = "<%=request.getContextPath()%>/upload" method="POST" enctype="multipart/form-data">
<input type = "file" name = "file">
<button type = "submit">Tải lên</button>
</form>
</body>
</html>