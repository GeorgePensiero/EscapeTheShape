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

/***/ "./src/javascript/circle.js":
/*!**********************************!*\
  !*** ./src/javascript/circle.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Circle = function () {
    function Circle(x, y, radius, color, ctx) {
        _classCallCheck(this, Circle);

        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.radians = Math.random() * Math.PI * 2;
        this.velocity = 0.05;
        this.distanceFromCenter = this.randomIntFromRange(0, 30);
        this.ctx = ctx;
        this.particles = [];
    }

    _createClass(Circle, [{
        key: "update",
        value: function update() {
            var previousPoint = { x: this.x, y: this.y };
            // Move points over time
            this.radians += this.velocity;
            this.x = this.x + Math.cos(this.radians) * this.distanceFromCenter;
            this.y = this.y + Math.sin(this.radians) * this.distanceFromCenter;
            this.draw(previousPoint);
        }
    }, {
        key: "draw",
        value: function draw(previousPoint) {
            this.ctx.beginPath();
            this.ctx.strokeStyle = this.color;
            this.ctx.lineWidth = this.radius;
            this.ctx.moveTo(previousPoint.x, previousPoint.y);
            this.ctx.lineTo(this.x, this.y);
            this.ctx.stroke();
            this.ctx.closePath();
        }
    }, {
        key: "init",
        value: function init() {
            for (var i = 0; i < 50; i++) {
                var radius = Math.random() * 2 + 1;
                this.particles.push(new Circle(500, 300, radius, this.randomColor(colors), ctx));
            }
        }
    }, {
        key: "animate",
        value: function animate() {
            this.particles.forEach(function (particle) {
                particle.update();
            });
        }
    }, {
        key: "randomIntFromRange",
        value: function randomIntFromRange(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
    }]);

    return Circle;
}();

exports.default = Circle;

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

var _circle = __webpack_require__(/*! ./circle */ "./src/javascript/circle.js");

var _circle2 = _interopRequireDefault(_circle);

var _sound = __webpack_require__(/*! ./sound */ "./src/javascript/sound.js");

var _sound2 = _interopRequireDefault(_sound);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DIM_X = 1000;
var DIM_Y = 600;
var COLOR_SCHEME = ["#CC29336", "EBBAB9", "#388697", "#BFFFE1"];
var colors = ["#00bdff", "#4d39ce", "#088eff"];

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
        this.highScore = 0;
        this.speed = [-.001, .001];
        this.themeSong = new _sound2.default("gametheme.mp3");
        this.gameOverSong = new _sound2.default("gameOver.mp3");
        this.gOLoop = true;
    }

    _createClass(Game, [{
        key: "randomColor",
        value: function randomColor(colors) {
            return colors[Math.floor(Math.random() * colors.length)];
        }
    }, {
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
            var wall = new _wall2.default(this.ctx, this.canvas.width / 2, this.canvas.height / 2, this.canvas.width / 2, "#388697", this.speed[Math.floor(Math.random() * this.speed.length)]);
            this.walls.push(wall);
            this.timer = null;
        }
    }, {
        key: "increaseDifficulty",
        value: function increaseDifficulty() {
            var radius = void 0;
            if (this.walls.length) {
                radius = this.walls[0].radius;
            }
            if (this.score === 10 && radius === 47) {
                this.increaseSpeed(this.walls);
            } else if (this.score === 20 && radius === 47) {
                this.increaseSpeed(this.walls);
            } else if (this.score === 30 && radius === 47) {
                this.increaseSpeed(this.walls);
            } else if (this.score === 40 && radius === 47) {
                this.increaseSpeed(this.walls);
            } else if (this.score === 50 && radius === 47) {
                this.increaseSpeed(this.walls);
            } else if (this.score === 60 && radius === 47) {
                this.increaseSpeed(this.walls);
            } else if (this.score === 70 && radius === 47) {
                this.increaseSpeed(this.walls);
            } else if (this.score === 80 && radius === 47) {
                this.speed = this.speed.map(function (speed) {
                    return speed * 10;
                });
            }
            if (this.score > 30) {
                this.walls.forEach(function (wall) {
                    wall.reverse();
                });
            }
        }
    }, {
        key: "increaseSpeed",
        value: function increaseSpeed(walls) {
            this.speed = this.speed.map(function (speed) {
                return speed * 1.2;
            });
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
                var isWallOnPlayer = this.walls[0].radius <= this.player.radius + this.player.size + 6 && this.walls[0].radius >= this.player.radius;
                if (isWallOnPlayer) {
                    if (!this.checkCollision(this.player, this.walls[0].gap)) {
                        this.dead = true;
                    };
                    // console.log(this.walls[0].angle);
                }
            }
            this.showScore();
            if (this.walls.length) {
                console.log(this.walls[0].radius);
            };
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
            this.increaseDifficulty();
            this.draw();
            this.updateScore();
        }
    }, {
        key: "updateScore",
        value: function updateScore() {
            if (this.walls.length) {
                if (this.walls[0].radius === 32) {
                    this.score += 1;
                    this.changeBG();
                }
            }
        }
    }, {
        key: "gameOver",
        value: function gameOver() {
            var _this3 = this;

            if (this.score > this.highScore) {
                this.highScore = this.score;
            }
            this.themeSong.stop();
            if (this.gOLoop) {
                this.gameOverSong.play();
                this.gOLoop = false;
            }
            var canvas = document.getElementById("myCanvas");
            canvas.style.backgroundColor = "#48639c";
            this.walls = [];
            this.speed = [-.001, .001];
            var y = this.canvas.height / 2;
            var color = "#FF0000";
            var title = "Game Over";
            var enter = "Try again";
            var score = "Score: " + this.score;
            var highScore = "High Score: " + this.highScore;
            // let gameOver = document.createElement("div");
            // gameOver.appendChild(document.createTextNode("Game Over"));
            // document.body.appendChild(gameOver);
            this.ctx.clearRect(0, 0, DIM_X, DIM_Y);
            this.ctx.fillStyle = color;
            this.ctx.font = "48px monospace";
            this.centerText(title, y + 60);

            this.ctx.font = "24px monospace";
            this.centerText(highScore, y + 20);
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
            var playerLeft = this.canvas.height / 2 + this.radius * Math.sin(this.angle * Math.PI / 180);
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
            this.gOLoop = true;
            if (e.which === 13 || e.keyCode === 13) {
                this.themeSong.play();
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
            this.ctx.fillStyle = "#FFD700";
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

/***/ "./src/javascript/sound.js":
/*!*********************************!*\
  !*** ./src/javascript/sound.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Sound = function () {
    function Sound(src) {
        _classCallCheck(this, Sound);

        this.sound = document.createElement("audio");
        this.sound.src = src;
        this.sound.setAttribute("preload", "auto");
        this.sound.setAttribute("controls", "none");
        this.sound.style.display = "none";
        document.body.appendChild(this.sound);
    }

    _createClass(Sound, [{
        key: "play",
        value: function play() {
            this.sound.play();
        }
    }, {
        key: "stop",
        value: function stop() {
            this.sound.pause();
            this.sound.currentTime = 0;
        }
    }]);

    return Sound;
}();

exports.default = Sound;

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
            this.ctx.lineWidth = 12;
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
    }, {
        key: "reverse",
        value: function reverse() {
            if (this.radius === 290) {
                this.rotation *= -1.2;
            }
        }
    }]);

    return Wall;
}();

exports.default = Wall;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qYXZhc2NyaXB0L2NpcmNsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvamF2YXNjcmlwdC9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9qYXZhc2NyaXB0L2dhbWVfdmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvamF2YXNjcmlwdC9nYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2phdmFzY3JpcHQvcGxheWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qYXZhc2NyaXB0L3NvdW5kLmpzIiwid2VicGFjazovLy8uL3NyYy9qYXZhc2NyaXB0L3dhbGwuanMiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJ3aWR0aCIsImhlaWdodCIsImN0eCIsImdldENvbnRleHQiLCJnYW1lVmlldyIsIkdhbWVWaWV3IiwiZ2FtZSIsInBsYXllciIsImhhbmRsZVByZXNzIiwiZSIsImdhbWVTdGFydCIsImhhbmRsZUtleVVwIiwiYW5pbWF0ZSIsIkNpcmNsZSIsIngiLCJ5IiwicmFkaXVzIiwiY29sb3IiLCJyYWRpYW5zIiwiTWF0aCIsInJhbmRvbSIsIlBJIiwidmVsb2NpdHkiLCJkaXN0YW5jZUZyb21DZW50ZXIiLCJyYW5kb21JbnRGcm9tUmFuZ2UiLCJwYXJ0aWNsZXMiLCJwcmV2aW91c1BvaW50IiwiY29zIiwic2luIiwiZHJhdyIsImJlZ2luUGF0aCIsInN0cm9rZVN0eWxlIiwibGluZVdpZHRoIiwibW92ZVRvIiwibGluZVRvIiwic3Ryb2tlIiwiY2xvc2VQYXRoIiwiaSIsInB1c2giLCJyYW5kb21Db2xvciIsImNvbG9ycyIsImZvckVhY2giLCJwYXJ0aWNsZSIsInVwZGF0ZSIsIm1pbiIsIm1heCIsImZsb29yIiwiRElNX1giLCJESU1fWSIsIkNPTE9SX1NDSEVNRSIsIkdhbWUiLCJQbGF5ZXIiLCJ3YWxscyIsInRpbWVyIiwic2NvcmUiLCJpbkdhbWUiLCJkZWFkIiwiYmciLCJoaWdoU2NvcmUiLCJzcGVlZCIsInRoZW1lU29uZyIsIlNvdW5kIiwiZ2FtZU92ZXJTb25nIiwiZ09Mb29wIiwibGVuZ3RoIiwidG9TdHJpbmciLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwic3RhcnRTY3JlZW4iLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicnVuIiwiZ2FtZU92ZXIiLCJ3YWxsIiwiV2FsbCIsImluY3JlYXNlU3BlZWQiLCJtYXAiLCJyZXZlcnNlIiwiZm9udCIsImZpbGxUZXh0IiwidGV4dCIsIm1lYXN1cmVtZW50IiwibWVhc3VyZVRleHQiLCJjbGVhclJlY3QiLCJjZW50ZXJYIiwiY2VudGVyWSIsImFyYyIsImRvV2FsbHNFeGlzdCIsImlzV2FsbE9uUGxheWVyIiwic2l6ZSIsImNoZWNrQ29sbGlzaW9uIiwiZ2FwIiwic2hvd1Njb3JlIiwiY29uc29sZSIsImxvZyIsIndhbGxTcGFjZSIsInNldFRpbWVvdXQiLCJhZGRXYWxsIiwic2hpZnQiLCJpbmNyZWFzZURpZmZpY3VsdHkiLCJ1cGRhdGVTY29yZSIsImNoYW5nZUJHIiwic3RvcCIsInBsYXkiLCJ0aXRsZSIsImVudGVyIiwiZmlsbFN0eWxlIiwiY2VudGVyVGV4dCIsImNvbGxpc2lvbiIsImdhcFBvcyIsImdldFBvc2l0aW9uIiwicGxheWVyQW5nbGUiLCJwbGF5ZXJMZWZ0IiwiYW5nbGUiLCJlbmRBbmdsZSIsInBhcnRpYWxDaXJjbGVBbmdsZSIsInByZXZlbnREZWZhdWx0Iiwid2hpY2giLCJrZXlDb2RlIiwiaW5pdCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImJpbmQiLCJHYXAiLCJyb3RhdGlvbiIsInRpbWUiLCJnbG9iYWxBbHBoYSIsInBvc2l0aW9uIiwic3RhcnQiLCJlbmQiLCJjMSIsImMyIiwiZGlyZWN0aW9uIiwicGxheWVyUG9zIiwiZHgiLCJkeSIsInRyYW5zbGF0ZSIsInJvdGF0ZSIsImZpbGwiLCJrZXkiLCJzcmMiLCJzb3VuZCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJkaXNwbGF5IiwiYm9keSIsImFwcGVuZENoaWxkIiwicGF1c2UiLCJjdXJyZW50VGltZSIsIkRhdGUiLCJnZXRUaW1lIiwibmV3VGltZSIsImRpZmYiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBQSxTQUFTQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBWTtBQUN0RCxRQUFNQyxTQUFTRixTQUFTRyxvQkFBVCxDQUE4QixRQUE5QixFQUF3QyxDQUF4QyxDQUFmO0FBQ0FELFdBQU9FLEtBQVAsR0FBZSxJQUFmO0FBQ0FGLFdBQU9HLE1BQVAsR0FBZ0IsR0FBaEI7O0FBRUEsUUFBTUMsTUFBTUosT0FBT0ssVUFBUCxDQUFrQixJ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a0IsSUFBSTlGLEtBQUtFLEVBQTNCOztBQUVBLGdCQUFJLEtBQUs0RixLQUFMLEdBQWEsQ0FBakIsRUFBb0I7QUFDaEIscUJBQUtBLEtBQUwsR0FBYSxJQUFJOUYsS0FBS0UsRUFBdEI7QUFDSDs7QUFFRCxnQkFBSSxLQUFLNEYsS0FBTCxHQUFhLElBQUk5RixLQUFLRSxFQUExQixFQUE4QjtBQUMxQixxQkFBSzRGLEtBQUwsSUFBYyxJQUFJOUYsS0FBS0UsRUFBdkI7QUFDSDs7QUFFRCxnQkFBSSxLQUFLc0UsR0FBTCxDQUFTc0IsS0FBVCxHQUFpQixDQUFyQixFQUF3QjtBQUNwQixxQkFBS3RCLEdBQUwsQ0FBU3NCLEtBQVQsR0FBaUIsSUFBSTlGLEtBQUtFLEVBQTFCO0FBQ0g7O0FBRUQsZ0JBQUksS0FBS3NFLEdBQUwsQ0FBU3NCLEtBQVQsR0FBaUIsSUFBSTlGLEtBQUtFLEVBQTlCLEVBQWtDO0FBQzlCLHFCQUFLc0UsR0FBTCxDQUFTc0IsS0FBVCxJQUFrQixJQUFJOUYsS0FBS0UsRUFBM0I7QUFDSDtBQUNKOzs7aUNBRU87O0FBRUosZ0JBQUcsS0FBS0wsTUFBTCxHQUFjLEVBQWpCLEVBQXFCO0FBQ2pCLHFCQUFLQSxNQUFMLElBQWUsQ0FBZjtBQUNBLHFCQUFLMkUsR0FBTCxDQUFTM0UsTUFBVCxJQUFtQixDQUFuQjtBQUNIO0FBQ0QsaUJBQUsyRSxHQUFMLENBQVM5RCxJQUFUO0FBQ0EsaUJBQUtBLElBQUw7QUFFSDs7O2tDQUVRO0FBQ0wsZ0JBQUcsS0FBS2IsTUFBTCxLQUFnQixHQUFuQixFQUF1QjtBQUNuQixxQkFBSzJHLFFBQUwsSUFBaUIsQ0FBQyxHQUFsQjtBQUNIO0FBQ0o7Ozs7OztrQkEvRGdCakQsSSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBQbGF5ZXIgZnJvbSAnLi9qYXZhc2NyaXB0L3BsYXllcic7XG5pbXBvcnQgR2FtZSBmcm9tICcuL2phdmFzY3JpcHQvZ2FtZSc7XG5pbXBvcnQgR2FtZVZpZXcgZnJvbSAnLi9qYXZhc2NyaXB0L2dhbWVfdmlldyc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImNhbnZhc1wiKVswXTtcbiAgICBjYW52YXMud2lkdGggPSAxMDAwO1xuICAgIGNhbnZhcy5oZWlnaHQgPSA2MDA7XG5cbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG5cbiAgICBjb25zdCBnYW1lVmlldyA9IG5ldyBHYW1lVmlldyhjYW52YXMsIGN0eCk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGUgPT4gZ2FtZVZpZXcuZ2FtZS5wbGF5ZXIuaGFuZGxlUHJlc3MoZSkpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBlID0+IGdhbWVWaWV3LmdhbWUuZ2FtZVN0YXJ0KGUpKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGUgPT4gZ2FtZVZpZXcuZ2FtZS5wbGF5ZXIuaGFuZGxlS2V5VXAoZSkpO1xuICAgIGdhbWVWaWV3LmFuaW1hdGUoKTtcbn0pO1xuXG5cblxuIiwiXG5cblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaXJjbGUge1xuICAgIGNvbnN0cnVjdG9yKHgsIHksIHJhZGl1cywgY29sb3IsIGN0eCl7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMucmFkaXVzID0gcmFkaXVzO1xuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgICAgIHRoaXMucmFkaWFucyA9IE1hdGgucmFuZG9tKCkgKiBNYXRoLlBJICogMjtcbiAgICAgICAgdGhpcy52ZWxvY2l0eSA9IDAuMDU7XG4gICAgICAgIHRoaXMuZGlzdGFuY2VGcm9tQ2VudGVyID0gdGhpcy5yYW5kb21JbnRGcm9tUmFuZ2UoMCwgMzApO1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5wYXJ0aWNsZXMgPSBbXTtcbiAgICB9XG5cbiAgIFxuXG4gICAgdXBkYXRlKCl7XG4gICAgICAgIGNvbnN0IHByZXZpb3VzUG9pbnQgPSB7eDogdGhpcy54LCB5OiB0aGlzLnl9O1xuICAgICAgICAvLyBNb3ZlIHBvaW50cyBvdmVyIHRpbWVcbiAgICAgICAgdGhpcy5yYWRpYW5zICs9IHRoaXMudmVsb2NpdHk7XG4gICAgICAgIHRoaXMueCA9IHRoaXMueCArIE1hdGguY29zKHRoaXMucmFkaWFucykgKiB0aGlzLmRpc3RhbmNlRnJvbUNlbnRlcjtcbiAgICAgICAgdGhpcy55ID0gdGhpcy55ICsgTWF0aC5zaW4odGhpcy5yYWRpYW5zKSAqIHRoaXMuZGlzdGFuY2VGcm9tQ2VudGVyO1xuICAgICAgICB0aGlzLmRyYXcocHJldmlvdXNQb2ludCk7XG4gICAgfVxuXG4gICAgZHJhdyhwcmV2aW91c1BvaW50KXtcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gdGhpcy5yYWRpdXM7XG4gICAgICAgIHRoaXMuY3R4Lm1vdmVUbyhwcmV2aW91c1BvaW50LngsIHByZXZpb3VzUG9pbnQueSk7XG4gICAgICAgIHRoaXMuY3R4LmxpbmVUbyh0aGlzLngsIHRoaXMueSk7XG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcbiAgICB9XG5cbiAgICBpbml0KCl7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCA1MDsgaSsrKXtcbiAgICAgICAgICAgIGNvbnN0IHJhZGl1cyA9IChNYXRoLnJhbmRvbSgpICogMikgKyAxO1xuICAgICAgICAgICAgdGhpcy5wYXJ0aWNsZXMucHVzaChuZXcgQ2lyY2xlKDUwMCwgMzAwLCByYWRpdXMsIHRoaXMucmFuZG9tQ29sb3IoY29sb3JzKSwgY3R4KSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFuaW1hdGUoKXtcbiAgICAgICAgdGhpcy5wYXJ0aWNsZXMuZm9yRWFjaChwYXJ0aWNsZSA9PiB7XG4gICAgICAgICAgICBwYXJ0aWNsZS51cGRhdGUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmFuZG9tSW50RnJvbVJhbmdlKG1pbiwgbWF4KXtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSArIG1pbik7XG4gICAgfVxufSIsImltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vcGxheWVyXCI7XG5pbXBvcnQgV2FsbCBmcm9tIFwiLi93YWxsXCI7XG5pbXBvcnQgQ2lyY2xlIGZyb20gJy4vY2lyY2xlJztcbmltcG9ydCBTb3VuZCBmcm9tICcuL3NvdW5kJztcbmNvbnN0IERJTV9YID0gMTAwMDtcbmNvbnN0IERJTV9ZID0gNjAwO1xuY29uc3QgQ09MT1JfU0NIRU1FID0gW1wiI0NDMjkzMzZcIiwgXCJFQkJBQjlcIiwgXCIjMzg4Njk3XCIsIFwiI0JGRkZFMVwiXVxuY29uc3QgY29sb3JzID0gW1xuICAgIFwiIzAwYmRmZlwiLFxuICAgIFwiIzRkMzljZVwiLFxuICAgIFwiIzA4OGVmZlwiLFxuXTtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY3R4KSB7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyKHRoaXMuY2FudmFzLCB0aGlzLmN0eClcbiAgICAgICAgdGhpcy53YWxscyA9IFtdO1xuICAgICAgICB0aGlzLnRpbWVyID0gbnVsbDtcbiAgICAgICAgdGhpcy5zY29yZSA9IDA7XG4gICAgICAgIHRoaXMuaW5HYW1lID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZGVhZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmJnID0gXCIjNDg2MzljXCI7XG4gICAgICAgIHRoaXMuaGlnaFNjb3JlID0gMDtcbiAgICAgICAgdGhpcy5zcGVlZCA9IFstLjAwMSwgLjAwMV07XG4gICAgICAgIHRoaXMudGhlbWVTb25nID0gbmV3IFNvdW5kKFwiZ2FtZXRoZW1lLm1wM1wiKTtcbiAgICAgICAgdGhpcy5nYW1lT3ZlclNvbmcgPSBuZXcgU291bmQoXCJnYW1lT3Zlci5tcDNcIik7XG4gICAgICAgIHRoaXMuZ09Mb29wID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByYW5kb21Db2xvcihjb2xvcnMpIHtcbiAgICAgICAgcmV0dXJuIGNvbG9yc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjb2xvcnMubGVuZ3RoKV07XG4gICAgfVxuXG4gICAgY2hhbmdlQkcoKSB7XG4gICAgICAgIGNvbnN0IHJhbmRvbUNvbG9yID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTY3NzcyMTUpLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUNhbnZhc1wiKTtcbiAgICAgICAgdGhpcy5iZyA9IGNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNcIiArIHJhbmRvbUNvbG9yO1xuICAgIH1cblxuICAgIGluaXQoKXtcbiAgICAgICAgaWYoIXRoaXMuaW5HYW1lKXtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRTY3JlZW4oKTtcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuaW5HYW1lICYmICF0aGlzLmRlYWQpe1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGUgPT4gdGhpcy5nYW1lU3RhcnQoZSkpO1xuICAgICAgICAgICAgdGhpcy5ydW4oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXIoKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgYWRkV2FsbCgpe1xuICAgICAgICBjb25zdCB3YWxsID0gbmV3IFdhbGwodGhpcy5jdHgsIHRoaXMuY2FudmFzLndpZHRoIC8gMiwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMiwgdGhpcy5jYW52YXMud2lkdGggLyAyLCBcIiMzODg2OTdcIiwgdGhpcy5zcGVlZFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLnNwZWVkLmxlbmd0aCldKVxuICAgICAgICB0aGlzLndhbGxzLnB1c2god2FsbCk7XG4gICAgICAgIHRoaXMudGltZXIgPSBudWxsO1xuICAgIH1cblxuICAgIGluY3JlYXNlRGlmZmljdWx0eSgpe1xuICAgICAgICBsZXQgcmFkaXVzO1xuICAgICAgICBpZih0aGlzLndhbGxzLmxlbmd0aCkgeyByYWRpdXMgPSB0aGlzLndhbGxzWzBdLnJhZGl1c31cbiAgICAgICAgaWYodGhpcy5zY29yZSA9PT0gMTAgJiYgcmFkaXVzID09PSA0Nyl7XG4gICAgICAgICAgICB0aGlzLmluY3JlYXNlU3BlZWQodGhpcy53YWxscyk7XG4gICAgICAgICAgICBcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuc2NvcmUgPT09IDIwICYmIHJhZGl1cyA9PT0gNDcpe1xuICAgICAgICAgICAgdGhpcy5pbmNyZWFzZVNwZWVkKHRoaXMud2FsbHMpO1xuICAgICAgICB9IGVsc2UgaWYodGhpcy5zY29yZSA9PT0gMzAgJiYgcmFkaXVzID09PSA0Nyl7XG4gICAgICAgICAgICB0aGlzLmluY3JlYXNlU3BlZWQodGhpcy53YWxscyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZih0aGlzLnNjb3JlID09PSA0MCAmJiByYWRpdXMgPT09IDQ3KXtcbiAgICAgICAgICAgIHRoaXMuaW5jcmVhc2VTcGVlZCh0aGlzLndhbGxzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLnNjb3JlID09PSA1MCAmJiByYWRpdXMgPT09IDQ3KSB7XG4gICAgICAgICAgICB0aGlzLmluY3JlYXNlU3BlZWQodGhpcy53YWxscyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5zY29yZSA9PT0gNjAgJiYgcmFkaXVzID09PSA0Nykge1xuICAgICAgICAgICAgdGhpcy5pbmNyZWFzZVNwZWVkKHRoaXMud2FsbHMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuc2NvcmUgPT09IDcwICYmIHJhZGl1cyA9PT0gNDcpIHtcbiAgICAgICAgICAgIHRoaXMuaW5jcmVhc2VTcGVlZCh0aGlzLndhbGxzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLnNjb3JlID09PSA4MCAmJiByYWRpdXMgPT09IDQ3KXtcbiAgICAgICAgICAgIHRoaXMuc3BlZWQgPSB0aGlzLnNwZWVkLm1hcChzcGVlZCA9PiBzcGVlZCAqIDEwKTtcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLnNjb3JlID4gMzApe1xuICAgICAgICAgICAgdGhpcy53YWxscy5mb3JFYWNoKHdhbGwgPT4ge1xuICAgICAgICAgICAgICAgIHdhbGwucmV2ZXJzZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgfVxuICAgIFxuXG4gICAgaW5jcmVhc2VTcGVlZCh3YWxscyl7XG4gICAgICAgIHRoaXMuc3BlZWQgPSB0aGlzLnNwZWVkLm1hcChzcGVlZCA9PiBzcGVlZCAqIDEuMik7XG4gICAgfVxuXG4gICAgYWxsV2FsbHMoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMud2FsbHM7XG4gICAgfVxuXG4gICAgc2hvd1Njb3JlKCl7XG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5mb250ID0gXCIyMHB4IEdlb3JnaWFcIjtcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJTY29yZTogXCIgKyB0aGlzLnNjb3JlLCB0aGlzLmNhbnZhcy53aWR0aCAtIDEwMCwgMzApO1xuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcbiAgICB9XG5cbiAgICBjZW50ZXJUZXh0KHRleHQsIHkpe1xuICAgICAgICBjb25zdCBtZWFzdXJlbWVudCA9IHRoaXMuY3R4Lm1lYXN1cmVUZXh0KHRleHQpO1xuICAgICAgICBjb25zdCB4ID0gKHRoaXMuY2FudmFzLndpZHRoIC0gbWVhc3VyZW1lbnQud2lkdGgpIC8gMjtcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQodGV4dCwgeCwgeSk7XG4gICAgfVxuICAgIFxuICAgIGRyYXcoKSB7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCBESU1fWCwgRElNX1kpO1xuICAgICAgICBjb25zdCBjZW50ZXJYID0gRElNX1ggLyAyO1xuICAgICAgICBjb25zdCBjZW50ZXJZID0gRElNX1kgLyAyO1xuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gMTtcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgIHRoaXMuY3R4LmFyYyhjZW50ZXJYLCBjZW50ZXJZLCAzMCwgMCwgMiAqIE1hdGguUEksIGZhbHNlKTtcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICB0aGlzLndhbGxzLmZvckVhY2god2FsbCA9PiB7XG4gICAgICAgICAgICB3YWxsLnVwZGF0ZSgpO1xuICAgICAgICAgICAgLy8gd2FsbC5nYXAudXBkYXRlKCk7XG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMucGxheWVyLmRyYXcoNSk7XG4gICAgXG4gICAgICAgIGNvbnN0IGRvV2FsbHNFeGlzdCA9IHRoaXMud2FsbHMubGVuZ3RoID4gMDtcbiAgICAgICAgaWYoZG9XYWxsc0V4aXN0KXtcblxuICAgICAgICAgICAgLy9UT0RPOiB3ZSBjaGVjayBmb3IgY29sbGlzaW9uIHdoZW4gdGhlIHdhbGwgaXMgbGl0ZXJhbGx5IG9udG9wIG9mIHRoZSBwbGF5ZXJcbiAgICAgICAgICAgIC8vIG1heWJlIGZpbmQgYSBzd2VldCBzcG90IHdpdGggdGhpcy5wbGF5ZXIucmFkaXVzICsgMSBvciBzb21ldGhpbmcgY2F1c2UgdGhlIHRyaWFuZ2xlIGhhc1xuICAgICAgICAgICAgLy8gYSBzaXplIHRvIGl0LlxuICAgICAgICAgICAgY29uc3QgaXNXYWxsT25QbGF5ZXIgPSB0aGlzLndhbGxzWzBdLnJhZGl1cyA8PSB0aGlzLnBsYXllci5yYWRpdXMgKyB0aGlzLnBsYXllci5zaXplICsgNiAmJiB0aGlzLndhbGxzWzBdLnJhZGl1cyA+PSB0aGlzLnBsYXllci5yYWRpdXM7XG4gICAgICAgICAgICBpZiAoaXNXYWxsT25QbGF5ZXIpe1xuICAgICAgICAgICAgICAgIGlmKCF0aGlzLmNoZWNrQ29sbGlzaW9uKHRoaXMucGxheWVyLCB0aGlzLndhbGxzWzBdLmdhcCkpe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlYWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy53YWxsc1swXS5hbmdsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zaG93U2NvcmUoKTtcbiAgICAgICAgaWYodGhpcy53YWxscy5sZW5ndGgpIHtjb25zb2xlLmxvZyh0aGlzLndhbGxzWzBdLnJhZGl1cykgfTtcbiAgICAgICAgLy8gdGhpcy5jdHguc3Ryb2tlKCk7XG4gICAgICAgIC8vIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuICAgIH1cbiAgICBcbiAgICBydW4oKXtcbiAgICAgICAgY29uc3Qgd2FsbFNwYWNlID0gMTAwMDtcbiAgICAgICAgaWYodGhpcy53YWxscy5sZW5ndGggPCA4ICYmIHRoaXMudGltZXIgPT09IG51bGwpe1xuICAgICAgICAgICAgdGhpcy50aW1lciA9IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5hZGRXYWxsKCksIHdhbGxTcGFjZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMud2FsbHMubGVuZ3RoID4gMCAmJiB0aGlzLndhbGxzWzBdLnJhZGl1cyA8IDMwKSB7IHRoaXMud2FsbHMuc2hpZnQoKX1cbiAgICAgICAgdGhpcy5pbmNyZWFzZURpZmZpY3VsdHkoKTtcbiAgICAgICAgdGhpcy5kcmF3KCk7XG4gICAgICAgIHRoaXMudXBkYXRlU2NvcmUoKTtcbiAgICAgICAgfVxuXG4gICAgdXBkYXRlU2NvcmUoKXtcbiAgICAgICAgaWYodGhpcy53YWxscy5sZW5ndGgpe1xuICAgICAgICAgICAgaWYgKHRoaXMud2FsbHNbMF0ucmFkaXVzID09PSAzMikgeyBcbiAgICAgICAgICAgICAgICB0aGlzLnNjb3JlICs9IDE7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VCRygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cblxuICAgIGdhbWVPdmVyKCl7XG4gICAgICAgIGlmKHRoaXMuc2NvcmUgPiB0aGlzLmhpZ2hTY29yZSkge1xuICAgICAgICAgICAgdGhpcy5oaWdoU2NvcmUgPSB0aGlzLnNjb3JlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudGhlbWVTb25nLnN0b3AoKTtcbiAgICAgICAgaWYodGhpcy5nT0xvb3Ape1xuICAgICAgICAgICAgdGhpcy5nYW1lT3ZlclNvbmcucGxheSgpO1xuICAgICAgICAgICAgdGhpcy5nT0xvb3AgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15Q2FudmFzXCIpO1xuICAgICAgICBjYW52YXMuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gKFwiIzQ4NjM5Y1wiKTtcbiAgICAgICAgdGhpcy53YWxscyA9IFtdO1xuICAgICAgICB0aGlzLnNwZWVkID0gWy0uMDAxLCAuMDAxXTtcbiAgICAgICAgbGV0IHkgPSB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyO1xuICAgICAgICBsZXQgY29sb3IgPSBcIiNGRjAwMDBcIjtcbiAgICAgICAgbGV0IHRpdGxlID0gXCJHYW1lIE92ZXJcIjtcbiAgICAgICAgbGV0IGVudGVyID0gXCJUcnkgYWdhaW5cIjtcbiAgICAgICAgbGV0IHNjb3JlID0gYFNjb3JlOiAke3RoaXMuc2NvcmV9YDtcbiAgICAgICAgbGV0IGhpZ2hTY29yZSA9IGBIaWdoIFNjb3JlOiAke3RoaXMuaGlnaFNjb3JlfWA7XG4gICAgICAgIC8vIGxldCBnYW1lT3ZlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIC8vIGdhbWVPdmVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiR2FtZSBPdmVyXCIpKTtcbiAgICAgICAgLy8gZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChnYW1lT3Zlcik7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCBESU1fWCwgRElNX1kpO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiNDhweCBtb25vc3BhY2VcIjtcbiAgICAgICAgdGhpcy5jZW50ZXJUZXh0KHRpdGxlLCB5ICsgNjApO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiMjRweCBtb25vc3BhY2VcIjtcbiAgICAgICAgdGhpcy5jZW50ZXJUZXh0KGhpZ2hTY29yZSwgeSArIDIwKTtcbiAgICAgICAgdGhpcy5jZW50ZXJUZXh0KHNjb3JlLCB5KTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gY29sb3I7XG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcIjI0cHggbW9ub3NwYWNlXCI7XG4gICAgICAgIHRoaXMuY2VudGVyVGV4dChlbnRlciwgeSArIDEwMCk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBlID0+IHRoaXMuZ2FtZVN0YXJ0KGUpKTtcbiAgICB9XG5cbiAgICBjaGVja0NvbGxpc2lvbihwbGF5ZXIsIGdhcCl7XG4gICAgICAgIGxldCBjb2xsaXNpb24gPSBmYWxzZTtcbiAgICAgICAgbGV0IGdhcFBvcyA9IGdhcC5nZXRQb3NpdGlvbigpO1xuICAgICAgICBsZXQgcGxheWVyQW5nbGUgPSBwbGF5ZXIuZ2V0UG9zaXRpb24oKSAqIE1hdGguUEkgLyAxODA7XG4gICAgICAgIGxldCBwbGF5ZXJMZWZ0ID0gKHRoaXMuY2FudmFzLmhlaWdodCAvIDIpICsgKCh0aGlzLnJhZGl1cykgKiBNYXRoLnNpbih0aGlzLmFuZ2xlICogTWF0aC5QSSAvIDE4MCkpO1xuICAgICAgICBsZXQgZW5kQW5nbGUgPSBnYXAuYW5nbGUgLSAoMiAqIE1hdGguUEkgLSBnYXAucGFydGlhbENpcmNsZUFuZ2xlKTtcbiAgICAgICAgaWYgKGVuZEFuZ2xlIDwgMCkge1xuICAgICAgICAgICAgZW5kQW5nbGUgKz0gMipNYXRoLlBJO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYocGxheWVyUG9zID4gZ2FwUG9zW3N0YXJ0XSAmJiBwbGF5ZXJQb3MgPCBnYXBQb3NbZW5kXSkgY29sbGlzaW9uID0gdHJ1ZTtcblxuICAgICAgICAvLyB0aGUgY2FzZSB3aGVuIHRoZSBnYXAgc3RyYWRkbGVzIHRoZSBob3Jpem9udGFsXG5cbiAgICAgICAgaWYgKGdhcC5hbmdsZSA8IGVuZEFuZ2xlKXtcbiAgICAgICAgICAgIGlmICgocGxheWVyQW5nbGUgID4gZW5kQW5nbGUgXG4gICAgICAgICAgICAgICAgJiYgcGxheWVyQW5nbGUgPCAyICogTWF0aC5QSSkgXG4gICAgICAgICAgICAgICAgfHwgcGxheWVyQW5nbGUgPCBnYXAuYW5nbGUgJiYgcGxheWVyQW5nbGUgPiAwKXtcbiAgICAgICAgICAgICAgICBjb2xsaXNpb24gPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBsYXllckFuZ2xlIDwgZ2FwLmFuZ2xlICYmXG4gICAgICAgICAgICBwbGF5ZXJBbmdsZSA+IGVuZEFuZ2xlKSB7XG4gICAgICAgICAgICAgICAgY29sbGlzaW9uID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICBpZihjb2xsaXNpb24gPT09IHRydWUpe1xuICAgICAgICAgICAgLy8gdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAnYmx1ZSdcbiAgICAgICAgICAgIC8vIHRoaXMuY3R4LnN0cm9rZVJlY3QoRElNX1ggLyAyIC0gMjUsIERJTV9ZIC8gMiAtIDI1LCA1MCwgNTApXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbGxpc2lvbjtcbiAgICB9XG5cbiAgICBzdGFydFNjcmVlbigpe1xuICAgICAgICBsZXQgeSA9IHRoaXMuY2FudmFzLmhlaWdodCAvIDI7XG4gICAgICAgIGxldCBjb2xvciA9IFwiI0NDMjkzMzZcIjtcbiAgICAgICAgbGV0IHRpdGxlID0gXCJFc2NhcGUgdGhlIFNoYXBlXCI7XG4gICAgICAgIGxldCBlbnRlciA9IFwiUHJlc3MgRW50ZXJcIjtcbiAgICAgICAgLy8gbGV0IGVudGVyTGVuZ3RoID0gdGhpcy5jdHgubWVhc3VyZVRleHQoZW50ZXIpO1xuICAgICAgICAvLyBsZXQgdGl0bGVMZW5ndGggPSB0aGlzLmN0eC5tZWFzdXJlVGV4dCh0aXRsZSk7XG4gICAgICAgIC8vIGxldCBlbnRlclggPSAodGhpcy5jYW52YXMud2lkdGggLSBlbnRlckxlbmd0aC53aWR0aCkgLyAyO1xuICAgICAgICAvLyBsZXQgeCA9ICh0aGlzLmNhbnZhcy53aWR0aCAtIHRpdGxlTGVuZ3RoLndpZHRoKSAvIDI7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCBESU1fWCwgRElNX1kpO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcIjQ4cHggbW9ub3NwYWNlXCI7XG4gICAgICAgIHRoaXMuY2VudGVyVGV4dCh0aXRsZSwgeSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiMjRweCBtb25vc3BhY2VcIjtcbiAgICAgICAgdGhpcy5jZW50ZXJUZXh0KGVudGVyLCB5ICsgMzApO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZSA9PiB0aGlzLmdhbWVTdGFydChlKSk7XG4gICAgfVxuXG4gICAgZ2FtZVN0YXJ0KGUpe1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuZ09Mb29wID0gdHJ1ZTtcbiAgICAgICAgaWYoZS53aGljaCA9PT0gMTMgfHwgZS5rZXlDb2RlID09PSAxMykge1xuICAgICAgICAgICAgdGhpcy50aGVtZVNvbmcucGxheSgpO1xuICAgICAgICAgICAgdGhpcy5pbkdhbWUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5iZyA9IFwiIzQ4NjM5Y1wiXG4gICAgICAgICAgICB0aGlzLmRlYWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuc2NvcmUgPSAwO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCBHYW1lIGZyb20gJy4vZ2FtZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVWaWV3IHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGN0eCkge1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuZ2FtZSA9IG5ldyBHYW1lKHRoaXMuY2FudmFzLCB0aGlzLmN0eCk7XG4gICAgfVxuXG4gICAgXG5cblxuICAgIGFuaW1hdGUoKSB7XG4gICAgICAgIHRoaXMuZ2FtZS5pbml0KCk7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUuYmluZCh0aGlzKSk7XG4gICAgfVxufSIsIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYXAge1xuICAgIGNvbnN0cnVjdG9yKGN0eCwgeCAsIHksIHJhZGl1cywgYW5nbGUsIHJvdGF0aW9uLCB0aW1lKXtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMucmFkaXVzID0gcmFkaXVzOyBcbiAgICAgICAgdGhpcy5yb3RhdGlvbiA9IHJvdGF0aW9uO1xuICAgICAgICB0aGlzLmFuZ2xlID0gYW5nbGU7XG4gICAgICAgIHRoaXMucGFydGlhbENpcmNsZUFuZ2xlID0gMiAqIE1hdGguUEkgLSAxLjI7XG4gICAgfVxuXG4gICAgZHJhdygpe1xuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHguZ2xvYmFsQWxwaGEgPSAwLjA7XG4gICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDg7XG4gICAgICAgIHRoaXMuY3R4LmFyYyh0aGlzLngsIHRoaXMueSwgdGhpcy5yYWRpdXMsIHRoaXMuYW5nbGUsIHRoaXMucGFydGlhbENpcmNsZUFuZ2xlICsgdGhpcy5hbmdsZSwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHguZ2xvYmFsQWxwaGEgPSAxLjA7XG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgICBpZiAodGhpcy5yYWRpdXMgPiAzMCkge1xuICAgICAgICAgICAgdGhpcy5yYWRpdXMgLT0gMztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICB9XG5cbiAgICBnZXRQb3NpdGlvbigpe1xuICAgICAgIGNvbnN0IHBvc2l0aW9uID0ge1xuICAgICAgICAgICBzdGFydDogdGhpcy5hbmdsZSxcbiAgICAgICAgICAgZW5kOiB0aGlzLnBhcnRpYWxDaXJjbGVBbmdsZSArIHRoaXMuYW5nbGUsXG4gICAgICAgfVxuICAgICAgIHJldHVybiBwb3NpdGlvbjtcbiAgICB9XG5cbiAgICBnZXRQb2ludChjMSwgYzIsIHJhZGl1cywgYW5nbGUpIHtcbiAgICAgICAgcmV0dXJuIFtjMSArIE1hdGguY29zKGFuZ2xlKSAqIHJhZGl1cywgYzIgKyBNYXRoLnNpbihhbmdsZSkgKiByYWRpdXNdO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY3R4KSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5zaXplID0gNTtcbiAgICAgICAgdGhpcy5yYWRpdXMgPSA1NTtcbiAgICAgICAgdGhpcy5zcGVlZCA9IDc7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gMDtcbiAgICAgICAgdGhpcy5hbmdsZSA9IDMwO1xuICAgICAgICB0aGlzLnBsYXllclBvcyA9IFwibGVmdFwiO1xuICAgICAgICB0aGlzLmRyYXcgPSB0aGlzLmRyYXcuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBkcmF3KCkge1xuICAgICAgIFxuICAgICAgICBjb25zdCBkeCA9ICh0aGlzLmNhbnZhcy53aWR0aCAvIDIpICsgKCh0aGlzLnJhZGl1cykgKiBNYXRoLmNvcyh0aGlzLmFuZ2xlICogTWF0aC5QSSAvIDE4MCkpO1xuICAgICAgICBjb25zdCBkeSA9ICh0aGlzLmNhbnZhcy5oZWlnaHQgLyAyKSArICgodGhpcy5yYWRpdXMpICogTWF0aC5zaW4odGhpcy5hbmdsZSAqIE1hdGguUEkgLyAxODApKTtcbiAgICAgICAgdGhpcy5hbmdsZSA9IHRoaXMuYW5nbGUgKyAodGhpcy5kaXJlY3Rpb24gKiB0aGlzLnNwZWVkKTtcblxuICAgICAgICBpZih0aGlzLmFuZ2xlIDwgMCkge1xuICAgICAgICAgICAgdGhpcy5hbmdsZSA9IDM2MCAtIHRoaXMuYW5nbGU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZih0aGlzLmFuZ2xlID4gMzYwKXtcbiAgICAgICAgICAgIHRoaXMuYW5nbGUgJT0gMzYwO1xuICAgICAgICB9XG4gICAgICAgIC8vIHRoaXMuY3R4LnNhdmUoKTtcbiAgICAgICAgdGhpcy5jdHgudHJhbnNsYXRlKGR4LCBkeSk7XG4gICAgICAgIHRoaXMuY3R4LnJvdGF0ZSh0aGlzLmFuZ2xlICogTWF0aC5QSSAvIDE4MCk7XG4gICAgICAgIC8vIHRoaXMuY3R4LnJlc3RvcmUoKTtcbiAgICAgICAgdGhpcy5jdHgudHJhbnNsYXRlKC1keCwgLWR5KTtcblxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjRkZENzAwXCI7XG4gICAgICAgIHRoaXMuY3R4Lm1vdmVUbyhkeCAtIHRoaXMuc2l6ZSwgZHkgLSB0aGlzLnNpemUpO1xuICAgICAgICB0aGlzLmN0eC5saW5lVG8oZHggKyB0aGlzLnNpemUsIGR5KTtcbiAgICAgICAgdGhpcy5jdHgubGluZVRvKGR4IC0gdGhpcy5zaXplLCBkeSArIHRoaXMuc2l6ZSk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgdGhpcy5jdHgudHJhbnNsYXRlKGR4LCBkeSk7XG4gICAgICAgIHRoaXMuY3R4LnJvdGF0ZSgtdGhpcy5hbmdsZSAqIE1hdGguUEkgLyAxODApO1xuICAgICAgICB0aGlzLmN0eC50cmFuc2xhdGUoLWR4LCAtZHkpO1xuXG4gICAgICAgIFxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImR4XCIgKyBkeCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZHlcIiArIGR5KTtcbiAgICB9XG4gICAgaGFuZGxlUHJlc3MoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHN3aXRjaCAoZS5rZXkpIHtcbiAgICAgICAgICAgIC8vIGNhc2UgJ0Fycm93VXAnOlxuICAgICAgICAgICAgLy8gICAgIHRoaXMucGxheWVyUG9zID0gXCJ1cFwiO1xuICAgICAgICAgICAgLy8gICAgIGJyZWFrO1xuICAgICAgICAgICAgLy8gY2FzZSAnQXJyb3dEb3duJzpcbiAgICAgICAgICAgIC8vICAgICB0aGlzLnBsYXllclBvcyA9IFwiZG93blwiO1xuICAgICAgICAgICAgLy8gICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnQXJyb3dMZWZ0JzpcbiAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IC0xO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnQXJyb3dSaWdodCc6XG4gICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSAxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlS2V5VXAoZSl7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gMDtcbiAgICB9XG5cbiAgICBnZXRQb3NpdGlvbigpe1xuICAgICAgICByZXR1cm4gdGhpcy5hbmdsZTtcbiAgICB9XG59XG5cbiIsIlxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU291bmQge1xuICAgIGNvbnN0cnVjdG9yKHNyYyl7XG4gICAgICAgIHRoaXMuc291bmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXVkaW9cIik7XG4gICAgICAgIHRoaXMuc291bmQuc3JjID0gc3JjO1xuICAgICAgICB0aGlzLnNvdW5kLnNldEF0dHJpYnV0ZShcInByZWxvYWRcIiwgXCJhdXRvXCIpO1xuICAgICAgICB0aGlzLnNvdW5kLnNldEF0dHJpYnV0ZShcImNvbnRyb2xzXCIsIFwibm9uZVwiKTtcbiAgICAgICAgdGhpcy5zb3VuZC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5zb3VuZCk7XG4gICAgfVxuXG4gICAgcGxheSgpe1xuICAgICAgICB0aGlzLnNvdW5kLnBsYXkoKTtcbiAgICB9XG5cbiAgICBzdG9wKCl7XG4gICAgICAgIHRoaXMuc291bmQucGF1c2UoKTtcbiAgICAgICAgdGhpcy5zb3VuZC5jdXJyZW50VGltZSA9IDA7XG4gICAgfVxufVxuIiwiaW1wb3J0IEdhcCBmcm9tIFwiLi9nYXBcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2FsbCB7XG4gICAgY29uc3RydWN0b3IoY3R4LCB4LCB5LCByYWRpdXMsIGNvbG9yLCByb3RhdGlvbikge1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy5yYWRpdXMgPSByYWRpdXM7XG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICAgICAgdGhpcy50aW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIHRoaXMuYW5nbGUgPSBNYXRoLnJhbmRvbSgpICogKDIgKiBNYXRoLlBJKTtcbiAgICAgICAgdGhpcy5yb3RhdGlvbiA9IHJvdGF0aW9uO1xuICAgICAgICB0aGlzLmVuZEFuZ2xlID0gMiAqIE1hdGguUEkgLSAxLjI7XG4gICAgICAgIHRoaXMuZ2FwID0gbmV3IEdhcCh0aGlzLmN0eCwgdGhpcy54LCB0aGlzLnksIHRoaXMucmFkaXVzLCB0aGlzLmFuZ2xlLCB0aGlzLnJvdGF0aW9uLCB0aGlzLnRpbWUpO1xuICAgIH1cblxuICAgIGRyYXcoKXtcbiAgICAgICAgY29uc3QgbmV3VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICBsZXQgZGlmZiA9IG5ld1RpbWUgLSB0aGlzLnRpbWU7XG4gICAgICAgIHRoaXMudGltZSA9IG5ld1RpbWU7XG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDEyO1xuICAgICAgICB0aGlzLmN0eC5hcmModGhpcy54LCB0aGlzLnksIHRoaXMucmFkaXVzLCB0aGlzLmFuZ2xlLCB0aGlzLmVuZEFuZ2xlICsgdGhpcy5hbmdsZSwgZmFsc2UpO1xuICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgdGhpcy5hbmdsZSArPSBkaWZmICogdGhpcy5yb3RhdGlvbjtcbiAgICAgICAgdGhpcy5hbmdsZSAlPSAyICogTWF0aC5QSTtcblxuICAgICAgICB0aGlzLmdhcC5hbmdsZSArPSBkaWZmICogdGhpcy5yb3RhdGlvbjtcbiAgICAgICAgdGhpcy5nYXAuYW5nbGUgJT0gMiAqIE1hdGguUEk7XG5cbiAgICAgICAgaWYgKHRoaXMuYW5nbGUgPCAwKSB7XG4gICAgICAgICAgICB0aGlzLmFuZ2xlID0gMiAqIE1hdGguUEk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5hbmdsZSA+IDIgKiBNYXRoLlBJKSB7XG4gICAgICAgICAgICB0aGlzLmFuZ2xlICU9IDIgKiBNYXRoLlBJO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZ2FwLmFuZ2xlIDwgMCkge1xuICAgICAgICAgICAgdGhpcy5nYXAuYW5nbGUgPSAyICogTWF0aC5QSTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmdhcC5hbmdsZSA+IDIgKiBNYXRoLlBJKSB7XG4gICAgICAgICAgICB0aGlzLmdhcC5hbmdsZSAlPSAyICogTWF0aC5QSTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZSgpe1xuICAgICAgICBcbiAgICAgICAgaWYodGhpcy5yYWRpdXMgPiAzMCkge1xuICAgICAgICAgICAgdGhpcy5yYWRpdXMgLT0gMztcbiAgICAgICAgICAgIHRoaXMuZ2FwLnJhZGl1cyAtPSAzO1xuICAgICAgICB9IFxuICAgICAgICB0aGlzLmdhcC5kcmF3KCk7XG4gICAgICAgIHRoaXMuZHJhdygpO1xuICAgICAgICBcbiAgICB9XG5cbiAgICByZXZlcnNlKCl7XG4gICAgICAgIGlmKHRoaXMucmFkaXVzID09PSAyOTApe1xuICAgICAgICAgICAgdGhpcy5yb3RhdGlvbiAqPSAtMS4yO1xuICAgICAgICB9XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=