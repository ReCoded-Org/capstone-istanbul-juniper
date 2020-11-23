// React-Slider customised settings
export const settings = {
  infinite: true,
  slidesToShow: 3,
  speed: 500,
  arrow: true,
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
