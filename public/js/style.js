$(document).ready(function(){
    $('.blog__box').owlCarousel({
        loop:true,
        navText:false,
        responsiveClass:true,
        margin:30,
        responsive:{
            0:{
                dotsEach: 2,
                items:1,
                nav:true
            },
            576:{
                dotsEach: 2,
                items:2,
                nav:true
            },
            768:{
                dotsEach: 2,
                items:2,
                margin:30,
                nav:true
            },
            992:{
                dotsEach:2,
                items:3,
                nav:true
            },
            1200:{
                dotsEach: 2,
                items:3,
                loop:true
            }
        }
    });
});