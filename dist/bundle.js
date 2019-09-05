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
    document.addEventListener('keydown', function (e) {
        return gameView.game.gameStart(e);
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

var _wall3 = __webpack_require__(/*! ./wall */ "./src/javascript/wall.js");

var _wall4 = _interopRequireDefault(_wall3);

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
        this.inGame = false;
        this.dead = false;
        this.bg = "#48639c";
    }

    _createClass(Game, [{
        key: "changeBG",
        value: function changeBG() {
            var randomColor = Math.floor(Math.random() * 16777215).toString(16);
            var canvas = document.getElementById("myCanvas");
            this.bg = canvas.style.backgroundColor = "#" + randomColor;
        }
    }, {
        key: "init",
        value: function init() {
            var _this = this;

            if (!this.inGame) {
                this.startScreen();
            } else if (this.inGame && !this.dead) {
                document.removeEventListener('keydown', function (e) {
                    return _this.gameStart(e);
                });
                this.run();
            } else {
                this.gameOver();
            }
        }
    }, {
        key: "addWall",
        value: function addWall() {
            var slowRotations = [-.001, .001];
            var medRotations = [-.002, .002];
            var fastRotations = [-.003, .003];
            if (this.score < 10) {
                var wall = new _wall4.default(this.ctx, this.canvas.width / 2, this.canvas.height / 2, this.canvas.width / 2, "#388697", slowRotations[Math.floor(Math.random() * slowRotations.length)]);
                this.walls.push(wall);
                this.timer = null;
            } else if (this.score < 20) {
                var _wall = new _wall4.default(this.ctx, this.canvas.width / 2, this.canvas.height / 2, this.canvas.width / 2, "#388697", medRotations[Math.floor(Math.random() * medRotations.length)]);
                this.walls.push(_wall);
                this.timer = null;
            } else {
                var _wall2 = new _wall4.default(this.ctx, this.canvas.width / 2, this.canvas.height / 2, this.canvas.width / 2, "#388697", fastRotations[Math.floor(Math.random() * fastRotations.length)]);
                this.walls.push(_wall2);
                this.timer = null;
            }
        }
    }, {
        key: "allWalls",
        value: function allWalls() {
            return this.walls;
        }
    }, {
        key: "showScore",
        value: function showScore() {
            this.ctx.beginPath();
            this.ctx.font = "20px Georgia";
            this.ctx.fillText("Score: " + this.score, this.canvas.width - 100, 30);
            this.ctx.closePath();
        }
    }, {
        key: "centerText",
        value: function centerText(text, y) {
            var measurement = this.ctx.measureText(text);
            var x = (this.canvas.width - measurement.width) / 2;
            this.ctx.fillText(text, x, y);
        }
    }, {
        key: "draw",
        value: function draw() {
            this.ctx.clearRect(0, 0, DIM_X, DIM_Y);
            var centerX = DIM_X / 2;
            var centerY = DIM_Y / 2;
            // this.ctx.beginPath();
            // this.ctx.lineWidth = 1;
            // this.ctx.strokeStyle = "black"
            // // this.ctx.arc(centerX, centerY, 30, 0, 2 * Math.PI, false);
            // this.ctx.stroke();
            // this.ctx.closePath();
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
                    if (!this.checkCollision(this.player, this.walls[0].gap)) {
                        this.dead = true;
                    };
                    // console.log(this.walls[0].angle);
                }
            }
            this.showScore();
            // this.ctx.stroke();
            // this.ctx.closePath();
        }
    }, {
        key: "run",
        value: function run() {
            var _this2 = this;

            var wallSpace = 1000;
            if (this.walls.length < 8 && this.timer === null) {
                this.timer = setTimeout(function () {
                    return _this2.addWall();
                }, wallSpace);
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
        key: "gameOver",
        value: function gameOver() {
            var _this3 = this;

            var canvas = document.getElementById("myCanvas");
            canvas.style.backgroundColor = "#48639c";
            this.walls = [];
            var y = this.canvas.height / 2;
            var color = "#FF0000";
            var title = "Game Over";
            var enter = "Try again";
            var score = "Score: " + this.score;
            this.ctx.clearRect(0, 0, DIM_X, DIM_Y);
            this.ctx.fillStyle = color;
            this.ctx.font = "48px monospace";
            this.centerText(title, y + 60);

            this.ctx.font = "24px monospace";
            this.centerText(score, y);
            this.ctx.fillStyle = color;
            this.ctx.font = "24px monospace";
            this.centerText(enter, y + 100);

            document.addEventListener('keydown', function (e) {
                return _this3.gameStart(e);
            });
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
                this.changeBG();
            }
            return collision;
        }
    }, {
        key: "startScreen",
        value: function startScreen() {
            var _this4 = this;

            var y = this.canvas.height / 2;
            var color = "#CC29336";
            var title = "Escape the Shape";
            var enter = "Press Enter";
            // let enterLength = this.ctx.measureText(enter);
            // let titleLength = this.ctx.measureText(title);
            // let enterX = (this.canvas.width - enterLength.width) / 2;
            // let x = (this.canvas.width - titleLength.width) / 2;
            this.ctx.clearRect(0, 0, DIM_X, DIM_Y);
            this.ctx.fillStyle = "white";
            this.ctx.font = "48px monospace";
            this.centerText(title, y);

            this.ctx.fillStyle = color;
            this.ctx.font = "24px monospace";
            this.centerText(enter, y + 30);
            document.addEventListener('keydown', function (e) {
                return _this4.gameStart(e);
            });
        }
    }, {
        key: "gameStart",
        value: function gameStart(e) {
            e.preventDefault();
            if (e.which === 13 || e.keyCode === 13) {
                this.inGame = true;
                this.bg = "#48639c";
                this.dead = false;
                this.score = 0;
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
            this.game.init();
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
    function Gap(ctx, x, y, radius, angle, rotation, time) {
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
            this.ctx.globalAlpha = 0.0;
            this.ctx.lineWidth = 8;
            this.ctx.arc(this.x, this.y, this.radius, this.angle, this.partialCircleAngle + this.angle, true);
            this.ctx.stroke();
            this.ctx.closePath();
            this.ctx.globalAlpha = 1.0;
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
        key: "draw",
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
            this.ctx.fillStyle = "black";
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
        key: "handlePress",
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
        key: "handleKeyUp",
        value: function handleKeyUp(e) {
            this.direction = 0;
        }
    }, {
        key: "getPosition",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qYXZhc2NyaXB0L2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2phdmFzY3JpcHQvZ2FtZV92aWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9qYXZhc2NyaXB0L2dhcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvamF2YXNjcmlwdC9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2phdmFzY3JpcHQvd2FsbC5qcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXMiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsIndpZHRoIiwiaGVpZ2h0IiwiY3R4IiwiZ2V0Q29udGV4dCIsImdhbWVWaWV3IiwiR2FtZVZpZXciLCJnYW1lIiwicGxheWVyIiwiaGFuZGxlUHJlc3MiLCJlIiwiZ2FtZVN0YXJ0IiwiaGFuZGxlS2V5VXAiLCJhbmltYXRlIiwiRElNX1giLCJESU1fWSIsIkNPTE9SX1NDSEVNRSIsIkdhbWUiLCJQbGF5ZXIiLCJ3YWxscyIsInRpbWVyIiwic2NvcmUiLCJpbkdhbWUiLCJkZWFkIiwiYmciLCJyYW5kb21Db2xvciIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInRvU3RyaW5nIiwiZ2V0RWxlbWVudEJ5SWQiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsInN0YXJ0U2NyZWVuIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJ1biIsImdhbWVPdmVyIiwic2xvd1JvdGF0aW9ucyIsIm1lZFJvdGF0aW9ucyIsImZhc3RSb3RhdGlvbnMiLCJ3YWxsIiwiV2FsbCIsImxlbmd0aCIsInB1c2giLCJiZWdpblBhdGgiLCJmb250IiwiZmlsbFRleHQiLCJjbG9zZVBhdGgiLCJ0ZXh0IiwieSIsIm1lYXN1cmVtZW50IiwibWVhc3VyZVRleHQiLCJ4IiwiY2xlYXJSZWN0IiwiY2VudGVyWCIsImNlbnRlclkiLCJmb3JFYWNoIiwidXBkYXRlIiwiZHJhdyIsImRvV2FsbHNFeGlzdCIsImlzV2FsbE9uUGxheWVyIiwicmFkaXVzIiwic2l6ZSIsImNoZWNrQ29sbGlzaW9uIiwiZ2FwIiwic2hvd1Njb3JlIiwid2FsbFNwYWNlIiwic2V0VGltZW91dCIsImFkZFdhbGwiLCJzaGlmdCIsImNvbG9yIiwidGl0bGUiLCJlbnRlciIsImZpbGxTdHlsZSIsImNlbnRlclRleHQiLCJjb2xsaXNpb24iLCJnYXBQb3MiLCJnZXRQb3NpdGlvbiIsInBsYXllckFuZ2xlIiwiUEkiLCJlbmRBbmdsZSIsImFuZ2xlIiwicGFydGlhbENpcmNsZUFuZ2xlIiwidXBkYXRlU2NvcmUiLCJjaGFuZ2VCRyIsInByZXZlbnREZWZhdWx0Iiwid2hpY2giLCJrZXlDb2RlIiwiaW5pdCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImJpbmQiLCJHYXAiLCJyb3RhdGlvbiIsInRpbWUiLCJnbG9iYWxBbHBoYSIsImxpbmVXaWR0aCIsImFyYyIsInN0cm9rZSIsInBvc2l0aW9uIiwic3RhcnQiLCJlbmQiLCJjMSIsImMyIiwiY29zIiwic2luIiwic3BlZWQiLCJkaXJlY3Rpb24iLCJwbGF5ZXJQb3MiLCJkeCIsImR5IiwidHJhbnNsYXRlIiwicm90YXRlIiwibW92ZVRvIiwibGluZVRvIiwiZmlsbCIsImtleSIsIkRhdGUiLCJnZXRUaW1lIiwibmV3VGltZSIsImRpZmYiLCJzdHJva2VTdHlsZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFB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Q2pCLHFCQUFLQSxNQUFMLElBQWUsQ0FBZjtBQUNBLHFCQUFLRyxHQUFMLENBQVNILE1BQVQsSUFBbUIsQ0FBbkI7QUFDSDtBQUNELGlCQUFLRyxHQUFMLENBQVNOLElBQVQ7QUFDQSxpQkFBS0EsSUFBTDtBQUNIOzs7Ozs7a0JBeERnQmpCLEkiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgUGxheWVyIGZyb20gJy4vamF2YXNjcmlwdC9wbGF5ZXInO1xuaW1wb3J0IEdhbWUgZnJvbSAnLi9qYXZhc2NyaXB0L2dhbWUnO1xuaW1wb3J0IEdhbWVWaWV3IGZyb20gJy4vamF2YXNjcmlwdC9nYW1lX3ZpZXcnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJjYW52YXNcIilbMF07XG4gICAgY2FudmFzLndpZHRoID0gMTAwMDtcbiAgICBjYW52YXMuaGVpZ2h0ID0gNjAwO1xuXG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblxuXG4gICAgY29uc3QgZ2FtZVZpZXcgPSBuZXcgR2FtZVZpZXcoY2FudmFzLCBjdHgpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBlID0+IGdhbWVWaWV3LmdhbWUucGxheWVyLmhhbmRsZVByZXNzKGUpKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZSA9PiBnYW1lVmlldy5nYW1lLmdhbWVTdGFydChlKSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBlID0+IGdhbWVWaWV3LmdhbWUucGxheWVyLmhhbmRsZUtleVVwKGUpKTtcbiAgICBnYW1lVmlldy5hbmltYXRlKCk7XG59KTtcblxuXG5cbiIsImltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vcGxheWVyXCI7XG5pbXBvcnQgV2FsbCBmcm9tIFwiLi93YWxsXCI7XG5cbmNvbnN0IERJTV9YID0gMTAwMDtcbmNvbnN0IERJTV9ZID0gNjAwO1xuY29uc3QgQ09MT1JfU0NIRU1FID0gW1wiI0NDMjkzMzZcIiwgXCJFQkJBQjlcIiwgXCIjMzg4Njk3XCIsIFwiI0JGRkZFMVwiXVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBjdHgpIHtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIodGhpcy5jYW52YXMsIHRoaXMuY3R4KVxuICAgICAgICB0aGlzLndhbGxzID0gW107XG4gICAgICAgIHRoaXMudGltZXIgPSBudWxsO1xuICAgICAgICB0aGlzLnNjb3JlID0gMDtcbiAgICAgICAgdGhpcy5pbkdhbWUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kZWFkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYmcgPSBcIiM0ODYzOWNcIjtcbiAgICB9XG5cbiAgICBjaGFuZ2VCRygpIHtcbiAgICAgICAgY29uc3QgcmFuZG9tQ29sb3IgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxNjc3NzIxNSkudG9TdHJpbmcoMTYpO1xuICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15Q2FudmFzXCIpO1xuICAgICAgICB0aGlzLmJnID0gY2FudmFzLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI1wiICsgcmFuZG9tQ29sb3I7XG4gICAgfVxuXG4gICAgaW5pdCgpe1xuICAgICAgICBpZighdGhpcy5pbkdhbWUpe1xuICAgICAgICAgICAgdGhpcy5zdGFydFNjcmVlbigpO1xuICAgICAgICB9IGVsc2UgaWYodGhpcy5pbkdhbWUgJiYgIXRoaXMuZGVhZCl7XG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZSA9PiB0aGlzLmdhbWVTdGFydChlKSk7XG4gICAgICAgICAgICB0aGlzLnJ1bigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5nYW1lT3ZlcigpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBhZGRXYWxsKCl7XG4gICAgICAgY29uc3Qgc2xvd1JvdGF0aW9ucyA9IFstLjAwMSwgLjAwMV07XG4gICAgICAgY29uc3QgbWVkUm90YXRpb25zID0gWy0uMDAyLCAuMDAyXTtcbiAgICAgICBjb25zdCBmYXN0Um90YXRpb25zID0gWy0uMDAzLCAuMDAzXTtcbiAgICAgICBpZiAodGhpcy5zY29yZSA8IDEwKXtcbiAgICAgICAgY29uc3Qgd2FsbCA9IG5ldyBXYWxsKHRoaXMuY3R4LCB0aGlzLmNhbnZhcy53aWR0aCAvIDIsIHRoaXMuY2FudmFzLmhlaWdodCAvIDIsIHRoaXMuY2FudmFzLndpZHRoIC8gMiwgXCIjMzg4Njk3XCIsIHNsb3dSb3RhdGlvbnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogc2xvd1JvdGF0aW9ucy5sZW5ndGgpXSlcbiAgICAgICAgdGhpcy53YWxscy5wdXNoKHdhbGwpO1xuICAgICAgICB0aGlzLnRpbWVyID0gbnVsbDtcbiAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2NvcmUgPCAyMCl7XG4gICAgICAgICAgICBjb25zdCB3YWxsID0gbmV3IFdhbGwodGhpcy5jdHgsIHRoaXMuY2FudmFzLndpZHRoIC8gMiwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMiwgdGhpcy5jYW52YXMud2lkdGggLyAyLCBcIiMzODg2OTdcIiwgbWVkUm90YXRpb25zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG1lZFJvdGF0aW9ucy5sZW5ndGgpXSlcbiAgICAgICAgICAgIHRoaXMud2FsbHMucHVzaCh3YWxsKTtcbiAgICAgICAgICAgIHRoaXMudGltZXIgPSBudWxsO1xuICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCB3YWxsID0gbmV3IFdhbGwodGhpcy5jdHgsIHRoaXMuY2FudmFzLndpZHRoIC8gMiwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMiwgdGhpcy5jYW52YXMud2lkdGggLyAyLCBcIiMzODg2OTdcIiwgZmFzdFJvdGF0aW9uc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBmYXN0Um90YXRpb25zLmxlbmd0aCldKVxuICAgICAgICAgICAgdGhpcy53YWxscy5wdXNoKHdhbGwpO1xuICAgICAgICAgICAgdGhpcy50aW1lciA9IG51bGw7XG4gICAgICAgfVxuICAgIH1cblxuICAgIGFsbFdhbGxzKCl7XG4gICAgICAgIHJldHVybiB0aGlzLndhbGxzO1xuICAgIH1cblxuICAgIHNob3dTY29yZSgpe1xuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiMjBweCBHZW9yZ2lhXCI7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiU2NvcmU6IFwiICsgdGhpcy5zY29yZSwgdGhpcy5jYW52YXMud2lkdGggLSAxMDAsIDMwKTtcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG4gICAgfVxuXG4gICAgY2VudGVyVGV4dCh0ZXh0LCB5KXtcbiAgICAgICAgY29uc3QgbWVhc3VyZW1lbnQgPSB0aGlzLmN0eC5tZWFzdXJlVGV4dCh0ZXh0KTtcbiAgICAgICAgY29uc3QgeCA9ICh0aGlzLmNhbnZhcy53aWR0aCAtIG1lYXN1cmVtZW50LndpZHRoKSAvIDI7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KHRleHQsIHgsIHkpO1xuICAgIH1cbiAgICBcbiAgICBkcmF3KCkge1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgRElNX1gsIERJTV9ZKTtcbiAgICAgICAgY29uc3QgY2VudGVyWCA9IERJTV9YIC8gMjtcbiAgICAgICAgY29uc3QgY2VudGVyWSA9IERJTV9ZIC8gMjtcbiAgICAgICAgLy8gdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIC8vIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDE7XG4gICAgICAgIC8vIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiXG4gICAgICAgIC8vIC8vIHRoaXMuY3R4LmFyYyhjZW50ZXJYLCBjZW50ZXJZLCAzMCwgMCwgMiAqIE1hdGguUEksIGZhbHNlKTtcbiAgICAgICAgLy8gdGhpcy5jdHguc3Ryb2tlKCk7XG4gICAgICAgIC8vIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICB0aGlzLndhbGxzLmZvckVhY2god2FsbCA9PiB7XG4gICAgICAgICAgICB3YWxsLnVwZGF0ZSgpO1xuICAgICAgICAgICAgLy8gd2FsbC5nYXAudXBkYXRlKCk7XG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMucGxheWVyLmRyYXcoNSk7XG5cbiAgICAgICAgY29uc3QgZG9XYWxsc0V4aXN0ID0gdGhpcy53YWxscy5sZW5ndGggPiAwO1xuICAgICAgICBpZihkb1dhbGxzRXhpc3Qpe1xuXG4gICAgICAgICAgICAvL1RPRE86IHdlIGNoZWNrIGZvciBjb2xsaXNpb24gd2hlbiB0aGUgd2FsbCBpcyBsaXRlcmFsbHkgb250b3Agb2YgdGhlIHBsYXllclxuICAgICAgICAgICAgLy8gbWF5YmUgZmluZCBhIHN3ZWV0IHNwb3Qgd2l0aCB0aGlzLnBsYXllci5yYWRpdXMgKyAxIG9yIHNvbWV0aGluZyBjYXVzZSB0aGUgdHJpYW5nbGUgaGFzXG4gICAgICAgICAgICAvLyBhIHNpemUgdG8gaXQuXG4gICAgICAgICAgICBjb25zdCBpc1dhbGxPblBsYXllciA9IHRoaXMud2FsbHNbMF0ucmFkaXVzIDw9IHRoaXMucGxheWVyLnJhZGl1cyArIHRoaXMucGxheWVyLnNpemUgJiYgdGhpcy53YWxsc1swXS5yYWRpdXMgPj0gdGhpcy5wbGF5ZXIucmFkaXVzICsgdGhpcy5wbGF5ZXIuc2l6ZSAtIDE7XG4gICAgICAgICAgICBpZiAoaXNXYWxsT25QbGF5ZXIpe1xuICAgICAgICAgICAgICAgIGlmKCF0aGlzLmNoZWNrQ29sbGlzaW9uKHRoaXMucGxheWVyLCB0aGlzLndhbGxzWzBdLmdhcCkpe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlYWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy53YWxsc1swXS5hbmdsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zaG93U2NvcmUoKTtcbiAgICAgICAgLy8gdGhpcy5jdHguc3Ryb2tlKCk7XG4gICAgICAgIC8vIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuICAgIH1cblxuICAgIHJ1bigpe1xuICAgICAgICBjb25zdCB3YWxsU3BhY2UgPSAxMDAwO1xuICAgICAgICBpZih0aGlzLndhbGxzLmxlbmd0aCA8IDggJiYgdGhpcy50aW1lciA9PT0gbnVsbCl7XG4gICAgICAgICAgICB0aGlzLnRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB0aGlzLmFkZFdhbGwoKSwgd2FsbFNwYWNlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy53YWxscy5sZW5ndGggPiAwICYmIHRoaXMud2FsbHNbMF0ucmFkaXVzIDwgMzApIHsgdGhpcy53YWxscy5zaGlmdCgpfVxuICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICAgICAgfVxuXG4gICAgdXBkYXRlU2NvcmUoKXtcbiAgICAgICAgdGhpcy5zY29yZSArPSAxO1xuICAgIH1cblxuICAgIGdhbWVPdmVyKCl7XG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlDYW52YXNcIik7XG4gICAgICAgIGNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAoXCIjNDg2MzljXCIpO1xuICAgICAgICB0aGlzLndhbGxzID0gW107XG4gICAgICAgIGxldCB5ID0gdGhpcy5jYW52YXMuaGVpZ2h0IC8gMjtcbiAgICAgICAgbGV0IGNvbG9yID0gXCIjRkYwMDAwXCI7XG4gICAgICAgIGxldCB0aXRsZSA9IFwiR2FtZSBPdmVyXCI7XG4gICAgICAgIGxldCBlbnRlciA9IFwiVHJ5IGFnYWluXCI7XG4gICAgICAgIGxldCBzY29yZSA9IGBTY29yZTogJHt0aGlzLnNjb3JlfWA7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCBESU1fWCwgRElNX1kpO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiNDhweCBtb25vc3BhY2VcIjtcbiAgICAgICAgdGhpcy5jZW50ZXJUZXh0KHRpdGxlLCB5ICsgNjApO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiMjRweCBtb25vc3BhY2VcIjtcbiAgICAgICAgdGhpcy5jZW50ZXJUZXh0KHNjb3JlLCB5KTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gY29sb3I7XG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcIjI0cHggbW9ub3NwYWNlXCI7XG4gICAgICAgIHRoaXMuY2VudGVyVGV4dChlbnRlciwgeSArIDEwMCk7XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGUgPT4gdGhpcy5nYW1lU3RhcnQoZSkpO1xuICAgIH1cblxuICAgIGNoZWNrQ29sbGlzaW9uKHBsYXllciwgZ2FwKXtcbiAgICAgICAgbGV0IGNvbGxpc2lvbiA9IGZhbHNlO1xuICAgICAgICBsZXQgZ2FwUG9zID0gZ2FwLmdldFBvc2l0aW9uKCk7XG4gICAgICAgIGxldCBwbGF5ZXJBbmdsZSA9IHBsYXllci5nZXRQb3NpdGlvbigpICogTWF0aC5QSSAvIDE4MDtcbiAgICAgICAgbGV0IGVuZEFuZ2xlID0gZ2FwLmFuZ2xlIC0gKDIgKiBNYXRoLlBJIC0gZ2FwLnBhcnRpYWxDaXJjbGVBbmdsZSk7XG4gICAgICAgIGlmIChlbmRBbmdsZSA8IDApIHtcbiAgICAgICAgICAgIGVuZEFuZ2xlICs9IDIqTWF0aC5QSTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmKHBsYXllclBvcyA+IGdhcFBvc1tzdGFydF0gJiYgcGxheWVyUG9zIDwgZ2FwUG9zW2VuZF0pIGNvbGxpc2lvbiA9IHRydWU7XG5cbiAgICAgICAgLy8gdGhlIGNhc2Ugd2hlbiB0aGUgZ2FwIHN0cmFkZGxlcyB0aGUgaG9yaXpvbnRhbFxuXG4gICAgICAgIGlmIChnYXAuYW5nbGUgPCBlbmRBbmdsZSl7XG4gICAgICAgICAgICBpZiAoKHBsYXllckFuZ2xlICA+IGVuZEFuZ2xlIFxuICAgICAgICAgICAgICAgICYmIHBsYXllckFuZ2xlIDwgMiAqIE1hdGguUEkpIFxuICAgICAgICAgICAgICAgIHx8IHBsYXllckFuZ2xlIDwgZ2FwLmFuZ2xlICYmIHBsYXllckFuZ2xlID4gMCl7XG4gICAgICAgICAgICAgICAgY29sbGlzaW9uID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwbGF5ZXJBbmdsZSA8IGdhcC5hbmdsZSAmJlxuICAgICAgICAgICAgcGxheWVyQW5nbGUgPiBlbmRBbmdsZSkge1xuICAgICAgICAgICAgICAgIGNvbGxpc2lvbiA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgaWYoY29sbGlzaW9uID09PSB0cnVlKXtcbiAgICAgICAgICAgIC8vIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gJ2JsdWUnXG4gICAgICAgICAgICAvLyB0aGlzLmN0eC5zdHJva2VSZWN0KERJTV9YIC8gMiAtIDI1LCBESU1fWSAvIDIgLSAyNSwgNTAsIDUwKVxuICAgICAgICAgICAgdGhpcy51cGRhdGVTY29yZSgpO1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VCRygpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb2xsaXNpb247XG4gICAgfVxuXG4gICAgc3RhcnRTY3JlZW4oKXtcbiAgICAgICAgbGV0IHkgPSB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyO1xuICAgICAgICBsZXQgY29sb3IgPSBcIiNDQzI5MzM2XCI7XG4gICAgICAgIGxldCB0aXRsZSA9IFwiRXNjYXBlIHRoZSBTaGFwZVwiO1xuICAgICAgICBsZXQgZW50ZXIgPSBcIlByZXNzIEVudGVyXCI7XG4gICAgICAgIC8vIGxldCBlbnRlckxlbmd0aCA9IHRoaXMuY3R4Lm1lYXN1cmVUZXh0KGVudGVyKTtcbiAgICAgICAgLy8gbGV0IHRpdGxlTGVuZ3RoID0gdGhpcy5jdHgubWVhc3VyZVRleHQodGl0bGUpO1xuICAgICAgICAvLyBsZXQgZW50ZXJYID0gKHRoaXMuY2FudmFzLndpZHRoIC0gZW50ZXJMZW5ndGgud2lkdGgpIC8gMjtcbiAgICAgICAgLy8gbGV0IHggPSAodGhpcy5jYW52YXMud2lkdGggLSB0aXRsZUxlbmd0aC53aWR0aCkgLyAyO1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgRElNX1gsIERJTV9ZKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICB0aGlzLmN0eC5mb250ID0gXCI0OHB4IG1vbm9zcGFjZVwiO1xuICAgICAgICB0aGlzLmNlbnRlclRleHQodGl0bGUsIHkpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gY29sb3I7XG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcIjI0cHggbW9ub3NwYWNlXCI7XG4gICAgICAgIHRoaXMuY2VudGVyVGV4dChlbnRlciwgeSArIDMwKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGUgPT4gdGhpcy5nYW1lU3RhcnQoZSkpO1xuICAgIH1cblxuICAgIGdhbWVTdGFydChlKXtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZihlLndoaWNoID09PSAxMyB8fCBlLmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgICAgICB0aGlzLmluR2FtZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmJnID0gXCIjNDg2MzljXCJcbiAgICAgICAgICAgIHRoaXMuZGVhZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5zY29yZSA9IDA7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IEdhbWUgZnJvbSAnLi9nYW1lJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVZpZXcge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY3R4KSB7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5nYW1lID0gbmV3IEdhbWUodGhpcy5jYW52YXMsIHRoaXMuY3R4KTtcbiAgICB9XG5cbiAgICBcblxuXG4gICAgYW5pbWF0ZSgpIHtcbiAgICAgICAgdGhpcy5nYW1lLmluaXQoKTtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpKTtcbiAgICB9XG59IiwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhcCB7XG4gICAgY29uc3RydWN0b3IoY3R4LCB4ICwgeSwgcmFkaXVzLCBhbmdsZSwgcm90YXRpb24sIHRpbWUpe1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy5yYWRpdXMgPSByYWRpdXM7IFxuICAgICAgICB0aGlzLnJvdGF0aW9uID0gcm90YXRpb247XG4gICAgICAgIHRoaXMuYW5nbGUgPSBhbmdsZTtcbiAgICAgICAgdGhpcy5wYXJ0aWFsQ2lyY2xlQW5nbGUgPSAyICogTWF0aC5QSSAtIDEuMjtcbiAgICB9XG5cbiAgICBkcmF3KCl7XG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5nbG9iYWxBbHBoYSA9IDAuMDtcbiAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gODtcbiAgICAgICAgdGhpcy5jdHguYXJjKHRoaXMueCwgdGhpcy55LCB0aGlzLnJhZGl1cywgdGhpcy5hbmdsZSwgdGhpcy5wYXJ0aWFsQ2lyY2xlQW5nbGUgKyB0aGlzLmFuZ2xlLCB0cnVlKTtcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5nbG9iYWxBbHBoYSA9IDEuMDtcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIGlmICh0aGlzLnJhZGl1cyA+IDMwKSB7XG4gICAgICAgICAgICB0aGlzLnJhZGl1cyAtPSAzO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZHJhdygpO1xuICAgIH1cblxuICAgIGdldFBvc2l0aW9uKCl7XG4gICAgICAgY29uc3QgcG9zaXRpb24gPSB7XG4gICAgICAgICAgIHN0YXJ0OiB0aGlzLmFuZ2xlLFxuICAgICAgICAgICBlbmQ6IHRoaXMucGFydGlhbENpcmNsZUFuZ2xlICsgdGhpcy5hbmdsZSxcbiAgICAgICB9XG4gICAgICAgcmV0dXJuIHBvc2l0aW9uO1xuICAgIH1cblxuICAgIGdldFBvaW50KGMxLCBjMiwgcmFkaXVzLCBhbmdsZSkge1xuICAgICAgICByZXR1cm4gW2MxICsgTWF0aC5jb3MoYW5nbGUpICogcmFkaXVzLCBjMiArIE1hdGguc2luKGFuZ2xlKSAqIHJhZGl1c107XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBjdHgpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLnNpemUgPSA1O1xuICAgICAgICB0aGlzLnJhZGl1cyA9IDU1O1xuICAgICAgICB0aGlzLnNwZWVkID0gNztcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSAwO1xuICAgICAgICB0aGlzLmFuZ2xlID0gMzA7XG4gICAgICAgIHRoaXMucGxheWVyUG9zID0gXCJsZWZ0XCI7XG4gICAgICAgIHRoaXMuZHJhdyA9IHRoaXMuZHJhdy5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGRyYXcoKSB7XG4gICAgICAgIC8vIHN3aXRjaCAodGhpcy5wbGF5ZXJQb3MpIHtcbiAgICAgICAgLy8gICAgIGNhc2UgXCJsZWZ0XCI6XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5jdHgubW92ZVRvKHRoaXMuY2FudmFzLndpZHRoIC8gMiAtIDMwLCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyICsgNSk7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5jdHgubGluZVRvKHRoaXMuY2FudmFzLndpZHRoIC8gMiAtIDQwLCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyKTtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmN0eC5saW5lVG8odGhpcy5jYW52YXMud2lkdGggLyAyIC0gMzAsIHRoaXMuY2FudmFzLmhlaWdodCAvIDIgLSA1KTtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgIC8vICAgICAgICAgYnJlYWs7XG4gICAgICAgIC8vICAgICBjYXNlIFwidXBcIjpcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmN0eC5tb3ZlVG8odGhpcy5jYW52YXMud2lkdGggLyAyIC0gNSwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMiAtIDMwKTtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmN0eC5saW5lVG8odGhpcy5jYW52YXMud2lkdGggLyAyLCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyIC0gNDApO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyh0aGlzLmNhbnZhcy53aWR0aCAvIDIgKyA1LCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyIC0gMzApO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgLy8gICAgICAgICBicmVhaztcbiAgICAgICAgLy8gICAgIGNhc2UgXCJyaWdodFwiOlxuICAgICAgICAvLyAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuY3R4Lm1vdmVUbyh0aGlzLmNhbnZhcy53aWR0aCAvIDIgKyAzMCwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMiArIDUpO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyh0aGlzLmNhbnZhcy53aWR0aCAvIDIgKyA0MCwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMik7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5jdHgubGluZVRvKHRoaXMuY2FudmFzLndpZHRoIC8gMiArIDMwLCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyIC0gNSk7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICAvLyAgICAgICAgIGJyZWFrO1xuICAgICAgICAvLyAgICAgY2FzZSBcImRvd25cIjpcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmN0eC5tb3ZlVG8odGhpcy5jYW52YXMud2lkdGggLyAyIC0gNSwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMiArIDMwKTtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmN0eC5saW5lVG8odGhpcy5jYW52YXMud2lkdGggLyAyLCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyICsgNDApO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyh0aGlzLmNhbnZhcy53aWR0aCAvIDIgKyA1LCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyICsgMzApO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgLy8gICAgICAgICBicmVhaztcbiAgICAgICAgLy8gICAgIGRlZmF1bHQ6XG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIGNvbnN0IGR4ID0gKHRoaXMuY2FudmFzLndpZHRoIC8gMikgKyAoKHRoaXMucmFkaXVzKSAqIE1hdGguY29zKHRoaXMuYW5nbGUgKiBNYXRoLlBJIC8gMTgwKSk7XG4gICAgICAgIGNvbnN0IGR5ID0gKHRoaXMuY2FudmFzLmhlaWdodCAvIDIpICsgKCh0aGlzLnJhZGl1cykgKiBNYXRoLnNpbih0aGlzLmFuZ2xlICogTWF0aC5QSSAvIDE4MCkpO1xuICAgICAgICB0aGlzLmFuZ2xlID0gdGhpcy5hbmdsZSArICh0aGlzLmRpcmVjdGlvbiAqIHRoaXMuc3BlZWQpO1xuXG4gICAgICAgIGlmKHRoaXMuYW5nbGUgPCAwKSB7XG4gICAgICAgICAgICB0aGlzLmFuZ2xlID0gMzYwIC0gdGhpcy5hbmdsZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHRoaXMuYW5nbGUgPiAzNjApe1xuICAgICAgICAgICAgdGhpcy5hbmdsZSAlPSAzNjA7XG4gICAgICAgIH1cbiAgICAgICAgLy8gdGhpcy5jdHguc2F2ZSgpO1xuICAgICAgICB0aGlzLmN0eC50cmFuc2xhdGUoZHgsIGR5KTtcbiAgICAgICAgdGhpcy5jdHgucm90YXRlKHRoaXMuYW5nbGUgKiBNYXRoLlBJIC8gMTgwKTtcbiAgICAgICAgLy8gdGhpcy5jdHgucmVzdG9yZSgpO1xuICAgICAgICB0aGlzLmN0eC50cmFuc2xhdGUoLWR4LCAtZHkpO1xuXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgIHRoaXMuY3R4Lm1vdmVUbyhkeCAtIHRoaXMuc2l6ZSwgZHkgLSB0aGlzLnNpemUpO1xuICAgICAgICB0aGlzLmN0eC5saW5lVG8oZHggKyB0aGlzLnNpemUsIGR5KTtcbiAgICAgICAgdGhpcy5jdHgubGluZVRvKGR4IC0gdGhpcy5zaXplLCBkeSArIHRoaXMuc2l6ZSk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgdGhpcy5jdHgudHJhbnNsYXRlKGR4LCBkeSk7XG4gICAgICAgIHRoaXMuY3R4LnJvdGF0ZSgtdGhpcy5hbmdsZSAqIE1hdGguUEkgLyAxODApO1xuICAgICAgICB0aGlzLmN0eC50cmFuc2xhdGUoLWR4LCAtZHkpO1xuXG4gICAgICAgIFxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImR4XCIgKyBkeCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZHlcIiArIGR5KTtcbiAgICB9XG4gICAgaGFuZGxlUHJlc3MoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHN3aXRjaCAoZS5rZXkpIHtcbiAgICAgICAgICAgIC8vIGNhc2UgJ0Fycm93VXAnOlxuICAgICAgICAgICAgLy8gICAgIHRoaXMucGxheWVyUG9zID0gXCJ1cFwiO1xuICAgICAgICAgICAgLy8gICAgIGJyZWFrO1xuICAgICAgICAgICAgLy8gY2FzZSAnQXJyb3dEb3duJzpcbiAgICAgICAgICAgIC8vICAgICB0aGlzLnBsYXllclBvcyA9IFwiZG93blwiO1xuICAgICAgICAgICAgLy8gICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnQXJyb3dMZWZ0JzpcbiAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IC0xO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnQXJyb3dSaWdodCc6XG4gICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSAxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlS2V5VXAoZSl7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gMDtcbiAgICB9XG5cbiAgICBnZXRQb3NpdGlvbigpe1xuICAgICAgICByZXR1cm4gdGhpcy5hbmdsZTtcbiAgICB9XG59XG5cbiIsImltcG9ydCBHYXAgZnJvbSBcIi4vZ2FwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdhbGwge1xuICAgIGNvbnN0cnVjdG9yKGN0eCwgeCwgeSwgcmFkaXVzLCBjb2xvciwgcm90YXRpb24pIHtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMucmFkaXVzID0gcmFkaXVzO1xuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgICAgIHRoaXMudGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICB0aGlzLmFuZ2xlID0gTWF0aC5yYW5kb20oKSAqICgyICogTWF0aC5QSSk7XG4gICAgICAgIHRoaXMucm90YXRpb24gPSByb3RhdGlvbjtcbiAgICAgICAgdGhpcy5lbmRBbmdsZSA9IDIgKiBNYXRoLlBJIC0gMS4yO1xuICAgICAgICB0aGlzLmdhcCA9IG5ldyBHYXAodGhpcy5jdHgsIHRoaXMueCwgdGhpcy55LCB0aGlzLnJhZGl1cywgdGhpcy5hbmdsZSwgdGhpcy5yb3RhdGlvbiwgdGhpcy50aW1lKTtcbiAgICB9XG5cbiAgICBkcmF3KCl7XG4gICAgICAgIGNvbnN0IG5ld1RpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgbGV0IGRpZmYgPSBuZXdUaW1lIC0gdGhpcy50aW1lO1xuICAgICAgIFxuICAgICAgICB0aGlzLnRpbWUgPSBuZXdUaW1lO1xuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSA4O1xuICAgICAgICB0aGlzLmN0eC5hcmModGhpcy54LCB0aGlzLnksIHRoaXMucmFkaXVzLCB0aGlzLmFuZ2xlLCB0aGlzLmVuZEFuZ2xlICsgdGhpcy5hbmdsZSwgZmFsc2UpO1xuICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgdGhpcy5hbmdsZSArPSBkaWZmICogdGhpcy5yb3RhdGlvbjtcbiAgICAgICAgdGhpcy5hbmdsZSAlPSAyICogTWF0aC5QSTtcblxuICAgICAgICB0aGlzLmdhcC5hbmdsZSArPSBkaWZmICogdGhpcy5yb3RhdGlvbjtcbiAgICAgICAgdGhpcy5nYXAuYW5nbGUgJT0gMiAqIE1hdGguUEk7XG5cbiAgICAgICAgaWYgKHRoaXMuYW5nbGUgPCAwKSB7XG4gICAgICAgICAgICB0aGlzLmFuZ2xlID0gMiAqIE1hdGguUEk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5hbmdsZSA+IDIgKiBNYXRoLlBJKSB7XG4gICAgICAgICAgICB0aGlzLmFuZ2xlICU9IDIgKiBNYXRoLlBJO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZ2FwLmFuZ2xlIDwgMCkge1xuICAgICAgICAgICAgdGhpcy5nYXAuYW5nbGUgPSAyICogTWF0aC5QSTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmdhcC5hbmdsZSA+IDIgKiBNYXRoLlBJKSB7XG4gICAgICAgICAgICB0aGlzLmdhcC5hbmdsZSAlPSAyICogTWF0aC5QSTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZSgpe1xuICAgICAgICBpZih0aGlzLnJhZGl1cyA+IDMwKSB7XG4gICAgICAgICAgICB0aGlzLnJhZGl1cyAtPSAzO1xuICAgICAgICAgICAgdGhpcy5nYXAucmFkaXVzIC09IDM7XG4gICAgICAgIH0gXG4gICAgICAgIHRoaXMuZ2FwLmRyYXcoKTtcbiAgICAgICAgdGhpcy5kcmF3KCk7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=