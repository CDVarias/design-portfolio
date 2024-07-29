/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const goTopBtn = document.getElementById(\"gotopbtn-id\");\nconst rootElement = document.documentElement;\n\n// const modal = document.getElementById(\"modal-id\");\nconst modalBtns = document.querySelectorAll(\".modal-thumbnail\");\nconst closeBtns = document.querySelectorAll(\".close\");\n\nconst navbar = document.querySelector(\"header\");\n\nfunction initCarousel(carouselElement,slideClass){\n  const slides = carouselElement.querySelectorAll(`.${slideClass}`);\n  const prevButton = carouselElement.querySelector(\".prev\");\n  const nextButton = carouselElement.querySelector(\".next\");\n  const counter = carouselElement.querySelector(\".counter\");\n  carouselElement.slideIndex = 1;\n\n  function showSlides(n){\n    if (n > slides.length){\n      carouselElement.slideIndex = 1;\n    }\n    if (n < 1) {\n      carouselElement.slideIndex = slides.length;\n    }\n    Array.from(slides).forEach(slide =>{\n      slide.classList.remove(\"active\");\n    })\n    slides[carouselElement.slideIndex - 1].classList.add(\"active\");\n    updateCounter();\n  }\n\n  function plusSlides (n){\n    showSlides(carouselElement.slideIndex += n);\n  }\n\n  function updateCounter(){\n      if(counter){\n        counter.textContent = `${carouselElement.slideIndex} / ${slides.length}`;\n      }\n  }\n\n  showSlides(carouselElement.slideIndex);\n\n  prevButton.addEventListener(\"click\", () => plusSlides(-1));\n  nextButton.addEventListener(\"click\", () => plusSlides(1));\n}\n\nfunction goTop(){\n    rootElement.scrollTo({\n        top:0,\n        behavior: \"smooth\"\n    })\n}\n\nfunction handleScroll(){\n    // this checks the total height you scrolled\n    const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight\n    if((rootElement.scrollTop / scrollTotal) > 0.50){\n        // show button\n        goTopBtn.classList.add(\"showBtn\")\n    }\n    else {\n        // hide button\n        goTopBtn.classList.remove(\"showBtn\")\n    }\n}\n\nfunction resetSlides(carouselElement, slideClass){\n  const slides = carouselElement.querySelectorAll(`.${slideClass}`);\n  const counter = carouselElement.querySelector(\".counter\");\n  carouselElement.slideIndex = 1;\n\n  Array.from(slides).forEach(slide =>{\n    slide.classList.remove(\"active\");\n  })\n  slides[0].classList.add(\"active\");\n\n  if (counter){\n    counter.textContent = `${carouselElement.slideIndex} / ${slides.length}`;\n  }\n}\n\nfunction openModal(event) {\n    const modalId = event.currentTarget.getAttribute(\"data-modal\");\n    const modal = document.getElementById(modalId);\n    modal.style.display = \"block\";\n    goTopBtn.style.display = \"none\";\n    document.querySelector(\".navbar\").classList.add(\"navbar-hidden\");\n    document.body.style.overflow = \"hidden\";\n    // Add event listener to close modal when clicking outside\n    window.addEventListener(\"click\", outsideModal);\n  }\n\n\nfunction closeModal(e){\n    // for x button in the modal\n    const modal = e.currentTarget.closest(\".modal\")\n    modal.style.display = \"none\";\n    goTopBtn.style.display = \"\";\n    document.querySelector(\".navbar\").classList.remove(\"navbar-hidden\");\n    document.body.style.overflow = \"\";\n\n    const carouselElement = modal.querySelector(\".modal-left\");\n    const slideClass = carouselElement.getAttribute(\"data-slide-class\");\n    resetSlides(carouselElement,slideClass);\n}\n\n// Function to close the modal when clicking outside of it\nfunction outsideModal(e) {\n    const modals = document.querySelectorAll(\".modal\");\n    modals.forEach(modal => {\n      if (e.target === modal) {\n        modal.style.display = \"none\";\n        goTopBtn.style.display = \"\";\n        document.querySelector(\".navbar\").classList.remove(\"navbar-hidden\");\n        document.body.style.overflow = \"\";\n\n        const carouselElement = modal.querySelector(\".modal-left\");\n        const slideClass = carouselElement.getAttribute(\"data-slide-class\");\n        resetSlides(carouselElement,slideClass);\n\n        window.removeEventListener(\"click\", outsideModal);\n      }\n    });\n  }\n\ndocument.addEventListener(\"scroll\", handleScroll)\ngoTopBtn.addEventListener(\"click\", goTop)\n\nmodalBtns.forEach(modalBtn =>{\n    modalBtn.addEventListener(\"click\", openModal)\n})\n\n// Iterate through all elements that have the class \"closeBtn\"\ncloseBtns.forEach(closeBtn => {\n    // For each close button, add an event listener that listens for the \"click event\" and then call the closeModal function\n    closeBtn.addEventListener(\"click\", closeModal);\n})\n\ndocument.querySelectorAll(\".modal-left\").forEach(carouselElement =>{\n  const slideClass = carouselElement.getAttribute(\"data-slide-class\")\n  initCarousel(carouselElement,slideClass);\n})\n\n\n\n\n\n//# sourceURL=webpack://project-template/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;