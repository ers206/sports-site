(function () {

    'use strict';

    // Initialize AOS
    AOS.init({
        duration: 800,
        easing: 'slide',
        once: true
    });

    // Preloader function
    var preloader = function() {
        var loader = document.querySelector('.loader');
        var overlay = document.getElementById('overlayer');

        function fadeOut(el) {
            el.style.opacity = 1;
            (function fade() {
                if ((el.style.opacity -= .1) < 0) {
                    el.style.display = "none";
                } else {
                    requestAnimationFrame(fade);
                }
            })();
        };

        setTimeout(function() {
            fadeOut(loader);
            fadeOut(overlay);
        }, 200);
    };
    preloader();

    // Tiny Slider initialization
    var tinyslider = function() {
        var slider = document.querySelectorAll('.features-slider');
        var postSlider = document.querySelectorAll('.post-slider');
        var testimonialSlider = document.querySelectorAll('.testimonial-slider');
        
        if ( slider.length > 0 ) {
            var tnsSlider = tns({
                container: '.features-slider',
                mode: 'carousel',
                speed: 700,
                items: 3,
                gutter: 30,
                loop: false,
                edgePadding: 80,
                controlsPosition: 'bottom',
                nav: false,
                controlsContainer: '#features-slider-nav',
                responsive: {
                    0: { items: 1 },
                    700: { items: 2 },
                    900: { items: 3 }
                }
            });
        }

        if ( postSlider.length > 0 ) {
            var tnsPostSlider = tns({
                container: '.post-slider',
                mode: 'carousel',
                speed: 700,
                items: 3,
                gutter: 30,
                loop: true,
                edgePadding: 10,
                controlsPosition: 'bottom',
                navPosition: 'bottom',
                nav: true,
                autoplay: true,
                controlsContainer: '#post-slider-nav',
                responsive: {
                    0: { items: 1 },
                    700: { items: 2 },
                    900: { items: 3 }
                }
            });
        }

        if ( testimonialSlider.length > 0 ) {
            var tnsTestimonialSlider = tns({
                container: '.testimonial-slider',
                mode: 'carousel',
                speed: 700,
                items: 1,
                gutter: 30,
                loop: true,
                edgePadding: 10,
                controlsPosition: 'bottom',
                navPosition: 'bottom',
                nav: true,
                autoplay: true,
                controlsContainer: '#testimonial-slider-nav',
                controls: false,
                responsive: {
                    0: { items: 1 },
                    700: { items: 1 },
                    900: { items: 1 }
                }
            });
        }
    };
    tinyslider();

    // GLightbox initialization
    document.addEventListener('DOMContentLoaded', function() {
        console.log('DOM fully loaded and parsed');

        if (typeof GLightbox === 'function') {
            var lightboxVideo = GLightbox({
                selector: '.glightbox'
            });
        } else {
            console.warn('GLightbox function is not available');
        }

        // setupSound();
        preloader();
        tinyslider();
        AOS.init({
            duration: 800,
            easing: 'slide',
            once: true
        });
    });
    
    // ******************************************************************************** above is original code in this file

   

    // document.addEventListener('DOMContentLoaded', function() {
    //     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    //         anchor.addEventListener('click', function (e) {
    //             e.preventDefault();
    
    //             const targetId = this.getAttribute('href').substring(1);  // Get the target ID
    //             const targetElement = document.getElementById(targetId);  // Find the target element
    
    //             // Log the target ID and the element
    //             console.log('Target ID:', targetId);
    //             console.log('Target Element:', targetElement);
    //             console.log('Offset top:', targetElement ? targetElement.offsetTop : 'Element not found');
    
    //             let offset = window.innerWidth < 768 ? 150 : 100;  // Adjust offset for smaller screens
    
    //             if (targetElement) {
    //                 // Scroll to the target element if it exists
    //                 window.scrollTo({
    //                     top: targetElement.offsetTop - offset,
    //                     behavior: 'smooth'
    //                 });
    //             } else {
    //                 console.log('Target element not found!');
    //             }
    //         });
    //     });
    // });


    console.log('custom.js is loaded');
})();









