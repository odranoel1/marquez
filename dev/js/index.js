$( document ).ready(function() {

    $( '#home-sidebar' ).sliderPro({
        width: '100%',
        height: 600,
        arrows: false,
        buttons: true,
        autoplay: true,
        autoplayDelay: 8000,
        autoScaleLayers: false,
        touchSwipe: false,
        fade: true,
        breakpoints: {
            360: {
                height: 500
            },
            640: {
                height: 300
            }
        }
    });

    if($(".sidebars").length != 0)
    {
        var sides = ["left", "top", "right", "bottom"];

        for (var i = 0; i < sides.length; ++i) {
            var cSide = sides[i];
            $(".sidebar." + cSide).sidebar({side: cSide});
        }

        $(".sidebar-btn[data-action]").on("click", function () {
            var $this = $(this);
            var action = $this.attr("data-action");
            var side = $this.attr("data-side");
            $(".sidebar." + side).trigger("sidebar:" + action);
            return false;
        });
    }

    $('#products-carousel').owlCarousel({
      nav: true,
      loop: true,
      dots: false,
      responsive :{
        0: {
          items: 1,
          dots: true,
          nav: false
        },
        768: {
          items: 1
        },
        1024: {
          items: 3
        }
      }
    });
    $( ".owl-prev").html('<i class="fas fa-chevron-left"></i>');
    $( ".owl-next").html('<i class="fas fa-chevron-right"></i>');

    $('#drop').click(function(){
      $('#drop-menu').slideToggle('medium', function(){

      });
    });

    $('.zoom').magnify();

    $(window).scroll(function(){

      var heightMenu = $('.header-secondary').outerHeight(true);

      if($(this).scrollTop() > 0) {
        $('.header-secondary').addClass('d-none');
        $('.header-main').removeClass('d-none').addClass('fixed');
        $('.slider-pro').css('margin-top', (heightMenu) + 'px');

        $('.Header').addClass('fixed');
      } else {
        $('.header-secondary').removeClass('d-none');
        $('.header-main').addClass('d-none');
        $('.slider-pro').css('margin-top', '0');

        $('.Header').removeClass('fixed');
      }
    });

});
