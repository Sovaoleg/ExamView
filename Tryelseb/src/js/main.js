//= ../../bower_components/jquery/dist/jquery.js
//= https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js




///Phone-menu
$("#phone-btn").click(function () {
  $(".phone-btn").toggleClass("active");
  $(".main-menu").toggleClass("active");
  $(".main-menu__link ").click(function () {
    $(".phone-btn").removeClass("active");
    $(".main-menu").removeClass("active");
  });
});



//////////SLIDER
var pointDestroy = 529;
var ct = 1;
slickVar = {
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 3000,
  arrows: false,
  centerMode: false,
  draggable: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1000,
      settings: { slidesToShow: 3 }
    },
    {
      breakpoint: 700,
      settings: { slidesToShow: 2 }
    },
    {
      breakpoint: 529,
      settings: "unslick"
    }
  ]
}
// Ne znanije js-a mne ne pomecha po etomy smotri etot yjasnuj kod i plach
$('.sl').slick(slickVar);
// console.log(ct);
$(window).on('resize', function () {
  var width = $(window).width();
  if (width > pointDestroy && ct == 0) {
    $('.sl').slick(slickVar);
    ct = 1;
    // console.log(ct);
  } else {
    if (width < pointDestroy) {
      ct = 0;
      // console.log(ct);
    }
  }
});

//---------END Slider

/////////SCROLL
function moveToSection(event) {
  event.preventDefault();

  var target = $(event.target).attr('href');
  var offsetTop = $(target).offset().top;

  $('html, body').animate({
    scrollTop: offsetTop,
  }, 500);
}

$(".smoothScroll").on('click', moveToSection);
//---------END SCROLL


// Fixed menu
jQuery("document").ready(function ($) {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 20) {
      $('.main-header').addClass('fixed');
      $('.main-content').addClass('fixed');
    } else {
      $('.main-header').removeClass('fixed');
      $('.main-content').removeClass('fixed');
    }
  });

});

//5563


///MAp
function initMap() {
  var element = document.getElementsByClassName('main-map')[0];
  var options = {
    zoom: 14,
    scrollwheel: false,
    center: { lat: 51.7494953, lng: 0.0663545 }
  };

  var map = new google.maps.Map(element, options);
  var marker = new google.maps.Marker({
    position: { lat: 51.7494953, lng: 0.0663545 },
    map: map
  });

}



$(".map-icon").click(function () {
  initMap();
  if ($(".main-map").css('display') == 'none') {
    $(".main-map").animate({ height: 'show' }, 500);
  }
  else {
    $(".main-map").animate({ height: 'hide' }, 500);
  }
  $("html, body").scrollTop(document.documentElement.scrollHeight - document.documentElement.clientHeight);
});


window.onscroll = () => {
  if (window.pageYOffset >= document.documentElement.scrollHeight - document.documentElement.clientHeight - 100) {
    $(".map-icon").show(500);
  } else {
    $(".map-icon").hide(500);
  }
}