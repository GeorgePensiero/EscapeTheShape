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
        this.score = 0;
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
            this.ctx.beginPath();
            this.ctx.lineWidth = 1;
            this.ctx.strokeStyle = "black";
            this.ctx.arc(centerX, centerY, 30, 0, 2 * Math.PI, false);
            this.ctx.stroke();
            this.ctx.closePath();
            this.walls.forEach(function (wall) {
                wall.update();
                // wall.gap.update();
            });
            this.player.draw(5);

            var doWallsExist = this.walls.length > 0;
            if (doWallsExist) {

                //TODO: we check for collision when the wall is literally ontop of the player
                // maybe find a sweet spot with this.player.radius + 1 or something cause the triangle has
                // a size to it.
                var isWallOnPlayer = this.walls[0].radius <= this.player.radius + this.player.size && this.walls[0].radius >= this.player.radius + this.player.size - 1;
                if (isWallOnPlayer) {
                    this.checkCollision(this.player, this.walls[0].gap);
                    // console.log(this.walls[0].angle);
                }
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
        key: "updateScore",
        value: function updateScore() {
            this.score += 1;
        }
    }, {
        key: "checkCollision",
        value: function checkCollision(player, gap) {
            var collision = false;
            var gapPos = gap.getPosition();
            var playerAngle = player.getPosition() * Math.PI / 180;
            var endAngle = gap.angle - (2 * Math.PI - gap.partialCircleAngle);
            if (endAngle < 0) {
                endAngle += 2 * Math.PI;
            }

            // if(playerPos > gapPos[start] && playerPos < gapPos[end]) collision = true;

            // the case when the gap straddles the horizontal

            if (gap.angle < endAngle) {
                if (playerAngle > endAngle && playerAngle < 2 * Math.PI || playerAngle < gap.angle && playerAngle > 0) {
                    collision = true;
                }
            }

            if (playerAngle < gap.angle && playerAngle > endAngle) {
                collision = true;
            }

            if (collision === true) {
                // this.ctx.strokeStyle = 'blue'
                // this.ctx.strokeRect(DIM_X / 2 - 25, DIM_Y / 2 - 25, 50, 50)
                this.updateScore();
                console.log(this.score);
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
        this.partialCircleAngle = 2 * Math.PI - 1.2;
    }

    _createClass(Gap, [{
        key: "draw",
        value: function draw() {
            this.ctx.beginPath();
            this.ctx.strokeStyle = "#48639c";
            this.ctx.lineWidth = 8;
            this.ctx.arc(this.x, this.y, this.radius, this.angle, this.partialCircleAngle + this.angle, true);
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
                end: this.partialCircleAngle + this.angle
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

            // console.log("dx" + dx);
            // console.log("dy" + dy);
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
        this.angle = Math.random() * (2 * Math.PI);
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
            this.angle %= 2 * Math.PI;

            this.gap.angle += diff * this.rotation;
            this.gap.angle %= 2 * Math.PI;

            if (this.angle < 0) {
                this.angle = 2 * Math.PI;
            }

            if (this.angle > 2 * Math.PI) {
                this.angle %= 2 * Math.PI;
            }

            if (this.gap.angle < 0) {
                this.gap.angle = 2 * Math.PI;
            }

            if (this.gap.angle > 2 * Math.PI) {
                this.gap.angle %= 2 * Math.PI;
            }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qYXZhc2NyaXB0L2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2phdmFzY3JpcHQvZ2FtZV92aWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9qYXZhc2NyaXB0L2dhcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvamF2YXNjcmlwdC9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2phdmFzY3JpcHQvd2FsbC5qcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXMiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsIndpZHRoIiwiaGVpZ2h0IiwiY3R4IiwiZ2V0Q29udGV4dCIsImdhbWVWaWV3IiwiR2FtZVZpZXciLCJnYW1lIiwicGxheWVyIiwiaGFuZGxlUHJlc3MiLCJlIiwiaGFuZGxlS2V5VXAiLCJhbmltYXRlIiwiRElNX1giLCJESU1fWSIsIkNPTE9SX1NDSEVNRSIsIkdhbWUiLCJQbGF5ZXIiLCJ3YWxscyIsInRpbWVyIiwic2NvcmUiLCJyb3RhdGlvbnMiLCJ3YWxsIiwiV2FsbCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCIsInB1c2giLCJjbGVhclJlY3QiLCJjZW50ZXJYIiwiY2VudGVyWSIsImJlZ2luUGF0aCIsImxpbmVXaWR0aCIsInN0cm9rZVN0eWxlIiwiYXJjIiwiUEkiLCJzdHJva2UiLCJjbG9zZVBhdGgiLCJmb3JFYWNoIiwidXBkYXRlIiwiZHJhdyIsImRvV2FsbHNFeGlzdCIsImlzV2FsbE9uUGxheWVyIiwicmFkaXVzIiwic2l6ZSIsImNoZWNrQ29sbGlzaW9uIiwiZ2FwIiwic2V0VGltZW91dCIsImFkZFdhbGwiLCJzaGlmdCIsImNvbGxpc2lvbiIsImdhcFBvcyIsImdldFBvc2l0aW9uIiwicGxheWVyQW5nbGUiLCJlbmRBbmdsZSIsImFuZ2xlIiwicGFydGlhbENpcmNsZUFuZ2xlIiwidXBkYXRlU2NvcmUiLCJjb25zb2xlIiwibG9nIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYmluZCIsIkdhcCIsIngiLCJ5Iiwicm90YXRpb24iLCJwb3NpdGlvbiIsInN0YXJ0IiwiZW5kIiwiYzEiLCJjMiIsImNvcyIsInNpbiIsInNwZWVkIiwiZGlyZWN0aW9uIiwicGxheWVyUG9zIiwiZHgiLCJkeSIsInRyYW5zbGF0ZSIsInJvdGF0ZSIsIm1vdmVUbyIsImxpbmVUbyIsImZpbGwiLCJwcmV2ZW50RGVmYXVsdCIsImtleSIsImNvbG9yIiwidGltZSIsIkRhdGUiLCJnZXRUaW1lIiwibmV3VGltZSIsImRpZmYiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBQSxTQUFTQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBWTtBQUN0RCxRQUFN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O0FBQ0EsaUJBQUtWLEtBQUwsSUFBYyxJQUFJaEMsS0FBS1ksRUFBdkI7O0FBRUEsaUJBQUtXLEdBQUwsQ0FBU1MsS0FBVCxJQUFrQm1DLE9BQU8sS0FBS3pCLFFBQTlCO0FBQ0EsaUJBQUtuQixHQUFMLENBQVNTLEtBQVQsSUFBa0IsSUFBSWhDLEtBQUtZLEVBQTNCOztBQUVBLGdCQUFJLEtBQUtvQixLQUFMLEdBQWEsQ0FBakIsRUFBb0I7QUFDaEIscUJBQUtBLEtBQUwsR0FBYSxJQUFJaEMsS0FBS1ksRUFBdEI7QUFDSDs7QUFFRCxnQkFBSSxLQUFLb0IsS0FBTCxHQUFhLElBQUloQyxLQUFLWSxFQUExQixFQUE4QjtBQUMxQixxQkFBS29CLEtBQUwsSUFBYyxJQUFJaEMsS0FBS1ksRUFBdkI7QUFDSDs7QUFFRCxnQkFBSSxLQUFLVyxHQUFMLENBQVNTLEtBQVQsR0FBaUIsQ0FBckIsRUFBd0I7QUFDcEIscUJBQUtULEdBQUwsQ0FBU1MsS0FBVCxHQUFpQixJQUFJaEMsS0FBS1ksRUFBMUI7QUFDSDs7QUFFRCxnQkFBSSxLQUFLVyxHQUFMLENBQVNTLEtBQVQsR0FBaUIsSUFBSWhDLEtBQUtZLEVBQTlCLEVBQWtDO0FBQzlCLHFCQUFLVyxHQUFMLENBQVNTLEtBQVQsSUFBa0IsSUFBSWhDLEtBQUtZLEVBQTNCO0FBQ0g7QUFDSjs7O2lDQUVPO0FBQ0osZ0JBQUcsS0FBS1EsTUFBTCxHQUFjLEVBQWpCLEVBQXFCO0FBQ2pCLHFCQUFLQSxNQUFMLElBQWUsQ0FBZjtBQUNBLHFCQUFLRyxHQUFMLENBQVNILE1BQVQsSUFBbUIsQ0FBbkI7QUFDSDtBQUNELGlCQUFLRyxHQUFMLENBQVNOLElBQVQ7QUFDQSxpQkFBS0EsSUFBTDtBQUNIOzs7Ozs7a0JBdkRnQmxCLEkiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgUGxheWVyIGZyb20gJy4vamF2YXNjcmlwdC9wbGF5ZXInO1xuaW1wb3J0IEdhbWUgZnJvbSAnLi9qYXZhc2NyaXB0L2dhbWUnO1xuaW1wb3J0IEdhbWVWaWV3IGZyb20gJy4vamF2YXNjcmlwdC9nYW1lX3ZpZXcnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJjYW52YXNcIilbMF07XG4gICAgY2FudmFzLndpZHRoID0gMTAwMDtcbiAgICBjYW52YXMuaGVpZ2h0ID0gNjAwO1xuXG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblxuXG4gICAgY29uc3QgZ2FtZVZpZXcgPSBuZXcgR2FtZVZpZXcoY2FudmFzLCBjdHgpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBlID0+IGdhbWVWaWV3LmdhbWUucGxheWVyLmhhbmRsZVByZXNzKGUpKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGUgPT4gZ2FtZVZpZXcuZ2FtZS5wbGF5ZXIuaGFuZGxlS2V5VXAoZSkpO1xuICAgIGdhbWVWaWV3LmFuaW1hdGUoKTtcbn0pO1xuXG5cblxuIiwiaW1wb3J0IFBsYXllciBmcm9tIFwiLi9wbGF5ZXJcIjtcbmltcG9ydCBXYWxsIGZyb20gXCIuL3dhbGxcIjtcblxuY29uc3QgRElNX1ggPSAxMDAwO1xuY29uc3QgRElNX1kgPSA2MDA7XG5jb25zdCBDT0xPUl9TQ0hFTUUgPSBbXCIjQ0MyOTMzNlwiLCBcIkVCQkFCOVwiLCBcIiMzODg2OTdcIiwgXCIjQkZGRkUxXCJdXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGN0eCkge1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMucGxheWVyID0gbmV3IFBsYXllcih0aGlzLmNhbnZhcywgdGhpcy5jdHgpXG4gICAgICAgIHRoaXMud2FsbHMgPSBbXTtcbiAgICAgICAgdGhpcy50aW1lciA9IG51bGw7XG4gICAgICAgIHRoaXMuc2NvcmUgPSAwO1xuICAgIH1cblxuXG4gICAgYWRkV2FsbCgpe1xuICAgICAgICBjb25zdCByb3RhdGlvbnMgPSBbLS4wMDE1LCAuMDAxNSwgLS4wMDIsIC4wMDIsIC0uMDAyLCAtLjAwMywgLjAwM107XG4gICAgICAgIGNvbnN0IHdhbGwgPSBuZXcgV2FsbCh0aGlzLmN0eCwgdGhpcy5jYW52YXMud2lkdGggLyAyLCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyLCB0aGlzLmNhbnZhcy53aWR0aCAvIDIsIFwiIzM4ODY5N1wiLCByb3RhdGlvbnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcm90YXRpb25zLmxlbmd0aCldKVxuICAgICAgICB0aGlzLndhbGxzLnB1c2god2FsbCk7XG4gICAgICAgIHRoaXMudGltZXIgPSBudWxsO1xuICAgIH1cblxuICAgIGFsbFdhbGxzKCl7XG4gICAgICAgIHJldHVybiB0aGlzLndhbGxzO1xuICAgIH1cblxuICAgIFxuXG5cbiAgICBkcmF3KCkge1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgRElNX1gsIERJTV9ZKTtcbiAgICAgICAgY29uc3QgY2VudGVyWCA9IERJTV9YIC8gMjtcbiAgICAgICAgY29uc3QgY2VudGVyWSA9IERJTV9ZIC8gMjtcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDE7XG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiXG4gICAgICAgIHRoaXMuY3R4LmFyYyhjZW50ZXJYLCBjZW50ZXJZLCAzMCwgMCwgMiAqIE1hdGguUEksIGZhbHNlKTtcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICB0aGlzLndhbGxzLmZvckVhY2god2FsbCA9PiB7XG4gICAgICAgICAgICB3YWxsLnVwZGF0ZSgpO1xuICAgICAgICAgICAgLy8gd2FsbC5nYXAudXBkYXRlKCk7XG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMucGxheWVyLmRyYXcoNSk7XG5cbiAgICAgICAgY29uc3QgZG9XYWxsc0V4aXN0ID0gdGhpcy53YWxscy5sZW5ndGggPiAwO1xuICAgICAgICBpZihkb1dhbGxzRXhpc3Qpe1xuXG4gICAgICAgICAgICAvL1RPRE86IHdlIGNoZWNrIGZvciBjb2xsaXNpb24gd2hlbiB0aGUgd2FsbCBpcyBsaXRlcmFsbHkgb250b3Agb2YgdGhlIHBsYXllclxuICAgICAgICAgICAgLy8gbWF5YmUgZmluZCBhIHN3ZWV0IHNwb3Qgd2l0aCB0aGlzLnBsYXllci5yYWRpdXMgKyAxIG9yIHNvbWV0aGluZyBjYXVzZSB0aGUgdHJpYW5nbGUgaGFzXG4gICAgICAgICAgICAvLyBhIHNpemUgdG8gaXQuXG4gICAgICAgICAgICBjb25zdCBpc1dhbGxPblBsYXllciA9IHRoaXMud2FsbHNbMF0ucmFkaXVzIDw9IHRoaXMucGxheWVyLnJhZGl1cyArIHRoaXMucGxheWVyLnNpemUgJiYgdGhpcy53YWxsc1swXS5yYWRpdXMgPj0gdGhpcy5wbGF5ZXIucmFkaXVzICsgdGhpcy5wbGF5ZXIuc2l6ZSAtIDE7XG4gICAgICAgICAgICBpZiAoaXNXYWxsT25QbGF5ZXIpe1xuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tDb2xsaXNpb24odGhpcy5wbGF5ZXIsIHRoaXMud2FsbHNbMF0uZ2FwKTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLndhbGxzWzBdLmFuZ2xlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyB0aGlzLmN0eC5zdHJva2UoKTtcbiAgICAgICAgLy8gdGhpcy5jdHguY2xvc2VQYXRoKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlKCl7XG4gICAgICAgIGlmKHRoaXMud2FsbHMubGVuZ3RoIDwgOCAmJiB0aGlzLnRpbWVyID09PSBudWxsKXtcbiAgICAgICAgICAgIHRoaXMudGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHRoaXMuYWRkV2FsbCgpLCAxMDAwKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy53YWxscy5sZW5ndGggPiAwICYmIHRoaXMud2FsbHNbMF0ucmFkaXVzIDwgMzApIHsgdGhpcy53YWxscy5zaGlmdCgpfVxuICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICAgICAgXG4gICAgICAgIH1cblxuICAgIHVwZGF0ZVNjb3JlKCl7XG4gICAgICAgIHRoaXMuc2NvcmUgKz0gMTtcbiAgICB9XG5cbiAgICBjaGVja0NvbGxpc2lvbihwbGF5ZXIsIGdhcCl7XG4gICAgICAgIGxldCBjb2xsaXNpb24gPSBmYWxzZTtcbiAgICAgICAgbGV0IGdhcFBvcyA9IGdhcC5nZXRQb3NpdGlvbigpO1xuICAgICAgICBsZXQgcGxheWVyQW5nbGUgPSBwbGF5ZXIuZ2V0UG9zaXRpb24oKSAqIE1hdGguUEkgLyAxODA7XG4gICAgICAgIGxldCBlbmRBbmdsZSA9IGdhcC5hbmdsZSAtICgyICogTWF0aC5QSSAtIGdhcC5wYXJ0aWFsQ2lyY2xlQW5nbGUpO1xuICAgICAgICBpZiAoZW5kQW5nbGUgPCAwKSB7XG4gICAgICAgICAgICBlbmRBbmdsZSArPSAyKk1hdGguUEk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZihwbGF5ZXJQb3MgPiBnYXBQb3Nbc3RhcnRdICYmIHBsYXllclBvcyA8IGdhcFBvc1tlbmRdKSBjb2xsaXNpb24gPSB0cnVlO1xuXG4gICAgICAgIC8vIHRoZSBjYXNlIHdoZW4gdGhlIGdhcCBzdHJhZGRsZXMgdGhlIGhvcml6b250YWxcblxuICAgICAgICBpZiAoZ2FwLmFuZ2xlIDwgZW5kQW5nbGUpe1xuICAgICAgICAgICAgaWYgKChwbGF5ZXJBbmdsZSAgPiBlbmRBbmdsZSBcbiAgICAgICAgICAgICAgICAmJiBwbGF5ZXJBbmdsZSA8IDIgKiBNYXRoLlBJKSBcbiAgICAgICAgICAgICAgICB8fCBwbGF5ZXJBbmdsZSA8IGdhcC5hbmdsZSAmJiBwbGF5ZXJBbmdsZSA+IDApe1xuICAgICAgICAgICAgICAgIGNvbGxpc2lvbiA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGxheWVyQW5nbGUgPCBnYXAuYW5nbGUgJiZcbiAgICAgICAgICAgIHBsYXllckFuZ2xlID4gZW5kQW5nbGUpIHtcbiAgICAgICAgICAgICAgICBjb2xsaXNpb24gPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIGlmKGNvbGxpc2lvbiA9PT0gdHJ1ZSl7XG4gICAgICAgICAgICAvLyB0aGlzLmN0eC5zdHJva2VTdHlsZSA9ICdibHVlJ1xuICAgICAgICAgICAgLy8gdGhpcy5jdHguc3Ryb2tlUmVjdChESU1fWCAvIDIgLSAyNSwgRElNX1kgLyAyIC0gMjUsIDUwLCA1MClcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2NvcmUoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc2NvcmUpO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCBHYW1lIGZyb20gJy4vZ2FtZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVWaWV3IHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGN0eCkge1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuZ2FtZSA9IG5ldyBHYW1lKHRoaXMuY2FudmFzLCB0aGlzLmN0eCk7XG4gICAgfVxuXG5cbiAgICBhbmltYXRlKCkge1xuICAgICAgICB0aGlzLmdhbWUudXBkYXRlKCk7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUuYmluZCh0aGlzKSk7XG4gICAgfVxufSIsIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYXAge1xuICAgIGNvbnN0cnVjdG9yKGN0eCwgeCAsIHksIHJhZGl1cywgYW5nbGUsIHJvdGF0aW9uKXtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMucmFkaXVzID0gcmFkaXVzOyBcbiAgICAgICAgdGhpcy5yb3RhdGlvbiA9IHJvdGF0aW9uO1xuICAgICAgICB0aGlzLmFuZ2xlID0gYW5nbGU7XG4gICAgICAgIHRoaXMucGFydGlhbENpcmNsZUFuZ2xlID0gMiAqIE1hdGguUEkgLSAxLjI7XG4gICAgfVxuXG4gICAgZHJhdygpe1xuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSBcIiM0ODYzOWNcIlxuICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSA4O1xuICAgICAgICB0aGlzLmN0eC5hcmModGhpcy54LCB0aGlzLnksIHRoaXMucmFkaXVzLCB0aGlzLmFuZ2xlLCB0aGlzLnBhcnRpYWxDaXJjbGVBbmdsZSArIHRoaXMuYW5nbGUsIHRydWUpO1xuICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgICBpZiAodGhpcy5yYWRpdXMgPiAzMCkge1xuICAgICAgICAgICAgdGhpcy5yYWRpdXMgLT0gMztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICB9XG5cbiAgICBnZXRQb3NpdGlvbigpe1xuICAgICAgIGNvbnN0IHBvc2l0aW9uID0ge1xuICAgICAgICAgICBzdGFydDogdGhpcy5hbmdsZSxcbiAgICAgICAgICAgZW5kOiB0aGlzLnBhcnRpYWxDaXJjbGVBbmdsZSArIHRoaXMuYW5nbGUsXG4gICAgICAgfVxuICAgICAgIHJldHVybiBwb3NpdGlvbjtcbiAgICB9XG5cbiAgICBnZXRQb2ludChjMSwgYzIsIHJhZGl1cywgYW5nbGUpIHtcbiAgICAgICAgcmV0dXJuIFtjMSArIE1hdGguY29zKGFuZ2xlKSAqIHJhZGl1cywgYzIgKyBNYXRoLnNpbihhbmdsZSkgKiByYWRpdXNdO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY3R4KSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5zaXplID0gNTtcbiAgICAgICAgdGhpcy5yYWRpdXMgPSA1NTtcbiAgICAgICAgdGhpcy5zcGVlZCA9IDc7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gMDtcbiAgICAgICAgdGhpcy5hbmdsZSA9IDMwO1xuICAgICAgICB0aGlzLnBsYXllclBvcyA9IFwibGVmdFwiO1xuICAgICAgICB0aGlzLmRyYXcgPSB0aGlzLmRyYXcuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBkcmF3KCkge1xuICAgICAgICAvLyBzd2l0Y2ggKHRoaXMucGxheWVyUG9zKSB7XG4gICAgICAgIC8vICAgICBjYXNlIFwibGVmdFwiOlxuICAgICAgICAvLyAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuY3R4Lm1vdmVUbyh0aGlzLmNhbnZhcy53aWR0aCAvIDIgLSAzMCwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMiArIDUpO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyh0aGlzLmNhbnZhcy53aWR0aCAvIDIgLSA0MCwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMik7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5jdHgubGluZVRvKHRoaXMuY2FudmFzLndpZHRoIC8gMiAtIDMwLCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyIC0gNSk7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICAvLyAgICAgICAgIGJyZWFrO1xuICAgICAgICAvLyAgICAgY2FzZSBcInVwXCI6XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5jdHgubW92ZVRvKHRoaXMuY2FudmFzLndpZHRoIC8gMiAtIDUsIHRoaXMuY2FudmFzLmhlaWdodCAvIDIgLSAzMCk7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5jdHgubGluZVRvKHRoaXMuY2FudmFzLndpZHRoIC8gMiwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMiAtIDQwKTtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmN0eC5saW5lVG8odGhpcy5jYW52YXMud2lkdGggLyAyICsgNSwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMiAtIDMwKTtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgIC8vICAgICAgICAgYnJlYWs7XG4gICAgICAgIC8vICAgICBjYXNlIFwicmlnaHRcIjpcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmN0eC5tb3ZlVG8odGhpcy5jYW52YXMud2lkdGggLyAyICsgMzAsIHRoaXMuY2FudmFzLmhlaWdodCAvIDIgKyA1KTtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmN0eC5saW5lVG8odGhpcy5jYW52YXMud2lkdGggLyAyICsgNDAsIHRoaXMuY2FudmFzLmhlaWdodCAvIDIpO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyh0aGlzLmNhbnZhcy53aWR0aCAvIDIgKyAzMCwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMiAtIDUpO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgLy8gICAgICAgICBicmVhaztcbiAgICAgICAgLy8gICAgIGNhc2UgXCJkb3duXCI6XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5jdHgubW92ZVRvKHRoaXMuY2FudmFzLndpZHRoIC8gMiAtIDUsIHRoaXMuY2FudmFzLmhlaWdodCAvIDIgKyAzMCk7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5jdHgubGluZVRvKHRoaXMuY2FudmFzLndpZHRoIC8gMiwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMiArIDQwKTtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmN0eC5saW5lVG8odGhpcy5jYW52YXMud2lkdGggLyAyICsgNSwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMiArIDMwKTtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgIC8vICAgICAgICAgYnJlYWs7XG4gICAgICAgIC8vICAgICBkZWZhdWx0OlxuICAgICAgICAvLyAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICBjb25zdCBkeCA9ICh0aGlzLmNhbnZhcy53aWR0aCAvIDIpICsgKCh0aGlzLnJhZGl1cykgKiBNYXRoLmNvcyh0aGlzLmFuZ2xlICogTWF0aC5QSSAvIDE4MCkpO1xuICAgICAgICBjb25zdCBkeSA9ICh0aGlzLmNhbnZhcy5oZWlnaHQgLyAyKSArICgodGhpcy5yYWRpdXMpICogTWF0aC5zaW4odGhpcy5hbmdsZSAqIE1hdGguUEkgLyAxODApKTtcbiAgICAgICAgdGhpcy5hbmdsZSA9IHRoaXMuYW5nbGUgKyAodGhpcy5kaXJlY3Rpb24gKiB0aGlzLnNwZWVkKTtcblxuICAgICAgICBpZih0aGlzLmFuZ2xlIDwgMCkge1xuICAgICAgICAgICAgdGhpcy5hbmdsZSA9IDM2MCAtIHRoaXMuYW5nbGU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZih0aGlzLmFuZ2xlID4gMzYwKXtcbiAgICAgICAgICAgIHRoaXMuYW5nbGUgJT0gMzYwO1xuICAgICAgICB9XG4gICAgICAgIC8vIHRoaXMuY3R4LnNhdmUoKTtcbiAgICAgICAgdGhpcy5jdHgudHJhbnNsYXRlKGR4LCBkeSk7XG4gICAgICAgIHRoaXMuY3R4LnJvdGF0ZSh0aGlzLmFuZ2xlICogTWF0aC5QSSAvIDE4MCk7XG4gICAgICAgIC8vIHRoaXMuY3R4LnJlc3RvcmUoKTtcbiAgICAgICAgdGhpcy5jdHgudHJhbnNsYXRlKC1keCwgLWR5KTtcblxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHgubW92ZVRvKGR4IC0gdGhpcy5zaXplLCBkeSAtIHRoaXMuc2l6ZSk7XG4gICAgICAgIHRoaXMuY3R4LmxpbmVUbyhkeCArIHRoaXMuc2l6ZSwgZHkpO1xuICAgICAgICB0aGlzLmN0eC5saW5lVG8oZHggLSB0aGlzLnNpemUsIGR5ICsgdGhpcy5zaXplKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgICAgICB0aGlzLmN0eC50cmFuc2xhdGUoZHgsIGR5KTtcbiAgICAgICAgdGhpcy5jdHgucm90YXRlKC10aGlzLmFuZ2xlICogTWF0aC5QSSAvIDE4MCk7XG4gICAgICAgIHRoaXMuY3R4LnRyYW5zbGF0ZSgtZHgsIC1keSk7XG5cbiAgICAgICAgXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZHhcIiArIGR4KTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJkeVwiICsgZHkpO1xuICAgIH1cbiAgICBoYW5kbGVQcmVzcyhlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgc3dpdGNoIChlLmtleSkge1xuICAgICAgICAgICAgLy8gY2FzZSAnQXJyb3dVcCc6XG4gICAgICAgICAgICAvLyAgICAgdGhpcy5wbGF5ZXJQb3MgPSBcInVwXCI7XG4gICAgICAgICAgICAvLyAgICAgYnJlYWs7XG4gICAgICAgICAgICAvLyBjYXNlICdBcnJvd0Rvd24nOlxuICAgICAgICAgICAgLy8gICAgIHRoaXMucGxheWVyUG9zID0gXCJkb3duXCI7XG4gICAgICAgICAgICAvLyAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdBcnJvd0xlZnQnOlxuICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uID0gLTE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdBcnJvd1JpZ2h0JzpcbiAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IDE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVLZXlVcChlKXtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSAwO1xuICAgIH1cblxuICAgIGdldFBvc2l0aW9uKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmFuZ2xlO1xuICAgIH1cbn1cblxuIiwiaW1wb3J0IEdhcCBmcm9tIFwiLi9nYXBcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2FsbCB7XG4gICAgY29uc3RydWN0b3IoY3R4LCB4LCB5LCByYWRpdXMsIGNvbG9yLCByb3RhdGlvbikge1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy5yYWRpdXMgPSByYWRpdXM7XG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICAgICAgdGhpcy50aW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIHRoaXMuYW5nbGUgPSBNYXRoLnJhbmRvbSgpICogKDIgKiBNYXRoLlBJKTtcbiAgICAgICAgdGhpcy5yb3RhdGlvbiA9IHJvdGF0aW9uO1xuICAgICAgICB0aGlzLmVuZEFuZ2xlID0gMiAqIE1hdGguUEkgLSAxLjI7XG4gICAgICAgIHRoaXMuZ2FwID0gbmV3IEdhcCh0aGlzLmN0eCwgdGhpcy54LCB0aGlzLnksIHRoaXMucmFkaXVzLCB0aGlzLmFuZ2xlLCB0aGlzLnJvdGF0aW9uLCB0aGlzLnRpbWUpO1xuICAgIH1cblxuICAgIGRyYXcoKXtcbiAgICAgICAgY29uc3QgbmV3VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICBsZXQgZGlmZiA9IG5ld1RpbWUgLSB0aGlzLnRpbWU7XG4gICAgICAgIHRoaXMudGltZSA9IG5ld1RpbWU7XG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDg7XG4gICAgICAgIHRoaXMuY3R4LmFyYyh0aGlzLngsIHRoaXMueSwgdGhpcy5yYWRpdXMsIHRoaXMuYW5nbGUsIHRoaXMuZW5kQW5nbGUgKyB0aGlzLmFuZ2xlLCBmYWxzZSk7XG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgICAgICB0aGlzLmFuZ2xlICs9IGRpZmYgKiB0aGlzLnJvdGF0aW9uO1xuICAgICAgICB0aGlzLmFuZ2xlICU9IDIgKiBNYXRoLlBJO1xuXG4gICAgICAgIHRoaXMuZ2FwLmFuZ2xlICs9IGRpZmYgKiB0aGlzLnJvdGF0aW9uO1xuICAgICAgICB0aGlzLmdhcC5hbmdsZSAlPSAyICogTWF0aC5QSTtcblxuICAgICAgICBpZiAodGhpcy5hbmdsZSA8IDApIHtcbiAgICAgICAgICAgIHRoaXMuYW5nbGUgPSAyICogTWF0aC5QSTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmFuZ2xlID4gMiAqIE1hdGguUEkpIHtcbiAgICAgICAgICAgIHRoaXMuYW5nbGUgJT0gMiAqIE1hdGguUEk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5nYXAuYW5nbGUgPCAwKSB7XG4gICAgICAgICAgICB0aGlzLmdhcC5hbmdsZSA9IDIgKiBNYXRoLlBJO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZ2FwLmFuZ2xlID4gMiAqIE1hdGguUEkpIHtcbiAgICAgICAgICAgIHRoaXMuZ2FwLmFuZ2xlICU9IDIgKiBNYXRoLlBJO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlKCl7XG4gICAgICAgIGlmKHRoaXMucmFkaXVzID4gMzApIHtcbiAgICAgICAgICAgIHRoaXMucmFkaXVzIC09IDM7XG4gICAgICAgICAgICB0aGlzLmdhcC5yYWRpdXMgLT0gMztcbiAgICAgICAgfSBcbiAgICAgICAgdGhpcy5nYXAuZHJhdygpO1xuICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==