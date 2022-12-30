$('.single-item').slick({
  dots: false,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
});

$('.responsive').slick({
    dots: false,
    infinite: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 9999,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2.7,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2.1,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1.7,
          slidesToScroll: 1
        }
      }, 
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 416,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
          