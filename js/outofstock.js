// outofstock.js
// Delevoper: Маршин Entertainment
// Used to show error when user try to open item page with outofstock tag

// 2022

$(document).ready(function() {

	console.log("outofstock.js ready")

	// This is selector for all elements with outofstock class

	var itemsofs = document.querySelectorAll('.outofstock');

	for (var i=0; i < itemsofs.length; i += 1) {
		itemsofs[i].addEventListener("click", ShowOutOfStock);
	}

	function ShowOutOfStock() {
		// $(".error_outos").show("slideUp", function() {
		// 		setTimeout(function(){
		// 			$(".error_outos").hide("slideDown")
		// 		}, 3000);
		// 	});

		$(".error_outos").css('display', 'block')
		setTimeout(function(){
					$(".error_outos").css('display', 'none')
				}, 3000);

	}

});