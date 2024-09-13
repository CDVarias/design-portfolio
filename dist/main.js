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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_go_top_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/go-top.js */ \"./src/js/go-top.js\");\n/* harmony import */ var _js_modal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/modal.js */ \"./src/js/modal.js\");\n/* harmony import */ var _js_mobile_nav_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/mobile-nav.js */ \"./src/js/mobile-nav.js\");\n/* harmony import */ var _js_carousel_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/carousel.js */ \"./src/js/carousel.js\");\n\n\n\n\n(0,_js_go_top_js__WEBPACK_IMPORTED_MODULE_0__.initGoTopButton)();\n(0,_js_modal_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_js_mobile_nav_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n(0,_js_carousel_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n\n\n//# sourceURL=webpack://project-template/./src/index.js?");

/***/ }),

/***/ "./src/js/carousel.js":
/*!****************************!*\
  !*** ./src/js/carousel.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initModalCarousel)\n/* harmony export */ });\nfunction initCarousel(carouselElement,slideClass){\n    const slides = carouselElement.querySelectorAll(`.${slideClass}`);\n    const prevButton = carouselElement.querySelector(\".prev\");\n    const nextButton = carouselElement.querySelector(\".next\");\n    const counter = carouselElement.querySelector(\".counter\");\n    carouselElement.slideIndex = 1;\n  \n    function showSlides(n){\n      if (n > slides.length){\n        carouselElement.slideIndex = 1;\n      }\n      if (n < 1) {\n        carouselElement.slideIndex = slides.length;\n      }\n      Array.from(slides).forEach(slide =>{\n        slide.classList.remove(\"active\");\n      })\n      slides[carouselElement.slideIndex - 1].classList.add(\"active\");\n      updateCounter();\n    }\n  \n    function plusSlides (n){\n      showSlides(carouselElement.slideIndex += n);\n    }\n  \n    function updateCounter(){\n        if(counter){\n          counter.textContent = `${carouselElement.slideIndex} / ${slides.length}`;\n        }\n    }\n  \n    showSlides(carouselElement.slideIndex);\n  \n    prevButton.addEventListener(\"click\", () => plusSlides(-1));\n    nextButton.addEventListener(\"click\", () => plusSlides(1));\n  }\n\nfunction initModalCarousel(){\n    document.querySelectorAll(\".modal-left\").forEach(carouselElement =>{\n        const slideClass = carouselElement.getAttribute(\"data-slide-class\");\n        initCarousel(carouselElement,slideClass);\n      })\n      \n      document.querySelectorAll(\".modal-single\").forEach(carouselElement =>{\n        const slideClass = carouselElement.getAttribute(\"data-slide-class\");\n        initCarousel(carouselElement, slideClass);\n      })\n}\n\n//# sourceURL=webpack://project-template/./src/js/carousel.js?");

/***/ }),

/***/ "./src/js/go-top.js":
/*!**************************!*\
  !*** ./src/js/go-top.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   goTopBtn: () => (/* binding */ goTopBtn),\n/* harmony export */   initGoTopButton: () => (/* binding */ initGoTopButton)\n/* harmony export */ });\nconst goTopBtn = document.getElementById(\"gotopbtn-id\");\nconst rootElement = document.documentElement;\n\nfunction goTop(){\n    rootElement.scrollTo({\n        top:0,\n        behavior: \"smooth\"\n    })\n}\n\nfunction handleScroll(){\n    const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight\n    if((rootElement.scrollTop / scrollTotal) > 0.50){\n        goTopBtn.classList.add(\"showBtn\")\n    }\n    else {\n        goTopBtn.classList.remove(\"showBtn\")\n    }\n}\n\nfunction initGoTopButton(){\n    document.addEventListener(\"scroll\", handleScroll);\n    goTopBtn.addEventListener(\"click\", goTop);\n}\n\n\n\n//# sourceURL=webpack://project-template/./src/js/go-top.js?");

/***/ }),

/***/ "./src/js/mobile-nav.js":
/*!******************************!*\
  !*** ./src/js/mobile-nav.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ openMobileNav)\n/* harmony export */ });\nconst mobileNav = document.getElementById(\"mobile-nav-id\");\nlet openedMobileNav = false;\n\nfunction openMobilenav(){\n    openedMobileNav = !openedMobileNav;\n    if (openedMobileNav){\n      mobileNav.style.display = \"flex\";\n      document.body.style.overflowY = \"hidden\";\n    }\n    else{\n      mobileNav.style.display = \"none\";\n      document.body.style.overflowY = \"auto\";\n    }\n  }\n  \n  function openMobileNavLinks(){    \n    openedMobileNav = false;\n    mobileNav.style.display = \"none\";\n    document.body.style.overflowY = \"auto\";\n  }\n\nfunction openMobileNav(){\nconst topNav = document.getElementById(\"topnav-icon-id\");  \ntopNav.addEventListener(\"click\", openMobilenav);\n\nconst mobileNavLinks = document.querySelectorAll(\".mobile-nav-links a\");\nmobileNavLinks.forEach(linkBtn =>{\n  linkBtn.addEventListener(\"click\", openMobileNavLinks)\n})\n}\n\n//# sourceURL=webpack://project-template/./src/js/mobile-nav.js?");

/***/ }),

/***/ "./src/js/modal-reset.js":
/*!*******************************!*\
  !*** ./src/js/modal-reset.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   resetSlides: () => (/* binding */ resetSlides)\n/* harmony export */ });\n\nfunction resetSlides(carouselElement, slideClass){\n    const slides = carouselElement.querySelectorAll(`.${slideClass}`);\n    const counter = carouselElement.querySelector(\".counter\");\n    carouselElement.slideIndex = 1;\n  \n    Array.from(slides).forEach(slide =>{\n      slide.classList.remove(\"active\");\n    })\n    slides[0].classList.add(\"active\");\n  \n    if (counter){\n      counter.textContent = `${carouselElement.slideIndex} / ${slides.length}`;\n    }\n  }\n\n//# sourceURL=webpack://project-template/./src/js/modal-reset.js?");

/***/ }),

/***/ "./src/js/modal.js":
/*!*************************!*\
  !*** ./src/js/modal.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ setModalBtns)\n/* harmony export */ });\n/* harmony import */ var _go_top__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./go-top */ \"./src/js/go-top.js\");\n/* harmony import */ var _modal_reset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-reset */ \"./src/js/modal-reset.js\");\n\n\n\nfunction openModal(event) {\n    const modalId = event.currentTarget.getAttribute(\"data-modal\");\n    const modal = document.getElementById(modalId);\n    modal.style.display = \"block\";\n    toggleGoTopBtn(\"none\");\n    document.querySelector(\".navbar\").classList.add(\"navbar-hidden\");\n    document.body.style.overflow = \"hidden\";\n\n    window.addEventListener(\"click\", outsideModal);\n  }\n\nfunction closeModal(event){\n    const modal = event.currentTarget.closest(\".modal\")\n    modal.style.display = \"none\";\n    toggleGoTopBtn(\"\");\n    document.querySelector(\".navbar\").classList.remove(\"navbar-hidden\");\n    document.body.style.overflow = \"\";\n\n    resetModalCarousel(modal);\n   \n}\n\nfunction outsideModal(event) {\n    const modals = document.querySelectorAll(\".modal\");\n    modals.forEach(modal => {\n      if (event.target === modal) {\n        modal.style.display = \"none\";\n        toggleGoTopBtn(\"\");\n        document.querySelector(\".navbar\").classList.remove(\"navbar-hidden\");\n        document.body.style.overflow = \"\";\n\n        window.removeEventListener(\"click\", outsideModal);\n      }\n    });\n  }\n\nfunction resetModalCarousel(modal){\n  const carouselElement = modal.querySelector(\".modal-left\");\n  const carouselElement2 = modal.querySelector(\".modal-single\");\n  if (carouselElement) {\n    const slideClass = carouselElement.getAttribute(\"data-slide-class\");\n    (0,_modal_reset__WEBPACK_IMPORTED_MODULE_1__.resetSlides)(carouselElement, slideClass);\n  }\n  \n  if (carouselElement2) {\n    const slideClass2 = carouselElement2.getAttribute(\"data-slide-class\");\n    (0,_modal_reset__WEBPACK_IMPORTED_MODULE_1__.resetSlides)(carouselElement2, slideClass2);\n  }\n}\n\nfunction toggleGoTopBtn(display) {\n  _go_top__WEBPACK_IMPORTED_MODULE_0__.goTopBtn.style.display = display;\n}\n\nfunction setModalBtns(){\n  const modalBtns = document.querySelectorAll(\".modal-thumbnail\");\n  const closeBtns = document.querySelectorAll(\".close\");\n  const closeBtns2 = document.querySelectorAll(\".close2\");\n\nmodalBtns.forEach(modalBtn =>{\n    modalBtn.addEventListener(\"click\", openModal)\n})\n\ncloseBtns.forEach(closeBtn => {\n    closeBtn.addEventListener(\"click\", closeModal);\n})\n\ncloseBtns2.forEach(closeBtn => {\n  closeBtn.addEventListener(\"click\", closeModal);\n})\n}\n\n\n\n//# sourceURL=webpack://project-template/./src/js/modal.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;