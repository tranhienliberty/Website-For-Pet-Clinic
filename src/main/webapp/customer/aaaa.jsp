<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>

<style>
.container {
	display: flex;
	flex-direction: column;
}
</style>
</head>
<body>
	<aside id="woof_widget-6" class="widget WOOF_Widget">
		<div class="widget widget-woof">

			<div class="woof woof_sid woof_sid_widget " data-sid="widget"
				data-shortcode="woof sid='widget' mobile_mode='0' autosubmit='1' start_filtering_btn='0' price_filter='5' redirect='' ajax_redraw='1' btn_position='b' dynamic_recount='-1' "
				data-redirect="" data-autosubmit="1" data-ajax-redraw="1">

				<!--- here is possible to drop html code which is never redraws by AJAX ---->

				<div class="woof_redraw_zone" data-woof-ver="1.2.5.6">
					<div data-css-class="woof_price5_search_container"
						class="woof_price5_search_container woof_container woof_price_filter">
						<div class="woof_container_overlay_item"></div>
						<div class="woof_container_inner">
							<h4>Nhập khoảng giá</h4>

							<form class="filter-form" action="/filter-products" method="GET" style = "display: flex; flex-direction: column;">
								
								<div class="form-row">
									<label for="minPrice">Giá bắt đầu:</label> <input type="number"
										id="minPrice" name="minPrice" required>
								</div>

								<div class="form-row">
									<label for="maxPrice">Giá kết thúc:</label> <input
										type="number" id="maxPrice" name="maxPrice" required>
								</div>
								
								<button type="submit">Lọc sản phẩm</button>
							</form>
							<style >
    .filter-form {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 20px;
    }

    .filter-form .form-row {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
    }

    .filter-form .form-row label {
        margin-right: 10px;
        color: #FF99CC;
    }

    .filter-form .form-row input[type="number"] {
        padding: 5px;
        border: 1px solid #FF99CC;
        border-radius: 3px;
        width: 100px;
    }

    .filter-form button {
        padding: 5px 10px;
        background-color: #FF99CC;
        color: white;
        border: none;
        border-radius: 3px;
        cursor: pointer;
    }

    .filter-form button:hover {
        background-color: #FF6699;
    }
</style>
							

						</div>
					</div>
				</div>

			</div>
		</div>
	</aside>


	<div class="container">
		<div>Giá bắt đầu:</div>
		<div>Giá kết thúc:</div>
	</div>
</body>
</html>