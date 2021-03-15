'use strict';

class ModalWindow {
    constructor({
        modal, 
        overlay, 
        openBtn, 
        closeBtn,
        animation = {
            typeOpen: 'animate__backInDown',
            typeExit: 'animate__backOutDown',
        }
    }) {
        this.modal = document.querySelector(modal);
        this.overlay = document.querySelector(overlay);
        this.openBtn = document.querySelector(openBtn);
        this.closeBtn = document.querySelector(closeBtn);
        this.animation = animation;
    }

    init() {
        this.setBasicStyles();
        this.controlButtons();        
    }

    controlButtons() {
        this.openBtn.addEventListener('click', this.openModal.bind(this));
        this.overlay.addEventListener('click', this.closeModal.bind(this));
        this.closeBtn.addEventListener('click', this.closeModal.bind(this));
    }
    
    openOverlay() {
        this.overlay.style.display = 'block';
        return true;
    }

    closeOverlay() {
        this.overlay.style.display = 'none';
        return true;
    }

    openMod() {
        this.modal.style.display = 'block';
        this.modal.classList.add('animate__animated', this.animation.typeOpen);
        return true;   
    } 

    closeMod() {
        this.modal.classList.remove(this.animation.typeOpen);
        this.modal.classList.add(this.animation.typeExit);
        return true;
    }
    
    openModal() {
        if(this.openOverlay()) {
            setTimeout(this.openMod.bind(this), this.animation.speed);
        }
       
    }

    closeModal() {
       if(this.closeMod()) {
           setTimeout(this.closeOverlay.bind(this),300);
            
           if (this.closeOverlay) {
                setTimeout(this.resetStyles.bind(this), 600);
            }
        }
    }

    resetStyles() {
        this.modal.style.display = 'none';
        this.modal.classList.remove('animate__animated', this.animation.typeOpen, this.animation.typeExit);
    } 

    setBasicStyles() {
        const urlLibrary = 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css',
              styleAnimate = document.createElement('link');

        styleAnimate.setAttribute('rel', 'stylesheet'),
        styleAnimate.setAttribute('href', urlLibrary);
        
        document.head.append(styleAnimate);
    }

} 

export default ModalWindow;
