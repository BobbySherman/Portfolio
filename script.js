// script for mobile nav
$(".menu-toggle").click(function() {
    $(this).toggleClass("fa-times");
    $("nav").slideToggle(function() {
        $(this);
    });
    $("body").toggleClass("no-scroll");

    $(".nav-link").click(function() {
        $(".menu-toggle").removeClass("fa-times");
        $("nav").removeAttr("style");
        $("body").removeClass("no-scroll");
    });
});
