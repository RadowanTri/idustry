$(document).ready(function($) {
     "use strict";
    // data-background
    $("[data-background").each(function() {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
    });
    // data-bg
    $("[data-bg-color").each(function() {
        $(this).css("background", $(this).attr("data-bg-color"))
    });
    
    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        if (scroll < 245) {
            $(".menu-area").removeClass("sticky");
        } else {
            $(".menu-area").addClass("sticky");
        }
    });


}(jQuery));