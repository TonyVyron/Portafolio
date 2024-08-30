(function ($) {
    "use strict";
    
    // Loader
    var loader = function () {
        setTimeout(function () {
            if ($('#loader').length > 0) {
                $('#loader').removeClass('show');
            }
        }, 1);
    };
    loader();

    // Iniciar WOW.js
    new WOW().init();
    
    // Botón de volver arriba
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.navbar').addClass('nav-sticky');
        } else {
            $('.navbar').removeClass('nav-sticky');
        }
    });

    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });

    // Typed.js Initiate
    if ($('.hero .hero-text h2').length == 1) {
        var typed_strings = $('.hero .hero-text .typed-text').text().split(', ');
        var typed = new Typed('.hero .hero-text h2', {
            strings: typed_strings,
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }

    // Skills
    $('.skills').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});

    // Testimonials carousel
    $(".testimonials-carousel").owlCarousel({
        center: true,
        autoplay: true,
        dots: true,
        loop: true,
        responsive: {
            0: {
                items: 1
            }
        }
    });

    // Portafolio filtro
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-filter li').on('click', function () {
        $("#portfolio-filter li").removeClass('filter-active');
        $(this).addClass('filter-active');
        portfolioIsotope.isotope({ filter: $(this).data('filter') });
    });

    // Copiar número de WhatsApp
    function copyWhatsAppNumber() {
        const phoneNumber = "9931074765"; // Reemplaza con tu número de WhatsApp
        navigator.clipboard.writeText(phoneNumber).then(() => {
            alert("Número de WhatsApp copiado al portapapeles: " + phoneNumber);
        }).catch(err => {
            console.error("Error al copiar el número de WhatsApp: ", err);
        });
    }

    // Copiar correo electrónico
    function copyEmail() {
        const email = "tony@example.com"; // Reemplaza con tu dirección de correo electrónico
        navigator.clipboard.writeText(email).then(() => {
            alert("Dirección de correo copiada al portapapeles: " + email);
        }).catch(err => {
            console.error("Error al copiar la dirección de correo: ", err);
        });
    }

})(jQuery);
