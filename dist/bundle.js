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

var _wall = __webpack_require__(/*! ./wall */ "./src/javascript/wall.js");

var _wall2 = _interopRequireDefault(_wall);

var _hexagon = __webpack_require__(/*! ./hexagon */ "./src/javascript/hexagon.js");

var _hexagon2 = _interopRequireDefault(_hexagon);

var _sound = __webpack_require__(/*! ./sound */ "./src/javascript/sound.js");

var _sound2 = _interopRequireDefault(_sound);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DIM_X = 1000;
var DIM_Y = 600;
var CENTER_X = DIM_X / 2;
var CENTER_Y = DIM_Y / 2;
var COLOR_SCHEME = ["#ffce00", "c9ff00", "#49ff00", "#00ffec", "#00d2ff"];
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
        this.rotation = 0;
    }

    _createClass(Game, [{
        key: "randomColor",
        value: function randomColor(colors) {
            return colors[Math.floor(Math.random() * colors.length)];
        }
    }, {
        key: "changeBG",
        value: function changeBG() {
            var randomColor = COLOR_SCHEME[Math.floor(Math.random() * COLOR_SCHEME.length)];
            var canvas = document.getElementById("myCanvas");
            this.bg = canvas.style.backgroundColor = randomColor;
        }
    }, {
        key: "rotate",
        value: function rotate() {

            this.ctx.beginPath();
            this.ctx.translate(CENTER_X, CENTER_Y);
            this.ctx.rotate(this.rotation * Math.PI / 180);
            this.ctx.translate(-CENTER_X, -CENTER_Y);
            this.rotation++;
            if (this.rotation === 360) this.rotation = 0;
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
            var wall = new _hexagon2.default(this.ctx, DIM_X / 2, DIM_Y / 2, 800);
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
            // this.ctx.translate(CENTER_X, CENTER_Y);
            // let origin = (2 * Math.PI) - (this.rotation * Math.PI / 180);
            // console.log(origin);
            // this.ctx.rotate(origin);
            // this.ctx.translate(-CENTER_X, -CENTER_Y);
            this.ctx.font = "20px Orbitron";
            // let x = (this.canvas.width - 100) * Math.cos(-this.rotation) - (30) * Math.cos(-this.rotation);
            // let y = (this.canvas.width - 100) * Math.sin(-this.rotation) + 30 * Math.cos(-this.rotation)
            this.ctx.fillText("Score: " + this.score, this.canvas.width - 100, 30);
            this.ctx.closePath();
        }
    }, {
        key: "centerText",
        value: function centerText(text, y) {
            var measurement = this.ctx.measureText(text);
            var measurementwidth = (this.canvas.width - measurement.width) / 2;
            var x = (this.canvas.width - measurement.width) / 2;
            this.ctx.fillText(text, x, y);
        }
    }, {
        key: "draw",
        value: function draw() {
            this.ctx.clearRect(0, 0, DIM_X, DIM_Y);
            this.showScore();
            var centerX = DIM_X / 2;
            var centerY = DIM_Y / 2;
            this.ctx.save();
            this.rotate();
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
            this.ctx.restore();
            var doWallsExist = this.walls.length > 0;
            // if(doWallsExist){

            //TODO: we check for collision when the wall is literally ontop of the player
            // maybe find a sweet spot with this.player.radius + 1 or something cause the triangle has
            // a size to it.
            // const isWallOnPlayer = this.walls[0].radius <= this.player.radius + this.player.size + 6 && this.walls[0].radius >= this.player.radius;
            // if (isWallOnPlayer){
            //     if(!this.checkCollision(this.player, this.walls[0].gap)){
            //         this.dead = true;
            //     };
            // console.log(this.walls[0].angle);
            // }
            // }
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
            if (this.walls.length > 0 && this.walls[0].distance < 30) {
                this.walls.shift();
            }
            // this.increaseDifficulty();
            this.draw();
            this.updateScore();
        }
    }, {
        key: "updateScore",
        value: function updateScore() {
            if (this.walls.length) {
                if (this.walls[0].distance === 32) {
                    this.score += 1;
                    this.changeBG();
                }
            }
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
            var _this3 = this;

            var y = this.canvas.height / 2;
            var color = "#CC29336";
            var title = "Escape the Shape";
            var enter = "Press Enter";
            var gradient = this.ctx.createLinearGradient(0, 0, this.canvas.width, 0);
            gradient.addColorStop("0", "#C873C8");
            gradient.addColorStop("0.5", "#91D7A1");
            gradient.addColorStop("1.0", "#DDD830");
            this.ctx.clearRect(0, 0, DIM_X, DIM_Y);
            this.ctx.fillStyle = gradient;
            this.ctx.font = "48px Orbitron";
            this.centerText(title, y);

            this.ctx.fillStyle = color;
            this.ctx.font = "24px Orbitron";
            this.centerText(enter, y + 30);
            document.addEventListener('keydown', function (e) {
                return _this3.gameStart(e);
            });
        }
    }, {
        key: "gameOver",
        value: function gameOver() {
            var _this4 = this;

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
            var gradient = this.ctx.createLinearGradient(0, 0, this.canvas.width, 0);
            gradient.addColorStop("0", "#262224");
            gradient.addColorStop("0.5", "#F1DF0C");
            gradient.addColorStop("1.0", "#F7042C");
            this.walls = [];
            this.speed = [-.001, .001];
            var y = this.canvas.height / 2;
            var title = "Game Over";
            var enter = "Press enter to try again";
            var score = "Score: " + this.score;
            var highScore = "High Score: " + this.highScore;
            this.ctx.clearRect(0, 0, DIM_X, DIM_Y);
            this.ctx.fillStyle = gradient;
            this.ctx.font = "48px Orbitron";
            this.centerText(title, y + 60);

            this.ctx.font = "48px Orbitron";
            this.centerText(highScore, y - 120);
            this.centerText(score, y - 50);
            this.ctx.font = "24px Orbitron";
            this.centerText(enter, y + 100);
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

/***/ "./src/javascript/hexagon.js":
/*!***********************************!*\
  !*** ./src/javascript/hexagon.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Hexagon = function () {
    function Hexagon(ctx, x, y, distance) {
        _classCallCheck(this, Hexagon);

        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.distance = distance;
        this.numSides = 6;
        this.angle = Math.floor(Math.random() * 360);
    }

    _createClass(Hexagon, [{
        key: "draw",
        value: function draw() {
            var cx = 1000 + this.distance;
            var cy = 600 + this.distance;
            this.ctx.beginPath();
            this.ctx.save();
            this.ctx.translate(this.x, this.y);
            this.ctx.rotate(this.angle * Math.PI / 180);
            this.ctx.translate(-this.x, -this.y);
            this.ctx.moveTo(this.x + this.distance * Math.cos(0), this.y + this.distance * Math.sin(0));
            this.ctx.strokeStyle = "#388697";
            for (var i = 1; i < this.numSides; i++) {
                this.ctx.lineTo(this.x + this.distance * Math.cos(i * 2 * Math.PI / this.numSides), this.y + this.distance * Math.sin(i * 2 * Math.PI / this.numSides));
            }
            this.ctx.stroke();

            this.ctx.lineWidth = 20;
            this.ctx.stroke();
            this.ctx.restore();
            this.ctx.closePath();

            // const start = [(this.x + this.distance * Math.cos(7 * 2 * Math.PI / this.numSides), (this.y + this.distance * Math.sin(7 * 2 * Math.PI / this.numSides)))];
        }
    }, {
        key: "update",
        value: function update() {
            this.distance -= 3;
            this.draw();
        }
    }]);

    return Hexagon;
}();

exports.default = Hexagon;

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
            this.ctx.fillStyle = "black";
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
        key: "handlePress",
        value: function handlePress(e) {
            e.preventDefault();
            switch (e.key) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qYXZhc2NyaXB0L2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2phdmFzY3JpcHQvZ2FtZV92aWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9qYXZhc2NyaXB0L2dhcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvamF2YXNjcmlwdC9oZXhhZ29uLmpzIiwid2VicGFjazovLy8uL3NyYy9qYXZhc2NyaXB0L3BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvamF2YXNjcmlwdC9zb3VuZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvamF2YXNjcmlwdC93YWxsLmpzIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbnZhcyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwid2lkdGgiLCJoZWlnaHQiLCJjdHgiLCJnZXRDb250ZXh0IiwiZ2FtZVZpZXciLCJHYW1lVmlldyIsImdhbWUiLCJwbGF5ZXIiLCJoYW5kbGVQcmVzcyIsImUiLCJnYW1lU3RhcnQiLCJoYW5kbGVLZXlVcCIsImFuaW1hdGUiLCJESU1fWCIsIkRJTV9ZIiwiQ0VOVEVSX1giLCJDRU5URVJfWSIsIkNPTE9SX1NDSEVNRSIsImNvbG9ycyIsIkdhbWUiLCJQbGF5ZXIiLCJ3YWxscyIsInRpbWVyIiwic2NvcmUiLCJpbkdhbWUiLCJkZWFkIiwiYmciLCJoaWdoU2NvcmUiLCJzcGVlZCIsInRoZW1lU29uZyIsIlNvdW5kIiwiZ2FtZU92ZXJTb25nIiwiZ09Mb29wIiwicm90YXRpb24iLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJyYW5kb21Db2xvciIsImdldEVsZW1lbnRCeUlkIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJiZWdpblBhdGgiLCJ0cmFuc2xhdGUiLCJyb3RhdGUiLCJQSSIsInN0YXJ0U2NyZWVuIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJ1biIsImdhbWVPdmVyIiwid2FsbCIsIkhleGFnb24iLCJwdXNoIiwicmFkaXVzIiwiaW5jcmVhc2VTcGVlZCIsIm1hcCIsImZvckVhY2giLCJyZXZlcnNlIiwiZm9udCIsImZpbGxUZXh0IiwiY2xvc2VQYXRoIiwidGV4dCIsInkiLCJtZWFzdXJlbWVudCIsIm1lYXN1cmVUZXh0IiwibWVhc3VyZW1lbnR3aWR0aCIsIngiLCJjbGVhclJlY3QiLCJzaG93U2NvcmUiLCJjZW50ZXJYIiwiY2VudGVyWSIsInNhdmUiLCJsaW5lV2lkdGgiLCJzdHJva2VTdHlsZSIsImFyYyIsInN0cm9rZSIsInVwZGF0ZSIsImRyYXciLCJyZXN0b3JlIiwiZG9XYWxsc0V4aXN0Iiwid2FsbFNwYWNlIiwic2V0VGltZW91dCIsImFkZFdhbGwiLCJkaXN0YW5jZSIsInNoaWZ0IiwidXBkYXRlU2NvcmUiLCJjaGFuZ2VCRyIsImdhcCIsImNvbGxpc2lvbiIsImdhcFBvcyIsImdldFBvc2l0aW9uIiwicGxheWVyQW5nbGUiLCJwbGF5ZXJMZWZ0Iiwic2luIiwiYW5nbGUiLCJlbmRBbmdsZSIsInBhcnRpYWxDaXJjbGVBbmdsZSIsImNvbG9yIiwidGl0bGUiLCJlbnRlciIsImdyYWRpZW50IiwiY3JlYXRlTGluZWFyR3JhZGllbnQiLCJhZGRDb2xvclN0b3AiLCJmaWxsU3R5bGUiLCJjZW50ZXJUZXh0Iiwic3RvcCIsInBsYXkiLCJwcmV2ZW50RGVmYXVsdCIsIndoaWNoIiwia2V5Q29kZSIsImluaXQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJiaW5kIiwiR2FwIiwidGltZSIsImdsb2JhbEFscGhhIiwicG9zaXRpb24iLCJzdGFydCIsImVuZCIsImMxIiwiYzIiLCJjb3MiLCJudW1TaWRlcyIsImN4IiwiY3kiLCJtb3ZlVG8iLCJpIiwibGluZVRvIiwic2l6ZSIsImRpcmVjdGlvbiIsInBsYXllclBvcyIsImR4IiwiZHkiLCJmaWxsIiwia2V5Iiwic3JjIiwic291bmQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiZGlzcGxheSIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInBhdXNlIiwiY3VycmVudFRpbWUiLCJXYWxsIiwiRGF0ZSIsImdldFRpbWUiLCJuZXdUaW1lIiwiZGlmZiJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUFBLFNBQVNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFZO0FBQ3RELFFBQU1DLFNBQVNGLFNBQVNHLG9CQUFULENBQThCLFFBQTlCLEVBQXdDLENBQXhDLENBQWY7QUFDQUQsV0FBT0UsS0FBUCxHQUFlLElBQWY7QUFDQUYsV0FBT0csTUFBUCxHQUFnQixHQUFoQjs7QUFFQSxRQUFNQyxNQUFNSixPQUFPSyxVQUFQLENBQWtCLElBQWxCLENBQVo7O0FBR0EsUUFBTUMsV0FBVyxJQUFJQyxtQkFBSixDQUFhUCxNQUFiLEVBQXFC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b250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFBsYXllciBmcm9tICcuL2phdmFzY3JpcHQvcGxheWVyJztcbmltcG9ydCBHYW1lIGZyb20gJy4vamF2YXNjcmlwdC9nYW1lJztcbmltcG9ydCBHYW1lVmlldyBmcm9tICcuL2phdmFzY3JpcHQvZ2FtZV92aWV3JztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiY2FudmFzXCIpWzBdO1xuICAgIGNhbnZhcy53aWR0aCA9IDEwMDA7XG4gICAgY2FudmFzLmhlaWdodCA9IDYwMDtcblxuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cblxuICAgIGNvbnN0IGdhbWVWaWV3ID0gbmV3IEdhbWVWaWV3KGNhbnZhcywgY3R4KTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZSA9PiBnYW1lVmlldy5nYW1lLnBsYXllci5oYW5kbGVQcmVzcyhlKSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGUgPT4gZ2FtZVZpZXcuZ2FtZS5nYW1lU3RhcnQoZSkpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZSA9PiBnYW1lVmlldy5nYW1lLnBsYXllci5oYW5kbGVLZXlVcChlKSk7XG4gICAgZ2FtZVZpZXcuYW5pbWF0ZSgpO1xufSk7XG5cblxuXG4iLCJpbXBvcnQgUGxheWVyIGZyb20gXCIuL3BsYXllclwiO1xuaW1wb3J0IFdhbGwgZnJvbSBcIi4vd2FsbFwiO1xuaW1wb3J0IEhleGFnb24gZnJvbSAnLi9oZXhhZ29uJztcbmltcG9ydCBTb3VuZCBmcm9tICcuL3NvdW5kJztcbmNvbnN0IERJTV9YID0gMTAwMDtcbmNvbnN0IERJTV9ZID0gNjAwO1xuY29uc3QgQ0VOVEVSX1ggPSBESU1fWCAvIDI7XG5jb25zdCBDRU5URVJfWSA9IERJTV9ZIC8gMjtcbmNvbnN0IENPTE9SX1NDSEVNRSA9IFtcIiNmZmNlMDBcIiwgXCJjOWZmMDBcIiwgXCIjNDlmZjAwXCIsIFwiIzAwZmZlY1wiLCBcIiMwMGQyZmZcIl1cbmNvbnN0IGNvbG9ycyA9IFtcbiAgICBcIiMwMGJkZmZcIixcbiAgICBcIiM0ZDM5Y2VcIixcbiAgICBcIiMwODhlZmZcIixcbl07XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGN0eCkge1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMucGxheWVyID0gbmV3IFBsYXllcih0aGlzLmNhbnZhcywgdGhpcy5jdHgpXG4gICAgICAgIHRoaXMud2FsbHMgPSBbXTtcbiAgICAgICAgdGhpcy50aW1lciA9IG51bGw7XG4gICAgICAgIHRoaXMuc2NvcmUgPSAwO1xuICAgICAgICB0aGlzLmluR2FtZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmRlYWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5iZyA9IFwiIzQ4NjM5Y1wiO1xuICAgICAgICB0aGlzLmhpZ2hTY29yZSA9IDA7XG4gICAgICAgIHRoaXMuc3BlZWQgPSBbLS4wMDEsIC4wMDFdO1xuICAgICAgICB0aGlzLnRoZW1lU29uZyA9IG5ldyBTb3VuZChcImdhbWV0aGVtZS5tcDNcIik7XG4gICAgICAgIHRoaXMuZ2FtZU92ZXJTb25nID0gbmV3IFNvdW5kKFwiZ2FtZU92ZXIubXAzXCIpO1xuICAgICAgICB0aGlzLmdPTG9vcCA9IHRydWU7XG4gICAgICAgIHRoaXMucm90YXRpb24gPSAwO1xuICAgIH1cblxuICAgIHJhbmRvbUNvbG9yKGNvbG9ycykge1xuICAgICAgICByZXR1cm4gY29sb3JzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNvbG9ycy5sZW5ndGgpXTtcbiAgICB9XG5cbiAgICBjaGFuZ2VCRygpIHtcbiAgICAgICAgY29uc3QgcmFuZG9tQ29sb3IgPSBDT0xPUl9TQ0hFTUVbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogQ09MT1JfU0NIRU1FLmxlbmd0aCldO1xuICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15Q2FudmFzXCIpO1xuICAgICAgICB0aGlzLmJnID0gY2FudmFzLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHJhbmRvbUNvbG9yO1xuICAgIH1cblxuICAgIHJvdGF0ZSgpe1xuICAgICAgICBcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4LnRyYW5zbGF0ZShDRU5URVJfWCwgQ0VOVEVSX1kpO1xuICAgICAgICB0aGlzLmN0eC5yb3RhdGUodGhpcy5yb3RhdGlvbiAqIE1hdGguUEkgLyAxODApO1xuICAgICAgICB0aGlzLmN0eC50cmFuc2xhdGUoLUNFTlRFUl9YLCAtQ0VOVEVSX1kpO1xuICAgICAgICB0aGlzLnJvdGF0aW9uKys7XG4gICAgICAgIGlmKHRoaXMucm90YXRpb24gPT09IDM2MCkgdGhpcy5yb3RhdGlvbiA9IDA7XG4gICAgfVxuXG4gICAgaW5pdCgpe1xuICAgICAgICBpZighdGhpcy5pbkdhbWUpe1xuICAgICAgICAgICAgdGhpcy5zdGFydFNjcmVlbigpO1xuICAgICAgICB9IGVsc2UgaWYodGhpcy5pbkdhbWUgJiYgIXRoaXMuZGVhZCl7XG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZSA9PiB0aGlzLmdhbWVTdGFydChlKSk7XG4gICAgICAgICAgICB0aGlzLnJ1bigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5nYW1lT3ZlcigpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBhZGRXYWxsKCl7XG4gICAgICAgIGNvbnN0IHdhbGwgPSBuZXcgSGV4YWdvbih0aGlzLmN0eCwgRElNX1ggLyAyLCBESU1fWSAvIDIsIDgwMCk7XG4gICAgICAgIHRoaXMud2FsbHMucHVzaCh3YWxsKTtcbiAgICAgICAgdGhpcy50aW1lciA9IG51bGw7XG4gICAgfVxuXG4gICAgaW5jcmVhc2VEaWZmaWN1bHR5KCl7XG4gICAgICAgIGxldCByYWRpdXM7XG4gICAgICAgIGlmKHRoaXMud2FsbHMubGVuZ3RoKSB7IHJhZGl1cyA9IHRoaXMud2FsbHNbMF0ucmFkaXVzfVxuICAgICAgICBpZih0aGlzLnNjb3JlID09PSAxMCAmJiByYWRpdXMgPT09IDQ3KXtcbiAgICAgICAgICAgIHRoaXMuaW5jcmVhc2VTcGVlZCh0aGlzLndhbGxzKTtcbiAgICAgICAgICAgIFxuICAgICAgICB9IGVsc2UgaWYodGhpcy5zY29yZSA9PT0gMjAgJiYgcmFkaXVzID09PSA0Nyl7XG4gICAgICAgICAgICB0aGlzLmluY3JlYXNlU3BlZWQodGhpcy53YWxscyk7XG4gICAgICAgIH0gZWxzZSBpZih0aGlzLnNjb3JlID09PSAzMCAmJiByYWRpdXMgPT09IDQ3KXtcbiAgICAgICAgICAgIHRoaXMuaW5jcmVhc2VTcGVlZCh0aGlzLndhbGxzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHRoaXMuc2NvcmUgPT09IDQwICYmIHJhZGl1cyA9PT0gNDcpe1xuICAgICAgICAgICAgdGhpcy5pbmNyZWFzZVNwZWVkKHRoaXMud2FsbHMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuc2NvcmUgPT09IDUwICYmIHJhZGl1cyA9PT0gNDcpIHtcbiAgICAgICAgICAgIHRoaXMuaW5jcmVhc2VTcGVlZCh0aGlzLndhbGxzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLnNjb3JlID09PSA2MCAmJiByYWRpdXMgPT09IDQ3KSB7XG4gICAgICAgICAgICB0aGlzLmluY3JlYXNlU3BlZWQodGhpcy53YWxscyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5zY29yZSA9PT0gNzAgJiYgcmFkaXVzID09PSA0Nykge1xuICAgICAgICAgICAgdGhpcy5pbmNyZWFzZVNwZWVkKHRoaXMud2FsbHMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuc2NvcmUgPT09IDgwICYmIHJhZGl1cyA9PT0gNDcpe1xuICAgICAgICAgICAgdGhpcy5zcGVlZCA9IHRoaXMuc3BlZWQubWFwKHNwZWVkID0+IHNwZWVkICogMTApO1xuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMuc2NvcmUgPiAzMCl7XG4gICAgICAgICAgICB0aGlzLndhbGxzLmZvckVhY2god2FsbCA9PiB7XG4gICAgICAgICAgICAgICAgd2FsbC5yZXZlcnNlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB9XG4gICAgXG5cbiAgICBpbmNyZWFzZVNwZWVkKHdhbGxzKXtcbiAgICAgICAgdGhpcy5zcGVlZCA9IHRoaXMuc3BlZWQubWFwKHNwZWVkID0+IHNwZWVkICogMS4yKTtcbiAgICB9XG5cbiAgICBhbGxXYWxscygpe1xuICAgICAgICByZXR1cm4gdGhpcy53YWxscztcbiAgICB9XG5cbiAgICBzaG93U2NvcmUoKXtcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIC8vIHRoaXMuY3R4LnRyYW5zbGF0ZShDRU5URVJfWCwgQ0VOVEVSX1kpO1xuICAgICAgICAvLyBsZXQgb3JpZ2luID0gKDIgKiBNYXRoLlBJKSAtICh0aGlzLnJvdGF0aW9uICogTWF0aC5QSSAvIDE4MCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG9yaWdpbik7XG4gICAgICAgIC8vIHRoaXMuY3R4LnJvdGF0ZShvcmlnaW4pO1xuICAgICAgICAvLyB0aGlzLmN0eC50cmFuc2xhdGUoLUNFTlRFUl9YLCAtQ0VOVEVSX1kpO1xuICAgICAgICB0aGlzLmN0eC5mb250ID0gXCIyMHB4IE9yYml0cm9uXCI7XG4gICAgICAgIC8vIGxldCB4ID0gKHRoaXMuY2FudmFzLndpZHRoIC0gMTAwKSAqIE1hdGguY29zKC10aGlzLnJvdGF0aW9uKSAtICgzMCkgKiBNYXRoLmNvcygtdGhpcy5yb3RhdGlvbik7XG4gICAgICAgIC8vIGxldCB5ID0gKHRoaXMuY2FudmFzLndpZHRoIC0gMTAwKSAqIE1hdGguc2luKC10aGlzLnJvdGF0aW9uKSArIDMwICogTWF0aC5jb3MoLXRoaXMucm90YXRpb24pXG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiU2NvcmU6IFwiICsgdGhpcy5zY29yZSwgdGhpcy5jYW52YXMud2lkdGggLSAxMDAsIDMwKTtcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG4gICAgfVxuXG4gICAgY2VudGVyVGV4dCh0ZXh0LCB5KXtcbiAgICAgICAgY29uc3QgbWVhc3VyZW1lbnQgPSB0aGlzLmN0eC5tZWFzdXJlVGV4dCh0ZXh0KTtcbiAgICAgICAgY29uc3QgbWVhc3VyZW1lbnR3aWR0aCA9ICh0aGlzLmNhbnZhcy53aWR0aCAtIG1lYXN1cmVtZW50LndpZHRoKSAvIDI7XG4gICAgICAgIGNvbnN0IHggPSAodGhpcy5jYW52YXMud2lkdGggLSBtZWFzdXJlbWVudC53aWR0aCkgLyAyO1xuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dCh0ZXh0LCB4LCB5KTtcbiAgICB9XG4gICAgXG4gICAgZHJhdygpIHtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIERJTV9YLCBESU1fWSk7XG4gICAgICAgIHRoaXMuc2hvd1Njb3JlKCk7XG4gICAgICAgIGNvbnN0IGNlbnRlclggPSBESU1fWCAvIDI7XG4gICAgICAgIGNvbnN0IGNlbnRlclkgPSBESU1fWSAvIDI7XG4gICAgICAgIHRoaXMuY3R4LnNhdmUoKTtcbiAgICAgICAgdGhpcy5yb3RhdGUoKTtcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDE7XG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICB0aGlzLmN0eC5hcmMoY2VudGVyWCwgY2VudGVyWSwgMzAsIDAsIDIgKiBNYXRoLlBJLCBmYWxzZSk7XG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgdGhpcy53YWxscy5mb3JFYWNoKHdhbGwgPT4ge1xuICAgICAgICAgICAgd2FsbC51cGRhdGUoKTtcbiAgICAgICAgICAgIC8vIHdhbGwuZ2FwLnVwZGF0ZSgpO1xuICAgICAgICB9KVxuICAgICAgICB0aGlzLnBsYXllci5kcmF3KDUpO1xuICAgICAgICB0aGlzLmN0eC5yZXN0b3JlKCk7XG4gICAgICAgIGNvbnN0IGRvV2FsbHNFeGlzdCA9IHRoaXMud2FsbHMubGVuZ3RoID4gMDtcbiAgICAgICAgLy8gaWYoZG9XYWxsc0V4aXN0KXtcblxuICAgICAgICAgICAgLy9UT0RPOiB3ZSBjaGVjayBmb3IgY29sbGlzaW9uIHdoZW4gdGhlIHdhbGwgaXMgbGl0ZXJhbGx5IG9udG9wIG9mIHRoZSBwbGF5ZXJcbiAgICAgICAgICAgIC8vIG1heWJlIGZpbmQgYSBzd2VldCBzcG90IHdpdGggdGhpcy5wbGF5ZXIucmFkaXVzICsgMSBvciBzb21ldGhpbmcgY2F1c2UgdGhlIHRyaWFuZ2xlIGhhc1xuICAgICAgICAgICAgLy8gYSBzaXplIHRvIGl0LlxuICAgICAgICAgICAgLy8gY29uc3QgaXNXYWxsT25QbGF5ZXIgPSB0aGlzLndhbGxzWzBdLnJhZGl1cyA8PSB0aGlzLnBsYXllci5yYWRpdXMgKyB0aGlzLnBsYXllci5zaXplICsgNiAmJiB0aGlzLndhbGxzWzBdLnJhZGl1cyA+PSB0aGlzLnBsYXllci5yYWRpdXM7XG4gICAgICAgICAgICAvLyBpZiAoaXNXYWxsT25QbGF5ZXIpe1xuICAgICAgICAgICAgLy8gICAgIGlmKCF0aGlzLmNoZWNrQ29sbGlzaW9uKHRoaXMucGxheWVyLCB0aGlzLndhbGxzWzBdLmdhcCkpe1xuICAgICAgICAgICAgLy8gICAgICAgICB0aGlzLmRlYWQgPSB0cnVlO1xuICAgICAgICAgICAgLy8gICAgIH07XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy53YWxsc1swXS5hbmdsZSk7XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gdGhpcy5jdHguc3Ryb2tlKCk7XG4gICAgICAgIC8vIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuICAgIH1cbiAgICBcbiAgICBydW4oKXtcbiAgICAgICAgY29uc3Qgd2FsbFNwYWNlID0gMTAwMDtcbiAgICAgICAgaWYodGhpcy53YWxscy5sZW5ndGggPCA4ICYmIHRoaXMudGltZXIgPT09IG51bGwpe1xuICAgICAgICAgICAgdGhpcy50aW1lciA9IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5hZGRXYWxsKCksIHdhbGxTcGFjZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMud2FsbHMubGVuZ3RoID4gMCAmJiB0aGlzLndhbGxzWzBdLmRpc3RhbmNlIDwgMzApIHsgdGhpcy53YWxscy5zaGlmdCgpfVxuICAgICAgICAvLyB0aGlzLmluY3JlYXNlRGlmZmljdWx0eSgpO1xuICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICAgICAgdGhpcy51cGRhdGVTY29yZSgpO1xuICAgICAgICB9XG5cbiAgICB1cGRhdGVTY29yZSgpe1xuICAgICAgICBpZih0aGlzLndhbGxzLmxlbmd0aCl7XG4gICAgICAgICAgICBpZiAodGhpcy53YWxsc1swXS5kaXN0YW5jZSA9PT0gMzIpIHsgXG4gICAgICAgICAgICAgICAgdGhpcy5zY29yZSArPSAxO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlQkcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG5cbiAgICBjaGVja0NvbGxpc2lvbihwbGF5ZXIsIGdhcCl7XG4gICAgICAgIGxldCBjb2xsaXNpb24gPSBmYWxzZTtcbiAgICAgICAgbGV0IGdhcFBvcyA9IGdhcC5nZXRQb3NpdGlvbigpO1xuICAgICAgICBsZXQgcGxheWVyQW5nbGUgPSBwbGF5ZXIuZ2V0UG9zaXRpb24oKSAqIE1hdGguUEkgLyAxODA7XG4gICAgICAgIGxldCBwbGF5ZXJMZWZ0ID0gKHRoaXMuY2FudmFzLmhlaWdodCAvIDIpICsgKCh0aGlzLnJhZGl1cykgKiBNYXRoLnNpbih0aGlzLmFuZ2xlICogTWF0aC5QSSAvIDE4MCkpO1xuICAgICAgICBsZXQgZW5kQW5nbGUgPSBnYXAuYW5nbGUgLSAoMiAqIE1hdGguUEkgLSBnYXAucGFydGlhbENpcmNsZUFuZ2xlKTtcbiAgICAgICAgaWYgKGVuZEFuZ2xlIDwgMCkge1xuICAgICAgICAgICAgZW5kQW5nbGUgKz0gMipNYXRoLlBJO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYocGxheWVyUG9zID4gZ2FwUG9zW3N0YXJ0XSAmJiBwbGF5ZXJQb3MgPCBnYXBQb3NbZW5kXSkgY29sbGlzaW9uID0gdHJ1ZTtcblxuICAgICAgICAvLyB0aGUgY2FzZSB3aGVuIHRoZSBnYXAgc3RyYWRkbGVzIHRoZSBob3Jpem9udGFsXG5cbiAgICAgICAgaWYgKGdhcC5hbmdsZSA8IGVuZEFuZ2xlKXtcbiAgICAgICAgICAgIGlmICgocGxheWVyQW5nbGUgID4gZW5kQW5nbGUgXG4gICAgICAgICAgICAgICAgJiYgcGxheWVyQW5nbGUgPCAyICogTWF0aC5QSSkgXG4gICAgICAgICAgICAgICAgfHwgcGxheWVyQW5nbGUgPCBnYXAuYW5nbGUgJiYgcGxheWVyQW5nbGUgPiAwKXtcbiAgICAgICAgICAgICAgICBjb2xsaXNpb24gPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBsYXllckFuZ2xlIDwgZ2FwLmFuZ2xlICYmXG4gICAgICAgICAgICBwbGF5ZXJBbmdsZSA+IGVuZEFuZ2xlKSB7XG4gICAgICAgICAgICAgICAgY29sbGlzaW9uID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICBpZihjb2xsaXNpb24gPT09IHRydWUpe1xuICAgICAgICAgICAgLy8gdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAnYmx1ZSdcbiAgICAgICAgICAgIC8vIHRoaXMuY3R4LnN0cm9rZVJlY3QoRElNX1ggLyAyIC0gMjUsIERJTV9ZIC8gMiAtIDI1LCA1MCwgNTApXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbGxpc2lvbjtcbiAgICB9XG5cbiAgICBzdGFydFNjcmVlbigpe1xuICAgICAgICBsZXQgeSA9IHRoaXMuY2FudmFzLmhlaWdodCAvIDI7XG4gICAgICAgIGxldCBjb2xvciA9IFwiI0NDMjkzMzZcIjtcbiAgICAgICAgbGV0IHRpdGxlID0gXCJFc2NhcGUgdGhlIFNoYXBlXCI7XG4gICAgICAgIGxldCBlbnRlciA9IFwiUHJlc3MgRW50ZXJcIjtcbiAgICAgICAgY29uc3QgZ3JhZGllbnQgPSB0aGlzLmN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgMCk7XG4gICAgICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcChcIjBcIiwgXCIjQzg3M0M4XCIpO1xuICAgICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoXCIwLjVcIiwgXCIjOTFEN0ExXCIpO1xuICAgICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoXCIxLjBcIiwgXCIjREREODMwXCIpO1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgRElNX1gsIERJTV9ZKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gZ3JhZGllbnQ7XG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcIjQ4cHggT3JiaXRyb25cIjtcbiAgICAgICAgdGhpcy5jZW50ZXJUZXh0KHRpdGxlLCB5KTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgICAgICB0aGlzLmN0eC5mb250ID0gXCIyNHB4IE9yYml0cm9uXCI7XG4gICAgICAgIHRoaXMuY2VudGVyVGV4dChlbnRlciwgeSArIDMwKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGUgPT4gdGhpcy5nYW1lU3RhcnQoZSkpO1xuICAgIH1cblxuICAgIGdhbWVPdmVyKCkge1xuICAgICAgICBpZiAodGhpcy5zY29yZSA+IHRoaXMuaGlnaFNjb3JlKSB7XG4gICAgICAgICAgICB0aGlzLmhpZ2hTY29yZSA9IHRoaXMuc2NvcmU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50aGVtZVNvbmcuc3RvcCgpO1xuICAgICAgICBpZiAodGhpcy5nT0xvb3ApIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXJTb25nLnBsYXkoKTtcbiAgICAgICAgICAgIHRoaXMuZ09Mb29wID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUNhbnZhc1wiKTtcbiAgICAgICAgY2FudmFzLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IChcIiM0ODYzOWNcIik7XG4gICAgICAgIGNvbnN0IGdyYWRpZW50ID0gdGhpcy5jdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIDApO1xuICAgICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoXCIwXCIsIFwiIzI2MjIyNFwiKTtcbiAgICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKFwiMC41XCIsIFwiI0YxREYwQ1wiKTtcbiAgICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKFwiMS4wXCIsIFwiI0Y3MDQyQ1wiKTtcbiAgICAgICAgdGhpcy53YWxscyA9IFtdO1xuICAgICAgICB0aGlzLnNwZWVkID0gWy0uMDAxLCAuMDAxXTtcbiAgICAgICAgbGV0IHkgPSB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyO1xuICAgICAgICBsZXQgdGl0bGUgPSBcIkdhbWUgT3ZlclwiO1xuICAgICAgICBsZXQgZW50ZXIgPSBcIlByZXNzIGVudGVyIHRvIHRyeSBhZ2FpblwiO1xuICAgICAgICBsZXQgc2NvcmUgPSBgU2NvcmU6ICR7dGhpcy5zY29yZX1gO1xuICAgICAgICBsZXQgaGlnaFNjb3JlID0gYEhpZ2ggU2NvcmU6ICR7dGhpcy5oaWdoU2NvcmV9YDtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIERJTV9YLCBESU1fWSk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IGdyYWRpZW50O1xuICAgICAgICB0aGlzLmN0eC5mb250ID0gXCI0OHB4IE9yYml0cm9uXCI7XG4gICAgICAgIHRoaXMuY2VudGVyVGV4dCh0aXRsZSwgeSArIDYwKTtcblxuICAgICAgICB0aGlzLmN0eC5mb250ID0gXCI0OHB4IE9yYml0cm9uXCI7XG4gICAgICAgIHRoaXMuY2VudGVyVGV4dChoaWdoU2NvcmUsIHkgLSAxMjApO1xuICAgICAgICB0aGlzLmNlbnRlclRleHQoc2NvcmUsIHkgLSA1MCk7XG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcIjI0cHggT3JiaXRyb25cIjtcbiAgICAgICAgdGhpcy5jZW50ZXJUZXh0KGVudGVyLCB5ICsgMTAwKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGUgPT4gdGhpcy5nYW1lU3RhcnQoZSkpO1xuICAgIH1cblxuICAgIGdhbWVTdGFydChlKXtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLmdPTG9vcCA9IHRydWU7XG4gICAgICAgIGlmKGUud2hpY2ggPT09IDEzIHx8IGUua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgICAgIHRoaXMudGhlbWVTb25nLnBsYXkoKTtcbiAgICAgICAgICAgIHRoaXMuaW5HYW1lID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuYmcgPSBcIiM0ODYzOWNcIlxuICAgICAgICAgICAgdGhpcy5kZWFkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnNjb3JlID0gMDtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgR2FtZSBmcm9tICcuL2dhbWUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lVmlldyB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBjdHgpIHtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmdhbWUgPSBuZXcgR2FtZSh0aGlzLmNhbnZhcywgdGhpcy5jdHgpO1xuICAgIH1cblxuICAgIFxuXG5cbiAgICBhbmltYXRlKCkge1xuICAgICAgICB0aGlzLmdhbWUuaW5pdCgpO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlLmJpbmQodGhpcykpO1xuICAgIH1cbn0iLCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FwIHtcbiAgICBjb25zdHJ1Y3RvcihjdHgsIHggLCB5LCByYWRpdXMsIGFuZ2xlLCByb3RhdGlvbiwgdGltZSl7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLnJhZGl1cyA9IHJhZGl1czsgXG4gICAgICAgIHRoaXMucm90YXRpb24gPSByb3RhdGlvbjtcbiAgICAgICAgdGhpcy5hbmdsZSA9IGFuZ2xlO1xuICAgICAgICB0aGlzLnBhcnRpYWxDaXJjbGVBbmdsZSA9IDIgKiBNYXRoLlBJIC0gMS4yO1xuICAgIH1cblxuICAgIGRyYXcoKXtcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4Lmdsb2JhbEFscGhhID0gMC4wO1xuICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSA4O1xuICAgICAgICB0aGlzLmN0eC5hcmModGhpcy54LCB0aGlzLnksIHRoaXMucmFkaXVzLCB0aGlzLmFuZ2xlLCB0aGlzLnBhcnRpYWxDaXJjbGVBbmdsZSArIHRoaXMuYW5nbGUsIHRydWUpO1xuICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4Lmdsb2JhbEFscGhhID0gMS4wO1xuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMucmFkaXVzID4gMzApIHtcbiAgICAgICAgICAgIHRoaXMucmFkaXVzIC09IDM7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kcmF3KCk7XG4gICAgfVxuXG4gICAgZ2V0UG9zaXRpb24oKXtcbiAgICAgICBjb25zdCBwb3NpdGlvbiA9IHtcbiAgICAgICAgICAgc3RhcnQ6IHRoaXMuYW5nbGUsXG4gICAgICAgICAgIGVuZDogdGhpcy5wYXJ0aWFsQ2lyY2xlQW5nbGUgKyB0aGlzLmFuZ2xlLFxuICAgICAgIH1cbiAgICAgICByZXR1cm4gcG9zaXRpb247XG4gICAgfVxuXG4gICAgZ2V0UG9pbnQoYzEsIGMyLCByYWRpdXMsIGFuZ2xlKSB7XG4gICAgICAgIHJldHVybiBbYzEgKyBNYXRoLmNvcyhhbmdsZSkgKiByYWRpdXMsIGMyICsgTWF0aC5zaW4oYW5nbGUpICogcmFkaXVzXTtcbiAgICB9XG59IiwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhleGFnb257XG4gICAgY29uc3RydWN0b3IoY3R4LCB4LCB5LCBkaXN0YW5jZSl7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLmRpc3RhbmNlID0gZGlzdGFuY2U7XG4gICAgICAgIHRoaXMubnVtU2lkZXMgPSA2O1xuICAgICAgICB0aGlzLmFuZ2xlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMzYwKTtcbiAgICB9XG5cbiAgICBkcmF3KCl7XG4gICAgICAgIGNvbnN0IGN4ID0gMTAwMCArIHRoaXMuZGlzdGFuY2U7XG4gICAgICAgIGNvbnN0IGN5ID0gNjAwICsgdGhpcy5kaXN0YW5jZTtcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4LnNhdmUoKTtcbiAgICAgICAgdGhpcy5jdHgudHJhbnNsYXRlKHRoaXMueCwgdGhpcy55KTtcbiAgICAgICAgdGhpcy5jdHgucm90YXRlKCh0aGlzLmFuZ2xlKSAqIE1hdGguUEkgLyAxODApO1xuICAgICAgICB0aGlzLmN0eC50cmFuc2xhdGUoLXRoaXMueCwgLXRoaXMueSk7XG4gICAgICAgIHRoaXMuY3R4Lm1vdmVUbyh0aGlzLnggKyB0aGlzLmRpc3RhbmNlICogTWF0aC5jb3MoMCksIHRoaXMueSArIHRoaXMuZGlzdGFuY2UgKiBNYXRoLnNpbigwKSk7XG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gXCIjMzg4Njk3XCI7XG4gICAgICAgIGZvcihsZXQgaSA9IDE7IGkgPCB0aGlzLm51bVNpZGVzOyBpKyspe1xuICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKHRoaXMueCArIHRoaXMuZGlzdGFuY2UgKiBNYXRoLmNvcyhpICogMiAqIE1hdGguUEkgLyB0aGlzLm51bVNpZGVzKSwgdGhpcy55ICsgdGhpcy5kaXN0YW5jZSAqIE1hdGguc2luKGkgKiAyICogTWF0aC5QSSAvIHRoaXMubnVtU2lkZXMpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDIwO1xuICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcbiAgICAgICAgdGhpcy5jdHgucmVzdG9yZSgpO1xuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgXG4gICAgICAgIC8vIGNvbnN0IHN0YXJ0ID0gWyh0aGlzLnggKyB0aGlzLmRpc3RhbmNlICogTWF0aC5jb3MoNyAqIDIgKiBNYXRoLlBJIC8gdGhpcy5udW1TaWRlcyksICh0aGlzLnkgKyB0aGlzLmRpc3RhbmNlICogTWF0aC5zaW4oNyAqIDIgKiBNYXRoLlBJIC8gdGhpcy5udW1TaWRlcykpKV07XG4gICAgfVxuXG4gICAgdXBkYXRlKCl7XG4gICAgICAgIHRoaXMuZGlzdGFuY2UgLT0gMztcbiAgICAgICAgdGhpcy5kcmF3KCk7XG4gICAgfVxuXG4gICAgXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGN0eCkge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuc2l6ZSA9IDU7XG4gICAgICAgIHRoaXMucmFkaXVzID0gNTU7XG4gICAgICAgIHRoaXMuc3BlZWQgPSA3O1xuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IDA7XG4gICAgICAgIHRoaXMuYW5nbGUgPSAzMDtcbiAgICAgICAgdGhpcy5wbGF5ZXJQb3MgPSBcImxlZnRcIjtcbiAgICAgICAgdGhpcy5kcmF3ID0gdGhpcy5kcmF3LmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgZHJhdygpIHtcbiAgICAgICBcbiAgICAgICAgY29uc3QgZHggPSAodGhpcy5jYW52YXMud2lkdGggLyAyKSArICgodGhpcy5yYWRpdXMpICogTWF0aC5jb3ModGhpcy5hbmdsZSAqIE1hdGguUEkgLyAxODApKTtcbiAgICAgICAgY29uc3QgZHkgPSAodGhpcy5jYW52YXMuaGVpZ2h0IC8gMikgKyAoKHRoaXMucmFkaXVzKSAqIE1hdGguc2luKHRoaXMuYW5nbGUgKiBNYXRoLlBJIC8gMTgwKSk7XG4gICAgICAgIHRoaXMuYW5nbGUgPSB0aGlzLmFuZ2xlICsgKHRoaXMuZGlyZWN0aW9uICogdGhpcy5zcGVlZCk7XG5cbiAgICAgICAgaWYodGhpcy5hbmdsZSA8IDApIHtcbiAgICAgICAgICAgIHRoaXMuYW5nbGUgPSAzNjAgLSB0aGlzLmFuZ2xlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYodGhpcy5hbmdsZSA+IDM2MCl7XG4gICAgICAgICAgICB0aGlzLmFuZ2xlICU9IDM2MDtcbiAgICAgICAgfVxuICAgICAgICAvLyB0aGlzLmN0eC5zYXZlKCk7XG4gICAgICAgIHRoaXMuY3R4LnRyYW5zbGF0ZShkeCwgZHkpO1xuICAgICAgICB0aGlzLmN0eC5yb3RhdGUodGhpcy5hbmdsZSAqIE1hdGguUEkgLyAxODApO1xuICAgICAgICAvLyB0aGlzLmN0eC5yZXN0b3JlKCk7XG4gICAgICAgIHRoaXMuY3R4LnRyYW5zbGF0ZSgtZHgsIC1keSk7XG5cbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgdGhpcy5jdHgubW92ZVRvKGR4IC0gdGhpcy5zaXplLCBkeSAtIHRoaXMuc2l6ZSk7XG4gICAgICAgIHRoaXMuY3R4LmxpbmVUbyhkeCArIHRoaXMuc2l6ZSwgZHkpO1xuICAgICAgICB0aGlzLmN0eC5saW5lVG8oZHggLSB0aGlzLnNpemUsIGR5ICsgdGhpcy5zaXplKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgICAgICB0aGlzLmN0eC50cmFuc2xhdGUoZHgsIGR5KTtcbiAgICAgICAgdGhpcy5jdHgucm90YXRlKC10aGlzLmFuZ2xlICogTWF0aC5QSSAvIDE4MCk7XG4gICAgICAgIHRoaXMuY3R4LnRyYW5zbGF0ZSgtZHgsIC1keSk7XG5cbiAgICB9XG4gICAgaGFuZGxlUHJlc3MoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHN3aXRjaCAoZS5rZXkpIHtcbiAgICAgICAgICAgIGNhc2UgJ0Fycm93TGVmdCc6XG4gICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSAtMTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0Fycm93UmlnaHQnOlxuICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uID0gMTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZUtleVVwKGUpe1xuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IDA7XG4gICAgfVxuXG4gICAgZ2V0UG9zaXRpb24oKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuYW5nbGU7XG4gICAgfVxufVxuXG4iLCJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNvdW5kIHtcbiAgICBjb25zdHJ1Y3RvcihzcmMpe1xuICAgICAgICB0aGlzLnNvdW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImF1ZGlvXCIpO1xuICAgICAgICB0aGlzLnNvdW5kLnNyYyA9IHNyYztcbiAgICAgICAgdGhpcy5zb3VuZC5zZXRBdHRyaWJ1dGUoXCJwcmVsb2FkXCIsIFwiYXV0b1wiKTtcbiAgICAgICAgdGhpcy5zb3VuZC5zZXRBdHRyaWJ1dGUoXCJjb250cm9sc1wiLCBcIm5vbmVcIik7XG4gICAgICAgIHRoaXMuc291bmQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuc291bmQpO1xuICAgIH1cblxuICAgIHBsYXkoKXtcbiAgICAgICAgdGhpcy5zb3VuZC5wbGF5KCk7XG4gICAgfVxuXG4gICAgc3RvcCgpe1xuICAgICAgICB0aGlzLnNvdW5kLnBhdXNlKCk7XG4gICAgICAgIHRoaXMuc291bmQuY3VycmVudFRpbWUgPSAwO1xuICAgIH1cbn1cbiIsImltcG9ydCBHYXAgZnJvbSBcIi4vZ2FwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdhbGwge1xuICAgIGNvbnN0cnVjdG9yKGN0eCwgeCwgeSwgcmFkaXVzLCBjb2xvciwgcm90YXRpb24pIHtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMucmFkaXVzID0gcmFkaXVzO1xuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgICAgIHRoaXMudGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICB0aGlzLmFuZ2xlID0gTWF0aC5yYW5kb20oKSAqICgyICogTWF0aC5QSSk7XG4gICAgICAgIHRoaXMucm90YXRpb24gPSByb3RhdGlvbjtcbiAgICAgICAgdGhpcy5lbmRBbmdsZSA9IDIgKiBNYXRoLlBJIC0gMS4yO1xuICAgICAgICB0aGlzLmdhcCA9IG5ldyBHYXAodGhpcy5jdHgsIHRoaXMueCwgdGhpcy55LCB0aGlzLnJhZGl1cywgdGhpcy5hbmdsZSwgdGhpcy5yb3RhdGlvbiwgdGhpcy50aW1lKTtcbiAgICB9XG5cbiAgICBkcmF3KCl7XG4gICAgICAgIGNvbnN0IG5ld1RpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgbGV0IGRpZmYgPSBuZXdUaW1lIC0gdGhpcy50aW1lO1xuICAgICAgICB0aGlzLnRpbWUgPSBuZXdUaW1lO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gMTI7XG4gICAgICAgIHRoaXMuY3R4LmFyYyh0aGlzLngsIHRoaXMueSwgdGhpcy5yYWRpdXMsIHRoaXMuYW5nbGUsIHRoaXMuZW5kQW5nbGUgKyB0aGlzLmFuZ2xlLCBmYWxzZSk7XG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgICAgICB0aGlzLmFuZ2xlICs9IGRpZmYgKiB0aGlzLnJvdGF0aW9uO1xuICAgICAgICB0aGlzLmFuZ2xlICU9IDIgKiBNYXRoLlBJO1xuXG4gICAgICAgIHRoaXMuZ2FwLmFuZ2xlICs9IGRpZmYgKiB0aGlzLnJvdGF0aW9uO1xuICAgICAgICB0aGlzLmdhcC5hbmdsZSAlPSAyICogTWF0aC5QSTtcblxuICAgICAgICBpZiAodGhpcy5hbmdsZSA8IDApIHtcbiAgICAgICAgICAgIHRoaXMuYW5nbGUgPSAyICogTWF0aC5QSTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmFuZ2xlID4gMiAqIE1hdGguUEkpIHtcbiAgICAgICAgICAgIHRoaXMuYW5nbGUgJT0gMiAqIE1hdGguUEk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5nYXAuYW5nbGUgPCAwKSB7XG4gICAgICAgICAgICB0aGlzLmdhcC5hbmdsZSA9IDIgKiBNYXRoLlBJO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZ2FwLmFuZ2xlID4gMiAqIE1hdGguUEkpIHtcbiAgICAgICAgICAgIHRoaXMuZ2FwLmFuZ2xlICU9IDIgKiBNYXRoLlBJO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlKCl7XG4gICAgICAgIGlmKHRoaXMucmFkaXVzID4gMzApIHtcbiAgICAgICAgICAgIHRoaXMucmFkaXVzIC09IDM7XG4gICAgICAgICAgICB0aGlzLmdhcC5yYWRpdXMgLT0gMztcbiAgICAgICAgfSBcbiAgICAgICAgdGhpcy5nYXAuZHJhdygpO1xuICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICB9XG5cblxuICAgIHJldmVyc2UoKXtcbiAgICAgICAgaWYodGhpcy5yYWRpdXMgPT09IDI5MCl7XG4gICAgICAgICAgICB0aGlzLnJvdGF0aW9uICo9IC0xLjI7XG4gICAgICAgIH1cbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==