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
            this.ctx.lineWidth = 1;
            this.ctx.strokeStyle = "black";
            this.ctx.strokeRect(centerX - 25, centerY - 25, 50, 50);
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
                var isWallOnPlayer = this.walls[0].radius <= this.player.radius + this.player.size;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qYXZhc2NyaXB0L2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2phdmFzY3JpcHQvZ2FtZV92aWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9qYXZhc2NyaXB0L2dhcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvamF2YXNjcmlwdC9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2phdmFzY3JpcHQvd2FsbC5qcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXMiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsIndpZHRoIiwiaGVpZ2h0IiwiY3R4IiwiZ2V0Q29udGV4dCIsImdhbWVWaWV3IiwiR2FtZVZpZXciLCJnYW1lIiwicGxheWVyIiwiaGFuZGxlUHJlc3MiLCJlIiwiaGFuZGxlS2V5VXAiLCJhbmltYXRlIiwiRElNX1giLCJESU1fWSIsIkNPTE9SX1NDSEVNRSIsIkdhbWUiLCJQbGF5ZXIiLCJ3YWxscyIsInRpbWVyIiwic2NvcmUiLCJyb3RhdGlvbnMiLCJ3YWxsIiwiV2FsbCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCIsInB1c2giLCJjbGVhclJlY3QiLCJjZW50ZXJYIiwiY2VudGVyWSIsImxpbmVXaWR0aCIsInN0cm9rZVN0eWxlIiwic3Ryb2tlUmVjdCIsImZvckVhY2giLCJ1cGRhdGUiLCJkcmF3IiwiZG9XYWxsc0V4aXN0IiwiaXNXYWxsT25QbGF5ZXIiLCJyYWRpdXMiLCJzaXplIiwiY2hlY2tDb2xsaXNpb24iLCJnYXAiLCJzZXRUaW1lb3V0IiwiYWRkV2FsbCIsInNoaWZ0IiwiY29sbGlzaW9uIiwiZ2FwUG9zIiwiZ2V0UG9zaXRpb24iLCJwbGF5ZXJBbmdsZSIsIlBJIiwiZW5kQW5nbGUiLCJhbmdsZSIsInBhcnRpYWxDaXJjbGVBbmdsZSIsInVwZGF0ZVNjb3JlIiwiY29uc29sZSIsImxvZyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImJpbmQiLCJHYXAiLCJ4IiwieSIsInJvdGF0aW9uIiwiYmVnaW5QYXRoIiwiYXJjIiwic3Ryb2tlIiwiY2xvc2VQYXRoIiwicG9zaXRpb24iLCJzdGFydCIsImVuZCIsImMxIiwiYzIiLCJjb3MiLCJzaW4iLCJzcGVlZCIsImRpcmVjdGlvbiIsInBsYXllclBvcyIsImR4IiwiZHkiLCJ0cmFuc2xhdGUiLCJyb3RhdGUiLCJtb3ZlVG8iLCJsaW5lVG8iLCJmaWxsIiwicHJldmVudERlZmF1bHQiLCJrZXkiLCJjb2xvciIsInRpbWUiLCJEYXRlIiwiZ2V0VGltZSIsIm5ld1RpbWUiLCJkaWZmIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQUEsU0FBU0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlB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QUwsR0FBYSxJQUFJN0IsS0FBSzJCLEVBQXRCO0FBQ0g7O0FBRUQsZ0JBQUksS0FBS0UsS0FBTCxHQUFhLElBQUk3QixLQUFLMkIsRUFBMUIsRUFBOEI7QUFDMUIscUJBQUtFLEtBQUwsSUFBYyxJQUFJN0IsS0FBSzJCLEVBQXZCO0FBQ0g7O0FBRUQsZ0JBQUksS0FBS1IsR0FBTCxDQUFTVSxLQUFULEdBQWlCLENBQXJCLEVBQXdCO0FBQ3BCLHFCQUFLVixHQUFMLENBQVNVLEtBQVQsR0FBaUIsSUFBSTdCLEtBQUsyQixFQUExQjtBQUNIOztBQUVELGdCQUFJLEtBQUtSLEdBQUwsQ0FBU1UsS0FBVCxHQUFpQixJQUFJN0IsS0FBSzJCLEVBQTlCLEVBQWtDO0FBQzlCLHFCQUFLUixHQUFMLENBQVNVLEtBQVQsSUFBa0IsSUFBSTdCLEtBQUsyQixFQUEzQjtBQUNIO0FBQ0o7OztpQ0FFTztBQUNKLGdCQUFHLEtBQUtYLE1BQUwsR0FBYyxFQUFqQixFQUFxQjtBQUNqQixxQkFBS0EsTUFBTCxJQUFlLENBQWY7QUFDQSxxQkFBS0csR0FBTCxDQUFTSCxNQUFULElBQW1CLENBQW5CO0FBQ0g7QUFDRCxpQkFBS0csR0FBTCxDQUFTTixJQUFUO0FBQ0EsaUJBQUtBLElBQUw7QUFDSDs7Ozs7O2tCQXZEZ0JkLEkiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgUGxheWVyIGZyb20gJy4vamF2YXNjcmlwdC9wbGF5ZXInO1xuaW1wb3J0IEdhbWUgZnJvbSAnLi9qYXZhc2NyaXB0L2dhbWUnO1xuaW1wb3J0IEdhbWVWaWV3IGZyb20gJy4vamF2YXNjcmlwdC9nYW1lX3ZpZXcnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJjYW52YXNcIilbMF07XG4gICAgY2FudmFzLndpZHRoID0gMTAwMDtcbiAgICBjYW52YXMuaGVpZ2h0ID0gNjAwO1xuXG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblxuXG4gICAgY29uc3QgZ2FtZVZpZXcgPSBuZXcgR2FtZVZpZXcoY2FudmFzLCBjdHgpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBlID0+IGdhbWVWaWV3LmdhbWUucGxheWVyLmhhbmRsZVByZXNzKGUpKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGUgPT4gZ2FtZVZpZXcuZ2FtZS5wbGF5ZXIuaGFuZGxlS2V5VXAoZSkpO1xuICAgIGdhbWVWaWV3LmFuaW1hdGUoKTtcbn0pO1xuXG5cblxuIiwiaW1wb3J0IFBsYXllciBmcm9tIFwiLi9wbGF5ZXJcIjtcbmltcG9ydCBXYWxsIGZyb20gXCIuL3dhbGxcIjtcblxuY29uc3QgRElNX1ggPSAxMDAwO1xuY29uc3QgRElNX1kgPSA2MDA7XG5jb25zdCBDT0xPUl9TQ0hFTUUgPSBbXCIjQ0MyOTMzNlwiLCBcIkVCQkFCOVwiLCBcIiMzODg2OTdcIiwgXCIjQkZGRkUxXCJdXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGN0eCkge1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMucGxheWVyID0gbmV3IFBsYXllcih0aGlzLmNhbnZhcywgdGhpcy5jdHgpXG4gICAgICAgIHRoaXMud2FsbHMgPSBbXTtcbiAgICAgICAgdGhpcy50aW1lciA9IG51bGw7XG4gICAgICAgIHRoaXMuc2NvcmUgPSAwO1xuICAgIH1cblxuXG4gICAgYWRkV2FsbCgpe1xuICAgICAgICBjb25zdCByb3RhdGlvbnMgPSBbLS4wMDE1LCAuMDAxNSwgLS4wMDIsIC4wMDIsIC0uMDAyLCAtLjAwMywgLjAwM107XG4gICAgICAgIGNvbnN0IHdhbGwgPSBuZXcgV2FsbCh0aGlzLmN0eCwgdGhpcy5jYW52YXMud2lkdGggLyAyLCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyLCB0aGlzLmNhbnZhcy53aWR0aCAvIDIsIFwiIzM4ODY5N1wiLCByb3RhdGlvbnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcm90YXRpb25zLmxlbmd0aCldKVxuICAgICAgICB0aGlzLndhbGxzLnB1c2god2FsbCk7XG4gICAgICAgIHRoaXMudGltZXIgPSBudWxsO1xuICAgIH1cblxuICAgIGFsbFdhbGxzKCl7XG4gICAgICAgIHJldHVybiB0aGlzLndhbGxzO1xuICAgIH1cblxuICAgIFxuXG5cbiAgICBkcmF3KCkge1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgRElNX1gsIERJTV9ZKTtcbiAgICAgICAgY29uc3QgY2VudGVyWCA9IERJTV9YIC8gMjtcbiAgICAgICAgY29uc3QgY2VudGVyWSA9IERJTV9ZIC8gMjtcbiAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gMTtcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCJcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlUmVjdChjZW50ZXJYIC0gMjUsIGNlbnRlclkgLSAyNSwgNTAsIDUwKTtcbiAgICAgICAgdGhpcy53YWxscy5mb3JFYWNoKHdhbGwgPT4ge1xuICAgICAgICAgICAgd2FsbC51cGRhdGUoKTtcbiAgICAgICAgICAgIC8vIHdhbGwuZ2FwLnVwZGF0ZSgpO1xuICAgICAgICB9KVxuICAgICAgICB0aGlzLnBsYXllci5kcmF3KDUpO1xuXG4gICAgICAgIGNvbnN0IGRvV2FsbHNFeGlzdCA9IHRoaXMud2FsbHMubGVuZ3RoID4gMDtcbiAgICAgICAgaWYoZG9XYWxsc0V4aXN0KXtcblxuICAgICAgICAgICAgLy9UT0RPOiB3ZSBjaGVjayBmb3IgY29sbGlzaW9uIHdoZW4gdGhlIHdhbGwgaXMgbGl0ZXJhbGx5IG9udG9wIG9mIHRoZSBwbGF5ZXJcbiAgICAgICAgICAgIC8vIG1heWJlIGZpbmQgYSBzd2VldCBzcG90IHdpdGggdGhpcy5wbGF5ZXIucmFkaXVzICsgMSBvciBzb21ldGhpbmcgY2F1c2UgdGhlIHRyaWFuZ2xlIGhhc1xuICAgICAgICAgICAgLy8gYSBzaXplIHRvIGl0LlxuICAgICAgICAgICAgY29uc3QgaXNXYWxsT25QbGF5ZXIgPSB0aGlzLndhbGxzWzBdLnJhZGl1cyA8PSB0aGlzLnBsYXllci5yYWRpdXMgKyB0aGlzLnBsYXllci5zaXplO1xuICAgICAgICAgICAgaWYgKGlzV2FsbE9uUGxheWVyKXtcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrQ29sbGlzaW9uKHRoaXMucGxheWVyLCB0aGlzLndhbGxzWzBdLmdhcCk7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy53YWxsc1swXS5hbmdsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gdGhpcy5jdHguc3Ryb2tlKCk7XG4gICAgICAgIC8vIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuICAgIH1cblxuICAgIHVwZGF0ZSgpe1xuICAgICAgICBpZih0aGlzLndhbGxzLmxlbmd0aCA8IDggJiYgdGhpcy50aW1lciA9PT0gbnVsbCl7XG4gICAgICAgICAgICB0aGlzLnRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB0aGlzLmFkZFdhbGwoKSwgMTAwMCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMud2FsbHMubGVuZ3RoID4gMCAmJiB0aGlzLndhbGxzWzBdLnJhZGl1cyA8IDMwKSB7IHRoaXMud2FsbHMuc2hpZnQoKX1cbiAgICAgICAgdGhpcy5kcmF3KCk7XG4gICAgICAgIFxuICAgICAgICB9XG5cbiAgICB1cGRhdGVTY29yZSgpe1xuICAgICAgICB0aGlzLnNjb3JlICs9IDE7XG4gICAgfVxuXG4gICAgY2hlY2tDb2xsaXNpb24ocGxheWVyLCBnYXApe1xuICAgICAgICBsZXQgY29sbGlzaW9uID0gZmFsc2U7XG4gICAgICAgIGxldCBnYXBQb3MgPSBnYXAuZ2V0UG9zaXRpb24oKTtcbiAgICAgICAgbGV0IHBsYXllckFuZ2xlID0gcGxheWVyLmdldFBvc2l0aW9uKCkgKiBNYXRoLlBJIC8gMTgwO1xuICAgICAgICBsZXQgZW5kQW5nbGUgPSBnYXAuYW5nbGUgLSAoMiAqIE1hdGguUEkgLSBnYXAucGFydGlhbENpcmNsZUFuZ2xlKTtcbiAgICAgICAgaWYgKGVuZEFuZ2xlIDwgMCkge1xuICAgICAgICAgICAgZW5kQW5nbGUgKz0gMipNYXRoLlBJO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYocGxheWVyUG9zID4gZ2FwUG9zW3N0YXJ0XSAmJiBwbGF5ZXJQb3MgPCBnYXBQb3NbZW5kXSkgY29sbGlzaW9uID0gdHJ1ZTtcblxuICAgICAgICAvLyB0aGUgY2FzZSB3aGVuIHRoZSBnYXAgc3RyYWRkbGVzIHRoZSBob3Jpem9udGFsXG5cbiAgICAgICAgaWYgKGdhcC5hbmdsZSA8IGVuZEFuZ2xlKXtcbiAgICAgICAgICAgIGlmICgocGxheWVyQW5nbGUgID4gZW5kQW5nbGUgXG4gICAgICAgICAgICAgICAgJiYgcGxheWVyQW5nbGUgPCAyICogTWF0aC5QSSkgXG4gICAgICAgICAgICAgICAgfHwgcGxheWVyQW5nbGUgPCBnYXAuYW5nbGUgJiYgcGxheWVyQW5nbGUgPiAwKXtcbiAgICAgICAgICAgICAgICBjb2xsaXNpb24gPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBsYXllckFuZ2xlIDwgZ2FwLmFuZ2xlICYmXG4gICAgICAgICAgICBwbGF5ZXJBbmdsZSA+IGVuZEFuZ2xlKSB7XG4gICAgICAgICAgICAgICAgY29sbGlzaW9uID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICBpZihjb2xsaXNpb24gPT09IHRydWUpe1xuICAgICAgICAgICAgLy8gdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAnYmx1ZSdcbiAgICAgICAgICAgIC8vIHRoaXMuY3R4LnN0cm9rZVJlY3QoRElNX1ggLyAyIC0gMjUsIERJTV9ZIC8gMiAtIDI1LCA1MCwgNTApXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNjb3JlKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnNjb3JlKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgR2FtZSBmcm9tICcuL2dhbWUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lVmlldyB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBjdHgpIHtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmdhbWUgPSBuZXcgR2FtZSh0aGlzLmNhbnZhcywgdGhpcy5jdHgpO1xuICAgIH1cblxuXG4gICAgYW5pbWF0ZSgpIHtcbiAgICAgICAgdGhpcy5nYW1lLnVwZGF0ZSgpO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlLmJpbmQodGhpcykpO1xuICAgIH1cbn0iLCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FwIHtcbiAgICBjb25zdHJ1Y3RvcihjdHgsIHggLCB5LCByYWRpdXMsIGFuZ2xlLCByb3RhdGlvbil7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLnJhZGl1cyA9IHJhZGl1czsgXG4gICAgICAgIHRoaXMucm90YXRpb24gPSByb3RhdGlvbjtcbiAgICAgICAgdGhpcy5hbmdsZSA9IGFuZ2xlO1xuICAgICAgICB0aGlzLnBhcnRpYWxDaXJjbGVBbmdsZSA9IDIgKiBNYXRoLlBJIC0gMS4yO1xuICAgIH1cblxuICAgIGRyYXcoKXtcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gXCIjNDg2MzljXCJcbiAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gODtcbiAgICAgICAgdGhpcy5jdHguYXJjKHRoaXMueCwgdGhpcy55LCB0aGlzLnJhZGl1cywgdGhpcy5hbmdsZSwgdGhpcy5wYXJ0aWFsQ2lyY2xlQW5nbGUgKyB0aGlzLmFuZ2xlLCB0cnVlKTtcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMucmFkaXVzID4gMzApIHtcbiAgICAgICAgICAgIHRoaXMucmFkaXVzIC09IDM7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kcmF3KCk7XG4gICAgfVxuXG4gICAgZ2V0UG9zaXRpb24oKXtcbiAgICAgICBjb25zdCBwb3NpdGlvbiA9IHtcbiAgICAgICAgICAgc3RhcnQ6IHRoaXMuYW5nbGUsXG4gICAgICAgICAgIGVuZDogdGhpcy5wYXJ0aWFsQ2lyY2xlQW5nbGUgKyB0aGlzLmFuZ2xlLFxuICAgICAgIH1cbiAgICAgICByZXR1cm4gcG9zaXRpb247XG4gICAgfVxuXG4gICAgZ2V0UG9pbnQoYzEsIGMyLCByYWRpdXMsIGFuZ2xlKSB7XG4gICAgICAgIHJldHVybiBbYzEgKyBNYXRoLmNvcyhhbmdsZSkgKiByYWRpdXMsIGMyICsgTWF0aC5zaW4oYW5nbGUpICogcmFkaXVzXTtcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGN0eCkge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuc2l6ZSA9IDU7XG4gICAgICAgIHRoaXMucmFkaXVzID0gNTU7XG4gICAgICAgIHRoaXMuc3BlZWQgPSA3O1xuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IDA7XG4gICAgICAgIHRoaXMuYW5nbGUgPSAzMDtcbiAgICAgICAgdGhpcy5wbGF5ZXJQb3MgPSBcImxlZnRcIjtcbiAgICAgICAgdGhpcy5kcmF3ID0gdGhpcy5kcmF3LmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgZHJhdygpIHtcbiAgICAgICAgLy8gc3dpdGNoICh0aGlzLnBsYXllclBvcykge1xuICAgICAgICAvLyAgICAgY2FzZSBcImxlZnRcIjpcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmN0eC5tb3ZlVG8odGhpcy5jYW52YXMud2lkdGggLyAyIC0gMzAsIHRoaXMuY2FudmFzLmhlaWdodCAvIDIgKyA1KTtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmN0eC5saW5lVG8odGhpcy5jYW52YXMud2lkdGggLyAyIC0gNDAsIHRoaXMuY2FudmFzLmhlaWdodCAvIDIpO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyh0aGlzLmNhbnZhcy53aWR0aCAvIDIgLSAzMCwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMiAtIDUpO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgLy8gICAgICAgICBicmVhaztcbiAgICAgICAgLy8gICAgIGNhc2UgXCJ1cFwiOlxuICAgICAgICAvLyAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuY3R4Lm1vdmVUbyh0aGlzLmNhbnZhcy53aWR0aCAvIDIgLSA1LCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyIC0gMzApO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyh0aGlzLmNhbnZhcy53aWR0aCAvIDIsIHRoaXMuY2FudmFzLmhlaWdodCAvIDIgLSA0MCk7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5jdHgubGluZVRvKHRoaXMuY2FudmFzLndpZHRoIC8gMiArIDUsIHRoaXMuY2FudmFzLmhlaWdodCAvIDIgLSAzMCk7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICAvLyAgICAgICAgIGJyZWFrO1xuICAgICAgICAvLyAgICAgY2FzZSBcInJpZ2h0XCI6XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5jdHgubW92ZVRvKHRoaXMuY2FudmFzLndpZHRoIC8gMiArIDMwLCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyICsgNSk7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5jdHgubGluZVRvKHRoaXMuY2FudmFzLndpZHRoIC8gMiArIDQwLCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyKTtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmN0eC5saW5lVG8odGhpcy5jYW52YXMud2lkdGggLyAyICsgMzAsIHRoaXMuY2FudmFzLmhlaWdodCAvIDIgLSA1KTtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgIC8vICAgICAgICAgYnJlYWs7XG4gICAgICAgIC8vICAgICBjYXNlIFwiZG93blwiOlxuICAgICAgICAvLyAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuY3R4Lm1vdmVUbyh0aGlzLmNhbnZhcy53aWR0aCAvIDIgLSA1LCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyICsgMzApO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyh0aGlzLmNhbnZhcy53aWR0aCAvIDIsIHRoaXMuY2FudmFzLmhlaWdodCAvIDIgKyA0MCk7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5jdHgubGluZVRvKHRoaXMuY2FudmFzLndpZHRoIC8gMiArIDUsIHRoaXMuY2FudmFzLmhlaWdodCAvIDIgKyAzMCk7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICAvLyAgICAgICAgIGJyZWFrO1xuICAgICAgICAvLyAgICAgZGVmYXVsdDpcbiAgICAgICAgLy8gICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgY29uc3QgZHggPSAodGhpcy5jYW52YXMud2lkdGggLyAyKSArICgodGhpcy5yYWRpdXMpICogTWF0aC5jb3ModGhpcy5hbmdsZSAqIE1hdGguUEkgLyAxODApKTtcbiAgICAgICAgY29uc3QgZHkgPSAodGhpcy5jYW52YXMuaGVpZ2h0IC8gMikgKyAoKHRoaXMucmFkaXVzKSAqIE1hdGguc2luKHRoaXMuYW5nbGUgKiBNYXRoLlBJIC8gMTgwKSk7XG4gICAgICAgIHRoaXMuYW5nbGUgPSB0aGlzLmFuZ2xlICsgKHRoaXMuZGlyZWN0aW9uICogdGhpcy5zcGVlZCk7XG5cbiAgICAgICAgaWYodGhpcy5hbmdsZSA8IDApIHtcbiAgICAgICAgICAgIHRoaXMuYW5nbGUgPSAzNjAgLSB0aGlzLmFuZ2xlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYodGhpcy5hbmdsZSA+IDM2MCl7XG4gICAgICAgICAgICB0aGlzLmFuZ2xlICU9IDM2MDtcbiAgICAgICAgfVxuICAgICAgICAvLyB0aGlzLmN0eC5zYXZlKCk7XG4gICAgICAgIHRoaXMuY3R4LnRyYW5zbGF0ZShkeCwgZHkpO1xuICAgICAgICB0aGlzLmN0eC5yb3RhdGUodGhpcy5hbmdsZSAqIE1hdGguUEkgLyAxODApO1xuICAgICAgICAvLyB0aGlzLmN0eC5yZXN0b3JlKCk7XG4gICAgICAgIHRoaXMuY3R4LnRyYW5zbGF0ZSgtZHgsIC1keSk7XG5cbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4Lm1vdmVUbyhkeCAtIHRoaXMuc2l6ZSwgZHkgLSB0aGlzLnNpemUpO1xuICAgICAgICB0aGlzLmN0eC5saW5lVG8oZHggKyB0aGlzLnNpemUsIGR5KTtcbiAgICAgICAgdGhpcy5jdHgubGluZVRvKGR4IC0gdGhpcy5zaXplLCBkeSArIHRoaXMuc2l6ZSk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgdGhpcy5jdHgudHJhbnNsYXRlKGR4LCBkeSk7XG4gICAgICAgIHRoaXMuY3R4LnJvdGF0ZSgtdGhpcy5hbmdsZSAqIE1hdGguUEkgLyAxODApO1xuICAgICAgICB0aGlzLmN0eC50cmFuc2xhdGUoLWR4LCAtZHkpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImR4XCIgKyBkeCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZHlcIiArIGR5KTtcbiAgICB9XG4gICAgaGFuZGxlUHJlc3MoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHN3aXRjaCAoZS5rZXkpIHtcbiAgICAgICAgICAgIC8vIGNhc2UgJ0Fycm93VXAnOlxuICAgICAgICAgICAgLy8gICAgIHRoaXMucGxheWVyUG9zID0gXCJ1cFwiO1xuICAgICAgICAgICAgLy8gICAgIGJyZWFrO1xuICAgICAgICAgICAgLy8gY2FzZSAnQXJyb3dEb3duJzpcbiAgICAgICAgICAgIC8vICAgICB0aGlzLnBsYXllclBvcyA9IFwiZG93blwiO1xuICAgICAgICAgICAgLy8gICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnQXJyb3dMZWZ0JzpcbiAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IC0xO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnQXJyb3dSaWdodCc6XG4gICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSAxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlS2V5VXAoZSl7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gMDtcbiAgICB9XG5cbiAgICBnZXRQb3NpdGlvbigpe1xuICAgICAgICByZXR1cm4gdGhpcy5hbmdsZTtcbiAgICB9XG59XG5cbiIsImltcG9ydCBHYXAgZnJvbSBcIi4vZ2FwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdhbGwge1xuICAgIGNvbnN0cnVjdG9yKGN0eCwgeCwgeSwgcmFkaXVzLCBjb2xvciwgcm90YXRpb24pIHtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMucmFkaXVzID0gcmFkaXVzO1xuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgICAgIHRoaXMudGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICB0aGlzLmFuZ2xlID0gTWF0aC5yYW5kb20oKSAqICgyICogTWF0aC5QSSk7XG4gICAgICAgIHRoaXMucm90YXRpb24gPSByb3RhdGlvbjtcbiAgICAgICAgdGhpcy5lbmRBbmdsZSA9IDIgKiBNYXRoLlBJIC0gMS4yO1xuICAgICAgICB0aGlzLmdhcCA9IG5ldyBHYXAodGhpcy5jdHgsIHRoaXMueCwgdGhpcy55LCB0aGlzLnJhZGl1cywgdGhpcy5hbmdsZSwgdGhpcy5yb3RhdGlvbiwgdGhpcy50aW1lKTtcbiAgICB9XG5cbiAgICBkcmF3KCl7XG4gICAgICAgIGNvbnN0IG5ld1RpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgbGV0IGRpZmYgPSBuZXdUaW1lIC0gdGhpcy50aW1lO1xuICAgICAgICB0aGlzLnRpbWUgPSBuZXdUaW1lO1xuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSA4O1xuICAgICAgICB0aGlzLmN0eC5hcmModGhpcy54LCB0aGlzLnksIHRoaXMucmFkaXVzLCB0aGlzLmFuZ2xlLCB0aGlzLmVuZEFuZ2xlICsgdGhpcy5hbmdsZSwgZmFsc2UpO1xuICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgdGhpcy5hbmdsZSArPSBkaWZmICogdGhpcy5yb3RhdGlvbjtcbiAgICAgICAgdGhpcy5hbmdsZSAlPSAyICogTWF0aC5QSTtcblxuICAgICAgICB0aGlzLmdhcC5hbmdsZSArPSBkaWZmICogdGhpcy5yb3RhdGlvbjtcbiAgICAgICAgdGhpcy5nYXAuYW5nbGUgJT0gMiAqIE1hdGguUEk7XG5cbiAgICAgICAgaWYgKHRoaXMuYW5nbGUgPCAwKSB7XG4gICAgICAgICAgICB0aGlzLmFuZ2xlID0gMiAqIE1hdGguUEk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5hbmdsZSA+IDIgKiBNYXRoLlBJKSB7XG4gICAgICAgICAgICB0aGlzLmFuZ2xlICU9IDIgKiBNYXRoLlBJO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZ2FwLmFuZ2xlIDwgMCkge1xuICAgICAgICAgICAgdGhpcy5nYXAuYW5nbGUgPSAyICogTWF0aC5QSTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmdhcC5hbmdsZSA+IDIgKiBNYXRoLlBJKSB7XG4gICAgICAgICAgICB0aGlzLmdhcC5hbmdsZSAlPSAyICogTWF0aC5QSTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZSgpe1xuICAgICAgICBpZih0aGlzLnJhZGl1cyA+IDMwKSB7XG4gICAgICAgICAgICB0aGlzLnJhZGl1cyAtPSAzO1xuICAgICAgICAgICAgdGhpcy5nYXAucmFkaXVzIC09IDM7XG4gICAgICAgIH0gXG4gICAgICAgIHRoaXMuZ2FwLmRyYXcoKTtcbiAgICAgICAgdGhpcy5kcmF3KCk7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=