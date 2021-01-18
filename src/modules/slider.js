'use strict';

class Slider {
    constructor({slideWrap, slideElem}) {
        this.slideWrap = document.querySelector(slideWrap);
        this.slideElem = this.slideWrap.querySelectorAll(slideElem);
        this.dots;
        this.currentSlide = 0;
        this.slideCount = this.slideElem.length;
    }

    renderDots() {
        const ul = document.createElement('ul');
        ul.classList.add('slider__dots');

        for(let i = 0; i < this.slideCount; i++) {
            let li = document.createElement('li');
            li.classList.add('dot');
            ul.append(li);
        }

        this.slideWrap.append(ul);

        this.dots = document.querySelectorAll('.dot');
    }
    renderSlides() {
        this.slideElem.forEach((elem) => {
            elem.classList.add('slide__hidden');
        });
        this.slideElem[this.currentSlide].classList.remove('slide__hidden');
        this.slideElem[this.currentSlide].classList.add('slide__visible');
    }

    sliderStyles() {
        const st = document.createElement('style');
        const sliderStyles = `
            .slider__dots {
                position:absolute;
                bottom:15px;
                left:0;
                right:0;
                display:flex;
                justify-content:center;
                z-index: 10000;
            }
            .dot {
                width:25px;
                height:25px;
                border-radius:50%;
                background-color: rgba(0,0,0,0.6);
                margin: 5px;
                cursor:pointer;
                transition: background-color 0.3s;
                border: 4px solid #e9bb26;
            }
            .dot:hover {
                background-color: rgba(255,255,255,1);
            }
            .item {
                display:none!important;
            }
            .slide__visible {
                display:block!important;
            }
        `;
        st.textContent = sliderStyles;
        document.head.append(st);
    }

    prevSlide(elem, index, strClass) {
        let slide = elem[index];
        let content = slide.querySelector('.table');
        slide.classList.remove(strClass);
        content.style.visibility = 'hidden'
        content.style.opacity = 0;
        
    }

    nextSlide(elem, index, strClass) {
        let slide = elem[index];
        let content = slide.querySelector('.table');
        slide.classList.add(strClass);
        content.style.visibility = 'visible'
        content.style.opacity = 1;
        
        
    }

    autoPlaySlide() {
        this.prevSlide(this.slideElem, this.currentSlide, 'slide__visible')
        this.currentSlide++;
        if (this.currentSlide >= this.slideCount) {
            this.currentSlide = 0;
        }
        this.nextSlide(this.slideElem, this.currentSlide, 'slide__visible')   
    }

    startSlide() {
        setInterval(this.autoPlaySlide.bind(this), 3000);
    }

    stopSlide() {}

    init() {
        
        this.sliderStyles();
        this.renderDots();
        this.startSlide();
    }
}

export default Slider;