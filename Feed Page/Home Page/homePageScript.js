//function hide(){
  //document.getElementById("Play").innerHTML = "";
//}

//var songs = ["Sicko-Mode-Sample.mp3"];
//var poster = ["Poster1.jpg","Poster2.jpg","Poster3.jpg"];

//var songTitle = document.getElementById("songTitle");
//var fillBar = document.getElementById("fill");

//var song = new Audio();
//var currentSong = 0; //points to the current song

//window.onload = playSong; //it will call for playSong fucntion

//function playSong(){
  //song.src = songs[currentSong];//set the source of 0th song
  //songTitle.textContent = songs[currentSong];
  //song.play();
//}
//function platOrPauseSong() {
//  if(song.paused){
//    song.play();
//    $("#play img").attr("src", "pause-round-button.svg");
//    }
//  else{
//    song.pause();
//    $("#play img").attr("src", "play-button.svg");
//}

//}

$(document).ready(function(){
  $("li").click(function() {
    // remove classes from all
    $("li").removeClass("active");
    // add class to the one we clicked
    $(this).addClass("active");
   });
});//end
