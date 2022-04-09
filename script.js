// script for mobile nav
$(".menu-toggle").click(function() {
    $(this).toggleClass("fa-times");
    $("nav").toggleClass("open");
    $("body").toggleClass("no-scroll");

    $(".nav-link").click(function() {
        $(".menu-toggle").toggleClass("fa-times");
        $("nav").toggleClass("open");
        $("body").toggleClass("no-scroll");
    });
});
