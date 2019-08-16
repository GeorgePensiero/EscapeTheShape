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
        this.timer = null;
    }

    _createClass(Game, [{
        key: "addWall",
        value: function addWall() {
            var rotations = [-.001, .001, -.002, .002, -.002, -.003, .003];
            var wall = new _wall2.default(this.ctx, this.canvas.width / 2, this.canvas.height / 2, this.canvas.width / 2, COLOR_SCHEME[Math.floor(Math.random() * COLOR_SCHEME.length)], rotations[Math.floor(Math.random() * rotations.length)]);
            this.walls.push(wall);
            this.timer = null;
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
            var _this = this;

            if (this.walls.length < 8 && this.timer === null) {
                this.timer = setTimeout(function () {
                    return _this.addWall();
                }, 1000);
            }
            if (this.walls.length > 0 && this.walls[0].radius < 30) {
                this.walls.shift();
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
    function Wall(ctx, x, y, radius, color, rotation) {
        _classCallCheck(this, Wall);

        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.time = new Date().getTime();
        this.angle = Math.random() * 360;
        this.rotation = rotation;
    }

    _createClass(Wall, [{
        key: "draw",
        value: function draw() {
            var newTime = new Date().getTime();
            var diff = newTime - this.time;
            this.time = newTime;
            this.ctx.beginPath();
            this.ctx.arc(this.x, this.y, this.radius, 0 + this.angle, 2 * Math.PI - 1.2 + this.angle, false);
            this.ctx.strokeStyle = this.color;
            this.ctx.lineWidth = 8;
            this.ctx.stroke();
            this.angle += diff * this.rotation;
            this.angle %= 2 * Math.PI;
        }
    }, {
        key: "update",
        value: function update() {
            if (this.radius > 30) {
                this.radius -= 3;
            }
            this.draw();
        }
    }]);

    return Wall;
}();

exports.default = Wall;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qYXZhc2NyaXB0L2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2phdmFzY3JpcHQvZ2FtZV92aWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9qYXZhc2NyaXB0L3BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvamF2YXNjcmlwdC93YWxsLmpzIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbnZhcyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwid2lkdGgiLCJoZWlnaHQiLCJjdHgiLCJnZXRDb250ZXh0IiwiZ2FtZVZpZXciLCJHYW1lVmlldyIsImdhbWUiLCJwbGF5ZXIiLCJoYW5kbGVQcmVzcyIsImUiLCJhbmltYXRlIiwiRElNX1giLCJESU1fWSIsIkNPTE9SX1NDSEVNRSIsIkdhbWUiLCJQbGF5ZXIiLCJ3YWxscyIsInRpbWVyIiwicm90YXRpb25zIiwid2FsbCIsIldhbGwiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJwdXNoIiwiY2xlYXJSZWN0IiwiY2VudGVyWCIsImNlbnRlclkiLCJmb3JFYWNoIiwidXBkYXRlIiwic3Ryb2tlUmVjdCIsInN0cm9rZSIsImRyYXciLCJzZXRUaW1lb3V0IiwiYWRkV2FsbCIsInJhZGl1cyIsInNoaWZ0IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYmluZCIsInBsYXllclBvcyIsImJlZ2luUGF0aCIsIm1vdmVUbyIsImxpbmVUbyIsImZpbGwiLCJwcmV2ZW50RGVmYXVsdCIsImtleSIsIngiLCJ5IiwiY29sb3IiLCJyb3RhdGlvbiIsInRpbWUiLCJEYXRlIiwiZ2V0VGltZSIsImFuZ2xlIiwibmV3VGltZSIsImRpZmYiLCJhcmMiLCJQSSIsInN0cm9rZVN0eWxlIiwibGluZVdpZHRoIl0sIm1hcHBpbmdzIjoiO1FBQUE7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O0FBQ0osZ0JBQUcsS0FBS3RCLE1BQUwsR0FBYyxFQUFqQixFQUFxQjtBQUNqQixxQkFBS0EsTUFBTCxJQUFlLENBQWY7QUFDSDtBQUNELGlCQUFLSCxJQUFMO0FBQ0g7Ozs7OztrQkE5QmdCYixJIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFBsYXllciBmcm9tICcuL2phdmFzY3JpcHQvcGxheWVyJztcbmltcG9ydCBHYW1lIGZyb20gJy4vamF2YXNjcmlwdC9nYW1lJztcbmltcG9ydCBHYW1lVmlldyBmcm9tICcuL2phdmFzY3JpcHQvZ2FtZV92aWV3JztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiY2FudmFzXCIpWzBdO1xuICAgIGNhbnZhcy53aWR0aCA9IDEwMDA7XG4gICAgY2FudmFzLmhlaWdodCA9IDYwMDtcblxuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cblxuICAgIGNvbnN0IGdhbWVWaWV3ID0gbmV3IEdhbWVWaWV3KGNhbnZhcywgY3R4KTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZSA9PiBnYW1lVmlldy5nYW1lLnBsYXllci5oYW5kbGVQcmVzcyhlKSk7XG4gICAgZ2FtZVZpZXcuYW5pbWF0ZSgpO1xufSk7XG5cblxuXG4iLCJpbXBvcnQgUGxheWVyIGZyb20gXCIuL3BsYXllclwiO1xuaW1wb3J0IFdhbGwgZnJvbSBcIi4vd2FsbFwiO1xuXG5jb25zdCBESU1fWCA9IDEwMDA7XG5jb25zdCBESU1fWSA9IDYwMDtcbmNvbnN0IENPTE9SX1NDSEVNRSA9IFtcIiNDQzI5MzM2XCIsIFwiRUJCQUI5XCIsIFwiIzM4ODY5N1wiLCBcIiNCRkZGRTFcIl1cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY3R4KSB7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyKHRoaXMuY2FudmFzLCB0aGlzLmN0eClcbiAgICAgICAgdGhpcy53YWxscyA9IFtdO1xuICAgICAgICB0aGlzLnRpbWVyID0gbnVsbDtcbiAgICAgICAgXG4gICAgfVxuXG5cbiAgICBhZGRXYWxsKCl7XG4gICAgICAgIGNvbnN0IHJvdGF0aW9ucyA9IFstLjAwMSwgLjAwMSwgLS4wMDIsIC4wMDIsIC0uMDAyLCAtLjAwMywgLjAwM107XG4gICAgICAgIGNvbnN0IHdhbGwgPSBuZXcgV2FsbCh0aGlzLmN0eCwgdGhpcy5jYW52YXMud2lkdGggLyAyLCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyLCB0aGlzLmNhbnZhcy53aWR0aCAvIDIsIENPTE9SX1NDSEVNRVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBDT0xPUl9TQ0hFTUUubGVuZ3RoKV0sIHJvdGF0aW9uc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiByb3RhdGlvbnMubGVuZ3RoKV0pXG4gICAgICAgIHRoaXMud2FsbHMucHVzaCh3YWxsKTtcbiAgICAgICAgdGhpcy50aW1lciA9IG51bGw7XG4gICAgfVxuXG4gICAgYWxsV2FsbHMoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMud2FsbHM7XG4gICAgfVxuXG5cblxuXG4gICAgZHJhdygpIHtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIERJTV9YLCBESU1fWSk7XG4gICAgICAgIGNvbnN0IGNlbnRlclggPSBESU1fWCAvIDI7XG4gICAgICAgIGNvbnN0IGNlbnRlclkgPSBESU1fWSAvIDI7XG4gICAgICAgIHRoaXMud2FsbHMuZm9yRWFjaCh3YWxsID0+IHtcbiAgICAgICAgICAgIHdhbGwudXBkYXRlKCk7XG4gICAgICAgIH0pXG4gICAgXG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZVJlY3QoY2VudGVyWCAtIDI1LCBjZW50ZXJZIC0gMjUsIDUwLCA1MCk7XG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5wbGF5ZXIuZHJhdygpO1xuICAgIH1cblxuICAgIHVwZGF0ZSgpe1xuICAgICAgICBpZih0aGlzLndhbGxzLmxlbmd0aCA8IDggJiYgdGhpcy50aW1lciA9PT0gbnVsbCl7XG4gICAgICAgICAgICB0aGlzLnRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB0aGlzLmFkZFdhbGwoKSwgMTAwMCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMud2FsbHMubGVuZ3RoID4gMCAmJiB0aGlzLndhbGxzWzBdLnJhZGl1cyA8IDMwKSB7IHRoaXMud2FsbHMuc2hpZnQoKX1cbiAgICAgICAgdGhpcy5kcmF3KCk7XG4gICAgICAgIH1cbn0iLCJpbXBvcnQgR2FtZSBmcm9tICcuL2dhbWUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lVmlldyB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBjdHgpIHtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmdhbWUgPSBuZXcgR2FtZSh0aGlzLmNhbnZhcywgdGhpcy5jdHgpO1xuICAgIH1cblxuXG4gICAgYW5pbWF0ZSgpIHtcbiAgICAgICAgdGhpcy5nYW1lLnVwZGF0ZSgpO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlLmJpbmQodGhpcykpO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY3R4KSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5wbGF5ZXJQb3MgPSBcImxlZnRcIjtcbiAgICAgICAgdGhpcy5kcmF3ID0gdGhpcy5kcmF3LmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgZHJhdygpIHtcbiAgICAgICAgc3dpdGNoICh0aGlzLnBsYXllclBvcykge1xuICAgICAgICAgICAgY2FzZSBcImxlZnRcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5tb3ZlVG8odGhpcy5jYW52YXMud2lkdGggLyAyIC0gMzAsIHRoaXMuY2FudmFzLmhlaWdodCAvIDIgKyA1KTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8odGhpcy5jYW52YXMud2lkdGggLyAyIC0gNDAsIHRoaXMuY2FudmFzLmhlaWdodCAvIDIpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyh0aGlzLmNhbnZhcy53aWR0aCAvIDIgLSAzMCwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMiAtIDUpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ1cFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4Lm1vdmVUbyh0aGlzLmNhbnZhcy53aWR0aCAvIDIgLSA1LCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyIC0gMzApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyh0aGlzLmNhbnZhcy53aWR0aCAvIDIsIHRoaXMuY2FudmFzLmhlaWdodCAvIDIgLSA0MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKHRoaXMuY2FudmFzLndpZHRoIC8gMiArIDUsIHRoaXMuY2FudmFzLmhlaWdodCAvIDIgLSAzMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInJpZ2h0XCI6XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubW92ZVRvKHRoaXMuY2FudmFzLndpZHRoIC8gMiArIDMwLCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyICsgNSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKHRoaXMuY2FudmFzLndpZHRoIC8gMiArIDQwLCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8odGhpcy5jYW52YXMud2lkdGggLyAyICsgMzAsIHRoaXMuY2FudmFzLmhlaWdodCAvIDIgLSA1KTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiZG93blwiOlxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4Lm1vdmVUbyh0aGlzLmNhbnZhcy53aWR0aCAvIDIgLSA1LCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyICsgMzApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyh0aGlzLmNhbnZhcy53aWR0aCAvIDIsIHRoaXMuY2FudmFzLmhlaWdodCAvIDIgKyA0MCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKHRoaXMuY2FudmFzLndpZHRoIC8gMiArIDUsIHRoaXMuY2FudmFzLmhlaWdodCAvIDIgKyAzMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZVByZXNzKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBzd2l0Y2ggKGUua2V5KSB7XG4gICAgICAgICAgICBjYXNlICdBcnJvd1VwJzpcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllclBvcyA9IFwidXBcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0Fycm93RG93bic6XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJQb3MgPSBcImRvd25cIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0Fycm93TGVmdCc6XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJQb3MgPSBcImxlZnRcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0Fycm93UmlnaHQnOlxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyUG9zID0gXCJyaWdodFwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG59XG4iLCJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdhbGwge1xuICAgIGNvbnN0cnVjdG9yKGN0eCwgeCwgeSwgcmFkaXVzLCBjb2xvciwgcm90YXRpb24pIHtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMucmFkaXVzID0gcmFkaXVzO1xuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgICAgIHRoaXMudGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICB0aGlzLmFuZ2xlID0gTWF0aC5yYW5kb20oKSAqIDM2MDtcbiAgICAgICAgdGhpcy5yb3RhdGlvbiA9IHJvdGF0aW9uO1xuICAgIH1cblxuICAgIGRyYXcoKXtcbiAgICAgICAgY29uc3QgbmV3VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICBsZXQgZGlmZiA9IG5ld1RpbWUgLSB0aGlzLnRpbWU7XG4gICAgICAgIHRoaXMudGltZSA9IG5ld1RpbWU7XG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5hcmModGhpcy54LCAgdGhpcy55LCB0aGlzLnJhZGl1cywgMCArIHRoaXMuYW5nbGUsIDIgKiBNYXRoLlBJIC0gMS4yICsgdGhpcy5hbmdsZSwgZmFsc2UpO1xuICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDg7XG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuICAgICAgICB0aGlzLmFuZ2xlICs9IGRpZmYgKiB0aGlzLnJvdGF0aW9uO1xuICAgICAgICB0aGlzLmFuZ2xlICU9IDIgKiBNYXRoLlBJO1xuICAgIH1cblxuICAgIHVwZGF0ZSgpe1xuICAgICAgICBpZih0aGlzLnJhZGl1cyA+IDMwKSB7XG4gICAgICAgICAgICB0aGlzLnJhZGl1cyAtPSAzO1xuICAgICAgICB9IFxuICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==