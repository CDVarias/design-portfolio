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

eval("const goTopBtn = document.getElementById(\"gotopbtn-id\");\nconst rootElement = document.documentElement;\n\nfunction goTop(){\n    rootElement.scrollTo({\n        top:0,\n        behavior: \"smooth\"\n    })\n}\n\nfunction handleScroll(){\n    // this checks the total height you scrolled\n    const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight\n    if((rootElement.scrollTop / scrollTotal) > 0.50){\n        // show button\n        goTopBtn.classList.add(\"showBtn\")\n    }\n    else {\n        // hide button\n        goTopBtn.classList.remove(\"showBtn\")\n    }\n}\n\n\ndocument.addEventListener(\"scroll\", handleScroll)\ngoTopBtn.addEventListener(\"click\", goTop)\n\n\n\n\n//# sourceURL=webpack://project-template/./src/index.js?");

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