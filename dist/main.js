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

eval("const goTopBtn = document.getElementById(\"gotopbtn-id\");\nconst rootElement = document.documentElement;\n\nconst modal = document.getElementById(\"modal-id\");\nconst modalBtns = document.querySelectorAll(\"#modal-thumbnail-id\");\nconst closeBtns = document.querySelectorAll(\".close\");\n\n// selects all elements with className \"mySlides\" and place it inside the variable \"slides\"\nconst slides = document.getElementsByClassName(\"mySlides\"); \n// selects the first element that matches the prev selector\nconst prevButton = document.querySelector(\".prev\");\n// selects the first element that matches the next selector\nconst nextButton = document.querySelector(\".next\");\n// selects the first element that matches the counter selector\nconst counter = document.querySelector(\".counter\");\n\n// initializing the slide index to 1 (indicates the first slide)\nlet slideIndex = 1;\n\n// calling showSlide function to display the first slide\nshowSlides(slideIndex);\n\n// function plusSlides to increase or decrease the slide index by \"n\" and show the corresponding slide\nfunction plusSlides(n){\n    showSlides(slideIndex += n);\n}\n\n//  function currentSlide to set the slide index to \"n\" and show the corresponding slide\nfunction currentSlide(n){\n    showSlides(slideIndex = n);\n}\n\n//  function updateCounter to update the counter text to display the current slide number and total slides.\nfunction updateCounter(){\n    counter.textContent = `${slideIndex} / ${slides.length}`\n}\n\n// function showSlides to display the slide corresponding to the current slide index \"n\"\nfunction showSlides(n){\n    // variable i \n    let i;\n    // if statement with condition that if the slideIndex is greater than the number of slides, set it to 1 (loop back to the first slide)\n    if(n > slides.length){\n        slideIndex = 1\n    }\n    // if statement that if the slide index is less than 1, set it to the number of slides (loop back to the last slide)\n    if(n < 1){\n        slideIndex = slides.length\n    }\n    // for loop through all slides and set their display style to \"none\" (hide them)\n    for(i=0; i < slides.length; i+=1){\n        // slides that retrieves the number from an array, and put it style display to none\n        slides[i].classList.remove(\"active\");\n    }\n    // display the slide corresponding to the current slide index\n    slides[slideIndex-1].classList.add(\"active\");\n    // update the counter to reflect the current slide\n    updateCounter();\n}\n\n// Add an event listener to the prevButton to call plusSlides with -1 (go to the previous slide) when clicked\nprevButton.addEventListener(\"click\", () =>{\n    plusSlides(-1);\n})\n\n// Add an event listener to the nextButton to call plusSlides with 1 (go to the next slide when clicked)\nnextButton.addEventListener(\"click\", () =>{\n    plusSlides(1);\n})\n\n\nfunction goTop(){\n    rootElement.scrollTo({\n        top:0,\n        behavior: \"smooth\"\n    })\n}\n\nfunction handleScroll(){\n    // this checks the total height you scrolled\n    const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight\n    if((rootElement.scrollTop / scrollTotal) > 0.50){\n        // show button\n        goTopBtn.classList.add(\"showBtn\")\n    }\n    else {\n        // hide button\n        goTopBtn.classList.remove(\"showBtn\")\n    }\n}\n\nfunction openModal(){\n    // show modal\n    modal.style.display = \"block\";\n    \n}\n\nfunction closeModal(){\n    // for x button in the modal\n    modal.style.display = \"none\";\n}\n\nfunction outsideModal(event){\n    // when users clicked outside the modal, the modal closes\n    if (event.target === modal){\n        modal.style.display = \"none\";\n    }\n}\n\n\n\ndocument.addEventListener(\"scroll\", handleScroll)\ngoTopBtn.addEventListener(\"click\", goTop)\n\n// Loop through each elements with the id modalBtn and attach a click event listener\nmodalBtns.forEach(modalBtn => {\n    // Add a click event listener to the current button for open modal\n    modalBtn.addEventListener(\"click\", openModal)\n})\n\n// Iterate through all elements that have the class \"closeBtn\"\ncloseBtns.forEach(closeBtn => {\n    // For each close button, add an event listener that listens for the \"click event\" and then call the closeModal function\n    closeBtn.addEventListener(\"click\", closeModal)\n})\n\nwindow.addEventListener(\"click\", outsideModal)\n\n\n\n\n//# sourceURL=webpack://project-template/./src/index.js?");

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