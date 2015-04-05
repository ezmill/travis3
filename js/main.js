window.addEventListener("resize", function(e){
  if(back_button.style.display == "inline" && window.innerWidth>=700){
    back_button.style.display = "none";
  }
  if(nav.style.display == "none" && window.innerWidth>=700){
    nav.style.display = "block";
  }
});


document.body.onload = function(){
	if( window.innerWidth >=700){
		$(".did-you").circleType({ radius: 1200});
		$(".did-you").css("position", "fixed");
		$(".did-you").css("margin", "0");
		$(".did-you").css("font-size", "4vw");
	} else{
		$("#did-you-mobile").circleType({radius: 400});
		$("#did-you-mobile").css("position", "fixed");
	}
}

