<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your cart</title>
    <!-- Tham chiếu liên kết CSS của Font Awesome -->
  	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    <!-- main css -->
    <link rel="stylesheet" href="<c:url value="/resources/css/cart-style.css"/>" type="text/css" media="all">
    <!-- Bootstrap css -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <!-- font awesome js -->
    <script src="<c:url value="https://kit.fontawesome.com/bce767efab.js"/>" crossorigin="anonymous"></script>
</head>
<body>
    <header>
        <div class="container py-2">
            <div class="row py-2">
                <div class="col-12">
                    <h1 class="fw-bold text-center mt-2  p-4">Shopping <span class="text-danger">cart</span></h1>
                </div>
            </div>
        </div>
    </header>
    <main>
        <section>
            <div class="container">
                <div class="row">
                    <div class="cart rounded shadow">
                        <div class="first">
                            <div class="row">
                                <div class="d-flex flex-wrap justify-content-center rounded p-3 bg-white">
                                    <div class="col-md-7">
                                        <div class="d-flex justify-content-start align-items-center">
                                            <img class="img-small" src="images/product-1.png" alt="iphone">
                                            <h5 class="ps-2">iphone 11 128GB Black</h5>
                                        </div>
                                    </div>
                                    <div class="col-md-5">
                                        <div class="d-flex align-items-center mt-2 pt-4">
                                            <div class="col-md-6 col-6 d-flex justify-content-center align-items-center">
                                                <button class="border-0 bg-transparent" id="iphone-decrease"><i class="fas fa-minus me-3"></i></button>
                                                <input type="number" style="width: 4rem;" class="from-control fw-bold text-center rounded border-0 bg-light p-2" min="0" value="1" id="iphone-quantity">
                                                <button class=" border-0 bg-transparent" id="iphone-increase"><i class="fas fa-plus ms-3"></i></button>
                                            </div>
                                            <div class="col-md-3 col-3 mx-3 mt-2">
                                                <h5 class="fw-bold">$<span id="iphone-price">1219</span></h5>
                                            </div>
                                            <div class="col-md-3 col-3 mt-2">
                                                <img class="cancel-img mb-2" src="images/remove.png" alt="cencel">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- 2nd -->
                        <div class="second">
                            <div class="row">
                                <div class="d-flex flex-wrap justify-content-center  rounded p-3 bg-white mt-4">
                                    <div class="col-md-7">
                                        <div class="d-flex justify-content-start align-items-center">
                                            <img class="img-small" src="images/product-2.png" alt="iphone">
                                            <h5 class="ps-2">iPhone 11 Case - Black</h5>
                                        </div>
                                    </div>
                                    <div class="col-md-5">
                                        <div class="d-flex align-items-center mt-2 pt-4">
                                            <div class="col-md-6 col-6 d-flex justify-content-center align-items-center me-3 pe-2">
                                                <button class="border-0 bg-transparent" id="case-decrease"><i class="fas fa-minus me-3"></i></button>
                                                <input type="number" style="width: 4rem;" class="from-control fw-bold text-center rounded border-0 bg-light p-2" min="0" value="1" id="case-quantity">
                                                <button class=" border-0 bg-transparent" id="case-increase"><i class="fas fa-plus ms-3"></i></button>
                                            </div>
                                            <div class="col-md-3 col-3 me-3 mt-2">
                                                <h5 class="fw-bold">$<span id="case-price">59</span></h5>
                                            </div>
                                            <div class="col-md-3 col-3 mt-2">
                                                <img class=" mb-2 cancel-img" src="images/remove.png" alt="cencel">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- cal -->
                        <div class="calculation">
                            <div class="row">
                                <div class="d-flex justify-content-center align-items-center  p-5 rounded bg-white mt-4">
                                    <div class="col-md-6 text-start ms-5">
                                        <h5 class="me-5">Subtotal: </h5>
                                        <h5>Tax:</h5>
                                        <h5>Total:</h5>
                                    </div>
                                    <div class="col-md-6 text-end me-5 pe-4">
                                        <h5>$<span id="subtotal">1278</span></h5>
                                        <h5>$<span id="tax">0</span></h5>
                                        <h5>$<span id="total">1278</span></h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- button -->
                        <div class="text-end">
                            <button class="btn btn-success fw-bold px-5 shadow-lg rounded-pill mt-5" id="check-out">Check out</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <!-- main js -->
    <script src="<c:url value="/resources/js/cart.js"/>"></script>
    <!-- Bootstrap JavaScript -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    
</body>
</html>
