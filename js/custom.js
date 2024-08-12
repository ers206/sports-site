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

        setupSound();
        preloader();
        tinyslider();
        AOS.init({
            duration: 800,
            easing: 'slide',
            once: true
        });
    });
    
    // ******************************************************************************** above is original code in this file
    // Function to set up sound effects for specific links
    function setupSound() {
        console.log('Setting up sound...');
    
        // Select the specific links and audio elements
        const basketballLink = document.querySelector('#basketball-link');
        const baseballLink = document.querySelector('#baseball-link');
        const baseballSound = document.querySelector('#baseball-sound');
        const basketballSound = document.querySelector('#basketball-sound');
    
        // Debugging: Log the elements to ensure they are found
        console.log('basketballLink:', basketballLink);
        console.log('baseballLink:', baseballLink);
        console.log('baseballSound:', baseballSound);
        console.log('basketballSound:', basketballSound);
    
        // Check if the elements were found before adding event listeners
        if (basketballLink && basketballSound) {
            basketballLink.addEventListener('click', function(event) {
                event.preventDefault(); // Prevents the default link behavior
                basketballSound.play().catch(error => console.error('Error playing basketball sound:', error));
            });
        } else {
            console.warn('Basketball link or sound element not found');
        }
    
        if (baseballLink && baseballSound) {
            baseballLink.addEventListener('click', function(event) {
                event.preventDefault(); // Prevents the default link behavior
                baseballSound.play().catch(error => console.error('Error playing baseball sound:', error));
            });
        } else {
            console.warn('Baseball link or sound element not found');
        }
    }
    
})();






