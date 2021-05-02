//https://github.com/foundation/foundation-sites/issues/11293
var scrollTop = 0;
$(window).on("beforeopen.zf.reveal .o-nextmodal", function () {
    scrollTop = Math.max($('html').scrollTop(), $('body').scrollTop(), $('#page-wrapper').scrollTop());
});
$(window).on("open.zf.reveal .o-nextmodal", function () {
    $('body').addClass('is-reveal-open');
    $('#page-wrapper').scrollTop(scrollTop);
});
$(window).on("closed.zf.reveal .o-nextmodal", function () {
    $('html, body').scrollTop(scrollTop);
    $('body').removeClass('is-reveal-open');
});
