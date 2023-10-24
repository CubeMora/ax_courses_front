(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    if (localStorage.getItem("signed")) {
        
        $('#loginForm').remove();
        $('#loginDiv').append("<button class='btn btn-dark btn-block border-0 py-3' id='btnSignout'> Sign Out </button>");
        $('#nombreHeader').append("<h1 class='display-3 text-white mb-md-4'> Email: " + localStorage.getItem("userEmail") + "</h1>");
    }

    $('#btnSignout').on("click", function(){
        localStorage.removeItem("signed");
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        location.reload();
        
    });


    
    
})(jQuery);

