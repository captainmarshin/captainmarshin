// player.js
// Delevoper: Маршин Entertainment
// Used to play music in mini-player and tracks from Release pages.

// tracklist.json
// This file contains all releases with uniq ID. 
// Don't forget to put new releases in it and set ID in index.html/release page

// Some function is not uniq, i get it from stackoverflow.
// 2022


$(document).ready(function () {

			var loadingaudio = false;

			// When document is ready - loading tracklist.json
			// This file contains all releases with id, cover, cloud link

			var data = JSON.parse($.getJSON({'url': "https://captainmarshin.com/js/player/tracklist.json", 'async': false}).responseText);

			// Set vars for buttons and interface elements

			var music = document.getElementById("mini-player-new-release");
		  	var start_music_button = document.getElementById("mini-player-start-btn");
		  	var play_music_button = document.getElementById("mini-player-play-btn");
		  	var pause_music_button = document.getElementById("mini-player-pause-btn");
		  	var loading_icon = document.getElementById("mini-player-loading");

		  	var rewind_btn = document.getElementById("mini-player-rewind-btn");

		  	var like_btn = document.getElementById("mini-player-like-btn");

		  	var myProgressBar = document.getElementById('mini-player-timeline-bar'); 

		  	// Listen press on Start button and launch audio file fetch.
		  	// "touchstart" uses for mobile devices ("click" works on mobile too, but in one moment "click" stop working :/ )

			start_music_button.addEventListener("click", loadingAudio);
			start_music_button.addEventListener("touchstart", loadingAudio);


			// Set vars for track data
			// This var updates from JSON when user select track in Tracklist (mini-player-expand)

			var audio_url = "https://dl.dropbox.com/s/ja4fj90sbnlp7yk/Indica.mp3";
			var release_name = "";
			var release_cover = "";



			// DOWNLOAD TRACK FUNCTION
			// This function fire when user click on download icon in tracklist or release page


			var downloadids = document.querySelectorAll('[id^="download_id_"]');

			// downloadids.addEventListener('click', e => { // can also onclick
			//   // filter only elements you care about
			//   if (!e.target.matches('flash-card-check-mark')) return;  
			//   var elem = e.target;
			//   var elemContent = e.querySelector('p'); // query selector nests


			//   if (elem.getAttribute("checked") === null) {
			//     elemContent.style.border = "1px solid #0000";
			//   } else {
			//     elemContent.style.border = "1px solid magenta";
			//   }

			// };
				for (var i=0; i < downloadids.length; i += 1) {
					
					downloadids[i].addEventListener("click", function() {
							var selectedtrack = this.id;
							var selectedid = selectedtrack.substring(12);

							var trackid = "track_id_" + selectedid;

							var trackurl = data[trackid].release_audio_url;

							var downloadlink = trackurl + "?dl=1"
							window.open(downloadlink, "_self");
							
						});
			};


			function DownloadTrack() {
				// if ((!$(event.target).closest('.mini-player-expand-controls').length)) {
					var selectedtrack = this.id;
					var selectedid = selectedtrack.substring(12);

					var trackid = "track_id_" + selectedid;

					var trackurl = data[trackid].release_audio_url;
					console.log(trackurl)
				// }
			}



			// This is test function to get url from file when click on btn.

			var tracks = document.querySelectorAll('[id^="release_id_"]');
			for (var i=0; i < tracks.length; i += 1){
					tracks[i].addEventListener("click", function() {

						if(loadingaudio === true){
							return console.log("Sorry, track already loading :(")
						}

						if ((!$(event.target).closest('.mini-player-expand-download').length) && (!$(event.target).closest('.mini-player-expand-share').length)) {

							SwitchTrack();

							var selectedtrack = this.id;
							var selectedid = selectedtrack.substring(11);

							var trackid = "track_id_" + selectedid;

							var trackname = data[trackid].release_name;
							var trackcover = data[trackid].release_cover;
							var trackurl = data[trackid].release_audio_url;

					      	audio_url = trackurl;
					      	release_name = trackname;
					      	release_cover = trackcover;

					      	document.getElementById("mini-player-cover").src = release_cover
					      	document.getElementById("mini-player-trackname").innerHTML = release_name
					      	document.getElementById('progress').innerHTML = "INSERTING CASSETTE"

					      	loadingAudio();
						}

					});
			};

			function SwitchTrack() {
				music.pause();
				music.currentTime = 0;
				myProgressBar.val = 0;
				pause_music_button.style.display = "none";

			}

			// function InsertTrack(){
			
			// 	SwitchTrack();

			// 	var selectedtrack = this.id;
			// 	var selectedid = selectedtrack.substring(11);

			// 	var trackid = "track_id_" + selectedid;

			// 	var trackname = data[trackid].release_name;
			// 	var trackcover = data[trackid].release_cover;
			// 	var trackurl = data[trackid].release_audio_url;

		    //   	audio_url = trackurl;
		    //   	release_name = trackname;
		    //   	release_cover = trackcover;

		    //   	document.getElementById("mini-player-cover").src = release_cover
		    //   	document.getElementById("mini-player-trackname").innerHTML = release_name
		    //   	document.getElementById('progress').innerHTML = "INSERTING CASSETTE"

		    //   	loadingAudio();
			// };


			// This function used to show user loading process when he click play first time
			function loadingAudio() {

				loadingaudio = true;

				// Hide Start (Play) icon.
				start_music_button.style.display = 'none';
				// Show Loading icon
				loading_icon.style.display = "inline-block";

				// Start animation for Loading icon
				var $loading_icon_anim = $(loading_icon), degree = 0, timer;			    
			    rotate();

			    // Function for icon animation
			    function rotate() {
			        
			        $loading_icon_anim.css({ WebkitTransform: 'rotate(' + degree + 'deg)'});  
			        $loading_icon_anim.css({ '-moz-transform': 'rotate(' + degree + 'deg)'});                      
			        timer = setTimeout(function() {
			            ++degree; rotate();
			        },5);
			    };

			    // This function is combine of loading music file.
			    // First, fetch audio url and show procentege of Loading file to user
			    // Procentege is auto update, so user see, how much file is loading
 				const elProgress = document.getElementById('progress');

				fetch(audio_url)
				.then(response => {
				  if (!response.ok) {
				    throw Error(response.status+' '+response.statusText)
				  }

				  if (!response.body) {
				    throw Error('ReadableStream not yet supported in this browser.')
				  }

				  // to access headers, server must send CORS header "Access-Control-Expose-Headers: content-encoding, content-length x-file-size"
				  // server must send custom x-file-size header if gzip or other content-encoding is used

				  const contentEncoding = response.headers.get('content-encoding');
				  const contentLength = response.headers.get(contentEncoding ? 'x-file-size' : 'content-length');
				  if (contentLength === null) {
				    throw Error('Response size header unavailable');
				  }

				  const total = parseInt(contentLength, 10);
				  let loaded = 0;

				  return new Response(
				    new ReadableStream({
				      start(controller) {
				        const reader = response.body.getReader();

				        read();
				        function read() {
				          reader.read().then(({done, value}) => {
				            if (done) {
				              controller.close();
				              return; 
				            }
				            loaded += value.byteLength;
				            progress({loaded, total})
				            controller.enqueue(value);
				            read();
				          }).catch(error => {
				            console.error(error);
				            controller.error(error)                  
				          })
				        }
				      }
				    })
				  );
				})
				.then(response => response.blob())
				.then(blob => {

					// We get blob after fetch, so first of all need to set blob type
					blob = blob.slice(0, blob.size, "audio/mp3")

					console.log(blob)

					// Create direct url for blob
					var link = URL.createObjectURL(blob);

					// Set created link to blob in Audio tag
					document.getElementById('mini-player-source').setAttribute("src", link);

				    // document.getElementById('mini-player-source').src = URL.createObjectURL(data);
				    // document.getElementById('mini-player-source').type = 'audio/x-m4a';

					// Load current file for ready to play.
					music.load()
					loadingaudio = false;

				})
				.catch(error => {
				  console.error(error);
				});

				// This is text and procenteges update for Loading function.
				function progress({loaded, total}) {
				  elProgress.innerHTML = 'LOADING ' + Math.round(loaded/total*100)+'%';
				};


				// Make sure, that music file is loaded and ready to play.
				// Hide start and loading icons, show Play button
				// And don't forget to kill loading button animation timer.
				// And of course show user file status.
				music.addEventListener('loadeddata', (event) => {
 					console.log('I think I can play through the entire ' +
      				'audio without ever having to stop to buffer.');
      				start_music_button.style.display = 'none';
					loading_icon.style.display = "none";
					play_music_button.style.display = "inline-block";

					console.log(music)

      				clearTimeout(timer);

      				document.getElementById('progress').innerHTML = 'READY TO PLAY';

 					// playAudio();
 				});

			}


				// This is a track progress bar. It's shows how long track playing.
				// User can press in any place of progress bar to rewind track to selected position.

				music.addEventListener('timeupdate', onLoadProgress);

				// Calculate and update progress bar position.
				function onLoadProgress () {
				    var progress = parseInt(((music.currentTime / music.duration) * 100), 10);
				    myProgressBar.value = progress; 
				}


				// Control music via Progress Bar

				// $('#mini-player-timeline-bar').bind('click', function (ev) {

				    // var player = document.querySelector("video"); // Delete this shi it's dont need i think
					var progressBar = document.querySelector("progress");
					progressBar.addEventListener("click", seek);

					// Rewind function.
					// Here we get position of user click and math this to progress bar 
					// After all we set progress var value.

					function seek(e) {
					    var percent = e.offsetX / this.offsetWidth;
					    music.currentTime = percent * music.duration;
					    var x = percent / 100;
					}
				    
					// music.currentTime = x 

				/*     prog.value = nex; */
				// });

				


			// loading_icon.addEventListener("click", stopLoading);

			// Listen clicks on play button and launch Play function
			play_music_button.addEventListener("click", playAudio);

			// Listen clicks on pause button and launch Pause function
			pause_music_button.addEventListener("click", pauseAudio);

			// function stopLoading() {
			// 	var stopsrc = "";
			// 	music.setAttribute("src", stopsrc);
			// 	console.log("Loading of track stopped.")
			// 	start_music_button.style.display = 'block';
			// 	loading_icon.style.display = "none";
			// 	play_music_button.style.display = "none";

			// }


		    // Function for playing audio
		    // All is simple. 
		    // First, we showing Track Timeline
		    // Second, start music, hide Play button and show pause button.
		    // Update Track status message and hide rewind button.

			function playAudio(){
				document.getElementById('mini-player-timeline').style.display = "block";

				music.play()
				play_music_button.style.display = 'none';
		      	pause_music_button.style.display = 'inline-block';
		      	console.log("Music start playing!");
		      	document.getElementById('progress').innerHTML = 'PLAYING NOW';
		      	like_btn.style.display = "inline-block";
		      	rewind_btn.style.display = "none";
			}

			// Function for pause audio.
			// Hide play button, share button
			// Update Track Status message
			// Show rewind button. Rewind button need to start play track from begining.

			function pauseAudio() {
				music.pause();
		      	play_music_button.style.display = 'inline-block';
		      	pause_music_button.style.display = 'none';
		      	console.log("Music stop playing!");
		      	document.getElementById('progress').innerHTML = 'PAUSED';
		      	like_btn.style.display = "none";
		      	rewind_btn.style.display = "inline-block";

			}

			// Listen when track ended
			// When track end, hide pause button, show play button,
			// update track status message

			music.addEventListener('ended',function() {
		      play_music_button.style.display = 'inline-block';
		      pause_music_button.style.display = 'none';
		      console.log("Music ended!");
		      document.getElementById('progress').innerHTML = 'SONG ENDED';

		      // [ Future ]
		      // When track end - start playing next track from tracklist in order from top to bottom (Autoplay)
		      // It can be difficult to make work on mobile :(

		    });

			// Listen Rewind button
			// When user press rewind button, tracks currentTime sets to 0 (it's a begining of track)
			// and shows user play button.
			// And of course update track status message.

		    rewind_btn.addEventListener('click',function() {
		      music.currentTime = "0";
		      play_music_button.style.display = 'inline-block';
		      pause_music_button.style.display = 'none';
		      console.log("Music start from beging!");
		      document.getElementById('progress').innerHTML = 'START FROM BEGINING';
		    });

		});

// Ape :()

		