!function(a){var adminbar_height,f,c,d,header=a(".header-middle"),adminbar=a(".admin-bar");function e(){f<c?a(".back-to-top").addClass("k2-show"):a(".back-to-top").removeClass("k2-show")}function stiky_menu(){991<d?a(".only-mobile").remove():a(".only-desktop").remove()}a(window).load(function(){d=a(window).width(),c=a(window).scrollTop(),f=a(window).height(),adminbar_height=0<adminbar.length?32:0,0<header.length&&header.offset().top,stiky_menu(),e()}),a(window).on("resize",function(){d=a(window).width(),stiky_menu()}),a(window).scroll(function(){c=a(window).scrollTop(),e()}),a(document).ready(function(){new Swiper(".banner",{direction:"horizontal",loop:!1,pagination:{el:".swiper-pagination",type:"bullets"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},autoplay:{delay:5e3},breakpoints:{0:{slidesPerView:1,spaceBetween:10},767:{slidesPerView:2,spaceBetween:30},991:{slidesPerView:3,spaceBetween:40},1200:{slidesPerView:3,spaceBetween:50}}});a(".back-to-top").on("click",function(){return a("html, body").animate({scrollTop:0},800),!1})})}(jQuery)