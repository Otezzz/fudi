$(document).ready(function(){

	$(".mobile-article").boxLoader({
	    direction:"x",
	    position: "-50%",
	    effect: "fadeIn",
	    duration: "1s",
	    windowarea: "70%"
});
    
    $(".menu").boxLoader({
	    direction:"y",
	    position: "100%",
	    effect: "fadeIn",
	    duration: "1s",
	    windowarea: "90%"
});
    
    $(".js-slide-right").boxLoader({
	    direction:"x",
	    position: "-50%",
	    effect: "fadeIn",
	    duration: "1s",
	    windowarea: "90%"
});

	$(".js-slide-left").boxLoader({
	    direction:"x",
	    position: "50%",
	    effect: "fadeIn",
	    duration: "1s",
	    windowarea: "90%"
});

	$(".up i").click(scroll);

});


function scroll(){

	$("html, body").animate({
        scrollTop: $(".boxes").offset().top
    }, {
    	queue: false,
    	duration: 1000});

}
