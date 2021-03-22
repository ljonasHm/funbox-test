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

/***/ "./src/card.js":
/*!*********************!*\
  !*** ./src/card.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"card\": () => (/* binding */ card)\n/* harmony export */ });\nfunction selectCard(card, stringAfterCard, stringAfterSelectedCard) {\r\n    card.classList.add('selected-card');\r\n    card.querySelector('.card__weight').classList.add('selected-weight');\r\n    stringAfterCard.classList.add('hide');\r\n    stringAfterSelectedCard.classList.remove('hide');\r\n}\r\n\r\nfunction removeSelect(card, stringAfterCard, stringAfterSelectedCard) {\r\n    card.classList.remove('selected-card');\r\n    card.querySelector('.card__weight').classList.remove('selected-weight');\r\n    stringAfterCard.classList.remove('hide');\r\n    stringAfterSelectedCard.classList.add('hide');\r\n    leaveSelectedCard(card);\r\n}\r\n\r\nfunction enterSelectedCard(card) {\r\n    card.querySelector('.card__first-line').classList.add('hide');\r\n    card.querySelector('.card__before-cancel').classList.remove('hide');\r\n}\r\n\r\nfunction leaveSelectedCard(card) {\r\n    if (card.querySelector('.card__first-line').classList.contains('hide')) {\r\n        card.querySelector('.card__first-line').classList.remove('hide');\r\n        card.querySelector('.card__before-cancel').classList.add('hide');\r\n    }\r\n}\r\n\r\nfunction disable(card, stringAfterCard, stringAfterCardDisabled) {\r\n    card.querySelectorAll('p').forEach(string => {\r\n        string.classList.add('disabled-string');\r\n    })\r\n    card.querySelector('.card__weight').classList.add('disabled-weight');\r\n    stringAfterCard.classList.add('hide');\r\n    stringAfterCardDisabled.classList.remove('hide');\r\n}\r\n\r\nfunction card() {\r\n\r\n    const cards = document.querySelectorAll('.element__card');\r\n    const stringsAfterCard = document.querySelectorAll('.element__after-card');\r\n    const stringsAfterSelectedCard = document.querySelectorAll('.element__after-selected-card');\r\n    const stringsAfterCardDisabled = document.querySelectorAll('.element__after-card-disabled');\r\n\r\n    cards.forEach((card, index) => {\r\n        if (!card.classList.contains('disabled')) {\r\n            card.addEventListener('click', () => {\r\n                if (card.classList.contains('selected-card')) {\r\n                    removeSelect(card, stringsAfterCard[index], stringsAfterSelectedCard[index]);\r\n                } else {\r\n                    selectCard(card, stringsAfterCard[index], stringsAfterSelectedCard[index]);\r\n                }\r\n            });\r\n            card.addEventListener('mouseenter', () => {\r\n                if(card.classList.contains('selected-card')) {\r\n                    enterSelectedCard(card);\r\n                }\r\n            });\r\n            card.addEventListener('mouseleave', () => {\r\n                if(card.classList.contains('selected-card')) {\r\n                    leaveSelectedCard(card);\r\n                }\r\n            });\r\n        } else {\r\n            disable(card, stringsAfterCard[index], stringsAfterCardDisabled[index]);\r\n        }\r\n    });\r\n\r\n    stringsAfterCard.forEach((string, index) => {\r\n        string.querySelector('span').addEventListener('click', () => {\r\n            selectCard(cards[index], string, stringsAfterSelectedCard[index]);\r\n        });\r\n    })\r\n}\r\n\r\n\n\n//# sourceURL=webpack://test/./src/card.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card */ \"./src/card.js\");\n\r\n\r\n(0,_card__WEBPACK_IMPORTED_MODULE_0__.card)();\n\n//# sourceURL=webpack://test/./src/script.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script.js");
/******/ 	
/******/ })()
;