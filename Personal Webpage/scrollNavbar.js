$(function () {
    $(window).scroll(function (e) {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > 20){
            $('.navbar').addClass('scrollDown');
        } else{
            $('.navbar').removeClass('scrollDown');
        }
    });
});