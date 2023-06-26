	const totalElement = document.getElementById("total");
	if (totalElement.innerText.trim() === "") {
	  totalElement.innerText = "0";
	}
	document.querySelectorAll('[id$="-increase"]').forEach(function(element) {
	  element.addEventListener('click', function() {
	    var productId = element.id.replace('-increase', '');
	    updateNumber(productId, true);
	  });
	});
	
	document.querySelectorAll('[id$="-decrease"]').forEach(function(element) {
	  element.addEventListener('click', function() {
	    var productId = element.id.replace('-decrease', '');
	    updateNumber(productId, false);
	  });
	});
	  function updateNumber(product, isIncreasing) {
	    const quantityInput = document.getElementById(product + '-quantity');
	    let quantity = parseInt(quantityInput.value);
	    
	    const idInput = document.getElementById(product + '-id');
	    let id_product = parseInt(idInput.value);
	    
	    if (isIncreasing) {
	      quantity++;
	    } else if (quantity > 0) {
	      quantity--;
	    }

	    quantityInput.value = quantity;
	    
	    var xhr = new XMLHttpRequest();
	    xhr.open("POST", "<%=request.getContextPath()%>/updateQuantityCartItem?username=${cookie.userUsername.value}&id_product=" + id_product + "&count=" + quantity, true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
              console.log(xhr.responseText);
              location.reload();
            }
          };
        xhr.send();
	  }