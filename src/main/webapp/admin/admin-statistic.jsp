<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<!DOCTYPE html>
<html >
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css">
    <link rel="stylesheet" href="<c:url value="/resources/css/admin-main-test.css"/>">
    <link rel="stylesheet" href="<c:url value="/resources/css/admin-table.css"/>">
    <title>Pettiny Admin</title>
    <!-- Thư viện jQuery -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <!-- Thư viện jQuery UI -->
    <link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
    <style>
    	.year-datepicker .ui-datepicker-calendar {
    display: none; /* Ẩn lịch ngày-tháng */
	}
    </style>
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
                <a href = "<%=request.getContextPath()%>/adminHome"> 
                    <i class="w-6 fas fa-home"></i>
                    <span class="ml-1 font-semibold text-sm tracking-wide">Home</span>
                </a>
            </li>
            <li class="w-full py-3 px-5 mb-1 cursor-pointer bg-transparent hover:bg-gray-200 hover-icon-and-text">
                <a href = "<%=request.getContextPath()%>/adminShowAllCustomer">
                    <i class="w-6 fas fa-user"></i>
                    <span class="ml-1 font-semibold text-sm tracking-wide">Quản lý thông tin khách hàng</span>
                </a>
            </li>
            <li class="w-full py-3 px-5 mb-1 cursor-pointer bg-transparent hover:bg-gray-200 hover-icon-and-text">
                <a href = "<%=request.getContextPath()%>/adminShowAllStaff">
                    <i class="w-6 fas fa-hospital-alt"></i>
                    <span class="ml-1 font-semibold text-sm tracking-wide">Quản lý thông tin bác sĩ/nhân viên</span>
                </a>
            </li>
            <li class="w-full py-3 px-5 mb-1 cursor-pointer bg-transparent hover:bg-gray-200 hover-icon-and-text">
                <a href = "<%=request.getContextPath()%>/adminShowAllAppointment">
                    <i class="w-6 fas fa-calendar"></i>
                    <span class="ml-1 font-semibold text-sm tracking-wide">Quản lý lịch hẹn</span>
                </a>
            </li>
            <li class="w-full py-3 px-5 mb-1 cursor-pointer bg-transparent hover:bg-gray-200 hover-icon-and-text">
                <a href = "<%=request.getContextPath()%>/adminShowAllProduct">
                    <i class="w-6 fas fa-warehouse"></i>
                    <span class="ml-1 font-semibold text-sm tracking-wide">Quản lý sản phẩm</span>
                </a>
            </li>
            <li class="w-full py-3 px-5 mb-1 cursor-pointer bg-transparent hover:bg-gray-200 hover-icon-and-text">
                <a href = "<%=request.getContextPath()%>/adminShowAllService">
                    <i class="w-6 fas fa-plus"></i>
                    <span class="ml-1 font-semibold text-sm tracking-wide">Quản lý dịch vụ</span>
                </a>
            </li>
            <li class="w-full py-3 px-5 mb-1 cursor-pointer bg-transparent hover:bg-gray-200 hover-icon-and-text">
                <a href = "<%=request.getContextPath()%>/adminShowAllBill">
                    <i class="w-6 fas fa-money-bill"></i>
                    <span class="ml-1 font-semibold text-sm tracking-wide">Quản lý hóa đơn</span>
                </a>
            </li>
            <li class="w-full py-3 px-5 mb-1 cursor-pointer bg-transparent hover:bg-gray-200 hover-icon-and-text">
                <a href = "<%=request.getContextPath()%>/adminShowAllAccount">
                    <i class="w-6 fas fa-key"></i>
                    <span class="ml-1 font-semibold text-sm tracking-wide">Quản lý tài khoản</span>
                </a>
            </li>
            <li class="w-full py-3 px-5 mb-1 cursor-pointer bg-transparent hover:bg-gray-200 hover-icon-and-text">
                <a>
                    <i class="w-6 far fa-chart-bar"></i>
                    <span class="ml-1 font-semibold text-sm tracking-wide">Thống kê và báo cáo</span>
                </a>
            </li>
            <li class="w-full py-3 px-5 mb-1 cursor-pointer bg-transparent hover:bg-gray-200 hover-icon-and-text">
                <a href = "<%=request.getContextPath()%>/adminShowAllBlog">
                    <i class="w-6 fas fa-paper-plane"></i>
                    <span class="ml-1 font-semibold text-sm tracking-wide">Quản lý blog</span>
                </a>
            </li>
            <li class="w-full py-3 px-5 mb-1 cursor-pointer bg-transparent hover:bg-gray-200 hover-icon-and-text">
                <a href="<%=request.getContextPath()%>/logout">
                    <i class="w-6 fas"></i>
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
			<form action="<%=request.getContextPath()%>/statisticByDate" method="GET">
			    &nbsp Thống kê theo ngày: &nbsp Từ &nbsp
			    <input type = "date" name = "date_begin" >
			    &nbsp đến &nbsp 
			    <input type = "date" name = "date_end" >
			    <button type="submit">Thống kê</button>
			</form>
		</div> 
		<div id="chart-container"></div>
		<div class="table-wrapper">
			&nbsp Thống kê theo tháng: &nbsp 
			    <input type = "month" name = "month" >
		</div>  
		<div class="table-wrapper">
			 &nbsp Thống kê theo năm: &nbsp 
			    <input type="text" id="year-input" name="year" placeholder="Chọn năm">
		</div>   
		<div class="table-wrapper">
			<select class="mdl-selectfield__select" id="statistic-select" name="statistic_option" required>
			        <option disabled selected>--Xem thống kê--</option>
			        <option value="1">Thống kê theo ngày</option>
			        <option value="2">Thống kê theo tháng</option>
			        <option value="3">Thống kê theo năm</option>
			    </select>
		</div> 
		</main>
    </div>
    <script src="<c:url value="/resources/js/admin-main-test.js"/>"></script>
    <script type="text/javascript">
    $(document).ready(function() {
        // Khi người dùng tập vào input
        $('#year-input').focus(function() {
            // Khởi tạo calendar với tùy chọn chỉ chọn năm
            $(this).datepicker({
                dateFormat: 'yy',
                changeMonth: false,
                changeYear: true,
                showButtonPanel: true,
                onClose: function(dateText, inst) {
                    // Lấy năm được chọn và đặt giá trị cho input
                    var year = $(this).datepicker('getDate').getFullYear();
                    $(this).val(year);
                }
            }).datepicker('widget').addClass('year-datepicker');
            
            // Hiển thị nút Done để đóng calendar
            $('.ui-datepicker-buttonpane').append('<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all">Done</button>');
        });
    });
    </script>
    <script src="https://cdn.jsdelivr.net/npm/apexcharts@latest"></script>
    <script>
    // Hàm để vẽ biểu đồ
    function drawChart(data) {
        var options = {
            series: [{
                name: 'Doanh thu',
                data: data
            }],
            chart: {
                type: 'bar',
                height: 350
            },
            xaxis: {
                categories: ['Ngày 1', 'Ngày 2', 'Ngày 3', '...'] // Thay thế bằng dữ liệu thực tế
            }
        };

        var chart = new ApexCharts(document.querySelector("#chart-container"), options);
        chart.render();
    }
	</script>
</body>
</html>