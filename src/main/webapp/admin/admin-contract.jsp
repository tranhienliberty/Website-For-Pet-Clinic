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
			  <div id="profile-page" class="layer-stretch">
        <div style = "width: 794px; margin:auto; overflow-y:auto;" class="layer-wrapper">
            <div class="theme-material-card text-center">
            <p style = "text-align: center; margin-top: 30px;"class="font-16"><strong>CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</strong></p>
            <p style = "text-align: center;"class="font-16"><strong>Độc lập - Tự do - Hạnh phúc</strong></p>
            <p style = "text-align: right;"class="font-16">Đà Nẵng, ngày 12 tháng 7 năm 2023</p>
            <p style = "text-align: center; font-size: 20px; margin-top: 50px"><strong>HỢP ĐỒNG LAO ĐỘNG</strong></p>
            <p style = "text-align: center;"class="font-16">Số: ${contract.id_contract}</p>
            <div class = "col-md-12">
	            <ul>
		           	<li><p class="font-16 text-justify">Chúng tôi, một bên là: đại diện phòng khám thú y Pettiny </p></li>
		            <li><p class="font-16 text-justify">Hôm nay tại 54 Nguyễn Lương Bằng, phường Hòa Khánh Nam, quận Liên Chiểu, thành phố Đà Nẵng</p></li>
	            </ul>
            </div>
            <div class = "col-md-12">
            	<p style = "font-size: 18px;" class="font-16 text-justify"><strong>BÊN A (NGƯỜI SỬ DỤNG LAO ĐỘNG):</strong>&nbsp &nbsp Bà: Trần Thị Thu Hiền</p>
	            <p style = "font-size: 16px;" class="font-16 text-justify">Đại diện: Phòng khám thú cưng Pettiny &nbsp  Chức vụ: Chủ sở hữu</p>
	            <p style = "font-size: 16px;" class="font-16 text-justify">Quốc tịch: Việt Nam</p>
	            <p style = "font-size: 16px;" class="font-16 text-justify">Địa chỉ: 54 Nguyễn Lương Bằng, phường Hòa Khánh Bắc, quận Liên Chiểu, thành phố Đà Nẵng</p>
	            <p style = "font-size: 16px;" class="font-16 text-justify">Số điện thoại: 0935466618</p>
	            <p style = "font-size: 16px;" class="font-16 text-justify">Mã số Thuế: 0987654321</p>
	            <p style = "font-size: 16px;" class="font-16 text-justify">Số tài khoản: 1234567891234</p>
	            <p style = "font-size: 16px;" class="font-16 text-justify">Ngân hàng: MB Bank</p>
	            <p style = "font-size: 18px;" class="font-16 text-justify"><strong>BÊN B (NGƯỜI LAO ĐỘNG):</strong> &nbsp &nbsp Ông/Bà: ${contract.name}</p>
	            <p style = "font-size: 16px;" class="font-16 text-justify">Ngày tháng năm sinh: <fmt:formatDate type = "date" dateStyle = "long" value = "${contract.date_of_birth }" /> &nbsp &nbsp Quốc tịch: ${contract.nationality }&nbsp  &nbsp Giới tính: ${contract.gender}</p>
	            <p style = "font-size: 16px;" class="font-16 text-justify">Quê quán: ${contract.country }</p>
	            <p style = "font-size: 16px;" class="font-16 text-justify">Địa chỉ thường trú: ${contract.address }</p>
	            <p style = "font-size: 16px;" class="font-16 text-justify">Số CMTND: ${contract.identity_card } &nbsp &nbsp &nbsp  Ngày cấp: <fmt:formatDate type = "date" dateStyle = "long" value = "${contract.identity_date }" />&nbsp &nbsp  &nbsp Nơi cấp: ${contract.identity_place }</p>
	            <p style = "font-size: 16px;" class="font-16 text-justify">Số điện thoại: ${contract.phone }</p>
	            <p style = "font-size: 16px;" class="font-16 text-justify">Email: ${contract.email }</p>
	            <p style = "font-size: 16px;" class="font-16 text-justify">Trình độ: ${contract.graduate } 
	            <p style = "font-size: 16px;" class="font-16 text-justify">Số tài khoản: ${contract.bank_number } 
	            <p style = "font-size: 16px;" class="font-16 text-justify">Ngân hàng: ${contract.bank_name } 
	            <p style = "font-size: 16px;" class="font-16 text-justify">Sau khi thỏa thuận, hai bên thống nhất ký Hợp đồng lao động (HĐLĐ) với các điều khoản sau đây:</p>
	            <p style = "font-size: 18px;" class="font-16 text-justify"><strong>Điều 1: Điều khoản chung</strong></p>
	            <p style = "font-size: 16px;" class="font-16 text-justify">1. Loại HĐLĐ: Hợp đồng thuê nhân viên. Ngày ký: <fmt:formatDate type = "date" dateStyle = "long" value = "${contract.date_sign }" /></p>
	            <p style = "font-size: 16px;" class="font-16 text-justify">2. Thời điểm bắt đầu: <fmt:formatDate type = "date" dateStyle = "long" value = "${contract.date_begin }" /></p>
	            <p style = "font-size: 16px;" class="font-16 text-justify">3. Thời điểm kết thúc: <fmt:formatDate type = "date" dateStyle = "long" value = "${contract.date_end }" /></p>
	            <p style = "font-size: 16px;" class="font-16 text-justify">4. Địa điểm làm việc: Phòng khám thú y Pettiny, 54 Nguyễn Lương Bằng, phường Hòa Khánh Bắc, quận Liên Chiểu, thành phố Đà Nẵng.</p>
	            <p style = "font-size: 16px;" class="font-16 text-justify">5. Chức danh chuyên môn (vị trí công tác): ${contract.getPosition().getName_position()}</p>
	            <p style = "font-size: 16px;" class="font-16 text-justify">6. Nhiệm vụ công việc như sau: </p>
	            <p style = "font-size: 16px;" class="font-16 text-justify">- Thực hiện công việc theo đúng chức danh chuyên môn của mình dưới sự quản lý, điều hành của người có thẩm quyền.</p>
	            <p style = "font-size: 16px;" class="font-16 text-justify">- Phối hợp cùng với các bộ phận khác trong phòng khám để phát huy tối đa hiệu quả công việc. </p>
            	<p style = "font-size: 18px;" class="font-16 text-justify"><strong>Điều 2: Chế độ làm việc</strong></p>
            	<p style = "font-size: 16px;" class="font-16 text-justify">1. Thời gian làm việc: Từ 8h đến 11h, 13h đến 18h hàng ngày.</p>
            	<p style = "font-size: 16px;" class="font-16 text-justify">2. Đi làm đúng giờ, nếu có việc đột xuất phát sinh hoặc có nhu cầu vui lòng báo trước với người phụ trách. </p>
            	<p style = "font-size: 16px;" class="font-16 text-justify">3. Thiết bị và công cụ làm việc sẽ được cấp phát tùy theo nhu cầu của công việc.</p>
            	<p style = "font-size: 16px;" class="font-16 text-justify">4. Điều kiện an toàn và vệ sinh lao động tại nơi làm việc theo quy định của pháp luật hiện hành.</p>
            	<p style = "font-size: 18px;" class="font-16 text-justify"><strong>Điều 3: Quyền và nghĩa vụ của người lao động</strong></p>
            	<p style = "font-size: 18px;" class="font-16 text-justify"><strong><em>1. Quyền của người lao động</em></strong></p>
            	<p style = "font-size: 16px;" class="font-16 text-justify">a) Tiền lương và phụ cấp: </p>
            	<p style = "font-size: 16px;" class="font-16 text-justify">- Mức lương/Thù lao chính: ${contract.salary } VND</p>
            	<p style = "font-size: 16px;" class="font-16 text-justify">- Phụ cấp hiệu suất công việc và phụ cấp trách nhiệm (nếu có): Theo đánh giá của quản lý. </p>
            	<p style = "font-size: 16px;" class="font-16 text-justify">- Lương hiệu quả (nếu có): Theo quy định của phòng khám.</p>
            	<p style = "font-size: 16px;" class="font-16 text-justify">– Hình thức trả lương: ${contract.payment }</p>
            	<p style = "font-size: 16px;" class="font-16 text-justify">– Thời gian trả lương: Ngày 15 mỗi tháng.</p>
            	<p style = "font-size: 16px;" class="font-16 text-justify">b) Các quyền lợi khác: </p>
            	<p style = "font-size: 16px;" class="font-16 text-justify">- Khen thưởng: Người lao động được khuyến khích bằng vật chất và tinh thần khi có thành tích trong công tác.</p>
            	<p style = "font-size: 16px;" class="font-16 text-justify">- Chế độ nâng lương: Theo quy định của Nhà nước. </p>
            	<p style = "font-size: 16px;" class="font-16 text-justify">- Chế độ nghỉ: Theo quy định chung của Nhà nước. </p>
            	<p style = "font-size: 16px;" class="font-16 text-justify">+ Nghỉ hàng năm: Những nhân viên được ký Hợp đồng chính thức và có thâm niên công tác 12 tháng thì sẽ được nghỉ phép năm có hưởng lương (mỗi năm 12 ngày phép). Nhân viên có thâm niên làm việc dưới 12 tháng thì thời gian nghỉ hằng năm được tính theo tỷ lệ tương ứng với số thời gian làm việc.</p>
            	<p style = "font-size: 16px;" class="font-16 text-justify">+ Nghỉ ngày Lễ: Các ngày nghỉ lễ theo quy định của pháp luật.</p>
            	<p style = "font-size: 16px;" class="font-16 text-justify">- Chế độ Bảo hiểm theo quy định của Nhà nước. </p>
            	<p style = "font-size: 16px;" class="font-16 text-justify">- Chế độ phúc lợi: trợ cấp về ốm đau, tai nạn trong quá trình lao động, bệnh tật nghề nghiệp, trợ cấp thai sản, hưu trí. (theo quy định) </p>
            	<p style = "font-size: 16px;" class="font-16 text-justify">- Các chế độ được hưởng: Người lao động được hưởng các chế độ ngừng việc, trợ cấp thôi việc hoặc bồi thường theo quy định của pháp luật hiện hành.</p>
            	<p style = "font-size: 16px;" class="font-16 text-justify">- Được đơn phương chấm dứt Hợp đồng theo quy định của pháp luật và nội quy của phòng khám.</p>
            	<p style = "font-size: 18px;" class="font-16 text-justify"><strong><em>2. Nghĩa vụ của người lao động</em></strong></p>
            	<p style = "font-size: 16px;" class="font-16 text-justify">a) Thực hiện công việc với hiệu quả cao nhất theo sự phân công, điều hành của người có thẩm quyền. </p>
            	<p style = "font-size: 16px;" class="font-16 text-justify">b) Hoàn thành công việc được giao và sẵn sàng chấp nhận mọi sự điều động khi có yêu cầu. </p>
            	<p style = "font-size: 16px;" class="font-16 text-justify">c) Nắm rõ và chấp hành nghiêm túc kỷ luật lao động, an toàn lao động, vệ sinh lao động, phòng cháy chữa cháy, văn hóa phòng khám, nội quy lao động và các chủ trương, chính sách của phòng khám. </p>
            	<p style = "font-size: 16px;" class="font-16 text-justify">d) Bồi thường vi phạm và vật chất theo quy chế, nội quy của phòng khám và pháp luật Nhà nước quy định.</p>
            	<p style = "font-size: 16px;" class="font-16 text-justify">e) Tham dự đầy đủ, nhiệt tình các buổi huấn luyện, đào tạo, hội thảo do phòng khám tổ chức.</p>
            	<p style = "font-size: 16px;" class="font-16 text-justify">f) Thực hiện đúng cam kết trong hợp đồng lao động và các thỏa thuận bằng văn bản khác với phòng khám.</p>
            	<p style = "font-size: 16px;" class="font-16 text-justify">g) Tuyệt đối thực hiện cam kết bảo mật thông tin.</p>
            	<p style = "font-size: 16px;" class="font-16 text-justify">h) Đóng các loại bảo hiểm, thuế, phí đầy đủ theo quy định của pháp luật.</p>
            	<p style = "font-size: 18px;" class="font-16 text-justify"><strong>Điều 4: Quyền và nghĩa vụ của người sử dụng lao động</strong></p>
            	<p style = "font-size: 18px;" class="font-16 text-justify"><strong><em>1. Quyền của người sử dụng lao động</em></strong></p>
            	<p style = "font-size: 16px;" class="font-16 text-justify">a) Điều hành người lao động hoàn thành công việc theo Hợp đồng (bố trí, điều chuyển công việc cho người lao động theo đúng chức năng chuyên môn).</p>
            	<p style = "font-size: 16px;" class="font-16 text-justify">b) Có quyền tạm thời chuyển người lao động sang làm công việc khác, ngừng việc và áp dụng các biện pháp kỷ luật theo quy định của pháp luật hiện hành và theo nội quy phòng khám trong thời gian Hợp đồng còn giá trị.</p>
            	<p style = "font-size: 16px;" class="font-16 text-justify">c) Tạm hoãn, chấm dứt Hợp đồng, kỷ luật người lao động theo đúng quy định của pháp luật và nội quy phòng khám.</p>
            	<p style = "font-size: 16px;" class="font-16 text-justify">d) Có quyền đòi bồi thường, khiếu nại với cơ quan liên đới để bảo vệ quyền lợi của mình nếu người lao động vi phạm pháp luật hay các điều khoản của hợp đồng này.</p>
            	<p style = "font-size: 18px;" class="font-16 text-justify"><strong><em>2. Nghĩa vụ của người sử dụng lao động</em></strong></p>
            	<p style = "font-size: 16px;" class="font-16 text-justify">- Thực hiện đầy đủ những điều kiện cần thiết đã cam kết trong Hợp đồng lao động để người lao động đạt hiệu quả công việc cao. Bảo đảm việc làm cho người lao động theo Hợp đồng đã ký.</p>
            	<p style = "font-size: 16px;" class="font-16 text-justify">- Thanh toán đầy đủ, đúng thời hạn các chế độ và quyền lợi cho người lao động.</p>
            	<p style = "font-size: 18px;" class="font-16 text-justify"><strong>Điều 5: Những thỏa thuận khác</strong></p>
            	<p style = "font-size: 16px;" class="font-16 text-justify">Trong quá trình thực hiện hợp đồng nếu một bên có nhu cầu thay đổi nội dung trong Hợp đồng phải báo cho bên kia trước ít nhất 03 ngày và ký kết bản Phụ lục Hợp đồng theo quy định của pháp luật. Trong thời gian tiến hành thỏa thuận hai bên vẫn tuân theo Hợp đồng lao động đã ký kết.</p>
            	<p style = "font-size: 16px;" class="font-16 text-justify">Người lao động đọc kỹ, hiểu rõ và cam kết thực hiện các điều khoản và quy định ghi tại Hợp đồng lao động.</p>
            	<p style = "font-size: 18px;" class="font-16 text-justify"><strong>Điều 6: Điều khoản thi hành</strong></p>
            	<p style = "font-size: 16px;" class="font-16 text-justify">Những vấn đề về lao động không ghi trong Hợp đồng này thì áp dụng theo quy định của thỏa ước tập thể, nội quy lao động và pháp luật lao động.</p>
            	<p style = "font-size: 16px;" class="font-16 text-justify">Khi hai bên ký kết Phụ lục Hợp đồng lao động thì nội dung của Phụ lục Hợp đồng lao động cũng có giá trị như các nội dung của bản hợp đồng này.</p>
            	<p style = "font-size: 16px;" class="font-16 text-justify">Hợp đồng này được lập thành 2 bản có giá trị pháp lý như nhau, mỗi bên giữ 1 bản./.</p>
            </div>
            <div style = "margin-left: 10px; margin-right: 10px; "class ="row">
            <div style = "border: 2px solid; margin-bottom: 5px;" class = "col-md-6 text-center">
            	<p style = "font-size: 18px;"> <strong>NGƯỜI SỬ DỤNG LAO ĐỘNG </strong></p>
            	<p style = "font-size: 16px;">(ký và ghi rõ họ tên)</p>
            </div> 
            <div style = "border: 2px solid; margin-bottom: 5px;" class = "col-md-6 text-center">
            	<p style = "font-size: 18px;"> <strong>NGƯỜI LAO ĐỘNG</strong></p>
            	<p style = "font-size: 16px;">(ký và ghi rõ họ tên)</p>
            </div> 
            <div class = "col-md-6">
                 <p style = "font-size: 16px; margin-top: 70px;"><strong>Trần Thị Thu Hiền</strong></p>
            </div>
            <div class = "col-md-6">
                 <p style = "font-size: 16px; margin-top: 70px;"><strong>${contract.name }</strong></p>
            </div>
            </div>        
            </div>  
        </div>
    </div>
		</div>        </main>
    </div>
    <script src="<c:url value="/resources/js/admin-main-test.js"/>"></script>
	<script src = '<c:url value="/resources/js/jquery-2.1.4.min.js" />' ></script>
    <script src='<c:url value="/resources/js/popper.min.js" />'></script>
	<script src = '<c:url value="/resources/js/bootstrap.min.js" />' ></script>
    <script src='<c:url value="/resources/js/jquery.magnific-popup.min.js" />'></script>
</body>
</html>