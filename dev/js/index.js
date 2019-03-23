$( document ).ready(function() {

    $( '#home-sidebar' ).sliderPro({
        width: '100%',
        height: 300,
        arrows: true,
        buttons: false,
        waitForLayers: true,
        autoplay: true,
        autoplayDelay: 8000,
        autoScaleLayers: false,
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
      dots: false
    });
});
