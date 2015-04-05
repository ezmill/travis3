var nav = document.getElementById("nav");
var back_button = document.getElementById("back-button");
var home = document.getElementById("home");
var main = document.getElementById("main");
var did_you_mobile = document.getElementById("did-you-mobile");
var videos = document.getElementById("videos");
var music = document.getElementById("music");
var photos = document.getElementById("photos");
var shows = document.getElementById("shows");

window.addEventListener("resize", function(e){
  if(back_button.style.display == "inline" && window.innerWidth>=700){
    back_button.style.display = "none";
  }
  if(nav.style.display == "none" && window.innerWidth>=700){
    nav.style.display = "block";
  }


});

$(".did-you").circleType({radius: 1200});
$(".did-you").css("position", "fixed");
$(".did-you").css("margin", "0");
$("#did-you-mobile").circleType({radius: 400});
$("#did-you-mobile").css("position", "fixed");
