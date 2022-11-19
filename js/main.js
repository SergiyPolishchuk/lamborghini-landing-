$(function () {

    $('.video__btn-img').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});

    $('.blog-slider__item').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 601,
                settings: {
                    slidesToShow: 1
                }
            },
        ]
      });

      $('.menu__btn').on('click', function(){
        $('.nav__list').toggleClass('active');
    });

});