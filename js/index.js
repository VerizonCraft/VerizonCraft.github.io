$(window).scroll(function () {
    $("main").css({
        'opacity': 1 - (($(this).scrollTop()) / 750)
    });
});

