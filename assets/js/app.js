/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import '../css/app.scss';

// Need jQuery? Install it with "yarn add jquery", then uncomment to import it.
import $ from 'jquery';

$(document).ready(function () {

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



})
