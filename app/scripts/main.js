'use strict';

var TAR = {

	init: function(){
		this.scrollAnimation();
		this.toggleNav();
		// this.detectScroll();

		this.navShowing = false;
	},

	scrollAnimation: function(){
		var self = this;
		$('a[href*=#]:not([href=#])').click(function(e) {
			e.preventDefault();
			if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
				var hash = this.hash.slice(1);
				var target = document.getElementById(hash);
				$('body').animate({
					scrollTop: target.offsetTop - 44
				}, 1000);
				if (self.navShowing){
					$('.navigation__list').toggleClass('active');
					self.navShowing = false;
				}
				return false;
			}
		});
	},

	toggleNav: function(){
		var self = this;
		$('#menu').click(function(e){
			e.preventDefault();
			$('.navigation__list').toggleClass('active');
			if(self.navShowing){
				self.navShowing = false;
			} else {
				self.navShowing = true;
			}
		});
	},

	animateNav: function(){
		var self = this;
	},

	detectScroll: function(){
		var lastScrollTop = $('.content').scrollTop();
		var calculateScroll = _.throttle(function(){
			var st = $(this).scrollTop();
			if (st > lastScrollTop + 15){
				$('.navigation, .top').hide();
				$('.container-fullscreen').css('min-height', '100vh');
			} else if(st < lastScrollTop - 15) {
				$('.navigation, .top').show();
				$('.container-fullscreen').css('min-height', 'calc(100vh - 4rem)');
			}
			lastScrollTop = st;
		}, 250);
		$('.content').scroll(calculateScroll);
	}
};

$(function() {
	TAR.init();
});
