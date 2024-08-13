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
   
    // function setupSound() {
    //     console.log('Setting up sound...');
    
        
    //     const basketballLink = document.querySelector('#basketball-link');
    //     const baseballLink = document.querySelector('#baseball-link');
    //     const baseballSound = document.querySelector('#baseball-sound');
    //     const basketballSound = document.querySelector('#basketball-sound');
    
     
    //     console.log('basketballLink:', basketballLink);
    //     console.log('baseballLink:', baseballLink);
    //     console.log('baseballSound:', baseballSound);
    //     console.log('basketballSound:', basketballSound);
    
       
    //     if (basketballLink && basketballSound) {
    //         basketballLink.addEventListener('click', function(event) {
    //             event.preventDefault(); 
    //             basketballSound.play().catch(error => console.error('Error playing basketball sound:', error));
    //         });
    //     } else {
    //         console.warn('Basketball link or sound element not found');
    //     }
    
    //     if (baseballLink && baseballSound) {
    //         baseballLink.addEventListener('click', function(event) {
    //             event.preventDefault(); 
    //             baseballSound.play().catch(error => console.error('Error playing baseball sound:', error));
    //         });
    //     } else {
    //         console.warn('Baseball link or sound element not found');
    //     }
    // }


})();

// document.addEventListener('DOMContentLoaded', () => {
//     const button = document.getElementById('buttonToAbout');
//     const sound = document.getElementById('baseball-sound');

//     button.addEventListener('click', () => {
//         sound.play();
//     });
// });



// ****** this worked by putting an onclick="playBasketballSound()" on the html element in the navbar. it only worked a couple times but it worked****************************************************************
// function playBasketballSound() {
//     var basketballSound = document.getElementById('basketball-sound');
//     if (basketballSound) {
//         basketballSound.play().catch(error => console.error('Error playing basketball sound:', error));
//     } else {
//         console.warn('Basketball sound element not found');
//     }
// }

// function playBaseballSound() {
//     var baseballSound = document.getElementById('baseball-sound');
//     if (baseballSound) {
//         baseballSound.play().catch(error => console.error('Error playing baseball sound:', error));
//     } else {
//         console.warn('Baseball sound element not found');
//     }
// }

// ***************added some checks

// function playBasketballSound() {
//     var basketballSound = document.getElementById('basketball-sound');
//     if (basketballSound) {
//         basketballSound.currentTime = 0; // Reset playback to start
//         basketballSound.play().catch(error => console.error('Error playing basketball sound:', error));
//     } else {
//         console.warn('Basketball sound element not found');
//     }
// }

// function playBaseballSound() {
//     var baseballSound = document.getElementById('baseball-sound');
//     if (baseballSound) {
//         baseballSound.currentTime = 0; // Reset playback to start
//         baseballSound.play().catch(error => console.error('Error playing baseball sound:', error));
//     } else {
//         console.warn('Baseball sound element not found');
//     }
// }

function playBasketballSound() {
    var basketballSound = document.getElementById('basketball-sound');
    if (basketballSound) {
        basketballSound.volume = 1.0; // Ensure volume is set to 100%
        basketballSound.muted = false; // Ensure sound is not muted
        basketballSound.currentTime = 0; // Reset playback to start
        basketballSound.play().catch(error => console.error('Error playing basketball sound:', error));
    } else {
        console.warn('Basketball sound element not found');
    }
}

function playBaseballSound() {
    var baseballSound = document.getElementById('baseball-sound');
    if (baseballSound) {
        baseballSound.volume = 1.0; // Ensure volume is set to 100%
        baseballSound.muted = false; // Ensure sound is not muted
        baseballSound.currentTime = 0; // Reset playback to start
        baseballSound.play().catch(error => console.error('Error playing baseball sound:', error));
    } else {
        console.warn('Baseball sound element not found');
    }
}

