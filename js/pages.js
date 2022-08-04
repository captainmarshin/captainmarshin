// pages.js
// Delevoper: Маршин Entertainment
// Used to show cool glass pages in Music and Shop tabs.

// 2022

// [!] Delete comments with code
// [!] Need to update this code, create single classes for page



// New function to open pages

$(document).ready(function() {

	console.log("pages.js ready")

	// This is selector for buttons which open pages

	var openpages = document.querySelectorAll('[id^="open-page-"]');

	// Select all pages

	var pages = document.querySelectorAll('[id^="page-"]');

	// All tabs have header buttons, which opens another page. But on all Tabs
	// this button starts from 001 (on Music Tab it's donate button, on Shop Tab it's cart button)

	var headbtn = document.getElementById('open-page-001')

	// This button shows in header and close current opened page

	var closebtn = document.getElementById('close-page')

	// For all pages buttons set click listener

	for (var i=0; i < openpages.length; i += 1) {
		openpages[i].addEventListener("click", OpenPage);
	}

	// Function to open page

	function OpenPage() {
		var selectedpage = this.id;
		var selectedid = selectedpage.substring(10);
		var openpage = "#page-" + selectedid;

		$(openpage).css("display", "block")
		$(openpage).css("owerflow", "scroll")
		document.body.style.overflow = "hidden";

		headbtn.style.display = "none"
		closebtn.style.display = "block"		

	}

	// Set listener to close button

	closebtn.addEventListener("click", ClosePage);

	// Function to close showe page
	// This function hide all pages - visibale and invisible

	function ClosePage() {
		
		for (var i=0; i < pages.length; i++) {
    		pages[i].style.display = 'none';
    	}

		headbtn.style.display = "block"
		closebtn.style.display = "none"

		document.body.style.overflow = "scroll";
	}

	});




// $(document).ready(function() {

// 		// Pages buttons
		
// 		var close_button = document.getElementById("close-window");

// 		var allsinglesopen = document.getElementById("open-all-singles");
// 		var windowallsingles = document.getElementById("window-all-singles");

// 		var opendonatewindow = document.getElementById("open-donate-window");
// 		var windowdonate = document.getElementById("donate");

// 		var allvideosopen = document.getElementById("open-all-videos");
// 		var windowallvideos = document.getElementById("window-all-videos");

// 		var alllyricsopen = document.getElementById("open-all-lyrics");
// 		var windowalllyrics = document.getElementById("window-all-lyrics");

// 		var closeallwindows = document.getElementById('close-all-windows');

// 			// Close button close all pages no matter from which page user call it.

// 			close_button.addEventListener("click", function() {

// 				windowallsingles.style.display = "none";
// 				windowallvideos.style.display = "none";
// 				windowalllyrics.style.display = "none";
// 				windowdonate.style.display = "none";
// 				document.body.style.overflow = "scroll";
				
// 				opendonatewindow.style.display = "block";
// 				close_button.style.display = "none";
			   
// 			})


// 			// Open All singles page

// 			allsinglesopen.addEventListener("click", function() {

// 				if (windowallsingles.style.display === "block") {
// 					windowallsingles.style.display = "none";
// 					document.body.style.overflow = "scroll";
// 					windowallsingles.style.overflow = "hidden";
// 					opendonatewindow.style.display = "block";
// 					close_button.style.display = "none";
// 				} 
// 				else 
// 				{
// 					windowallsingles.style.display = "block";
// 					document.body.style.overflow = "hidden";
// 					windowallsingles.style.overflow = "scroll";
// 					opendonatewindow.style.display = "none";
// 					close_button.style.display = "block";
// 			    }
			   
// 			});

// 			// Open Donate page

// 			opendonatewindow.addEventListener("click", function() {

// 				if (windowdonate.style.display === "block") {
// 					windowdonate.style.display = "none";
// 					document.body.style.overflow = "scroll";
// 					windowdonate.style.overflow = "hidden";
// 					opendonatewindow.style.display = "block";
// 					close_button.style.display = "none";
// 				} 
// 				else 
// 				{
// 					windowdonate.style.display = "block";
// 					document.body.style.overflow = "hidden";
// 					windowdonate.style.overflow = "scroll";
// 					opendonatewindow.style.display = "none";
// 					close_button.style.display = "block";
// 			    }
			   
// 			})

// 			// // Open All Music Videos page

// 			// allvideosopen.addEventListener("click", function() {

// 			// 	if (windowallvideos.style.display === "block") {
// 			// 		windowallvideos.style.display = "none";
// 			// 		document.body.style.overflow = "scroll";
// 			// 		windowallvideos.style.overflow = "hidden";
// 			// 		opendonatewindow.style.display = "block";
// 			// 		close_button.style.display = "none";
// 			// 	} 
// 			// 	else 
// 			// 	{
// 			// 		windowallvideos.style.display = "block";
// 			// 		document.body.style.overflow = "hidden";
// 			// 		windowallvideos.style.overflow = "scroll";
// 			// 		opendonatewindow.style.display = "none";
// 			// 		close_button.style.display = "block";
// 			//     }
			   
// 			// })


// 			// Open all lyrics page


// 			// alllyricsopen.addEventListener("click", function() {

// 			// 	if (windowalllyrics.style.display === "block") {
// 			// 		windowalllyrics.style.display = "none";
// 			// 		document.body.style.overflow = "scroll";
// 			// 		windowalllyrics.style.overflow = "hidden";
// 			// 		opendonatewindow.style.display = "block";
// 			// 		close_button.style.display = "none";
// 			// 	} 
// 			// 	else 
// 			// 	{
// 			// 		windowalllyrics.style.display = "block";
// 			// 		document.body.style.overflow = "hidden";
// 			// 		windowalllyrics.style.overflow = "scroll";
// 			// 		opendonatewindow.style.display = "none";
// 			// 		close_button.style.display = "block";
// 			//     }
			   
// 			// })

// 		})