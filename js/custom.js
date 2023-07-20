$(function () {
    $('.header .gnb>ul>li').on('click', function (e) {
        if ($('.header .gnb').hasClass('on')) {
            // if문 붙여주면 모바일on. 에서만 작동해랏
            e.preventDefault();
            $(this).find('.submenu').stop().slideToggle();
        }
    });

    $('.mopen').on('click', function () {
        $('.header .gnb').toggleClass('on');
    });

    $(window).on('resize', function () {
        $('.header .gnb').removeClass('on');
        $('.submenu').removeAttr('style');
    })
});