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
/******/ 	__webpack_require__.p = "/dist/";
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


var _player = __webpack_require__(/*! ./javascript/player */ "./src/javascript/player.js");

var _player2 = _interopRequireDefault(_player);

var _game = __webpack_require__(/*! ./javascript/game */ "./src/javascript/game.js");

var _game2 = _interopRequireDefault(_game);

var _game_view = __webpack_require__(/*! ./javascript/game_view */ "./src/javascript/game_view.js");

var _game_view2 = _interopRequireDefault(_game_view);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener("DOMContentLoaded", function () {
    var canvas = document.getElementsByTagName("canvas")[0];
    canvas.width = 1000;
    canvas.height = 600;

    var ctx = canvas.getContext("2d");

    var gameView = new _game_view2.default(canvas, ctx);
    document.addEventListener('keydown', function (e) {
        return gameView.game.player.handlePress(e);
    });
    gameView.animate();
});

/***/ }),

/***/ "./src/javascript/game.js":
/*!********************************!*\
  !*** ./src/javascript/game.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _player = __webpack_require__(/*! ./player */ "./src/javascript/player.js");

var _player2 = _interopRequireDefault(_player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DIM_X = 1000;
var DIM_Y = 600;

var Game = function () {
    function Game(canvas, ctx) {
        _classCallCheck(this, Game);

        this.ctx = ctx;
        this.canvas = canvas;
        this.player = new _player2.default(this.canvas, this.ctx);
    }

    _createClass(Game, [{
        key: "draw",
        value: function draw() {
            this.ctx.clearRect(0, 0, DIM_X, DIM_Y);
            var centerX = DIM_X / 2;
            var centerY = DIM_Y / 2;
            this.ctx.strokeRect(centerX - 25, centerY - 25, 50, 50);
            this.ctx.stroke();

            this.player.draw();
        }
    }]);

    return Game;
}();

exports.default = Game;

/***/ }),

/***/ "./src/javascript/game_view.js":
/*!*************************************!*\
  !*** ./src/javascript/game_view.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _game = __webpack_require__(/*! ./game */ "./src/javascript/game.js");

var _game2 = _interopRequireDefault(_game);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GameView = function () {
    function GameView(canvas, ctx) {
        _classCallCheck(this, GameView);

        this.ctx = ctx;
        this.canvas = canvas;
        this.game = new _game2.default(this.canvas, this.ctx);
    }

    _createClass(GameView, [{
        key: 'animate',
        value: function animate() {
            this.game.draw(this.ctx);
            requestAnimationFrame(this.animate.bind(this));
        }
    }]);

    return GameView;
}();

exports.default = GameView;

/***/ }),

/***/ "./src/javascript/player.js":
/*!**********************************!*\
  !*** ./src/javascript/player.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Player = function () {
    function Player(canvas, ctx) {
        _classCallCheck(this, Player);

        this.canvas = canvas;
        this.ctx = ctx;
        this.playerPos = "left";
        this.draw = this.draw.bind(this);
    }

    _createClass(Player, [{
        key: "draw",
        value: function draw() {
            switch (this.playerPos) {
                case "left":
                    this.ctx.beginPath();
                    this.ctx.moveTo(this.canvas.width / 2 - 30, this.canvas.height / 2 + 5);
                    this.ctx.lineTo(this.canvas.width / 2 - 40, this.canvas.height / 2);
                    this.ctx.lineTo(this.canvas.width / 2 - 30, this.canvas.height / 2 - 5);
                    this.ctx.fill();
                    break;
                case "up":
                    this.ctx.beginPath();
                    this.ctx.moveTo(this.canvas.width / 2 - 5, this.canvas.height / 2 - 30);
                    this.ctx.lineTo(this.canvas.width / 2, this.canvas.height / 2 - 40);
                    this.ctx.lineTo(this.canvas.width / 2 + 5, this.canvas.height / 2 - 30);
                    this.ctx.fill();
                    break;
                case "right":
                    this.ctx.beginPath();
                    this.ctx.moveTo(this.canvas.width / 2 + 30, this.canvas.height / 2 + 5);
                    this.ctx.lineTo(this.canvas.width / 2 + 40, this.canvas.height / 2);
                    this.ctx.lineTo(this.canvas.width / 2 + 30, this.canvas.height / 2 - 5);
                    this.ctx.fill();
                    break;
                case "down":
                    this.ctx.beginPath();
                    this.ctx.moveTo(this.canvas.width / 2 - 5, this.canvas.height / 2 + 30);
                    this.ctx.lineTo(this.canvas.width / 2, this.canvas.height / 2 + 40);
                    this.ctx.lineTo(this.canvas.width / 2 + 5, this.canvas.height / 2 + 30);
                    this.ctx.fill();
                    break;
                default:
                    return null;
            }
        }
    }, {
        key: "handlePress",
        value: function handlePress(e) {

            switch (e.key) {
                case 'ArrowUp':
                    this.playerPos = "up";
                    break;
                case 'ArrowDown':
                    this.playerPos = "down";
                    break;
                case 'ArrowLeft':
                    this.playerPos = "left";
                    break;
                case 'ArrowRight':
                    this.playerPos = "right";
                    break;
            }
        }
    }]);

    return Player;
}();

exports.default = Player;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qYXZhc2NyaXB0L2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2phdmFzY3JpcHQvZ2FtZV92aWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9qYXZhc2NyaXB0L3BsYXllci5qcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXMiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsIndpZHRoIiwiaGVpZ2h0IiwiY3R4IiwiZ2V0Q29udGV4dCIsImdhbWVWaWV3IiwiR2FtZVZpZXciLCJnYW1lIiwicGxheWVyIiwiaGFuZGxlUHJlc3MiLCJlIiwiYW5pbWF0ZSIsIkRJTV9YIiwiRElNX1kiLCJHYW1lIiwiUGxheWVyIiwiY2xlYXJSZWN0IiwiY2VudGVyWCIsImNlbnRlclkiLCJzdHJva2VSZWN0Iiwic3Ryb2tlIiwiZHJhdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImJpbmQiLCJwbGF5ZXJQb3MiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJsaW5lVG8iLCJmaWxsIiwia2V5Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFn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QXlCLEVBQXBFO0FBQ0EseUJBQUtDLEdBQUwsQ0FBU3lCLElBQVQ7QUFDQTtBQUNKO0FBQ0ksMkJBQU8sSUFBUDtBQTlCUjtBQWdDSDs7O29DQUVXbEIsQyxFQUFHOztBQUVYLG9CQUFRQSxFQUFFbUIsR0FBVjtBQUNJLHFCQUFLLFNBQUw7QUFDSSx5QkFBS0wsU0FBTCxHQUFpQixJQUFqQjtBQUNBO0FBQ0oscUJBQUssV0FBTDtBQUNJLHlCQUFLQSxTQUFMLEdBQWlCLE1BQWpCO0FBQ0E7QUFDSixxQkFBSyxXQUFMO0FBQ0kseUJBQUtBLFNBQUwsR0FBaUIsTUFBakI7QUFDQTtBQUNKLHFCQUFLLFlBQUw7QUFDSSx5QkFBS0EsU0FBTCxHQUFpQixPQUFqQjtBQUNBO0FBWlI7QUFjSDs7Ozs7O2tCQTNEZ0JULE0iLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgUGxheWVyIGZyb20gJy4vamF2YXNjcmlwdC9wbGF5ZXInO1xuaW1wb3J0IEdhbWUgZnJvbSAnLi9qYXZhc2NyaXB0L2dhbWUnO1xuaW1wb3J0IEdhbWVWaWV3IGZyb20gJy4vamF2YXNjcmlwdC9nYW1lX3ZpZXcnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJjYW52YXNcIilbMF07XG4gICAgY2FudmFzLndpZHRoID0gMTAwMDtcbiAgICBjYW52YXMuaGVpZ2h0ID0gNjAwO1xuXG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblxuXG4gICAgY29uc3QgZ2FtZVZpZXcgPSBuZXcgR2FtZVZpZXcoY2FudmFzLCBjdHgpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBlID0+IGdhbWVWaWV3LmdhbWUucGxheWVyLmhhbmRsZVByZXNzKGUpKTtcbiAgICBnYW1lVmlldy5hbmltYXRlKCk7XG59KTtcblxuXG5cbiIsImltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vcGxheWVyXCI7XG5cbmNvbnN0IERJTV9YID0gMTAwMDtcbmNvbnN0IERJTV9ZID0gNjAwO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGN0eCkge1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMucGxheWVyID0gbmV3IFBsYXllcih0aGlzLmNhbnZhcywgdGhpcy5jdHgpXG4gICAgfVxuXG5cblxuXG5cblxuICAgIGRyYXcoKSB7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCBESU1fWCwgRElNX1kpO1xuICAgICAgICBjb25zdCBjZW50ZXJYID0gRElNX1ggLyAyO1xuICAgICAgICBjb25zdCBjZW50ZXJZID0gRElNX1kgLyAyO1xuICAgICAgICB0aGlzLmN0eC5zdHJva2VSZWN0KGNlbnRlclggLSAyNSwgY2VudGVyWSAtIDI1LCA1MCwgNTApO1xuICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcblxuICAgICAgICB0aGlzLnBsYXllci5kcmF3KCk7XG4gICAgfVxufSIsImltcG9ydCBHYW1lIGZyb20gJy4vZ2FtZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVWaWV3IHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGN0eCkge1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuZ2FtZSA9IG5ldyBHYW1lKHRoaXMuY2FudmFzLCB0aGlzLmN0eCk7XG4gICAgfVxuXG5cbiAgICBhbmltYXRlKCkge1xuICAgICAgICB0aGlzLmdhbWUuZHJhdyh0aGlzLmN0eCk7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUuYmluZCh0aGlzKSk7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBjdHgpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLnBsYXllclBvcyA9IFwibGVmdFwiO1xuICAgICAgICB0aGlzLmRyYXcgPSB0aGlzLmRyYXcuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBkcmF3KCkge1xuICAgICAgICBzd2l0Y2ggKHRoaXMucGxheWVyUG9zKSB7XG4gICAgICAgICAgICBjYXNlIFwibGVmdFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4Lm1vdmVUbyh0aGlzLmNhbnZhcy53aWR0aCAvIDIgLSAzMCwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMiArIDUpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyh0aGlzLmNhbnZhcy53aWR0aCAvIDIgLSA0MCwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMik7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKHRoaXMuY2FudmFzLndpZHRoIC8gMiAtIDMwLCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyIC0gNSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInVwXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubW92ZVRvKHRoaXMuY2FudmFzLndpZHRoIC8gMiAtIDUsIHRoaXMuY2FudmFzLmhlaWdodCAvIDIgLSAzMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKHRoaXMuY2FudmFzLndpZHRoIC8gMiwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMiAtIDQwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8odGhpcy5jYW52YXMud2lkdGggLyAyICsgNSwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMiAtIDMwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwicmlnaHRcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5tb3ZlVG8odGhpcy5jYW52YXMud2lkdGggLyAyICsgMzAsIHRoaXMuY2FudmFzLmhlaWdodCAvIDIgKyA1KTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8odGhpcy5jYW52YXMud2lkdGggLyAyICsgNDAsIHRoaXMuY2FudmFzLmhlaWdodCAvIDIpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyh0aGlzLmNhbnZhcy53aWR0aCAvIDIgKyAzMCwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMiAtIDUpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJkb3duXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubW92ZVRvKHRoaXMuY2FudmFzLndpZHRoIC8gMiAtIDUsIHRoaXMuY2FudmFzLmhlaWdodCAvIDIgKyAzMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKHRoaXMuY2FudmFzLndpZHRoIC8gMiwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMiArIDQwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8odGhpcy5jYW52YXMud2lkdGggLyAyICsgNSwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMiArIDMwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlUHJlc3MoZSkge1xuXG4gICAgICAgIHN3aXRjaCAoZS5rZXkpIHtcbiAgICAgICAgICAgIGNhc2UgJ0Fycm93VXAnOlxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyUG9zID0gXCJ1cFwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnQXJyb3dEb3duJzpcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllclBvcyA9IFwiZG93blwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnQXJyb3dMZWZ0JzpcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllclBvcyA9IFwibGVmdFwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnQXJyb3dSaWdodCc6XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJQb3MgPSBcInJpZ2h0XCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=