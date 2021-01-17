'use strict';

class ModalWindow {
    constructor({
            modal, 
            overlay, 
            openBtn,
            closeBtn}) 
            {
        this.modal = document.querySelector(modal);
        this.overlay = document.querySelector(overlay);
        this.openBtn = document.querySelector(openBtn);
        this.closeBtn = document.querySelector(closeBtn)
    }

    init() {
        this.controlButtons();        
    }

    controlButtons() {
        this.openBtn.addEventListener('click', this.openModal.bind(this));
        this.overlay.addEventListener('click', this.closeModal.bind(this));
        this.closeBtn.addEventListener('click', this.closeModal.bind(this));
    }

    openModal() {
       this.overlay.style.display = 'block'; 
       this.modal.style.display = 'block'; 
    //    this.modal.classList.add('animate__animated', 'animate__backInDown');
    }

    closeModal() {
        this.overlay.style.display = 'none';
        this.modal.style.display = 'none';  
        // this.modal.classList.add('animate__animated', 'animate__backOutDown');
    }
}
