// share.js
// Delevoper: Маршин Entertainment
// Simple share menu

// 2022

// [!] Delete comments with code


	$(document).ready(function () {

		var title = document.title;
		const url = document.querySelector('link[rel=canonical]') ? document.querySelector('link[rel=canonical]').href : document.location.href;
		var shareButton = document.getElementById('mini-player-like-btn');

		shareButton.addEventListener('click', event => {
		  if (navigator.share) { 
		  	navigator.share({
		  		url: url,
		    })
		    .catch(console.error);
		    } else {
		        console.log("Device don't support Share Menu")
		        // Need to make dialog for unsupported devices
		    }
		});

	});