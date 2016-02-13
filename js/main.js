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
$('.section').each(function(i) {
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
	$('.navbar-custom-nav').removeClass('active');
	$($('.navbar-custom-nav').get(scrollIndex)).addClass('active');
});

var defaultScrollOptions = {
	speed: 'auto',
	autoCoefficient: 2
};

$('.footer a').smoothScroll(defaultScrollOptions);
$('.question-answer a').smoothScroll(defaultScrollOptions);

$('.navbar-custom-nav.middle a').smoothScroll({
    speed: 'auto',
    autoCoefficient: 1,
    offset: -100
});

var key = atob(atob("Tm1aak1tWmxOemMwWm1aak1HTTFORGc1WmpGbVlUQmtabVZpTldJd1ltVmlPREV4TkdSbU5BPT0="));

var REGISTRATION_DATE = 1455512400000;

function tryHack() {
	if (Date.now() < REGISTRATION_DATE) { // before Feb 15
		alert('Registration isn\'t open yet! Please try on February 15th or later.');
	} else {
		// using cors.io because cross origin requests aren't allowed to typeform
		$.getJSON('http://cors.io/?u=https://api.typeform.com/v0/form/StKOi9?key=' + key, function(response) {
	        var total = response.stats.responses.completed;
	        if (total >= 400) {
				alert('We\'re Sorry! Registration has closed because too many people have already registered.');
			} else {
				console.log('length: ' + total);
				window.open('http://hackehs.com/register.html');
			}
		});		
	}
    
}

function tryMentor() {
	if (Date.now() < REGISTRATION_DATE) { // before Feb 15
		alert('Registration isn\'t open yet! Please try on February 15th or later.');
	} else {
		window.open('http://hackehs.com/mentor.html');
	}
}