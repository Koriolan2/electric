/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_modalWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modalWindow.js */ \"./modules/modalWindow.js\");\n/* harmony import */ var _modules_gotoScrolling_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/gotoScrolling.js */ \"./modules/gotoScrolling.js\");\n/* harmony import */ var _modules_slider_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/slider.js */ \"./modules/slider.js\");\n\r\n\r\n\r\n\r\n// модальное окно\r\nconst modal = {\r\n    overlay: '.modal-overlay',\r\n    modal: '.modal-callback',\r\n    openBtn: '.header .callback-btn',\r\n    closeBtn: '.modal-close'\r\n};\r\nconst modalWindow = new _modules_modalWindow_js__WEBPACK_IMPORTED_MODULE_0__.default(modal);\r\n\r\nmodalWindow.init();\r\n\r\n// скроллинг\r\nconst goto = {\r\n    menu: '.top-menu'\r\n};\r\n\r\nconst gotoScrolling = new _modules_gotoScrolling_js__WEBPACK_IMPORTED_MODULE_1__.default(goto);\r\n\r\ngotoScrolling.init();\r\n\r\n\r\nconst s = {\r\n    slideWrap: '.top-slider',\r\n    slideElem: '.item'\r\n};\r\n\r\nconst slider = new _modules_slider_js__WEBPACK_IMPORTED_MODULE_2__.default(s);\r\n\r\nslider.init();\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/gotoScrolling.js":
/*!**********************************!*\
  !*** ./modules/gotoScrolling.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n\r\n\r\nclass GotoScrolling {\r\n    constructor({menu}) {\r\n        this.menu = document.querySelector(menu);\r\n\r\n    }\r\n\r\n    init() {\r\n        this.controlEvent();\r\n    }\r\n\r\n    controlEvent() {\r\n        this.menu.addEventListener('click', this.smothNavigate.bind(this));\r\n    }\r\n\r\n    smothNavigate(event) {\r\n        event.preventDefault();\r\n        let target = event.target;\r\n        let targetBlockName = target.getAttribute('href');\r\n        let targetBlock = document.querySelector(''+targetBlockName);\r\n        let coordinate = targetBlock.getBoundingClientRect().y;\r\n        console.log(coordinate);\r\n\r\n        scroll (targetBlock , coordinate);\r\n    }\r\n\r\n    scroll(el, direction) {\r\n\t\tlet duration = 2000,\r\n\t\t    start = new Date().getTime();\r\n \r\n\t    let fn = function() {\r\n\t\t\r\n\t\tlet top = el.getBoundingClientRect().top - 96,\r\n\t\t    now = new Date().getTime() - start,\r\n\t\t    result = Math.round(top * now / duration);\r\n        \r\n            result = (result > direction * top) ? top : (result == 0) ? direction : result;\r\n         if (direction * top > 0) {\r\n\t\t\t\r\n\t\t\twindow.scrollBy(0,result);\r\n\t\t\t\r\n\t\t\trequestAnimationFrame(fn);\r\n\t\t}\r\n\t}\r\n\t\r\n\trequestAnimationFrame(fn);\r\n}\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GotoScrolling);\n\n//# sourceURL=webpack:///./modules/gotoScrolling.js?");

/***/ }),

/***/ "./modules/modalWindow.js":
/*!********************************!*\
  !*** ./modules/modalWindow.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n\r\n\r\nclass ModalWindow {\r\n    constructor({modal, overlay, openBtn, closeBtn}) {\r\n        this.modal = document.querySelector(modal);\r\n        this.overlay = document.querySelector(overlay);\r\n        this.openBtn = document.querySelector(openBtn);\r\n        this.closeBtn = document.querySelector(closeBtn);\r\n    }\r\n\r\n    init() {\r\n        this.controlButtons();        \r\n    }\r\n\r\n    controlButtons() {\r\n        this.openBtn.addEventListener('click', this.openModal.bind(this));\r\n        this.overlay.addEventListener('click', this.closeModal.bind(this));\r\n        this.closeBtn.addEventListener('click', this.closeModal.bind(this));\r\n    }\r\n\r\n    openModal() {\r\n       this.overlay.style.display = 'block'; \r\n       this.modal.style.display = 'block'; \r\n    //    this.modal.classList.add('animate__animated', 'animate__backInDown');\r\n    }\r\n\r\n    closeModal() {\r\n        this.overlay.style.display = 'none';\r\n        this.modal.style.display = 'none';  \r\n        // this.modal.classList.add('animate__animated', 'animate__backOutDown');\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalWindow);\r\n\n\n//# sourceURL=webpack:///./modules/modalWindow.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n\r\n\r\nclass Slider {\r\n    constructor({slideWrap, slideElem}) {\r\n        this.slideWrap = document.querySelector(slideWrap);\r\n        this.slideElem = this.slideWrap.querySelectorAll(slideElem);\r\n        this.dots;\r\n        this.currentSlide = 0;\r\n        this.slideCount = this.slideElem.length;\r\n    }\r\n\r\n    renderDots() {\r\n        const ul = document.createElement('ul');\r\n        ul.classList.add('slider__dots');\r\n\r\n        for(let i = 0; i < this.slideCount; i++) {\r\n            let li = document.createElement('li');\r\n            li.classList.add('dot');\r\n            ul.append(li);\r\n        }\r\n\r\n        this.slideWrap.append(ul);\r\n\r\n        this.dots = document.querySelectorAll('.dot');\r\n    }\r\n    renderSlides() {\r\n        this.slideElem.forEach((elem) => {\r\n            elem.classList.add('slide__hidden');\r\n        });\r\n        this.slideElem[this.currentSlide].classList.remove('slide__hidden');\r\n        this.slideElem[this.currentSlide].classList.add('slide__visible');\r\n    }\r\n\r\n    sliderStyles() {\r\n        const st = document.createElement('style');\r\n        const sliderStyles = `\r\n            .slider__dots {\r\n                position:absolute;\r\n                bottom:15px;\r\n                left:0;\r\n                right:0;\r\n                display:flex;\r\n                justify-content:center;\r\n                z-index: 10000;\r\n            }\r\n            .dot {\r\n                width:25px;\r\n                height:25px;\r\n                border-radius:50%;\r\n                background-color: rgba(0,0,0,0.6);\r\n                margin: 5px;\r\n                cursor:pointer;\r\n                transition: background-color 0.3s;\r\n                border: 4px solid #e9bb26;\r\n            }\r\n            .dot:hover {\r\n                background-color: rgba(255,255,255,1);\r\n            }\r\n            .item {\r\n                display:none!important;\r\n            }\r\n            .slide__visible {\r\n                display:block!important;\r\n            }\r\n        `;\r\n        st.textContent = sliderStyles;\r\n        document.head.append(st);\r\n    }\r\n\r\n    prevSlide(elem, index, strClass) {\r\n        let slide = elem[index];\r\n        let content = slide.querySelector('.table');\r\n        slide.classList.remove(strClass);\r\n        content.style.visibility = 'hidden'\r\n        content.style.opacity = 0;\r\n        \r\n    }\r\n\r\n    nextSlide(elem, index, strClass) {\r\n        let slide = elem[index];\r\n        let content = slide.querySelector('.table');\r\n        slide.classList.add(strClass);\r\n        setInterval(()=> {\r\n            content.style.visibility = 'visible'\r\n            content.style.opacity = 1;\r\n        }, 300);\r\n        \r\n    }\r\n\r\n    autoPlaySlide() {\r\n        this.prevSlide(this.slideElem, this.currentSlide, 'slide__visible')\r\n        this.currentSlide++;\r\n        if (this.currentSlide >= this.slideCount) {\r\n            this.currentSlide = 0;\r\n        }\r\n        this.nextSlide(this.slideElem, this.currentSlide, 'slide__visible')   \r\n    }\r\n\r\n    startSlide() {\r\n        setInterval(this.autoPlaySlide.bind(this), 3000);\r\n    }\r\n\r\n    stopSlide() {}\r\n\r\n    init() {\r\n        \r\n        this.sliderStyles();\r\n        this.renderDots();\r\n        this.startSlide();\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slider);\n\n//# sourceURL=webpack:///./modules/slider.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;