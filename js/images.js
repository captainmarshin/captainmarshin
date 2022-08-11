// images.js
// Delevoper: Маршин Entertainment
// Used to show full resolution images on Design page.

// 2022

$(document).ready(function () {

	var headbtn = document.getElementById('open-page-001')

	// This button shows in header and close current opened page

	var closebtn = document.getElementById('close-page')

	$('.work-cover img').on('click', function(){
	  $('.full-work img').attr('src', $(this).attr('src'));
	  $('.full-work').show();
	  document.body.style.overflow = "hidden";
	  headbtn.style.display = "none"
	  closebtn.style.display = "block"	
	});

	$('.full-work').on('click', function(){
	  $('.full-work').hide();
	  document.body.style.overflow = "scroll";
	  headbtn.style.display = "block"
	  closebtn.style.display = "none"
	});

	closebtn.addEventListener("click", CloseImage);

	function CloseImage() {
		$('.full-work').hide();
	  	document.body.style.overflow = "scroll";
		headbtn.style.display = "block"
		closebtn.style.display = "none"
	}

	});