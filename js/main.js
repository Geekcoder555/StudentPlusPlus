(function($) {
	"use strict"
	$(".about-video").click(function () {
    var $this = $(this);
    var $iframe = $("<iframe>").attr("src", "https://www.youtube.com/embed/4VEWLLe89dU").css({"width": 400, "height": 300});
    var $title = $("<h1>").text($this.data("title"));
    $("#video-view").html($title).append($iframe);
    $iframe.wrap("<div class='class-video'>");
});
	// Preloader
	$(window).on('load', function() {
		$("#preloader").delay(600).fadeOut();
	});

	// Mobile Toggle Btn
	$('.navbar-toggle').on('click',function(){
		$('#header').toggleClass('nav-collapse')
	});
	
})(jQuery);