"use strict";var TAR={init:function(){this.scrollAnimation(),this.toggleNav(),this.navShowing=!1},scrollAnimation:function(){var a=this;$("a[href*=#]:not([href=#])").click(function(b){if(b.preventDefault(),location.pathname.replace(/^\//,"")===this.pathname.replace(/^\//,"")&&location.hostname===this.hostname){var c=this.hash.slice(1),d=document.getElementById(c);return $("body").animate({scrollTop:d.offsetTop},1e3),a.navShowing&&($(".navigation__list").toggleClass("active"),a.navShowing=!1),!1}})},toggleNav:function(){var a=this;$("#menu").click(function(b){b.preventDefault(),$(".navigation__list").toggleClass("active"),a.navShowing?a.navShowing=!1:a.navShowing=!0})},animateNav:function(){},detectScroll:function(){var a=$(".content").scrollTop(),b=_.throttle(function(){var b=$(this).scrollTop();b>a+15?($(".navigation, .top").hide(),$(".container-fullscreen").css("min-height","100vh")):a-15>b&&($(".navigation, .top").show(),$(".container-fullscreen").css("min-height","calc(100vh - 4rem)")),a=b},250);$(".content").scroll(b)}};$(function(){TAR.init()});