var $header = $('header');
var $pos = 180;
$(window).scroll( positionFixed);
function positionFixed() {
	if ($(window).scrollTop() >= $pos) {
		$header.addClass('fixed');
		$('header .info').css({'display':'none'});
		$('header .social .avatar .nota').css({'display':'none'});
		$('nav').css({'marginTop':'140px'});
		$(window).scrollTop($pos);
	} else {
		$('nav').css({'marginTop': '10px'})
		$header.removeClass('fixed');
		$('header .info').css({'display':'block'});
		$('header .social .avatar .nota').css({'display':'block'});
	}
}