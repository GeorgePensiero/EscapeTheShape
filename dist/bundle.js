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
    document.addEventListener('keyup', function (e) {
        return gameView.game.player.handleKeyUp(e);
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
            var rotations = [-.0015, .0015, -.002, .002, -.002, -.003, .003];
            var wall = new _wall2.default(this.ctx, this.canvas.width / 2, this.canvas.height / 2, this.canvas.width / 2, "#388697", rotations[Math.floor(Math.random() * rotations.length)]);
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
            this.ctx.lineWidth = 1;
            this.ctx.strokeStyle = "black";
            this.ctx.strokeRect(centerX - 25, centerY - 25, 50, 50);
            this.walls.forEach(function (wall) {
                wall.update();
                // wall.gap.update();
            });
            this.player.draw(5);
            if (this.walls.length) {
                this.checkCollision(this.player, this.walls[0].gap);
            }
            // this.ctx.stroke();
            // this.ctx.closePath();
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
    }, {
        key: "checkCollision",
        value: function checkCollision(player, gap) {
            var collision = false;
            var gapPos = gap.getPosition();
            var playerPos = player.getPosition();

            if (gap.radius === 55) {
                if (playerPos > gapPos[start] && playerPos < gapPos[end]) collision = true;
            }
            if (collision === true) {
                this.ctx.strokeStyle = 'blue';
                this.ctx.strokeRect(DIM_X / 2 - 25, DIM_Y / 2 - 25, 50, 50);
            }
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

/***/ "./src/javascript/gap.js":
/*!*******************************!*\
  !*** ./src/javascript/gap.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Gap = function () {
    function Gap(ctx, x, y, radius, angle, rotation) {
        _classCallCheck(this, Gap);

        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.rotation = rotation;
        this.angle = angle;
        this.endAngle = 2 * Math.PI - 1.2;
    }

    _createClass(Gap, [{
        key: "draw",
        value: function draw() {
            this.ctx.beginPath();
            this.ctx.strokeStyle = "#FF0000";
            this.ctx.lineWidth = 8;
            this.ctx.arc(this.x, this.y, this.radius, this.angle, this.endAngle + this.angle, true);
            this.ctx.stroke();
            this.ctx.closePath();
        }
    }, {
        key: "update",
        value: function update() {
            if (this.radius > 30) {
                this.radius -= 3;
            }
            this.draw();
        }
    }, {
        key: "getPosition",
        value: function getPosition() {
            var position = {
                start: this.angle,
                end: this.endAngle + this.angle
            };
            return position;
        }
    }, {
        key: "getPoint",
        value: function getPoint(c1, c2, radius, angle) {
            return [c1 + Math.cos(angle) * radius, c2 + Math.sin(angle) * radius];
        }
    }]);

    return Gap;
}();

exports.default = Gap;

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
        this.size = 5;
        this.radius = 55;
        this.speed = 7;
        this.direction = 0;
        this.angle = 30;
        this.playerPos = "left";
        this.draw = this.draw.bind(this);
    }

    _createClass(Player, [{
        key: 'draw',
        value: function draw() {
            // switch (this.playerPos) {
            //     case "left":
            //         this.ctx.beginPath();
            //         this.ctx.moveTo(this.canvas.width / 2 - 30, this.canvas.height / 2 + 5);
            //         this.ctx.lineTo(this.canvas.width / 2 - 40, this.canvas.height / 2);
            //         this.ctx.lineTo(this.canvas.width / 2 - 30, this.canvas.height / 2 - 5);
            //         this.ctx.fill();
            //         break;
            //     case "up":
            //         this.ctx.beginPath();
            //         this.ctx.moveTo(this.canvas.width / 2 - 5, this.canvas.height / 2 - 30);
            //         this.ctx.lineTo(this.canvas.width / 2, this.canvas.height / 2 - 40);
            //         this.ctx.lineTo(this.canvas.width / 2 + 5, this.canvas.height / 2 - 30);
            //         this.ctx.fill();
            //         break;
            //     case "right":
            //         this.ctx.beginPath();
            //         this.ctx.moveTo(this.canvas.width / 2 + 30, this.canvas.height / 2 + 5);
            //         this.ctx.lineTo(this.canvas.width / 2 + 40, this.canvas.height / 2);
            //         this.ctx.lineTo(this.canvas.width / 2 + 30, this.canvas.height / 2 - 5);
            //         this.ctx.fill();
            //         break;
            //     case "down":
            //         this.ctx.beginPath();
            //         this.ctx.moveTo(this.canvas.width / 2 - 5, this.canvas.height / 2 + 30);
            //         this.ctx.lineTo(this.canvas.width / 2, this.canvas.height / 2 + 40);
            //         this.ctx.lineTo(this.canvas.width / 2 + 5, this.canvas.height / 2 + 30);
            //         this.ctx.fill();
            //         break;
            //     default:
            //         return null;
            var dx = this.canvas.width / 2 + this.radius * Math.cos(this.angle * Math.PI / 180);
            var dy = this.canvas.height / 2 + this.radius * Math.sin(this.angle * Math.PI / 180);
            this.angle = this.angle + this.direction * this.speed;

            if (this.angle < 0) {
                this.angle = 360 - this.angle;
            } else if (this.angle > 360) {
                this.angle %= 360;
            }
            // this.ctx.save();
            this.ctx.translate(dx, dy);
            this.ctx.rotate(this.angle * Math.PI / 180);
            // this.ctx.restore();
            this.ctx.translate(-dx, -dy);

            this.ctx.beginPath();
            this.ctx.moveTo(dx - this.size, dy - this.size);
            this.ctx.lineTo(dx + this.size, dy);
            this.ctx.lineTo(dx - this.size, dy + this.size);
            this.ctx.fill();
            this.ctx.closePath();

            this.ctx.translate(dx, dy);
            this.ctx.rotate(-this.angle * Math.PI / 180);
            this.ctx.translate(-dx, -dy);
        }
    }, {
        key: 'handlePress',
        value: function handlePress(e) {
            e.preventDefault();
            switch (e.key) {
                // case 'ArrowUp':
                //     this.playerPos = "up";
                //     break;
                // case 'ArrowDown':
                //     this.playerPos = "down";
                //     break;
                case 'ArrowLeft':
                    this.direction = -1;
                    break;
                case 'ArrowRight':
                    this.direction = 1;
                    break;
            }
        }
    }, {
        key: 'handleKeyUp',
        value: function handleKeyUp(e) {
            this.direction = 0;
        }
    }, {
        key: 'getPosition',
        value: function getPosition() {
            return this.angle;
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

var _gap = __webpack_require__(/*! ./gap */ "./src/javascript/gap.js");

var _gap2 = _interopRequireDefault(_gap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
        this.endAngle = 2 * Math.PI - 1.2;
        this.gap = new _gap2.default(this.ctx, this.x, this.y, this.radius, this.angle, this.rotation, this.time);
    }

    _createClass(Wall, [{
        key: "draw",
        value: function draw() {
            var newTime = new Date().getTime();
            var diff = newTime - this.time;
            this.time = newTime;
            this.ctx.beginPath();
            this.ctx.strokeStyle = this.color;
            this.ctx.lineWidth = 8;
            this.ctx.arc(this.x, this.y, this.radius, this.angle, this.endAngle + this.angle, false);
            this.ctx.stroke();
            this.ctx.closePath();
            this.angle += diff * this.rotation;
            this.gap.angle += diff * this.rotation;
            this.angle %= 2 * Math.PI;
            this.gap.angle %= 2 * Math.PI;
        }
    }, {
        key: "update",
        value: function update() {
            if (this.radius > 30) {
                this.radius -= 3;
                this.gap.radius -= 3;
            }
            this.gap.draw();
            this.draw();
        }
    }]);

    return Wall;
}();

exports.default = Wall;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qYXZhc2NyaXB0L2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2phdmFzY3JpcHQvZ2FtZV92aWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9qYXZhc2NyaXB0L2dhcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvamF2YXNjcmlwdC9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2phdmFzY3JpcHQvd2FsbC5qcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXMiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsIndpZHRoIiwiaGVpZ2h0IiwiY3R4IiwiZ2V0Q29udGV4dCIsImdhbWVWaWV3IiwiR2FtZVZpZXciLCJnYW1lIiwicGxheWVyIiwiaGFuZGxlUHJlc3MiLCJlIiwiaGFuZGxlS2V5VXAiLCJhbmltYXRlIiwiRElNX1giLCJESU1fWSIsIkNPTE9SX1NDSEVNRSIsIkdhbWUiLCJQbGF5ZXIiLCJ3YWxscyIsInRpbWVyIiwicm90YXRpb25zIiwid2FsbCIsIldhbGwiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJwdXNoIiwiY2xlYXJSZWN0IiwiY2VudGVyWCIsImNlbnRlclkiLCJsaW5lV2lkdGgiLCJzdHJva2VTdHlsZSIsInN0cm9rZVJlY3QiLCJmb3JFYWNoIiwidXBkYXRlIiwiZHJhdyIsImNoZWNrQ29sbGlzaW9uIiwiZ2FwIiwic2V0VGltZW91dCIsImFkZFdhbGwiLCJyYWRpdXMiLCJzaGlmdCIsImNvbGxpc2lvbiIsImdhcFBvcyIsImdldFBvc2l0aW9uIiwicGxheWVyUG9zIiwic3RhcnQiLCJlbmQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJiaW5kIiwiR2FwIiwieCIsInkiLCJhbmdsZSIsInJvdGF0aW9uIiwiZW5kQW5nbGUiLCJQSSIsImJlZ2luUGF0aCIsImFyYyIsInN0cm9rZSIsImNsb3NlUGF0aCIsInBvc2l0aW9uIiwiYzEiLCJjMiIsImNvcyIsInNpbiIsInNpemUiLCJzcGVlZCIsImRpcmVjdGlvbiIsImR4IiwiZHkiLCJ0cmFuc2xhdGUiLCJyb3RhdGUiLCJtb3ZlVG8iLCJsaW5lVG8iLCJmaWxsIiwicHJldmVudERlZmF1bHQiLCJrZXkiLCJjb2xvciIsInRpbWUiLCJEYXRlIiwiZ2V0VGltZSIsIm5ld1RpbWUiLCJkaWZmIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQUEsU0FBU0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQVk7QUFDdEQsUUFBTUMsU0FBU0YsU0FBU0csb0JBQVQsQ0FBOEIsUUFBOUIsRUFBd0MsQ0FBeEMsQ0FBZjtBQUNBRCxXQUFPRSxLQUFQLEdBQWUsSUFBZjtBQUNBRixXQUFPRyxNQUFQ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O0FBQ0EsaUJBQUtQLEtBQUwsSUFBYzhCLE9BQU8sS0FBSzdCLFFBQTFCO0FBQ0EsaUJBQUtqQixHQUFMLENBQVNnQixLQUFULElBQWtCOEIsT0FBTyxLQUFLN0IsUUFBOUI7QUFDQSxpQkFBS0QsS0FBTCxJQUFjLElBQUkvQixLQUFLa0MsRUFBdkI7QUFDQSxpQkFBS25CLEdBQUwsQ0FBU2dCLEtBQVQsSUFBa0IsSUFBSS9CLEtBQUtrQyxFQUEzQjtBQUNIOzs7aUNBRU87QUFDSixnQkFBRyxLQUFLaEIsTUFBTCxHQUFjLEVBQWpCLEVBQXFCO0FBQ2pCLHFCQUFLQSxNQUFMLElBQWUsQ0FBZjtBQUNBLHFCQUFLSCxHQUFMLENBQVNHLE1BQVQsSUFBbUIsQ0FBbkI7QUFDSDtBQUNELGlCQUFLSCxHQUFMLENBQVNGLElBQVQ7QUFDQSxpQkFBS0EsSUFBTDtBQUNIOzs7Ozs7a0JBckNnQmQsSSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBQbGF5ZXIgZnJvbSAnLi9qYXZhc2NyaXB0L3BsYXllcic7XG5pbXBvcnQgR2FtZSBmcm9tICcuL2phdmFzY3JpcHQvZ2FtZSc7XG5pbXBvcnQgR2FtZVZpZXcgZnJvbSAnLi9qYXZhc2NyaXB0L2dhbWVfdmlldyc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImNhbnZhc1wiKVswXTtcbiAgICBjYW52YXMud2lkdGggPSAxMDAwO1xuICAgIGNhbnZhcy5oZWlnaHQgPSA2MDA7XG5cbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG5cbiAgICBjb25zdCBnYW1lVmlldyA9IG5ldyBHYW1lVmlldyhjYW52YXMsIGN0eCk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGUgPT4gZ2FtZVZpZXcuZ2FtZS5wbGF5ZXIuaGFuZGxlUHJlc3MoZSkpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZSA9PiBnYW1lVmlldy5nYW1lLnBsYXllci5oYW5kbGVLZXlVcChlKSk7XG4gICAgZ2FtZVZpZXcuYW5pbWF0ZSgpO1xufSk7XG5cblxuXG4iLCJpbXBvcnQgUGxheWVyIGZyb20gXCIuL3BsYXllclwiO1xuaW1wb3J0IFdhbGwgZnJvbSBcIi4vd2FsbFwiO1xuXG5jb25zdCBESU1fWCA9IDEwMDA7XG5jb25zdCBESU1fWSA9IDYwMDtcbmNvbnN0IENPTE9SX1NDSEVNRSA9IFtcIiNDQzI5MzM2XCIsIFwiRUJCQUI5XCIsIFwiIzM4ODY5N1wiLCBcIiNCRkZGRTFcIl1cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY3R4KSB7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyKHRoaXMuY2FudmFzLCB0aGlzLmN0eClcbiAgICAgICAgdGhpcy53YWxscyA9IFtdO1xuICAgICAgICB0aGlzLnRpbWVyID0gbnVsbDtcbiAgICAgICAgXG4gICAgfVxuXG5cbiAgICBhZGRXYWxsKCl7XG4gICAgICAgIGNvbnN0IHJvdGF0aW9ucyA9IFstLjAwMTUsIC4wMDE1LCAtLjAwMiwgLjAwMiwgLS4wMDIsIC0uMDAzLCAuMDAzXTtcbiAgICAgICAgY29uc3Qgd2FsbCA9IG5ldyBXYWxsKHRoaXMuY3R4LCB0aGlzLmNhbnZhcy53aWR0aCAvIDIsIHRoaXMuY2FudmFzLmhlaWdodCAvIDIsIHRoaXMuY2FudmFzLndpZHRoIC8gMiwgXCIjMzg4Njk3XCIsIHJvdGF0aW9uc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiByb3RhdGlvbnMubGVuZ3RoKV0pXG4gICAgICAgIHRoaXMud2FsbHMucHVzaCh3YWxsKTtcbiAgICAgICAgdGhpcy50aW1lciA9IG51bGw7XG4gICAgfVxuXG4gICAgYWxsV2FsbHMoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMud2FsbHM7XG4gICAgfVxuXG4gICAgXG5cblxuICAgIGRyYXcoKSB7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCBESU1fWCwgRElNX1kpO1xuICAgICAgICBjb25zdCBjZW50ZXJYID0gRElNX1ggLyAyO1xuICAgICAgICBjb25zdCBjZW50ZXJZID0gRElNX1kgLyAyO1xuICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSAxO1xuICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIlxuICAgICAgICB0aGlzLmN0eC5zdHJva2VSZWN0KGNlbnRlclggLSAyNSwgY2VudGVyWSAtIDI1LCA1MCwgNTApO1xuICAgICAgICB0aGlzLndhbGxzLmZvckVhY2god2FsbCA9PiB7XG4gICAgICAgICAgICB3YWxsLnVwZGF0ZSgpO1xuICAgICAgICAgICAgLy8gd2FsbC5nYXAudXBkYXRlKCk7XG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMucGxheWVyLmRyYXcoNSk7XG4gICAgICAgIGlmKHRoaXMud2FsbHMubGVuZ3RoKXtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tDb2xsaXNpb24odGhpcy5wbGF5ZXIsIHRoaXMud2FsbHNbMF0uZ2FwKTtcbiAgICAgICAgfVxuICAgICAgICAvLyB0aGlzLmN0eC5zdHJva2UoKTtcbiAgICAgICAgLy8gdGhpcy5jdHguY2xvc2VQYXRoKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlKCl7XG4gICAgICAgIGlmKHRoaXMud2FsbHMubGVuZ3RoIDwgOCAmJiB0aGlzLnRpbWVyID09PSBudWxsKXtcbiAgICAgICAgICAgIHRoaXMudGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHRoaXMuYWRkV2FsbCgpLCAxMDAwKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy53YWxscy5sZW5ndGggPiAwICYmIHRoaXMud2FsbHNbMF0ucmFkaXVzIDwgMzApIHsgdGhpcy53YWxscy5zaGlmdCgpfVxuICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICAgICAgfVxuXG4gICAgY2hlY2tDb2xsaXNpb24ocGxheWVyLCBnYXApe1xuICAgICAgICBsZXQgY29sbGlzaW9uID0gZmFsc2U7XG4gICAgICAgIGxldCBnYXBQb3MgPSBnYXAuZ2V0UG9zaXRpb24oKTtcbiAgICAgICAgbGV0IHBsYXllclBvcyA9IHBsYXllci5nZXRQb3NpdGlvbigpO1xuXG4gICAgICAgIGlmKGdhcC5yYWRpdXMgPT09IDU1KXtcbiAgICAgICAgICAgIGlmKHBsYXllclBvcyA+IGdhcFBvc1tzdGFydF0gJiYgcGxheWVyUG9zIDwgZ2FwUG9zW2VuZF0pIGNvbGxpc2lvbiA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYoY29sbGlzaW9uID09PSB0cnVlKXtcbiAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gJ2JsdWUnXG4gICAgICAgICAgICB0aGlzLmN0eC5zdHJva2VSZWN0KERJTV9YIC8gMiAtIDI1LCBESU1fWSAvIDIgLSAyNSwgNTAsIDUwKVxuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCBHYW1lIGZyb20gJy4vZ2FtZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVWaWV3IHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGN0eCkge1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuZ2FtZSA9IG5ldyBHYW1lKHRoaXMuY2FudmFzLCB0aGlzLmN0eCk7XG4gICAgfVxuXG5cbiAgICBhbmltYXRlKCkge1xuICAgICAgICB0aGlzLmdhbWUudXBkYXRlKCk7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUuYmluZCh0aGlzKSk7XG4gICAgfVxufSIsIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYXAge1xuICAgIGNvbnN0cnVjdG9yKGN0eCwgeCAsIHksIHJhZGl1cywgYW5nbGUsIHJvdGF0aW9uKXtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMucmFkaXVzID0gcmFkaXVzOyBcbiAgICAgICAgdGhpcy5yb3RhdGlvbiA9IHJvdGF0aW9uO1xuICAgICAgICB0aGlzLmFuZ2xlID0gYW5nbGU7XG4gICAgICAgIHRoaXMuZW5kQW5nbGUgPSAyICogTWF0aC5QSSAtIDEuMjtcbiAgICB9XG5cbiAgICBkcmF3KCl7XG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IFwiI0ZGMDAwMFwiXG4gICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDg7XG4gICAgICAgIHRoaXMuY3R4LmFyYyh0aGlzLngsIHRoaXMueSwgdGhpcy5yYWRpdXMsIHRoaXMuYW5nbGUsIHRoaXMuZW5kQW5nbGUgKyB0aGlzLmFuZ2xlLCB0cnVlKTtcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMucmFkaXVzID4gMzApIHtcbiAgICAgICAgICAgIHRoaXMucmFkaXVzIC09IDM7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kcmF3KCk7XG4gICAgfVxuXG4gICAgZ2V0UG9zaXRpb24oKXtcbiAgICAgICBjb25zdCBwb3NpdGlvbiA9IHtcbiAgICAgICAgICAgc3RhcnQ6IHRoaXMuYW5nbGUsXG4gICAgICAgICAgIGVuZDogdGhpcy5lbmRBbmdsZSArIHRoaXMuYW5nbGUsXG4gICAgICAgfVxuICAgICAgIHJldHVybiBwb3NpdGlvbjtcbiAgICB9XG5cbiAgICBnZXRQb2ludChjMSwgYzIsIHJhZGl1cywgYW5nbGUpIHtcbiAgICAgICAgcmV0dXJuIFtjMSArIE1hdGguY29zKGFuZ2xlKSAqIHJhZGl1cywgYzIgKyBNYXRoLnNpbihhbmdsZSkgKiByYWRpdXNdO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY3R4KSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5zaXplID0gNTtcbiAgICAgICAgdGhpcy5yYWRpdXMgPSA1NTtcbiAgICAgICAgdGhpcy5zcGVlZCA9IDc7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gMDtcbiAgICAgICAgdGhpcy5hbmdsZSA9IDMwO1xuICAgICAgICB0aGlzLnBsYXllclBvcyA9IFwibGVmdFwiO1xuICAgICAgICB0aGlzLmRyYXcgPSB0aGlzLmRyYXcuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBkcmF3KCkge1xuICAgICAgICAvLyBzd2l0Y2ggKHRoaXMucGxheWVyUG9zKSB7XG4gICAgICAgIC8vICAgICBjYXNlIFwibGVmdFwiOlxuICAgICAgICAvLyAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuY3R4Lm1vdmVUbyh0aGlzLmNhbnZhcy53aWR0aCAvIDIgLSAzMCwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMiArIDUpO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyh0aGlzLmNhbnZhcy53aWR0aCAvIDIgLSA0MCwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMik7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5jdHgubGluZVRvKHRoaXMuY2FudmFzLndpZHRoIC8gMiAtIDMwLCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyIC0gNSk7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICAvLyAgICAgICAgIGJyZWFrO1xuICAgICAgICAvLyAgICAgY2FzZSBcInVwXCI6XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5jdHgubW92ZVRvKHRoaXMuY2FudmFzLndpZHRoIC8gMiAtIDUsIHRoaXMuY2FudmFzLmhlaWdodCAvIDIgLSAzMCk7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5jdHgubGluZVRvKHRoaXMuY2FudmFzLndpZHRoIC8gMiwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMiAtIDQwKTtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmN0eC5saW5lVG8odGhpcy5jYW52YXMud2lkdGggLyAyICsgNSwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMiAtIDMwKTtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgIC8vICAgICAgICAgYnJlYWs7XG4gICAgICAgIC8vICAgICBjYXNlIFwicmlnaHRcIjpcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmN0eC5tb3ZlVG8odGhpcy5jYW52YXMud2lkdGggLyAyICsgMzAsIHRoaXMuY2FudmFzLmhlaWdodCAvIDIgKyA1KTtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmN0eC5saW5lVG8odGhpcy5jYW52YXMud2lkdGggLyAyICsgNDAsIHRoaXMuY2FudmFzLmhlaWdodCAvIDIpO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyh0aGlzLmNhbnZhcy53aWR0aCAvIDIgKyAzMCwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMiAtIDUpO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgLy8gICAgICAgICBicmVhaztcbiAgICAgICAgLy8gICAgIGNhc2UgXCJkb3duXCI6XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5jdHgubW92ZVRvKHRoaXMuY2FudmFzLndpZHRoIC8gMiAtIDUsIHRoaXMuY2FudmFzLmhlaWdodCAvIDIgKyAzMCk7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5jdHgubGluZVRvKHRoaXMuY2FudmFzLndpZHRoIC8gMiwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMiArIDQwKTtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmN0eC5saW5lVG8odGhpcy5jYW52YXMud2lkdGggLyAyICsgNSwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMiArIDMwKTtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgIC8vICAgICAgICAgYnJlYWs7XG4gICAgICAgIC8vICAgICBkZWZhdWx0OlxuICAgICAgICAvLyAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICBjb25zdCBkeCA9ICh0aGlzLmNhbnZhcy53aWR0aCAvIDIpICsgKCh0aGlzLnJhZGl1cykgKiBNYXRoLmNvcyh0aGlzLmFuZ2xlICogTWF0aC5QSSAvIDE4MCkpO1xuICAgICAgICBjb25zdCBkeSA9ICh0aGlzLmNhbnZhcy5oZWlnaHQgLyAyKSArICgodGhpcy5yYWRpdXMpICogTWF0aC5zaW4odGhpcy5hbmdsZSAqIE1hdGguUEkgLyAxODApKTtcbiAgICAgICAgdGhpcy5hbmdsZSA9IHRoaXMuYW5nbGUgKyAodGhpcy5kaXJlY3Rpb24gKiB0aGlzLnNwZWVkKTtcblxuICAgICAgICBpZih0aGlzLmFuZ2xlIDwgMCkge1xuICAgICAgICAgICAgdGhpcy5hbmdsZSA9IDM2MCAtIHRoaXMuYW5nbGU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZih0aGlzLmFuZ2xlID4gMzYwKXtcbiAgICAgICAgICAgIHRoaXMuYW5nbGUgJT0gMzYwO1xuICAgICAgICB9XG4gICAgICAgIC8vIHRoaXMuY3R4LnNhdmUoKTtcbiAgICAgICAgdGhpcy5jdHgudHJhbnNsYXRlKGR4LCBkeSk7XG4gICAgICAgIHRoaXMuY3R4LnJvdGF0ZSh0aGlzLmFuZ2xlICogTWF0aC5QSSAvIDE4MCk7XG4gICAgICAgIC8vIHRoaXMuY3R4LnJlc3RvcmUoKTtcbiAgICAgICAgdGhpcy5jdHgudHJhbnNsYXRlKC1keCwgLWR5KTtcblxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHgubW92ZVRvKGR4IC0gdGhpcy5zaXplLCBkeSAtIHRoaXMuc2l6ZSk7XG4gICAgICAgIHRoaXMuY3R4LmxpbmVUbyhkeCArIHRoaXMuc2l6ZSwgZHkpO1xuICAgICAgICB0aGlzLmN0eC5saW5lVG8oZHggLSB0aGlzLnNpemUsIGR5ICsgdGhpcy5zaXplKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgICAgICB0aGlzLmN0eC50cmFuc2xhdGUoZHgsIGR5KTtcbiAgICAgICAgdGhpcy5jdHgucm90YXRlKC10aGlzLmFuZ2xlICogTWF0aC5QSSAvIDE4MCk7XG4gICAgICAgIHRoaXMuY3R4LnRyYW5zbGF0ZSgtZHgsIC1keSk7XG4gICAgfVxuICAgIGhhbmRsZVByZXNzKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBzd2l0Y2ggKGUua2V5KSB7XG4gICAgICAgICAgICAvLyBjYXNlICdBcnJvd1VwJzpcbiAgICAgICAgICAgIC8vICAgICB0aGlzLnBsYXllclBvcyA9IFwidXBcIjtcbiAgICAgICAgICAgIC8vICAgICBicmVhaztcbiAgICAgICAgICAgIC8vIGNhc2UgJ0Fycm93RG93bic6XG4gICAgICAgICAgICAvLyAgICAgdGhpcy5wbGF5ZXJQb3MgPSBcImRvd25cIjtcbiAgICAgICAgICAgIC8vICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0Fycm93TGVmdCc6XG4gICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSAtMTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0Fycm93UmlnaHQnOlxuICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uID0gMTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZUtleVVwKGUpe1xuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IDA7XG4gICAgfVxuXG4gICAgZ2V0UG9zaXRpb24oKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuYW5nbGU7XG4gICAgfVxufVxuXG4iLCJpbXBvcnQgR2FwIGZyb20gXCIuL2dhcFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXYWxsIHtcbiAgICBjb25zdHJ1Y3RvcihjdHgsIHgsIHksIHJhZGl1cywgY29sb3IsIHJvdGF0aW9uKSB7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cztcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgICAgICB0aGlzLnRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgdGhpcy5hbmdsZSA9IE1hdGgucmFuZG9tKCkgKiAzNjA7XG4gICAgICAgIHRoaXMucm90YXRpb24gPSByb3RhdGlvbjtcbiAgICAgICAgdGhpcy5lbmRBbmdsZSA9IDIgKiBNYXRoLlBJIC0gMS4yO1xuICAgICAgICB0aGlzLmdhcCA9IG5ldyBHYXAodGhpcy5jdHgsIHRoaXMueCwgdGhpcy55LCB0aGlzLnJhZGl1cywgdGhpcy5hbmdsZSwgdGhpcy5yb3RhdGlvbiwgdGhpcy50aW1lKTtcbiAgICB9XG5cbiAgICBkcmF3KCl7XG4gICAgICAgIGNvbnN0IG5ld1RpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgbGV0IGRpZmYgPSBuZXdUaW1lIC0gdGhpcy50aW1lO1xuICAgICAgICB0aGlzLnRpbWUgPSBuZXdUaW1lO1xuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSA4O1xuICAgICAgICB0aGlzLmN0eC5hcmModGhpcy54LCB0aGlzLnksIHRoaXMucmFkaXVzLCB0aGlzLmFuZ2xlLCB0aGlzLmVuZEFuZ2xlICsgdGhpcy5hbmdsZSwgZmFsc2UpO1xuICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG4gICAgICAgIHRoaXMuYW5nbGUgKz0gZGlmZiAqIHRoaXMucm90YXRpb247XG4gICAgICAgIHRoaXMuZ2FwLmFuZ2xlICs9IGRpZmYgKiB0aGlzLnJvdGF0aW9uO1xuICAgICAgICB0aGlzLmFuZ2xlICU9IDIgKiBNYXRoLlBJO1xuICAgICAgICB0aGlzLmdhcC5hbmdsZSAlPSAyICogTWF0aC5QSTtcbiAgICB9XG5cbiAgICB1cGRhdGUoKXtcbiAgICAgICAgaWYodGhpcy5yYWRpdXMgPiAzMCkge1xuICAgICAgICAgICAgdGhpcy5yYWRpdXMgLT0gMztcbiAgICAgICAgICAgIHRoaXMuZ2FwLnJhZGl1cyAtPSAzO1xuICAgICAgICB9IFxuICAgICAgICB0aGlzLmdhcC5kcmF3KCk7XG4gICAgICAgIHRoaXMuZHJhdygpO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9