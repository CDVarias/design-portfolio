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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_go_top_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/go-top.js */ \"./src/js/go-top.js\");\n\n\n\nconst modalBtns = document.querySelectorAll(\".modal-thumbnail\");\nconst closeBtns = document.querySelectorAll(\".close\");\nconst closeBtns2 = document.querySelectorAll(\".close2\")\n\nconst navbar = document.querySelector(\"header\");\nconst topNav = document.getElementById(\"topnav-icon-id\");\n\nconst mobileNav = document.getElementById(\"mobile-nav-id\");\nlet openedMobileNav = false;\nconst mobileNavLinks = document.querySelectorAll(\".mobile-nav-links a\");\n\nfunction initCarousel(carouselElement,slideClass){\n  const slides = carouselElement.querySelectorAll(`.${slideClass}`);\n  const prevButton = carouselElement.querySelector(\".prev\");\n  const nextButton = carouselElement.querySelector(\".next\");\n  const counter = carouselElement.querySelector(\".counter\");\n  carouselElement.slideIndex = 1;\n\n  function showSlides(n){\n    if (n > slides.length){\n      carouselElement.slideIndex = 1;\n    }\n    if (n < 1) {\n      carouselElement.slideIndex = slides.length;\n    }\n    Array.from(slides).forEach(slide =>{\n      slide.classList.remove(\"active\");\n    })\n    slides[carouselElement.slideIndex - 1].classList.add(\"active\");\n    updateCounter();\n  }\n\n  function plusSlides (n){\n    showSlides(carouselElement.slideIndex += n);\n  }\n\n  function updateCounter(){\n      if(counter){\n        counter.textContent = `${carouselElement.slideIndex} / ${slides.length}`;\n      }\n  }\n\n  showSlides(carouselElement.slideIndex);\n\n  prevButton.addEventListener(\"click\", () => plusSlides(-1));\n  nextButton.addEventListener(\"click\", () => plusSlides(1));\n}\n\nfunction resetSlides(carouselElement, slideClass){\n  const slides = carouselElement.querySelectorAll(`.${slideClass}`);\n  const counter = carouselElement.querySelector(\".counter\");\n  carouselElement.slideIndex = 1;\n\n  Array.from(slides).forEach(slide =>{\n    slide.classList.remove(\"active\");\n  })\n  slides[0].classList.add(\"active\");\n\n  if (counter){\n    counter.textContent = `${carouselElement.slideIndex} / ${slides.length}`;\n  }\n}\n\nfunction openModal(event) {\n    const modalId = event.currentTarget.getAttribute(\"data-modal\");\n    const modal = document.getElementById(modalId);\n    modal.style.display = \"block\";\n    _js_go_top_js__WEBPACK_IMPORTED_MODULE_0__.goTopBtn.style.display = \"none\";\n    document.querySelector(\".navbar\").classList.add(\"navbar-hidden\");\n    document.body.style.overflow = \"hidden\";\n    // Add event listener to close modal when clicking outside\n    window.addEventListener(\"click\", outsideModal);\n  }\n\n\nfunction closeModal(event){\n    // for close button in the modal\n    const modal = event.currentTarget.closest(\".modal\")\n    modal.style.display = \"none\";\n    _js_go_top_js__WEBPACK_IMPORTED_MODULE_0__.goTopBtn.style.display = \"\";\n    document.querySelector(\".navbar\").classList.remove(\"navbar-hidden\");\n    document.body.style.overflow = \"\";\n\n    const carouselElement = modal.querySelector(\".modal-left\");\n    const carouselElement2 = modal.querySelector(\".modal-single\");\n    if (carouselElement) {\n      const slideClass = carouselElement.getAttribute(\"data-slide-class\");\n      resetSlides(carouselElement, slideClass);\n    }\n    \n    if (carouselElement2) {\n      const slideClass2 = carouselElement2.getAttribute(\"data-slide-class\");\n      resetSlides(carouselElement2, slideClass2);\n    }\n   \n}\n\nfunction outsideModal(event) {\n    const modals = document.querySelectorAll(\".modal\");\n    modals.forEach(modal => {\n      if (event.target === modal) {\n        modal.style.display = \"none\";\n        _js_go_top_js__WEBPACK_IMPORTED_MODULE_0__.goTopBtn.style.display = \"\";\n        document.querySelector(\".navbar\").classList.remove(\"navbar-hidden\");\n        document.body.style.overflow = \"\";\n\n    const carouselElement = modal.querySelector(\".modal-left\");\n    const carouselElement2 = modal.querySelector(\".modal-single\");\n    if (carouselElement) {\n      const slideClass = carouselElement.getAttribute(\"data-slide-class\");\n      resetSlides(carouselElement, slideClass);\n    }\n    \n    if (carouselElement2) {\n      const slideClass2 = carouselElement2.getAttribute(\"data-slide-class\");\n      resetSlides(carouselElement2, slideClass2);\n    }\n\n        window.removeEventListener(\"click\", outsideModal);\n      }\n    });\n  }\n\nfunction openMobilenav(){\n  openedMobileNav = !openedMobileNav;\n  if (openedMobileNav){\n    mobileNav.style.display = \"flex\";\n    document.body.style.overflowY = \"hidden\";\n  }\n  else{\n    mobileNav.style.display = \"none\";\n    document.body.style.overflowY = \"auto\";\n  }\n}\n\nfunction openMobileNavLinks(){\n  openedMobileNav = false;\n  mobileNav.style.display = \"none\";\n  document.body.style.overflowY = \"auto\";\n}\n\n\ntopNav.addEventListener(\"click\", openMobilenav);\n\nmobileNavLinks.forEach(linkBtn =>{\n  linkBtn.addEventListener(\"click\", openMobileNavLinks)\n})\n\nmodalBtns.forEach(modalBtn =>{\n    modalBtn.addEventListener(\"click\", openModal)\n})\n\ncloseBtns.forEach(closeBtn => {\n    closeBtn.addEventListener(\"click\", closeModal);\n})\n\ncloseBtns2.forEach(closeBtn => {\n  closeBtn.addEventListener(\"click\", closeModal);\n})\n\ndocument.querySelectorAll(\".modal-left\").forEach(carouselElement =>{\n  const slideClass = carouselElement.getAttribute(\"data-slide-class\");\n  initCarousel(carouselElement,slideClass);\n})\n\ndocument.querySelectorAll(\".modal-single\").forEach(carouselElement =>{\n  const slideClass = carouselElement.getAttribute(\"data-slide-class\");\n  initCarousel(carouselElement, slideClass);\n})\n\n\n\n\n\n\n\n//# sourceURL=webpack://project-template/./src/index.js?");

/***/ }),

/***/ "./src/js/go-top.js":
/*!**************************!*\
  !*** ./src/js/go-top.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   goTopBtn: () => (/* binding */ goTopBtn)\n/* harmony export */ });\nconst goTopBtn = document.getElementById(\"gotopbtn-id\");\nconst rootElement = document.documentElement;\n\nfunction goTop(){\n    rootElement.scrollTo({\n        top:0,\n        behavior: \"smooth\"\n    })\n}\n\nfunction handleScroll(){\n    // this checks the total height you scrolled\n    const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight\n    if((rootElement.scrollTop / scrollTotal) > 0.50){\n        // show button\n        goTopBtn.classList.add(\"showBtn\")\n    }\n    else {\n        // hide button\n        goTopBtn.classList.remove(\"showBtn\")\n    }\n}\n\ndocument.addEventListener(\"scroll\", handleScroll);\ngoTopBtn.addEventListener(\"click\", goTop);\n\n\n\n//# sourceURL=webpack://project-template/./src/js/go-top.js?");

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