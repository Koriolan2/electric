import ModalWindow from './modules/modalWindow.js';
import Slider from './modules/slider.js';
// import  GotoScrolling from './modules/gotoScrolling.js';


// модальное окно
const modal = {
    overlay: '.modal-overlay',
    modal: '.modal-callback',
    openBtn: '.header .callback-btn',
    closeBtn: '.modal-close',
    animation: {
        typeOpen: 'animate__bounceIn',
        typeExit: 'animate__fadeOutUpBig'
    }
};
const modalWindow = new ModalWindow(modal);

modalWindow.init();


const s = {
    slideWrap: '.top-slider',
    slideElem: '.item',
    time: 3000,
    animationImage: {
        slideOpen:'animate__fadeIn',
        slideClose:'animate__fadeOut'
    }
};

const slider = new Slider(s);

slider.init();


