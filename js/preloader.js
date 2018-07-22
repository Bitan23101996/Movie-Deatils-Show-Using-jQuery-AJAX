$("body").addClass("preloader-active");

$(window).on("load", function () {
    $(".preloader").fadeOut();
    $(".preloader-spinner")
        .delay(350)
        .fadeOut("slow");
    $("body").removeClass("preloader-active");
});