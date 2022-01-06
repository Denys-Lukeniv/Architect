$('a[href^="#"]').on('click', function(event) {
    event.preventDefault();
    
    let link = $(this).attr("href"),
        anim = $(link).offset().top;
        $('html, body').animate({scrollTop: anim}, 1000,'swing');
})

$(function () {
    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    })
})

$(window).scroll(function () {
    if ($(this).scrollTop() > 400) {
        $('.scrollup').fadeIn();
    }
    else {
        $('.scrollup').fadeOut();
    }
});


$(document).ready(function () {
    $(".section-hide").on('click', function () {
        $(".top-rated").slideToggle("slow");
    });
});