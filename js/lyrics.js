// pages.js
// Delevoper: Маршин Entertainment
// Used to expand lyrics cards and highlights interesting moments

// 2022


$(document).ready(function() {

	console.log("lyrics.js ready")

	//Vars for buttons and divs

	//Lyrics card ID
	var lyrics_card = document.querySelectorAll('[id^="lyrcis-card-"]')

	//Short text in closed card
	var lyrcis_short_text = document.querySelectorAll('[id^="lyrics-card-short-"]');

	//Expand button cards button
	var lyrcis_open_card = document.querySelectorAll('[id^="lyrics-card-opene-"]');

	//Expanded card with full text
	var lyrcis_full_text = document.querySelectorAll('[id^="lyrics-card-expand-"]');		

	//Close card button
	var lyrcis_close_card = document.querySelectorAll('[id^="lyrics-card-close-"]');	

	// Listen user click on text or button
	for (var i=0; i < lyrcis_short_text.length; i += 1) {
		lyrcis_short_text[i].addEventListener("click", ExpandLyricsCard);
	}

	for (var i=0; i < lyrcis_open_card.length; i += 1) {
		lyrcis_open_card[i].addEventListener("click", ExpandLyricsCard);
	}

	function ExpandLyricsCard() {
		var selectedcard = this.id;
		var selectedid = selectedcard.substring(18);
		var selectedcardid = "#lyrcis-card-" + selectedid;
		var selectedcardshtext = "#lyrics-card-short-" + selectedid
		var selectedidopenbtn = "#lyrics-card-opene-" + selectedid
		var selectedcardexp = "#lyrics-card-expand-" + selectedid

		console.log(selectedcardid)
		console.log(selectedcardshtext)
		console.log(selectedidopenbtn)
		$(selectedcardid).addClass('lyrics-card-expanded')
		$(selectedcardshtext).css("display", "none")
		$(selectedidopenbtn).css("display", "none")
		$(selectedcardexp).css("display", "block")
		// lyrcis_open_card.style.display = "none"
		// lyrcis_full_text.style.display = "block"
		// lyrcis_close_card.style.display = "block"
	}


	for (var i=0; i < lyrcis_close_card.length; i += 1) {
		lyrcis_close_card[i].addEventListener("click", CloseLyricsCard);
	}


	function CloseLyricsCard() {
		var selectedcard = this.id;
		var selectedid = selectedcard.substring(18);
		var selectedcardid = "#lyrcis-card-" + selectedid;
		var selectedcardshtext = "#lyrics-card-short-" + selectedid
		var selectedidopenbtn = "#lyrics-card-opene-" + selectedid
		var selectedcardexp = "#lyrics-card-expand-" + selectedid

		$(selectedcardid).removeClass('lyrics-card-expanded')
		$(selectedcardshtext).css("display", "block")
		$(selectedidopenbtn).css("display", "block")
		$(selectedcardexp).css("display", "none")
	}

})