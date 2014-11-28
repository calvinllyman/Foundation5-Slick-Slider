/**
 * Created by @renanpro03 on 28/11/2014.
 * The Slick Implementation
 * Working in Foundation 5
 * Edit it as You want!
 * Follow the Demos: http://kenwheeler.github.io/slick/
 * Remember: The DIV class NAME inside the HTML file is "slick", if you change it,change the line 13 ->  $('.divClassName').slick({
 */

$(document).ready(function(){  // Responsive Display Example
    $('.slick').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 0,
                    slidesToScroll: 0
                }
            }
        ]
    });
});