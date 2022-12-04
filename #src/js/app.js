import * as flsFuncs from './modules/functions.js';
import burger from './modules/burger.js';
import sidebar from './modules/sidebar.js';
import productSlider from './modules/productSlider.js';
import aboutGallery from './modules/aboutGallery.js';
import objGallery from './modules/objGallery.js';

const gradToggle = () => {
    if(window.innerWidth < 1200) {
        document.body.classList.add('grad')
    } else {
        document.body.classList.remove('grad')
    }
}

const headerBgToggle = () => {
    const header = document.querySelector('.header')

    if(document.documentElement.scrollTop > 20) {
        header.classList.add('bg-toggle')
    } else {
        header.classList.remove('bg-toggle')
    }
}

document.addEventListener('DOMContentLoaded', () => {
    flsFuncs.isWebp();

    burger();
    sidebar();

    gradToggle();
    productSlider();
    aboutGallery();
    objGallery();

    window.addEventListener('resize', gradToggle)
    window.addEventListener('scroll', headerBgToggle)
})
