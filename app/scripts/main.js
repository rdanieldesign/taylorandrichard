'use strict';

var TAR = {

	init: function(){
		this.scrollAnimation();
		this.toggleNav();
		// this.detectScroll();

		this.navShowing = false;
		this.carousel();
	},

	scrollAnimation: function(){
		var self = this;
		$('a[href*=#]:not([href=#])').click(function(e) {
			e.preventDefault();
			if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
				var hash = this.hash.slice(1);
				var target = document.getElementById(hash);
				$('body, html').animate({
					scrollTop: target.offsetTop
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
	},

	carousel: function(){
		$('.end__carousel').slick({
			dots: false,
			infinite: true,
			speed: 300,
			slidesToShow: 1,
			slidesToScroll: 1,
			prevArrow: '<button type="button" class="slick-prev"><img src="images/carousel-arrow-white.svg" alt="Previous Image"></button>',
			nextArrow: '<button type="button" class="slick-next"><img src="images/carousel-arrow-white.svg" alt="Next Image"></button>'
		});
	}
};

$(function() {
	TAR.init();
});
