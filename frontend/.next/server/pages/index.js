module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/Countdown.jsx":
/*!**************************************!*\
  !*** ./src/components/Countdown.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/home/dickson/Repositorios/capsula-do-tempo/frontend/src/components/Countdown.jsx\";\n\n\nfunction Countdown() {\n  const calculateTimeLeft = () => {\n    const difference = +new Date(`2021-11-9`) - +new Date();\n    let timeLeft = {};\n\n    if (difference > 0) {\n      timeLeft = {\n        dias: Math.floor(difference / (1000 * 60 * 60 * 24)),\n        horas: Math.floor(difference / (1000 * 60 * 60) % 24),\n        minutos: Math.floor(difference / 1000 / 60 % 60),\n        segundos: Math.floor(difference / 1000 % 60)\n      };\n    }\n\n    return timeLeft;\n  };\n\n  const {\n    0: timeLeft,\n    1: setTimeLeft\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(calculateTimeLeft());\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    setTimeout(() => {\n      setTimeLeft(calculateTimeLeft());\n    }, 1000);\n  });\n  const timerComponents = [];\n  Object.keys(timeLeft).forEach(interval => {\n    if (!timeLeft[interval]) {\n      return;\n    }\n\n    timerComponents.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n      children: [timeLeft[interval], \" \", interval, \" \"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }, this));\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      className: \"texto\",\n      children: \"Para abrir a nossa c\\xE1psula, faltam\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 7\n    }, this), timerComponents.length ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n      className: \"span-tempo\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        className: \"tempo\",\n        children: timeLeft.dias < 10 ? \"0\" + timeLeft.dias : timeLeft.dias\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 11\n      }, this), \" \", \"dias\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        className: \"tempo\",\n        children: timeLeft.horas < 10 ? \"0\" + timeLeft.horas : timeLeft.horas\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 11\n      }, this), \" \", \"horas\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        className: \"tempo\",\n        children: timeLeft.minutos < 10 ? \"0\" + timeLeft.minutos : timeLeft.minutos\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 11\n      }, this), \" \", \"minutos\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        className: \"tempo\",\n        children: timeLeft.segundos < 10 ? \"0\" + timeLeft.segundos : timeLeft.segundos\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 11\n      }, this), \"segundos\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 9\n    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n      children: \"Time's up!\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 42,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Countdown);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db3VudGRvd24uanN4P2M4NWMiXSwibmFtZXMiOlsiQ291bnRkb3duIiwiY2FsY3VsYXRlVGltZUxlZnQiLCJkaWZmZXJlbmNlIiwiRGF0ZSIsInRpbWVMZWZ0IiwiZGlhcyIsIk1hdGgiLCJmbG9vciIsImhvcmFzIiwibWludXRvcyIsInNlZ3VuZG9zIiwic2V0VGltZUxlZnQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInNldFRpbWVvdXQiLCJ0aW1lckNvbXBvbmVudHMiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImludGVydmFsIiwicHVzaCIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBLFNBQVNBLFNBQVQsR0FBcUI7QUFDbkIsUUFBTUMsaUJBQWlCLEdBQUcsTUFBTTtBQUM5QixVQUFNQyxVQUFVLEdBQUcsQ0FBQyxJQUFJQyxJQUFKLENBQVUsV0FBVixDQUFELEdBQXlCLENBQUMsSUFBSUEsSUFBSixFQUE3QztBQUNBLFFBQUlDLFFBQVEsR0FBRyxFQUFmOztBQUVBLFFBQUlGLFVBQVUsR0FBRyxDQUFqQixFQUFvQjtBQUNsQkUsY0FBUSxHQUFHO0FBQ1RDLFlBQUksRUFBRUMsSUFBSSxDQUFDQyxLQUFMLENBQVdMLFVBQVUsSUFBSSxPQUFPLEVBQVAsR0FBWSxFQUFaLEdBQWlCLEVBQXJCLENBQXJCLENBREc7QUFFVE0sYUFBSyxFQUFFRixJQUFJLENBQUNDLEtBQUwsQ0FBWUwsVUFBVSxJQUFJLE9BQU8sRUFBUCxHQUFZLEVBQWhCLENBQVgsR0FBa0MsRUFBN0MsQ0FGRTtBQUdUTyxlQUFPLEVBQUVILElBQUksQ0FBQ0MsS0FBTCxDQUFZTCxVQUFVLEdBQUcsSUFBYixHQUFvQixFQUFyQixHQUEyQixFQUF0QyxDQUhBO0FBSVRRLGdCQUFRLEVBQUVKLElBQUksQ0FBQ0MsS0FBTCxDQUFZTCxVQUFVLEdBQUcsSUFBZCxHQUFzQixFQUFqQztBQUpELE9BQVg7QUFNRDs7QUFFRCxXQUFPRSxRQUFQO0FBQ0QsR0FkRDs7QUFnQkEsUUFBTTtBQUFBLE9BQUNBLFFBQUQ7QUFBQSxPQUFXTztBQUFYLE1BQTBCQyxzREFBUSxDQUFDWCxpQkFBaUIsRUFBbEIsQ0FBeEM7QUFFQVkseURBQVMsQ0FBQyxNQUFNO0FBQ2RDLGNBQVUsQ0FBQyxNQUFNO0FBQ2ZILGlCQUFXLENBQUNWLGlCQUFpQixFQUFsQixDQUFYO0FBQ0QsS0FGUyxFQUVQLElBRk8sQ0FBVjtBQUdELEdBSlEsQ0FBVDtBQU1BLFFBQU1jLGVBQWUsR0FBRyxFQUF4QjtBQUVBQyxRQUFNLENBQUNDLElBQVAsQ0FBWWIsUUFBWixFQUFzQmMsT0FBdEIsQ0FBK0JDLFFBQUQsSUFBYztBQUMxQyxRQUFJLENBQUNmLFFBQVEsQ0FBQ2UsUUFBRCxDQUFiLEVBQXlCO0FBQ3ZCO0FBQ0Q7O0FBRURKLG1CQUFlLENBQUNLLElBQWhCLGVBQ0U7QUFBQSxpQkFDR2hCLFFBQVEsQ0FBQ2UsUUFBRCxDQURYLE9BQ3dCQSxRQUR4QixFQUNrQyxHQURsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERjtBQUtELEdBVkQ7QUFXQSxzQkFDRTtBQUFBLDRCQUNFO0FBQUcsZUFBUyxFQUFDLE9BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixFQUVHSixlQUFlLENBQUNNLE1BQWhCLGdCQUNDO0FBQU0sZUFBUyxFQUFDLFlBQWhCO0FBQUEsOEJBQ0U7QUFBRyxpQkFBUyxFQUFDLE9BQWI7QUFBQSxrQkFDR2pCLFFBQVEsQ0FBQ0MsSUFBVCxHQUFnQixFQUFoQixHQUFxQixNQUFNRCxRQUFRLENBQUNDLElBQXBDLEdBQTJDRCxRQUFRLENBQUNDO0FBRHZEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixFQUdPLEdBSFAsdUJBS0U7QUFBRyxpQkFBUyxFQUFDLE9BQWI7QUFBQSxrQkFDR0QsUUFBUSxDQUFDSSxLQUFULEdBQWlCLEVBQWpCLEdBQXNCLE1BQU1KLFFBQVEsQ0FBQ0ksS0FBckMsR0FBNkNKLFFBQVEsQ0FBQ0k7QUFEekQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxGLEVBT08sR0FQUCx3QkFTRTtBQUFHLGlCQUFTLEVBQUMsT0FBYjtBQUFBLGtCQUNHSixRQUFRLENBQUNLLE9BQVQsR0FBbUIsRUFBbkIsR0FBd0IsTUFBTUwsUUFBUSxDQUFDSyxPQUF2QyxHQUFpREwsUUFBUSxDQUFDSztBQUQ3RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVEYsRUFXTyxHQVhQLDBCQWFFO0FBQUcsaUJBQVMsRUFBQyxPQUFiO0FBQUEsa0JBQ0dMLFFBQVEsQ0FBQ00sUUFBVCxHQUFvQixFQUFwQixHQUNHLE1BQU1OLFFBQVEsQ0FBQ00sUUFEbEIsR0FFR04sUUFBUSxDQUFDTTtBQUhmO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERCxnQkFzQkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF4Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUE2QkQ7O0FBRWNWLHdFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvQ291bnRkb3duLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmZ1bmN0aW9uIENvdW50ZG93bigpIHtcbiAgY29uc3QgY2FsY3VsYXRlVGltZUxlZnQgPSAoKSA9PiB7XG4gICAgY29uc3QgZGlmZmVyZW5jZSA9ICtuZXcgRGF0ZShgMjAyMS0xMS05YCkgLSArbmV3IERhdGUoKTtcbiAgICBsZXQgdGltZUxlZnQgPSB7fTtcblxuICAgIGlmIChkaWZmZXJlbmNlID4gMCkge1xuICAgICAgdGltZUxlZnQgPSB7XG4gICAgICAgIGRpYXM6IE1hdGguZmxvb3IoZGlmZmVyZW5jZSAvICgxMDAwICogNjAgKiA2MCAqIDI0KSksXG4gICAgICAgIGhvcmFzOiBNYXRoLmZsb29yKChkaWZmZXJlbmNlIC8gKDEwMDAgKiA2MCAqIDYwKSkgJSAyNCksXG4gICAgICAgIG1pbnV0b3M6IE1hdGguZmxvb3IoKGRpZmZlcmVuY2UgLyAxMDAwIC8gNjApICUgNjApLFxuICAgICAgICBzZWd1bmRvczogTWF0aC5mbG9vcigoZGlmZmVyZW5jZSAvIDEwMDApICUgNjApLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGltZUxlZnQ7XG4gIH07XG5cbiAgY29uc3QgW3RpbWVMZWZ0LCBzZXRUaW1lTGVmdF0gPSB1c2VTdGF0ZShjYWxjdWxhdGVUaW1lTGVmdCgpKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0VGltZUxlZnQoY2FsY3VsYXRlVGltZUxlZnQoKSk7XG4gICAgfSwgMTAwMCk7XG4gIH0pO1xuXG4gIGNvbnN0IHRpbWVyQ29tcG9uZW50cyA9IFtdO1xuXG4gIE9iamVjdC5rZXlzKHRpbWVMZWZ0KS5mb3JFYWNoKChpbnRlcnZhbCkgPT4ge1xuICAgIGlmICghdGltZUxlZnRbaW50ZXJ2YWxdKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGltZXJDb21wb25lbnRzLnB1c2goXG4gICAgICA8c3Bhbj5cbiAgICAgICAge3RpbWVMZWZ0W2ludGVydmFsXX0ge2ludGVydmFsfXtcIiBcIn1cbiAgICAgIDwvc3Bhbj5cbiAgICApO1xuICB9KTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dG9cIj5QYXJhIGFicmlyIGEgbm9zc2EgY8OhcHN1bGEsIGZhbHRhbTwvcD5cbiAgICAgIHt0aW1lckNvbXBvbmVudHMubGVuZ3RoID8gKFxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzcGFuLXRlbXBvXCI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGVtcG9cIj5cbiAgICAgICAgICAgIHt0aW1lTGVmdC5kaWFzIDwgMTAgPyBcIjBcIiArIHRpbWVMZWZ0LmRpYXMgOiB0aW1lTGVmdC5kaWFzfVxuICAgICAgICAgIDwvcD57XCIgXCJ9XG4gICAgICAgICAgZGlhc1xuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRlbXBvXCI+XG4gICAgICAgICAgICB7dGltZUxlZnQuaG9yYXMgPCAxMCA/IFwiMFwiICsgdGltZUxlZnQuaG9yYXMgOiB0aW1lTGVmdC5ob3Jhc31cbiAgICAgICAgICA8L3A+e1wiIFwifVxuICAgICAgICAgIGhvcmFzXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGVtcG9cIj5cbiAgICAgICAgICAgIHt0aW1lTGVmdC5taW51dG9zIDwgMTAgPyBcIjBcIiArIHRpbWVMZWZ0Lm1pbnV0b3MgOiB0aW1lTGVmdC5taW51dG9zfVxuICAgICAgICAgIDwvcD57XCIgXCJ9XG4gICAgICAgICAgbWludXRvc1xuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRlbXBvXCI+XG4gICAgICAgICAgICB7dGltZUxlZnQuc2VndW5kb3MgPCAxMFxuICAgICAgICAgICAgICA/IFwiMFwiICsgdGltZUxlZnQuc2VndW5kb3NcbiAgICAgICAgICAgICAgOiB0aW1lTGVmdC5zZWd1bmRvc31cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgc2VndW5kb3NcbiAgICAgICAgPC9zcGFuPlxuICAgICAgKSA6IChcbiAgICAgICAgPHNwYW4+VGltZSdzIHVwITwvc3Bhbj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvdW50ZG93bjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Countdown.jsx\n");

/***/ }),

/***/ "./src/components/Welcome.jsx":
/*!************************************!*\
  !*** ./src/components/Welcome.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Countdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Countdown */ \"./src/components/Countdown.jsx\");\n\nvar _jsxFileName = \"/home/dickson/Repositorios/capsula-do-tempo/frontend/src/components/Welcome.jsx\";\n\n\n\nconst Welcome = () => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        className: \"welcome\",\n        children: \"C\\xC1PSULA DO TEMPO\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Countdown__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Welcome);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9XZWxjb21lLmpzeD9lZmRlIl0sIm5hbWVzIjpbIldlbGNvbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxNQUFNQSxPQUFPLEdBQUcsTUFBTTtBQUNwQixzQkFDRTtBQUFBLDJCQUNFO0FBQUEsOEJBQ0U7QUFBRyxpQkFBUyxFQUFDLFNBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRSxxRUFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQVFELENBVEQ7O0FBV2VBLHNFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvV2VsY29tZS5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ291bnRkb3duIGZyb20gXCIuL0NvdW50ZG93blwiXG5cbmNvbnN0IFdlbGNvbWUgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cIndlbGNvbWVcIj5Dw4FQU1VMQSBETyBURU1QTzwvcD5cbiAgICAgICAgPENvdW50ZG93biAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBXZWxjb21lO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Welcome.jsx\n");

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Welcome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Welcome */ \"./src/components/Welcome.jsx\");\n\nvar _jsxFileName = \"/home/dickson/Repositorios/capsula-do-tempo/frontend/src/pages/index.js\";\n\n\n\nfunction Home() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Welcome__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 9\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXguanM/NDU3MCJdLCJuYW1lcyI6WyJIb21lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUdlLFNBQVNBLElBQVQsR0FBZ0I7QUFDN0Isc0JBQ0U7QUFBQSwyQkFDSSxxRUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0QiLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgV2VsY29tZSBmcm9tIFwiLi4vY29tcG9uZW50cy9XZWxjb21lXCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgICA8V2VsY29tZSAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.js\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });