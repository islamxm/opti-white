import {Fancybox, Carousel} from '@fancyapps/ui';

const aboutGallery = () => {
    const ff = Fancybox.bind('[data-fancybox="about-gallery"]', {
        dragToClose: false,
        Toolbar: false,
        closeButton: "top",
      
        Image: {
          zoom: false,
        },
      
        on: {
          initCarousel: (fancybox) => {
            const slide = fancybox.Carousel.slides[fancybox.Carousel.page];
      
            fancybox.$container.style.setProperty(
              "--bg-image",
              `url("${slide.$thumb.src}")`
            );
          },
          "Carousel.change": (fancybox, carousel, to, from) => {
            const slide = carousel.slides[to];
      
            fancybox.$container.style.setProperty(
              "--bg-image",
              `url("${slide.$thumb.src}")`
            );
          },
        },
      });
}

export default aboutGallery;