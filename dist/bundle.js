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

    var game = new _game2.default(canvas, ctx, handlePress);
    var gameView = new _game_view2.default(canvas, game, ctx);

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
    function Game(canvas, ctx, handlePress) {
        _classCallCheck(this, Game);

        this.handlePress = handlePress;
        this.ctx = ctx;
        this.canvas = canvas;
        this.player = new _player2.default(this.canvas, 5, this.ctx);
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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GameView = function () {
    function GameView(canvas, game, ctx) {
        _classCallCheck(this, GameView);

        this.game = game;
        this.ctx = ctx;
        this.canvas = canvas;
    }

    _createClass(GameView, [{
        key: "animate",
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
    function Player(canvas, size, ctx) {
        _classCallCheck(this, Player);

        this.canvas = canvas;
        this.size = size;
        this.ctx = ctx;
        this.playerPos = "left";
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
                    this.player.playerPos = "up";
                    break;
                case 'ArrowDown':
                    this.player.playerPos = "down";
                    break;
                case 'ArrowLeft':
                    this.player.playerPos = "left";
                    break;
                case 'ArrowRight':
                    this.player.playerPos = "right";
                    break;
            }
        }
    }]);

    return Player;
}();

exports.default = Player;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qYXZhc2NyaXB0L2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2phdmFzY3JpcHQvZ2FtZV92aWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9qYXZhc2NyaXB0L3BsYXllci5qcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXMiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsIndpZHRoIiwiaGVpZ2h0IiwiY3R4IiwiZ2V0Q29udGV4dCIsImdhbWUiLCJHYW1lIiwiaGFuZGxlUHJlc3MiLCJnYW1lVmlldyIsIkdhbWVWaWV3IiwiYW5pbWF0ZSIsIkRJTV9YIiwiRElNX1kiLCJwbGF5ZXIiLCJQbGF5ZXIiLCJjbGVhclJlY3QiLCJjZW50ZXJYIiwiY2VudGVyWSIsInN0cm9rZVJlY3QiLCJzdHJva2UiLCJkcmF3IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYmluZCIsInNpemUiLCJwbGF5ZXJQb3MiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJsaW5lVG8iLCJmaWxsIiwiZSIsImtleSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMx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QUFTeUIsSUFBVDtBQUNBO0FBQ0o7QUFDSSwyQkFBTyxJQUFQO0FBOUJSO0FBZ0NIOzs7b0NBRVdDLEMsRUFBRztBQUNmLG9CQUFRQSxFQUFFQyxHQUFWO0FBQ0kscUJBQUssU0FBTDtBQUNJLHlCQUFLakIsTUFBTCxDQUFZVyxTQUFaLEdBQXdCLElBQXhCO0FBQ0E7QUFDSixxQkFBSyxXQUFMO0FBQ0kseUJBQUtYLE1BQUwsQ0FBWVcsU0FBWixHQUF3QixNQUF4QjtBQUNBO0FBQ0oscUJBQUssV0FBTDtBQUNJLHlCQUFLWCxNQUFMLENBQVlXLFNBQVosR0FBd0IsTUFBeEI7QUFDQTtBQUNKLHFCQUFLLFlBQUw7QUFDSSx5QkFBS1gsTUFBTCxDQUFZVyxTQUFaLEdBQXdCLE9BQXhCO0FBQ0E7QUFaUjtBQWVDOzs7Ozs7a0JBNURnQlYsTSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBQbGF5ZXIgZnJvbSAnLi9qYXZhc2NyaXB0L3BsYXllcic7XG5pbXBvcnQgR2FtZSBmcm9tICcuL2phdmFzY3JpcHQvZ2FtZSc7XG5pbXBvcnQgR2FtZVZpZXcgZnJvbSAnLi9qYXZhc2NyaXB0L2dhbWVfdmlldyc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImNhbnZhc1wiKVswXTtcbiAgICBjYW52YXMud2lkdGggPSAxMDAwO1xuICAgIGNhbnZhcy5oZWlnaHQgPSA2MDA7XG5cbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG4gICAgXG5cbiAgICBjb25zdCBnYW1lID0gbmV3IEdhbWUoY2FudmFzLCBjdHgsIGhhbmRsZVByZXNzKTtcbiAgICBjb25zdCBnYW1lVmlldyA9IG5ldyBHYW1lVmlldyhjYW52YXMsIGdhbWUsIGN0eCk7XG4gICAgXG4gICAgZ2FtZVZpZXcuYW5pbWF0ZSgpO1xufSk7XG5cblxuXG4iLCJpbXBvcnQgUGxheWVyIGZyb20gXCIuL3BsYXllclwiO1xuXG5jb25zdCBESU1fWCA9IDEwMDA7XG5jb25zdCBESU1fWSA9IDYwMDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBjdHgsIGhhbmRsZVByZXNzKXtcbiAgICAgICAgdGhpcy5oYW5kbGVQcmVzcyA9IGhhbmRsZVByZXNzXG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyKHRoaXMuY2FudmFzLCA1LCB0aGlzLmN0eClcbiAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIFxuXG4gICAgICAgIFxuXG5cbiAgICBkcmF3KCl7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCBESU1fWCwgRElNX1kpO1xuICAgICAgICBjb25zdCBjZW50ZXJYID0gRElNX1ggLyAyO1xuICAgICAgICBjb25zdCBjZW50ZXJZID0gRElNX1kgLyAyO1xuICAgICAgICB0aGlzLmN0eC5zdHJva2VSZWN0KGNlbnRlclggLSAyNSwgY2VudGVyWSAtIDI1LCA1MCwgNTApO1xuICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMucGxheWVyLmRyYXcoKTtcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVZpZXcgeyBcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGdhbWUsIGN0eCl7XG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICB9XG5cblxuICAgIGFuaW1hdGUoKXtcbiAgICAgICAgdGhpcy5nYW1lLmRyYXcodGhpcy5jdHgpO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlLmJpbmQodGhpcykpO1xuICAgIH1cbn0iLCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIHsgXG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBzaXplLCBjdHgpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuc2l6ZSA9IHNpemU7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLnBsYXllclBvcyA9IFwibGVmdFwiO1xuICAgICAgICBcbiAgICB9XG5cbiAgICBkcmF3KCl7XG4gICAgICAgIHN3aXRjaCh0aGlzLnBsYXllclBvcyl7XG4gICAgICAgICAgICBjYXNlIFwibGVmdFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4Lm1vdmVUbyh0aGlzLmNhbnZhcy53aWR0aCAvIDIgLSAzMCwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMiArIDUpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyh0aGlzLmNhbnZhcy53aWR0aCAvIDIgLSA0MCwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMik7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKHRoaXMuY2FudmFzLndpZHRoIC8gMiAtIDMwLCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyIC0gNSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInVwXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubW92ZVRvKHRoaXMuY2FudmFzLndpZHRoIC8gMiAtIDUsIHRoaXMuY2FudmFzLmhlaWdodCAvIDIgLSAzMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKHRoaXMuY2FudmFzLndpZHRoIC8gMiwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMiAtIDQwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8odGhpcy5jYW52YXMud2lkdGggLyAyICsgNSwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMiAtIDMwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwicmlnaHRcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5tb3ZlVG8odGhpcy5jYW52YXMud2lkdGggLyAyICsgMzAsIHRoaXMuY2FudmFzLmhlaWdodCAvIDIgKyA1KTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8odGhpcy5jYW52YXMud2lkdGggLyAyICsgNDAsIHRoaXMuY2FudmFzLmhlaWdodCAvIDIpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyh0aGlzLmNhbnZhcy53aWR0aCAvIDIgKzMwLCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyIC0gNSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImRvd25cIjpcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5tb3ZlVG8odGhpcy5jYW52YXMud2lkdGggLyAyIC0gNSwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMiArIDMwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8odGhpcy5jYW52YXMud2lkdGggLyAyLCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyICsgNDApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyh0aGlzLmNhbnZhcy53aWR0aCAvIDIgKyA1LCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyICsgMzApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6IFxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlUHJlc3MoZSkge1xuICAgIHN3aXRjaCAoZS5rZXkpIHtcbiAgICAgICAgY2FzZSAnQXJyb3dVcCc6XG4gICAgICAgICAgICB0aGlzLnBsYXllci5wbGF5ZXJQb3MgPSBcInVwXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnQXJyb3dEb3duJzpcbiAgICAgICAgICAgIHRoaXMucGxheWVyLnBsYXllclBvcyA9IFwiZG93blwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0Fycm93TGVmdCc6XG4gICAgICAgICAgICB0aGlzLnBsYXllci5wbGF5ZXJQb3MgPSBcImxlZnRcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdBcnJvd1JpZ2h0JzpcbiAgICAgICAgICAgIHRoaXMucGxheWVyLnBsYXllclBvcyA9IFwicmlnaHRcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=