'use strict';

class GotoScrolling {
    constructor({menu}) {
        this.menu = document.querySelector(menu);

    }

    init() {
        this.controlEvent();
    }

    controlEvent() {
        this.menu.addEventListener('click', this.smothNavigate.bind(this));
    }

    smothNavigate(event) {
        event.preventDefault();
        let target = event.target;
        let targetBlockName = target.getAttribute('href');
        let targetBlock = document.querySelector(''+targetBlockName);
        let coordinate = targetBlock.getBoundingClientRect().y;
        console.log(coordinate);

        scroll (targetBlock , coordinate);
    }

    scroll(el, direction) {
		let duration = 2000,
		    start = new Date().getTime();
 
	    let fn = function() {
		
		let top = el.getBoundingClientRect().top - 96,
		    now = new Date().getTime() - start,
		    result = Math.round(top * now / duration);
        
            result = (result > direction * top) ? top : (result == 0) ? direction : result;
         if (direction * top > 0) {
			
			window.scrollBy(0,result);
			
			requestAnimationFrame(fn);
		}
	}
	
	requestAnimationFrame(fn);
}
}

export default GotoScrolling;