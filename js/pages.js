// pages.js
// Delevoper: Маршин Entertainment
// Used to show cool glass pages in Music and Shop tabs.

// 2022

// [!] Delete comments with code
// [!] Need to update this code, create single classes for page


$(document).ready(function() {

		// Pages buttons
		
		var close_button = document.getElementById("close-window");

		var musicplayeropen = document.getElementById("mini-player-open");
		var miniplayer = document.getElementById("mini-player");
		
		var miniplayerexpand = document.getElementById("mini-player-expand");

		var allsinglesopen = document.getElementById("open-all-singles");
		var windowallsingles = document.getElementById("window-all-singles");

		var opendonatewindow = document.getElementById("open-donate-window");
		var windowdonate = document.getElementById("donate");

		var allvideosopen = document.getElementById("open-all-videos");
		var windowallvideos = document.getElementById("window-all-videos");

		var alllyricsopen = document.getElementById("open-all-lyrics");
		var windowalllyrics = document.getElementById("window-all-lyrics");

		var closeallwindows = document.getElementById('close-all-windows');

			// Close button close all pages no matter from which page user call it.

			close_button.addEventListener("click", function() {

				// windowallsingles.style.display = "none";
				// windowallvideos.style.display = "none";
				// windowalllyrics.style.display = "none";
				windowdonate.style.display = "none";
				document.body.style.overflow = "scroll";
				miniplayerexpand.style.display = "none";
				
				opendonatewindow.style.display = "block";
				close_button.style.display = "none";
			   
			})

			// This listener expand music player. I think, need to move it in player.js :/

			musicplayeropen.addEventListener("click", function() {

			  if ((!$(event.target).closest('#mini-player-ctrl-btns').length) && (!$(event.target).closest('#mini-player-like-btn').length) && (!$(event.target).closest('#mini-player-rewind-btn').length)) {

				if (miniplayerexpand.style.display === "block") {
					miniplayerexpand.style.display = "none";
					document.body.style.overflow = "scroll";
					miniplayerexpand.style.overflow = "hidden";
					opendonatewindow.style.display = "block";
					close_button.style.display = "none";
					document.getElementById("mini-player-timeline-bar").style = "height: 1px;"
				} 
				else 
				{
					miniplayerexpand.style.display = "block";
					document.body.style.overflow = "hidden";
					miniplayerexpand.style.overflow = "scroll";
					opendonatewindow.style.display = "none";
					close_button.style.display = "block";
					document.getElementById("mini-player-timeline-bar").style = "height: 15px;"
			    }
			   }
			});

			// Open All singles page

			// allsinglesopen.addEventListener("click", function() {

			// 	if (windowallsingles.style.display === "block") {
			// 		windowallsingles.style.display = "none";
			// 		document.body.style.overflow = "scroll";
			// 		windowallsingles.style.overflow = "hidden";
			// 		opendonatewindow.style.display = "block";
			// 		close_button.style.display = "none";
			// 	} 
			// 	else 
			// 	{
			// 		windowallsingles.style.display = "block";
			// 		document.body.style.overflow = "hidden";
			// 		windowallsingles.style.overflow = "scroll";
			// 		opendonatewindow.style.display = "none";
			// 		close_button.style.display = "block";
			//     }
			   
			// });

			// Open Donate page

			opendonatewindow.addEventListener("click", function() {

				if (windowdonate.style.display === "block") {
					windowdonate.style.display = "none";
					document.body.style.overflow = "scroll";
					windowdonate.style.overflow = "hidden";
					opendonatewindow.style.display = "block";
					close_button.style.display = "none";
				} 
				else 
				{
					windowdonate.style.display = "block";
					document.body.style.overflow = "hidden";
					windowdonate.style.overflow = "scroll";
					opendonatewindow.style.display = "none";
					close_button.style.display = "block";
			    }
			   
			})

			// // Open All Music Videos page

			// allvideosopen.addEventListener("click", function() {

			// 	if (windowallvideos.style.display === "block") {
			// 		windowallvideos.style.display = "none";
			// 		document.body.style.overflow = "scroll";
			// 		windowallvideos.style.overflow = "hidden";
			// 		opendonatewindow.style.display = "block";
			// 		close_button.style.display = "none";
			// 	} 
			// 	else 
			// 	{
			// 		windowallvideos.style.display = "block";
			// 		document.body.style.overflow = "hidden";
			// 		windowallvideos.style.overflow = "scroll";
			// 		opendonatewindow.style.display = "none";
			// 		close_button.style.display = "block";
			//     }
			   
			// })


			// Open all lyrics page


			// alllyricsopen.addEventListener("click", function() {

			// 	if (windowalllyrics.style.display === "block") {
			// 		windowalllyrics.style.display = "none";
			// 		document.body.style.overflow = "scroll";
			// 		windowalllyrics.style.overflow = "hidden";
			// 		opendonatewindow.style.display = "block";
			// 		close_button.style.display = "none";
			// 	} 
			// 	else 
			// 	{
			// 		windowalllyrics.style.display = "block";
			// 		document.body.style.overflow = "hidden";
			// 		windowalllyrics.style.overflow = "scroll";
			// 		opendonatewindow.style.display = "none";
			// 		close_button.style.display = "block";
			//     }
			   
			// })

			// This works when user click on Logo.
			// Need to remove this, Close button shows every time when open page or expand player

			closeallwindows.addEventListener('click', function() {

				windowallsingles.style.display = "none";
				windowallvideos.style.display = "none";
				windowalllyrics.style.display = "none";
				windowdonate.style.display = "none";
				miniplayerexpand.style.display = "none";
				document.body.style.overflow = "scroll";
				miniplayerexpand.style.overflow = "hidden";
				
				opendonatewindow.style.display = "block";
				close_button.style.display = "none";
			})
		})