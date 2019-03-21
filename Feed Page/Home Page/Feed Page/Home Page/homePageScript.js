var songs = ["Sicko-Mode-Sample.mp3"];

var songTitle = document.getElementById("songTitle");
var fillBar = document.getElementById("fill");

var song = new Audio();
var currentSong = 0;

window.onload = playSong();

function playSong(){
  song.src = songs[currentSong];

  songTitle.textContent = 'swagg out with me';

  song.play();
}






$(document).ready(function(){
  $("li").click(function() {
    // remove classes from all
    $("li").removeClass("active");
    // add class to the one we clicked
    $(this).addClass("active");
   });
});//end
