/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction createTabMenu() {\n\tconst menuItems = ['Main', 'Menu', 'Contact'];\n\n\tconst container = document.getElementById('container');\n\n\tconst nav = document.createElement('nav');\n\tnav.id = 'main-nav';\n\n\tconst ul = document.createElement('ul');\n\tul.classList.add('tabrow');\n\n\tfor (let i = 0; i < menuItems.length; i++) {\n\t\tlet li = document.createElement('li');\n\t\tli.textContent = menuItems[i];\n\n\t\t// Make first item \"active\"\n\t\tif (i === 0) li.classList.add('selected');\n\n\t\tul.appendChild(li);\n\n\t\taddTabListener(li);\n\t}\n\n\tnav.appendChild(ul);\n\tcontainer.appendChild(nav);\n}\n\nfunction createContentContainer() {\n}\n\n// Tab listeners\nfunction addTabListener(target) {\n\ttarget.addEventListener('click', function(e) { makeTabActive(e); });\n}\n\nfunction makeTabActive(e) {\n\tconst activeClass = 'selected';\n\n\t// Find menu associated with '#main-nav'\n\tconst mainNav = document.getElementById('main-nav');\n\tconst childrenArr = [...mainNav.children];\n\n\t// Find currently selected item, deselect it, select clicked item\n\tfor (let i = 0; i < childrenArr.length; i++) {\n\t\t// Should be menu we're looking for\n\t\tif (childrenArr[i].tagName === 'UL') {\n\t\t\tlet ulChildrenArr = [...childrenArr[i].children];\n\t\t\tfor (let j = 0; j < ulChildrenArr.length; j++) {\n\t\t\t\tif (ulChildrenArr[j].classList.contains(activeClass)) {\n\t\t\t\t\tulChildrenArr[j].classList.remove(activeClass);\n\t\t\t\t\te.target.classList.add(activeClass);\n\t\t\t\t\tbreak;\n\t\t\t\t}\n\t\t\t}\n\t\t\tbreak;\n\t\t}\n\t}\n}\n\nfunction ready() {\n\tcreateTabMenu();\n\tcreateContentContainer();\n}\n\ndocument.addEventListener(\"DOMContentLoaded\", ready);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gY3JlYXRlVGFiTWVudSgpIHtcblx0Y29uc3QgbWVudUl0ZW1zID0gWydNYWluJywgJ01lbnUnLCAnQ29udGFjdCddO1xuXG5cdGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWluZXInKTtcblxuXHRjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcblx0bmF2LmlkID0gJ21haW4tbmF2JztcblxuXHRjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG5cdHVsLmNsYXNzTGlzdC5hZGQoJ3RhYnJvdycpO1xuXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgbWVudUl0ZW1zLmxlbmd0aDsgaSsrKSB7XG5cdFx0bGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblx0XHRsaS50ZXh0Q29udGVudCA9IG1lbnVJdGVtc1tpXTtcblxuXHRcdC8vIE1ha2UgZmlyc3QgaXRlbSBcImFjdGl2ZVwiXG5cdFx0aWYgKGkgPT09IDApIGxpLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG5cblx0XHR1bC5hcHBlbmRDaGlsZChsaSk7XG5cblx0XHRhZGRUYWJMaXN0ZW5lcihsaSk7XG5cdH1cblxuXHRuYXYuYXBwZW5kQ2hpbGQodWwpO1xuXHRjb250YWluZXIuYXBwZW5kQ2hpbGQobmF2KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29udGVudENvbnRhaW5lcigpIHtcbn1cblxuLy8gVGFiIGxpc3RlbmVyc1xuZnVuY3Rpb24gYWRkVGFiTGlzdGVuZXIodGFyZ2V0KSB7XG5cdHRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHsgbWFrZVRhYkFjdGl2ZShlKTsgfSk7XG59XG5cbmZ1bmN0aW9uIG1ha2VUYWJBY3RpdmUoZSkge1xuXHRjb25zdCBhY3RpdmVDbGFzcyA9ICdzZWxlY3RlZCc7XG5cblx0Ly8gRmluZCBtZW51IGFzc29jaWF0ZWQgd2l0aCAnI21haW4tbmF2J1xuXHRjb25zdCBtYWluTmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4tbmF2Jyk7XG5cdGNvbnN0IGNoaWxkcmVuQXJyID0gWy4uLm1haW5OYXYuY2hpbGRyZW5dO1xuXG5cdC8vIEZpbmQgY3VycmVudGx5IHNlbGVjdGVkIGl0ZW0sIGRlc2VsZWN0IGl0LCBzZWxlY3QgY2xpY2tlZCBpdGVtXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW5BcnIubGVuZ3RoOyBpKyspIHtcblx0XHQvLyBTaG91bGQgYmUgbWVudSB3ZSdyZSBsb29raW5nIGZvclxuXHRcdGlmIChjaGlsZHJlbkFycltpXS50YWdOYW1lID09PSAnVUwnKSB7XG5cdFx0XHRsZXQgdWxDaGlsZHJlbkFyciA9IFsuLi5jaGlsZHJlbkFycltpXS5jaGlsZHJlbl07XG5cdFx0XHRmb3IgKGxldCBqID0gMDsgaiA8IHVsQ2hpbGRyZW5BcnIubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0aWYgKHVsQ2hpbGRyZW5BcnJbal0uY2xhc3NMaXN0LmNvbnRhaW5zKGFjdGl2ZUNsYXNzKSkge1xuXHRcdFx0XHRcdHVsQ2hpbGRyZW5BcnJbal0uY2xhc3NMaXN0LnJlbW92ZShhY3RpdmVDbGFzcyk7XG5cdFx0XHRcdFx0ZS50YXJnZXQuY2xhc3NMaXN0LmFkZChhY3RpdmVDbGFzcyk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiByZWFkeSgpIHtcblx0Y3JlYXRlVGFiTWVudSgpO1xuXHRjcmVhdGVDb250ZW50Q29udGFpbmVyKCk7XG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIHJlYWR5KTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ })

/******/ });