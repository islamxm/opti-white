import { Fancybox, Carousel, Panzoom } from "@fancyapps/ui";

const productSlider = () => {
  const mc = document.querySelector("#mainCarousel");
  const tc = document.querySelector("#thumbCarousel");

  if(mc || (mc && tc)) {
    const mainCarousel = new Carousel(mc, {
      Dots: false,
    });
    const thumbCarousel = new Carousel(tc, {
      Sync: {
        target: mainCarousel,
        friction: 0,
      },
      Dots: false,
      Navigation: false,
      center: true,
      slidesPerPage: 1,
      infinite: false,
    });
  }

  
    

      

      Fancybox.bind('[data-fancybox="gallery"]', {
        Carousel: {
          on: {
            change: (that) => {
              mainCarousel.slideTo(mainCarousel.findPageForSlide(that.page), {
                friction: 0,
              });
            },
          },
        },
      });
}

export default productSlider;