window.addEventListener("resize", function(e){

  if(window.innerWidth >= 700){
		$(".did-you").circleType({ radius: 1200});
		$(".did-you").css("position", "fixed");
		$(".did-you").css("margin", "0");
		$(".did-you").css("font-size", "4vw");
	} else{
		$("#did-you-mobile").circleType({radius: 400});
		$("#did-you-mobile").css("position", "fixed");
	}
});
var rtime = new Date(1, 1, 2000, 12,00,00);
var timeout = false;
var delta = 200;
$(window).resize(function() {
	  if(back_button.style.display == "inline" && window.innerWidth>=700){
	    back_button.style.display = "none";
	  }
	  if(nav.style.display == "none" && window.innerWidth>=700){
	    nav.style.display = "block";
	  }
    rtime = new Date();
    if (timeout === false) {
        timeout = true;
        setTimeout(resizeend, delta);
    }
});

function resizeend() {
    if (new Date() - rtime < delta) {
        setTimeout(resizeend, delta);
    } else {
        timeout = false;
        if(window.innerWidth>=700){
        	$(".did-you").circleType({ radius: 1200});
			$(".did-you").css("position", "fixed");
			$(".did-you").css("margin", "0");
			$(".did-you").css("font-size", "4vw");
        } else {
        	$("#did-you-mobile").circleType({radius: 300});
			$("#did-you-mobile").css("position", "fixed");
        }
    }               
}

document.body.onload = function(){
	if( window.innerWidth >=700){
		$(".did-you").circleType({ radius: 1200});
		$(".did-you").css("position", "fixed");
		$(".did-you").css("margin", "0");
		$(".did-you").css("font-size", "4vw");
	} else{
		$("#did-you-mobile").circleType({radius: 300});
		$("#did-you-mobile").css("position", "fixed");
	}
}

