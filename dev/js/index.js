$( document ).ready(function() {

    $( '#home-sidebar' ).sliderPro({
        width: '100%',
        height: 630,
        arrows: false,
        buttons: true,
        autoplay: false,
        autoplayDelay: 8000,
        autoScaleLayers: false,
        touchSwipe: false,
        fade: true,
        breakpoints: {
            640: {
                height: 500
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
        480: {
          items: 2,
          dots: true,
          nav: false
        },
        768: {
          items: 3,
          dots: false,
          nav: true
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

    // $('.Header.home')[0].addEventListener('animationend', function() {
    //      $('.Header.home').toggleClass('show');
    //      $('.Header.home').toggleClass('hide');
    // })

    $(window).scroll(function(){

      if($(this).scrollTop() > 63){
        // $('.container').css('margin-top', (heightMenu) + 'px');
        $('.main').removeClass('fadeOut').addClass('fadeIn');
      } else {
        $('.container').css('margin-top', 0);
        $('.main').removeClass('fadeIn').addClass('fadeOut');
      }

      if($(this).scrollTop() == 0) {
        $('.Header.home').addClass('cshow').removeClass('chide');
      }

      if($(this).scrollTop() > 63 ) {
        $('.Header.home').removeClass('cshow').addClass('chide');
      }

    });

   $(".img-detail-link").click( function(e) {
      e.preventDefault();
      var src = $(this).attr('href');
      $(".img-detail").attr('src',src);

      $(".img-zoom").attr('href',src);
      $(".img-detail").magnify();
   });

});
