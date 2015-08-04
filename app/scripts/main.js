'use strict';

var TAR = {

	init: function(){
		this.scrollAnimation();
		this.toggleNav();
		this.detectScroll();

		this.navShowing = true;
	},

	scrollAnimation: function(){
		$('a[href*=#]:not([href=#])').click(function(e) {
			e.preventDefault();
			if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
				var hash = this.hash.slice(1);
				var target = document.getElementById(hash);
				$('.content').animate({
					scrollTop: target.offsetTop
				}, 1000);
				if (this.hash !== '#top'){
					$('.navigation__list').toggleClass('active');
				}
				return false;
			}
		});
	},

	toggleNav: function(){
		$('#menu').click(function(e){
			e.preventDefault();
			$('.navigation__list').toggleClass('active');
		});
	},

	detectScroll: function(){
		var lastScrollTop = $('.content').scrollTop();
		$('.content').scroll(function(){
			var st = $(this).scrollTop();
			if (st > lastScrollTop + 15){
				$('.navigation, .top').hide();
			} else if(st < lastScrollTop - 15) {
				$('.navigation, .top').show();
			}
			lastScrollTop = st;
		});
	}


};

$(function() {
	TAR.init();
});