'use strict';

var TAR = {

	init: function(){
		this.scrollAnimation();
		this.toggleNav();
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
				$('.navigation__list').toggleClass('active');
				return false;
			}
		});
	},

	toggleNav: function(){
		$('#menu').click(function(e){
			e.preventDefault();
			$('.navigation__list').toggleClass('active');
		});
	}

};

$(function() {
	TAR.init();
});