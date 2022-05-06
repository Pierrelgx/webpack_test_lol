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

eval("const callRoute = () => {\n    const { hash } = window.location;\n    const pathParts = hash.substring(1).split('/');\n  \n    const pageName = pathParts[0];\n    const pageArgument = pathParts[1] || '';\n    const pageFunction = routes[pageName];\n  \n    if (pageFunction !== undefined) {\n      pageFunction(pageArgument);\n    }\n  };\n  \n  window.addEventListener('hashchange', () => callRoute());\n  window.addEventListener('DOMContentLoaded', () => callRoute());\n\n//# sourceURL=webpack://test_webpack/./src/index.js?");

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