import  ModalWindow from './modules/modalWindow.js';
import  GotoScrolling from './modules/gotoScrolling.js';
import  Slider from './modules/slider.js';

// модальное окно
const modal = {
    overlay: '.modal-overlay',
    modal: '.modal-callback',
    openBtn: '.header .callback-btn',
    closeBtn: '.modal-close'
};
const modalWindow = new ModalWindow(modal);

modalWindow.init();

// скроллинг
const goto = {
    menu: '.top-menu'
};

const gotoScrolling = new GotoScrolling(goto);

gotoScrolling.init();


const s = {
    slideWrap: '.top-slider',
    slideElem: '.item'
};

const slider = new Slider(s);

slider.init();


