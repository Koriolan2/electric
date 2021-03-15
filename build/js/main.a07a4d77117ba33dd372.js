(()=>{"use strict";new class{constructor({modal:e,overlay:t,openBtn:i,closeBtn:s,animation:n={typeOpen:"animate__backInDown",typeExit:"animate__backOutDown"}}){this.modal=document.querySelector(e),this.overlay=document.querySelector(t),this.openBtn=document.querySelector(i),this.closeBtn=document.querySelector(s),this.animation=n}init(){this.setBasicStyles(),this.controlButtons()}controlButtons(){this.openBtn.addEventListener("click",this.openModal.bind(this)),this.overlay.addEventListener("click",this.closeModal.bind(this)),this.closeBtn.addEventListener("click",this.closeModal.bind(this))}openOverlay(){return this.overlay.style.display="block",!0}closeOverlay(){return this.overlay.style.display="none",!0}openMod(){return this.modal.style.display="block",this.modal.classList.add("animate__animated",this.animation.typeOpen),!0}closeMod(){return this.modal.classList.remove(this.animation.typeOpen),this.modal.classList.add(this.animation.typeExit),!0}openModal(){this.openOverlay()&&setTimeout(this.openMod.bind(this),this.animation.speed)}closeModal(){this.closeMod()&&(setTimeout(this.closeOverlay.bind(this),300),this.closeOverlay&&setTimeout(this.resetStyles.bind(this),600))}resetStyles(){this.modal.style.display="none",this.modal.classList.remove("animate__animated",this.animation.typeOpen,this.animation.typeExit)}setBasicStyles(){const e=document.createElement("link");e.setAttribute("rel","stylesheet"),e.setAttribute("href","https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"),document.head.append(e)}}({overlay:".modal-overlay",modal:".modal-callback",openBtn:".header .callback-btn",closeBtn:".modal-close",animation:{typeOpen:"animate__bounceIn",typeExit:"animate__fadeOutUpBig"}}).init(),new class{constructor({slideWrap:e,slideElem:t,time:i=3e3}){this.slideWrap=document.querySelector(e),this.slideElem=this.slideWrap.querySelectorAll(t),this.time=i,this.dots,this.currentSlide=0,this.slideCount=this.slideElem.length}renderDots(){const e=document.createElement("ul");e.classList.add("dots__items");for(let t=0;t<this.slideCount;t++){let t=document.createElement("li");t.classList.add("dots__item"),e.append(t)}this.slideWrap.append(e),this.dots=document.querySelectorAll(".dot")}renderSlides(){this.slideElem.forEach((e=>{e.classList.add("slide__hidden")})),this.slideElem[this.currentSlide].classList.remove("slide__hidden"),this.slideElem[this.currentSlide].classList.add("slide__visible")}sliderStyles(){const e=document.createElement("style");e.textContent="\n            .dots__items {\n                position:absolute;\n                bottom:15px;\n                left:0;\n                right:0;\n                display:flex;\n                justify-content:center;\n                z-index: 30;\n            }\n            .dots__item {\n                width:25px;\n                height:25px;\n                border-radius:50%;\n                background-color: rgba(0,0,0,0.6);\n                margin: 5px;\n                cursor:pointer;\n                transition: background-color 0.3s;\n                border: 4px solid #e9bb26;\n            }\n            .dots__item:hover {\n                background-color: rgba(255,255,255,1);\n            }\n\n        ",document.head.append(e)}prevSlide(e,t,i,s){let n=e[t];n.classList.remove(i),n.classList.add(s)}nextSlide(e,t,i,s){let n=e[t];n.classList.remove(i),n.classList.add(s)}autoPlaySlide(){this.prevSlide(this.slideElem,this.currentSlide,"animate__fadeIn","animate_fadeOut"),this.currentSlide++,this.currentSlide>=this.slideCount&&(this.currentSlide=0),this.nextSlide(this.slideElem,this.currentSlide,"animate__fadeOut","animate_fadeIn")}startSlide(){this.slideElem.forEach((function(e){e.classList.add("animate__animated")})),setInterval(this.autoPlaySlide.bind(this),this.time)}stopSlide(){}init(){this.sliderStyles(),this.renderDots(),this.startSlide()}}({slideWrap:".top-slider",slideElem:".item",time:3e3,animationImage:{slideOpen:"animate__fadeIn",slideClose:"animate__fadeOut"}}).init()})();