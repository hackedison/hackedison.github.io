$('.logo').on('click', function(e) {
	$(this).addClass('animated spinLogo');
	setTimeout(function() {
		$('.logo').removeClass('animated spinLogo');
	}, 1000);
}).on('touchstart', function(e) {
	e.preventDefault();
	$('.logo').addClass('animated spinLogo');
	setTimeout(function() {
		$('.logo').removeClass('animated spinLogo');
	}, 1000);
});

var scrollPoints = [];
$('.slide').each(function(i) {
	var posObj = {
		pos: $(this).position().top,
		type: $(this).hasClass('bg-primary')
	};
	scrollPoints[i] = posObj;
});

$(window).on('scroll', function() {
	var scrollIndex = 5;
	for (var i = 1; i < scrollPoints.length; i++) {
		var scrollPos = document.body.scrollTop;
		var scrollPoint1 = scrollPoints[i - 1];
		var scrollPoint2 = scrollPoints[i];
		if (scrollPos >= (scrollPoint1.pos-150) && scrollPos < scrollPoint2.pos) {
			scrollIndex = i - 1;
		}
	}
	console.log(scrollIndex);
	$('.navbar-custom-nav').removeClass('active');
	$($('.navbar-custom-nav').get(scrollIndex)).addClass('active');
});

var defaultScrollOptions = {
	speed: 'auto',
	autoCoefficient: 1
};

$('.navbar-custom-nav.top a').smoothScroll(defaultScrollOptions);
$('.question-answer a').smoothScroll(defaultScrollOptions);

$('.navbar-custom-nav.middle a').smoothScroll({
    speed: 'auto',
    autoCoefficient: 1,
    offset: -100
});