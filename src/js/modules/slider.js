import {tns} from "tiny-slider";
const slider = () => {
    const mySlider = tns({
        container: '.reviews__slider',
        items: 1,
        slideBy: 'page',
        controlsContainer: '.reviews__slider-controls',
        navContainer: '.reviews__slider-dots',
        mouseDrag: true,
      });
}

export default slider;