<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<!DOCTYPE html>
<html >
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="shortcut icon" type="image/png" href="assets/lightning.png"/>
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css">
    <link rel="stylesheet" href="<c:url value="/resources/css/admin-main-test.css"/>">
    <link rel="stylesheet" href="<c:url value="/resources/css/admin-table.css"/>">
    <title>Pettiny Admin</title>
</head>

<body class="bg-gray-200 custom-scrollbar">
								
    <!-- HEADER/NAVIGATION -->
    <header class="z-10 fixed flex flex-wrap items-center w-full py-3 header-bg">
        <div class="flex flex-no-wrap w-full">
            <div id="system-info" class="w-1/5 flex justify-center items-center px-3">
<%--                 <img style="width: 150px; height: auto;" class="h-10" src="<c:url value ="/resources/images/logo-removebg-preview.png"/>" alt="Logo"> --%>
                <span class="hidden lg:block ml-3 text-white text-center text-lg font-normal tracking-wider header-logo-text">Hệ thống quản lý Pettiny</span>
            </div>
            <div id="header-content" class="w-4/5 flex items-center">
                <div class="flex justify-end lg:justify-start w-full">
                    <span id="expand-and-shrink-menu" class="hidden lg:block cursor-pointer header-icon-bg rounded py-2 px-3 mr-2">
                        <i class="header-icon-text fas fa-bars"></i>
                    </span>
                    <input type="text" class="w-1/2 hidden lg:block header-input-text font-semibold tracking-wide header-icon-bg rounded py-2 px-3 focus:outline-none" placeholder="Search...">
                    <span id="openOffcanvasMenuMobile" class="block lg:hidden cursor-pointer header-icon-bg rounded py-2 px-3 mr-2">
                        <i class="header-icon-text fas fa-bars"></i>
                    </span>
                </div>
				<c:set var="isLoggedIn" value="false" />
								<c:set var="username" value="" />

								<c:if test="${not empty cookie.adminIsLoggedIn}">
									<c:set var="isLoggedIn" value="${cookie.adminIsLoggedIn.value}" />
								</c:if>
								<c:if test="${not empty cookie.adminUsername}">
									<c:set var="username" value="${cookie.adminUsername.value}" />
								</c:if>
            </div>
        </div>
    </header>
    <!-- /HEADER/NAVIGATION -->

    <!-- SIDEBAR -->
    <nav id="sidebar" class="hidden lg:block fixed w-1/5 mt-16 pt-5 pb-24 h-screen bg-gray-100 overflow-y-auto custom-scrollbar">
        <div class="flex flex-wrap justify-center items-center my-6">
            <img id="user-image" class="h-24 w-24 rounded-full shadow-md" src="<c:url value ="/resources/images/logo-removebg-preview.png"/>" alt="User">
            <div id="user-info" class="w-full block text-center mt-6 mb-6 leading-relaxed">
                <span class="block text-lg font-semibold uppercase text-indigo-900">${cookie.adminUsername.value}</span>
                <span class="block text-xs font-semibold uppercase text-indigo-800">Admin hệ thống</span>
            </div>
            <hr class="w-full border-b-0 border-gray-300">
        </div>

        <ul class="flex flex-wrap w-full">
            <li class="w-full py-3 px-5 mb-1 cursor-pointer bg-transparent hover:bg-gray-200 hover-icon-and-text hover-icon-and-text">
                <a>
                    <i class="w-6 fas fa-home"></i>
                    <span class="ml-1 font-semibold text-sm tracking-wide">Home</span>
                </a>
            </li>
            <li class="w-full py-3 px-5 mb-1 cursor-pointer bg-transparent hover:bg-gray-200 hover-icon-and-text">
                <a href = "<%=request.getContextPath()%>/adminShowAllCustomer">
                    <i class="w-6 fas fa-plus"></i>
                    <span class="ml-1 font-semibold text-sm tracking-wide">Quản lý thông tin khách hàng</span>
                </a>
            </li>
            <li class="w-full py-3 px-5 mb-1 cursor-pointer bg-transparent hover:bg-gray-200 hover-icon-and-text">
                <a>
                    <i class="w-6 far fa-bell"></i>
                    <span class="ml-1 font-semibold text-sm tracking-wide">Quản lý thông tin bác sĩ/nhân viên</span>
                </a>
            </li>
            <li class="w-full py-3 px-5 mb-1 cursor-pointer bg-transparent hover:bg-gray-200 hover-icon-and-text">
                <a>
                    <i class="w-6 fas fa-database"></i>
                    <span class="ml-1 font-semibold text-sm tracking-wide">Quản lý lịch hẹn</span>
                </a>
            </li>
            <li class="w-full py-3 px-5 mb-1 cursor-pointer bg-transparent hover:bg-gray-200 hover-icon-and-text">
                <a href = "<%=request.getContextPath()%>/adminShowAllProduct">
                    <i class="w-6 fas fa-star"></i>
                    <span class="ml-1 font-semibold text-sm tracking-wide">Quản lý sản phẩm</span>
                </a>
            </li>
            <li class="w-full py-3 px-5 mb-1 cursor-pointer bg-transparent hover:bg-gray-200 hover-icon-and-text">
                <a>
                    <i class="w-6 fas fa-cog"></i>
                    <span class="ml-1 font-semibold text-sm tracking-wide">Quản lý dịch vụ</span>
                </a>
            </li>
            <li class="w-full py-3 px-5 mb-1 cursor-pointer bg-transparent hover:bg-gray-200 hover-icon-and-text">
                <a>
                    <i class="w-6 fas fa-rss"></i>
                    <span class="ml-1 font-semibold text-sm tracking-wide">Quản lý hóa đơn</span>
                </a>
            </li>
            <li class="w-full py-3 px-5 mb-1 cursor-pointer bg-transparent hover:bg-gray-200 hover-icon-and-text">
                <a href = "<%=request.getContextPath()%>/adminShowAllAccount">
                    <i class="w-6 fas fa-share-alt"></i>
                    <span class="ml-1 font-semibold text-sm tracking-wide">Quản lý tài khoản</span>
                </a>
            </li>
            <li class="w-full py-3 px-5 mb-1 cursor-pointer bg-transparent hover:bg-gray-200 hover-icon-and-text">
                <a>
                    <i class="w-6 far fa-user-circle"></i>
                    <span class="ml-1 font-semibold text-sm tracking-wide">Thống kê và báo cáo</span>
                </a>
            </li>
            <li class="w-full py-3 px-5 mb-1 cursor-pointer bg-transparent hover:bg-gray-200 hover-icon-and-text">
                <a>
                    <i class="w-6 fas fa-download"></i>
                    <span class="ml-1 font-semibold text-sm tracking-wide">Download</span>
                </a>
            </li>
            <li class="w-full py-3 px-5 mb-1 cursor-pointer bg-transparent hover:bg-gray-200 hover-icon-and-text">
                <a>
                    <i class="w-6 far fa-edit"></i>
                    <span class="ml-1 font-semibold text-sm tracking-wide">Edit</span>
                </a>
            </li>
            <li class="w-full py-3 px-5 mb-1 cursor-pointer bg-transparent hover:bg-gray-200 hover-icon-and-text">
                <a>
                    <i class="w-6 fas fa-fingerprint"></i>
                    <span class="ml-1 font-semibold text-sm tracking-wide">Fingerprint</span>
                </a>
            </li>
            <li class="w-full py-3 px-5 mb-1 cursor-pointer bg-transparent hover:bg-gray-200 hover-icon-and-text">
                <a href="<%=request.getContextPath()%>/logout">
                    <i class="w-6 fas fa-fingerprint"></i>
                    <c:choose>
								<c:when test="${isLoggedIn}">
								<div class="flex flex-1 justify-end items-center">
				                    		<i class="cursor-pointer header-icon-text header-icon-bg rounded py-3 px-10 far mr-3">
				                    			<span style="display: inline-block; vertical-align: middle;"> Đăng xuất </span></i> 
				                </div>
								</c:when>
					</c:choose>
                </a>
            </li>
        </ul>
    </nav>
    <!-- /SIDEBAR -->
		
        <nav id="offcanvas-mobile" class="block lg:hidden nav-offcanvas">
        </nav>

    <div id="offcanvas-overlay" class="block lg:hidden offcanvas-overlay"></div>

    <div class="flex flex-wrap justify-end items-center w-full bg-gray-200">
        <main id="main-content" class="flex flex-wrap justify-end items-center w-full lg:w-4/5 mt-16 p-5 bg-gray-200">
		<div class="table-wrapper">
			<a href = "<%=request.getContextPath()%>/showFormStaffInfo"><button style="text-align: left; margin: 4px; background-color: #FF99CC; color: white; padding: 3px 5px; border: 1px solid #CC99CC; border-radius: 5px;">Thêm nhân viên</button></a>	
			<table class="fl-table" style="overflow-y: auto;">
				<thead>
					<tr>
						<th>Tên nhân viên</th>
						<th>CMND</th>
						<th>Ngày sinh</th>
						<th>Số điện thoại</th>
						<th>Email</th>
						<th>Địa chỉ</th>
						<th>Bằng cấp</th>
						<th>Kinh nghiệm làm việc</th>
						<th>Vị trí làm việc</th>
						<th>Hợp đồng<th>
						<th>Tên tài khoản</th>
						<th>Thao tác</th>
					</tr>
				</thead>
				<tbody>
					<c:forEach items="${staffs}" var="item">
						<tr>
							<td><c:out value="${item.name_staff}" /> </td>
							<td><c:out value="${item.identity_card}" /></td>
							<td><c:out value="${item.date_of_birth}" /></td>
							<td><c:out value="${item.phone}" /></td>
							<td><c:out value="${item.email}" /></td>
							<td><c:out value="${item.address}" /></td>
							<td><c:out value="${item.certificate}" /></td>
							<td><c:out value="${item.experience}" /></td>
							<td><c:out value="${item.getPosition().getName_position()}" /></td>
							<td><a>Xem hợp đồng</a></td>
							<td><c:out value="${item.username}" /></td>
							<td>
							<a class="bx bxs-edit bx-xs"
								style="text-decoration: none; color: green"
								href="<%=request.getContextPath()%>/showFormStaffInfo?id_staff=${item.id_staff}">
							</a> &nbsp &nbsp <a class="bx bxs-trash bx-xs"
								style="text-decoration: none; color: red" href="#"
								onclick="confirmDelete(${item.id_staff})"> </a></td>
						</tr>
					</c:forEach>
				<tbody>
			</table>
		</div>        </main>
    </div>
    <script src="<c:url value="/resources/js/admin-main-test.js"/>"></script>
	<script>
	function confirmDelete(id_staff) {
	  if (confirm('Bạn có chắc chắn muốn xóa nhân viên này?')) {
	    // Nếu người dùng chọn OK trong hộp thoại xác nhận
	    window.location.href = 'adminDeleteStaff?id_staff=' + id_staff;
	  } else {
	  }
	}
	</script>	
</body>
</html>