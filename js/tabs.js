// share.js
// Delevoper: Маршин Entertainment

// 2022

// This is Tabs menu in bottom of all sites.
// Active class sets on main page of opened tab.

$(document).ready(function () {

var musicbutton = document.getElementById('open-music-tab');
var shopbutton = document.getElementById('open-shop-tab');

		shopbutton.addEventListener('click', function() {
			window.location.href = "shop.html";
		});

		musicbutton.addEventListener('click', function() {
			window.location.href = "index.html";
		});

});


