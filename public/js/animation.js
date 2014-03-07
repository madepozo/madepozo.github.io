// var $header = $('header');
// var $pos = 180;
// $(window).scroll( positionFixed);
// function positionFixed() {
// 	if ($(window).scrollTop() >= $pos) {
// 		$header.addClass('fixed');
// 		$('header .info').css({'display':'none'});
// 		$('header .social .avatar .nota').css({'display':'none'});
// 		$('nav').css({'marginTop':'140px'});
// 		$(window).scrollTop($pos);
// 	} else {
// 		$('nav').css({'marginTop': '10px'})
// 		$header.removeClass('fixed');
// 		$('header .info').css({'display':'block'});
// 		$('header .social .avatar .nota').css({'display':'block'});
// 	}
// }

// (function($, window){
// 	console.log('dentro');
// 	$('.category h4').hover(function () {
// 			console.log('hover');
// 			$(this).parent('.category').find('.box-hover').css({'display':'block'});
// 		}, function () {
// 			$(this).parent('.category').find('.box-hover').css({'display':'none'});
// 		}
// 	)
// }(jQuery, window));


$(document).on('ready',inicio);

function inicio(){
	console.log('ready');
	toogleBox();
}

function toogleBox() {
	$('.category h4').hover(
		function () {
			$(this).parent('.category').find('.box-hover').css({'display':'block'});
		}, function () {
			$( this ).parent('.category').find('.box-hover').css({'display':'none'});
		}
	);	
}