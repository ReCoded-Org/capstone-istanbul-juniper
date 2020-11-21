// React-Slider customised settings
export const settings = {
  infinite: false,
  slidesToShow: 3,
  arrow: false,
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};
