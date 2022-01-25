let previous = document.querySelector('#prev');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let backward = document.querySelector('#backward');
let forward = document.querySelector('#forward');

let title = document.querySelector('#title');

let recent_volume = document.querySelector('#volume');
let volume_show = document.querySelector('#volume_show');

let slider = document.querySelector('#duration_slider');
let total_time = document.querySelector('#total_time');
let current_time = document.querySelector('#current_time');

let show_duration = document.querySelector('#show_duration');

let track_image = document.querySelector('#track_img');
let back_image = document.querySelector('#back_img');

let present = document.querySelector('#present');
let total = document.querySelector('#total');
let artist = document.querySelector('#artist');

let timer;
let autoplay = 0;

let index_no = 0;
let Playing_song = false;

//Creo un elemento de audio
let track = document.createElement('audio');

//Array con todas las canciones
let AllSongs = [
	{
		name: "Hunter's Moon",
		path: "music/huntersmoon.mp3",
		img: "img/huntersmoon.jpg",
		back: "img/huntersmoon_back.jpg",
		singer: "Ghost",
		duration: "03:16"
	},
	{
		name: "Kiss the Go-Goat",
		path: "music/kissthego-goat.mp3",
		img: "img/kissthego-goat.jpg",
		back: "img/kissthego-goat_back.jpg",
		singer: "Ghost",
		duration: "03:14"
	},
	{
		name: "Rats",
		path: "music/rats.mp3",
		img: "img/rats.jpg",
		back: "img/rats_back.jpg",
		singer: "Ghost",
		duration: "04:21"
	},
	{
		name: "Ritual",
		path: "music/ritual.mp3",
		img: "img/ritual.jpg",
		back: "img/ritual_back.jpg",
		singer: "Ghost",
		duration: "04:29"
	},
	{
		name: "Witch image",
		path: "music/witchimage.mp3",
		img: "img/witchimage.jpg",
		back: "img/witchimage_back.jpg",
		singer: "Ghost",
		duration: "03:30"
	}
];

document.getElementById("volume_icon").onclick = mute_sound;
document.getElementById("volume").onclick = volume_change;

document.getElementById("prev").onclick = previous_song;
document.getElementById("play").onclick = justplay;
document.getElementById("next").onclick = next_song;
document.getElementById("backward").onclick = back_music;
document.getElementById("forward").onclick = forward_music;

document.getElementById("duration_slider").onchange = change_duration;

// function load the track
function load_track(index_no){
	clearInterval(timer);
	reset_slider();

	track.src = AllSongs[index_no].path;
	title.innerHTML = AllSongs[index_no].name;	
	track_image.src = AllSongs[index_no].img;
	back_image.src = AllSongs[index_no].back;
  artist.innerHTML = AllSongs[index_no].singer;
  total_time.innerHTML = AllSongs[index_no].duration;
  track.load();

	timer = setInterval(range_slider ,1000);
	total.innerHTML = AllSongs.length;
	present.innerHTML = index_no + 1;
}

load_track(index_no);

function mute_sound(){
	track.volume = 0;
	volume.value = 0;
	volume_show.innerHTML = 0;
}

 function justplay(){
 	if(Playing_song==false){
 		playsong();

 	}else{
 		pausesong();
 	}
 }

 function reset_slider() {
 	slider.value = 0;
 }

function playsong() {
  track.play();
  Playing_song = true;
  play.innerHTML = '<i class="fas fa-pause-circle"></i>';
}

function pausesong() {
	track.pause();
	Playing_song = false;
	play.innerHTML = '<i class="fas fa-play-circle"></i>';
}

function next_song() {
	if(index_no < AllSongs.length - 1){
		index_no += 1;
		load_track(index_no);
		playsong();
	}else{
		index_no = 0;
		load_track(index_no);
		playsong();
	}
}

function previous_song() {
	if(index_no > 0){
		index_no -= 1;
		load_track(index_no);
		playsong();

	}else{
		index_no = AllSongs.length;
		load_track(index_no);
		playsong();
	}
}

function volume_change() {
	volume_show.innerHTML = recent_volume.value;
	track.volume = recent_volume.value / 100;
}

function change_duration() {
	slider_position = track.duration * (slider.value / 100);
	track.currentTime = slider_position;
}

function back_music() {
	slider_position = track.currentTime - 10;
	track.currentTime = slider_position;
}

function forward_music() {
	slider_position = track.currentTime + 10;
	track.currentTime = slider_position;
}

function autoplay_switch(){
	if (autoplay==1){
       autoplay = 0;
       auto_play.style.background = "rgba(255,255,255,0.2)";
	}else{
       autoplay = 1;
       auto_play.style.background = "#FF8A65";
	}
}

function range_slider() {
	let position = 0;
        
		if(!isNaN(track.duration)){
		   position = track.currentTime * (100 / track.duration);
		   slider.value =  position;
	      }

       if(track.ended){
       	 play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
           if(autoplay==1){
		       index_no += 1;
		       load_track(index_no);
		       playsong();
           }
	    }
     }

	track.addEventListener("timeupdate", function() {
	    var timeline = document.getElementById('duration');
	    var s = parseInt(track.currentTime % 60);
	    var m = parseInt((track.currentTime / 60) % 60);
	    if (s < 10) {
	        current_time.innerHTML = m + ':0' + s;
	    }
	    else {
	        current_time.innerHTML = m + ':' + s;
	    }
	}, false);