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

eval("const goTopBtn = document.getElementById(\"gotopbtn-id\");\nconst rootElement = document.documentElement;\n\nconst modal = document.getElementById(\"modal-id\");\nconst modalBtns = document.querySelectorAll(\"#modal-thumbnail-id\");\nconst closeBtns = document.querySelectorAll(\".close\");\n\n\nfunction goTop(){\n    rootElement.scrollTo({\n        top:0,\n        behavior: \"smooth\"\n    })\n}\n\nfunction handleScroll(){\n    // this checks the total height you scrolled\n    const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight\n    if((rootElement.scrollTop / scrollTotal) > 0.50){\n        // show button\n        goTopBtn.classList.add(\"showBtn\")\n    }\n    else {\n        // hide button\n        goTopBtn.classList.remove(\"showBtn\")\n    }\n}\n\nfunction openModal(){\n    // show modal\n    modal.style.display = \"block\";\n}\n\nfunction closeModal(){\n    // for x button in the modal\n    modal.style.display = \"none\";\n}\n\nfunction outsideModal(event){\n    // when users clicked outside the modal, the modal closes\n    if (event.target === modal){\n        modal.style.display = \"none\";\n    }\n}\n\n\ndocument.addEventListener(\"scroll\", handleScroll)\ngoTopBtn.addEventListener(\"click\", goTop)\n\n// Loop through each elements with the id modalBtn and attach a click event listener\nmodalBtns.forEach(modalBtn => {\n    // Add a click event listener to the current button for open modal\n    modalBtn.addEventListener(\"click\", openModal)\n})\n\n// Iterate through all elements that have the class \"closeBtn\"\ncloseBtns.forEach(closeBtn => {\n    // For each close button, add an event listener that listens for the \"click event\" and then call the closeModal function\n    closeBtn.addEventListener(\"click\", closeModal)\n})\n\nwindow.addEventListener(\"click\", outsideModal)\n\n\n\n\n//# sourceURL=webpack://project-template/./src/index.js?");

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