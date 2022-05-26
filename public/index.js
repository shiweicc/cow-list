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
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/index.js":
/*!*****************************!*\
  !*** ./client/src/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /Users/shiweichen/Documents/SEI36/hr-rpp36-cow-list/client/src/index.js: Unexpected token (19:7)\\n\\n\\u001b[0m \\u001b[90m 17 |\\u001b[39m   \\u001b[90m//   .then(data => console.log('shit is here'));\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 18 |\\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 19 |\\u001b[39m   \\u001b[33mAxios\\u001b[39m\\u001b[33m.\\u001b[39m\\u001b[36mget\\u001b[39m(\\u001b[32m'/'\\u001b[39m\\u001b[33m,\\u001b[39m {name\\u001b[33m:\\u001b[39m name\\u001b[33m,\\u001b[39m description\\u001b[33m:\\u001b[39m description})\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m    |\\u001b[39m        \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 20 |\\u001b[39m     \\u001b[33m.\\u001b[39mthen(() \\u001b[33m=>\\u001b[39m {\\u001b[0m\\n\\u001b[0m \\u001b[90m 21 |\\u001b[39m       alert(\\u001b[32m'Success read cow list!'\\u001b[39m)\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 22 |\\u001b[39m     })\\u001b[0m\\n    at instantiate (/Users/shiweichen/Documents/SEI36/hr-rpp36-cow-list/node_modules/@babel/parser/lib/index.js:72:32)\\n    at constructor (/Users/shiweichen/Documents/SEI36/hr-rpp36-cow-list/node_modules/@babel/parser/lib/index.js:358:12)\\n    at Object.raise (/Users/shiweichen/Documents/SEI36/hr-rpp36-cow-list/node_modules/@babel/parser/lib/index.js:3336:19)\\n    at Object.unexpected (/Users/shiweichen/Documents/SEI36/hr-rpp36-cow-list/node_modules/@babel/parser/lib/index.js:3374:16)\\n    at Object.parseClassMemberWithIsStatic (/Users/shiweichen/Documents/SEI36/hr-rpp36-cow-list/node_modules/@babel/parser/lib/index.js:15713:12)\\n    at Object.parseClassMember (/Users/shiweichen/Documents/SEI36/hr-rpp36-cow-list/node_modules/@babel/parser/lib/index.js:15580:10)\\n    at /Users/shiweichen/Documents/SEI36/hr-rpp36-cow-list/node_modules/@babel/parser/lib/index.js:15520:14\\n    at Object.withSmartMixTopicForbiddingContext (/Users/shiweichen/Documents/SEI36/hr-rpp36-cow-list/node_modules/@babel/parser/lib/index.js:14320:14)\\n    at Object.parseClassBody (/Users/shiweichen/Documents/SEI36/hr-rpp36-cow-list/node_modules/@babel/parser/lib/index.js:15495:10)\\n    at Object.parseClass (/Users/shiweichen/Documents/SEI36/hr-rpp36-cow-list/node_modules/@babel/parser/lib/index.js:15469:22)\\n    at Object.parseStatementContent (/Users/shiweichen/Documents/SEI36/hr-rpp36-cow-list/node_modules/@babel/parser/lib/index.js:14688:21)\\n    at Object.parseStatement (/Users/shiweichen/Documents/SEI36/hr-rpp36-cow-list/node_modules/@babel/parser/lib/index.js:14640:17)\\n    at Object.parseBlockOrModuleBlockBody (/Users/shiweichen/Documents/SEI36/hr-rpp36-cow-list/node_modules/@babel/parser/lib/index.js:15283:25)\\n    at Object.parseBlockBody (/Users/shiweichen/Documents/SEI36/hr-rpp36-cow-list/node_modules/@babel/parser/lib/index.js:15274:10)\\n    at Object.parseProgram (/Users/shiweichen/Documents/SEI36/hr-rpp36-cow-list/node_modules/@babel/parser/lib/index.js:14558:10)\\n    at Object.parseTopLevel (/Users/shiweichen/Documents/SEI36/hr-rpp36-cow-list/node_modules/@babel/parser/lib/index.js:14545:25)\\n    at Object.parse (/Users/shiweichen/Documents/SEI36/hr-rpp36-cow-list/node_modules/@babel/parser/lib/index.js:16508:10)\\n    at parse (/Users/shiweichen/Documents/SEI36/hr-rpp36-cow-list/node_modules/@babel/parser/lib/index.js:16560:38)\\n    at parser (/Users/shiweichen/Documents/SEI36/hr-rpp36-cow-list/node_modules/@babel/core/lib/parser/index.js:52:34)\\n    at parser.next (<anonymous>)\\n    at normalizeFile (/Users/shiweichen/Documents/SEI36/hr-rpp36-cow-list/node_modules/@babel/core/lib/transformation/normalize-file.js:87:38)\\n    at normalizeFile.next (<anonymous>)\\n    at run (/Users/shiweichen/Documents/SEI36/hr-rpp36-cow-list/node_modules/@babel/core/lib/transformation/index.js:31:50)\\n    at run.next (<anonymous>)\\n    at Function.transform (/Users/shiweichen/Documents/SEI36/hr-rpp36-cow-list/node_modules/@babel/core/lib/transform.js:25:41)\\n    at transform.next (<anonymous>)\\n    at step (/Users/shiweichen/Documents/SEI36/hr-rpp36-cow-list/node_modules/gensync/index.js:261:32)\\n    at /Users/shiweichen/Documents/SEI36/hr-rpp36-cow-list/node_modules/gensync/index.js:273:13\\n    at async.call.result.err.err (/Users/shiweichen/Documents/SEI36/hr-rpp36-cow-list/node_modules/gensync/index.js:223:11)\\n    at /Users/shiweichen/Documents/SEI36/hr-rpp36-cow-list/node_modules/gensync/index.js:189:28\");\n\n//# sourceURL=webpack:///./client/src/index.js?");

/***/ })

/******/ });