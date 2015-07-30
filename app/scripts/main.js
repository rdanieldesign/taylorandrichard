'use strict';

var TAR = {

	init: function(){
		this.scrollAnimation();
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
				return false;
			}
		});
	}

};

$(function() {
	TAR.init();
});