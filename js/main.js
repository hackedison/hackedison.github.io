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

var scrollPoints = [
	0,
	525,
	1085,
	1610,
	2170,
	2519,
	10000
];

$(window).on('scroll', function() {
	var scrollIndex;
	for (var i = 1; i < scrollPoints.length; i++) {
		var scrollPos = document.body.scrollTop;
		if (scrollPos >= (scrollPoints[i - 1] - 100) && scrollPos < scrollPoints[i]) {
			scrollIndex = i - 1;
		}
	}
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
    offset: -250
});