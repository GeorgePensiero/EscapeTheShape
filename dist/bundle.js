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

var _wall = __webpack_require__(/*! ./wall */ "./src/javascript/wall.js");

var _wall2 = _interopRequireDefault(_wall);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DIM_X = 1000;
var DIM_Y = 600;
var COLOR_SCHEME = ["#CC29336", "EBBAB9", "#388697", "#BFFFE1"];

var Game = function () {
    function Game(canvas, ctx) {
        _classCallCheck(this, Game);

        this.ctx = ctx;
        this.canvas = canvas;
        this.player = new _player2.default(this.canvas, this.ctx);
        this.walls = [];
    }

    _createClass(Game, [{
        key: "addWall",
        value: function addWall() {
            var wall = new _wall2.default(this.ctx, this.canvas.width / 2, this.canvas.height / 2, this.canvas.width / 2, COLOR_SCHEME[Math.floor(Math.random() * COLOR_SCHEME.length)]);
            this.walls.push(wall);
        }
    }, {
        key: "allWalls",
        value: function allWalls() {
            return this.walls;
        }
    }, {
        key: "draw",
        value: function draw() {
            this.ctx.clearRect(0, 0, DIM_X, DIM_Y);
            var centerX = DIM_X / 2;
            var centerY = DIM_Y / 2;
            this.walls.forEach(function (wall) {
                wall.update();
            });

            this.ctx.strokeRect(centerX - 25, centerY - 25, 50, 50);
            this.ctx.stroke();

            this.player.draw();
        }
    }, {
        key: "update",
        value: function update() {
            if (this.walls.length < 8) {
                setTimeout(this.addWall(), 1000);
            }
            this.draw();
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
            this.game.update();
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
            e.preventDefault();
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

/***/ }),

/***/ "./src/javascript/wall.js":
/*!********************************!*\
  !*** ./src/javascript/wall.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Wall = function () {
    function Wall(ctx, x, y, radius, color) {
        _classCallCheck(this, Wall);

        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }

    _createClass(Wall, [{
        key: "draw",
        value: function draw() {
            this.ctx.beginPath();
            this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI - .90, false);
            this.ctx.strokeStyle = this.color;
            this.ctx.stroke();
        }
    }, {
        key: "update",
        value: function update() {
            if (this.radius > 30) {
                this.radius -= 3;
            } else {
                this.radius = 500;
            }
            this.draw();
        }
    }]);

    return Wall;
}();

exports.default = Wall;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qYXZhc2NyaXB0L2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2phdmFzY3JpcHQvZ2FtZV92aWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9qYXZhc2NyaXB0L3BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvamF2YXNjcmlwdC93YWxsLmpzIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbnZhcyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwid2lkdGgiLCJoZWlnaHQiLCJjdHgiLCJnZXRDb250ZXh0IiwiZ2FtZVZpZXciLCJHYW1lVmlldyIsImdhbWUiLCJwbGF5ZXIiLCJoYW5kbGVQcmVzcyIsImUiLCJhbmltYXRlIiwiRElNX1giLCJESU1fWSIsIkNPTE9SX1NDSEVNRSIsIkdhbWUiLCJQbGF5ZXIiLCJ3YWxscyIsIndhbGwiLCJXYWxsIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwicHVzaCIsImNsZWFyUmVjdCIsImNlbnRlclgiLCJjZW50ZXJZIiwiZm9yRWFjaCIsInVwZGF0ZSIsInN0cm9rZVJlY3QiLCJzdHJva2UiLCJkcmF3Iiwic2V0VGltZW91dCIsImFkZFdhbGwiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJiaW5kIiwicGxheWVyUG9zIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwiZmlsbCIsInByZXZlbnREZWZhdWx0Iiwia2V5IiwieCIsInkiLCJyYWRpdXMiLCJjb2xvciIsImFyYyIsIlBJIiwic3Ryb2tlU3R5bGUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7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ZjtBQUNILGFBRkQsTUFFTztBQUNILHFCQUFLQSxNQUFMLEdBQWMsR0FBZDtBQUNIO0FBQ0QsaUJBQUtkLElBQUw7QUFDSDs7Ozs7O2tCQXZCZ0JiLEkiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgUGxheWVyIGZyb20gJy4vamF2YXNjcmlwdC9wbGF5ZXInO1xuaW1wb3J0IEdhbWUgZnJvbSAnLi9qYXZhc2NyaXB0L2dhbWUnO1xuaW1wb3J0IEdhbWVWaWV3IGZyb20gJy4vamF2YXNjcmlwdC9nYW1lX3ZpZXcnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJjYW52YXNcIilbMF07XG4gICAgY2FudmFzLndpZHRoID0gMTAwMDtcbiAgICBjYW52YXMuaGVpZ2h0ID0gNjAwO1xuXG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblxuXG4gICAgY29uc3QgZ2FtZVZpZXcgPSBuZXcgR2FtZVZpZXcoY2FudmFzLCBjdHgpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBlID0+IGdhbWVWaWV3LmdhbWUucGxheWVyLmhhbmRsZVByZXNzKGUpKTtcbiAgICBnYW1lVmlldy5hbmltYXRlKCk7XG59KTtcblxuXG5cbiIsImltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vcGxheWVyXCI7XG5pbXBvcnQgV2FsbCBmcm9tIFwiLi93YWxsXCI7XG5cbmNvbnN0IERJTV9YID0gMTAwMDtcbmNvbnN0IERJTV9ZID0gNjAwO1xuY29uc3QgQ09MT1JfU0NIRU1FID0gW1wiI0NDMjkzMzZcIiwgXCJFQkJBQjlcIiwgXCIjMzg4Njk3XCIsIFwiI0JGRkZFMVwiXVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBjdHgpIHtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIodGhpcy5jYW52YXMsIHRoaXMuY3R4KVxuICAgICAgICB0aGlzLndhbGxzID0gW107XG4gICAgfVxuXG5cbiAgICBhZGRXYWxsKCl7XG4gICAgICAgIGNvbnN0IHdhbGwgPSBuZXcgV2FsbCh0aGlzLmN0eCwgdGhpcy5jYW52YXMud2lkdGggLyAyLCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyLCB0aGlzLmNhbnZhcy53aWR0aCAvIDIsIENPTE9SX1NDSEVNRVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBDT0xPUl9TQ0hFTUUubGVuZ3RoKV0pXG4gICAgICAgIHRoaXMud2FsbHMucHVzaCh3YWxsKTtcbiAgICB9XG5cbiAgICBhbGxXYWxscygpe1xuICAgICAgICByZXR1cm4gdGhpcy53YWxscztcbiAgICB9XG5cblxuXG5cbiAgICBkcmF3KCkge1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgRElNX1gsIERJTV9ZKTtcbiAgICAgICAgY29uc3QgY2VudGVyWCA9IERJTV9YIC8gMjtcbiAgICAgICAgY29uc3QgY2VudGVyWSA9IERJTV9ZIC8gMjtcbiAgICAgICAgdGhpcy53YWxscy5mb3JFYWNoKHdhbGwgPT4ge1xuICAgICAgICAgICAgd2FsbC51cGRhdGUoKTtcbiAgICAgICAgfSlcbiAgICBcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlUmVjdChjZW50ZXJYIC0gMjUsIGNlbnRlclkgLSAyNSwgNTAsIDUwKTtcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnBsYXllci5kcmF3KCk7XG4gICAgfVxuXG4gICAgdXBkYXRlKCl7XG4gICAgICAgIGlmKHRoaXMud2FsbHMubGVuZ3RoIDwgOCl7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KHRoaXMuYWRkV2FsbCgpLCAxMDAwKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICAgICAgfVxufSIsImltcG9ydCBHYW1lIGZyb20gJy4vZ2FtZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVWaWV3IHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGN0eCkge1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuZ2FtZSA9IG5ldyBHYW1lKHRoaXMuY2FudmFzLCB0aGlzLmN0eCk7XG4gICAgfVxuXG5cbiAgICBhbmltYXRlKCkge1xuICAgICAgICB0aGlzLmdhbWUudXBkYXRlKCk7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUuYmluZCh0aGlzKSk7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBjdHgpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLnBsYXllclBvcyA9IFwibGVmdFwiO1xuICAgICAgICB0aGlzLmRyYXcgPSB0aGlzLmRyYXcuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBkcmF3KCkge1xuICAgICAgICBzd2l0Y2ggKHRoaXMucGxheWVyUG9zKSB7XG4gICAgICAgICAgICBjYXNlIFwibGVmdFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4Lm1vdmVUbyh0aGlzLmNhbnZhcy53aWR0aCAvIDIgLSAzMCwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMiArIDUpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyh0aGlzLmNhbnZhcy53aWR0aCAvIDIgLSA0MCwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMik7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKHRoaXMuY2FudmFzLndpZHRoIC8gMiAtIDMwLCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyIC0gNSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInVwXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubW92ZVRvKHRoaXMuY2FudmFzLndpZHRoIC8gMiAtIDUsIHRoaXMuY2FudmFzLmhlaWdodCAvIDIgLSAzMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKHRoaXMuY2FudmFzLndpZHRoIC8gMiwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMiAtIDQwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8odGhpcy5jYW52YXMud2lkdGggLyAyICsgNSwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMiAtIDMwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwicmlnaHRcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5tb3ZlVG8odGhpcy5jYW52YXMud2lkdGggLyAyICsgMzAsIHRoaXMuY2FudmFzLmhlaWdodCAvIDIgKyA1KTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8odGhpcy5jYW52YXMud2lkdGggLyAyICsgNDAsIHRoaXMuY2FudmFzLmhlaWdodCAvIDIpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyh0aGlzLmNhbnZhcy53aWR0aCAvIDIgKyAzMCwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMiAtIDUpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJkb3duXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubW92ZVRvKHRoaXMuY2FudmFzLndpZHRoIC8gMiAtIDUsIHRoaXMuY2FudmFzLmhlaWdodCAvIDIgKyAzMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKHRoaXMuY2FudmFzLndpZHRoIC8gMiwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMiArIDQwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8odGhpcy5jYW52YXMud2lkdGggLyAyICsgNSwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMiArIDMwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlUHJlc3MoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHN3aXRjaCAoZS5rZXkpIHtcbiAgICAgICAgICAgIGNhc2UgJ0Fycm93VXAnOlxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyUG9zID0gXCJ1cFwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnQXJyb3dEb3duJzpcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllclBvcyA9IFwiZG93blwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnQXJyb3dMZWZ0JzpcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllclBvcyA9IFwibGVmdFwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnQXJyb3dSaWdodCc6XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJQb3MgPSBcInJpZ2h0XCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cbiIsIlxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2FsbCB7XG4gICAgY29uc3RydWN0b3IoY3R4LCB4LCB5LCByYWRpdXMsIGNvbG9yKSB7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cztcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgIH1cblxuICAgIGRyYXcoKXtcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4LmFyYyh0aGlzLngsICB0aGlzLnksIHRoaXMucmFkaXVzLCAwLCAyICogTWF0aC5QSSAtIC45MCwgZmFsc2UpO1xuICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuICAgIH1cblxuICAgIHVwZGF0ZSgpe1xuICAgICAgICBpZih0aGlzLnJhZGl1cyA+IDMwKSB7XG4gICAgICAgICAgICB0aGlzLnJhZGl1cyAtPSAzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yYWRpdXMgPSA1MDA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kcmF3KCk7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=