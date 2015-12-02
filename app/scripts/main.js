'use strict';

var TAR = {

	init: function(){
		this.scrollAnimation();
		this.toggleNav();
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

	carousel: function(){
		$('.end__carousel').slick({
			dots: false,
			infinite: true,
			speed: 300,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 3000,
			prevArrow: '<button type="button" class="slick-prev"><img src="images/carousel-arrow.svg" alt="Previous Image"></button>',
			nextArrow: '<button type="button" class="slick-next"><img src="images/carousel-arrow.svg" alt="Next Image"></button>'
		});

		$('.slick-list').hover(function(){
			$('.end__carousel').addClass('disabled');
		}, function(){
			$('.end__carousel').removeClass('disabled');
		});
	}
};

$(function() {
	TAR.init();
});
