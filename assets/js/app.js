/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import '../css/app.scss';
import '../css/slick.css';


// Need jQuery? Install it with "yarn add jquery", then uncomment to import it.
import $ from 'jquery';

import '../js/slick';


$(document).ready(function () {


    // property Photos Slider

    $('.propertyPhotoSlider').slick({
        // dots: true,
        infinite: true,
        autoplay: true,
        speed: 300,
        slidesToShow: 1,
        prevArrow: '<div class="slick-prev"><i class="fas fa-angle-left"></i></div>',
        nextArrow: '<div class="slick-next"><i class="fas fa-angle-right"></i></div>',
        arrows: true
    });

    $('.mainMenu ul li').on("click", function () {
        $('.mainMenu ul li').removeClass('activeMenuItem');
        $(this).addClass('activeMenuItem');
        var menuItem = $(this).attr('id');
        console.log(menuItem);
        localStorage.setItem('pageName', menuItem);


    })


    $('.mainMenu ul li').each(function () {
        var pageName = localStorage.getItem('pageName');

        console.log(pageName);

        if (pageName === $(this).attr('id')) {
            $('.mainMenu ul li').removeClass('activeMenuItem');
            $(this).addClass('activeMenuItem');
        } else {

            return;


        }
    })


    const mapboxgl = require('mapbox-gl');

    let longitude = $('#map').data('long');
    let latitude = $('#map').data('lat');

    console.log(longitude);
    mapboxgl.accessToken = 'pk.eyJ1Ijoic2VhbnNtaXRoOTgiLCJhIjoiY2thbDFoMTlpMHEzODJ3bXd6ZWMyNGxiZCJ9.W8BME0MhxkGYNFfIzJEuxA';
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
        center: [longitude, latitude], // starting position [lng, lat]
        zoom: 10 // starting zoom
    });

    var marker = new mapboxgl.Marker()
        .setLngLat([longitude, latitude])
        .addTo(map);


    $('.tab1').on("click", function () {

        $('.tabInfo2').hide();
        $('.tabInfo1').show();

    })

    $('.tab2').on("click", function () {
        $('.tabInfo1').hide();
        $('.tabInfo2').show();

    })


    $('.tab').on('click', function () {

        $('.tab').removeClass('btn-outline-primary');
        $('.tab').removeClass('btn-primary');
        $(this).addClass('btn-primary');
        $('.tab').not(this).addClass('btn-outline-primary');


    })

    // $('.js-datepicker').datepicker();


})
