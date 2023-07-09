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
    <link rel="shortcut icon" type="image/png" href="assets/lightning.png"/>
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css">
    <link rel="stylesheet" href="<c:url value="/resources/css/admin-main-test.css"/>">
    <link rel="stylesheet" href="<c:url value="/resources/css/admin-table.css"/>">
    <link rel="stylesheet" href="<c:url value="/resources/css/appointment.css"/>">
    <link rel="stylesheet" href="<c:url value="/resources/css/bootstrap.min.css"/>">
    <link rel="stylesheet" href="<c:url value="https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/3.10.2/fullcalendar.min.css"/>">
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
			 <div class="layer-stretch">
        <div style = "width: 95%;" class="layer-wrapper">
            <div class="theme-material-card">
                <div id="calendar" class="font-13"></div>
            </div>
        </div>
    </div>
	<form>
	<div id="event-popup" class="modal fade" role="dialog">
	    <div class="modal-dialog modal-lg">
	        <div class="modal-content">
	            <div class="modal-header text-center">
	                <h4 class="modal-title font-20"></h4>
	                <button type="button" class="close" data-dismiss="modal">&times;</button>
	            </div>
	            <div class="modal-body">
	                    <p class="paragraph-medium paragraph-black event-ttl">
	                        <span class="theme-dropcap primary-color"></span>
	                    </p>
	                    <p class="paragraph-medium paragraph-black event-phone">
	                    </p>
	                    <p class="paragraph-medium paragraph-black event-email">
	                    </p>
	                    <p class="paragraph-medium paragraph-black event-note">
	                    </p>
	                    <p class="paragraph-medium paragraph-black event-status">
	                    </p>
	                    <input style = "display: none;" class="paragraph-medium paragraph-black event-id" type="text" name = "id"></input>
	                    <p class="font-16 color-orange event-date text-right ">
						    <fmt:formatDate value="" pattern="dd/MM/yyyy HH:mm" />
						</p>
	
	            </div>
	            <div class="modal-footer">
	               	<button id = "edit-button" class=" edit-button mdl-button mdl-js-button mdl-js-ripple-effect button button-primary">Đã xong</button>
	               	<button id = "cancel-button" class="cancel-button mdl-button mdl-js-button mdl-js-ripple-effect button button-primary" style = "background-color:#FF3333 !important"> Hủy bỏ</button>
	                <button type="button" class="mdl-button mdl-js-button mdl-button--colored mdl-js-ripple-effect button button-danger m-1" data-dismiss="modal">Đóng</button>
	            </div>
	        </div>
	    </div>
	</div>
	</form>
		</div>        </main>
    </div>
    <script src="<c:url value="/resources/js/admin-main-test.js"/>"></script>
	<script src = '<c:url value="/resources/js/jquery-2.1.4.min.js" />' ></script>
    <script src='<c:url value="/resources/js/popper.min.js" />'></script>
	<script src = '<c:url value="/resources/js/bootstrap.min.js" />' ></script>
	<script src = '<c:url value="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js" />' ></script>
	<script src = '<c:url value="https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/3.10.2/fullcalendar.min.js" />' ></script>
	<script src = '<c:url value="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/locale/vi.min.js" />' ></script>
    <script src='<c:url value="/resources/js/jquery.magnific-popup.min.js" />'></script>
	 <script>
 
    var todayDate = moment().startOf('day'),
        YM = todayDate.format('YYYY-MM'),
        YESTERDAY = todayDate.clone().subtract(1, 'day').format('YYYY-MM-DD'),
        TODAY = todayDate.format('YYYY-MM-DD'),
        TOMORROW = todayDate.clone().add(1, 'day').format('YYYY-MM-DD'),
        colorRed = '#FF3333',
        colorBlue = '#a8b3ff',
        colorPurple = '#a4547d',
        colorLight = '#FFCC99',
        colorGreen = '#00DD00';
    
	 $(document).ready(function() {
		 
		// Xử lý sự kiện click trên nút "Sửa"
		  $('#event-popup').on('click', '.edit-button', function() {
		    var eventId = $('#event-popup .event-id').val(); // Lấy ID từ input ẩn
		    // Gửi yêu cầu POST đến /adminSetDone với dữ liệu ID
		    $.post('<%=request.getContextPath()%>/adminSetDoneAppointment', {id: eventId})
		      .done(function(response) {
		        // Xử lý kết quả từ controller (response)
		        // ...
		      })
		      .fail(function(error) {
		        // Xử lý lỗi nếu có
		        // ...
		      });
		  });
		
		// Xử lý sự kiện click trên nút "Hủy"
		  $('#event-popup').on('click', '.cancel-button', function() {
		    var eventId = $('#event-popup .event-id').val(); // Lấy ID từ input ẩn
		    // Gửi yêu cầu POST đến /adminSetDone với dữ liệu ID
		    $.post('<%=request.getContextPath()%>/adminCancelAppointment', {id: eventId})
		      .done(function(response) {
		        // Xử lý kết quả từ controller (response)
		        // ...
		      })
		      .fail(function(error) {
		        // Xử lý lỗi nếu có
		        // ...
		      });
		  });
		
		
    // Đoạn mã JSP để tạo danh sách sự kiện từ danh sách appointment
  var events = [
    <c:forEach items="${appointments}" var="item">
        {
            title: '${item.name}',
            start: '${item.appointment_date}', 
            note: 'Mô tả: ${item.note}',
            phone: 'Số điện thoại: ${item.phone}',
            email: 'E-mail: ${item.email}',
            service: 'Dịch vụ: ${item.service.name_service}',
            status: 'Trạng thái: ${item.appointment_status}',
            id: '${item.id_appointment}',
            backgroundColor:
            	'${item.appointment_status}' == "Bị hủy" ? colorRed :
                moment('${item.appointment_date}').isSameOrBefore(YESTERDAY, 'day') && '${item.appointment_status}' == "Đã xong" ? colorPurple : 
                	moment('${item.appointment_date}').isSame(TODAY, 'day') && '${item.appointment_status}' == "Chưa tới" ? colorLight :
                moment('${item.appointment_date}').isSame(TODAY, 'day') && '${item.appointment_status}' == "Đã xong" ? colorGreen :
                colorBlue,
        },
        
    </c:forEach>
        
];
    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay,listWeek'
        },
        editable: true,
        eventLimit: true,
        navLinks: true,
        events: events,
        eventClick: function(event, jsEvent, view) {
            if (event.url) {
                window.open(event.url);
                return false;
            }
            $('#event-popup .modal-title').text(event.service);
            $('#event-popup .event-ttl').text(event.title);
            $('#event-popup .event-note').text(event.note);
            $('#event-popup .event-email').text(event.email);
            $('#event-popup .event-phone').text(event.phone);
            $('#event-popup .event-status').text(event.status);
            $('#event-popup .event-date').text(event.start);
            $('#event-popup .event-id').val(event.id);
            $('#event-popup .edit-button').attr('data-id', event.id);
            $('#event-popup .cancel-button').attr('data-id', event.id);
            $('#event-popup').modal('show');
        }
        
    });
	 });    
</script>
</body>
</html>