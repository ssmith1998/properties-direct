(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./assets/css/app.scss":
/*!*****************************!*\
  !*** ./assets/css/app.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/css/hamburger.min.css":
/*!**************************************!*\
  !*** ./assets/css/hamburger.min.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/css/slick.css":
/*!******************************!*\
  !*** ./assets/css/slick.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/css/tailwind.css":
/*!*********************************!*\
  !*** ./assets/css/tailwind.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/app.scss */ "./assets/css/app.scss");
/* harmony import */ var _css_app_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_app_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_slick_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/slick.css */ "./assets/css/slick.css");
/* harmony import */ var _css_slick_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_slick_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_hamburger_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/hamburger.min.css */ "./assets/css/hamburger.min.css");
/* harmony import */ var _css_hamburger_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_hamburger_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _css_tailwind_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/tailwind.css */ "./assets/css/tailwind.css");
/* harmony import */ var _css_tailwind_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_tailwind_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _js_slick__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../js/slick */ "./assets/js/slick.js");
/* harmony import */ var _js_slick__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_js_slick__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _livechat_customer_sdk__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @livechat/customer-sdk */ "./node_modules/@livechat/customer-sdk/dist/customer-sdk.esm.js");
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// any CSS you import will output into a single css file (app.css in this case)



 // Need jQuery? Install it with "yarn add jquery", then uncomment to import it.




jquery__WEBPACK_IMPORTED_MODULE_4___default()(document).ready(function () {
  /***************************************
              mobile dropdown
  /***************************************/
  jquery__WEBPACK_IMPORTED_MODULE_4___default()('.dropdownMobileButton').on('click', function () {
    jquery__WEBPACK_IMPORTED_MODULE_4___default()('.dropdownMobile__content').slideToggle();
    jquery__WEBPACK_IMPORTED_MODULE_4___default()('.dropdownMobileButton > .fa-caret-up').toggleClass('rotateChevron');
  });
  /***************************************
              pass confirm 
  /***************************************/

  jquery__WEBPACK_IMPORTED_MODULE_4___default()('.passwordConfirm').on('keyup', function () {
    var passConfirm = jquery__WEBPACK_IMPORTED_MODULE_4___default()('.confirmPass').val();
    var pass = jquery__WEBPACK_IMPORTED_MODULE_4___default()('.pass').val();
    var errorMsg = document.getElementById('error-msg'); // console.log(pass);

    if (pass === '' || pass === null || passConfirm === '' || passConfirm === null) {
      errorMsg.innerHTML = "Please fill all fields";
      jquery__WEBPACK_IMPORTED_MODULE_4___default()('#error-msg').css('color', 'red');
    } else {
      if (passConfirm === pass) {
        console.log('yes');
        errorMsg.innerHTML = "Passwords Match";
        jquery__WEBPACK_IMPORTED_MODULE_4___default()('#error-msg').css('color', 'green');
      } else {
        console.log('no');
        errorMsg.innerHTML = "Passwords do not match";
        jquery__WEBPACK_IMPORTED_MODULE_4___default()('#error-msg').css('color', 'red');
      }
    }
  }); // mobile menu

  var hamburger = document.querySelector(".hamburger"); // On click

  hamburger.addEventListener("click", function () {
    // Toggle class "is-active"
    hamburger.classList.toggle("is-active"); // Do something else, like open/close menu

    jquery__WEBPACK_IMPORTED_MODULE_4___default()('.mobileMenu').toggleClass("activeMenu");
    jquery__WEBPACK_IMPORTED_MODULE_4___default()('.overlay').toggleClass("show");
  }); // end mobile menu
  // filters mobile

  jquery__WEBPACK_IMPORTED_MODULE_4___default()('.filtersMobile__titleTab').on('click', function () {
    jquery__WEBPACK_IMPORTED_MODULE_4___default()(this.parentElement).toggleClass('filtersMobile__active');
  }); // end mobile filters
  //     $(window).on("load" , function () {
  //         $('.loader').fadeOut();
  //     })
  // property Photos Slider
  // Look for .hamburger

  jquery__WEBPACK_IMPORTED_MODULE_4___default()('.propertyPhotoSlider').slick({
    // dots: true,
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 1,
    prevArrow: '<div class="slick-prev"><i class="fas fa-angle-left"></i></div>',
    nextArrow: '<div class="slick-next"><i class="fas fa-angle-right"></i></div>',
    arrows: true,
    adaptiveHeight: true
  });
  jquery__WEBPACK_IMPORTED_MODULE_4___default()('.mainMenu ul li').on("click", function () {
    jquery__WEBPACK_IMPORTED_MODULE_4___default()('.mainMenu ul li').removeClass('activeMenuItem');
    jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).addClass('activeMenuItem');
    var menuItem = jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).attr('id');
    console.log(menuItem);
    localStorage.setItem('pageName', menuItem);
  });
  jquery__WEBPACK_IMPORTED_MODULE_4___default()('.mainMenu ul li').each(function () {
    var pageName = localStorage.getItem('pageName');
    console.log(pageName);

    if (pageName === jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).attr('id')) {
      jquery__WEBPACK_IMPORTED_MODULE_4___default()('.mainMenu ul li').removeClass('activeMenuItem');
      jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).addClass('activeMenuItem');
    } else {
      return;
    }
  });

  var mapboxgl = __webpack_require__(/*! mapbox-gl */ "./node_modules/mapbox-gl/dist/mapbox-gl.js");

  var longitude = jquery__WEBPACK_IMPORTED_MODULE_4___default()('#map').data('long');
  var latitude = jquery__WEBPACK_IMPORTED_MODULE_4___default()('#map').data('lat');
  console.log(longitude);
  mapboxgl.accessToken = 'pk.eyJ1Ijoic2VhbnNtaXRoOTgiLCJhIjoiY2thbDFoMTlpMHEzODJ3bXd6ZWMyNGxiZCJ9.W8BME0MhxkGYNFfIzJEuxA';
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    // stylesheet location
    center: [longitude, latitude],
    // starting position [lng, lat]
    zoom: 10 // starting zoom

  });
  var marker = new mapboxgl.Marker().setLngLat([longitude, latitude]).addTo(map);
  jquery__WEBPACK_IMPORTED_MODULE_4___default()('.tab1').on("click", function () {
    jquery__WEBPACK_IMPORTED_MODULE_4___default()('.tabInfo2').hide();
    jquery__WEBPACK_IMPORTED_MODULE_4___default()('.tabInfo1').show();
  });
  jquery__WEBPACK_IMPORTED_MODULE_4___default()('.tab2').on("click", function () {
    jquery__WEBPACK_IMPORTED_MODULE_4___default()('.tabInfo1').hide();
    jquery__WEBPACK_IMPORTED_MODULE_4___default()('.tabInfo2').show();
  });
  jquery__WEBPACK_IMPORTED_MODULE_4___default()('.tab').on('click', function () {
    jquery__WEBPACK_IMPORTED_MODULE_4___default()('.tab').removeClass('btn-outline-primary');
    jquery__WEBPACK_IMPORTED_MODULE_4___default()('.tab').removeClass('btn-primary');
    jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).addClass('btn-primary');
    jquery__WEBPACK_IMPORTED_MODULE_4___default()('.tab').not(this).addClass('btn-outline-primary');
  });
});
/***************************************
              Chat api
  /***************************************/

var clientSecret = "207bfc7749c358a46e0487134351c10de239147c";
var customerSDK = _livechat_customer_sdk__WEBPACK_IMPORTED_MODULE_6__["init"]({
  licenseId: 12399726,
  clientId: '9633343ac53f9d8daf017d7988372721' // redirectUri: 'http://127.0.0.1:8000/'

});
customerSDK.on('new_event', function (newEvent) {
  console.log(newEvent);
});
var chatId = 'OU0V0P0OWT';
customerSDK.sendEvent({
  chatId: chatId,
  event: {
    type: 'message',
    text: 'Hi!'
  }
}).then(function (response) {
  console.log(response);
})["catch"](function (error) {
  console.log(error);
}); //    jQuery(function($){ // wait until the DOM is ready
//        $(".js-datepicker").datepicker({
//            clearBtn: true,
//            autoclose: true
//        });
//        $('.js-datepicker').on('changeDate', function() {
//         $('.js-hidden').val(
//             $('.js-datepicker').datepicker('getFormattedDate')
//         );
//     });
//         });

/***/ }),

/***/ "./assets/js/slick.js":
/*!****************************!*\
  !*** ./assets/js/slick.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");

__webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.array.index-of */ "./node_modules/core-js/modules/es.array.index-of.js");

__webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");

__webpack_require__(/*! core-js/modules/es.array.sort */ "./node_modules/core-js/modules/es.array.sort.js");

__webpack_require__(/*! core-js/modules/es.array.splice */ "./node_modules/core-js/modules/es.array.splice.js");

__webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.parse-int */ "./node_modules/core-js/modules/es.parse-int.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/es.string.match */ "./node_modules/core-js/modules/es.string.match.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

__webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (factory) {
  "use strict";

  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function ($) {
  "use strict";

  var Slick = window.Slick || {};

  Slick = function () {
    var instanceUid = 0;

    function Slick(element, settings) {
      var _ = this,
          dataSettings;

      _.defaults = {
        accessibility: true,
        adaptiveHeight: false,
        appendArrows: $(element),
        appendDots: $(element),
        arrows: true,
        asNavFor: null,
        prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
        nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
        autoplay: false,
        autoplaySpeed: 3e3,
        centerMode: false,
        centerPadding: "50px",
        cssEase: "ease",
        customPaging: function customPaging(slider, i) {
          return $('<button type="button" />').text(i + 1);
        },
        dots: false,
        dotsClass: "slick-dots",
        draggable: true,
        easing: "linear",
        edgeFriction: .35,
        fade: false,
        focusOnSelect: false,
        focusOnChange: false,
        infinite: true,
        initialSlide: 0,
        lazyLoad: "ondemand",
        mobileFirst: false,
        pauseOnHover: true,
        pauseOnFocus: true,
        pauseOnDotsHover: false,
        respondTo: "window",
        responsive: null,
        rows: 1,
        rtl: false,
        slide: "",
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipe: true,
        swipeToSlide: false,
        touchMove: true,
        touchThreshold: 5,
        useCSS: true,
        useTransform: true,
        variableWidth: false,
        vertical: false,
        verticalSwiping: false,
        waitForAnimate: true,
        zIndex: 1e3
      };
      _.initials = {
        animating: false,
        dragging: false,
        autoPlayTimer: null,
        currentDirection: 0,
        currentLeft: null,
        currentSlide: 0,
        direction: 1,
        $dots: null,
        listWidth: null,
        listHeight: null,
        loadIndex: 0,
        $nextArrow: null,
        $prevArrow: null,
        scrolling: false,
        slideCount: null,
        slideWidth: null,
        $slideTrack: null,
        $slides: null,
        sliding: false,
        slideOffset: 0,
        swipeLeft: null,
        swiping: false,
        $list: null,
        touchObject: {},
        transformsEnabled: false,
        unslicked: false
      };
      $.extend(_, _.initials);
      _.activeBreakpoint = null;
      _.animType = null;
      _.animProp = null;
      _.breakpoints = [];
      _.breakpointSettings = [];
      _.cssTransitions = false;
      _.focussed = false;
      _.interrupted = false;
      _.hidden = "hidden";
      _.paused = true;
      _.positionProp = null;
      _.respondTo = null;
      _.rowCount = 1;
      _.shouldClick = true;
      _.$slider = $(element);
      _.$slidesCache = null;
      _.transformType = null;
      _.transitionType = null;
      _.visibilityChange = "visibilitychange";
      _.windowWidth = 0;
      _.windowTimer = null;
      dataSettings = $(element).data("slick") || {};
      _.options = $.extend({}, _.defaults, settings, dataSettings);
      _.currentSlide = _.options.initialSlide;
      _.originalSettings = _.options;

      if (typeof document.mozHidden !== "undefined") {
        _.hidden = "mozHidden";
        _.visibilityChange = "mozvisibilitychange";
      } else if (typeof document.webkitHidden !== "undefined") {
        _.hidden = "webkitHidden";
        _.visibilityChange = "webkitvisibilitychange";
      }

      _.autoPlay = $.proxy(_.autoPlay, _);
      _.autoPlayClear = $.proxy(_.autoPlayClear, _);
      _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
      _.changeSlide = $.proxy(_.changeSlide, _);
      _.clickHandler = $.proxy(_.clickHandler, _);
      _.selectHandler = $.proxy(_.selectHandler, _);
      _.setPosition = $.proxy(_.setPosition, _);
      _.swipeHandler = $.proxy(_.swipeHandler, _);
      _.dragHandler = $.proxy(_.dragHandler, _);
      _.keyHandler = $.proxy(_.keyHandler, _);
      _.instanceUid = instanceUid++;
      _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;

      _.registerBreakpoints();

      _.init(true);
    }

    return Slick;
  }();

  Slick.prototype.activateADA = function () {
    var _ = this;

    _.$slideTrack.find(".slick-active").attr({
      "aria-hidden": "false"
    }).find("a, input, button, select").attr({
      tabindex: "0"
    });
  };

  Slick.prototype.addSlide = Slick.prototype.slickAdd = function (markup, index, addBefore) {
    var _ = this;

    if (typeof index === "boolean") {
      addBefore = index;
      index = null;
    } else if (index < 0 || index >= _.slideCount) {
      return false;
    }

    _.unload();

    if (typeof index === "number") {
      if (index === 0 && _.$slides.length === 0) {
        $(markup).appendTo(_.$slideTrack);
      } else if (addBefore) {
        $(markup).insertBefore(_.$slides.eq(index));
      } else {
        $(markup).insertAfter(_.$slides.eq(index));
      }
    } else {
      if (addBefore === true) {
        $(markup).prependTo(_.$slideTrack);
      } else {
        $(markup).appendTo(_.$slideTrack);
      }
    }

    _.$slides = _.$slideTrack.children(this.options.slide);

    _.$slideTrack.children(this.options.slide).detach();

    _.$slideTrack.append(_.$slides);

    _.$slides.each(function (index, element) {
      $(element).attr("data-slick-index", index);
    });

    _.$slidesCache = _.$slides;

    _.reinit();
  };

  Slick.prototype.animateHeight = function () {
    var _ = this;

    if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
      var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);

      _.$list.animate({
        height: targetHeight
      }, _.options.speed);
    }
  };

  Slick.prototype.animateSlide = function (targetLeft, callback) {
    var animProps = {},
        _ = this;

    _.animateHeight();

    if (_.options.rtl === true && _.options.vertical === false) {
      targetLeft = -targetLeft;
    }

    if (_.transformsEnabled === false) {
      if (_.options.vertical === false) {
        _.$slideTrack.animate({
          left: targetLeft
        }, _.options.speed, _.options.easing, callback);
      } else {
        _.$slideTrack.animate({
          top: targetLeft
        }, _.options.speed, _.options.easing, callback);
      }
    } else {
      if (_.cssTransitions === false) {
        if (_.options.rtl === true) {
          _.currentLeft = -_.currentLeft;
        }

        $({
          animStart: _.currentLeft
        }).animate({
          animStart: targetLeft
        }, {
          duration: _.options.speed,
          easing: _.options.easing,
          step: function step(now) {
            now = Math.ceil(now);

            if (_.options.vertical === false) {
              animProps[_.animType] = "translate(" + now + "px, 0px)";

              _.$slideTrack.css(animProps);
            } else {
              animProps[_.animType] = "translate(0px," + now + "px)";

              _.$slideTrack.css(animProps);
            }
          },
          complete: function complete() {
            if (callback) {
              callback.call();
            }
          }
        });
      } else {
        _.applyTransition();

        targetLeft = Math.ceil(targetLeft);

        if (_.options.vertical === false) {
          animProps[_.animType] = "translate3d(" + targetLeft + "px, 0px, 0px)";
        } else {
          animProps[_.animType] = "translate3d(0px," + targetLeft + "px, 0px)";
        }

        _.$slideTrack.css(animProps);

        if (callback) {
          setTimeout(function () {
            _.disableTransition();

            callback.call();
          }, _.options.speed);
        }
      }
    }
  };

  Slick.prototype.getNavTarget = function () {
    var _ = this,
        asNavFor = _.options.asNavFor;

    if (asNavFor && asNavFor !== null) {
      asNavFor = $(asNavFor).not(_.$slider);
    }

    return asNavFor;
  };

  Slick.prototype.asNavFor = function (index) {
    var _ = this,
        asNavFor = _.getNavTarget();

    if (asNavFor !== null && _typeof(asNavFor) === "object") {
      asNavFor.each(function () {
        var target = $(this).slick("getSlick");

        if (!target.unslicked) {
          target.slideHandler(index, true);
        }
      });
    }
  };

  Slick.prototype.applyTransition = function (slide) {
    var _ = this,
        transition = {};

    if (_.options.fade === false) {
      transition[_.transitionType] = _.transformType + " " + _.options.speed + "ms " + _.options.cssEase;
    } else {
      transition[_.transitionType] = "opacity " + _.options.speed + "ms " + _.options.cssEase;
    }

    if (_.options.fade === false) {
      _.$slideTrack.css(transition);
    } else {
      _.$slides.eq(slide).css(transition);
    }
  };

  Slick.prototype.autoPlay = function () {
    var _ = this;

    _.autoPlayClear();

    if (_.slideCount > _.options.slidesToShow) {
      _.autoPlayTimer = setInterval(_.autoPlayIterator, _.options.autoplaySpeed);
    }
  };

  Slick.prototype.autoPlayClear = function () {
    var _ = this;

    if (_.autoPlayTimer) {
      clearInterval(_.autoPlayTimer);
    }
  };

  Slick.prototype.autoPlayIterator = function () {
    var _ = this,
        slideTo = _.currentSlide + _.options.slidesToScroll;

    if (!_.paused && !_.interrupted && !_.focussed) {
      if (_.options.infinite === false) {
        if (_.direction === 1 && _.currentSlide + 1 === _.slideCount - 1) {
          _.direction = 0;
        } else if (_.direction === 0) {
          slideTo = _.currentSlide - _.options.slidesToScroll;

          if (_.currentSlide - 1 === 0) {
            _.direction = 1;
          }
        }
      }

      _.slideHandler(slideTo);
    }
  };

  Slick.prototype.buildArrows = function () {
    var _ = this;

    if (_.options.arrows === true) {
      _.$prevArrow = $(_.options.prevArrow).addClass("slick-arrow");
      _.$nextArrow = $(_.options.nextArrow).addClass("slick-arrow");

      if (_.slideCount > _.options.slidesToShow) {
        _.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex");

        _.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex");

        if (_.htmlExpr.test(_.options.prevArrow)) {
          _.$prevArrow.prependTo(_.options.appendArrows);
        }

        if (_.htmlExpr.test(_.options.nextArrow)) {
          _.$nextArrow.appendTo(_.options.appendArrows);
        }

        if (_.options.infinite !== true) {
          _.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true");
        }
      } else {
        _.$prevArrow.add(_.$nextArrow).addClass("slick-hidden").attr({
          "aria-disabled": "true",
          tabindex: "-1"
        });
      }
    }
  };

  Slick.prototype.buildDots = function () {
    var _ = this,
        i,
        dot;

    if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
      _.$slider.addClass("slick-dotted");

      dot = $("<ul />").addClass(_.options.dotsClass);

      for (i = 0; i <= _.getDotCount(); i += 1) {
        dot.append($("<li />").append(_.options.customPaging.call(this, _, i)));
      }

      _.$dots = dot.appendTo(_.options.appendDots);

      _.$dots.find("li").first().addClass("slick-active");
    }
  };

  Slick.prototype.buildOut = function () {
    var _ = this;

    _.$slides = _.$slider.children(_.options.slide + ":not(.slick-cloned)").addClass("slick-slide");
    _.slideCount = _.$slides.length;

    _.$slides.each(function (index, element) {
      $(element).attr("data-slick-index", index).data("originalStyling", $(element).attr("style") || "");
    });

    _.$slider.addClass("slick-slider");

    _.$slideTrack = _.slideCount === 0 ? $('<div class="slick-track"/>').appendTo(_.$slider) : _.$slides.wrapAll('<div class="slick-track"/>').parent();
    _.$list = _.$slideTrack.wrap('<div class="slick-list"/>').parent();

    _.$slideTrack.css("opacity", 0);

    if (_.options.centerMode === true || _.options.swipeToSlide === true) {
      _.options.slidesToScroll = 1;
    }

    $("img[data-lazy]", _.$slider).not("[src]").addClass("slick-loading");

    _.setupInfinite();

    _.buildArrows();

    _.buildDots();

    _.updateDots();

    _.setSlideClasses(typeof _.currentSlide === "number" ? _.currentSlide : 0);

    if (_.options.draggable === true) {
      _.$list.addClass("draggable");
    }
  };

  Slick.prototype.buildRows = function () {
    var _ = this,
        a,
        b,
        c,
        newSlides,
        numOfSlides,
        originalSlides,
        slidesPerSection;

    newSlides = document.createDocumentFragment();
    originalSlides = _.$slider.children();

    if (_.options.rows > 0) {
      slidesPerSection = _.options.slidesPerRow * _.options.rows;
      numOfSlides = Math.ceil(originalSlides.length / slidesPerSection);

      for (a = 0; a < numOfSlides; a++) {
        var slide = document.createElement("div");

        for (b = 0; b < _.options.rows; b++) {
          var row = document.createElement("div");

          for (c = 0; c < _.options.slidesPerRow; c++) {
            var target = a * slidesPerSection + (b * _.options.slidesPerRow + c);

            if (originalSlides.get(target)) {
              row.appendChild(originalSlides.get(target));
            }
          }

          slide.appendChild(row);
        }

        newSlides.appendChild(slide);
      }

      _.$slider.empty().append(newSlides);

      _.$slider.children().children().children().css({
        width: 100 / _.options.slidesPerRow + "%",
        display: "inline-block"
      });
    }
  };

  Slick.prototype.checkResponsive = function (initial, forceUpdate) {
    var _ = this,
        breakpoint,
        targetBreakpoint,
        respondToWidth,
        triggerBreakpoint = false;

    var sliderWidth = _.$slider.width();

    var windowWidth = window.innerWidth || $(window).width();

    if (_.respondTo === "window") {
      respondToWidth = windowWidth;
    } else if (_.respondTo === "slider") {
      respondToWidth = sliderWidth;
    } else if (_.respondTo === "min") {
      respondToWidth = Math.min(windowWidth, sliderWidth);
    }

    if (_.options.responsive && _.options.responsive.length && _.options.responsive !== null) {
      targetBreakpoint = null;

      for (breakpoint in _.breakpoints) {
        if (_.breakpoints.hasOwnProperty(breakpoint)) {
          if (_.originalSettings.mobileFirst === false) {
            if (respondToWidth < _.breakpoints[breakpoint]) {
              targetBreakpoint = _.breakpoints[breakpoint];
            }
          } else {
            if (respondToWidth > _.breakpoints[breakpoint]) {
              targetBreakpoint = _.breakpoints[breakpoint];
            }
          }
        }
      }

      if (targetBreakpoint !== null) {
        if (_.activeBreakpoint !== null) {
          if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
            _.activeBreakpoint = targetBreakpoint;

            if (_.breakpointSettings[targetBreakpoint] === "unslick") {
              _.unslick(targetBreakpoint);
            } else {
              _.options = $.extend({}, _.originalSettings, _.breakpointSettings[targetBreakpoint]);

              if (initial === true) {
                _.currentSlide = _.options.initialSlide;
              }

              _.refresh(initial);
            }

            triggerBreakpoint = targetBreakpoint;
          }
        } else {
          _.activeBreakpoint = targetBreakpoint;

          if (_.breakpointSettings[targetBreakpoint] === "unslick") {
            _.unslick(targetBreakpoint);
          } else {
            _.options = $.extend({}, _.originalSettings, _.breakpointSettings[targetBreakpoint]);

            if (initial === true) {
              _.currentSlide = _.options.initialSlide;
            }

            _.refresh(initial);
          }

          triggerBreakpoint = targetBreakpoint;
        }
      } else {
        if (_.activeBreakpoint !== null) {
          _.activeBreakpoint = null;
          _.options = _.originalSettings;

          if (initial === true) {
            _.currentSlide = _.options.initialSlide;
          }

          _.refresh(initial);

          triggerBreakpoint = targetBreakpoint;
        }
      }

      if (!initial && triggerBreakpoint !== false) {
        _.$slider.trigger("breakpoint", [_, triggerBreakpoint]);
      }
    }
  };

  Slick.prototype.changeSlide = function (event, dontAnimate) {
    var _ = this,
        $target = $(event.currentTarget),
        indexOffset,
        slideOffset,
        unevenOffset;

    if ($target.is("a")) {
      event.preventDefault();
    }

    if (!$target.is("li")) {
      $target = $target.closest("li");
    }

    unevenOffset = _.slideCount % _.options.slidesToScroll !== 0;
    indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;

    switch (event.data.message) {
      case "previous":
        slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;

        if (_.slideCount > _.options.slidesToShow) {
          _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
        }

        break;

      case "next":
        slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;

        if (_.slideCount > _.options.slidesToShow) {
          _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
        }

        break;

      case "index":
        var index = event.data.index === 0 ? 0 : event.data.index || $target.index() * _.options.slidesToScroll;

        _.slideHandler(_.checkNavigable(index), false, dontAnimate);

        $target.children().trigger("focus");
        break;

      default:
        return;
    }
  };

  Slick.prototype.checkNavigable = function (index) {
    var _ = this,
        navigables,
        prevNavigable;

    navigables = _.getNavigableIndexes();
    prevNavigable = 0;

    if (index > navigables[navigables.length - 1]) {
      index = navigables[navigables.length - 1];
    } else {
      for (var n in navigables) {
        if (index < navigables[n]) {
          index = prevNavigable;
          break;
        }

        prevNavigable = navigables[n];
      }
    }

    return index;
  };

  Slick.prototype.cleanUpEvents = function () {
    var _ = this;

    if (_.options.dots && _.$dots !== null) {
      $("li", _.$dots).off("click.slick", _.changeSlide).off("mouseenter.slick", $.proxy(_.interrupt, _, true)).off("mouseleave.slick", $.proxy(_.interrupt, _, false));

      if (_.options.accessibility === true) {
        _.$dots.off("keydown.slick", _.keyHandler);
      }
    }

    _.$slider.off("focus.slick blur.slick");

    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
      _.$prevArrow && _.$prevArrow.off("click.slick", _.changeSlide);
      _.$nextArrow && _.$nextArrow.off("click.slick", _.changeSlide);

      if (_.options.accessibility === true) {
        _.$prevArrow && _.$prevArrow.off("keydown.slick", _.keyHandler);
        _.$nextArrow && _.$nextArrow.off("keydown.slick", _.keyHandler);
      }
    }

    _.$list.off("touchstart.slick mousedown.slick", _.swipeHandler);

    _.$list.off("touchmove.slick mousemove.slick", _.swipeHandler);

    _.$list.off("touchend.slick mouseup.slick", _.swipeHandler);

    _.$list.off("touchcancel.slick mouseleave.slick", _.swipeHandler);

    _.$list.off("click.slick", _.clickHandler);

    $(document).off(_.visibilityChange, _.visibility);

    _.cleanUpSlideEvents();

    if (_.options.accessibility === true) {
      _.$list.off("keydown.slick", _.keyHandler);
    }

    if (_.options.focusOnSelect === true) {
      $(_.$slideTrack).children().off("click.slick", _.selectHandler);
    }

    $(window).off("orientationchange.slick.slick-" + _.instanceUid, _.orientationChange);
    $(window).off("resize.slick.slick-" + _.instanceUid, _.resize);
    $("[draggable!=true]", _.$slideTrack).off("dragstart", _.preventDefault);
    $(window).off("load.slick.slick-" + _.instanceUid, _.setPosition);
  };

  Slick.prototype.cleanUpSlideEvents = function () {
    var _ = this;

    _.$list.off("mouseenter.slick", $.proxy(_.interrupt, _, true));

    _.$list.off("mouseleave.slick", $.proxy(_.interrupt, _, false));
  };

  Slick.prototype.cleanUpRows = function () {
    var _ = this,
        originalSlides;

    if (_.options.rows > 0) {
      originalSlides = _.$slides.children().children();
      originalSlides.removeAttr("style");

      _.$slider.empty().append(originalSlides);
    }
  };

  Slick.prototype.clickHandler = function (event) {
    var _ = this;

    if (_.shouldClick === false) {
      event.stopImmediatePropagation();
      event.stopPropagation();
      event.preventDefault();
    }
  };

  Slick.prototype.destroy = function (refresh) {
    var _ = this;

    _.autoPlayClear();

    _.touchObject = {};

    _.cleanUpEvents();

    $(".slick-cloned", _.$slider).detach();

    if (_.$dots) {
      _.$dots.remove();
    }

    if (_.$prevArrow && _.$prevArrow.length) {
      _.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", "");

      if (_.htmlExpr.test(_.options.prevArrow)) {
        _.$prevArrow.remove();
      }
    }

    if (_.$nextArrow && _.$nextArrow.length) {
      _.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", "");

      if (_.htmlExpr.test(_.options.nextArrow)) {
        _.$nextArrow.remove();
      }
    }

    if (_.$slides) {
      _.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
        $(this).attr("style", $(this).data("originalStyling"));
      });

      _.$slideTrack.children(this.options.slide).detach();

      _.$slideTrack.detach();

      _.$list.detach();

      _.$slider.append(_.$slides);
    }

    _.cleanUpRows();

    _.$slider.removeClass("slick-slider");

    _.$slider.removeClass("slick-initialized");

    _.$slider.removeClass("slick-dotted");

    _.unslicked = true;

    if (!refresh) {
      _.$slider.trigger("destroy", [_]);
    }
  };

  Slick.prototype.disableTransition = function (slide) {
    var _ = this,
        transition = {};

    transition[_.transitionType] = "";

    if (_.options.fade === false) {
      _.$slideTrack.css(transition);
    } else {
      _.$slides.eq(slide).css(transition);
    }
  };

  Slick.prototype.fadeSlide = function (slideIndex, callback) {
    var _ = this;

    if (_.cssTransitions === false) {
      _.$slides.eq(slideIndex).css({
        zIndex: _.options.zIndex
      });

      _.$slides.eq(slideIndex).animate({
        opacity: 1
      }, _.options.speed, _.options.easing, callback);
    } else {
      _.applyTransition(slideIndex);

      _.$slides.eq(slideIndex).css({
        opacity: 1,
        zIndex: _.options.zIndex
      });

      if (callback) {
        setTimeout(function () {
          _.disableTransition(slideIndex);

          callback.call();
        }, _.options.speed);
      }
    }
  };

  Slick.prototype.fadeSlideOut = function (slideIndex) {
    var _ = this;

    if (_.cssTransitions === false) {
      _.$slides.eq(slideIndex).animate({
        opacity: 0,
        zIndex: _.options.zIndex - 2
      }, _.options.speed, _.options.easing);
    } else {
      _.applyTransition(slideIndex);

      _.$slides.eq(slideIndex).css({
        opacity: 0,
        zIndex: _.options.zIndex - 2
      });
    }
  };

  Slick.prototype.filterSlides = Slick.prototype.slickFilter = function (filter) {
    var _ = this;

    if (filter !== null) {
      _.$slidesCache = _.$slides;

      _.unload();

      _.$slideTrack.children(this.options.slide).detach();

      _.$slidesCache.filter(filter).appendTo(_.$slideTrack);

      _.reinit();
    }
  };

  Slick.prototype.focusHandler = function () {
    var _ = this;

    _.$slider.off("focus.slick blur.slick").on("focus.slick", "*", function (event) {
      var $sf = $(this);
      setTimeout(function () {
        if (_.options.pauseOnFocus) {
          if ($sf.is(":focus")) {
            _.focussed = true;

            _.autoPlay();
          }
        }
      }, 0);
    }).on("blur.slick", "*", function (event) {
      var $sf = $(this);

      if (_.options.pauseOnFocus) {
        _.focussed = false;

        _.autoPlay();
      }
    });
  };

  Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function () {
    var _ = this;

    return _.currentSlide;
  };

  Slick.prototype.getDotCount = function () {
    var _ = this;

    var breakPoint = 0;
    var counter = 0;
    var pagerQty = 0;

    if (_.options.infinite === true) {
      if (_.slideCount <= _.options.slidesToShow) {
        ++pagerQty;
      } else {
        while (breakPoint < _.slideCount) {
          ++pagerQty;
          breakPoint = counter + _.options.slidesToScroll;
          counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
        }
      }
    } else if (_.options.centerMode === true) {
      pagerQty = _.slideCount;
    } else if (!_.options.asNavFor) {
      pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll);
    } else {
      while (breakPoint < _.slideCount) {
        ++pagerQty;
        breakPoint = counter + _.options.slidesToScroll;
        counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
      }
    }

    return pagerQty - 1;
  };

  Slick.prototype.getLeft = function (slideIndex) {
    var _ = this,
        targetLeft,
        verticalHeight,
        verticalOffset = 0,
        targetSlide,
        coef;

    _.slideOffset = 0;
    verticalHeight = _.$slides.first().outerHeight(true);

    if (_.options.infinite === true) {
      if (_.slideCount > _.options.slidesToShow) {
        _.slideOffset = _.slideWidth * _.options.slidesToShow * -1;
        coef = -1;

        if (_.options.vertical === true && _.options.centerMode === true) {
          if (_.options.slidesToShow === 2) {
            coef = -1.5;
          } else if (_.options.slidesToShow === 1) {
            coef = -2;
          }
        }

        verticalOffset = verticalHeight * _.options.slidesToShow * coef;
      }

      if (_.slideCount % _.options.slidesToScroll !== 0) {
        if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
          if (slideIndex > _.slideCount) {
            _.slideOffset = (_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth * -1;
            verticalOffset = (_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight * -1;
          } else {
            _.slideOffset = _.slideCount % _.options.slidesToScroll * _.slideWidth * -1;
            verticalOffset = _.slideCount % _.options.slidesToScroll * verticalHeight * -1;
          }
        }
      }
    } else {
      if (slideIndex + _.options.slidesToShow > _.slideCount) {
        _.slideOffset = (slideIndex + _.options.slidesToShow - _.slideCount) * _.slideWidth;
        verticalOffset = (slideIndex + _.options.slidesToShow - _.slideCount) * verticalHeight;
      }
    }

    if (_.slideCount <= _.options.slidesToShow) {
      _.slideOffset = 0;
      verticalOffset = 0;
    }

    if (_.options.centerMode === true && _.slideCount <= _.options.slidesToShow) {
      _.slideOffset = _.slideWidth * Math.floor(_.options.slidesToShow) / 2 - _.slideWidth * _.slideCount / 2;
    } else if (_.options.centerMode === true && _.options.infinite === true) {
      _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
    } else if (_.options.centerMode === true) {
      _.slideOffset = 0;
      _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
    }

    if (_.options.vertical === false) {
      targetLeft = slideIndex * _.slideWidth * -1 + _.slideOffset;
    } else {
      targetLeft = slideIndex * verticalHeight * -1 + verticalOffset;
    }

    if (_.options.variableWidth === true) {
      if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
        targetSlide = _.$slideTrack.children(".slick-slide").eq(slideIndex);
      } else {
        targetSlide = _.$slideTrack.children(".slick-slide").eq(slideIndex + _.options.slidesToShow);
      }

      if (_.options.rtl === true) {
        if (targetSlide[0]) {
          targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
        } else {
          targetLeft = 0;
        }
      } else {
        targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
      }

      if (_.options.centerMode === true) {
        if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
          targetSlide = _.$slideTrack.children(".slick-slide").eq(slideIndex);
        } else {
          targetSlide = _.$slideTrack.children(".slick-slide").eq(slideIndex + _.options.slidesToShow + 1);
        }

        if (_.options.rtl === true) {
          if (targetSlide[0]) {
            targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
          } else {
            targetLeft = 0;
          }
        } else {
          targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
        }

        targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
      }
    }

    return targetLeft;
  };

  Slick.prototype.getOption = Slick.prototype.slickGetOption = function (option) {
    var _ = this;

    return _.options[option];
  };

  Slick.prototype.getNavigableIndexes = function () {
    var _ = this,
        breakPoint = 0,
        counter = 0,
        indexes = [],
        max;

    if (_.options.infinite === false) {
      max = _.slideCount;
    } else {
      breakPoint = _.options.slidesToScroll * -1;
      counter = _.options.slidesToScroll * -1;
      max = _.slideCount * 2;
    }

    while (breakPoint < max) {
      indexes.push(breakPoint);
      breakPoint = counter + _.options.slidesToScroll;
      counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
    }

    return indexes;
  };

  Slick.prototype.getSlick = function () {
    return this;
  };

  Slick.prototype.getSlideCount = function () {
    var _ = this,
        slidesTraversed,
        swipedSlide,
        swipeTarget,
        centerOffset;

    centerOffset = _.options.centerMode === true ? Math.floor(_.$list.width() / 2) : 0;
    swipeTarget = _.swipeLeft * -1 + centerOffset;

    if (_.options.swipeToSlide === true) {
      _.$slideTrack.find(".slick-slide").each(function (index, slide) {
        var slideOuterWidth, slideOffset, slideRightBoundary;
        slideOuterWidth = $(slide).outerWidth();
        slideOffset = slide.offsetLeft;

        if (_.options.centerMode !== true) {
          slideOffset += slideOuterWidth / 2;
        }

        slideRightBoundary = slideOffset + slideOuterWidth;

        if (swipeTarget < slideRightBoundary) {
          swipedSlide = slide;
          return false;
        }
      });

      slidesTraversed = Math.abs($(swipedSlide).attr("data-slick-index") - _.currentSlide) || 1;
      return slidesTraversed;
    } else {
      return _.options.slidesToScroll;
    }
  };

  Slick.prototype.goTo = Slick.prototype.slickGoTo = function (slide, dontAnimate) {
    var _ = this;

    _.changeSlide({
      data: {
        message: "index",
        index: parseInt(slide)
      }
    }, dontAnimate);
  };

  Slick.prototype.init = function (creation) {
    var _ = this;

    if (!$(_.$slider).hasClass("slick-initialized")) {
      $(_.$slider).addClass("slick-initialized");

      _.buildRows();

      _.buildOut();

      _.setProps();

      _.startLoad();

      _.loadSlider();

      _.initializeEvents();

      _.updateArrows();

      _.updateDots();

      _.checkResponsive(true);

      _.focusHandler();
    }

    if (creation) {
      _.$slider.trigger("init", [_]);
    }

    if (_.options.accessibility === true) {
      _.initADA();
    }

    if (_.options.autoplay) {
      _.paused = false;

      _.autoPlay();
    }
  };

  Slick.prototype.initADA = function () {
    var _ = this,
        numDotGroups = Math.ceil(_.slideCount / _.options.slidesToShow),
        tabControlIndexes = _.getNavigableIndexes().filter(function (val) {
      return val >= 0 && val < _.slideCount;
    });

    _.$slides.add(_.$slideTrack.find(".slick-cloned")).attr({
      "aria-hidden": "true",
      tabindex: "-1"
    }).find("a, input, button, select").attr({
      tabindex: "-1"
    });

    if (_.$dots !== null) {
      _.$slides.not(_.$slideTrack.find(".slick-cloned")).each(function (i) {
        var slideControlIndex = tabControlIndexes.indexOf(i);
        $(this).attr({
          role: "tabpanel",
          id: "slick-slide" + _.instanceUid + i,
          tabindex: -1
        });

        if (slideControlIndex !== -1) {
          var ariaButtonControl = "slick-slide-control" + _.instanceUid + slideControlIndex;

          if ($("#" + ariaButtonControl).length) {
            $(this).attr({
              "aria-describedby": ariaButtonControl
            });
          }
        }
      });

      _.$dots.attr("role", "tablist").find("li").each(function (i) {
        var mappedSlideIndex = tabControlIndexes[i];
        $(this).attr({
          role: "presentation"
        });
        $(this).find("button").first().attr({
          role: "tab",
          id: "slick-slide-control" + _.instanceUid + i,
          "aria-controls": "slick-slide" + _.instanceUid + mappedSlideIndex,
          "aria-label": i + 1 + " of " + numDotGroups,
          "aria-selected": null,
          tabindex: "-1"
        });
      }).eq(_.currentSlide).find("button").attr({
        "aria-selected": "true",
        tabindex: "0"
      }).end();
    }

    for (var i = _.currentSlide, max = i + _.options.slidesToShow; i < max; i++) {
      if (_.options.focusOnChange) {
        _.$slides.eq(i).attr({
          tabindex: "0"
        });
      } else {
        _.$slides.eq(i).removeAttr("tabindex");
      }
    }

    _.activateADA();
  };

  Slick.prototype.initArrowEvents = function () {
    var _ = this;

    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
      _.$prevArrow.off("click.slick").on("click.slick", {
        message: "previous"
      }, _.changeSlide);

      _.$nextArrow.off("click.slick").on("click.slick", {
        message: "next"
      }, _.changeSlide);

      if (_.options.accessibility === true) {
        _.$prevArrow.on("keydown.slick", _.keyHandler);

        _.$nextArrow.on("keydown.slick", _.keyHandler);
      }
    }
  };

  Slick.prototype.initDotEvents = function () {
    var _ = this;

    if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
      $("li", _.$dots).on("click.slick", {
        message: "index"
      }, _.changeSlide);

      if (_.options.accessibility === true) {
        _.$dots.on("keydown.slick", _.keyHandler);
      }
    }

    if (_.options.dots === true && _.options.pauseOnDotsHover === true && _.slideCount > _.options.slidesToShow) {
      $("li", _.$dots).on("mouseenter.slick", $.proxy(_.interrupt, _, true)).on("mouseleave.slick", $.proxy(_.interrupt, _, false));
    }
  };

  Slick.prototype.initSlideEvents = function () {
    var _ = this;

    if (_.options.pauseOnHover) {
      _.$list.on("mouseenter.slick", $.proxy(_.interrupt, _, true));

      _.$list.on("mouseleave.slick", $.proxy(_.interrupt, _, false));
    }
  };

  Slick.prototype.initializeEvents = function () {
    var _ = this;

    _.initArrowEvents();

    _.initDotEvents();

    _.initSlideEvents();

    _.$list.on("touchstart.slick mousedown.slick", {
      action: "start"
    }, _.swipeHandler);

    _.$list.on("touchmove.slick mousemove.slick", {
      action: "move"
    }, _.swipeHandler);

    _.$list.on("touchend.slick mouseup.slick", {
      action: "end"
    }, _.swipeHandler);

    _.$list.on("touchcancel.slick mouseleave.slick", {
      action: "end"
    }, _.swipeHandler);

    _.$list.on("click.slick", _.clickHandler);

    $(document).on(_.visibilityChange, $.proxy(_.visibility, _));

    if (_.options.accessibility === true) {
      _.$list.on("keydown.slick", _.keyHandler);
    }

    if (_.options.focusOnSelect === true) {
      $(_.$slideTrack).children().on("click.slick", _.selectHandler);
    }

    $(window).on("orientationchange.slick.slick-" + _.instanceUid, $.proxy(_.orientationChange, _));
    $(window).on("resize.slick.slick-" + _.instanceUid, $.proxy(_.resize, _));
    $("[draggable!=true]", _.$slideTrack).on("dragstart", _.preventDefault);
    $(window).on("load.slick.slick-" + _.instanceUid, _.setPosition);
    $(_.setPosition);
  };

  Slick.prototype.initUI = function () {
    var _ = this;

    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
      _.$prevArrow.show();

      _.$nextArrow.show();
    }

    if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
      _.$dots.show();
    }
  };

  Slick.prototype.keyHandler = function (event) {
    var _ = this;

    if (!event.target.tagName.match("TEXTAREA|INPUT|SELECT")) {
      if (event.keyCode === 37 && _.options.accessibility === true) {
        _.changeSlide({
          data: {
            message: _.options.rtl === true ? "next" : "previous"
          }
        });
      } else if (event.keyCode === 39 && _.options.accessibility === true) {
        _.changeSlide({
          data: {
            message: _.options.rtl === true ? "previous" : "next"
          }
        });
      }
    }
  };

  Slick.prototype.lazyLoad = function () {
    var _ = this,
        loadRange,
        cloneRange,
        rangeStart,
        rangeEnd;

    function loadImages(imagesScope) {
      $("img[data-lazy]", imagesScope).each(function () {
        var image = $(this),
            imageSource = $(this).attr("data-lazy"),
            imageSrcSet = $(this).attr("data-srcset"),
            imageSizes = $(this).attr("data-sizes") || _.$slider.attr("data-sizes"),
            imageToLoad = document.createElement("img");

        imageToLoad.onload = function () {
          image.animate({
            opacity: 0
          }, 100, function () {
            if (imageSrcSet) {
              image.attr("srcset", imageSrcSet);

              if (imageSizes) {
                image.attr("sizes", imageSizes);
              }
            }

            image.attr("src", imageSource).animate({
              opacity: 1
            }, 200, function () {
              image.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading");
            });

            _.$slider.trigger("lazyLoaded", [_, image, imageSource]);
          });
        };

        imageToLoad.onerror = function () {
          image.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error");

          _.$slider.trigger("lazyLoadError", [_, image, imageSource]);
        };

        imageToLoad.src = imageSource;
      });
    }

    if (_.options.centerMode === true) {
      if (_.options.infinite === true) {
        rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
        rangeEnd = rangeStart + _.options.slidesToShow + 2;
      } else {
        rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
        rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
      }
    } else {
      rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
      rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);

      if (_.options.fade === true) {
        if (rangeStart > 0) rangeStart--;
        if (rangeEnd <= _.slideCount) rangeEnd++;
      }
    }

    loadRange = _.$slider.find(".slick-slide").slice(rangeStart, rangeEnd);

    if (_.options.lazyLoad === "anticipated") {
      var prevSlide = rangeStart - 1,
          nextSlide = rangeEnd,
          $slides = _.$slider.find(".slick-slide");

      for (var i = 0; i < _.options.slidesToScroll; i++) {
        if (prevSlide < 0) prevSlide = _.slideCount - 1;
        loadRange = loadRange.add($slides.eq(prevSlide));
        loadRange = loadRange.add($slides.eq(nextSlide));
        prevSlide--;
        nextSlide++;
      }
    }

    loadImages(loadRange);

    if (_.slideCount <= _.options.slidesToShow) {
      cloneRange = _.$slider.find(".slick-slide");
      loadImages(cloneRange);
    } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
      cloneRange = _.$slider.find(".slick-cloned").slice(0, _.options.slidesToShow);
      loadImages(cloneRange);
    } else if (_.currentSlide === 0) {
      cloneRange = _.$slider.find(".slick-cloned").slice(_.options.slidesToShow * -1);
      loadImages(cloneRange);
    }
  };

  Slick.prototype.loadSlider = function () {
    var _ = this;

    _.setPosition();

    _.$slideTrack.css({
      opacity: 1
    });

    _.$slider.removeClass("slick-loading");

    _.initUI();

    if (_.options.lazyLoad === "progressive") {
      _.progressiveLazyLoad();
    }
  };

  Slick.prototype.next = Slick.prototype.slickNext = function () {
    var _ = this;

    _.changeSlide({
      data: {
        message: "next"
      }
    });
  };

  Slick.prototype.orientationChange = function () {
    var _ = this;

    _.checkResponsive();

    _.setPosition();
  };

  Slick.prototype.pause = Slick.prototype.slickPause = function () {
    var _ = this;

    _.autoPlayClear();

    _.paused = true;
  };

  Slick.prototype.play = Slick.prototype.slickPlay = function () {
    var _ = this;

    _.autoPlay();

    _.options.autoplay = true;
    _.paused = false;
    _.focussed = false;
    _.interrupted = false;
  };

  Slick.prototype.postSlide = function (index) {
    var _ = this;

    if (!_.unslicked) {
      _.$slider.trigger("afterChange", [_, index]);

      _.animating = false;

      if (_.slideCount > _.options.slidesToShow) {
        _.setPosition();
      }

      _.swipeLeft = null;

      if (_.options.autoplay) {
        _.autoPlay();
      }

      if (_.options.accessibility === true) {
        _.initADA();

        if (_.options.focusOnChange) {
          var $currentSlide = $(_.$slides.get(_.currentSlide));
          $currentSlide.attr("tabindex", 0).focus();
        }
      }
    }
  };

  Slick.prototype.prev = Slick.prototype.slickPrev = function () {
    var _ = this;

    _.changeSlide({
      data: {
        message: "previous"
      }
    });
  };

  Slick.prototype.preventDefault = function (event) {
    event.preventDefault();
  };

  Slick.prototype.progressiveLazyLoad = function (tryCount) {
    tryCount = tryCount || 1;

    var _ = this,
        $imgsToLoad = $("img[data-lazy]", _.$slider),
        image,
        imageSource,
        imageSrcSet,
        imageSizes,
        imageToLoad;

    if ($imgsToLoad.length) {
      image = $imgsToLoad.first();
      imageSource = image.attr("data-lazy");
      imageSrcSet = image.attr("data-srcset");
      imageSizes = image.attr("data-sizes") || _.$slider.attr("data-sizes");
      imageToLoad = document.createElement("img");

      imageToLoad.onload = function () {
        if (imageSrcSet) {
          image.attr("srcset", imageSrcSet);

          if (imageSizes) {
            image.attr("sizes", imageSizes);
          }
        }

        image.attr("src", imageSource).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading");

        if (_.options.adaptiveHeight === true) {
          _.setPosition();
        }

        _.$slider.trigger("lazyLoaded", [_, image, imageSource]);

        _.progressiveLazyLoad();
      };

      imageToLoad.onerror = function () {
        if (tryCount < 3) {
          setTimeout(function () {
            _.progressiveLazyLoad(tryCount + 1);
          }, 500);
        } else {
          image.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error");

          _.$slider.trigger("lazyLoadError", [_, image, imageSource]);

          _.progressiveLazyLoad();
        }
      };

      imageToLoad.src = imageSource;
    } else {
      _.$slider.trigger("allImagesLoaded", [_]);
    }
  };

  Slick.prototype.refresh = function (initializing) {
    var _ = this,
        currentSlide,
        lastVisibleIndex;

    lastVisibleIndex = _.slideCount - _.options.slidesToShow;

    if (!_.options.infinite && _.currentSlide > lastVisibleIndex) {
      _.currentSlide = lastVisibleIndex;
    }

    if (_.slideCount <= _.options.slidesToShow) {
      _.currentSlide = 0;
    }

    currentSlide = _.currentSlide;

    _.destroy(true);

    $.extend(_, _.initials, {
      currentSlide: currentSlide
    });

    _.init();

    if (!initializing) {
      _.changeSlide({
        data: {
          message: "index",
          index: currentSlide
        }
      }, false);
    }
  };

  Slick.prototype.registerBreakpoints = function () {
    var _ = this,
        breakpoint,
        currentBreakpoint,
        l,
        responsiveSettings = _.options.responsive || null;

    if ($.type(responsiveSettings) === "array" && responsiveSettings.length) {
      _.respondTo = _.options.respondTo || "window";

      for (breakpoint in responsiveSettings) {
        l = _.breakpoints.length - 1;

        if (responsiveSettings.hasOwnProperty(breakpoint)) {
          currentBreakpoint = responsiveSettings[breakpoint].breakpoint;

          while (l >= 0) {
            if (_.breakpoints[l] && _.breakpoints[l] === currentBreakpoint) {
              _.breakpoints.splice(l, 1);
            }

            l--;
          }

          _.breakpoints.push(currentBreakpoint);

          _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;
        }
      }

      _.breakpoints.sort(function (a, b) {
        return _.options.mobileFirst ? a - b : b - a;
      });
    }
  };

  Slick.prototype.reinit = function () {
    var _ = this;

    _.$slides = _.$slideTrack.children(_.options.slide).addClass("slick-slide");
    _.slideCount = _.$slides.length;

    if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
      _.currentSlide = _.currentSlide - _.options.slidesToScroll;
    }

    if (_.slideCount <= _.options.slidesToShow) {
      _.currentSlide = 0;
    }

    _.registerBreakpoints();

    _.setProps();

    _.setupInfinite();

    _.buildArrows();

    _.updateArrows();

    _.initArrowEvents();

    _.buildDots();

    _.updateDots();

    _.initDotEvents();

    _.cleanUpSlideEvents();

    _.initSlideEvents();

    _.checkResponsive(false, true);

    if (_.options.focusOnSelect === true) {
      $(_.$slideTrack).children().on("click.slick", _.selectHandler);
    }

    _.setSlideClasses(typeof _.currentSlide === "number" ? _.currentSlide : 0);

    _.setPosition();

    _.focusHandler();

    _.paused = !_.options.autoplay;

    _.autoPlay();

    _.$slider.trigger("reInit", [_]);
  };

  Slick.prototype.resize = function () {
    var _ = this;

    if ($(window).width() !== _.windowWidth) {
      clearTimeout(_.windowDelay);
      _.windowDelay = window.setTimeout(function () {
        _.windowWidth = $(window).width();

        _.checkResponsive();

        if (!_.unslicked) {
          _.setPosition();
        }
      }, 50);
    }
  };

  Slick.prototype.removeSlide = Slick.prototype.slickRemove = function (index, removeBefore, removeAll) {
    var _ = this;

    if (typeof index === "boolean") {
      removeBefore = index;
      index = removeBefore === true ? 0 : _.slideCount - 1;
    } else {
      index = removeBefore === true ? --index : index;
    }

    if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
      return false;
    }

    _.unload();

    if (removeAll === true) {
      _.$slideTrack.children().remove();
    } else {
      _.$slideTrack.children(this.options.slide).eq(index).remove();
    }

    _.$slides = _.$slideTrack.children(this.options.slide);

    _.$slideTrack.children(this.options.slide).detach();

    _.$slideTrack.append(_.$slides);

    _.$slidesCache = _.$slides;

    _.reinit();
  };

  Slick.prototype.setCSS = function (position) {
    var _ = this,
        positionProps = {},
        x,
        y;

    if (_.options.rtl === true) {
      position = -position;
    }

    x = _.positionProp == "left" ? Math.ceil(position) + "px" : "0px";
    y = _.positionProp == "top" ? Math.ceil(position) + "px" : "0px";
    positionProps[_.positionProp] = position;

    if (_.transformsEnabled === false) {
      _.$slideTrack.css(positionProps);
    } else {
      positionProps = {};

      if (_.cssTransitions === false) {
        positionProps[_.animType] = "translate(" + x + ", " + y + ")";

        _.$slideTrack.css(positionProps);
      } else {
        positionProps[_.animType] = "translate3d(" + x + ", " + y + ", 0px)";

        _.$slideTrack.css(positionProps);
      }
    }
  };

  Slick.prototype.setDimensions = function () {
    var _ = this;

    if (_.options.vertical === false) {
      if (_.options.centerMode === true) {
        _.$list.css({
          padding: "0px " + _.options.centerPadding
        });
      }
    } else {
      _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);

      if (_.options.centerMode === true) {
        _.$list.css({
          padding: _.options.centerPadding + " 0px"
        });
      }
    }

    _.listWidth = _.$list.width();
    _.listHeight = _.$list.height();

    if (_.options.vertical === false && _.options.variableWidth === false) {
      _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);

      _.$slideTrack.width(Math.ceil(_.slideWidth * _.$slideTrack.children(".slick-slide").length));
    } else if (_.options.variableWidth === true) {
      _.$slideTrack.width(5e3 * _.slideCount);
    } else {
      _.slideWidth = Math.ceil(_.listWidth);

      _.$slideTrack.height(Math.ceil(_.$slides.first().outerHeight(true) * _.$slideTrack.children(".slick-slide").length));
    }

    var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();

    if (_.options.variableWidth === false) _.$slideTrack.children(".slick-slide").width(_.slideWidth - offset);
  };

  Slick.prototype.setFade = function () {
    var _ = this,
        targetLeft;

    _.$slides.each(function (index, element) {
      targetLeft = _.slideWidth * index * -1;

      if (_.options.rtl === true) {
        $(element).css({
          position: "relative",
          right: targetLeft,
          top: 0,
          zIndex: _.options.zIndex - 2,
          opacity: 0
        });
      } else {
        $(element).css({
          position: "relative",
          left: targetLeft,
          top: 0,
          zIndex: _.options.zIndex - 2,
          opacity: 0
        });
      }
    });

    _.$slides.eq(_.currentSlide).css({
      zIndex: _.options.zIndex - 1,
      opacity: 1
    });
  };

  Slick.prototype.setHeight = function () {
    var _ = this;

    if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
      var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);

      _.$list.css("height", targetHeight);
    }
  };

  Slick.prototype.setOption = Slick.prototype.slickSetOption = function () {
    var _ = this,
        l,
        item,
        option,
        value,
        refresh = false,
        type;

    if ($.type(arguments[0]) === "object") {
      option = arguments[0];
      refresh = arguments[1];
      type = "multiple";
    } else if ($.type(arguments[0]) === "string") {
      option = arguments[0];
      value = arguments[1];
      refresh = arguments[2];

      if (arguments[0] === "responsive" && $.type(arguments[1]) === "array") {
        type = "responsive";
      } else if (typeof arguments[1] !== "undefined") {
        type = "single";
      }
    }

    if (type === "single") {
      _.options[option] = value;
    } else if (type === "multiple") {
      $.each(option, function (opt, val) {
        _.options[opt] = val;
      });
    } else if (type === "responsive") {
      for (item in value) {
        if ($.type(_.options.responsive) !== "array") {
          _.options.responsive = [value[item]];
        } else {
          l = _.options.responsive.length - 1;

          while (l >= 0) {
            if (_.options.responsive[l].breakpoint === value[item].breakpoint) {
              _.options.responsive.splice(l, 1);
            }

            l--;
          }

          _.options.responsive.push(value[item]);
        }
      }
    }

    if (refresh) {
      _.unload();

      _.reinit();
    }
  };

  Slick.prototype.setPosition = function () {
    var _ = this;

    _.setDimensions();

    _.setHeight();

    if (_.options.fade === false) {
      _.setCSS(_.getLeft(_.currentSlide));
    } else {
      _.setFade();
    }

    _.$slider.trigger("setPosition", [_]);
  };

  Slick.prototype.setProps = function () {
    var _ = this,
        bodyStyle = document.body.style;

    _.positionProp = _.options.vertical === true ? "top" : "left";

    if (_.positionProp === "top") {
      _.$slider.addClass("slick-vertical");
    } else {
      _.$slider.removeClass("slick-vertical");
    }

    if (bodyStyle.WebkitTransition !== undefined || bodyStyle.MozTransition !== undefined || bodyStyle.msTransition !== undefined) {
      if (_.options.useCSS === true) {
        _.cssTransitions = true;
      }
    }

    if (_.options.fade) {
      if (typeof _.options.zIndex === "number") {
        if (_.options.zIndex < 3) {
          _.options.zIndex = 3;
        }
      } else {
        _.options.zIndex = _.defaults.zIndex;
      }
    }

    if (bodyStyle.OTransform !== undefined) {
      _.animType = "OTransform";
      _.transformType = "-o-transform";
      _.transitionType = "OTransition";
      if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
    }

    if (bodyStyle.MozTransform !== undefined) {
      _.animType = "MozTransform";
      _.transformType = "-moz-transform";
      _.transitionType = "MozTransition";
      if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
    }

    if (bodyStyle.webkitTransform !== undefined) {
      _.animType = "webkitTransform";
      _.transformType = "-webkit-transform";
      _.transitionType = "webkitTransition";
      if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
    }

    if (bodyStyle.msTransform !== undefined) {
      _.animType = "msTransform";
      _.transformType = "-ms-transform";
      _.transitionType = "msTransition";
      if (bodyStyle.msTransform === undefined) _.animType = false;
    }

    if (bodyStyle.transform !== undefined && _.animType !== false) {
      _.animType = "transform";
      _.transformType = "transform";
      _.transitionType = "transition";
    }

    _.transformsEnabled = _.options.useTransform && _.animType !== null && _.animType !== false;
  };

  Slick.prototype.setSlideClasses = function (index) {
    var _ = this,
        centerOffset,
        allSlides,
        indexOffset,
        remainder;

    allSlides = _.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true");

    _.$slides.eq(index).addClass("slick-current");

    if (_.options.centerMode === true) {
      var evenCoef = _.options.slidesToShow % 2 === 0 ? 1 : 0;
      centerOffset = Math.floor(_.options.slidesToShow / 2);

      if (_.options.infinite === true) {
        if (index >= centerOffset && index <= _.slideCount - 1 - centerOffset) {
          _.$slides.slice(index - centerOffset + evenCoef, index + centerOffset + 1).addClass("slick-active").attr("aria-hidden", "false");
        } else {
          indexOffset = _.options.slidesToShow + index;
          allSlides.slice(indexOffset - centerOffset + 1 + evenCoef, indexOffset + centerOffset + 2).addClass("slick-active").attr("aria-hidden", "false");
        }

        if (index === 0) {
          allSlides.eq(allSlides.length - 1 - _.options.slidesToShow).addClass("slick-center");
        } else if (index === _.slideCount - 1) {
          allSlides.eq(_.options.slidesToShow).addClass("slick-center");
        }
      }

      _.$slides.eq(index).addClass("slick-center");
    } else {
      if (index >= 0 && index <= _.slideCount - _.options.slidesToShow) {
        _.$slides.slice(index, index + _.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false");
      } else if (allSlides.length <= _.options.slidesToShow) {
        allSlides.addClass("slick-active").attr("aria-hidden", "false");
      } else {
        remainder = _.slideCount % _.options.slidesToShow;
        indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;

        if (_.options.slidesToShow == _.options.slidesToScroll && _.slideCount - index < _.options.slidesToShow) {
          allSlides.slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder).addClass("slick-active").attr("aria-hidden", "false");
        } else {
          allSlides.slice(indexOffset, indexOffset + _.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false");
        }
      }
    }

    if (_.options.lazyLoad === "ondemand" || _.options.lazyLoad === "anticipated") {
      _.lazyLoad();
    }
  };

  Slick.prototype.setupInfinite = function () {
    var _ = this,
        i,
        slideIndex,
        infiniteCount;

    if (_.options.fade === true) {
      _.options.centerMode = false;
    }

    if (_.options.infinite === true && _.options.fade === false) {
      slideIndex = null;

      if (_.slideCount > _.options.slidesToShow) {
        if (_.options.centerMode === true) {
          infiniteCount = _.options.slidesToShow + 1;
        } else {
          infiniteCount = _.options.slidesToShow;
        }

        for (i = _.slideCount; i > _.slideCount - infiniteCount; i -= 1) {
          slideIndex = i - 1;
          $(_.$slides[slideIndex]).clone(true).attr("id", "").attr("data-slick-index", slideIndex - _.slideCount).prependTo(_.$slideTrack).addClass("slick-cloned");
        }

        for (i = 0; i < infiniteCount + _.slideCount; i += 1) {
          slideIndex = i;
          $(_.$slides[slideIndex]).clone(true).attr("id", "").attr("data-slick-index", slideIndex + _.slideCount).appendTo(_.$slideTrack).addClass("slick-cloned");
        }

        _.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
          $(this).attr("id", "");
        });
      }
    }
  };

  Slick.prototype.interrupt = function (toggle) {
    var _ = this;

    if (!toggle) {
      _.autoPlay();
    }

    _.interrupted = toggle;
  };

  Slick.prototype.selectHandler = function (event) {
    var _ = this;

    var targetElement = $(event.target).is(".slick-slide") ? $(event.target) : $(event.target).parents(".slick-slide");
    var index = parseInt(targetElement.attr("data-slick-index"));
    if (!index) index = 0;

    if (_.slideCount <= _.options.slidesToShow) {
      _.slideHandler(index, false, true);

      return;
    }

    _.slideHandler(index);
  };

  Slick.prototype.slideHandler = function (index, sync, dontAnimate) {
    var targetSlide,
        animSlide,
        oldSlide,
        slideLeft,
        targetLeft = null,
        _ = this,
        navTarget;

    sync = sync || false;

    if (_.animating === true && _.options.waitForAnimate === true) {
      return;
    }

    if (_.options.fade === true && _.currentSlide === index) {
      return;
    }

    if (sync === false) {
      _.asNavFor(index);
    }

    targetSlide = index;
    targetLeft = _.getLeft(targetSlide);
    slideLeft = _.getLeft(_.currentSlide);
    _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;

    if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
      if (_.options.fade === false) {
        targetSlide = _.currentSlide;

        if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
          _.animateSlide(slideLeft, function () {
            _.postSlide(targetSlide);
          });
        } else {
          _.postSlide(targetSlide);
        }
      }

      return;
    } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > _.slideCount - _.options.slidesToScroll)) {
      if (_.options.fade === false) {
        targetSlide = _.currentSlide;

        if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
          _.animateSlide(slideLeft, function () {
            _.postSlide(targetSlide);
          });
        } else {
          _.postSlide(targetSlide);
        }
      }

      return;
    }

    if (_.options.autoplay) {
      clearInterval(_.autoPlayTimer);
    }

    if (targetSlide < 0) {
      if (_.slideCount % _.options.slidesToScroll !== 0) {
        animSlide = _.slideCount - _.slideCount % _.options.slidesToScroll;
      } else {
        animSlide = _.slideCount + targetSlide;
      }
    } else if (targetSlide >= _.slideCount) {
      if (_.slideCount % _.options.slidesToScroll !== 0) {
        animSlide = 0;
      } else {
        animSlide = targetSlide - _.slideCount;
      }
    } else {
      animSlide = targetSlide;
    }

    _.animating = true;

    _.$slider.trigger("beforeChange", [_, _.currentSlide, animSlide]);

    oldSlide = _.currentSlide;
    _.currentSlide = animSlide;

    _.setSlideClasses(_.currentSlide);

    if (_.options.asNavFor) {
      navTarget = _.getNavTarget();
      navTarget = navTarget.slick("getSlick");

      if (navTarget.slideCount <= navTarget.options.slidesToShow) {
        navTarget.setSlideClasses(_.currentSlide);
      }
    }

    _.updateDots();

    _.updateArrows();

    if (_.options.fade === true) {
      if (dontAnimate !== true) {
        _.fadeSlideOut(oldSlide);

        _.fadeSlide(animSlide, function () {
          _.postSlide(animSlide);
        });
      } else {
        _.postSlide(animSlide);
      }

      _.animateHeight();

      return;
    }

    if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
      _.animateSlide(targetLeft, function () {
        _.postSlide(animSlide);
      });
    } else {
      _.postSlide(animSlide);
    }
  };

  Slick.prototype.startLoad = function () {
    var _ = this;

    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
      _.$prevArrow.hide();

      _.$nextArrow.hide();
    }

    if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
      _.$dots.hide();
    }

    _.$slider.addClass("slick-loading");
  };

  Slick.prototype.swipeDirection = function () {
    var xDist,
        yDist,
        r,
        swipeAngle,
        _ = this;

    xDist = _.touchObject.startX - _.touchObject.curX;
    yDist = _.touchObject.startY - _.touchObject.curY;
    r = Math.atan2(yDist, xDist);
    swipeAngle = Math.round(r * 180 / Math.PI);

    if (swipeAngle < 0) {
      swipeAngle = 360 - Math.abs(swipeAngle);
    }

    if (swipeAngle <= 45 && swipeAngle >= 0) {
      return _.options.rtl === false ? "left" : "right";
    }

    if (swipeAngle <= 360 && swipeAngle >= 315) {
      return _.options.rtl === false ? "left" : "right";
    }

    if (swipeAngle >= 135 && swipeAngle <= 225) {
      return _.options.rtl === false ? "right" : "left";
    }

    if (_.options.verticalSwiping === true) {
      if (swipeAngle >= 35 && swipeAngle <= 135) {
        return "down";
      } else {
        return "up";
      }
    }

    return "vertical";
  };

  Slick.prototype.swipeEnd = function (event) {
    var _ = this,
        slideCount,
        direction;

    _.dragging = false;
    _.swiping = false;

    if (_.scrolling) {
      _.scrolling = false;
      return false;
    }

    _.interrupted = false;
    _.shouldClick = _.touchObject.swipeLength > 10 ? false : true;

    if (_.touchObject.curX === undefined) {
      return false;
    }

    if (_.touchObject.edgeHit === true) {
      _.$slider.trigger("edge", [_, _.swipeDirection()]);
    }

    if (_.touchObject.swipeLength >= _.touchObject.minSwipe) {
      direction = _.swipeDirection();

      switch (direction) {
        case "left":
        case "down":
          slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide + _.getSlideCount()) : _.currentSlide + _.getSlideCount();
          _.currentDirection = 0;
          break;

        case "right":
        case "up":
          slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide - _.getSlideCount()) : _.currentSlide - _.getSlideCount();
          _.currentDirection = 1;
          break;

        default:
      }

      if (direction != "vertical") {
        _.slideHandler(slideCount);

        _.touchObject = {};

        _.$slider.trigger("swipe", [_, direction]);
      }
    } else {
      if (_.touchObject.startX !== _.touchObject.curX) {
        _.slideHandler(_.currentSlide);

        _.touchObject = {};
      }
    }
  };

  Slick.prototype.swipeHandler = function (event) {
    var _ = this;

    if (_.options.swipe === false || "ontouchend" in document && _.options.swipe === false) {
      return;
    } else if (_.options.draggable === false && event.type.indexOf("mouse") !== -1) {
      return;
    }

    _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ? event.originalEvent.touches.length : 1;
    _.touchObject.minSwipe = _.listWidth / _.options.touchThreshold;

    if (_.options.verticalSwiping === true) {
      _.touchObject.minSwipe = _.listHeight / _.options.touchThreshold;
    }

    switch (event.data.action) {
      case "start":
        _.swipeStart(event);

        break;

      case "move":
        _.swipeMove(event);

        break;

      case "end":
        _.swipeEnd(event);

        break;
    }
  };

  Slick.prototype.swipeMove = function (event) {
    var _ = this,
        edgeWasHit = false,
        curLeft,
        swipeDirection,
        swipeLength,
        positionOffset,
        touches,
        verticalSwipeLength;

    touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;

    if (!_.dragging || _.scrolling || touches && touches.length !== 1) {
      return false;
    }

    curLeft = _.getLeft(_.currentSlide);
    _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
    _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;
    _.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));
    verticalSwipeLength = Math.round(Math.sqrt(Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));

    if (!_.options.verticalSwiping && !_.swiping && verticalSwipeLength > 4) {
      _.scrolling = true;
      return false;
    }

    if (_.options.verticalSwiping === true) {
      _.touchObject.swipeLength = verticalSwipeLength;
    }

    swipeDirection = _.swipeDirection();

    if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
      _.swiping = true;
      event.preventDefault();
    }

    positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);

    if (_.options.verticalSwiping === true) {
      positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
    }

    swipeLength = _.touchObject.swipeLength;
    _.touchObject.edgeHit = false;

    if (_.options.infinite === false) {
      if (_.currentSlide === 0 && swipeDirection === "right" || _.currentSlide >= _.getDotCount() && swipeDirection === "left") {
        swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
        _.touchObject.edgeHit = true;
      }
    }

    if (_.options.vertical === false) {
      _.swipeLeft = curLeft + swipeLength * positionOffset;
    } else {
      _.swipeLeft = curLeft + swipeLength * (_.$list.height() / _.listWidth) * positionOffset;
    }

    if (_.options.verticalSwiping === true) {
      _.swipeLeft = curLeft + swipeLength * positionOffset;
    }

    if (_.options.fade === true || _.options.touchMove === false) {
      return false;
    }

    if (_.animating === true) {
      _.swipeLeft = null;
      return false;
    }

    _.setCSS(_.swipeLeft);
  };

  Slick.prototype.swipeStart = function (event) {
    var _ = this,
        touches;

    _.interrupted = true;

    if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
      _.touchObject = {};
      return false;
    }

    if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
      touches = event.originalEvent.touches[0];
    }

    _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
    _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;
    _.dragging = true;
  };

  Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function () {
    var _ = this;

    if (_.$slidesCache !== null) {
      _.unload();

      _.$slideTrack.children(this.options.slide).detach();

      _.$slidesCache.appendTo(_.$slideTrack);

      _.reinit();
    }
  };

  Slick.prototype.unload = function () {
    var _ = this;

    $(".slick-cloned", _.$slider).remove();

    if (_.$dots) {
      _.$dots.remove();
    }

    if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
      _.$prevArrow.remove();
    }

    if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
      _.$nextArrow.remove();
    }

    _.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "");
  };

  Slick.prototype.unslick = function (fromBreakpoint) {
    var _ = this;

    _.$slider.trigger("unslick", [_, fromBreakpoint]);

    _.destroy();
  };

  Slick.prototype.updateArrows = function () {
    var _ = this,
        centerOffset;

    centerOffset = Math.floor(_.options.slidesToShow / 2);

    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow && !_.options.infinite) {
      _.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false");

      _.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false");

      if (_.currentSlide === 0) {
        _.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true");

        _.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false");
      } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {
        _.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true");

        _.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false");
      } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {
        _.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true");

        _.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false");
      }
    }
  };

  Slick.prototype.updateDots = function () {
    var _ = this;

    if (_.$dots !== null) {
      _.$dots.find("li").removeClass("slick-active").end();

      _.$dots.find("li").eq(Math.floor(_.currentSlide / _.options.slidesToScroll)).addClass("slick-active");
    }
  };

  Slick.prototype.visibility = function () {
    var _ = this;

    if (_.options.autoplay) {
      if (document[_.hidden]) {
        _.interrupted = true;
      } else {
        _.interrupted = false;
      }
    }
  };

  $.fn.slick = function () {
    var _ = this,
        opt = arguments[0],
        args = Array.prototype.slice.call(arguments, 1),
        l = _.length,
        i,
        ret;

    for (i = 0; i < l; i++) {
      if (_typeof(opt) == "object" || typeof opt == "undefined") _[i].slick = new Slick(_[i], opt);else ret = _[i].slick[opt].apply(_[i].slick, args);
      if (typeof ret != "undefined") return ret;
    }

    return _;
  };
});

/***/ })

},[["./assets/js/app.js","runtime","vendors~app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jc3MvaGFtYnVyZ2VyLm1pbi5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Nzcy9zbGljay5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Nzcy90YWlsd2luZC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvc2xpY2suanMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJvbiIsInNsaWRlVG9nZ2xlIiwidG9nZ2xlQ2xhc3MiLCJwYXNzQ29uZmlybSIsInZhbCIsInBhc3MiLCJlcnJvck1zZyIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJIVE1MIiwiY3NzIiwiY29uc29sZSIsImxvZyIsImhhbWJ1cmdlciIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwicGFyZW50RWxlbWVudCIsInNsaWNrIiwiaW5maW5pdGUiLCJhdXRvcGxheSIsInNwZWVkIiwic2xpZGVzVG9TaG93IiwicHJldkFycm93IiwibmV4dEFycm93IiwiYXJyb3dzIiwiYWRhcHRpdmVIZWlnaHQiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwibWVudUl0ZW0iLCJhdHRyIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImVhY2giLCJwYWdlTmFtZSIsImdldEl0ZW0iLCJtYXBib3hnbCIsInJlcXVpcmUiLCJsb25naXR1ZGUiLCJkYXRhIiwibGF0aXR1ZGUiLCJhY2Nlc3NUb2tlbiIsIm1hcCIsIk1hcCIsImNvbnRhaW5lciIsInN0eWxlIiwiY2VudGVyIiwiem9vbSIsIm1hcmtlciIsIk1hcmtlciIsInNldExuZ0xhdCIsImFkZFRvIiwiaGlkZSIsInNob3ciLCJub3QiLCJjbGllbnRTZWNyZXQiLCJjdXN0b21lclNESyIsIkN1c3RvbWVyU0RLIiwibGljZW5zZUlkIiwiY2xpZW50SWQiLCJuZXdFdmVudCIsImNoYXRJZCIsInNlbmRFdmVudCIsImV2ZW50IiwidHlwZSIsInRleHQiLCJ0aGVuIiwicmVzcG9uc2UiLCJlcnJvciIsImZhY3RvcnkiLCJkZWZpbmUiLCJTbGljayIsIndpbmRvdyIsImluc3RhbmNlVWlkIiwiZWxlbWVudCIsInNldHRpbmdzIiwiXyIsImRhdGFTZXR0aW5ncyIsImRlZmF1bHRzIiwiYWNjZXNzaWJpbGl0eSIsImFwcGVuZEFycm93cyIsImFwcGVuZERvdHMiLCJhc05hdkZvciIsImF1dG9wbGF5U3BlZWQiLCJjZW50ZXJNb2RlIiwiY2VudGVyUGFkZGluZyIsImNzc0Vhc2UiLCJjdXN0b21QYWdpbmciLCJzbGlkZXIiLCJpIiwiZG90cyIsImRvdHNDbGFzcyIsImRyYWdnYWJsZSIsImVhc2luZyIsImVkZ2VGcmljdGlvbiIsImZhZGUiLCJmb2N1c09uU2VsZWN0IiwiZm9jdXNPbkNoYW5nZSIsImluaXRpYWxTbGlkZSIsImxhenlMb2FkIiwibW9iaWxlRmlyc3QiLCJwYXVzZU9uSG92ZXIiLCJwYXVzZU9uRm9jdXMiLCJwYXVzZU9uRG90c0hvdmVyIiwicmVzcG9uZFRvIiwicmVzcG9uc2l2ZSIsInJvd3MiLCJydGwiLCJzbGlkZSIsInNsaWRlc1BlclJvdyIsInNsaWRlc1RvU2Nyb2xsIiwic3dpcGUiLCJzd2lwZVRvU2xpZGUiLCJ0b3VjaE1vdmUiLCJ0b3VjaFRocmVzaG9sZCIsInVzZUNTUyIsInVzZVRyYW5zZm9ybSIsInZhcmlhYmxlV2lkdGgiLCJ2ZXJ0aWNhbCIsInZlcnRpY2FsU3dpcGluZyIsIndhaXRGb3JBbmltYXRlIiwiekluZGV4IiwiaW5pdGlhbHMiLCJhbmltYXRpbmciLCJkcmFnZ2luZyIsImF1dG9QbGF5VGltZXIiLCJjdXJyZW50RGlyZWN0aW9uIiwiY3VycmVudExlZnQiLCJjdXJyZW50U2xpZGUiLCJkaXJlY3Rpb24iLCIkZG90cyIsImxpc3RXaWR0aCIsImxpc3RIZWlnaHQiLCJsb2FkSW5kZXgiLCIkbmV4dEFycm93IiwiJHByZXZBcnJvdyIsInNjcm9sbGluZyIsInNsaWRlQ291bnQiLCJzbGlkZVdpZHRoIiwiJHNsaWRlVHJhY2siLCIkc2xpZGVzIiwic2xpZGluZyIsInNsaWRlT2Zmc2V0Iiwic3dpcGVMZWZ0Iiwic3dpcGluZyIsIiRsaXN0IiwidG91Y2hPYmplY3QiLCJ0cmFuc2Zvcm1zRW5hYmxlZCIsInVuc2xpY2tlZCIsImV4dGVuZCIsImFjdGl2ZUJyZWFrcG9pbnQiLCJhbmltVHlwZSIsImFuaW1Qcm9wIiwiYnJlYWtwb2ludHMiLCJicmVha3BvaW50U2V0dGluZ3MiLCJjc3NUcmFuc2l0aW9ucyIsImZvY3Vzc2VkIiwiaW50ZXJydXB0ZWQiLCJoaWRkZW4iLCJwYXVzZWQiLCJwb3NpdGlvblByb3AiLCJyb3dDb3VudCIsInNob3VsZENsaWNrIiwiJHNsaWRlciIsIiRzbGlkZXNDYWNoZSIsInRyYW5zZm9ybVR5cGUiLCJ0cmFuc2l0aW9uVHlwZSIsInZpc2liaWxpdHlDaGFuZ2UiLCJ3aW5kb3dXaWR0aCIsIndpbmRvd1RpbWVyIiwib3B0aW9ucyIsIm9yaWdpbmFsU2V0dGluZ3MiLCJtb3pIaWRkZW4iLCJ3ZWJraXRIaWRkZW4iLCJhdXRvUGxheSIsInByb3h5IiwiYXV0b1BsYXlDbGVhciIsImF1dG9QbGF5SXRlcmF0b3IiLCJjaGFuZ2VTbGlkZSIsImNsaWNrSGFuZGxlciIsInNlbGVjdEhhbmRsZXIiLCJzZXRQb3NpdGlvbiIsInN3aXBlSGFuZGxlciIsImRyYWdIYW5kbGVyIiwia2V5SGFuZGxlciIsImh0bWxFeHByIiwicmVnaXN0ZXJCcmVha3BvaW50cyIsImluaXQiLCJwcm90b3R5cGUiLCJhY3RpdmF0ZUFEQSIsImZpbmQiLCJ0YWJpbmRleCIsImFkZFNsaWRlIiwic2xpY2tBZGQiLCJtYXJrdXAiLCJpbmRleCIsImFkZEJlZm9yZSIsInVubG9hZCIsImxlbmd0aCIsImFwcGVuZFRvIiwiaW5zZXJ0QmVmb3JlIiwiZXEiLCJpbnNlcnRBZnRlciIsInByZXBlbmRUbyIsImNoaWxkcmVuIiwiZGV0YWNoIiwiYXBwZW5kIiwicmVpbml0IiwiYW5pbWF0ZUhlaWdodCIsInRhcmdldEhlaWdodCIsIm91dGVySGVpZ2h0IiwiYW5pbWF0ZSIsImhlaWdodCIsImFuaW1hdGVTbGlkZSIsInRhcmdldExlZnQiLCJjYWxsYmFjayIsImFuaW1Qcm9wcyIsImxlZnQiLCJ0b3AiLCJhbmltU3RhcnQiLCJkdXJhdGlvbiIsInN0ZXAiLCJub3ciLCJNYXRoIiwiY2VpbCIsImNvbXBsZXRlIiwiY2FsbCIsImFwcGx5VHJhbnNpdGlvbiIsInNldFRpbWVvdXQiLCJkaXNhYmxlVHJhbnNpdGlvbiIsImdldE5hdlRhcmdldCIsInRhcmdldCIsInNsaWRlSGFuZGxlciIsInRyYW5zaXRpb24iLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJzbGlkZVRvIiwiYnVpbGRBcnJvd3MiLCJyZW1vdmVBdHRyIiwidGVzdCIsImFkZCIsImJ1aWxkRG90cyIsImRvdCIsImdldERvdENvdW50IiwiZmlyc3QiLCJidWlsZE91dCIsIndyYXBBbGwiLCJwYXJlbnQiLCJ3cmFwIiwic2V0dXBJbmZpbml0ZSIsInVwZGF0ZURvdHMiLCJzZXRTbGlkZUNsYXNzZXMiLCJidWlsZFJvd3MiLCJhIiwiYiIsImMiLCJuZXdTbGlkZXMiLCJudW1PZlNsaWRlcyIsIm9yaWdpbmFsU2xpZGVzIiwic2xpZGVzUGVyU2VjdGlvbiIsImNyZWF0ZURvY3VtZW50RnJhZ21lbnQiLCJjcmVhdGVFbGVtZW50Iiwicm93IiwiZ2V0IiwiYXBwZW5kQ2hpbGQiLCJlbXB0eSIsIndpZHRoIiwiZGlzcGxheSIsImNoZWNrUmVzcG9uc2l2ZSIsImluaXRpYWwiLCJmb3JjZVVwZGF0ZSIsImJyZWFrcG9pbnQiLCJ0YXJnZXRCcmVha3BvaW50IiwicmVzcG9uZFRvV2lkdGgiLCJ0cmlnZ2VyQnJlYWtwb2ludCIsInNsaWRlcldpZHRoIiwiaW5uZXJXaWR0aCIsIm1pbiIsImhhc093blByb3BlcnR5IiwidW5zbGljayIsInJlZnJlc2giLCJ0cmlnZ2VyIiwiZG9udEFuaW1hdGUiLCIkdGFyZ2V0IiwiY3VycmVudFRhcmdldCIsImluZGV4T2Zmc2V0IiwidW5ldmVuT2Zmc2V0IiwiaXMiLCJwcmV2ZW50RGVmYXVsdCIsImNsb3Nlc3QiLCJtZXNzYWdlIiwiY2hlY2tOYXZpZ2FibGUiLCJuYXZpZ2FibGVzIiwicHJldk5hdmlnYWJsZSIsImdldE5hdmlnYWJsZUluZGV4ZXMiLCJuIiwiY2xlYW5VcEV2ZW50cyIsIm9mZiIsImludGVycnVwdCIsInZpc2liaWxpdHkiLCJjbGVhblVwU2xpZGVFdmVudHMiLCJvcmllbnRhdGlvbkNoYW5nZSIsInJlc2l6ZSIsImNsZWFuVXBSb3dzIiwic3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uIiwic3RvcFByb3BhZ2F0aW9uIiwiZGVzdHJveSIsInJlbW92ZSIsImZhZGVTbGlkZSIsInNsaWRlSW5kZXgiLCJvcGFjaXR5IiwiZmFkZVNsaWRlT3V0IiwiZmlsdGVyU2xpZGVzIiwic2xpY2tGaWx0ZXIiLCJmaWx0ZXIiLCJmb2N1c0hhbmRsZXIiLCIkc2YiLCJnZXRDdXJyZW50Iiwic2xpY2tDdXJyZW50U2xpZGUiLCJicmVha1BvaW50IiwiY291bnRlciIsInBhZ2VyUXR5IiwiZ2V0TGVmdCIsInZlcnRpY2FsSGVpZ2h0IiwidmVydGljYWxPZmZzZXQiLCJ0YXJnZXRTbGlkZSIsImNvZWYiLCJmbG9vciIsIm9mZnNldExlZnQiLCJvdXRlcldpZHRoIiwiZ2V0T3B0aW9uIiwic2xpY2tHZXRPcHRpb24iLCJvcHRpb24iLCJpbmRleGVzIiwibWF4IiwicHVzaCIsImdldFNsaWNrIiwiZ2V0U2xpZGVDb3VudCIsInNsaWRlc1RyYXZlcnNlZCIsInN3aXBlZFNsaWRlIiwic3dpcGVUYXJnZXQiLCJjZW50ZXJPZmZzZXQiLCJzbGlkZU91dGVyV2lkdGgiLCJzbGlkZVJpZ2h0Qm91bmRhcnkiLCJhYnMiLCJnb1RvIiwic2xpY2tHb1RvIiwicGFyc2VJbnQiLCJjcmVhdGlvbiIsImhhc0NsYXNzIiwic2V0UHJvcHMiLCJzdGFydExvYWQiLCJsb2FkU2xpZGVyIiwiaW5pdGlhbGl6ZUV2ZW50cyIsInVwZGF0ZUFycm93cyIsImluaXRBREEiLCJudW1Eb3RHcm91cHMiLCJ0YWJDb250cm9sSW5kZXhlcyIsInNsaWRlQ29udHJvbEluZGV4IiwiaW5kZXhPZiIsInJvbGUiLCJpZCIsImFyaWFCdXR0b25Db250cm9sIiwibWFwcGVkU2xpZGVJbmRleCIsImVuZCIsImluaXRBcnJvd0V2ZW50cyIsImluaXREb3RFdmVudHMiLCJpbml0U2xpZGVFdmVudHMiLCJhY3Rpb24iLCJpbml0VUkiLCJ0YWdOYW1lIiwibWF0Y2giLCJrZXlDb2RlIiwibG9hZFJhbmdlIiwiY2xvbmVSYW5nZSIsInJhbmdlU3RhcnQiLCJyYW5nZUVuZCIsImxvYWRJbWFnZXMiLCJpbWFnZXNTY29wZSIsImltYWdlIiwiaW1hZ2VTb3VyY2UiLCJpbWFnZVNyY1NldCIsImltYWdlU2l6ZXMiLCJpbWFnZVRvTG9hZCIsIm9ubG9hZCIsIm9uZXJyb3IiLCJzcmMiLCJzbGljZSIsInByZXZTbGlkZSIsIm5leHRTbGlkZSIsInByb2dyZXNzaXZlTGF6eUxvYWQiLCJuZXh0Iiwic2xpY2tOZXh0IiwicGF1c2UiLCJzbGlja1BhdXNlIiwicGxheSIsInNsaWNrUGxheSIsInBvc3RTbGlkZSIsIiRjdXJyZW50U2xpZGUiLCJmb2N1cyIsInByZXYiLCJzbGlja1ByZXYiLCJ0cnlDb3VudCIsIiRpbWdzVG9Mb2FkIiwiaW5pdGlhbGl6aW5nIiwibGFzdFZpc2libGVJbmRleCIsImN1cnJlbnRCcmVha3BvaW50IiwibCIsInJlc3BvbnNpdmVTZXR0aW5ncyIsInNwbGljZSIsInNvcnQiLCJjbGVhclRpbWVvdXQiLCJ3aW5kb3dEZWxheSIsInJlbW92ZVNsaWRlIiwic2xpY2tSZW1vdmUiLCJyZW1vdmVCZWZvcmUiLCJyZW1vdmVBbGwiLCJzZXRDU1MiLCJwb3NpdGlvbiIsInBvc2l0aW9uUHJvcHMiLCJ4IiwieSIsInNldERpbWVuc2lvbnMiLCJwYWRkaW5nIiwib2Zmc2V0Iiwic2V0RmFkZSIsInJpZ2h0Iiwic2V0SGVpZ2h0Iiwic2V0T3B0aW9uIiwic2xpY2tTZXRPcHRpb24iLCJpdGVtIiwidmFsdWUiLCJhcmd1bWVudHMiLCJvcHQiLCJib2R5U3R5bGUiLCJib2R5IiwiV2Via2l0VHJhbnNpdGlvbiIsInVuZGVmaW5lZCIsIk1velRyYW5zaXRpb24iLCJtc1RyYW5zaXRpb24iLCJPVHJhbnNmb3JtIiwicGVyc3BlY3RpdmVQcm9wZXJ0eSIsIndlYmtpdFBlcnNwZWN0aXZlIiwiTW96VHJhbnNmb3JtIiwiTW96UGVyc3BlY3RpdmUiLCJ3ZWJraXRUcmFuc2Zvcm0iLCJtc1RyYW5zZm9ybSIsInRyYW5zZm9ybSIsImFsbFNsaWRlcyIsInJlbWFpbmRlciIsImV2ZW5Db2VmIiwiaW5maW5pdGVDb3VudCIsImNsb25lIiwidGFyZ2V0RWxlbWVudCIsInBhcmVudHMiLCJzeW5jIiwiYW5pbVNsaWRlIiwib2xkU2xpZGUiLCJzbGlkZUxlZnQiLCJuYXZUYXJnZXQiLCJzd2lwZURpcmVjdGlvbiIsInhEaXN0IiwieURpc3QiLCJyIiwic3dpcGVBbmdsZSIsInN0YXJ0WCIsImN1clgiLCJzdGFydFkiLCJjdXJZIiwiYXRhbjIiLCJyb3VuZCIsIlBJIiwic3dpcGVFbmQiLCJzd2lwZUxlbmd0aCIsImVkZ2VIaXQiLCJtaW5Td2lwZSIsImZpbmdlckNvdW50Iiwib3JpZ2luYWxFdmVudCIsInRvdWNoZXMiLCJzd2lwZVN0YXJ0Iiwic3dpcGVNb3ZlIiwiZWRnZVdhc0hpdCIsImN1ckxlZnQiLCJwb3NpdGlvbk9mZnNldCIsInZlcnRpY2FsU3dpcGVMZW5ndGgiLCJwYWdlWCIsImNsaWVudFgiLCJwYWdlWSIsImNsaWVudFkiLCJzcXJ0IiwicG93IiwidW5maWx0ZXJTbGlkZXMiLCJzbGlja1VuZmlsdGVyIiwiZnJvbUJyZWFrcG9pbnQiLCJmbiIsImFyZ3MiLCJBcnJheSIsInJldCIsImFwcGx5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx1Qzs7Ozs7Ozs7Ozs7QUNB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QUFhLFlBQVk7QUFBRSxRQUFJMEQsQ0FBQyxHQUFHLElBQVI7QUFBQSxRQUFjcVcsR0FBRyxHQUFHRCxTQUFTLENBQUMsQ0FBRCxDQUE3QjtBQUFBLFFBQWtDK0QsSUFBSSxHQUFHQyxLQUFLLENBQUNwVCxTQUFOLENBQWdCdU0sS0FBaEIsQ0FBc0JqSyxJQUF0QixDQUEyQjhNLFNBQTNCLEVBQXNDLENBQXRDLENBQXpDO0FBQUEsUUFBbUZ6QixDQUFDLEdBQUczVSxDQUFDLENBQUMwSCxNQUF6RjtBQUFBLFFBQWlHN0csQ0FBakc7QUFBQSxRQUFvR3daLEdBQXBHOztBQUF5RyxTQUFLeFosQ0FBQyxHQUFHLENBQVQsRUFBWUEsQ0FBQyxHQUFHOFQsQ0FBaEIsRUFBbUI5VCxDQUFDLEVBQXBCLEVBQXdCO0FBQUUsVUFBSSxRQUFPd1YsR0FBUCxLQUFjLFFBQWQsSUFBMEIsT0FBT0EsR0FBUCxJQUFjLFdBQTVDLEVBQXlEclcsQ0FBQyxDQUFDYSxDQUFELENBQUQsQ0FBS3ZFLEtBQUwsR0FBYSxJQUFJcUQsS0FBSixDQUFVSyxDQUFDLENBQUNhLENBQUQsQ0FBWCxFQUFnQndWLEdBQWhCLENBQWIsQ0FBekQsS0FBaUdnRSxHQUFHLEdBQUdyYSxDQUFDLENBQUNhLENBQUQsQ0FBRCxDQUFLdkUsS0FBTCxDQUFXK1osR0FBWCxFQUFnQmlFLEtBQWhCLENBQXNCdGEsQ0FBQyxDQUFDYSxDQUFELENBQUQsQ0FBS3ZFLEtBQTNCLEVBQWtDNmQsSUFBbEMsQ0FBTjtBQUErQyxVQUFJLE9BQU9FLEdBQVAsSUFBYyxXQUFsQixFQUErQixPQUFPQSxHQUFQO0FBQVk7O0FBQUMsV0FBT3JhLENBQVA7QUFBVSxHQUFwVztBQUFzVyxDQUF2bjBELEUiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLypcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcbiAqXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxuICovXG5cbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcbmltcG9ydCAnLi4vY3NzL2FwcC5zY3NzJztcbmltcG9ydCAnLi4vY3NzL3NsaWNrLmNzcyc7XG5pbXBvcnQgJy4uL2Nzcy9oYW1idXJnZXIubWluLmNzcyc7XG5pbXBvcnQgJy4uL2Nzcy90YWlsd2luZC5jc3MnO1xuXG5cbi8vIE5lZWQgalF1ZXJ5PyBJbnN0YWxsIGl0IHdpdGggXCJ5YXJuIGFkZCBqcXVlcnlcIiwgdGhlbiB1bmNvbW1lbnQgdG8gaW1wb3J0IGl0LlxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuaW1wb3J0ICcuLi9qcy9zbGljayc7XG5cbmltcG9ydCAqIGFzIEN1c3RvbWVyU0RLIGZyb20gJ0BsaXZlY2hhdC9jdXN0b21lci1zZGsnXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG5cbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICAgICAgICAgICAgbW9iaWxlIGRyb3Bkb3duXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuICAgICQoJy5kcm9wZG93bk1vYmlsZUJ1dHRvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAkKCcuZHJvcGRvd25Nb2JpbGVfX2NvbnRlbnQnKS5zbGlkZVRvZ2dsZSgpO1xuICAgICAgICAkKCcuZHJvcGRvd25Nb2JpbGVCdXR0b24gPiAuZmEtY2FyZXQtdXAnKS50b2dnbGVDbGFzcygncm90YXRlQ2hldnJvbicpO1xuXG4gICAgfSlcblxuXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAgICAgICAgICAgIHBhc3MgY29uZmlybSBcbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gICAgJCgnLnBhc3N3b3JkQ29uZmlybScpLm9uKCdrZXl1cCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHBhc3NDb25maXJtID0gJCgnLmNvbmZpcm1QYXNzJykudmFsKCk7XG4gICAgICAgIHZhciBwYXNzID0gJCgnLnBhc3MnKS52YWwoKTtcbiAgICAgICAgdmFyIGVycm9yTXNnID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Vycm9yLW1zZycpO1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHBhc3MpO1xuICAgICAgICBpZiAocGFzcyA9PT0gJycgfHwgcGFzcyA9PT0gbnVsbCB8fCBwYXNzQ29uZmlybSA9PT0gJycgfHwgcGFzc0NvbmZpcm0gPT09IG51bGwpIHtcbiAgICAgICAgICAgIGVycm9yTXNnLmlubmVySFRNTCA9IFwiUGxlYXNlIGZpbGwgYWxsIGZpZWxkc1wiO1xuICAgICAgICAgICAgJCgnI2Vycm9yLW1zZycpLmNzcygnY29sb3InLCAncmVkJyk7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChwYXNzQ29uZmlybSA9PT0gcGFzcykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd5ZXMnKTtcbiAgICAgICAgICAgICAgICBlcnJvck1zZy5pbm5lckhUTUwgPSBcIlBhc3N3b3JkcyBNYXRjaFwiO1xuICAgICAgICAgICAgICAgICQoJyNlcnJvci1tc2cnKS5jc3MoJ2NvbG9yJywgJ2dyZWVuJyk7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ25vJyk7XG4gICAgICAgICAgICAgICAgZXJyb3JNc2cuaW5uZXJIVE1MID0gXCJQYXNzd29yZHMgZG8gbm90IG1hdGNoXCI7XG4gICAgICAgICAgICAgICAgJCgnI2Vycm9yLW1zZycpLmNzcygnY29sb3InLCAncmVkJyk7XG5cblxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gbW9iaWxlIG1lbnVcblxuICAgIHZhciBoYW1idXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhhbWJ1cmdlclwiKTtcbiAgICAvLyBPbiBjbGlja1xuICAgIGhhbWJ1cmdlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBUb2dnbGUgY2xhc3MgXCJpcy1hY3RpdmVcIlxuICAgICAgICBoYW1idXJnZXIuY2xhc3NMaXN0LnRvZ2dsZShcImlzLWFjdGl2ZVwiKTtcbiAgICAgICAgLy8gRG8gc29tZXRoaW5nIGVsc2UsIGxpa2Ugb3Blbi9jbG9zZSBtZW51XG4gICAgICAgICQoJy5tb2JpbGVNZW51JykudG9nZ2xlQ2xhc3MoXCJhY3RpdmVNZW51XCIpO1xuICAgICAgICAkKCcub3ZlcmxheScpLnRvZ2dsZUNsYXNzKFwic2hvd1wiKTtcblxuXG5cbiAgICB9KTtcblxuICAgIC8vIGVuZCBtb2JpbGUgbWVudVxuXG4gICAgLy8gZmlsdGVycyBtb2JpbGVcblxuICAgICQoJy5maWx0ZXJzTW9iaWxlX190aXRsZVRhYicpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzLnBhcmVudEVsZW1lbnQpLnRvZ2dsZUNsYXNzKCdmaWx0ZXJzTW9iaWxlX19hY3RpdmUnKTtcbiAgICB9KVxuXG5cbiAgICAvLyBlbmQgbW9iaWxlIGZpbHRlcnNcblxuXG4gICAgLy8gICAgICQod2luZG93KS5vbihcImxvYWRcIiAsIGZ1bmN0aW9uICgpIHtcbiAgICAvLyAgICAgICAgICQoJy5sb2FkZXInKS5mYWRlT3V0KCk7XG4gICAgLy8gICAgIH0pXG5cbiAgICAvLyBwcm9wZXJ0eSBQaG90b3MgU2xpZGVyXG4gICAgLy8gTG9vayBmb3IgLmhhbWJ1cmdlclxuXG5cbiAgICAkKCcucHJvcGVydHlQaG90b1NsaWRlcicpLnNsaWNrKHtcbiAgICAgICAgLy8gZG90czogdHJ1ZSxcbiAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgICAgICBzcGVlZDogMzAwLFxuICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgIHByZXZBcnJvdzogJzxkaXYgY2xhc3M9XCJzbGljay1wcmV2XCI+PGkgY2xhc3M9XCJmYXMgZmEtYW5nbGUtbGVmdFwiPjwvaT48L2Rpdj4nLFxuICAgICAgICBuZXh0QXJyb3c6ICc8ZGl2IGNsYXNzPVwic2xpY2stbmV4dFwiPjxpIGNsYXNzPVwiZmFzIGZhLWFuZ2xlLXJpZ2h0XCI+PC9pPjwvZGl2PicsXG4gICAgICAgIGFycm93czogdHJ1ZSxcbiAgICAgICAgYWRhcHRpdmVIZWlnaHQ6IHRydWVcblxuICAgIH0pO1xuXG4gICAgJCgnLm1haW5NZW51IHVsIGxpJykub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJy5tYWluTWVudSB1bCBsaScpLnJlbW92ZUNsYXNzKCdhY3RpdmVNZW51SXRlbScpO1xuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmVNZW51SXRlbScpO1xuICAgICAgICB2YXIgbWVudUl0ZW0gPSAkKHRoaXMpLmF0dHIoJ2lkJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKG1lbnVJdGVtKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3BhZ2VOYW1lJywgbWVudUl0ZW0pO1xuXG5cbiAgICB9KVxuXG5cbiAgICAkKCcubWFpbk1lbnUgdWwgbGknKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHBhZ2VOYW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3BhZ2VOYW1lJyk7XG5cbiAgICAgICAgY29uc29sZS5sb2cocGFnZU5hbWUpO1xuXG4gICAgICAgIGlmIChwYWdlTmFtZSA9PT0gJCh0aGlzKS5hdHRyKCdpZCcpKSB7XG4gICAgICAgICAgICAkKCcubWFpbk1lbnUgdWwgbGknKS5yZW1vdmVDbGFzcygnYWN0aXZlTWVudUl0ZW0nKTtcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZU1lbnVJdGVtJyk7XG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIHJldHVybjtcblxuXG4gICAgICAgIH1cbiAgICB9KVxuXG5cbiAgICBjb25zdCBtYXBib3hnbCA9IHJlcXVpcmUoJ21hcGJveC1nbCcpO1xuXG4gICAgbGV0IGxvbmdpdHVkZSA9ICQoJyNtYXAnKS5kYXRhKCdsb25nJyk7XG4gICAgbGV0IGxhdGl0dWRlID0gJCgnI21hcCcpLmRhdGEoJ2xhdCcpO1xuXG4gICAgY29uc29sZS5sb2cobG9uZ2l0dWRlKTtcbiAgICBtYXBib3hnbC5hY2Nlc3NUb2tlbiA9ICdway5leUoxSWpvaWMyVmhibk50YVhSb09UZ2lMQ0poSWpvaVkydGhiREZvTVRscE1IRXpPREozYlhkNlpXTXlOR3hpWkNKOS5XOEJNRTBNaHhrR1lORmZJekpFdXhBJztcbiAgICBjb25zdCBtYXAgPSBuZXcgbWFwYm94Z2wuTWFwKHtcbiAgICAgICAgY29udGFpbmVyOiAnbWFwJyxcbiAgICAgICAgc3R5bGU6ICdtYXBib3g6Ly9zdHlsZXMvbWFwYm94L3N0cmVldHMtdjExJywgLy8gc3R5bGVzaGVldCBsb2NhdGlvblxuICAgICAgICBjZW50ZXI6IFtsb25naXR1ZGUsIGxhdGl0dWRlXSwgLy8gc3RhcnRpbmcgcG9zaXRpb24gW2xuZywgbGF0XVxuICAgICAgICB6b29tOiAxMCAvLyBzdGFydGluZyB6b29tXG4gICAgfSk7XG5cbiAgICB2YXIgbWFya2VyID0gbmV3IG1hcGJveGdsLk1hcmtlcigpXG4gICAgICAgIC5zZXRMbmdMYXQoW2xvbmdpdHVkZSwgbGF0aXR1ZGVdKVxuICAgICAgICAuYWRkVG8obWFwKTtcblxuXG4gICAgJCgnLnRhYjEnKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAkKCcudGFiSW5mbzInKS5oaWRlKCk7XG4gICAgICAgICQoJy50YWJJbmZvMScpLnNob3coKTtcblxuICAgIH0pXG5cbiAgICAkKCcudGFiMicpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcudGFiSW5mbzEnKS5oaWRlKCk7XG4gICAgICAgICQoJy50YWJJbmZvMicpLnNob3coKTtcblxuICAgIH0pXG5cblxuICAgICQoJy50YWInKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgJCgnLnRhYicpLnJlbW92ZUNsYXNzKCdidG4tb3V0bGluZS1wcmltYXJ5Jyk7XG4gICAgICAgICQoJy50YWInKS5yZW1vdmVDbGFzcygnYnRuLXByaW1hcnknKTtcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYnRuLXByaW1hcnknKTtcbiAgICAgICAgJCgnLnRhYicpLm5vdCh0aGlzKS5hZGRDbGFzcygnYnRuLW91dGxpbmUtcHJpbWFyeScpO1xuXG5cbiAgICB9KVxuXG59KVxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICAgICAgICAgIENoYXQgYXBpXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbmxldCBjbGllbnRTZWNyZXQgPSBcIjIwN2JmYzc3NDljMzU4YTQ2ZTA0ODcxMzQzNTFjMTBkZTIzOTE0N2NcIjtcblxuY29uc3QgY3VzdG9tZXJTREsgPSBDdXN0b21lclNESy5pbml0KHtcbiAgICBsaWNlbnNlSWQ6IDEyMzk5NzI2LFxuICAgIGNsaWVudElkOiAnOTYzMzM0M2FjNTNmOWQ4ZGFmMDE3ZDc5ODgzNzI3MjEnLFxuICAgIC8vIHJlZGlyZWN0VXJpOiAnaHR0cDovLzEyNy4wLjAuMTo4MDAwLydcbn0pXG5cblxuXG5cbmN1c3RvbWVyU0RLLm9uKCduZXdfZXZlbnQnLCBuZXdFdmVudCA9PiB7XG4gICAgY29uc29sZS5sb2cobmV3RXZlbnQpO1xufSlcblxuXG5jb25zdCBjaGF0SWQgPSAnT1UwVjBQME9XVCdcbmN1c3RvbWVyU0RLXG4gICAgLnNlbmRFdmVudCh7XG4gICAgICAgIGNoYXRJZCxcbiAgICAgICAgZXZlbnQ6IHtcbiAgICAgICAgICAgIHR5cGU6ICdtZXNzYWdlJyxcbiAgICAgICAgICAgIHRleHQ6ICdIaSEnLFxuICAgICAgICB9LFxuICAgIH0pXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcbiAgICB9KVxuICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgIH0pXG5cblxuXG4vLyAgICBqUXVlcnkoZnVuY3Rpb24oJCl7IC8vIHdhaXQgdW50aWwgdGhlIERPTSBpcyByZWFkeVxuLy8gICAgICAgICQoXCIuanMtZGF0ZXBpY2tlclwiKS5kYXRlcGlja2VyKHtcbi8vICAgICAgICAgICAgY2xlYXJCdG46IHRydWUsXG4vLyAgICAgICAgICAgIGF1dG9jbG9zZTogdHJ1ZVxuXG4vLyAgICAgICAgfSk7XG5cbi8vICAgICAgICAkKCcuanMtZGF0ZXBpY2tlcicpLm9uKCdjaGFuZ2VEYXRlJywgZnVuY3Rpb24oKSB7XG4vLyAgICAgICAgICQoJy5qcy1oaWRkZW4nKS52YWwoXG4vLyAgICAgICAgICAgICAkKCcuanMtZGF0ZXBpY2tlcicpLmRhdGVwaWNrZXIoJ2dldEZvcm1hdHRlZERhdGUnKVxuLy8gICAgICAgICApO1xuLy8gICAgIH0pO1xuLy8gICAgICAgICB9KTsiLCIoZnVuY3Rpb24gKGZhY3RvcnkpIHsgXCJ1c2Ugc3RyaWN0XCI7IGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkgeyBkZWZpbmUoW1wianF1ZXJ5XCJdLCBmYWN0b3J5KSB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzICE9PSBcInVuZGVmaW5lZFwiKSB7IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwianF1ZXJ5XCIpKSB9IGVsc2UgeyBmYWN0b3J5KGpRdWVyeSkgfSB9KShmdW5jdGlvbiAoJCkgeyBcInVzZSBzdHJpY3RcIjsgdmFyIFNsaWNrID0gd2luZG93LlNsaWNrIHx8IHt9OyBTbGljayA9IGZ1bmN0aW9uICgpIHsgdmFyIGluc3RhbmNlVWlkID0gMDsgZnVuY3Rpb24gU2xpY2soZWxlbWVudCwgc2V0dGluZ3MpIHsgdmFyIF8gPSB0aGlzLCBkYXRhU2V0dGluZ3M7IF8uZGVmYXVsdHMgPSB7IGFjY2Vzc2liaWxpdHk6IHRydWUsIGFkYXB0aXZlSGVpZ2h0OiBmYWxzZSwgYXBwZW5kQXJyb3dzOiAkKGVsZW1lbnQpLCBhcHBlbmREb3RzOiAkKGVsZW1lbnQpLCBhcnJvd3M6IHRydWUsIGFzTmF2Rm9yOiBudWxsLCBwcmV2QXJyb3c6ICc8YnV0dG9uIGNsYXNzPVwic2xpY2stcHJldlwiIGFyaWEtbGFiZWw9XCJQcmV2aW91c1wiIHR5cGU9XCJidXR0b25cIj5QcmV2aW91czwvYnV0dG9uPicsIG5leHRBcnJvdzogJzxidXR0b24gY2xhc3M9XCJzbGljay1uZXh0XCIgYXJpYS1sYWJlbD1cIk5leHRcIiB0eXBlPVwiYnV0dG9uXCI+TmV4dDwvYnV0dG9uPicsIGF1dG9wbGF5OiBmYWxzZSwgYXV0b3BsYXlTcGVlZDogM2UzLCBjZW50ZXJNb2RlOiBmYWxzZSwgY2VudGVyUGFkZGluZzogXCI1MHB4XCIsIGNzc0Vhc2U6IFwiZWFzZVwiLCBjdXN0b21QYWdpbmc6IGZ1bmN0aW9uIChzbGlkZXIsIGkpIHsgcmV0dXJuICQoJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIC8+JykudGV4dChpICsgMSkgfSwgZG90czogZmFsc2UsIGRvdHNDbGFzczogXCJzbGljay1kb3RzXCIsIGRyYWdnYWJsZTogdHJ1ZSwgZWFzaW5nOiBcImxpbmVhclwiLCBlZGdlRnJpY3Rpb246IC4zNSwgZmFkZTogZmFsc2UsIGZvY3VzT25TZWxlY3Q6IGZhbHNlLCBmb2N1c09uQ2hhbmdlOiBmYWxzZSwgaW5maW5pdGU6IHRydWUsIGluaXRpYWxTbGlkZTogMCwgbGF6eUxvYWQ6IFwib25kZW1hbmRcIiwgbW9iaWxlRmlyc3Q6IGZhbHNlLCBwYXVzZU9uSG92ZXI6IHRydWUsIHBhdXNlT25Gb2N1czogdHJ1ZSwgcGF1c2VPbkRvdHNIb3ZlcjogZmFsc2UsIHJlc3BvbmRUbzogXCJ3aW5kb3dcIiwgcmVzcG9uc2l2ZTogbnVsbCwgcm93czogMSwgcnRsOiBmYWxzZSwgc2xpZGU6IFwiXCIsIHNsaWRlc1BlclJvdzogMSwgc2xpZGVzVG9TaG93OiAxLCBzbGlkZXNUb1Njcm9sbDogMSwgc3BlZWQ6IDUwMCwgc3dpcGU6IHRydWUsIHN3aXBlVG9TbGlkZTogZmFsc2UsIHRvdWNoTW92ZTogdHJ1ZSwgdG91Y2hUaHJlc2hvbGQ6IDUsIHVzZUNTUzogdHJ1ZSwgdXNlVHJhbnNmb3JtOiB0cnVlLCB2YXJpYWJsZVdpZHRoOiBmYWxzZSwgdmVydGljYWw6IGZhbHNlLCB2ZXJ0aWNhbFN3aXBpbmc6IGZhbHNlLCB3YWl0Rm9yQW5pbWF0ZTogdHJ1ZSwgekluZGV4OiAxZTMgfTsgXy5pbml0aWFscyA9IHsgYW5pbWF0aW5nOiBmYWxzZSwgZHJhZ2dpbmc6IGZhbHNlLCBhdXRvUGxheVRpbWVyOiBudWxsLCBjdXJyZW50RGlyZWN0aW9uOiAwLCBjdXJyZW50TGVmdDogbnVsbCwgY3VycmVudFNsaWRlOiAwLCBkaXJlY3Rpb246IDEsICRkb3RzOiBudWxsLCBsaXN0V2lkdGg6IG51bGwsIGxpc3RIZWlnaHQ6IG51bGwsIGxvYWRJbmRleDogMCwgJG5leHRBcnJvdzogbnVsbCwgJHByZXZBcnJvdzogbnVsbCwgc2Nyb2xsaW5nOiBmYWxzZSwgc2xpZGVDb3VudDogbnVsbCwgc2xpZGVXaWR0aDogbnVsbCwgJHNsaWRlVHJhY2s6IG51bGwsICRzbGlkZXM6IG51bGwsIHNsaWRpbmc6IGZhbHNlLCBzbGlkZU9mZnNldDogMCwgc3dpcGVMZWZ0OiBudWxsLCBzd2lwaW5nOiBmYWxzZSwgJGxpc3Q6IG51bGwsIHRvdWNoT2JqZWN0OiB7fSwgdHJhbnNmb3Jtc0VuYWJsZWQ6IGZhbHNlLCB1bnNsaWNrZWQ6IGZhbHNlIH07ICQuZXh0ZW5kKF8sIF8uaW5pdGlhbHMpOyBfLmFjdGl2ZUJyZWFrcG9pbnQgPSBudWxsOyBfLmFuaW1UeXBlID0gbnVsbDsgXy5hbmltUHJvcCA9IG51bGw7IF8uYnJlYWtwb2ludHMgPSBbXTsgXy5icmVha3BvaW50U2V0dGluZ3MgPSBbXTsgXy5jc3NUcmFuc2l0aW9ucyA9IGZhbHNlOyBfLmZvY3Vzc2VkID0gZmFsc2U7IF8uaW50ZXJydXB0ZWQgPSBmYWxzZTsgXy5oaWRkZW4gPSBcImhpZGRlblwiOyBfLnBhdXNlZCA9IHRydWU7IF8ucG9zaXRpb25Qcm9wID0gbnVsbDsgXy5yZXNwb25kVG8gPSBudWxsOyBfLnJvd0NvdW50ID0gMTsgXy5zaG91bGRDbGljayA9IHRydWU7IF8uJHNsaWRlciA9ICQoZWxlbWVudCk7IF8uJHNsaWRlc0NhY2hlID0gbnVsbDsgXy50cmFuc2Zvcm1UeXBlID0gbnVsbDsgXy50cmFuc2l0aW9uVHlwZSA9IG51bGw7IF8udmlzaWJpbGl0eUNoYW5nZSA9IFwidmlzaWJpbGl0eWNoYW5nZVwiOyBfLndpbmRvd1dpZHRoID0gMDsgXy53aW5kb3dUaW1lciA9IG51bGw7IGRhdGFTZXR0aW5ncyA9ICQoZWxlbWVudCkuZGF0YShcInNsaWNrXCIpIHx8IHt9OyBfLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgXy5kZWZhdWx0cywgc2V0dGluZ3MsIGRhdGFTZXR0aW5ncyk7IF8uY3VycmVudFNsaWRlID0gXy5vcHRpb25zLmluaXRpYWxTbGlkZTsgXy5vcmlnaW5hbFNldHRpbmdzID0gXy5vcHRpb25zOyBpZiAodHlwZW9mIGRvY3VtZW50Lm1vekhpZGRlbiAhPT0gXCJ1bmRlZmluZWRcIikgeyBfLmhpZGRlbiA9IFwibW96SGlkZGVuXCI7IF8udmlzaWJpbGl0eUNoYW5nZSA9IFwibW96dmlzaWJpbGl0eWNoYW5nZVwiIH0gZWxzZSBpZiAodHlwZW9mIGRvY3VtZW50LndlYmtpdEhpZGRlbiAhPT0gXCJ1bmRlZmluZWRcIikgeyBfLmhpZGRlbiA9IFwid2Via2l0SGlkZGVuXCI7IF8udmlzaWJpbGl0eUNoYW5nZSA9IFwid2Via2l0dmlzaWJpbGl0eWNoYW5nZVwiIH0gXy5hdXRvUGxheSA9ICQucHJveHkoXy5hdXRvUGxheSwgXyk7IF8uYXV0b1BsYXlDbGVhciA9ICQucHJveHkoXy5hdXRvUGxheUNsZWFyLCBfKTsgXy5hdXRvUGxheUl0ZXJhdG9yID0gJC5wcm94eShfLmF1dG9QbGF5SXRlcmF0b3IsIF8pOyBfLmNoYW5nZVNsaWRlID0gJC5wcm94eShfLmNoYW5nZVNsaWRlLCBfKTsgXy5jbGlja0hhbmRsZXIgPSAkLnByb3h5KF8uY2xpY2tIYW5kbGVyLCBfKTsgXy5zZWxlY3RIYW5kbGVyID0gJC5wcm94eShfLnNlbGVjdEhhbmRsZXIsIF8pOyBfLnNldFBvc2l0aW9uID0gJC5wcm94eShfLnNldFBvc2l0aW9uLCBfKTsgXy5zd2lwZUhhbmRsZXIgPSAkLnByb3h5KF8uc3dpcGVIYW5kbGVyLCBfKTsgXy5kcmFnSGFuZGxlciA9ICQucHJveHkoXy5kcmFnSGFuZGxlciwgXyk7IF8ua2V5SGFuZGxlciA9ICQucHJveHkoXy5rZXlIYW5kbGVyLCBfKTsgXy5pbnN0YW5jZVVpZCA9IGluc3RhbmNlVWlkKys7IF8uaHRtbEV4cHIgPSAvXig/OlxccyooPFtcXHdcXFddKz4pW14+XSopJC87IF8ucmVnaXN0ZXJCcmVha3BvaW50cygpOyBfLmluaXQodHJ1ZSkgfSByZXR1cm4gU2xpY2sgfSgpOyBTbGljay5wcm90b3R5cGUuYWN0aXZhdGVBREEgPSBmdW5jdGlvbiAoKSB7IHZhciBfID0gdGhpczsgXy4kc2xpZGVUcmFjay5maW5kKFwiLnNsaWNrLWFjdGl2ZVwiKS5hdHRyKHsgXCJhcmlhLWhpZGRlblwiOiBcImZhbHNlXCIgfSkuZmluZChcImEsIGlucHV0LCBidXR0b24sIHNlbGVjdFwiKS5hdHRyKHsgdGFiaW5kZXg6IFwiMFwiIH0pIH07IFNsaWNrLnByb3RvdHlwZS5hZGRTbGlkZSA9IFNsaWNrLnByb3RvdHlwZS5zbGlja0FkZCA9IGZ1bmN0aW9uIChtYXJrdXAsIGluZGV4LCBhZGRCZWZvcmUpIHsgdmFyIF8gPSB0aGlzOyBpZiAodHlwZW9mIGluZGV4ID09PSBcImJvb2xlYW5cIikgeyBhZGRCZWZvcmUgPSBpbmRleDsgaW5kZXggPSBudWxsIH0gZWxzZSBpZiAoaW5kZXggPCAwIHx8IGluZGV4ID49IF8uc2xpZGVDb3VudCkgeyByZXR1cm4gZmFsc2UgfSBfLnVubG9hZCgpOyBpZiAodHlwZW9mIGluZGV4ID09PSBcIm51bWJlclwiKSB7IGlmIChpbmRleCA9PT0gMCAmJiBfLiRzbGlkZXMubGVuZ3RoID09PSAwKSB7ICQobWFya3VwKS5hcHBlbmRUbyhfLiRzbGlkZVRyYWNrKSB9IGVsc2UgaWYgKGFkZEJlZm9yZSkgeyAkKG1hcmt1cCkuaW5zZXJ0QmVmb3JlKF8uJHNsaWRlcy5lcShpbmRleCkpIH0gZWxzZSB7ICQobWFya3VwKS5pbnNlcnRBZnRlcihfLiRzbGlkZXMuZXEoaW5kZXgpKSB9IH0gZWxzZSB7IGlmIChhZGRCZWZvcmUgPT09IHRydWUpIHsgJChtYXJrdXApLnByZXBlbmRUbyhfLiRzbGlkZVRyYWNrKSB9IGVsc2UgeyAkKG1hcmt1cCkuYXBwZW5kVG8oXy4kc2xpZGVUcmFjaykgfSB9IF8uJHNsaWRlcyA9IF8uJHNsaWRlVHJhY2suY2hpbGRyZW4odGhpcy5vcHRpb25zLnNsaWRlKTsgXy4kc2xpZGVUcmFjay5jaGlsZHJlbih0aGlzLm9wdGlvbnMuc2xpZGUpLmRldGFjaCgpOyBfLiRzbGlkZVRyYWNrLmFwcGVuZChfLiRzbGlkZXMpOyBfLiRzbGlkZXMuZWFjaChmdW5jdGlvbiAoaW5kZXgsIGVsZW1lbnQpIHsgJChlbGVtZW50KS5hdHRyKFwiZGF0YS1zbGljay1pbmRleFwiLCBpbmRleCkgfSk7IF8uJHNsaWRlc0NhY2hlID0gXy4kc2xpZGVzOyBfLnJlaW5pdCgpIH07IFNsaWNrLnByb3RvdHlwZS5hbmltYXRlSGVpZ2h0ID0gZnVuY3Rpb24gKCkgeyB2YXIgXyA9IHRoaXM7IGlmIChfLm9wdGlvbnMuc2xpZGVzVG9TaG93ID09PSAxICYmIF8ub3B0aW9ucy5hZGFwdGl2ZUhlaWdodCA9PT0gdHJ1ZSAmJiBfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlKSB7IHZhciB0YXJnZXRIZWlnaHQgPSBfLiRzbGlkZXMuZXEoXy5jdXJyZW50U2xpZGUpLm91dGVySGVpZ2h0KHRydWUpOyBfLiRsaXN0LmFuaW1hdGUoeyBoZWlnaHQ6IHRhcmdldEhlaWdodCB9LCBfLm9wdGlvbnMuc3BlZWQpIH0gfTsgU2xpY2sucHJvdG90eXBlLmFuaW1hdGVTbGlkZSA9IGZ1bmN0aW9uICh0YXJnZXRMZWZ0LCBjYWxsYmFjaykgeyB2YXIgYW5pbVByb3BzID0ge30sIF8gPSB0aGlzOyBfLmFuaW1hdGVIZWlnaHQoKTsgaWYgKF8ub3B0aW9ucy5ydGwgPT09IHRydWUgJiYgXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSkgeyB0YXJnZXRMZWZ0ID0gLXRhcmdldExlZnQgfSBpZiAoXy50cmFuc2Zvcm1zRW5hYmxlZCA9PT0gZmFsc2UpIHsgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gZmFsc2UpIHsgXy4kc2xpZGVUcmFjay5hbmltYXRlKHsgbGVmdDogdGFyZ2V0TGVmdCB9LCBfLm9wdGlvbnMuc3BlZWQsIF8ub3B0aW9ucy5lYXNpbmcsIGNhbGxiYWNrKSB9IGVsc2UgeyBfLiRzbGlkZVRyYWNrLmFuaW1hdGUoeyB0b3A6IHRhcmdldExlZnQgfSwgXy5vcHRpb25zLnNwZWVkLCBfLm9wdGlvbnMuZWFzaW5nLCBjYWxsYmFjaykgfSB9IGVsc2UgeyBpZiAoXy5jc3NUcmFuc2l0aW9ucyA9PT0gZmFsc2UpIHsgaWYgKF8ub3B0aW9ucy5ydGwgPT09IHRydWUpIHsgXy5jdXJyZW50TGVmdCA9IC1fLmN1cnJlbnRMZWZ0IH0gJCh7IGFuaW1TdGFydDogXy5jdXJyZW50TGVmdCB9KS5hbmltYXRlKHsgYW5pbVN0YXJ0OiB0YXJnZXRMZWZ0IH0sIHsgZHVyYXRpb246IF8ub3B0aW9ucy5zcGVlZCwgZWFzaW5nOiBfLm9wdGlvbnMuZWFzaW5nLCBzdGVwOiBmdW5jdGlvbiAobm93KSB7IG5vdyA9IE1hdGguY2VpbChub3cpOyBpZiAoXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSkgeyBhbmltUHJvcHNbXy5hbmltVHlwZV0gPSBcInRyYW5zbGF0ZShcIiArIG5vdyArIFwicHgsIDBweClcIjsgXy4kc2xpZGVUcmFjay5jc3MoYW5pbVByb3BzKSB9IGVsc2UgeyBhbmltUHJvcHNbXy5hbmltVHlwZV0gPSBcInRyYW5zbGF0ZSgwcHgsXCIgKyBub3cgKyBcInB4KVwiOyBfLiRzbGlkZVRyYWNrLmNzcyhhbmltUHJvcHMpIH0gfSwgY29tcGxldGU6IGZ1bmN0aW9uICgpIHsgaWYgKGNhbGxiYWNrKSB7IGNhbGxiYWNrLmNhbGwoKSB9IH0gfSkgfSBlbHNlIHsgXy5hcHBseVRyYW5zaXRpb24oKTsgdGFyZ2V0TGVmdCA9IE1hdGguY2VpbCh0YXJnZXRMZWZ0KTsgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gZmFsc2UpIHsgYW5pbVByb3BzW18uYW5pbVR5cGVdID0gXCJ0cmFuc2xhdGUzZChcIiArIHRhcmdldExlZnQgKyBcInB4LCAwcHgsIDBweClcIiB9IGVsc2UgeyBhbmltUHJvcHNbXy5hbmltVHlwZV0gPSBcInRyYW5zbGF0ZTNkKDBweCxcIiArIHRhcmdldExlZnQgKyBcInB4LCAwcHgpXCIgfSBfLiRzbGlkZVRyYWNrLmNzcyhhbmltUHJvcHMpOyBpZiAoY2FsbGJhY2spIHsgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IF8uZGlzYWJsZVRyYW5zaXRpb24oKTsgY2FsbGJhY2suY2FsbCgpIH0sIF8ub3B0aW9ucy5zcGVlZCkgfSB9IH0gfTsgU2xpY2sucHJvdG90eXBlLmdldE5hdlRhcmdldCA9IGZ1bmN0aW9uICgpIHsgdmFyIF8gPSB0aGlzLCBhc05hdkZvciA9IF8ub3B0aW9ucy5hc05hdkZvcjsgaWYgKGFzTmF2Rm9yICYmIGFzTmF2Rm9yICE9PSBudWxsKSB7IGFzTmF2Rm9yID0gJChhc05hdkZvcikubm90KF8uJHNsaWRlcikgfSByZXR1cm4gYXNOYXZGb3IgfTsgU2xpY2sucHJvdG90eXBlLmFzTmF2Rm9yID0gZnVuY3Rpb24gKGluZGV4KSB7IHZhciBfID0gdGhpcywgYXNOYXZGb3IgPSBfLmdldE5hdlRhcmdldCgpOyBpZiAoYXNOYXZGb3IgIT09IG51bGwgJiYgdHlwZW9mIGFzTmF2Rm9yID09PSBcIm9iamVjdFwiKSB7IGFzTmF2Rm9yLmVhY2goZnVuY3Rpb24gKCkgeyB2YXIgdGFyZ2V0ID0gJCh0aGlzKS5zbGljayhcImdldFNsaWNrXCIpOyBpZiAoIXRhcmdldC51bnNsaWNrZWQpIHsgdGFyZ2V0LnNsaWRlSGFuZGxlcihpbmRleCwgdHJ1ZSkgfSB9KSB9IH07IFNsaWNrLnByb3RvdHlwZS5hcHBseVRyYW5zaXRpb24gPSBmdW5jdGlvbiAoc2xpZGUpIHsgdmFyIF8gPSB0aGlzLCB0cmFuc2l0aW9uID0ge307IGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gZmFsc2UpIHsgdHJhbnNpdGlvbltfLnRyYW5zaXRpb25UeXBlXSA9IF8udHJhbnNmb3JtVHlwZSArIFwiIFwiICsgXy5vcHRpb25zLnNwZWVkICsgXCJtcyBcIiArIF8ub3B0aW9ucy5jc3NFYXNlIH0gZWxzZSB7IHRyYW5zaXRpb25bXy50cmFuc2l0aW9uVHlwZV0gPSBcIm9wYWNpdHkgXCIgKyBfLm9wdGlvbnMuc3BlZWQgKyBcIm1zIFwiICsgXy5vcHRpb25zLmNzc0Vhc2UgfSBpZiAoXy5vcHRpb25zLmZhZGUgPT09IGZhbHNlKSB7IF8uJHNsaWRlVHJhY2suY3NzKHRyYW5zaXRpb24pIH0gZWxzZSB7IF8uJHNsaWRlcy5lcShzbGlkZSkuY3NzKHRyYW5zaXRpb24pIH0gfTsgU2xpY2sucHJvdG90eXBlLmF1dG9QbGF5ID0gZnVuY3Rpb24gKCkgeyB2YXIgXyA9IHRoaXM7IF8uYXV0b1BsYXlDbGVhcigpOyBpZiAoXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykgeyBfLmF1dG9QbGF5VGltZXIgPSBzZXRJbnRlcnZhbChfLmF1dG9QbGF5SXRlcmF0b3IsIF8ub3B0aW9ucy5hdXRvcGxheVNwZWVkKSB9IH07IFNsaWNrLnByb3RvdHlwZS5hdXRvUGxheUNsZWFyID0gZnVuY3Rpb24gKCkgeyB2YXIgXyA9IHRoaXM7IGlmIChfLmF1dG9QbGF5VGltZXIpIHsgY2xlYXJJbnRlcnZhbChfLmF1dG9QbGF5VGltZXIpIH0gfTsgU2xpY2sucHJvdG90eXBlLmF1dG9QbGF5SXRlcmF0b3IgPSBmdW5jdGlvbiAoKSB7IHZhciBfID0gdGhpcywgc2xpZGVUbyA9IF8uY3VycmVudFNsaWRlICsgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsOyBpZiAoIV8ucGF1c2VkICYmICFfLmludGVycnVwdGVkICYmICFfLmZvY3Vzc2VkKSB7IGlmIChfLm9wdGlvbnMuaW5maW5pdGUgPT09IGZhbHNlKSB7IGlmIChfLmRpcmVjdGlvbiA9PT0gMSAmJiBfLmN1cnJlbnRTbGlkZSArIDEgPT09IF8uc2xpZGVDb3VudCAtIDEpIHsgXy5kaXJlY3Rpb24gPSAwIH0gZWxzZSBpZiAoXy5kaXJlY3Rpb24gPT09IDApIHsgc2xpZGVUbyA9IF8uY3VycmVudFNsaWRlIC0gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsOyBpZiAoXy5jdXJyZW50U2xpZGUgLSAxID09PSAwKSB7IF8uZGlyZWN0aW9uID0gMSB9IH0gfSBfLnNsaWRlSGFuZGxlcihzbGlkZVRvKSB9IH07IFNsaWNrLnByb3RvdHlwZS5idWlsZEFycm93cyA9IGZ1bmN0aW9uICgpIHsgdmFyIF8gPSB0aGlzOyBpZiAoXy5vcHRpb25zLmFycm93cyA9PT0gdHJ1ZSkgeyBfLiRwcmV2QXJyb3cgPSAkKF8ub3B0aW9ucy5wcmV2QXJyb3cpLmFkZENsYXNzKFwic2xpY2stYXJyb3dcIik7IF8uJG5leHRBcnJvdyA9ICQoXy5vcHRpb25zLm5leHRBcnJvdykuYWRkQ2xhc3MoXCJzbGljay1hcnJvd1wiKTsgaWYgKF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHsgXy4kcHJldkFycm93LnJlbW92ZUNsYXNzKFwic2xpY2staGlkZGVuXCIpLnJlbW92ZUF0dHIoXCJhcmlhLWhpZGRlbiB0YWJpbmRleFwiKTsgXy4kbmV4dEFycm93LnJlbW92ZUNsYXNzKFwic2xpY2staGlkZGVuXCIpLnJlbW92ZUF0dHIoXCJhcmlhLWhpZGRlbiB0YWJpbmRleFwiKTsgaWYgKF8uaHRtbEV4cHIudGVzdChfLm9wdGlvbnMucHJldkFycm93KSkgeyBfLiRwcmV2QXJyb3cucHJlcGVuZFRvKF8ub3B0aW9ucy5hcHBlbmRBcnJvd3MpIH0gaWYgKF8uaHRtbEV4cHIudGVzdChfLm9wdGlvbnMubmV4dEFycm93KSkgeyBfLiRuZXh0QXJyb3cuYXBwZW5kVG8oXy5vcHRpb25zLmFwcGVuZEFycm93cykgfSBpZiAoXy5vcHRpb25zLmluZmluaXRlICE9PSB0cnVlKSB7IF8uJHByZXZBcnJvdy5hZGRDbGFzcyhcInNsaWNrLWRpc2FibGVkXCIpLmF0dHIoXCJhcmlhLWRpc2FibGVkXCIsIFwidHJ1ZVwiKSB9IH0gZWxzZSB7IF8uJHByZXZBcnJvdy5hZGQoXy4kbmV4dEFycm93KS5hZGRDbGFzcyhcInNsaWNrLWhpZGRlblwiKS5hdHRyKHsgXCJhcmlhLWRpc2FibGVkXCI6IFwidHJ1ZVwiLCB0YWJpbmRleDogXCItMVwiIH0pIH0gfSB9OyBTbGljay5wcm90b3R5cGUuYnVpbGREb3RzID0gZnVuY3Rpb24gKCkgeyB2YXIgXyA9IHRoaXMsIGksIGRvdDsgaWYgKF8ub3B0aW9ucy5kb3RzID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHsgXy4kc2xpZGVyLmFkZENsYXNzKFwic2xpY2stZG90dGVkXCIpOyBkb3QgPSAkKFwiPHVsIC8+XCIpLmFkZENsYXNzKF8ub3B0aW9ucy5kb3RzQ2xhc3MpOyBmb3IgKGkgPSAwOyBpIDw9IF8uZ2V0RG90Q291bnQoKTsgaSArPSAxKSB7IGRvdC5hcHBlbmQoJChcIjxsaSAvPlwiKS5hcHBlbmQoXy5vcHRpb25zLmN1c3RvbVBhZ2luZy5jYWxsKHRoaXMsIF8sIGkpKSkgfSBfLiRkb3RzID0gZG90LmFwcGVuZFRvKF8ub3B0aW9ucy5hcHBlbmREb3RzKTsgXy4kZG90cy5maW5kKFwibGlcIikuZmlyc3QoKS5hZGRDbGFzcyhcInNsaWNrLWFjdGl2ZVwiKSB9IH07IFNsaWNrLnByb3RvdHlwZS5idWlsZE91dCA9IGZ1bmN0aW9uICgpIHsgdmFyIF8gPSB0aGlzOyBfLiRzbGlkZXMgPSBfLiRzbGlkZXIuY2hpbGRyZW4oXy5vcHRpb25zLnNsaWRlICsgXCI6bm90KC5zbGljay1jbG9uZWQpXCIpLmFkZENsYXNzKFwic2xpY2stc2xpZGVcIik7IF8uc2xpZGVDb3VudCA9IF8uJHNsaWRlcy5sZW5ndGg7IF8uJHNsaWRlcy5lYWNoKGZ1bmN0aW9uIChpbmRleCwgZWxlbWVudCkgeyAkKGVsZW1lbnQpLmF0dHIoXCJkYXRhLXNsaWNrLWluZGV4XCIsIGluZGV4KS5kYXRhKFwib3JpZ2luYWxTdHlsaW5nXCIsICQoZWxlbWVudCkuYXR0cihcInN0eWxlXCIpIHx8IFwiXCIpIH0pOyBfLiRzbGlkZXIuYWRkQ2xhc3MoXCJzbGljay1zbGlkZXJcIik7IF8uJHNsaWRlVHJhY2sgPSBfLnNsaWRlQ291bnQgPT09IDAgPyAkKCc8ZGl2IGNsYXNzPVwic2xpY2stdHJhY2tcIi8+JykuYXBwZW5kVG8oXy4kc2xpZGVyKSA6IF8uJHNsaWRlcy53cmFwQWxsKCc8ZGl2IGNsYXNzPVwic2xpY2stdHJhY2tcIi8+JykucGFyZW50KCk7IF8uJGxpc3QgPSBfLiRzbGlkZVRyYWNrLndyYXAoJzxkaXYgY2xhc3M9XCJzbGljay1saXN0XCIvPicpLnBhcmVudCgpOyBfLiRzbGlkZVRyYWNrLmNzcyhcIm9wYWNpdHlcIiwgMCk7IGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSB8fCBfLm9wdGlvbnMuc3dpcGVUb1NsaWRlID09PSB0cnVlKSB7IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCA9IDEgfSAkKFwiaW1nW2RhdGEtbGF6eV1cIiwgXy4kc2xpZGVyKS5ub3QoXCJbc3JjXVwiKS5hZGRDbGFzcyhcInNsaWNrLWxvYWRpbmdcIik7IF8uc2V0dXBJbmZpbml0ZSgpOyBfLmJ1aWxkQXJyb3dzKCk7IF8uYnVpbGREb3RzKCk7IF8udXBkYXRlRG90cygpOyBfLnNldFNsaWRlQ2xhc3Nlcyh0eXBlb2YgXy5jdXJyZW50U2xpZGUgPT09IFwibnVtYmVyXCIgPyBfLmN1cnJlbnRTbGlkZSA6IDApOyBpZiAoXy5vcHRpb25zLmRyYWdnYWJsZSA9PT0gdHJ1ZSkgeyBfLiRsaXN0LmFkZENsYXNzKFwiZHJhZ2dhYmxlXCIpIH0gfTsgU2xpY2sucHJvdG90eXBlLmJ1aWxkUm93cyA9IGZ1bmN0aW9uICgpIHsgdmFyIF8gPSB0aGlzLCBhLCBiLCBjLCBuZXdTbGlkZXMsIG51bU9mU2xpZGVzLCBvcmlnaW5hbFNsaWRlcywgc2xpZGVzUGVyU2VjdGlvbjsgbmV3U2xpZGVzID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpOyBvcmlnaW5hbFNsaWRlcyA9IF8uJHNsaWRlci5jaGlsZHJlbigpOyBpZiAoXy5vcHRpb25zLnJvd3MgPiAwKSB7IHNsaWRlc1BlclNlY3Rpb24gPSBfLm9wdGlvbnMuc2xpZGVzUGVyUm93ICogXy5vcHRpb25zLnJvd3M7IG51bU9mU2xpZGVzID0gTWF0aC5jZWlsKG9yaWdpbmFsU2xpZGVzLmxlbmd0aCAvIHNsaWRlc1BlclNlY3Rpb24pOyBmb3IgKGEgPSAwOyBhIDwgbnVtT2ZTbGlkZXM7IGErKykgeyB2YXIgc2xpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyBmb3IgKGIgPSAwOyBiIDwgXy5vcHRpb25zLnJvd3M7IGIrKykgeyB2YXIgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgZm9yIChjID0gMDsgYyA8IF8ub3B0aW9ucy5zbGlkZXNQZXJSb3c7IGMrKykgeyB2YXIgdGFyZ2V0ID0gYSAqIHNsaWRlc1BlclNlY3Rpb24gKyAoYiAqIF8ub3B0aW9ucy5zbGlkZXNQZXJSb3cgKyBjKTsgaWYgKG9yaWdpbmFsU2xpZGVzLmdldCh0YXJnZXQpKSB7IHJvdy5hcHBlbmRDaGlsZChvcmlnaW5hbFNsaWRlcy5nZXQodGFyZ2V0KSkgfSB9IHNsaWRlLmFwcGVuZENoaWxkKHJvdykgfSBuZXdTbGlkZXMuYXBwZW5kQ2hpbGQoc2xpZGUpIH0gXy4kc2xpZGVyLmVtcHR5KCkuYXBwZW5kKG5ld1NsaWRlcyk7IF8uJHNsaWRlci5jaGlsZHJlbigpLmNoaWxkcmVuKCkuY2hpbGRyZW4oKS5jc3MoeyB3aWR0aDogMTAwIC8gXy5vcHRpb25zLnNsaWRlc1BlclJvdyArIFwiJVwiLCBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiIH0pIH0gfTsgU2xpY2sucHJvdG90eXBlLmNoZWNrUmVzcG9uc2l2ZSA9IGZ1bmN0aW9uIChpbml0aWFsLCBmb3JjZVVwZGF0ZSkgeyB2YXIgXyA9IHRoaXMsIGJyZWFrcG9pbnQsIHRhcmdldEJyZWFrcG9pbnQsIHJlc3BvbmRUb1dpZHRoLCB0cmlnZ2VyQnJlYWtwb2ludCA9IGZhbHNlOyB2YXIgc2xpZGVyV2lkdGggPSBfLiRzbGlkZXIud2lkdGgoKTsgdmFyIHdpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGggfHwgJCh3aW5kb3cpLndpZHRoKCk7IGlmIChfLnJlc3BvbmRUbyA9PT0gXCJ3aW5kb3dcIikgeyByZXNwb25kVG9XaWR0aCA9IHdpbmRvd1dpZHRoIH0gZWxzZSBpZiAoXy5yZXNwb25kVG8gPT09IFwic2xpZGVyXCIpIHsgcmVzcG9uZFRvV2lkdGggPSBzbGlkZXJXaWR0aCB9IGVsc2UgaWYgKF8ucmVzcG9uZFRvID09PSBcIm1pblwiKSB7IHJlc3BvbmRUb1dpZHRoID0gTWF0aC5taW4od2luZG93V2lkdGgsIHNsaWRlcldpZHRoKSB9IGlmIChfLm9wdGlvbnMucmVzcG9uc2l2ZSAmJiBfLm9wdGlvbnMucmVzcG9uc2l2ZS5sZW5ndGggJiYgXy5vcHRpb25zLnJlc3BvbnNpdmUgIT09IG51bGwpIHsgdGFyZ2V0QnJlYWtwb2ludCA9IG51bGw7IGZvciAoYnJlYWtwb2ludCBpbiBfLmJyZWFrcG9pbnRzKSB7IGlmIChfLmJyZWFrcG9pbnRzLmhhc093blByb3BlcnR5KGJyZWFrcG9pbnQpKSB7IGlmIChfLm9yaWdpbmFsU2V0dGluZ3MubW9iaWxlRmlyc3QgPT09IGZhbHNlKSB7IGlmIChyZXNwb25kVG9XaWR0aCA8IF8uYnJlYWtwb2ludHNbYnJlYWtwb2ludF0pIHsgdGFyZ2V0QnJlYWtwb2ludCA9IF8uYnJlYWtwb2ludHNbYnJlYWtwb2ludF0gfSB9IGVsc2UgeyBpZiAocmVzcG9uZFRvV2lkdGggPiBfLmJyZWFrcG9pbnRzW2JyZWFrcG9pbnRdKSB7IHRhcmdldEJyZWFrcG9pbnQgPSBfLmJyZWFrcG9pbnRzW2JyZWFrcG9pbnRdIH0gfSB9IH0gaWYgKHRhcmdldEJyZWFrcG9pbnQgIT09IG51bGwpIHsgaWYgKF8uYWN0aXZlQnJlYWtwb2ludCAhPT0gbnVsbCkgeyBpZiAodGFyZ2V0QnJlYWtwb2ludCAhPT0gXy5hY3RpdmVCcmVha3BvaW50IHx8IGZvcmNlVXBkYXRlKSB7IF8uYWN0aXZlQnJlYWtwb2ludCA9IHRhcmdldEJyZWFrcG9pbnQ7IGlmIChfLmJyZWFrcG9pbnRTZXR0aW5nc1t0YXJnZXRCcmVha3BvaW50XSA9PT0gXCJ1bnNsaWNrXCIpIHsgXy51bnNsaWNrKHRhcmdldEJyZWFrcG9pbnQpIH0gZWxzZSB7IF8ub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBfLm9yaWdpbmFsU2V0dGluZ3MsIF8uYnJlYWtwb2ludFNldHRpbmdzW3RhcmdldEJyZWFrcG9pbnRdKTsgaWYgKGluaXRpYWwgPT09IHRydWUpIHsgXy5jdXJyZW50U2xpZGUgPSBfLm9wdGlvbnMuaW5pdGlhbFNsaWRlIH0gXy5yZWZyZXNoKGluaXRpYWwpIH0gdHJpZ2dlckJyZWFrcG9pbnQgPSB0YXJnZXRCcmVha3BvaW50IH0gfSBlbHNlIHsgXy5hY3RpdmVCcmVha3BvaW50ID0gdGFyZ2V0QnJlYWtwb2ludDsgaWYgKF8uYnJlYWtwb2ludFNldHRpbmdzW3RhcmdldEJyZWFrcG9pbnRdID09PSBcInVuc2xpY2tcIikgeyBfLnVuc2xpY2sodGFyZ2V0QnJlYWtwb2ludCkgfSBlbHNlIHsgXy5vcHRpb25zID0gJC5leHRlbmQoe30sIF8ub3JpZ2luYWxTZXR0aW5ncywgXy5icmVha3BvaW50U2V0dGluZ3NbdGFyZ2V0QnJlYWtwb2ludF0pOyBpZiAoaW5pdGlhbCA9PT0gdHJ1ZSkgeyBfLmN1cnJlbnRTbGlkZSA9IF8ub3B0aW9ucy5pbml0aWFsU2xpZGUgfSBfLnJlZnJlc2goaW5pdGlhbCkgfSB0cmlnZ2VyQnJlYWtwb2ludCA9IHRhcmdldEJyZWFrcG9pbnQgfSB9IGVsc2UgeyBpZiAoXy5hY3RpdmVCcmVha3BvaW50ICE9PSBudWxsKSB7IF8uYWN0aXZlQnJlYWtwb2ludCA9IG51bGw7IF8ub3B0aW9ucyA9IF8ub3JpZ2luYWxTZXR0aW5nczsgaWYgKGluaXRpYWwgPT09IHRydWUpIHsgXy5jdXJyZW50U2xpZGUgPSBfLm9wdGlvbnMuaW5pdGlhbFNsaWRlIH0gXy5yZWZyZXNoKGluaXRpYWwpOyB0cmlnZ2VyQnJlYWtwb2ludCA9IHRhcmdldEJyZWFrcG9pbnQgfSB9IGlmICghaW5pdGlhbCAmJiB0cmlnZ2VyQnJlYWtwb2ludCAhPT0gZmFsc2UpIHsgXy4kc2xpZGVyLnRyaWdnZXIoXCJicmVha3BvaW50XCIsIFtfLCB0cmlnZ2VyQnJlYWtwb2ludF0pIH0gfSB9OyBTbGljay5wcm90b3R5cGUuY2hhbmdlU2xpZGUgPSBmdW5jdGlvbiAoZXZlbnQsIGRvbnRBbmltYXRlKSB7IHZhciBfID0gdGhpcywgJHRhcmdldCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCksIGluZGV4T2Zmc2V0LCBzbGlkZU9mZnNldCwgdW5ldmVuT2Zmc2V0OyBpZiAoJHRhcmdldC5pcyhcImFcIikpIHsgZXZlbnQucHJldmVudERlZmF1bHQoKSB9IGlmICghJHRhcmdldC5pcyhcImxpXCIpKSB7ICR0YXJnZXQgPSAkdGFyZ2V0LmNsb3Nlc3QoXCJsaVwiKSB9IHVuZXZlbk9mZnNldCA9IF8uc2xpZGVDb3VudCAlIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCAhPT0gMDsgaW5kZXhPZmZzZXQgPSB1bmV2ZW5PZmZzZXQgPyAwIDogKF8uc2xpZGVDb3VudCAtIF8uY3VycmVudFNsaWRlKSAlIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDsgc3dpdGNoIChldmVudC5kYXRhLm1lc3NhZ2UpIHsgY2FzZSBcInByZXZpb3VzXCI6IHNsaWRlT2Zmc2V0ID0gaW5kZXhPZmZzZXQgPT09IDAgPyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgOiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC0gaW5kZXhPZmZzZXQ7IGlmIChfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7IF8uc2xpZGVIYW5kbGVyKF8uY3VycmVudFNsaWRlIC0gc2xpZGVPZmZzZXQsIGZhbHNlLCBkb250QW5pbWF0ZSkgfSBicmVhazsgY2FzZSBcIm5leHRcIjogc2xpZGVPZmZzZXQgPSBpbmRleE9mZnNldCA9PT0gMCA/IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCA6IGluZGV4T2Zmc2V0OyBpZiAoXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykgeyBfLnNsaWRlSGFuZGxlcihfLmN1cnJlbnRTbGlkZSArIHNsaWRlT2Zmc2V0LCBmYWxzZSwgZG9udEFuaW1hdGUpIH0gYnJlYWs7IGNhc2UgXCJpbmRleFwiOiB2YXIgaW5kZXggPSBldmVudC5kYXRhLmluZGV4ID09PSAwID8gMCA6IGV2ZW50LmRhdGEuaW5kZXggfHwgJHRhcmdldC5pbmRleCgpICogXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsOyBfLnNsaWRlSGFuZGxlcihfLmNoZWNrTmF2aWdhYmxlKGluZGV4KSwgZmFsc2UsIGRvbnRBbmltYXRlKTsgJHRhcmdldC5jaGlsZHJlbigpLnRyaWdnZXIoXCJmb2N1c1wiKTsgYnJlYWs7IGRlZmF1bHQ6IHJldHVybiB9IH07IFNsaWNrLnByb3RvdHlwZS5jaGVja05hdmlnYWJsZSA9IGZ1bmN0aW9uIChpbmRleCkgeyB2YXIgXyA9IHRoaXMsIG5hdmlnYWJsZXMsIHByZXZOYXZpZ2FibGU7IG5hdmlnYWJsZXMgPSBfLmdldE5hdmlnYWJsZUluZGV4ZXMoKTsgcHJldk5hdmlnYWJsZSA9IDA7IGlmIChpbmRleCA+IG5hdmlnYWJsZXNbbmF2aWdhYmxlcy5sZW5ndGggLSAxXSkgeyBpbmRleCA9IG5hdmlnYWJsZXNbbmF2aWdhYmxlcy5sZW5ndGggLSAxXSB9IGVsc2UgeyBmb3IgKHZhciBuIGluIG5hdmlnYWJsZXMpIHsgaWYgKGluZGV4IDwgbmF2aWdhYmxlc1tuXSkgeyBpbmRleCA9IHByZXZOYXZpZ2FibGU7IGJyZWFrIH0gcHJldk5hdmlnYWJsZSA9IG5hdmlnYWJsZXNbbl0gfSB9IHJldHVybiBpbmRleCB9OyBTbGljay5wcm90b3R5cGUuY2xlYW5VcEV2ZW50cyA9IGZ1bmN0aW9uICgpIHsgdmFyIF8gPSB0aGlzOyBpZiAoXy5vcHRpb25zLmRvdHMgJiYgXy4kZG90cyAhPT0gbnVsbCkgeyAkKFwibGlcIiwgXy4kZG90cykub2ZmKFwiY2xpY2suc2xpY2tcIiwgXy5jaGFuZ2VTbGlkZSkub2ZmKFwibW91c2VlbnRlci5zbGlja1wiLCAkLnByb3h5KF8uaW50ZXJydXB0LCBfLCB0cnVlKSkub2ZmKFwibW91c2VsZWF2ZS5zbGlja1wiLCAkLnByb3h5KF8uaW50ZXJydXB0LCBfLCBmYWxzZSkpOyBpZiAoXy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHsgXy4kZG90cy5vZmYoXCJrZXlkb3duLnNsaWNrXCIsIF8ua2V5SGFuZGxlcikgfSB9IF8uJHNsaWRlci5vZmYoXCJmb2N1cy5zbGljayBibHVyLnNsaWNrXCIpOyBpZiAoXy5vcHRpb25zLmFycm93cyA9PT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7IF8uJHByZXZBcnJvdyAmJiBfLiRwcmV2QXJyb3cub2ZmKFwiY2xpY2suc2xpY2tcIiwgXy5jaGFuZ2VTbGlkZSk7IF8uJG5leHRBcnJvdyAmJiBfLiRuZXh0QXJyb3cub2ZmKFwiY2xpY2suc2xpY2tcIiwgXy5jaGFuZ2VTbGlkZSk7IGlmIChfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkgeyBfLiRwcmV2QXJyb3cgJiYgXy4kcHJldkFycm93Lm9mZihcImtleWRvd24uc2xpY2tcIiwgXy5rZXlIYW5kbGVyKTsgXy4kbmV4dEFycm93ICYmIF8uJG5leHRBcnJvdy5vZmYoXCJrZXlkb3duLnNsaWNrXCIsIF8ua2V5SGFuZGxlcikgfSB9IF8uJGxpc3Qub2ZmKFwidG91Y2hzdGFydC5zbGljayBtb3VzZWRvd24uc2xpY2tcIiwgXy5zd2lwZUhhbmRsZXIpOyBfLiRsaXN0Lm9mZihcInRvdWNobW92ZS5zbGljayBtb3VzZW1vdmUuc2xpY2tcIiwgXy5zd2lwZUhhbmRsZXIpOyBfLiRsaXN0Lm9mZihcInRvdWNoZW5kLnNsaWNrIG1vdXNldXAuc2xpY2tcIiwgXy5zd2lwZUhhbmRsZXIpOyBfLiRsaXN0Lm9mZihcInRvdWNoY2FuY2VsLnNsaWNrIG1vdXNlbGVhdmUuc2xpY2tcIiwgXy5zd2lwZUhhbmRsZXIpOyBfLiRsaXN0Lm9mZihcImNsaWNrLnNsaWNrXCIsIF8uY2xpY2tIYW5kbGVyKTsgJChkb2N1bWVudCkub2ZmKF8udmlzaWJpbGl0eUNoYW5nZSwgXy52aXNpYmlsaXR5KTsgXy5jbGVhblVwU2xpZGVFdmVudHMoKTsgaWYgKF8ub3B0aW9ucy5hY2Nlc3NpYmlsaXR5ID09PSB0cnVlKSB7IF8uJGxpc3Qub2ZmKFwia2V5ZG93bi5zbGlja1wiLCBfLmtleUhhbmRsZXIpIH0gaWYgKF8ub3B0aW9ucy5mb2N1c09uU2VsZWN0ID09PSB0cnVlKSB7ICQoXy4kc2xpZGVUcmFjaykuY2hpbGRyZW4oKS5vZmYoXCJjbGljay5zbGlja1wiLCBfLnNlbGVjdEhhbmRsZXIpIH0gJCh3aW5kb3cpLm9mZihcIm9yaWVudGF0aW9uY2hhbmdlLnNsaWNrLnNsaWNrLVwiICsgXy5pbnN0YW5jZVVpZCwgXy5vcmllbnRhdGlvbkNoYW5nZSk7ICQod2luZG93KS5vZmYoXCJyZXNpemUuc2xpY2suc2xpY2stXCIgKyBfLmluc3RhbmNlVWlkLCBfLnJlc2l6ZSk7ICQoXCJbZHJhZ2dhYmxlIT10cnVlXVwiLCBfLiRzbGlkZVRyYWNrKS5vZmYoXCJkcmFnc3RhcnRcIiwgXy5wcmV2ZW50RGVmYXVsdCk7ICQod2luZG93KS5vZmYoXCJsb2FkLnNsaWNrLnNsaWNrLVwiICsgXy5pbnN0YW5jZVVpZCwgXy5zZXRQb3NpdGlvbikgfTsgU2xpY2sucHJvdG90eXBlLmNsZWFuVXBTbGlkZUV2ZW50cyA9IGZ1bmN0aW9uICgpIHsgdmFyIF8gPSB0aGlzOyBfLiRsaXN0Lm9mZihcIm1vdXNlZW50ZXIuc2xpY2tcIiwgJC5wcm94eShfLmludGVycnVwdCwgXywgdHJ1ZSkpOyBfLiRsaXN0Lm9mZihcIm1vdXNlbGVhdmUuc2xpY2tcIiwgJC5wcm94eShfLmludGVycnVwdCwgXywgZmFsc2UpKSB9OyBTbGljay5wcm90b3R5cGUuY2xlYW5VcFJvd3MgPSBmdW5jdGlvbiAoKSB7IHZhciBfID0gdGhpcywgb3JpZ2luYWxTbGlkZXM7IGlmIChfLm9wdGlvbnMucm93cyA+IDApIHsgb3JpZ2luYWxTbGlkZXMgPSBfLiRzbGlkZXMuY2hpbGRyZW4oKS5jaGlsZHJlbigpOyBvcmlnaW5hbFNsaWRlcy5yZW1vdmVBdHRyKFwic3R5bGVcIik7IF8uJHNsaWRlci5lbXB0eSgpLmFwcGVuZChvcmlnaW5hbFNsaWRlcykgfSB9OyBTbGljay5wcm90b3R5cGUuY2xpY2tIYW5kbGVyID0gZnVuY3Rpb24gKGV2ZW50KSB7IHZhciBfID0gdGhpczsgaWYgKF8uc2hvdWxkQ2xpY2sgPT09IGZhbHNlKSB7IGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpOyBldmVudC5zdG9wUHJvcGFnYXRpb24oKTsgZXZlbnQucHJldmVudERlZmF1bHQoKSB9IH07IFNsaWNrLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKHJlZnJlc2gpIHsgdmFyIF8gPSB0aGlzOyBfLmF1dG9QbGF5Q2xlYXIoKTsgXy50b3VjaE9iamVjdCA9IHt9OyBfLmNsZWFuVXBFdmVudHMoKTsgJChcIi5zbGljay1jbG9uZWRcIiwgXy4kc2xpZGVyKS5kZXRhY2goKTsgaWYgKF8uJGRvdHMpIHsgXy4kZG90cy5yZW1vdmUoKSB9IGlmIChfLiRwcmV2QXJyb3cgJiYgXy4kcHJldkFycm93Lmxlbmd0aCkgeyBfLiRwcmV2QXJyb3cucmVtb3ZlQ2xhc3MoXCJzbGljay1kaXNhYmxlZCBzbGljay1hcnJvdyBzbGljay1oaWRkZW5cIikucmVtb3ZlQXR0cihcImFyaWEtaGlkZGVuIGFyaWEtZGlzYWJsZWQgdGFiaW5kZXhcIikuY3NzKFwiZGlzcGxheVwiLCBcIlwiKTsgaWYgKF8uaHRtbEV4cHIudGVzdChfLm9wdGlvbnMucHJldkFycm93KSkgeyBfLiRwcmV2QXJyb3cucmVtb3ZlKCkgfSB9IGlmIChfLiRuZXh0QXJyb3cgJiYgXy4kbmV4dEFycm93Lmxlbmd0aCkgeyBfLiRuZXh0QXJyb3cucmVtb3ZlQ2xhc3MoXCJzbGljay1kaXNhYmxlZCBzbGljay1hcnJvdyBzbGljay1oaWRkZW5cIikucmVtb3ZlQXR0cihcImFyaWEtaGlkZGVuIGFyaWEtZGlzYWJsZWQgdGFiaW5kZXhcIikuY3NzKFwiZGlzcGxheVwiLCBcIlwiKTsgaWYgKF8uaHRtbEV4cHIudGVzdChfLm9wdGlvbnMubmV4dEFycm93KSkgeyBfLiRuZXh0QXJyb3cucmVtb3ZlKCkgfSB9IGlmIChfLiRzbGlkZXMpIHsgXy4kc2xpZGVzLnJlbW92ZUNsYXNzKFwic2xpY2stc2xpZGUgc2xpY2stYWN0aXZlIHNsaWNrLWNlbnRlciBzbGljay12aXNpYmxlIHNsaWNrLWN1cnJlbnRcIikucmVtb3ZlQXR0cihcImFyaWEtaGlkZGVuXCIpLnJlbW92ZUF0dHIoXCJkYXRhLXNsaWNrLWluZGV4XCIpLmVhY2goZnVuY3Rpb24gKCkgeyAkKHRoaXMpLmF0dHIoXCJzdHlsZVwiLCAkKHRoaXMpLmRhdGEoXCJvcmlnaW5hbFN0eWxpbmdcIikpIH0pOyBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5zbGlkZSkuZGV0YWNoKCk7IF8uJHNsaWRlVHJhY2suZGV0YWNoKCk7IF8uJGxpc3QuZGV0YWNoKCk7IF8uJHNsaWRlci5hcHBlbmQoXy4kc2xpZGVzKSB9IF8uY2xlYW5VcFJvd3MoKTsgXy4kc2xpZGVyLnJlbW92ZUNsYXNzKFwic2xpY2stc2xpZGVyXCIpOyBfLiRzbGlkZXIucmVtb3ZlQ2xhc3MoXCJzbGljay1pbml0aWFsaXplZFwiKTsgXy4kc2xpZGVyLnJlbW92ZUNsYXNzKFwic2xpY2stZG90dGVkXCIpOyBfLnVuc2xpY2tlZCA9IHRydWU7IGlmICghcmVmcmVzaCkgeyBfLiRzbGlkZXIudHJpZ2dlcihcImRlc3Ryb3lcIiwgW19dKSB9IH07IFNsaWNrLnByb3RvdHlwZS5kaXNhYmxlVHJhbnNpdGlvbiA9IGZ1bmN0aW9uIChzbGlkZSkgeyB2YXIgXyA9IHRoaXMsIHRyYW5zaXRpb24gPSB7fTsgdHJhbnNpdGlvbltfLnRyYW5zaXRpb25UeXBlXSA9IFwiXCI7IGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gZmFsc2UpIHsgXy4kc2xpZGVUcmFjay5jc3ModHJhbnNpdGlvbikgfSBlbHNlIHsgXy4kc2xpZGVzLmVxKHNsaWRlKS5jc3ModHJhbnNpdGlvbikgfSB9OyBTbGljay5wcm90b3R5cGUuZmFkZVNsaWRlID0gZnVuY3Rpb24gKHNsaWRlSW5kZXgsIGNhbGxiYWNrKSB7IHZhciBfID0gdGhpczsgaWYgKF8uY3NzVHJhbnNpdGlvbnMgPT09IGZhbHNlKSB7IF8uJHNsaWRlcy5lcShzbGlkZUluZGV4KS5jc3MoeyB6SW5kZXg6IF8ub3B0aW9ucy56SW5kZXggfSk7IF8uJHNsaWRlcy5lcShzbGlkZUluZGV4KS5hbmltYXRlKHsgb3BhY2l0eTogMSB9LCBfLm9wdGlvbnMuc3BlZWQsIF8ub3B0aW9ucy5lYXNpbmcsIGNhbGxiYWNrKSB9IGVsc2UgeyBfLmFwcGx5VHJhbnNpdGlvbihzbGlkZUluZGV4KTsgXy4kc2xpZGVzLmVxKHNsaWRlSW5kZXgpLmNzcyh7IG9wYWNpdHk6IDEsIHpJbmRleDogXy5vcHRpb25zLnpJbmRleCB9KTsgaWYgKGNhbGxiYWNrKSB7IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyBfLmRpc2FibGVUcmFuc2l0aW9uKHNsaWRlSW5kZXgpOyBjYWxsYmFjay5jYWxsKCkgfSwgXy5vcHRpb25zLnNwZWVkKSB9IH0gfTsgU2xpY2sucHJvdG90eXBlLmZhZGVTbGlkZU91dCA9IGZ1bmN0aW9uIChzbGlkZUluZGV4KSB7IHZhciBfID0gdGhpczsgaWYgKF8uY3NzVHJhbnNpdGlvbnMgPT09IGZhbHNlKSB7IF8uJHNsaWRlcy5lcShzbGlkZUluZGV4KS5hbmltYXRlKHsgb3BhY2l0eTogMCwgekluZGV4OiBfLm9wdGlvbnMuekluZGV4IC0gMiB9LCBfLm9wdGlvbnMuc3BlZWQsIF8ub3B0aW9ucy5lYXNpbmcpIH0gZWxzZSB7IF8uYXBwbHlUcmFuc2l0aW9uKHNsaWRlSW5kZXgpOyBfLiRzbGlkZXMuZXEoc2xpZGVJbmRleCkuY3NzKHsgb3BhY2l0eTogMCwgekluZGV4OiBfLm9wdGlvbnMuekluZGV4IC0gMiB9KSB9IH07IFNsaWNrLnByb3RvdHlwZS5maWx0ZXJTbGlkZXMgPSBTbGljay5wcm90b3R5cGUuc2xpY2tGaWx0ZXIgPSBmdW5jdGlvbiAoZmlsdGVyKSB7IHZhciBfID0gdGhpczsgaWYgKGZpbHRlciAhPT0gbnVsbCkgeyBfLiRzbGlkZXNDYWNoZSA9IF8uJHNsaWRlczsgXy51bmxvYWQoKTsgXy4kc2xpZGVUcmFjay5jaGlsZHJlbih0aGlzLm9wdGlvbnMuc2xpZGUpLmRldGFjaCgpOyBfLiRzbGlkZXNDYWNoZS5maWx0ZXIoZmlsdGVyKS5hcHBlbmRUbyhfLiRzbGlkZVRyYWNrKTsgXy5yZWluaXQoKSB9IH07IFNsaWNrLnByb3RvdHlwZS5mb2N1c0hhbmRsZXIgPSBmdW5jdGlvbiAoKSB7IHZhciBfID0gdGhpczsgXy4kc2xpZGVyLm9mZihcImZvY3VzLnNsaWNrIGJsdXIuc2xpY2tcIikub24oXCJmb2N1cy5zbGlja1wiLCBcIipcIiwgZnVuY3Rpb24gKGV2ZW50KSB7IHZhciAkc2YgPSAkKHRoaXMpOyBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgaWYgKF8ub3B0aW9ucy5wYXVzZU9uRm9jdXMpIHsgaWYgKCRzZi5pcyhcIjpmb2N1c1wiKSkgeyBfLmZvY3Vzc2VkID0gdHJ1ZTsgXy5hdXRvUGxheSgpIH0gfSB9LCAwKSB9KS5vbihcImJsdXIuc2xpY2tcIiwgXCIqXCIsIGZ1bmN0aW9uIChldmVudCkgeyB2YXIgJHNmID0gJCh0aGlzKTsgaWYgKF8ub3B0aW9ucy5wYXVzZU9uRm9jdXMpIHsgXy5mb2N1c3NlZCA9IGZhbHNlOyBfLmF1dG9QbGF5KCkgfSB9KSB9OyBTbGljay5wcm90b3R5cGUuZ2V0Q3VycmVudCA9IFNsaWNrLnByb3RvdHlwZS5zbGlja0N1cnJlbnRTbGlkZSA9IGZ1bmN0aW9uICgpIHsgdmFyIF8gPSB0aGlzOyByZXR1cm4gXy5jdXJyZW50U2xpZGUgfTsgU2xpY2sucHJvdG90eXBlLmdldERvdENvdW50ID0gZnVuY3Rpb24gKCkgeyB2YXIgXyA9IHRoaXM7IHZhciBicmVha1BvaW50ID0gMDsgdmFyIGNvdW50ZXIgPSAwOyB2YXIgcGFnZXJRdHkgPSAwOyBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSB0cnVlKSB7IGlmIChfLnNsaWRlQ291bnQgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykgeyArK3BhZ2VyUXR5IH0gZWxzZSB7IHdoaWxlIChicmVha1BvaW50IDwgXy5zbGlkZUNvdW50KSB7ICsrcGFnZXJRdHk7IGJyZWFrUG9pbnQgPSBjb3VudGVyICsgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsOyBjb3VudGVyICs9IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ID8gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsIDogXy5vcHRpb25zLnNsaWRlc1RvU2hvdyB9IH0gfSBlbHNlIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSkgeyBwYWdlclF0eSA9IF8uc2xpZGVDb3VudCB9IGVsc2UgaWYgKCFfLm9wdGlvbnMuYXNOYXZGb3IpIHsgcGFnZXJRdHkgPSAxICsgTWF0aC5jZWlsKChfLnNsaWRlQ291bnQgLSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSAvIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCkgfSBlbHNlIHsgd2hpbGUgKGJyZWFrUG9pbnQgPCBfLnNsaWRlQ291bnQpIHsgKytwYWdlclF0eTsgYnJlYWtQb2ludCA9IGNvdW50ZXIgKyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7IGNvdW50ZXIgKz0gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsIDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgPyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgOiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93IH0gfSByZXR1cm4gcGFnZXJRdHkgLSAxIH07IFNsaWNrLnByb3RvdHlwZS5nZXRMZWZ0ID0gZnVuY3Rpb24gKHNsaWRlSW5kZXgpIHsgdmFyIF8gPSB0aGlzLCB0YXJnZXRMZWZ0LCB2ZXJ0aWNhbEhlaWdodCwgdmVydGljYWxPZmZzZXQgPSAwLCB0YXJnZXRTbGlkZSwgY29lZjsgXy5zbGlkZU9mZnNldCA9IDA7IHZlcnRpY2FsSGVpZ2h0ID0gXy4kc2xpZGVzLmZpcnN0KCkub3V0ZXJIZWlnaHQodHJ1ZSk7IGlmIChfLm9wdGlvbnMuaW5maW5pdGUgPT09IHRydWUpIHsgaWYgKF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHsgXy5zbGlkZU9mZnNldCA9IF8uc2xpZGVXaWR0aCAqIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKiAtMTsgY29lZiA9IC0xOyBpZiAoXy5vcHRpb25zLnZlcnRpY2FsID09PSB0cnVlICYmIF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7IGlmIChfLm9wdGlvbnMuc2xpZGVzVG9TaG93ID09PSAyKSB7IGNvZWYgPSAtMS41IH0gZWxzZSBpZiAoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyA9PT0gMSkgeyBjb2VmID0gLTIgfSB9IHZlcnRpY2FsT2Zmc2V0ID0gdmVydGljYWxIZWlnaHQgKiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICogY29lZiB9IGlmIChfLnNsaWRlQ291bnQgJSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgIT09IDApIHsgaWYgKHNsaWRlSW5kZXggKyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgPiBfLnNsaWRlQ291bnQgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykgeyBpZiAoc2xpZGVJbmRleCA+IF8uc2xpZGVDb3VudCkgeyBfLnNsaWRlT2Zmc2V0ID0gKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLSAoc2xpZGVJbmRleCAtIF8uc2xpZGVDb3VudCkpICogXy5zbGlkZVdpZHRoICogLTE7IHZlcnRpY2FsT2Zmc2V0ID0gKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLSAoc2xpZGVJbmRleCAtIF8uc2xpZGVDb3VudCkpICogdmVydGljYWxIZWlnaHQgKiAtMSB9IGVsc2UgeyBfLnNsaWRlT2Zmc2V0ID0gXy5zbGlkZUNvdW50ICUgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsICogXy5zbGlkZVdpZHRoICogLTE7IHZlcnRpY2FsT2Zmc2V0ID0gXy5zbGlkZUNvdW50ICUgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsICogdmVydGljYWxIZWlnaHQgKiAtMSB9IH0gfSB9IGVsc2UgeyBpZiAoc2xpZGVJbmRleCArIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgPiBfLnNsaWRlQ291bnQpIHsgXy5zbGlkZU9mZnNldCA9IChzbGlkZUluZGV4ICsgXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAtIF8uc2xpZGVDb3VudCkgKiBfLnNsaWRlV2lkdGg7IHZlcnRpY2FsT2Zmc2V0ID0gKHNsaWRlSW5kZXggKyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC0gXy5zbGlkZUNvdW50KSAqIHZlcnRpY2FsSGVpZ2h0IH0gfSBpZiAoXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHsgXy5zbGlkZU9mZnNldCA9IDA7IHZlcnRpY2FsT2Zmc2V0ID0gMCB9IGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykgeyBfLnNsaWRlT2Zmc2V0ID0gXy5zbGlkZVdpZHRoICogTWF0aC5mbG9vcihfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSAvIDIgLSBfLnNsaWRlV2lkdGggKiBfLnNsaWRlQ291bnQgLyAyIH0gZWxzZSBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUgJiYgXy5vcHRpb25zLmluZmluaXRlID09PSB0cnVlKSB7IF8uc2xpZGVPZmZzZXQgKz0gXy5zbGlkZVdpZHRoICogTWF0aC5mbG9vcihfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC8gMikgLSBfLnNsaWRlV2lkdGggfSBlbHNlIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSkgeyBfLnNsaWRlT2Zmc2V0ID0gMDsgXy5zbGlkZU9mZnNldCArPSBfLnNsaWRlV2lkdGggKiBNYXRoLmZsb29yKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLyAyKSB9IGlmIChfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlKSB7IHRhcmdldExlZnQgPSBzbGlkZUluZGV4ICogXy5zbGlkZVdpZHRoICogLTEgKyBfLnNsaWRlT2Zmc2V0IH0gZWxzZSB7IHRhcmdldExlZnQgPSBzbGlkZUluZGV4ICogdmVydGljYWxIZWlnaHQgKiAtMSArIHZlcnRpY2FsT2Zmc2V0IH0gaWYgKF8ub3B0aW9ucy52YXJpYWJsZVdpZHRoID09PSB0cnVlKSB7IGlmIChfLnNsaWRlQ291bnQgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyB8fCBfLm9wdGlvbnMuaW5maW5pdGUgPT09IGZhbHNlKSB7IHRhcmdldFNsaWRlID0gXy4kc2xpZGVUcmFjay5jaGlsZHJlbihcIi5zbGljay1zbGlkZVwiKS5lcShzbGlkZUluZGV4KSB9IGVsc2UgeyB0YXJnZXRTbGlkZSA9IF8uJHNsaWRlVHJhY2suY2hpbGRyZW4oXCIuc2xpY2stc2xpZGVcIikuZXEoc2xpZGVJbmRleCArIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIH0gaWYgKF8ub3B0aW9ucy5ydGwgPT09IHRydWUpIHsgaWYgKHRhcmdldFNsaWRlWzBdKSB7IHRhcmdldExlZnQgPSAoXy4kc2xpZGVUcmFjay53aWR0aCgpIC0gdGFyZ2V0U2xpZGVbMF0ub2Zmc2V0TGVmdCAtIHRhcmdldFNsaWRlLndpZHRoKCkpICogLTEgfSBlbHNlIHsgdGFyZ2V0TGVmdCA9IDAgfSB9IGVsc2UgeyB0YXJnZXRMZWZ0ID0gdGFyZ2V0U2xpZGVbMF0gPyB0YXJnZXRTbGlkZVswXS5vZmZzZXRMZWZ0ICogLTEgOiAwIH0gaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7IGlmIChfLnNsaWRlQ291bnQgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyB8fCBfLm9wdGlvbnMuaW5maW5pdGUgPT09IGZhbHNlKSB7IHRhcmdldFNsaWRlID0gXy4kc2xpZGVUcmFjay5jaGlsZHJlbihcIi5zbGljay1zbGlkZVwiKS5lcShzbGlkZUluZGV4KSB9IGVsc2UgeyB0YXJnZXRTbGlkZSA9IF8uJHNsaWRlVHJhY2suY2hpbGRyZW4oXCIuc2xpY2stc2xpZGVcIikuZXEoc2xpZGVJbmRleCArIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKyAxKSB9IGlmIChfLm9wdGlvbnMucnRsID09PSB0cnVlKSB7IGlmICh0YXJnZXRTbGlkZVswXSkgeyB0YXJnZXRMZWZ0ID0gKF8uJHNsaWRlVHJhY2sud2lkdGgoKSAtIHRhcmdldFNsaWRlWzBdLm9mZnNldExlZnQgLSB0YXJnZXRTbGlkZS53aWR0aCgpKSAqIC0xIH0gZWxzZSB7IHRhcmdldExlZnQgPSAwIH0gfSBlbHNlIHsgdGFyZ2V0TGVmdCA9IHRhcmdldFNsaWRlWzBdID8gdGFyZ2V0U2xpZGVbMF0ub2Zmc2V0TGVmdCAqIC0xIDogMCB9IHRhcmdldExlZnQgKz0gKF8uJGxpc3Qud2lkdGgoKSAtIHRhcmdldFNsaWRlLm91dGVyV2lkdGgoKSkgLyAyIH0gfSByZXR1cm4gdGFyZ2V0TGVmdCB9OyBTbGljay5wcm90b3R5cGUuZ2V0T3B0aW9uID0gU2xpY2sucHJvdG90eXBlLnNsaWNrR2V0T3B0aW9uID0gZnVuY3Rpb24gKG9wdGlvbikgeyB2YXIgXyA9IHRoaXM7IHJldHVybiBfLm9wdGlvbnNbb3B0aW9uXSB9OyBTbGljay5wcm90b3R5cGUuZ2V0TmF2aWdhYmxlSW5kZXhlcyA9IGZ1bmN0aW9uICgpIHsgdmFyIF8gPSB0aGlzLCBicmVha1BvaW50ID0gMCwgY291bnRlciA9IDAsIGluZGV4ZXMgPSBbXSwgbWF4OyBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSBmYWxzZSkgeyBtYXggPSBfLnNsaWRlQ291bnQgfSBlbHNlIHsgYnJlYWtQb2ludCA9IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCAqIC0xOyBjb3VudGVyID0gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsICogLTE7IG1heCA9IF8uc2xpZGVDb3VudCAqIDIgfSB3aGlsZSAoYnJlYWtQb2ludCA8IG1heCkgeyBpbmRleGVzLnB1c2goYnJlYWtQb2ludCk7IGJyZWFrUG9pbnQgPSBjb3VudGVyICsgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsOyBjb3VudGVyICs9IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ID8gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsIDogXy5vcHRpb25zLnNsaWRlc1RvU2hvdyB9IHJldHVybiBpbmRleGVzIH07IFNsaWNrLnByb3RvdHlwZS5nZXRTbGljayA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMgfTsgU2xpY2sucHJvdG90eXBlLmdldFNsaWRlQ291bnQgPSBmdW5jdGlvbiAoKSB7IHZhciBfID0gdGhpcywgc2xpZGVzVHJhdmVyc2VkLCBzd2lwZWRTbGlkZSwgc3dpcGVUYXJnZXQsIGNlbnRlck9mZnNldDsgY2VudGVyT2Zmc2V0ID0gXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUgPyBNYXRoLmZsb29yKF8uJGxpc3Qud2lkdGgoKSAvIDIpIDogMDsgc3dpcGVUYXJnZXQgPSBfLnN3aXBlTGVmdCAqIC0xICsgY2VudGVyT2Zmc2V0OyBpZiAoXy5vcHRpb25zLnN3aXBlVG9TbGlkZSA9PT0gdHJ1ZSkgeyBfLiRzbGlkZVRyYWNrLmZpbmQoXCIuc2xpY2stc2xpZGVcIikuZWFjaChmdW5jdGlvbiAoaW5kZXgsIHNsaWRlKSB7IHZhciBzbGlkZU91dGVyV2lkdGgsIHNsaWRlT2Zmc2V0LCBzbGlkZVJpZ2h0Qm91bmRhcnk7IHNsaWRlT3V0ZXJXaWR0aCA9ICQoc2xpZGUpLm91dGVyV2lkdGgoKTsgc2xpZGVPZmZzZXQgPSBzbGlkZS5vZmZzZXRMZWZ0OyBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgIT09IHRydWUpIHsgc2xpZGVPZmZzZXQgKz0gc2xpZGVPdXRlcldpZHRoIC8gMiB9IHNsaWRlUmlnaHRCb3VuZGFyeSA9IHNsaWRlT2Zmc2V0ICsgc2xpZGVPdXRlcldpZHRoOyBpZiAoc3dpcGVUYXJnZXQgPCBzbGlkZVJpZ2h0Qm91bmRhcnkpIHsgc3dpcGVkU2xpZGUgPSBzbGlkZTsgcmV0dXJuIGZhbHNlIH0gfSk7IHNsaWRlc1RyYXZlcnNlZCA9IE1hdGguYWJzKCQoc3dpcGVkU2xpZGUpLmF0dHIoXCJkYXRhLXNsaWNrLWluZGV4XCIpIC0gXy5jdXJyZW50U2xpZGUpIHx8IDE7IHJldHVybiBzbGlkZXNUcmF2ZXJzZWQgfSBlbHNlIHsgcmV0dXJuIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCB9IH07IFNsaWNrLnByb3RvdHlwZS5nb1RvID0gU2xpY2sucHJvdG90eXBlLnNsaWNrR29UbyA9IGZ1bmN0aW9uIChzbGlkZSwgZG9udEFuaW1hdGUpIHsgdmFyIF8gPSB0aGlzOyBfLmNoYW5nZVNsaWRlKHsgZGF0YTogeyBtZXNzYWdlOiBcImluZGV4XCIsIGluZGV4OiBwYXJzZUludChzbGlkZSkgfSB9LCBkb250QW5pbWF0ZSkgfTsgU2xpY2sucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoY3JlYXRpb24pIHsgdmFyIF8gPSB0aGlzOyBpZiAoISQoXy4kc2xpZGVyKS5oYXNDbGFzcyhcInNsaWNrLWluaXRpYWxpemVkXCIpKSB7ICQoXy4kc2xpZGVyKS5hZGRDbGFzcyhcInNsaWNrLWluaXRpYWxpemVkXCIpOyBfLmJ1aWxkUm93cygpOyBfLmJ1aWxkT3V0KCk7IF8uc2V0UHJvcHMoKTsgXy5zdGFydExvYWQoKTsgXy5sb2FkU2xpZGVyKCk7IF8uaW5pdGlhbGl6ZUV2ZW50cygpOyBfLnVwZGF0ZUFycm93cygpOyBfLnVwZGF0ZURvdHMoKTsgXy5jaGVja1Jlc3BvbnNpdmUodHJ1ZSk7IF8uZm9jdXNIYW5kbGVyKCkgfSBpZiAoY3JlYXRpb24pIHsgXy4kc2xpZGVyLnRyaWdnZXIoXCJpbml0XCIsIFtfXSkgfSBpZiAoXy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHsgXy5pbml0QURBKCkgfSBpZiAoXy5vcHRpb25zLmF1dG9wbGF5KSB7IF8ucGF1c2VkID0gZmFsc2U7IF8uYXV0b1BsYXkoKSB9IH07IFNsaWNrLnByb3RvdHlwZS5pbml0QURBID0gZnVuY3Rpb24gKCkgeyB2YXIgXyA9IHRoaXMsIG51bURvdEdyb3VwcyA9IE1hdGguY2VpbChfLnNsaWRlQ291bnQgLyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSwgdGFiQ29udHJvbEluZGV4ZXMgPSBfLmdldE5hdmlnYWJsZUluZGV4ZXMoKS5maWx0ZXIoZnVuY3Rpb24gKHZhbCkgeyByZXR1cm4gdmFsID49IDAgJiYgdmFsIDwgXy5zbGlkZUNvdW50IH0pOyBfLiRzbGlkZXMuYWRkKF8uJHNsaWRlVHJhY2suZmluZChcIi5zbGljay1jbG9uZWRcIikpLmF0dHIoeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLCB0YWJpbmRleDogXCItMVwiIH0pLmZpbmQoXCJhLCBpbnB1dCwgYnV0dG9uLCBzZWxlY3RcIikuYXR0cih7IHRhYmluZGV4OiBcIi0xXCIgfSk7IGlmIChfLiRkb3RzICE9PSBudWxsKSB7IF8uJHNsaWRlcy5ub3QoXy4kc2xpZGVUcmFjay5maW5kKFwiLnNsaWNrLWNsb25lZFwiKSkuZWFjaChmdW5jdGlvbiAoaSkgeyB2YXIgc2xpZGVDb250cm9sSW5kZXggPSB0YWJDb250cm9sSW5kZXhlcy5pbmRleE9mKGkpOyAkKHRoaXMpLmF0dHIoeyByb2xlOiBcInRhYnBhbmVsXCIsIGlkOiBcInNsaWNrLXNsaWRlXCIgKyBfLmluc3RhbmNlVWlkICsgaSwgdGFiaW5kZXg6IC0xIH0pOyBpZiAoc2xpZGVDb250cm9sSW5kZXggIT09IC0xKSB7IHZhciBhcmlhQnV0dG9uQ29udHJvbCA9IFwic2xpY2stc2xpZGUtY29udHJvbFwiICsgXy5pbnN0YW5jZVVpZCArIHNsaWRlQ29udHJvbEluZGV4OyBpZiAoJChcIiNcIiArIGFyaWFCdXR0b25Db250cm9sKS5sZW5ndGgpIHsgJCh0aGlzKS5hdHRyKHsgXCJhcmlhLWRlc2NyaWJlZGJ5XCI6IGFyaWFCdXR0b25Db250cm9sIH0pIH0gfSB9KTsgXy4kZG90cy5hdHRyKFwicm9sZVwiLCBcInRhYmxpc3RcIikuZmluZChcImxpXCIpLmVhY2goZnVuY3Rpb24gKGkpIHsgdmFyIG1hcHBlZFNsaWRlSW5kZXggPSB0YWJDb250cm9sSW5kZXhlc1tpXTsgJCh0aGlzKS5hdHRyKHsgcm9sZTogXCJwcmVzZW50YXRpb25cIiB9KTsgJCh0aGlzKS5maW5kKFwiYnV0dG9uXCIpLmZpcnN0KCkuYXR0cih7IHJvbGU6IFwidGFiXCIsIGlkOiBcInNsaWNrLXNsaWRlLWNvbnRyb2xcIiArIF8uaW5zdGFuY2VVaWQgKyBpLCBcImFyaWEtY29udHJvbHNcIjogXCJzbGljay1zbGlkZVwiICsgXy5pbnN0YW5jZVVpZCArIG1hcHBlZFNsaWRlSW5kZXgsIFwiYXJpYS1sYWJlbFwiOiBpICsgMSArIFwiIG9mIFwiICsgbnVtRG90R3JvdXBzLCBcImFyaWEtc2VsZWN0ZWRcIjogbnVsbCwgdGFiaW5kZXg6IFwiLTFcIiB9KSB9KS5lcShfLmN1cnJlbnRTbGlkZSkuZmluZChcImJ1dHRvblwiKS5hdHRyKHsgXCJhcmlhLXNlbGVjdGVkXCI6IFwidHJ1ZVwiLCB0YWJpbmRleDogXCIwXCIgfSkuZW5kKCkgfSBmb3IgKHZhciBpID0gXy5jdXJyZW50U2xpZGUsIG1heCA9IGkgKyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93OyBpIDwgbWF4OyBpKyspIHsgaWYgKF8ub3B0aW9ucy5mb2N1c09uQ2hhbmdlKSB7IF8uJHNsaWRlcy5lcShpKS5hdHRyKHsgdGFiaW5kZXg6IFwiMFwiIH0pIH0gZWxzZSB7IF8uJHNsaWRlcy5lcShpKS5yZW1vdmVBdHRyKFwidGFiaW5kZXhcIikgfSB9IF8uYWN0aXZhdGVBREEoKSB9OyBTbGljay5wcm90b3R5cGUuaW5pdEFycm93RXZlbnRzID0gZnVuY3Rpb24gKCkgeyB2YXIgXyA9IHRoaXM7IGlmIChfLm9wdGlvbnMuYXJyb3dzID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHsgXy4kcHJldkFycm93Lm9mZihcImNsaWNrLnNsaWNrXCIpLm9uKFwiY2xpY2suc2xpY2tcIiwgeyBtZXNzYWdlOiBcInByZXZpb3VzXCIgfSwgXy5jaGFuZ2VTbGlkZSk7IF8uJG5leHRBcnJvdy5vZmYoXCJjbGljay5zbGlja1wiKS5vbihcImNsaWNrLnNsaWNrXCIsIHsgbWVzc2FnZTogXCJuZXh0XCIgfSwgXy5jaGFuZ2VTbGlkZSk7IGlmIChfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkgeyBfLiRwcmV2QXJyb3cub24oXCJrZXlkb3duLnNsaWNrXCIsIF8ua2V5SGFuZGxlcik7IF8uJG5leHRBcnJvdy5vbihcImtleWRvd24uc2xpY2tcIiwgXy5rZXlIYW5kbGVyKSB9IH0gfTsgU2xpY2sucHJvdG90eXBlLmluaXREb3RFdmVudHMgPSBmdW5jdGlvbiAoKSB7IHZhciBfID0gdGhpczsgaWYgKF8ub3B0aW9ucy5kb3RzID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHsgJChcImxpXCIsIF8uJGRvdHMpLm9uKFwiY2xpY2suc2xpY2tcIiwgeyBtZXNzYWdlOiBcImluZGV4XCIgfSwgXy5jaGFuZ2VTbGlkZSk7IGlmIChfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkgeyBfLiRkb3RzLm9uKFwia2V5ZG93bi5zbGlja1wiLCBfLmtleUhhbmRsZXIpIH0gfSBpZiAoXy5vcHRpb25zLmRvdHMgPT09IHRydWUgJiYgXy5vcHRpb25zLnBhdXNlT25Eb3RzSG92ZXIgPT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykgeyAkKFwibGlcIiwgXy4kZG90cykub24oXCJtb3VzZWVudGVyLnNsaWNrXCIsICQucHJveHkoXy5pbnRlcnJ1cHQsIF8sIHRydWUpKS5vbihcIm1vdXNlbGVhdmUuc2xpY2tcIiwgJC5wcm94eShfLmludGVycnVwdCwgXywgZmFsc2UpKSB9IH07IFNsaWNrLnByb3RvdHlwZS5pbml0U2xpZGVFdmVudHMgPSBmdW5jdGlvbiAoKSB7IHZhciBfID0gdGhpczsgaWYgKF8ub3B0aW9ucy5wYXVzZU9uSG92ZXIpIHsgXy4kbGlzdC5vbihcIm1vdXNlZW50ZXIuc2xpY2tcIiwgJC5wcm94eShfLmludGVycnVwdCwgXywgdHJ1ZSkpOyBfLiRsaXN0Lm9uKFwibW91c2VsZWF2ZS5zbGlja1wiLCAkLnByb3h5KF8uaW50ZXJydXB0LCBfLCBmYWxzZSkpIH0gfTsgU2xpY2sucHJvdG90eXBlLmluaXRpYWxpemVFdmVudHMgPSBmdW5jdGlvbiAoKSB7IHZhciBfID0gdGhpczsgXy5pbml0QXJyb3dFdmVudHMoKTsgXy5pbml0RG90RXZlbnRzKCk7IF8uaW5pdFNsaWRlRXZlbnRzKCk7IF8uJGxpc3Qub24oXCJ0b3VjaHN0YXJ0LnNsaWNrIG1vdXNlZG93bi5zbGlja1wiLCB7IGFjdGlvbjogXCJzdGFydFwiIH0sIF8uc3dpcGVIYW5kbGVyKTsgXy4kbGlzdC5vbihcInRvdWNobW92ZS5zbGljayBtb3VzZW1vdmUuc2xpY2tcIiwgeyBhY3Rpb246IFwibW92ZVwiIH0sIF8uc3dpcGVIYW5kbGVyKTsgXy4kbGlzdC5vbihcInRvdWNoZW5kLnNsaWNrIG1vdXNldXAuc2xpY2tcIiwgeyBhY3Rpb246IFwiZW5kXCIgfSwgXy5zd2lwZUhhbmRsZXIpOyBfLiRsaXN0Lm9uKFwidG91Y2hjYW5jZWwuc2xpY2sgbW91c2VsZWF2ZS5zbGlja1wiLCB7IGFjdGlvbjogXCJlbmRcIiB9LCBfLnN3aXBlSGFuZGxlcik7IF8uJGxpc3Qub24oXCJjbGljay5zbGlja1wiLCBfLmNsaWNrSGFuZGxlcik7ICQoZG9jdW1lbnQpLm9uKF8udmlzaWJpbGl0eUNoYW5nZSwgJC5wcm94eShfLnZpc2liaWxpdHksIF8pKTsgaWYgKF8ub3B0aW9ucy5hY2Nlc3NpYmlsaXR5ID09PSB0cnVlKSB7IF8uJGxpc3Qub24oXCJrZXlkb3duLnNsaWNrXCIsIF8ua2V5SGFuZGxlcikgfSBpZiAoXy5vcHRpb25zLmZvY3VzT25TZWxlY3QgPT09IHRydWUpIHsgJChfLiRzbGlkZVRyYWNrKS5jaGlsZHJlbigpLm9uKFwiY2xpY2suc2xpY2tcIiwgXy5zZWxlY3RIYW5kbGVyKSB9ICQod2luZG93KS5vbihcIm9yaWVudGF0aW9uY2hhbmdlLnNsaWNrLnNsaWNrLVwiICsgXy5pbnN0YW5jZVVpZCwgJC5wcm94eShfLm9yaWVudGF0aW9uQ2hhbmdlLCBfKSk7ICQod2luZG93KS5vbihcInJlc2l6ZS5zbGljay5zbGljay1cIiArIF8uaW5zdGFuY2VVaWQsICQucHJveHkoXy5yZXNpemUsIF8pKTsgJChcIltkcmFnZ2FibGUhPXRydWVdXCIsIF8uJHNsaWRlVHJhY2spLm9uKFwiZHJhZ3N0YXJ0XCIsIF8ucHJldmVudERlZmF1bHQpOyAkKHdpbmRvdykub24oXCJsb2FkLnNsaWNrLnNsaWNrLVwiICsgXy5pbnN0YW5jZVVpZCwgXy5zZXRQb3NpdGlvbik7ICQoXy5zZXRQb3NpdGlvbikgfTsgU2xpY2sucHJvdG90eXBlLmluaXRVSSA9IGZ1bmN0aW9uICgpIHsgdmFyIF8gPSB0aGlzOyBpZiAoXy5vcHRpb25zLmFycm93cyA9PT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7IF8uJHByZXZBcnJvdy5zaG93KCk7IF8uJG5leHRBcnJvdy5zaG93KCkgfSBpZiAoXy5vcHRpb25zLmRvdHMgPT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykgeyBfLiRkb3RzLnNob3coKSB9IH07IFNsaWNrLnByb3RvdHlwZS5rZXlIYW5kbGVyID0gZnVuY3Rpb24gKGV2ZW50KSB7IHZhciBfID0gdGhpczsgaWYgKCFldmVudC50YXJnZXQudGFnTmFtZS5tYXRjaChcIlRFWFRBUkVBfElOUFVUfFNFTEVDVFwiKSkgeyBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzcgJiYgXy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHsgXy5jaGFuZ2VTbGlkZSh7IGRhdGE6IHsgbWVzc2FnZTogXy5vcHRpb25zLnJ0bCA9PT0gdHJ1ZSA/IFwibmV4dFwiIDogXCJwcmV2aW91c1wiIH0gfSkgfSBlbHNlIGlmIChldmVudC5rZXlDb2RlID09PSAzOSAmJiBfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkgeyBfLmNoYW5nZVNsaWRlKHsgZGF0YTogeyBtZXNzYWdlOiBfLm9wdGlvbnMucnRsID09PSB0cnVlID8gXCJwcmV2aW91c1wiIDogXCJuZXh0XCIgfSB9KSB9IH0gfTsgU2xpY2sucHJvdG90eXBlLmxhenlMb2FkID0gZnVuY3Rpb24gKCkgeyB2YXIgXyA9IHRoaXMsIGxvYWRSYW5nZSwgY2xvbmVSYW5nZSwgcmFuZ2VTdGFydCwgcmFuZ2VFbmQ7IGZ1bmN0aW9uIGxvYWRJbWFnZXMoaW1hZ2VzU2NvcGUpIHsgJChcImltZ1tkYXRhLWxhenldXCIsIGltYWdlc1Njb3BlKS5lYWNoKGZ1bmN0aW9uICgpIHsgdmFyIGltYWdlID0gJCh0aGlzKSwgaW1hZ2VTb3VyY2UgPSAkKHRoaXMpLmF0dHIoXCJkYXRhLWxhenlcIiksIGltYWdlU3JjU2V0ID0gJCh0aGlzKS5hdHRyKFwiZGF0YS1zcmNzZXRcIiksIGltYWdlU2l6ZXMgPSAkKHRoaXMpLmF0dHIoXCJkYXRhLXNpemVzXCIpIHx8IF8uJHNsaWRlci5hdHRyKFwiZGF0YS1zaXplc1wiKSwgaW1hZ2VUb0xvYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpOyBpbWFnZVRvTG9hZC5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7IGltYWdlLmFuaW1hdGUoeyBvcGFjaXR5OiAwIH0sIDEwMCwgZnVuY3Rpb24gKCkgeyBpZiAoaW1hZ2VTcmNTZXQpIHsgaW1hZ2UuYXR0cihcInNyY3NldFwiLCBpbWFnZVNyY1NldCk7IGlmIChpbWFnZVNpemVzKSB7IGltYWdlLmF0dHIoXCJzaXplc1wiLCBpbWFnZVNpemVzKSB9IH0gaW1hZ2UuYXR0cihcInNyY1wiLCBpbWFnZVNvdXJjZSkuYW5pbWF0ZSh7IG9wYWNpdHk6IDEgfSwgMjAwLCBmdW5jdGlvbiAoKSB7IGltYWdlLnJlbW92ZUF0dHIoXCJkYXRhLWxhenkgZGF0YS1zcmNzZXQgZGF0YS1zaXplc1wiKS5yZW1vdmVDbGFzcyhcInNsaWNrLWxvYWRpbmdcIikgfSk7IF8uJHNsaWRlci50cmlnZ2VyKFwibGF6eUxvYWRlZFwiLCBbXywgaW1hZ2UsIGltYWdlU291cmNlXSkgfSkgfTsgaW1hZ2VUb0xvYWQub25lcnJvciA9IGZ1bmN0aW9uICgpIHsgaW1hZ2UucmVtb3ZlQXR0cihcImRhdGEtbGF6eVwiKS5yZW1vdmVDbGFzcyhcInNsaWNrLWxvYWRpbmdcIikuYWRkQ2xhc3MoXCJzbGljay1sYXp5bG9hZC1lcnJvclwiKTsgXy4kc2xpZGVyLnRyaWdnZXIoXCJsYXp5TG9hZEVycm9yXCIsIFtfLCBpbWFnZSwgaW1hZ2VTb3VyY2VdKSB9OyBpbWFnZVRvTG9hZC5zcmMgPSBpbWFnZVNvdXJjZSB9KSB9IGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSkgeyBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSB0cnVlKSB7IHJhbmdlU3RhcnQgPSBfLmN1cnJlbnRTbGlkZSArIChfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC8gMiArIDEpOyByYW5nZUVuZCA9IHJhbmdlU3RhcnQgKyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICsgMiB9IGVsc2UgeyByYW5nZVN0YXJ0ID0gTWF0aC5tYXgoMCwgXy5jdXJyZW50U2xpZGUgLSAoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAvIDIgKyAxKSk7IHJhbmdlRW5kID0gMiArIChfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC8gMiArIDEpICsgXy5jdXJyZW50U2xpZGUgfSB9IGVsc2UgeyByYW5nZVN0YXJ0ID0gXy5vcHRpb25zLmluZmluaXRlID8gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyArIF8uY3VycmVudFNsaWRlIDogXy5jdXJyZW50U2xpZGU7IHJhbmdlRW5kID0gTWF0aC5jZWlsKHJhbmdlU3RhcnQgKyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KTsgaWYgKF8ub3B0aW9ucy5mYWRlID09PSB0cnVlKSB7IGlmIChyYW5nZVN0YXJ0ID4gMCkgcmFuZ2VTdGFydC0tOyBpZiAocmFuZ2VFbmQgPD0gXy5zbGlkZUNvdW50KSByYW5nZUVuZCsrIH0gfSBsb2FkUmFuZ2UgPSBfLiRzbGlkZXIuZmluZChcIi5zbGljay1zbGlkZVwiKS5zbGljZShyYW5nZVN0YXJ0LCByYW5nZUVuZCk7IGlmIChfLm9wdGlvbnMubGF6eUxvYWQgPT09IFwiYW50aWNpcGF0ZWRcIikgeyB2YXIgcHJldlNsaWRlID0gcmFuZ2VTdGFydCAtIDEsIG5leHRTbGlkZSA9IHJhbmdlRW5kLCAkc2xpZGVzID0gXy4kc2xpZGVyLmZpbmQoXCIuc2xpY2stc2xpZGVcIik7IGZvciAodmFyIGkgPSAwOyBpIDwgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsOyBpKyspIHsgaWYgKHByZXZTbGlkZSA8IDApIHByZXZTbGlkZSA9IF8uc2xpZGVDb3VudCAtIDE7IGxvYWRSYW5nZSA9IGxvYWRSYW5nZS5hZGQoJHNsaWRlcy5lcShwcmV2U2xpZGUpKTsgbG9hZFJhbmdlID0gbG9hZFJhbmdlLmFkZCgkc2xpZGVzLmVxKG5leHRTbGlkZSkpOyBwcmV2U2xpZGUtLTsgbmV4dFNsaWRlKysgfSB9IGxvYWRJbWFnZXMobG9hZFJhbmdlKTsgaWYgKF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7IGNsb25lUmFuZ2UgPSBfLiRzbGlkZXIuZmluZChcIi5zbGljay1zbGlkZVwiKTsgbG9hZEltYWdlcyhjbG9uZVJhbmdlKSB9IGVsc2UgaWYgKF8uY3VycmVudFNsaWRlID49IF8uc2xpZGVDb3VudCAtIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHsgY2xvbmVSYW5nZSA9IF8uJHNsaWRlci5maW5kKFwiLnNsaWNrLWNsb25lZFwiKS5zbGljZSgwLCBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KTsgbG9hZEltYWdlcyhjbG9uZVJhbmdlKSB9IGVsc2UgaWYgKF8uY3VycmVudFNsaWRlID09PSAwKSB7IGNsb25lUmFuZ2UgPSBfLiRzbGlkZXIuZmluZChcIi5zbGljay1jbG9uZWRcIikuc2xpY2UoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAqIC0xKTsgbG9hZEltYWdlcyhjbG9uZVJhbmdlKSB9IH07IFNsaWNrLnByb3RvdHlwZS5sb2FkU2xpZGVyID0gZnVuY3Rpb24gKCkgeyB2YXIgXyA9IHRoaXM7IF8uc2V0UG9zaXRpb24oKTsgXy4kc2xpZGVUcmFjay5jc3MoeyBvcGFjaXR5OiAxIH0pOyBfLiRzbGlkZXIucmVtb3ZlQ2xhc3MoXCJzbGljay1sb2FkaW5nXCIpOyBfLmluaXRVSSgpOyBpZiAoXy5vcHRpb25zLmxhenlMb2FkID09PSBcInByb2dyZXNzaXZlXCIpIHsgXy5wcm9ncmVzc2l2ZUxhenlMb2FkKCkgfSB9OyBTbGljay5wcm90b3R5cGUubmV4dCA9IFNsaWNrLnByb3RvdHlwZS5zbGlja05leHQgPSBmdW5jdGlvbiAoKSB7IHZhciBfID0gdGhpczsgXy5jaGFuZ2VTbGlkZSh7IGRhdGE6IHsgbWVzc2FnZTogXCJuZXh0XCIgfSB9KSB9OyBTbGljay5wcm90b3R5cGUub3JpZW50YXRpb25DaGFuZ2UgPSBmdW5jdGlvbiAoKSB7IHZhciBfID0gdGhpczsgXy5jaGVja1Jlc3BvbnNpdmUoKTsgXy5zZXRQb3NpdGlvbigpIH07IFNsaWNrLnByb3RvdHlwZS5wYXVzZSA9IFNsaWNrLnByb3RvdHlwZS5zbGlja1BhdXNlID0gZnVuY3Rpb24gKCkgeyB2YXIgXyA9IHRoaXM7IF8uYXV0b1BsYXlDbGVhcigpOyBfLnBhdXNlZCA9IHRydWUgfTsgU2xpY2sucHJvdG90eXBlLnBsYXkgPSBTbGljay5wcm90b3R5cGUuc2xpY2tQbGF5ID0gZnVuY3Rpb24gKCkgeyB2YXIgXyA9IHRoaXM7IF8uYXV0b1BsYXkoKTsgXy5vcHRpb25zLmF1dG9wbGF5ID0gdHJ1ZTsgXy5wYXVzZWQgPSBmYWxzZTsgXy5mb2N1c3NlZCA9IGZhbHNlOyBfLmludGVycnVwdGVkID0gZmFsc2UgfTsgU2xpY2sucHJvdG90eXBlLnBvc3RTbGlkZSA9IGZ1bmN0aW9uIChpbmRleCkgeyB2YXIgXyA9IHRoaXM7IGlmICghXy51bnNsaWNrZWQpIHsgXy4kc2xpZGVyLnRyaWdnZXIoXCJhZnRlckNoYW5nZVwiLCBbXywgaW5kZXhdKTsgXy5hbmltYXRpbmcgPSBmYWxzZTsgaWYgKF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHsgXy5zZXRQb3NpdGlvbigpIH0gXy5zd2lwZUxlZnQgPSBudWxsOyBpZiAoXy5vcHRpb25zLmF1dG9wbGF5KSB7IF8uYXV0b1BsYXkoKSB9IGlmIChfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkgeyBfLmluaXRBREEoKTsgaWYgKF8ub3B0aW9ucy5mb2N1c09uQ2hhbmdlKSB7IHZhciAkY3VycmVudFNsaWRlID0gJChfLiRzbGlkZXMuZ2V0KF8uY3VycmVudFNsaWRlKSk7ICRjdXJyZW50U2xpZGUuYXR0cihcInRhYmluZGV4XCIsIDApLmZvY3VzKCkgfSB9IH0gfTsgU2xpY2sucHJvdG90eXBlLnByZXYgPSBTbGljay5wcm90b3R5cGUuc2xpY2tQcmV2ID0gZnVuY3Rpb24gKCkgeyB2YXIgXyA9IHRoaXM7IF8uY2hhbmdlU2xpZGUoeyBkYXRhOiB7IG1lc3NhZ2U6IFwicHJldmlvdXNcIiB9IH0pIH07IFNsaWNrLnByb3RvdHlwZS5wcmV2ZW50RGVmYXVsdCA9IGZ1bmN0aW9uIChldmVudCkgeyBldmVudC5wcmV2ZW50RGVmYXVsdCgpIH07IFNsaWNrLnByb3RvdHlwZS5wcm9ncmVzc2l2ZUxhenlMb2FkID0gZnVuY3Rpb24gKHRyeUNvdW50KSB7IHRyeUNvdW50ID0gdHJ5Q291bnQgfHwgMTsgdmFyIF8gPSB0aGlzLCAkaW1nc1RvTG9hZCA9ICQoXCJpbWdbZGF0YS1sYXp5XVwiLCBfLiRzbGlkZXIpLCBpbWFnZSwgaW1hZ2VTb3VyY2UsIGltYWdlU3JjU2V0LCBpbWFnZVNpemVzLCBpbWFnZVRvTG9hZDsgaWYgKCRpbWdzVG9Mb2FkLmxlbmd0aCkgeyBpbWFnZSA9ICRpbWdzVG9Mb2FkLmZpcnN0KCk7IGltYWdlU291cmNlID0gaW1hZ2UuYXR0cihcImRhdGEtbGF6eVwiKTsgaW1hZ2VTcmNTZXQgPSBpbWFnZS5hdHRyKFwiZGF0YS1zcmNzZXRcIik7IGltYWdlU2l6ZXMgPSBpbWFnZS5hdHRyKFwiZGF0YS1zaXplc1wiKSB8fCBfLiRzbGlkZXIuYXR0cihcImRhdGEtc2l6ZXNcIik7IGltYWdlVG9Mb2FkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTsgaW1hZ2VUb0xvYWQub25sb2FkID0gZnVuY3Rpb24gKCkgeyBpZiAoaW1hZ2VTcmNTZXQpIHsgaW1hZ2UuYXR0cihcInNyY3NldFwiLCBpbWFnZVNyY1NldCk7IGlmIChpbWFnZVNpemVzKSB7IGltYWdlLmF0dHIoXCJzaXplc1wiLCBpbWFnZVNpemVzKSB9IH0gaW1hZ2UuYXR0cihcInNyY1wiLCBpbWFnZVNvdXJjZSkucmVtb3ZlQXR0cihcImRhdGEtbGF6eSBkYXRhLXNyY3NldCBkYXRhLXNpemVzXCIpLnJlbW92ZUNsYXNzKFwic2xpY2stbG9hZGluZ1wiKTsgaWYgKF8ub3B0aW9ucy5hZGFwdGl2ZUhlaWdodCA9PT0gdHJ1ZSkgeyBfLnNldFBvc2l0aW9uKCkgfSBfLiRzbGlkZXIudHJpZ2dlcihcImxhenlMb2FkZWRcIiwgW18sIGltYWdlLCBpbWFnZVNvdXJjZV0pOyBfLnByb2dyZXNzaXZlTGF6eUxvYWQoKSB9OyBpbWFnZVRvTG9hZC5vbmVycm9yID0gZnVuY3Rpb24gKCkgeyBpZiAodHJ5Q291bnQgPCAzKSB7IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyBfLnByb2dyZXNzaXZlTGF6eUxvYWQodHJ5Q291bnQgKyAxKSB9LCA1MDApIH0gZWxzZSB7IGltYWdlLnJlbW92ZUF0dHIoXCJkYXRhLWxhenlcIikucmVtb3ZlQ2xhc3MoXCJzbGljay1sb2FkaW5nXCIpLmFkZENsYXNzKFwic2xpY2stbGF6eWxvYWQtZXJyb3JcIik7IF8uJHNsaWRlci50cmlnZ2VyKFwibGF6eUxvYWRFcnJvclwiLCBbXywgaW1hZ2UsIGltYWdlU291cmNlXSk7IF8ucHJvZ3Jlc3NpdmVMYXp5TG9hZCgpIH0gfTsgaW1hZ2VUb0xvYWQuc3JjID0gaW1hZ2VTb3VyY2UgfSBlbHNlIHsgXy4kc2xpZGVyLnRyaWdnZXIoXCJhbGxJbWFnZXNMb2FkZWRcIiwgW19dKSB9IH07IFNsaWNrLnByb3RvdHlwZS5yZWZyZXNoID0gZnVuY3Rpb24gKGluaXRpYWxpemluZykgeyB2YXIgXyA9IHRoaXMsIGN1cnJlbnRTbGlkZSwgbGFzdFZpc2libGVJbmRleDsgbGFzdFZpc2libGVJbmRleCA9IF8uc2xpZGVDb3VudCAtIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3c7IGlmICghXy5vcHRpb25zLmluZmluaXRlICYmIF8uY3VycmVudFNsaWRlID4gbGFzdFZpc2libGVJbmRleCkgeyBfLmN1cnJlbnRTbGlkZSA9IGxhc3RWaXNpYmxlSW5kZXggfSBpZiAoXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHsgXy5jdXJyZW50U2xpZGUgPSAwIH0gY3VycmVudFNsaWRlID0gXy5jdXJyZW50U2xpZGU7IF8uZGVzdHJveSh0cnVlKTsgJC5leHRlbmQoXywgXy5pbml0aWFscywgeyBjdXJyZW50U2xpZGU6IGN1cnJlbnRTbGlkZSB9KTsgXy5pbml0KCk7IGlmICghaW5pdGlhbGl6aW5nKSB7IF8uY2hhbmdlU2xpZGUoeyBkYXRhOiB7IG1lc3NhZ2U6IFwiaW5kZXhcIiwgaW5kZXg6IGN1cnJlbnRTbGlkZSB9IH0sIGZhbHNlKSB9IH07IFNsaWNrLnByb3RvdHlwZS5yZWdpc3RlckJyZWFrcG9pbnRzID0gZnVuY3Rpb24gKCkgeyB2YXIgXyA9IHRoaXMsIGJyZWFrcG9pbnQsIGN1cnJlbnRCcmVha3BvaW50LCBsLCByZXNwb25zaXZlU2V0dGluZ3MgPSBfLm9wdGlvbnMucmVzcG9uc2l2ZSB8fCBudWxsOyBpZiAoJC50eXBlKHJlc3BvbnNpdmVTZXR0aW5ncykgPT09IFwiYXJyYXlcIiAmJiByZXNwb25zaXZlU2V0dGluZ3MubGVuZ3RoKSB7IF8ucmVzcG9uZFRvID0gXy5vcHRpb25zLnJlc3BvbmRUbyB8fCBcIndpbmRvd1wiOyBmb3IgKGJyZWFrcG9pbnQgaW4gcmVzcG9uc2l2ZVNldHRpbmdzKSB7IGwgPSBfLmJyZWFrcG9pbnRzLmxlbmd0aCAtIDE7IGlmIChyZXNwb25zaXZlU2V0dGluZ3MuaGFzT3duUHJvcGVydHkoYnJlYWtwb2ludCkpIHsgY3VycmVudEJyZWFrcG9pbnQgPSByZXNwb25zaXZlU2V0dGluZ3NbYnJlYWtwb2ludF0uYnJlYWtwb2ludDsgd2hpbGUgKGwgPj0gMCkgeyBpZiAoXy5icmVha3BvaW50c1tsXSAmJiBfLmJyZWFrcG9pbnRzW2xdID09PSBjdXJyZW50QnJlYWtwb2ludCkgeyBfLmJyZWFrcG9pbnRzLnNwbGljZShsLCAxKSB9IGwtLSB9IF8uYnJlYWtwb2ludHMucHVzaChjdXJyZW50QnJlYWtwb2ludCk7IF8uYnJlYWtwb2ludFNldHRpbmdzW2N1cnJlbnRCcmVha3BvaW50XSA9IHJlc3BvbnNpdmVTZXR0aW5nc1ticmVha3BvaW50XS5zZXR0aW5ncyB9IH0gXy5icmVha3BvaW50cy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7IHJldHVybiBfLm9wdGlvbnMubW9iaWxlRmlyc3QgPyBhIC0gYiA6IGIgLSBhIH0pIH0gfTsgU2xpY2sucHJvdG90eXBlLnJlaW5pdCA9IGZ1bmN0aW9uICgpIHsgdmFyIF8gPSB0aGlzOyBfLiRzbGlkZXMgPSBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKF8ub3B0aW9ucy5zbGlkZSkuYWRkQ2xhc3MoXCJzbGljay1zbGlkZVwiKTsgXy5zbGlkZUNvdW50ID0gXy4kc2xpZGVzLmxlbmd0aDsgaWYgKF8uY3VycmVudFNsaWRlID49IF8uc2xpZGVDb3VudCAmJiBfLmN1cnJlbnRTbGlkZSAhPT0gMCkgeyBfLmN1cnJlbnRTbGlkZSA9IF8uY3VycmVudFNsaWRlIC0gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsIH0gaWYgKF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7IF8uY3VycmVudFNsaWRlID0gMCB9IF8ucmVnaXN0ZXJCcmVha3BvaW50cygpOyBfLnNldFByb3BzKCk7IF8uc2V0dXBJbmZpbml0ZSgpOyBfLmJ1aWxkQXJyb3dzKCk7IF8udXBkYXRlQXJyb3dzKCk7IF8uaW5pdEFycm93RXZlbnRzKCk7IF8uYnVpbGREb3RzKCk7IF8udXBkYXRlRG90cygpOyBfLmluaXREb3RFdmVudHMoKTsgXy5jbGVhblVwU2xpZGVFdmVudHMoKTsgXy5pbml0U2xpZGVFdmVudHMoKTsgXy5jaGVja1Jlc3BvbnNpdmUoZmFsc2UsIHRydWUpOyBpZiAoXy5vcHRpb25zLmZvY3VzT25TZWxlY3QgPT09IHRydWUpIHsgJChfLiRzbGlkZVRyYWNrKS5jaGlsZHJlbigpLm9uKFwiY2xpY2suc2xpY2tcIiwgXy5zZWxlY3RIYW5kbGVyKSB9IF8uc2V0U2xpZGVDbGFzc2VzKHR5cGVvZiBfLmN1cnJlbnRTbGlkZSA9PT0gXCJudW1iZXJcIiA/IF8uY3VycmVudFNsaWRlIDogMCk7IF8uc2V0UG9zaXRpb24oKTsgXy5mb2N1c0hhbmRsZXIoKTsgXy5wYXVzZWQgPSAhXy5vcHRpb25zLmF1dG9wbGF5OyBfLmF1dG9QbGF5KCk7IF8uJHNsaWRlci50cmlnZ2VyKFwicmVJbml0XCIsIFtfXSkgfTsgU2xpY2sucHJvdG90eXBlLnJlc2l6ZSA9IGZ1bmN0aW9uICgpIHsgdmFyIF8gPSB0aGlzOyBpZiAoJCh3aW5kb3cpLndpZHRoKCkgIT09IF8ud2luZG93V2lkdGgpIHsgY2xlYXJUaW1lb3V0KF8ud2luZG93RGVsYXkpOyBfLndpbmRvd0RlbGF5ID0gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyBfLndpbmRvd1dpZHRoID0gJCh3aW5kb3cpLndpZHRoKCk7IF8uY2hlY2tSZXNwb25zaXZlKCk7IGlmICghXy51bnNsaWNrZWQpIHsgXy5zZXRQb3NpdGlvbigpIH0gfSwgNTApIH0gfTsgU2xpY2sucHJvdG90eXBlLnJlbW92ZVNsaWRlID0gU2xpY2sucHJvdG90eXBlLnNsaWNrUmVtb3ZlID0gZnVuY3Rpb24gKGluZGV4LCByZW1vdmVCZWZvcmUsIHJlbW92ZUFsbCkgeyB2YXIgXyA9IHRoaXM7IGlmICh0eXBlb2YgaW5kZXggPT09IFwiYm9vbGVhblwiKSB7IHJlbW92ZUJlZm9yZSA9IGluZGV4OyBpbmRleCA9IHJlbW92ZUJlZm9yZSA9PT0gdHJ1ZSA/IDAgOiBfLnNsaWRlQ291bnQgLSAxIH0gZWxzZSB7IGluZGV4ID0gcmVtb3ZlQmVmb3JlID09PSB0cnVlID8gLS1pbmRleCA6IGluZGV4IH0gaWYgKF8uc2xpZGVDb3VudCA8IDEgfHwgaW5kZXggPCAwIHx8IGluZGV4ID4gXy5zbGlkZUNvdW50IC0gMSkgeyByZXR1cm4gZmFsc2UgfSBfLnVubG9hZCgpOyBpZiAocmVtb3ZlQWxsID09PSB0cnVlKSB7IF8uJHNsaWRlVHJhY2suY2hpbGRyZW4oKS5yZW1vdmUoKSB9IGVsc2UgeyBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5zbGlkZSkuZXEoaW5kZXgpLnJlbW92ZSgpIH0gXy4kc2xpZGVzID0gXy4kc2xpZGVUcmFjay5jaGlsZHJlbih0aGlzLm9wdGlvbnMuc2xpZGUpOyBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5zbGlkZSkuZGV0YWNoKCk7IF8uJHNsaWRlVHJhY2suYXBwZW5kKF8uJHNsaWRlcyk7IF8uJHNsaWRlc0NhY2hlID0gXy4kc2xpZGVzOyBfLnJlaW5pdCgpIH07IFNsaWNrLnByb3RvdHlwZS5zZXRDU1MgPSBmdW5jdGlvbiAocG9zaXRpb24pIHsgdmFyIF8gPSB0aGlzLCBwb3NpdGlvblByb3BzID0ge30sIHgsIHk7IGlmIChfLm9wdGlvbnMucnRsID09PSB0cnVlKSB7IHBvc2l0aW9uID0gLXBvc2l0aW9uIH0geCA9IF8ucG9zaXRpb25Qcm9wID09IFwibGVmdFwiID8gTWF0aC5jZWlsKHBvc2l0aW9uKSArIFwicHhcIiA6IFwiMHB4XCI7IHkgPSBfLnBvc2l0aW9uUHJvcCA9PSBcInRvcFwiID8gTWF0aC5jZWlsKHBvc2l0aW9uKSArIFwicHhcIiA6IFwiMHB4XCI7IHBvc2l0aW9uUHJvcHNbXy5wb3NpdGlvblByb3BdID0gcG9zaXRpb247IGlmIChfLnRyYW5zZm9ybXNFbmFibGVkID09PSBmYWxzZSkgeyBfLiRzbGlkZVRyYWNrLmNzcyhwb3NpdGlvblByb3BzKSB9IGVsc2UgeyBwb3NpdGlvblByb3BzID0ge307IGlmIChfLmNzc1RyYW5zaXRpb25zID09PSBmYWxzZSkgeyBwb3NpdGlvblByb3BzW18uYW5pbVR5cGVdID0gXCJ0cmFuc2xhdGUoXCIgKyB4ICsgXCIsIFwiICsgeSArIFwiKVwiOyBfLiRzbGlkZVRyYWNrLmNzcyhwb3NpdGlvblByb3BzKSB9IGVsc2UgeyBwb3NpdGlvblByb3BzW18uYW5pbVR5cGVdID0gXCJ0cmFuc2xhdGUzZChcIiArIHggKyBcIiwgXCIgKyB5ICsgXCIsIDBweClcIjsgXy4kc2xpZGVUcmFjay5jc3MocG9zaXRpb25Qcm9wcykgfSB9IH07IFNsaWNrLnByb3RvdHlwZS5zZXREaW1lbnNpb25zID0gZnVuY3Rpb24gKCkgeyB2YXIgXyA9IHRoaXM7IGlmIChfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlKSB7IGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSkgeyBfLiRsaXN0LmNzcyh7IHBhZGRpbmc6IFwiMHB4IFwiICsgXy5vcHRpb25zLmNlbnRlclBhZGRpbmcgfSkgfSB9IGVsc2UgeyBfLiRsaXN0LmhlaWdodChfLiRzbGlkZXMuZmlyc3QoKS5vdXRlckhlaWdodCh0cnVlKSAqIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpOyBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUpIHsgXy4kbGlzdC5jc3MoeyBwYWRkaW5nOiBfLm9wdGlvbnMuY2VudGVyUGFkZGluZyArIFwiIDBweFwiIH0pIH0gfSBfLmxpc3RXaWR0aCA9IF8uJGxpc3Qud2lkdGgoKTsgXy5saXN0SGVpZ2h0ID0gXy4kbGlzdC5oZWlnaHQoKTsgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gZmFsc2UgJiYgXy5vcHRpb25zLnZhcmlhYmxlV2lkdGggPT09IGZhbHNlKSB7IF8uc2xpZGVXaWR0aCA9IE1hdGguY2VpbChfLmxpc3RXaWR0aCAvIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpOyBfLiRzbGlkZVRyYWNrLndpZHRoKE1hdGguY2VpbChfLnNsaWRlV2lkdGggKiBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKFwiLnNsaWNrLXNsaWRlXCIpLmxlbmd0aCkpIH0gZWxzZSBpZiAoXy5vcHRpb25zLnZhcmlhYmxlV2lkdGggPT09IHRydWUpIHsgXy4kc2xpZGVUcmFjay53aWR0aCg1ZTMgKiBfLnNsaWRlQ291bnQpIH0gZWxzZSB7IF8uc2xpZGVXaWR0aCA9IE1hdGguY2VpbChfLmxpc3RXaWR0aCk7IF8uJHNsaWRlVHJhY2suaGVpZ2h0KE1hdGguY2VpbChfLiRzbGlkZXMuZmlyc3QoKS5vdXRlckhlaWdodCh0cnVlKSAqIF8uJHNsaWRlVHJhY2suY2hpbGRyZW4oXCIuc2xpY2stc2xpZGVcIikubGVuZ3RoKSkgfSB2YXIgb2Zmc2V0ID0gXy4kc2xpZGVzLmZpcnN0KCkub3V0ZXJXaWR0aCh0cnVlKSAtIF8uJHNsaWRlcy5maXJzdCgpLndpZHRoKCk7IGlmIChfLm9wdGlvbnMudmFyaWFibGVXaWR0aCA9PT0gZmFsc2UpIF8uJHNsaWRlVHJhY2suY2hpbGRyZW4oXCIuc2xpY2stc2xpZGVcIikud2lkdGgoXy5zbGlkZVdpZHRoIC0gb2Zmc2V0KSB9OyBTbGljay5wcm90b3R5cGUuc2V0RmFkZSA9IGZ1bmN0aW9uICgpIHsgdmFyIF8gPSB0aGlzLCB0YXJnZXRMZWZ0OyBfLiRzbGlkZXMuZWFjaChmdW5jdGlvbiAoaW5kZXgsIGVsZW1lbnQpIHsgdGFyZ2V0TGVmdCA9IF8uc2xpZGVXaWR0aCAqIGluZGV4ICogLTE7IGlmIChfLm9wdGlvbnMucnRsID09PSB0cnVlKSB7ICQoZWxlbWVudCkuY3NzKHsgcG9zaXRpb246IFwicmVsYXRpdmVcIiwgcmlnaHQ6IHRhcmdldExlZnQsIHRvcDogMCwgekluZGV4OiBfLm9wdGlvbnMuekluZGV4IC0gMiwgb3BhY2l0eTogMCB9KSB9IGVsc2UgeyAkKGVsZW1lbnQpLmNzcyh7IHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsIGxlZnQ6IHRhcmdldExlZnQsIHRvcDogMCwgekluZGV4OiBfLm9wdGlvbnMuekluZGV4IC0gMiwgb3BhY2l0eTogMCB9KSB9IH0pOyBfLiRzbGlkZXMuZXEoXy5jdXJyZW50U2xpZGUpLmNzcyh7IHpJbmRleDogXy5vcHRpb25zLnpJbmRleCAtIDEsIG9wYWNpdHk6IDEgfSkgfTsgU2xpY2sucHJvdG90eXBlLnNldEhlaWdodCA9IGZ1bmN0aW9uICgpIHsgdmFyIF8gPSB0aGlzOyBpZiAoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyA9PT0gMSAmJiBfLm9wdGlvbnMuYWRhcHRpdmVIZWlnaHQgPT09IHRydWUgJiYgXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSkgeyB2YXIgdGFyZ2V0SGVpZ2h0ID0gXy4kc2xpZGVzLmVxKF8uY3VycmVudFNsaWRlKS5vdXRlckhlaWdodCh0cnVlKTsgXy4kbGlzdC5jc3MoXCJoZWlnaHRcIiwgdGFyZ2V0SGVpZ2h0KSB9IH07IFNsaWNrLnByb3RvdHlwZS5zZXRPcHRpb24gPSBTbGljay5wcm90b3R5cGUuc2xpY2tTZXRPcHRpb24gPSBmdW5jdGlvbiAoKSB7IHZhciBfID0gdGhpcywgbCwgaXRlbSwgb3B0aW9uLCB2YWx1ZSwgcmVmcmVzaCA9IGZhbHNlLCB0eXBlOyBpZiAoJC50eXBlKGFyZ3VtZW50c1swXSkgPT09IFwib2JqZWN0XCIpIHsgb3B0aW9uID0gYXJndW1lbnRzWzBdOyByZWZyZXNoID0gYXJndW1lbnRzWzFdOyB0eXBlID0gXCJtdWx0aXBsZVwiIH0gZWxzZSBpZiAoJC50eXBlKGFyZ3VtZW50c1swXSkgPT09IFwic3RyaW5nXCIpIHsgb3B0aW9uID0gYXJndW1lbnRzWzBdOyB2YWx1ZSA9IGFyZ3VtZW50c1sxXTsgcmVmcmVzaCA9IGFyZ3VtZW50c1syXTsgaWYgKGFyZ3VtZW50c1swXSA9PT0gXCJyZXNwb25zaXZlXCIgJiYgJC50eXBlKGFyZ3VtZW50c1sxXSkgPT09IFwiYXJyYXlcIikgeyB0eXBlID0gXCJyZXNwb25zaXZlXCIgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnRzWzFdICE9PSBcInVuZGVmaW5lZFwiKSB7IHR5cGUgPSBcInNpbmdsZVwiIH0gfSBpZiAodHlwZSA9PT0gXCJzaW5nbGVcIikgeyBfLm9wdGlvbnNbb3B0aW9uXSA9IHZhbHVlIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJtdWx0aXBsZVwiKSB7ICQuZWFjaChvcHRpb24sIGZ1bmN0aW9uIChvcHQsIHZhbCkgeyBfLm9wdGlvbnNbb3B0XSA9IHZhbCB9KSB9IGVsc2UgaWYgKHR5cGUgPT09IFwicmVzcG9uc2l2ZVwiKSB7IGZvciAoaXRlbSBpbiB2YWx1ZSkgeyBpZiAoJC50eXBlKF8ub3B0aW9ucy5yZXNwb25zaXZlKSAhPT0gXCJhcnJheVwiKSB7IF8ub3B0aW9ucy5yZXNwb25zaXZlID0gW3ZhbHVlW2l0ZW1dXSB9IGVsc2UgeyBsID0gXy5vcHRpb25zLnJlc3BvbnNpdmUubGVuZ3RoIC0gMTsgd2hpbGUgKGwgPj0gMCkgeyBpZiAoXy5vcHRpb25zLnJlc3BvbnNpdmVbbF0uYnJlYWtwb2ludCA9PT0gdmFsdWVbaXRlbV0uYnJlYWtwb2ludCkgeyBfLm9wdGlvbnMucmVzcG9uc2l2ZS5zcGxpY2UobCwgMSkgfSBsLS0gfSBfLm9wdGlvbnMucmVzcG9uc2l2ZS5wdXNoKHZhbHVlW2l0ZW1dKSB9IH0gfSBpZiAocmVmcmVzaCkgeyBfLnVubG9hZCgpOyBfLnJlaW5pdCgpIH0gfTsgU2xpY2sucHJvdG90eXBlLnNldFBvc2l0aW9uID0gZnVuY3Rpb24gKCkgeyB2YXIgXyA9IHRoaXM7IF8uc2V0RGltZW5zaW9ucygpOyBfLnNldEhlaWdodCgpOyBpZiAoXy5vcHRpb25zLmZhZGUgPT09IGZhbHNlKSB7IF8uc2V0Q1NTKF8uZ2V0TGVmdChfLmN1cnJlbnRTbGlkZSkpIH0gZWxzZSB7IF8uc2V0RmFkZSgpIH0gXy4kc2xpZGVyLnRyaWdnZXIoXCJzZXRQb3NpdGlvblwiLCBbX10pIH07IFNsaWNrLnByb3RvdHlwZS5zZXRQcm9wcyA9IGZ1bmN0aW9uICgpIHsgdmFyIF8gPSB0aGlzLCBib2R5U3R5bGUgPSBkb2N1bWVudC5ib2R5LnN0eWxlOyBfLnBvc2l0aW9uUHJvcCA9IF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gdHJ1ZSA/IFwidG9wXCIgOiBcImxlZnRcIjsgaWYgKF8ucG9zaXRpb25Qcm9wID09PSBcInRvcFwiKSB7IF8uJHNsaWRlci5hZGRDbGFzcyhcInNsaWNrLXZlcnRpY2FsXCIpIH0gZWxzZSB7IF8uJHNsaWRlci5yZW1vdmVDbGFzcyhcInNsaWNrLXZlcnRpY2FsXCIpIH0gaWYgKGJvZHlTdHlsZS5XZWJraXRUcmFuc2l0aW9uICE9PSB1bmRlZmluZWQgfHwgYm9keVN0eWxlLk1velRyYW5zaXRpb24gIT09IHVuZGVmaW5lZCB8fCBib2R5U3R5bGUubXNUcmFuc2l0aW9uICE9PSB1bmRlZmluZWQpIHsgaWYgKF8ub3B0aW9ucy51c2VDU1MgPT09IHRydWUpIHsgXy5jc3NUcmFuc2l0aW9ucyA9IHRydWUgfSB9IGlmIChfLm9wdGlvbnMuZmFkZSkgeyBpZiAodHlwZW9mIF8ub3B0aW9ucy56SW5kZXggPT09IFwibnVtYmVyXCIpIHsgaWYgKF8ub3B0aW9ucy56SW5kZXggPCAzKSB7IF8ub3B0aW9ucy56SW5kZXggPSAzIH0gfSBlbHNlIHsgXy5vcHRpb25zLnpJbmRleCA9IF8uZGVmYXVsdHMuekluZGV4IH0gfSBpZiAoYm9keVN0eWxlLk9UcmFuc2Zvcm0gIT09IHVuZGVmaW5lZCkgeyBfLmFuaW1UeXBlID0gXCJPVHJhbnNmb3JtXCI7IF8udHJhbnNmb3JtVHlwZSA9IFwiLW8tdHJhbnNmb3JtXCI7IF8udHJhbnNpdGlvblR5cGUgPSBcIk9UcmFuc2l0aW9uXCI7IGlmIChib2R5U3R5bGUucGVyc3BlY3RpdmVQcm9wZXJ0eSA9PT0gdW5kZWZpbmVkICYmIGJvZHlTdHlsZS53ZWJraXRQZXJzcGVjdGl2ZSA9PT0gdW5kZWZpbmVkKSBfLmFuaW1UeXBlID0gZmFsc2UgfSBpZiAoYm9keVN0eWxlLk1velRyYW5zZm9ybSAhPT0gdW5kZWZpbmVkKSB7IF8uYW5pbVR5cGUgPSBcIk1velRyYW5zZm9ybVwiOyBfLnRyYW5zZm9ybVR5cGUgPSBcIi1tb3otdHJhbnNmb3JtXCI7IF8udHJhbnNpdGlvblR5cGUgPSBcIk1velRyYW5zaXRpb25cIjsgaWYgKGJvZHlTdHlsZS5wZXJzcGVjdGl2ZVByb3BlcnR5ID09PSB1bmRlZmluZWQgJiYgYm9keVN0eWxlLk1velBlcnNwZWN0aXZlID09PSB1bmRlZmluZWQpIF8uYW5pbVR5cGUgPSBmYWxzZSB9IGlmIChib2R5U3R5bGUud2Via2l0VHJhbnNmb3JtICE9PSB1bmRlZmluZWQpIHsgXy5hbmltVHlwZSA9IFwid2Via2l0VHJhbnNmb3JtXCI7IF8udHJhbnNmb3JtVHlwZSA9IFwiLXdlYmtpdC10cmFuc2Zvcm1cIjsgXy50cmFuc2l0aW9uVHlwZSA9IFwid2Via2l0VHJhbnNpdGlvblwiOyBpZiAoYm9keVN0eWxlLnBlcnNwZWN0aXZlUHJvcGVydHkgPT09IHVuZGVmaW5lZCAmJiBib2R5U3R5bGUud2Via2l0UGVyc3BlY3RpdmUgPT09IHVuZGVmaW5lZCkgXy5hbmltVHlwZSA9IGZhbHNlIH0gaWYgKGJvZHlTdHlsZS5tc1RyYW5zZm9ybSAhPT0gdW5kZWZpbmVkKSB7IF8uYW5pbVR5cGUgPSBcIm1zVHJhbnNmb3JtXCI7IF8udHJhbnNmb3JtVHlwZSA9IFwiLW1zLXRyYW5zZm9ybVwiOyBfLnRyYW5zaXRpb25UeXBlID0gXCJtc1RyYW5zaXRpb25cIjsgaWYgKGJvZHlTdHlsZS5tc1RyYW5zZm9ybSA9PT0gdW5kZWZpbmVkKSBfLmFuaW1UeXBlID0gZmFsc2UgfSBpZiAoYm9keVN0eWxlLnRyYW5zZm9ybSAhPT0gdW5kZWZpbmVkICYmIF8uYW5pbVR5cGUgIT09IGZhbHNlKSB7IF8uYW5pbVR5cGUgPSBcInRyYW5zZm9ybVwiOyBfLnRyYW5zZm9ybVR5cGUgPSBcInRyYW5zZm9ybVwiOyBfLnRyYW5zaXRpb25UeXBlID0gXCJ0cmFuc2l0aW9uXCIgfSBfLnRyYW5zZm9ybXNFbmFibGVkID0gXy5vcHRpb25zLnVzZVRyYW5zZm9ybSAmJiAoXy5hbmltVHlwZSAhPT0gbnVsbCAmJiBfLmFuaW1UeXBlICE9PSBmYWxzZSkgfTsgU2xpY2sucHJvdG90eXBlLnNldFNsaWRlQ2xhc3NlcyA9IGZ1bmN0aW9uIChpbmRleCkgeyB2YXIgXyA9IHRoaXMsIGNlbnRlck9mZnNldCwgYWxsU2xpZGVzLCBpbmRleE9mZnNldCwgcmVtYWluZGVyOyBhbGxTbGlkZXMgPSBfLiRzbGlkZXIuZmluZChcIi5zbGljay1zbGlkZVwiKS5yZW1vdmVDbGFzcyhcInNsaWNrLWFjdGl2ZSBzbGljay1jZW50ZXIgc2xpY2stY3VycmVudFwiKS5hdHRyKFwiYXJpYS1oaWRkZW5cIiwgXCJ0cnVlXCIpOyBfLiRzbGlkZXMuZXEoaW5kZXgpLmFkZENsYXNzKFwic2xpY2stY3VycmVudFwiKTsgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7IHZhciBldmVuQ29lZiA9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgJSAyID09PSAwID8gMSA6IDA7IGNlbnRlck9mZnNldCA9IE1hdGguZmxvb3IoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAvIDIpOyBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSB0cnVlKSB7IGlmIChpbmRleCA+PSBjZW50ZXJPZmZzZXQgJiYgaW5kZXggPD0gXy5zbGlkZUNvdW50IC0gMSAtIGNlbnRlck9mZnNldCkgeyBfLiRzbGlkZXMuc2xpY2UoaW5kZXggLSBjZW50ZXJPZmZzZXQgKyBldmVuQ29lZiwgaW5kZXggKyBjZW50ZXJPZmZzZXQgKyAxKS5hZGRDbGFzcyhcInNsaWNrLWFjdGl2ZVwiKS5hdHRyKFwiYXJpYS1oaWRkZW5cIiwgXCJmYWxzZVwiKSB9IGVsc2UgeyBpbmRleE9mZnNldCA9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKyBpbmRleDsgYWxsU2xpZGVzLnNsaWNlKGluZGV4T2Zmc2V0IC0gY2VudGVyT2Zmc2V0ICsgMSArIGV2ZW5Db2VmLCBpbmRleE9mZnNldCArIGNlbnRlck9mZnNldCArIDIpLmFkZENsYXNzKFwic2xpY2stYWN0aXZlXCIpLmF0dHIoXCJhcmlhLWhpZGRlblwiLCBcImZhbHNlXCIpIH0gaWYgKGluZGV4ID09PSAwKSB7IGFsbFNsaWRlcy5lcShhbGxTbGlkZXMubGVuZ3RoIC0gMSAtIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpLmFkZENsYXNzKFwic2xpY2stY2VudGVyXCIpIH0gZWxzZSBpZiAoaW5kZXggPT09IF8uc2xpZGVDb3VudCAtIDEpIHsgYWxsU2xpZGVzLmVxKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpLmFkZENsYXNzKFwic2xpY2stY2VudGVyXCIpIH0gfSBfLiRzbGlkZXMuZXEoaW5kZXgpLmFkZENsYXNzKFwic2xpY2stY2VudGVyXCIpIH0gZWxzZSB7IGlmIChpbmRleCA+PSAwICYmIGluZGV4IDw9IF8uc2xpZGVDb3VudCAtIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHsgXy4kc2xpZGVzLnNsaWNlKGluZGV4LCBpbmRleCArIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpLmFkZENsYXNzKFwic2xpY2stYWN0aXZlXCIpLmF0dHIoXCJhcmlhLWhpZGRlblwiLCBcImZhbHNlXCIpIH0gZWxzZSBpZiAoYWxsU2xpZGVzLmxlbmd0aCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7IGFsbFNsaWRlcy5hZGRDbGFzcyhcInNsaWNrLWFjdGl2ZVwiKS5hdHRyKFwiYXJpYS1oaWRkZW5cIiwgXCJmYWxzZVwiKSB9IGVsc2UgeyByZW1haW5kZXIgPSBfLnNsaWRlQ291bnQgJSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93OyBpbmRleE9mZnNldCA9IF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gdHJ1ZSA/IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKyBpbmRleCA6IGluZGV4OyBpZiAoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyA9PSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgJiYgXy5zbGlkZUNvdW50IC0gaW5kZXggPCBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7IGFsbFNsaWRlcy5zbGljZShpbmRleE9mZnNldCAtIChfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC0gcmVtYWluZGVyKSwgaW5kZXhPZmZzZXQgKyByZW1haW5kZXIpLmFkZENsYXNzKFwic2xpY2stYWN0aXZlXCIpLmF0dHIoXCJhcmlhLWhpZGRlblwiLCBcImZhbHNlXCIpIH0gZWxzZSB7IGFsbFNsaWRlcy5zbGljZShpbmRleE9mZnNldCwgaW5kZXhPZmZzZXQgKyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KS5hZGRDbGFzcyhcInNsaWNrLWFjdGl2ZVwiKS5hdHRyKFwiYXJpYS1oaWRkZW5cIiwgXCJmYWxzZVwiKSB9IH0gfSBpZiAoXy5vcHRpb25zLmxhenlMb2FkID09PSBcIm9uZGVtYW5kXCIgfHwgXy5vcHRpb25zLmxhenlMb2FkID09PSBcImFudGljaXBhdGVkXCIpIHsgXy5sYXp5TG9hZCgpIH0gfTsgU2xpY2sucHJvdG90eXBlLnNldHVwSW5maW5pdGUgPSBmdW5jdGlvbiAoKSB7IHZhciBfID0gdGhpcywgaSwgc2xpZGVJbmRleCwgaW5maW5pdGVDb3VudDsgaWYgKF8ub3B0aW9ucy5mYWRlID09PSB0cnVlKSB7IF8ub3B0aW9ucy5jZW50ZXJNb2RlID0gZmFsc2UgfSBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSB0cnVlICYmIF8ub3B0aW9ucy5mYWRlID09PSBmYWxzZSkgeyBzbGlkZUluZGV4ID0gbnVsbDsgaWYgKF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHsgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7IGluZmluaXRlQ291bnQgPSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICsgMSB9IGVsc2UgeyBpbmZpbml0ZUNvdW50ID0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyB9IGZvciAoaSA9IF8uc2xpZGVDb3VudDsgaSA+IF8uc2xpZGVDb3VudCAtIGluZmluaXRlQ291bnQ7IGkgLT0gMSkgeyBzbGlkZUluZGV4ID0gaSAtIDE7ICQoXy4kc2xpZGVzW3NsaWRlSW5kZXhdKS5jbG9uZSh0cnVlKS5hdHRyKFwiaWRcIiwgXCJcIikuYXR0cihcImRhdGEtc2xpY2staW5kZXhcIiwgc2xpZGVJbmRleCAtIF8uc2xpZGVDb3VudCkucHJlcGVuZFRvKF8uJHNsaWRlVHJhY2spLmFkZENsYXNzKFwic2xpY2stY2xvbmVkXCIpIH0gZm9yIChpID0gMDsgaSA8IGluZmluaXRlQ291bnQgKyBfLnNsaWRlQ291bnQ7IGkgKz0gMSkgeyBzbGlkZUluZGV4ID0gaTsgJChfLiRzbGlkZXNbc2xpZGVJbmRleF0pLmNsb25lKHRydWUpLmF0dHIoXCJpZFwiLCBcIlwiKS5hdHRyKFwiZGF0YS1zbGljay1pbmRleFwiLCBzbGlkZUluZGV4ICsgXy5zbGlkZUNvdW50KS5hcHBlbmRUbyhfLiRzbGlkZVRyYWNrKS5hZGRDbGFzcyhcInNsaWNrLWNsb25lZFwiKSB9IF8uJHNsaWRlVHJhY2suZmluZChcIi5zbGljay1jbG9uZWRcIikuZmluZChcIltpZF1cIikuZWFjaChmdW5jdGlvbiAoKSB7ICQodGhpcykuYXR0cihcImlkXCIsIFwiXCIpIH0pIH0gfSB9OyBTbGljay5wcm90b3R5cGUuaW50ZXJydXB0ID0gZnVuY3Rpb24gKHRvZ2dsZSkgeyB2YXIgXyA9IHRoaXM7IGlmICghdG9nZ2xlKSB7IF8uYXV0b1BsYXkoKSB9IF8uaW50ZXJydXB0ZWQgPSB0b2dnbGUgfTsgU2xpY2sucHJvdG90eXBlLnNlbGVjdEhhbmRsZXIgPSBmdW5jdGlvbiAoZXZlbnQpIHsgdmFyIF8gPSB0aGlzOyB2YXIgdGFyZ2V0RWxlbWVudCA9ICQoZXZlbnQudGFyZ2V0KS5pcyhcIi5zbGljay1zbGlkZVwiKSA/ICQoZXZlbnQudGFyZ2V0KSA6ICQoZXZlbnQudGFyZ2V0KS5wYXJlbnRzKFwiLnNsaWNrLXNsaWRlXCIpOyB2YXIgaW5kZXggPSBwYXJzZUludCh0YXJnZXRFbGVtZW50LmF0dHIoXCJkYXRhLXNsaWNrLWluZGV4XCIpKTsgaWYgKCFpbmRleCkgaW5kZXggPSAwOyBpZiAoXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHsgXy5zbGlkZUhhbmRsZXIoaW5kZXgsIGZhbHNlLCB0cnVlKTsgcmV0dXJuIH0gXy5zbGlkZUhhbmRsZXIoaW5kZXgpIH07IFNsaWNrLnByb3RvdHlwZS5zbGlkZUhhbmRsZXIgPSBmdW5jdGlvbiAoaW5kZXgsIHN5bmMsIGRvbnRBbmltYXRlKSB7IHZhciB0YXJnZXRTbGlkZSwgYW5pbVNsaWRlLCBvbGRTbGlkZSwgc2xpZGVMZWZ0LCB0YXJnZXRMZWZ0ID0gbnVsbCwgXyA9IHRoaXMsIG5hdlRhcmdldDsgc3luYyA9IHN5bmMgfHwgZmFsc2U7IGlmIChfLmFuaW1hdGluZyA9PT0gdHJ1ZSAmJiBfLm9wdGlvbnMud2FpdEZvckFuaW1hdGUgPT09IHRydWUpIHsgcmV0dXJuIH0gaWYgKF8ub3B0aW9ucy5mYWRlID09PSB0cnVlICYmIF8uY3VycmVudFNsaWRlID09PSBpbmRleCkgeyByZXR1cm4gfSBpZiAoc3luYyA9PT0gZmFsc2UpIHsgXy5hc05hdkZvcihpbmRleCkgfSB0YXJnZXRTbGlkZSA9IGluZGV4OyB0YXJnZXRMZWZ0ID0gXy5nZXRMZWZ0KHRhcmdldFNsaWRlKTsgc2xpZGVMZWZ0ID0gXy5nZXRMZWZ0KF8uY3VycmVudFNsaWRlKTsgXy5jdXJyZW50TGVmdCA9IF8uc3dpcGVMZWZ0ID09PSBudWxsID8gc2xpZGVMZWZ0IDogXy5zd2lwZUxlZnQ7IGlmIChfLm9wdGlvbnMuaW5maW5pdGUgPT09IGZhbHNlICYmIF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSBmYWxzZSAmJiAoaW5kZXggPCAwIHx8IGluZGV4ID4gXy5nZXREb3RDb3VudCgpICogXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsKSkgeyBpZiAoXy5vcHRpb25zLmZhZGUgPT09IGZhbHNlKSB7IHRhcmdldFNsaWRlID0gXy5jdXJyZW50U2xpZGU7IGlmIChkb250QW5pbWF0ZSAhPT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7IF8uYW5pbWF0ZVNsaWRlKHNsaWRlTGVmdCwgZnVuY3Rpb24gKCkgeyBfLnBvc3RTbGlkZSh0YXJnZXRTbGlkZSkgfSkgfSBlbHNlIHsgXy5wb3N0U2xpZGUodGFyZ2V0U2xpZGUpIH0gfSByZXR1cm4gfSBlbHNlIGlmIChfLm9wdGlvbnMuaW5maW5pdGUgPT09IGZhbHNlICYmIF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlICYmIChpbmRleCA8IDAgfHwgaW5kZXggPiBfLnNsaWRlQ291bnQgLSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwpKSB7IGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gZmFsc2UpIHsgdGFyZ2V0U2xpZGUgPSBfLmN1cnJlbnRTbGlkZTsgaWYgKGRvbnRBbmltYXRlICE9PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHsgXy5hbmltYXRlU2xpZGUoc2xpZGVMZWZ0LCBmdW5jdGlvbiAoKSB7IF8ucG9zdFNsaWRlKHRhcmdldFNsaWRlKSB9KSB9IGVsc2UgeyBfLnBvc3RTbGlkZSh0YXJnZXRTbGlkZSkgfSB9IHJldHVybiB9IGlmIChfLm9wdGlvbnMuYXV0b3BsYXkpIHsgY2xlYXJJbnRlcnZhbChfLmF1dG9QbGF5VGltZXIpIH0gaWYgKHRhcmdldFNsaWRlIDwgMCkgeyBpZiAoXy5zbGlkZUNvdW50ICUgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsICE9PSAwKSB7IGFuaW1TbGlkZSA9IF8uc2xpZGVDb3VudCAtIF8uc2xpZGVDb3VudCAlIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCB9IGVsc2UgeyBhbmltU2xpZGUgPSBfLnNsaWRlQ291bnQgKyB0YXJnZXRTbGlkZSB9IH0gZWxzZSBpZiAodGFyZ2V0U2xpZGUgPj0gXy5zbGlkZUNvdW50KSB7IGlmIChfLnNsaWRlQ291bnQgJSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgIT09IDApIHsgYW5pbVNsaWRlID0gMCB9IGVsc2UgeyBhbmltU2xpZGUgPSB0YXJnZXRTbGlkZSAtIF8uc2xpZGVDb3VudCB9IH0gZWxzZSB7IGFuaW1TbGlkZSA9IHRhcmdldFNsaWRlIH0gXy5hbmltYXRpbmcgPSB0cnVlOyBfLiRzbGlkZXIudHJpZ2dlcihcImJlZm9yZUNoYW5nZVwiLCBbXywgXy5jdXJyZW50U2xpZGUsIGFuaW1TbGlkZV0pOyBvbGRTbGlkZSA9IF8uY3VycmVudFNsaWRlOyBfLmN1cnJlbnRTbGlkZSA9IGFuaW1TbGlkZTsgXy5zZXRTbGlkZUNsYXNzZXMoXy5jdXJyZW50U2xpZGUpOyBpZiAoXy5vcHRpb25zLmFzTmF2Rm9yKSB7IG5hdlRhcmdldCA9IF8uZ2V0TmF2VGFyZ2V0KCk7IG5hdlRhcmdldCA9IG5hdlRhcmdldC5zbGljayhcImdldFNsaWNrXCIpOyBpZiAobmF2VGFyZ2V0LnNsaWRlQ291bnQgPD0gbmF2VGFyZ2V0Lm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7IG5hdlRhcmdldC5zZXRTbGlkZUNsYXNzZXMoXy5jdXJyZW50U2xpZGUpIH0gfSBfLnVwZGF0ZURvdHMoKTsgXy51cGRhdGVBcnJvd3MoKTsgaWYgKF8ub3B0aW9ucy5mYWRlID09PSB0cnVlKSB7IGlmIChkb250QW5pbWF0ZSAhPT0gdHJ1ZSkgeyBfLmZhZGVTbGlkZU91dChvbGRTbGlkZSk7IF8uZmFkZVNsaWRlKGFuaW1TbGlkZSwgZnVuY3Rpb24gKCkgeyBfLnBvc3RTbGlkZShhbmltU2xpZGUpIH0pIH0gZWxzZSB7IF8ucG9zdFNsaWRlKGFuaW1TbGlkZSkgfSBfLmFuaW1hdGVIZWlnaHQoKTsgcmV0dXJuIH0gaWYgKGRvbnRBbmltYXRlICE9PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHsgXy5hbmltYXRlU2xpZGUodGFyZ2V0TGVmdCwgZnVuY3Rpb24gKCkgeyBfLnBvc3RTbGlkZShhbmltU2xpZGUpIH0pIH0gZWxzZSB7IF8ucG9zdFNsaWRlKGFuaW1TbGlkZSkgfSB9OyBTbGljay5wcm90b3R5cGUuc3RhcnRMb2FkID0gZnVuY3Rpb24gKCkgeyB2YXIgXyA9IHRoaXM7IGlmIChfLm9wdGlvbnMuYXJyb3dzID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHsgXy4kcHJldkFycm93LmhpZGUoKTsgXy4kbmV4dEFycm93LmhpZGUoKSB9IGlmIChfLm9wdGlvbnMuZG90cyA9PT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7IF8uJGRvdHMuaGlkZSgpIH0gXy4kc2xpZGVyLmFkZENsYXNzKFwic2xpY2stbG9hZGluZ1wiKSB9OyBTbGljay5wcm90b3R5cGUuc3dpcGVEaXJlY3Rpb24gPSBmdW5jdGlvbiAoKSB7IHZhciB4RGlzdCwgeURpc3QsIHIsIHN3aXBlQW5nbGUsIF8gPSB0aGlzOyB4RGlzdCA9IF8udG91Y2hPYmplY3Quc3RhcnRYIC0gXy50b3VjaE9iamVjdC5jdXJYOyB5RGlzdCA9IF8udG91Y2hPYmplY3Quc3RhcnRZIC0gXy50b3VjaE9iamVjdC5jdXJZOyByID0gTWF0aC5hdGFuMih5RGlzdCwgeERpc3QpOyBzd2lwZUFuZ2xlID0gTWF0aC5yb3VuZChyICogMTgwIC8gTWF0aC5QSSk7IGlmIChzd2lwZUFuZ2xlIDwgMCkgeyBzd2lwZUFuZ2xlID0gMzYwIC0gTWF0aC5hYnMoc3dpcGVBbmdsZSkgfSBpZiAoc3dpcGVBbmdsZSA8PSA0NSAmJiBzd2lwZUFuZ2xlID49IDApIHsgcmV0dXJuIF8ub3B0aW9ucy5ydGwgPT09IGZhbHNlID8gXCJsZWZ0XCIgOiBcInJpZ2h0XCIgfSBpZiAoc3dpcGVBbmdsZSA8PSAzNjAgJiYgc3dpcGVBbmdsZSA+PSAzMTUpIHsgcmV0dXJuIF8ub3B0aW9ucy5ydGwgPT09IGZhbHNlID8gXCJsZWZ0XCIgOiBcInJpZ2h0XCIgfSBpZiAoc3dpcGVBbmdsZSA+PSAxMzUgJiYgc3dpcGVBbmdsZSA8PSAyMjUpIHsgcmV0dXJuIF8ub3B0aW9ucy5ydGwgPT09IGZhbHNlID8gXCJyaWdodFwiIDogXCJsZWZ0XCIgfSBpZiAoXy5vcHRpb25zLnZlcnRpY2FsU3dpcGluZyA9PT0gdHJ1ZSkgeyBpZiAoc3dpcGVBbmdsZSA+PSAzNSAmJiBzd2lwZUFuZ2xlIDw9IDEzNSkgeyByZXR1cm4gXCJkb3duXCIgfSBlbHNlIHsgcmV0dXJuIFwidXBcIiB9IH0gcmV0dXJuIFwidmVydGljYWxcIiB9OyBTbGljay5wcm90b3R5cGUuc3dpcGVFbmQgPSBmdW5jdGlvbiAoZXZlbnQpIHsgdmFyIF8gPSB0aGlzLCBzbGlkZUNvdW50LCBkaXJlY3Rpb247IF8uZHJhZ2dpbmcgPSBmYWxzZTsgXy5zd2lwaW5nID0gZmFsc2U7IGlmIChfLnNjcm9sbGluZykgeyBfLnNjcm9sbGluZyA9IGZhbHNlOyByZXR1cm4gZmFsc2UgfSBfLmludGVycnVwdGVkID0gZmFsc2U7IF8uc2hvdWxkQ2xpY2sgPSBfLnRvdWNoT2JqZWN0LnN3aXBlTGVuZ3RoID4gMTAgPyBmYWxzZSA6IHRydWU7IGlmIChfLnRvdWNoT2JqZWN0LmN1clggPT09IHVuZGVmaW5lZCkgeyByZXR1cm4gZmFsc2UgfSBpZiAoXy50b3VjaE9iamVjdC5lZGdlSGl0ID09PSB0cnVlKSB7IF8uJHNsaWRlci50cmlnZ2VyKFwiZWRnZVwiLCBbXywgXy5zd2lwZURpcmVjdGlvbigpXSkgfSBpZiAoXy50b3VjaE9iamVjdC5zd2lwZUxlbmd0aCA+PSBfLnRvdWNoT2JqZWN0Lm1pblN3aXBlKSB7IGRpcmVjdGlvbiA9IF8uc3dpcGVEaXJlY3Rpb24oKTsgc3dpdGNoIChkaXJlY3Rpb24pIHsgY2FzZSBcImxlZnRcIjogY2FzZSBcImRvd25cIjogc2xpZGVDb3VudCA9IF8ub3B0aW9ucy5zd2lwZVRvU2xpZGUgPyBfLmNoZWNrTmF2aWdhYmxlKF8uY3VycmVudFNsaWRlICsgXy5nZXRTbGlkZUNvdW50KCkpIDogXy5jdXJyZW50U2xpZGUgKyBfLmdldFNsaWRlQ291bnQoKTsgXy5jdXJyZW50RGlyZWN0aW9uID0gMDsgYnJlYWs7IGNhc2UgXCJyaWdodFwiOiBjYXNlIFwidXBcIjogc2xpZGVDb3VudCA9IF8ub3B0aW9ucy5zd2lwZVRvU2xpZGUgPyBfLmNoZWNrTmF2aWdhYmxlKF8uY3VycmVudFNsaWRlIC0gXy5nZXRTbGlkZUNvdW50KCkpIDogXy5jdXJyZW50U2xpZGUgLSBfLmdldFNsaWRlQ291bnQoKTsgXy5jdXJyZW50RGlyZWN0aW9uID0gMTsgYnJlYWs7IGRlZmF1bHQ6IH1pZiAoZGlyZWN0aW9uICE9IFwidmVydGljYWxcIikgeyBfLnNsaWRlSGFuZGxlcihzbGlkZUNvdW50KTsgXy50b3VjaE9iamVjdCA9IHt9OyBfLiRzbGlkZXIudHJpZ2dlcihcInN3aXBlXCIsIFtfLCBkaXJlY3Rpb25dKSB9IH0gZWxzZSB7IGlmIChfLnRvdWNoT2JqZWN0LnN0YXJ0WCAhPT0gXy50b3VjaE9iamVjdC5jdXJYKSB7IF8uc2xpZGVIYW5kbGVyKF8uY3VycmVudFNsaWRlKTsgXy50b3VjaE9iamVjdCA9IHt9IH0gfSB9OyBTbGljay5wcm90b3R5cGUuc3dpcGVIYW5kbGVyID0gZnVuY3Rpb24gKGV2ZW50KSB7IHZhciBfID0gdGhpczsgaWYgKF8ub3B0aW9ucy5zd2lwZSA9PT0gZmFsc2UgfHwgXCJvbnRvdWNoZW5kXCIgaW4gZG9jdW1lbnQgJiYgXy5vcHRpb25zLnN3aXBlID09PSBmYWxzZSkgeyByZXR1cm4gfSBlbHNlIGlmIChfLm9wdGlvbnMuZHJhZ2dhYmxlID09PSBmYWxzZSAmJiBldmVudC50eXBlLmluZGV4T2YoXCJtb3VzZVwiKSAhPT0gLTEpIHsgcmV0dXJuIH0gXy50b3VjaE9iamVjdC5maW5nZXJDb3VudCA9IGV2ZW50Lm9yaWdpbmFsRXZlbnQgJiYgZXZlbnQub3JpZ2luYWxFdmVudC50b3VjaGVzICE9PSB1bmRlZmluZWQgPyBldmVudC5vcmlnaW5hbEV2ZW50LnRvdWNoZXMubGVuZ3RoIDogMTsgXy50b3VjaE9iamVjdC5taW5Td2lwZSA9IF8ubGlzdFdpZHRoIC8gXy5vcHRpb25zLnRvdWNoVGhyZXNob2xkOyBpZiAoXy5vcHRpb25zLnZlcnRpY2FsU3dpcGluZyA9PT0gdHJ1ZSkgeyBfLnRvdWNoT2JqZWN0Lm1pblN3aXBlID0gXy5saXN0SGVpZ2h0IC8gXy5vcHRpb25zLnRvdWNoVGhyZXNob2xkIH0gc3dpdGNoIChldmVudC5kYXRhLmFjdGlvbikgeyBjYXNlIFwic3RhcnRcIjogXy5zd2lwZVN0YXJ0KGV2ZW50KTsgYnJlYWs7IGNhc2UgXCJtb3ZlXCI6IF8uc3dpcGVNb3ZlKGV2ZW50KTsgYnJlYWs7IGNhc2UgXCJlbmRcIjogXy5zd2lwZUVuZChldmVudCk7IGJyZWFrIH0gfTsgU2xpY2sucHJvdG90eXBlLnN3aXBlTW92ZSA9IGZ1bmN0aW9uIChldmVudCkgeyB2YXIgXyA9IHRoaXMsIGVkZ2VXYXNIaXQgPSBmYWxzZSwgY3VyTGVmdCwgc3dpcGVEaXJlY3Rpb24sIHN3aXBlTGVuZ3RoLCBwb3NpdGlvbk9mZnNldCwgdG91Y2hlcywgdmVydGljYWxTd2lwZUxlbmd0aDsgdG91Y2hlcyA9IGV2ZW50Lm9yaWdpbmFsRXZlbnQgIT09IHVuZGVmaW5lZCA/IGV2ZW50Lm9yaWdpbmFsRXZlbnQudG91Y2hlcyA6IG51bGw7IGlmICghXy5kcmFnZ2luZyB8fCBfLnNjcm9sbGluZyB8fCB0b3VjaGVzICYmIHRvdWNoZXMubGVuZ3RoICE9PSAxKSB7IHJldHVybiBmYWxzZSB9IGN1ckxlZnQgPSBfLmdldExlZnQoXy5jdXJyZW50U2xpZGUpOyBfLnRvdWNoT2JqZWN0LmN1clggPSB0b3VjaGVzICE9PSB1bmRlZmluZWQgPyB0b3VjaGVzWzBdLnBhZ2VYIDogZXZlbnQuY2xpZW50WDsgXy50b3VjaE9iamVjdC5jdXJZID0gdG91Y2hlcyAhPT0gdW5kZWZpbmVkID8gdG91Y2hlc1swXS5wYWdlWSA6IGV2ZW50LmNsaWVudFk7IF8udG91Y2hPYmplY3Quc3dpcGVMZW5ndGggPSBNYXRoLnJvdW5kKE1hdGguc3FydChNYXRoLnBvdyhfLnRvdWNoT2JqZWN0LmN1clggLSBfLnRvdWNoT2JqZWN0LnN0YXJ0WCwgMikpKTsgdmVydGljYWxTd2lwZUxlbmd0aCA9IE1hdGgucm91bmQoTWF0aC5zcXJ0KE1hdGgucG93KF8udG91Y2hPYmplY3QuY3VyWSAtIF8udG91Y2hPYmplY3Quc3RhcnRZLCAyKSkpOyBpZiAoIV8ub3B0aW9ucy52ZXJ0aWNhbFN3aXBpbmcgJiYgIV8uc3dpcGluZyAmJiB2ZXJ0aWNhbFN3aXBlTGVuZ3RoID4gNCkgeyBfLnNjcm9sbGluZyA9IHRydWU7IHJldHVybiBmYWxzZSB9IGlmIChfLm9wdGlvbnMudmVydGljYWxTd2lwaW5nID09PSB0cnVlKSB7IF8udG91Y2hPYmplY3Quc3dpcGVMZW5ndGggPSB2ZXJ0aWNhbFN3aXBlTGVuZ3RoIH0gc3dpcGVEaXJlY3Rpb24gPSBfLnN3aXBlRGlyZWN0aW9uKCk7IGlmIChldmVudC5vcmlnaW5hbEV2ZW50ICE9PSB1bmRlZmluZWQgJiYgXy50b3VjaE9iamVjdC5zd2lwZUxlbmd0aCA+IDQpIHsgXy5zd2lwaW5nID0gdHJ1ZTsgZXZlbnQucHJldmVudERlZmF1bHQoKSB9IHBvc2l0aW9uT2Zmc2V0ID0gKF8ub3B0aW9ucy5ydGwgPT09IGZhbHNlID8gMSA6IC0xKSAqIChfLnRvdWNoT2JqZWN0LmN1clggPiBfLnRvdWNoT2JqZWN0LnN0YXJ0WCA/IDEgOiAtMSk7IGlmIChfLm9wdGlvbnMudmVydGljYWxTd2lwaW5nID09PSB0cnVlKSB7IHBvc2l0aW9uT2Zmc2V0ID0gXy50b3VjaE9iamVjdC5jdXJZID4gXy50b3VjaE9iamVjdC5zdGFydFkgPyAxIDogLTEgfSBzd2lwZUxlbmd0aCA9IF8udG91Y2hPYmplY3Quc3dpcGVMZW5ndGg7IF8udG91Y2hPYmplY3QuZWRnZUhpdCA9IGZhbHNlOyBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSBmYWxzZSkgeyBpZiAoXy5jdXJyZW50U2xpZGUgPT09IDAgJiYgc3dpcGVEaXJlY3Rpb24gPT09IFwicmlnaHRcIiB8fCBfLmN1cnJlbnRTbGlkZSA+PSBfLmdldERvdENvdW50KCkgJiYgc3dpcGVEaXJlY3Rpb24gPT09IFwibGVmdFwiKSB7IHN3aXBlTGVuZ3RoID0gXy50b3VjaE9iamVjdC5zd2lwZUxlbmd0aCAqIF8ub3B0aW9ucy5lZGdlRnJpY3Rpb247IF8udG91Y2hPYmplY3QuZWRnZUhpdCA9IHRydWUgfSB9IGlmIChfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlKSB7IF8uc3dpcGVMZWZ0ID0gY3VyTGVmdCArIHN3aXBlTGVuZ3RoICogcG9zaXRpb25PZmZzZXQgfSBlbHNlIHsgXy5zd2lwZUxlZnQgPSBjdXJMZWZ0ICsgc3dpcGVMZW5ndGggKiAoXy4kbGlzdC5oZWlnaHQoKSAvIF8ubGlzdFdpZHRoKSAqIHBvc2l0aW9uT2Zmc2V0IH0gaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbFN3aXBpbmcgPT09IHRydWUpIHsgXy5zd2lwZUxlZnQgPSBjdXJMZWZ0ICsgc3dpcGVMZW5ndGggKiBwb3NpdGlvbk9mZnNldCB9IGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gdHJ1ZSB8fCBfLm9wdGlvbnMudG91Y2hNb3ZlID09PSBmYWxzZSkgeyByZXR1cm4gZmFsc2UgfSBpZiAoXy5hbmltYXRpbmcgPT09IHRydWUpIHsgXy5zd2lwZUxlZnQgPSBudWxsOyByZXR1cm4gZmFsc2UgfSBfLnNldENTUyhfLnN3aXBlTGVmdCkgfTsgU2xpY2sucHJvdG90eXBlLnN3aXBlU3RhcnQgPSBmdW5jdGlvbiAoZXZlbnQpIHsgdmFyIF8gPSB0aGlzLCB0b3VjaGVzOyBfLmludGVycnVwdGVkID0gdHJ1ZTsgaWYgKF8udG91Y2hPYmplY3QuZmluZ2VyQ291bnQgIT09IDEgfHwgXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHsgXy50b3VjaE9iamVjdCA9IHt9OyByZXR1cm4gZmFsc2UgfSBpZiAoZXZlbnQub3JpZ2luYWxFdmVudCAhPT0gdW5kZWZpbmVkICYmIGV2ZW50Lm9yaWdpbmFsRXZlbnQudG91Y2hlcyAhPT0gdW5kZWZpbmVkKSB7IHRvdWNoZXMgPSBldmVudC5vcmlnaW5hbEV2ZW50LnRvdWNoZXNbMF0gfSBfLnRvdWNoT2JqZWN0LnN0YXJ0WCA9IF8udG91Y2hPYmplY3QuY3VyWCA9IHRvdWNoZXMgIT09IHVuZGVmaW5lZCA/IHRvdWNoZXMucGFnZVggOiBldmVudC5jbGllbnRYOyBfLnRvdWNoT2JqZWN0LnN0YXJ0WSA9IF8udG91Y2hPYmplY3QuY3VyWSA9IHRvdWNoZXMgIT09IHVuZGVmaW5lZCA/IHRvdWNoZXMucGFnZVkgOiBldmVudC5jbGllbnRZOyBfLmRyYWdnaW5nID0gdHJ1ZSB9OyBTbGljay5wcm90b3R5cGUudW5maWx0ZXJTbGlkZXMgPSBTbGljay5wcm90b3R5cGUuc2xpY2tVbmZpbHRlciA9IGZ1bmN0aW9uICgpIHsgdmFyIF8gPSB0aGlzOyBpZiAoXy4kc2xpZGVzQ2FjaGUgIT09IG51bGwpIHsgXy51bmxvYWQoKTsgXy4kc2xpZGVUcmFjay5jaGlsZHJlbih0aGlzLm9wdGlvbnMuc2xpZGUpLmRldGFjaCgpOyBfLiRzbGlkZXNDYWNoZS5hcHBlbmRUbyhfLiRzbGlkZVRyYWNrKTsgXy5yZWluaXQoKSB9IH07IFNsaWNrLnByb3RvdHlwZS51bmxvYWQgPSBmdW5jdGlvbiAoKSB7IHZhciBfID0gdGhpczsgJChcIi5zbGljay1jbG9uZWRcIiwgXy4kc2xpZGVyKS5yZW1vdmUoKTsgaWYgKF8uJGRvdHMpIHsgXy4kZG90cy5yZW1vdmUoKSB9IGlmIChfLiRwcmV2QXJyb3cgJiYgXy5odG1sRXhwci50ZXN0KF8ub3B0aW9ucy5wcmV2QXJyb3cpKSB7IF8uJHByZXZBcnJvdy5yZW1vdmUoKSB9IGlmIChfLiRuZXh0QXJyb3cgJiYgXy5odG1sRXhwci50ZXN0KF8ub3B0aW9ucy5uZXh0QXJyb3cpKSB7IF8uJG5leHRBcnJvdy5yZW1vdmUoKSB9IF8uJHNsaWRlcy5yZW1vdmVDbGFzcyhcInNsaWNrLXNsaWRlIHNsaWNrLWFjdGl2ZSBzbGljay12aXNpYmxlIHNsaWNrLWN1cnJlbnRcIikuYXR0cihcImFyaWEtaGlkZGVuXCIsIFwidHJ1ZVwiKS5jc3MoXCJ3aWR0aFwiLCBcIlwiKSB9OyBTbGljay5wcm90b3R5cGUudW5zbGljayA9IGZ1bmN0aW9uIChmcm9tQnJlYWtwb2ludCkgeyB2YXIgXyA9IHRoaXM7IF8uJHNsaWRlci50cmlnZ2VyKFwidW5zbGlja1wiLCBbXywgZnJvbUJyZWFrcG9pbnRdKTsgXy5kZXN0cm95KCkgfTsgU2xpY2sucHJvdG90eXBlLnVwZGF0ZUFycm93cyA9IGZ1bmN0aW9uICgpIHsgdmFyIF8gPSB0aGlzLCBjZW50ZXJPZmZzZXQ7IGNlbnRlck9mZnNldCA9IE1hdGguZmxvb3IoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAvIDIpOyBpZiAoXy5vcHRpb25zLmFycm93cyA9PT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICYmICFfLm9wdGlvbnMuaW5maW5pdGUpIHsgXy4kcHJldkFycm93LnJlbW92ZUNsYXNzKFwic2xpY2stZGlzYWJsZWRcIikuYXR0cihcImFyaWEtZGlzYWJsZWRcIiwgXCJmYWxzZVwiKTsgXy4kbmV4dEFycm93LnJlbW92ZUNsYXNzKFwic2xpY2stZGlzYWJsZWRcIikuYXR0cihcImFyaWEtZGlzYWJsZWRcIiwgXCJmYWxzZVwiKTsgaWYgKF8uY3VycmVudFNsaWRlID09PSAwKSB7IF8uJHByZXZBcnJvdy5hZGRDbGFzcyhcInNsaWNrLWRpc2FibGVkXCIpLmF0dHIoXCJhcmlhLWRpc2FibGVkXCIsIFwidHJ1ZVwiKTsgXy4kbmV4dEFycm93LnJlbW92ZUNsYXNzKFwic2xpY2stZGlzYWJsZWRcIikuYXR0cihcImFyaWEtZGlzYWJsZWRcIiwgXCJmYWxzZVwiKSB9IGVsc2UgaWYgKF8uY3VycmVudFNsaWRlID49IF8uc2xpZGVDb3VudCAtIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgJiYgXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IGZhbHNlKSB7IF8uJG5leHRBcnJvdy5hZGRDbGFzcyhcInNsaWNrLWRpc2FibGVkXCIpLmF0dHIoXCJhcmlhLWRpc2FibGVkXCIsIFwidHJ1ZVwiKTsgXy4kcHJldkFycm93LnJlbW92ZUNsYXNzKFwic2xpY2stZGlzYWJsZWRcIikuYXR0cihcImFyaWEtZGlzYWJsZWRcIiwgXCJmYWxzZVwiKSB9IGVsc2UgaWYgKF8uY3VycmVudFNsaWRlID49IF8uc2xpZGVDb3VudCAtIDEgJiYgXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUpIHsgXy4kbmV4dEFycm93LmFkZENsYXNzKFwic2xpY2stZGlzYWJsZWRcIikuYXR0cihcImFyaWEtZGlzYWJsZWRcIiwgXCJ0cnVlXCIpOyBfLiRwcmV2QXJyb3cucmVtb3ZlQ2xhc3MoXCJzbGljay1kaXNhYmxlZFwiKS5hdHRyKFwiYXJpYS1kaXNhYmxlZFwiLCBcImZhbHNlXCIpIH0gfSB9OyBTbGljay5wcm90b3R5cGUudXBkYXRlRG90cyA9IGZ1bmN0aW9uICgpIHsgdmFyIF8gPSB0aGlzOyBpZiAoXy4kZG90cyAhPT0gbnVsbCkgeyBfLiRkb3RzLmZpbmQoXCJsaVwiKS5yZW1vdmVDbGFzcyhcInNsaWNrLWFjdGl2ZVwiKS5lbmQoKTsgXy4kZG90cy5maW5kKFwibGlcIikuZXEoTWF0aC5mbG9vcihfLmN1cnJlbnRTbGlkZSAvIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCkpLmFkZENsYXNzKFwic2xpY2stYWN0aXZlXCIpIH0gfTsgU2xpY2sucHJvdG90eXBlLnZpc2liaWxpdHkgPSBmdW5jdGlvbiAoKSB7IHZhciBfID0gdGhpczsgaWYgKF8ub3B0aW9ucy5hdXRvcGxheSkgeyBpZiAoZG9jdW1lbnRbXy5oaWRkZW5dKSB7IF8uaW50ZXJydXB0ZWQgPSB0cnVlIH0gZWxzZSB7IF8uaW50ZXJydXB0ZWQgPSBmYWxzZSB9IH0gfTsgJC5mbi5zbGljayA9IGZ1bmN0aW9uICgpIHsgdmFyIF8gPSB0aGlzLCBvcHQgPSBhcmd1bWVudHNbMF0sIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpLCBsID0gXy5sZW5ndGgsIGksIHJldDsgZm9yIChpID0gMDsgaSA8IGw7IGkrKykgeyBpZiAodHlwZW9mIG9wdCA9PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBvcHQgPT0gXCJ1bmRlZmluZWRcIikgX1tpXS5zbGljayA9IG5ldyBTbGljayhfW2ldLCBvcHQpOyBlbHNlIHJldCA9IF9baV0uc2xpY2tbb3B0XS5hcHBseShfW2ldLnNsaWNrLCBhcmdzKTsgaWYgKHR5cGVvZiByZXQgIT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuIHJldCB9IHJldHVybiBfIH0gfSk7Il0sInNvdXJjZVJvb3QiOiIifQ==