$(document).ready(function(){

	resize();

	$(window).resize(function() {
		console.log("RESIZE");
		resize();
	});

});


function resize() {

	var tam = $("body").width();
	if ( tam  > 0 && tam < 480) {
		$(".mobile").show();
		$(".tablet").hide();
		$(".desktop").hide();
    //$("html").css("overflow-y", "scroll");
    //$("html").css("overflow", "");
	} else if ( tam  > 480 && tam < 1020) {
		$(".mobile").hide();
		$(".tablet").show();
		$(".desktop").hide();
  } else {
		$(".mobile").hide();
		$(".tablet").hide();
		$(".desktop").show();
	}


	var altura = $('body').height() + 'px';
	console.log(altura);

  

}


function scroll() {

  console.log("SCROLL")
	var tam = $("body").width();
	if ( tam  > 0 && tam < 480) {
    $("body").css("overflow", "");
    $("html").css("overflow", "");
    $("body").css("overflow-y", "scroll");

	} else if ( tam  > 480 && tam < 1020) {

    $("body").css("overflow", "");

    $("html").css("overflow", "");
		  $("body").css("overflow-y", "scroll");
  } else {
    $("body").css("overflow", "hidden");
    $("body").css("overflow-y", "");
    $("html").css("overflow", "hidden");
    $("html").css("overflow-y", "");
	}
}
