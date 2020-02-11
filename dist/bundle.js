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
            this.ctx.font = "20px Orbitron";
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
            if (this.walls.length > 0 && this.walls[0].distance < 30) {
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

            this.ctx.lineWidth = 30;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qYXZhc2NyaXB0L2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2phdmFzY3JpcHQvZ2FtZV92aWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9qYXZhc2NyaXB0L2dhcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvamF2YXNjcmlwdC9oZXhhZ29uLmpzIiwid2VicGFjazovLy8uL3NyYy9qYXZhc2NyaXB0L3BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvamF2YXNjcmlwdC9zb3VuZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvamF2YXNjcmlwdC93YWxsLmpzIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbnZhcyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwid2lkdGgiLCJoZWlnaHQiLCJjdHgiLCJnZXRDb250ZXh0IiwiZ2FtZVZpZXciLCJHYW1lVmlldyIsImdhbWUiLCJwbGF5ZXIiLCJoYW5kbGVQcmVzcyIsImUiLCJnYW1lU3RhcnQiLCJoYW5kbGVLZXlVcCIsImFuaW1hdGUiLCJESU1fWCIsIkRJTV9ZIiwiQ09MT1JfU0NIRU1FIiwiY29sb3JzIiwiR2FtZSIsIlBsYXllciIsIndhbGxzIiwidGltZXIiLCJzY29yZSIsImluR2FtZSIsImRlYWQiLCJiZyIsImhpZ2hTY29yZSIsInNwZWVkIiwidGhlbWVTb25nIiwiU291bmQiLCJnYW1lT3ZlclNvbmciLCJnT0xvb3AiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJyYW5kb21Db2xvciIsImdldEVsZW1lbnRCeUlkIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJiZWdpblBhdGgiLCJzdGFydFNjcmVlbiIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJydW4iLCJnYW1lT3ZlciIsIndhbGwiLCJIZXhhZ29uIiwicHVzaCIsInJhZGl1cyIsImluY3JlYXNlU3BlZWQiLCJtYXAiLCJmb3JFYWNoIiwicmV2ZXJzZSIsImZvbnQiLCJmaWxsVGV4dCIsImNsb3NlUGF0aCIsInRleHQiLCJ5IiwibWVhc3VyZW1lbnQiLCJtZWFzdXJlVGV4dCIsIm1lYXN1cmVtZW50d2lkdGgiLCJ4IiwiY2xlYXJSZWN0IiwiY2VudGVyWCIsImNlbnRlclkiLCJsaW5lV2lkdGgiLCJzdHJva2VTdHlsZSIsImFyYyIsIlBJIiwic3Ryb2tlIiwidXBkYXRlIiwiZHJhdyIsImRvV2FsbHNFeGlzdCIsInNob3dTY29yZSIsIndhbGxTcGFjZSIsInNldFRpbWVvdXQiLCJhZGRXYWxsIiwiZGlzdGFuY2UiLCJzaGlmdCIsImluY3JlYXNlRGlmZmljdWx0eSIsInVwZGF0ZVNjb3JlIiwiY2hhbmdlQkciLCJnYXAiLCJjb2xsaXNpb24iLCJnYXBQb3MiLCJnZXRQb3NpdGlvbiIsInBsYXllckFuZ2xlIiwicGxheWVyTGVmdCIsInNpbiIsImFuZ2xlIiwiZW5kQW5nbGUiLCJwYXJ0aWFsQ2lyY2xlQW5nbGUiLCJjb2xvciIsInRpdGxlIiwiZW50ZXIiLCJncmFkaWVudCIsImNyZWF0ZUxpbmVhckdyYWRpZW50IiwiYWRkQ29sb3JTdG9wIiwiZmlsbFN0eWxlIiwiY2VudGVyVGV4dCIsInN0b3AiLCJwbGF5IiwicHJldmVudERlZmF1bHQiLCJ3aGljaCIsImtleUNvZGUiLCJpbml0IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYmluZCIsIkdhcCIsInJvdGF0aW9uIiwidGltZSIsImdsb2JhbEFscGhhIiwicG9zaXRpb24iLCJzdGFydCIsImVuZCIsImMxIiwiYzIiLCJjb3MiLCJudW1TaWRlcyIsImN4IiwiY3kiLCJzYXZlIiwidHJhbnNsYXRlIiwicm90YXRlIiwibW92ZVRvIiwiaSIsImxpbmVUbyIsInJlc3RvcmUiLCJzaXplIiwiZGlyZWN0aW9uIiwicGxheWVyUG9zIiwiZHgiLCJkeSIsImZpbGwiLCJrZXkiLCJzcmMiLCJzb3VuZCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJkaXNwbGF5IiwiYm9keSIsImFwcGVuZENoaWxkIiwicGF1c2UiLCJjdXJyZW50VGltZSIsIldhbGwiLCJEYXRlIiwiZ2V0VGltZSIsIm5ld1RpbWUiLCJkaWZmIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQUEsU0FBU0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQVk7QUFDdEQsUUFBTUMsU0FBU0YsU0FBU0csb0JBQVQsQ0FBOEIsUUFBOUIsRUFBd0MsQ0FBeEMsQ0FBZjtBQUNBRCxXQUFPRSxLQUFQLEdBQWUsSUFBZjtBQUNBRixXQUFPRyxNQUFQLEdBQWdCLEdBQWhCOztBQUVBLFFBQU1DLE1BQU1KLE9BQU9LLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBWjs7QUFHQSxRQUFNQyxXQUFXLElBQUlDLG1CQUFKLENBQWFQLE1BQWIsRUFBcUJJ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QUFJLEtBQUtjLEdBQUwsQ0FBU08sS0FBVCxHQUFpQixJQUFJekQsS0FBS29DLEVBQTlCLEVBQWtDO0FBQzlCLHFCQUFLYyxHQUFMLENBQVNPLEtBQVQsSUFBa0IsSUFBSXpELEtBQUtvQyxFQUEzQjtBQUNIO0FBQ0o7OztpQ0FFTztBQUNKLGdCQUFHLEtBQUtwQixNQUFMLEdBQWMsRUFBakIsRUFBcUI7QUFDakIscUJBQUtBLE1BQUwsSUFBZSxDQUFmO0FBQ0EscUJBQUtrQyxHQUFMLENBQVNsQyxNQUFULElBQW1CLENBQW5CO0FBQ0g7QUFDRCxpQkFBS2tDLEdBQUwsQ0FBU1gsSUFBVDtBQUNBLGlCQUFLQSxJQUFMO0FBQ0g7OztrQ0FHUTtBQUNMLGdCQUFHLEtBQUt2QixNQUFMLEtBQWdCLEdBQW5CLEVBQXVCO0FBQ25CLHFCQUFLNkQsUUFBTCxJQUFpQixDQUFDLEdBQWxCO0FBQ0g7QUFDSjs7Ozs7O2tCQS9EZ0JtQyxJIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFBsYXllciBmcm9tICcuL2phdmFzY3JpcHQvcGxheWVyJztcbmltcG9ydCBHYW1lIGZyb20gJy4vamF2YXNjcmlwdC9nYW1lJztcbmltcG9ydCBHYW1lVmlldyBmcm9tICcuL2phdmFzY3JpcHQvZ2FtZV92aWV3JztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiY2FudmFzXCIpWzBdO1xuICAgIGNhbnZhcy53aWR0aCA9IDEwMDA7XG4gICAgY2FudmFzLmhlaWdodCA9IDYwMDtcblxuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cblxuICAgIGNvbnN0IGdhbWVWaWV3ID0gbmV3IEdhbWVWaWV3KGNhbnZhcywgY3R4KTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZSA9PiBnYW1lVmlldy5nYW1lLnBsYXllci5oYW5kbGVQcmVzcyhlKSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGUgPT4gZ2FtZVZpZXcuZ2FtZS5nYW1lU3RhcnQoZSkpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZSA9PiBnYW1lVmlldy5nYW1lLnBsYXllci5oYW5kbGVLZXlVcChlKSk7XG4gICAgZ2FtZVZpZXcuYW5pbWF0ZSgpO1xufSk7XG5cblxuXG4iLCJpbXBvcnQgUGxheWVyIGZyb20gXCIuL3BsYXllclwiO1xuaW1wb3J0IFdhbGwgZnJvbSBcIi4vd2FsbFwiO1xuaW1wb3J0IEhleGFnb24gZnJvbSAnLi9oZXhhZ29uJztcbmltcG9ydCBTb3VuZCBmcm9tICcuL3NvdW5kJztcbmNvbnN0IERJTV9YID0gMTAwMDtcbmNvbnN0IERJTV9ZID0gNjAwO1xuY29uc3QgQ09MT1JfU0NIRU1FID0gW1wiI2ZmY2UwMFwiLCBcImM5ZmYwMFwiLCBcIiM0OWZmMDBcIiwgXCIjMDBmZmVjXCIsIFwiIzAwZDJmZlwiXVxuY29uc3QgY29sb3JzID0gW1xuICAgIFwiIzAwYmRmZlwiLFxuICAgIFwiIzRkMzljZVwiLFxuICAgIFwiIzA4OGVmZlwiLFxuXTtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY3R4KSB7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyKHRoaXMuY2FudmFzLCB0aGlzLmN0eClcbiAgICAgICAgdGhpcy53YWxscyA9IFtdO1xuICAgICAgICB0aGlzLnRpbWVyID0gbnVsbDtcbiAgICAgICAgdGhpcy5zY29yZSA9IDA7XG4gICAgICAgIHRoaXMuaW5HYW1lID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZGVhZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmJnID0gXCIjNDg2MzljXCI7XG4gICAgICAgIHRoaXMuaGlnaFNjb3JlID0gMDtcbiAgICAgICAgdGhpcy5zcGVlZCA9IFstLjAwMSwgLjAwMV07XG4gICAgICAgIHRoaXMudGhlbWVTb25nID0gbmV3IFNvdW5kKFwiZ2FtZXRoZW1lLm1wM1wiKTtcbiAgICAgICAgdGhpcy5nYW1lT3ZlclNvbmcgPSBuZXcgU291bmQoXCJnYW1lT3Zlci5tcDNcIik7XG4gICAgICAgIHRoaXMuZ09Mb29wID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByYW5kb21Db2xvcihjb2xvcnMpIHtcbiAgICAgICAgcmV0dXJuIGNvbG9yc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjb2xvcnMubGVuZ3RoKV07XG4gICAgfVxuXG4gICAgY2hhbmdlQkcoKSB7XG4gICAgICAgIGNvbnN0IHJhbmRvbUNvbG9yID0gQ09MT1JfU0NIRU1FW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIENPTE9SX1NDSEVNRS5sZW5ndGgpXTtcbiAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUNhbnZhc1wiKTtcbiAgICAgICAgdGhpcy5iZyA9IGNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSByYW5kb21Db2xvcjtcbiAgICB9XG5cbiAgICByb3RhdGUoKXtcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKClcbiAgICB9XG5cbiAgICBpbml0KCl7XG4gICAgICAgIGlmKCF0aGlzLmluR2FtZSl7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0U2NyZWVuKCk7XG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmluR2FtZSAmJiAhdGhpcy5kZWFkKXtcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBlID0+IHRoaXMuZ2FtZVN0YXJ0KGUpKTtcbiAgICAgICAgICAgIHRoaXMucnVuKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmdhbWVPdmVyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGFkZFdhbGwoKXtcbiAgICAgICAgY29uc3Qgd2FsbCA9IG5ldyBIZXhhZ29uKHRoaXMuY3R4LCBESU1fWCAvIDIsIERJTV9ZIC8gMiwgODAwKTtcbiAgICAgICAgdGhpcy53YWxscy5wdXNoKHdhbGwpO1xuICAgICAgICB0aGlzLnRpbWVyID0gbnVsbDtcbiAgICB9XG5cbiAgICBpbmNyZWFzZURpZmZpY3VsdHkoKXtcbiAgICAgICAgbGV0IHJhZGl1cztcbiAgICAgICAgaWYodGhpcy53YWxscy5sZW5ndGgpIHsgcmFkaXVzID0gdGhpcy53YWxsc1swXS5yYWRpdXN9XG4gICAgICAgIGlmKHRoaXMuc2NvcmUgPT09IDEwICYmIHJhZGl1cyA9PT0gNDcpe1xuICAgICAgICAgICAgdGhpcy5pbmNyZWFzZVNwZWVkKHRoaXMud2FsbHMpO1xuICAgICAgICAgICAgXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLnNjb3JlID09PSAyMCAmJiByYWRpdXMgPT09IDQ3KXtcbiAgICAgICAgICAgIHRoaXMuaW5jcmVhc2VTcGVlZCh0aGlzLndhbGxzKTtcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuc2NvcmUgPT09IDMwICYmIHJhZGl1cyA9PT0gNDcpe1xuICAgICAgICAgICAgdGhpcy5pbmNyZWFzZVNwZWVkKHRoaXMud2FsbHMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYodGhpcy5zY29yZSA9PT0gNDAgJiYgcmFkaXVzID09PSA0Nyl7XG4gICAgICAgICAgICB0aGlzLmluY3JlYXNlU3BlZWQodGhpcy53YWxscyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5zY29yZSA9PT0gNTAgJiYgcmFkaXVzID09PSA0Nykge1xuICAgICAgICAgICAgdGhpcy5pbmNyZWFzZVNwZWVkKHRoaXMud2FsbHMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuc2NvcmUgPT09IDYwICYmIHJhZGl1cyA9PT0gNDcpIHtcbiAgICAgICAgICAgIHRoaXMuaW5jcmVhc2VTcGVlZCh0aGlzLndhbGxzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLnNjb3JlID09PSA3MCAmJiByYWRpdXMgPT09IDQ3KSB7XG4gICAgICAgICAgICB0aGlzLmluY3JlYXNlU3BlZWQodGhpcy53YWxscyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5zY29yZSA9PT0gODAgJiYgcmFkaXVzID09PSA0Nyl7XG4gICAgICAgICAgICB0aGlzLnNwZWVkID0gdGhpcy5zcGVlZC5tYXAoc3BlZWQgPT4gc3BlZWQgKiAxMCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5zY29yZSA+IDMwKXtcbiAgICAgICAgICAgIHRoaXMud2FsbHMuZm9yRWFjaCh3YWxsID0+IHtcbiAgICAgICAgICAgICAgICB3YWxsLnJldmVyc2UoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIH1cbiAgICBcblxuICAgIGluY3JlYXNlU3BlZWQod2FsbHMpe1xuICAgICAgICB0aGlzLnNwZWVkID0gdGhpcy5zcGVlZC5tYXAoc3BlZWQgPT4gc3BlZWQgKiAxLjIpO1xuICAgIH1cblxuICAgIGFsbFdhbGxzKCl7XG4gICAgICAgIHJldHVybiB0aGlzLndhbGxzO1xuICAgIH1cblxuICAgIHNob3dTY29yZSgpe1xuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiMjBweCBPcmJpdHJvblwiO1xuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIlNjb3JlOiBcIiArIHRoaXMuc2NvcmUsIHRoaXMuY2FudmFzLndpZHRoIC0gMTAwLCAzMCk7XG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuICAgIH1cblxuICAgIGNlbnRlclRleHQodGV4dCwgeSl7XG4gICAgICAgIGNvbnN0IG1lYXN1cmVtZW50ID0gdGhpcy5jdHgubWVhc3VyZVRleHQodGV4dCk7XG4gICAgICAgIGNvbnN0IG1lYXN1cmVtZW50d2lkdGggPSAodGhpcy5jYW52YXMud2lkdGggLSBtZWFzdXJlbWVudC53aWR0aCkgLyAyO1xuICAgICAgICBjb25zdCB4ID0gKHRoaXMuY2FudmFzLndpZHRoIC0gbWVhc3VyZW1lbnQud2lkdGgpIC8gMjtcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQodGV4dCwgeCwgeSk7XG4gICAgfVxuICAgIFxuICAgIGRyYXcoKSB7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCBESU1fWCwgRElNX1kpO1xuICAgICAgICBjb25zdCBjZW50ZXJYID0gRElNX1ggLyAyO1xuICAgICAgICBjb25zdCBjZW50ZXJZID0gRElNX1kgLyAyO1xuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gMTtcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgIHRoaXMuY3R4LmFyYyhjZW50ZXJYLCBjZW50ZXJZLCAzMCwgMCwgMiAqIE1hdGguUEksIGZhbHNlKTtcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICB0aGlzLndhbGxzLmZvckVhY2god2FsbCA9PiB7XG4gICAgICAgICAgICB3YWxsLnVwZGF0ZSgpO1xuICAgICAgICAgICAgLy8gd2FsbC5nYXAudXBkYXRlKCk7XG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMucGxheWVyLmRyYXcoNSk7XG4gICAgXG4gICAgICAgIGNvbnN0IGRvV2FsbHNFeGlzdCA9IHRoaXMud2FsbHMubGVuZ3RoID4gMDtcbiAgICAgICAgLy8gaWYoZG9XYWxsc0V4aXN0KXtcblxuICAgICAgICAgICAgLy9UT0RPOiB3ZSBjaGVjayBmb3IgY29sbGlzaW9uIHdoZW4gdGhlIHdhbGwgaXMgbGl0ZXJhbGx5IG9udG9wIG9mIHRoZSBwbGF5ZXJcbiAgICAgICAgICAgIC8vIG1heWJlIGZpbmQgYSBzd2VldCBzcG90IHdpdGggdGhpcy5wbGF5ZXIucmFkaXVzICsgMSBvciBzb21ldGhpbmcgY2F1c2UgdGhlIHRyaWFuZ2xlIGhhc1xuICAgICAgICAgICAgLy8gYSBzaXplIHRvIGl0LlxuICAgICAgICAgICAgLy8gY29uc3QgaXNXYWxsT25QbGF5ZXIgPSB0aGlzLndhbGxzWzBdLnJhZGl1cyA8PSB0aGlzLnBsYXllci5yYWRpdXMgKyB0aGlzLnBsYXllci5zaXplICsgNiAmJiB0aGlzLndhbGxzWzBdLnJhZGl1cyA+PSB0aGlzLnBsYXllci5yYWRpdXM7XG4gICAgICAgICAgICAvLyBpZiAoaXNXYWxsT25QbGF5ZXIpe1xuICAgICAgICAgICAgLy8gICAgIGlmKCF0aGlzLmNoZWNrQ29sbGlzaW9uKHRoaXMucGxheWVyLCB0aGlzLndhbGxzWzBdLmdhcCkpe1xuICAgICAgICAgICAgLy8gICAgICAgICB0aGlzLmRlYWQgPSB0cnVlO1xuICAgICAgICAgICAgLy8gICAgIH07XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy53YWxsc1swXS5hbmdsZSk7XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgIC8vIH1cbiAgICAgICAgdGhpcy5zaG93U2NvcmUoKTtcbiAgICAgICAgLy8gdGhpcy5jdHguc3Ryb2tlKCk7XG4gICAgICAgIC8vIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuICAgIH1cbiAgICBcbiAgICBydW4oKXtcbiAgICAgICAgY29uc3Qgd2FsbFNwYWNlID0gMTAwMDtcbiAgICAgICAgaWYodGhpcy53YWxscy5sZW5ndGggPCA4ICYmIHRoaXMudGltZXIgPT09IG51bGwpe1xuICAgICAgICAgICAgdGhpcy50aW1lciA9IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5hZGRXYWxsKCksIHdhbGxTcGFjZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMud2FsbHMubGVuZ3RoID4gMCAmJiB0aGlzLndhbGxzWzBdLmRpc3RhbmNlIDwgMzApIHsgdGhpcy53YWxscy5zaGlmdCgpfVxuICAgICAgICB0aGlzLmluY3JlYXNlRGlmZmljdWx0eSgpO1xuICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICAgICAgdGhpcy51cGRhdGVTY29yZSgpO1xuICAgICAgICB9XG5cbiAgICB1cGRhdGVTY29yZSgpe1xuICAgICAgICBpZih0aGlzLndhbGxzLmxlbmd0aCl7XG4gICAgICAgICAgICBpZiAodGhpcy53YWxsc1swXS5kaXN0YW5jZSA9PT0gMzIpIHsgXG4gICAgICAgICAgICAgICAgdGhpcy5zY29yZSArPSAxO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlQkcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG5cbiAgICBjaGVja0NvbGxpc2lvbihwbGF5ZXIsIGdhcCl7XG4gICAgICAgIGxldCBjb2xsaXNpb24gPSBmYWxzZTtcbiAgICAgICAgbGV0IGdhcFBvcyA9IGdhcC5nZXRQb3NpdGlvbigpO1xuICAgICAgICBsZXQgcGxheWVyQW5nbGUgPSBwbGF5ZXIuZ2V0UG9zaXRpb24oKSAqIE1hdGguUEkgLyAxODA7XG4gICAgICAgIGxldCBwbGF5ZXJMZWZ0ID0gKHRoaXMuY2FudmFzLmhlaWdodCAvIDIpICsgKCh0aGlzLnJhZGl1cykgKiBNYXRoLnNpbih0aGlzLmFuZ2xlICogTWF0aC5QSSAvIDE4MCkpO1xuICAgICAgICBsZXQgZW5kQW5nbGUgPSBnYXAuYW5nbGUgLSAoMiAqIE1hdGguUEkgLSBnYXAucGFydGlhbENpcmNsZUFuZ2xlKTtcbiAgICAgICAgaWYgKGVuZEFuZ2xlIDwgMCkge1xuICAgICAgICAgICAgZW5kQW5nbGUgKz0gMipNYXRoLlBJO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYocGxheWVyUG9zID4gZ2FwUG9zW3N0YXJ0XSAmJiBwbGF5ZXJQb3MgPCBnYXBQb3NbZW5kXSkgY29sbGlzaW9uID0gdHJ1ZTtcblxuICAgICAgICAvLyB0aGUgY2FzZSB3aGVuIHRoZSBnYXAgc3RyYWRkbGVzIHRoZSBob3Jpem9udGFsXG5cbiAgICAgICAgaWYgKGdhcC5hbmdsZSA8IGVuZEFuZ2xlKXtcbiAgICAgICAgICAgIGlmICgocGxheWVyQW5nbGUgID4gZW5kQW5nbGUgXG4gICAgICAgICAgICAgICAgJiYgcGxheWVyQW5nbGUgPCAyICogTWF0aC5QSSkgXG4gICAgICAgICAgICAgICAgfHwgcGxheWVyQW5nbGUgPCBnYXAuYW5nbGUgJiYgcGxheWVyQW5nbGUgPiAwKXtcbiAgICAgICAgICAgICAgICBjb2xsaXNpb24gPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBsYXllckFuZ2xlIDwgZ2FwLmFuZ2xlICYmXG4gICAgICAgICAgICBwbGF5ZXJBbmdsZSA+IGVuZEFuZ2xlKSB7XG4gICAgICAgICAgICAgICAgY29sbGlzaW9uID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICBpZihjb2xsaXNpb24gPT09IHRydWUpe1xuICAgICAgICAgICAgLy8gdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAnYmx1ZSdcbiAgICAgICAgICAgIC8vIHRoaXMuY3R4LnN0cm9rZVJlY3QoRElNX1ggLyAyIC0gMjUsIERJTV9ZIC8gMiAtIDI1LCA1MCwgNTApXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbGxpc2lvbjtcbiAgICB9XG5cbiAgICBzdGFydFNjcmVlbigpe1xuICAgICAgICBsZXQgeSA9IHRoaXMuY2FudmFzLmhlaWdodCAvIDI7XG4gICAgICAgIGxldCBjb2xvciA9IFwiI0NDMjkzMzZcIjtcbiAgICAgICAgbGV0IHRpdGxlID0gXCJFc2NhcGUgdGhlIFNoYXBlXCI7XG4gICAgICAgIGxldCBlbnRlciA9IFwiUHJlc3MgRW50ZXJcIjtcbiAgICAgICAgY29uc3QgZ3JhZGllbnQgPSB0aGlzLmN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgMCk7XG4gICAgICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcChcIjBcIiwgXCIjQzg3M0M4XCIpO1xuICAgICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoXCIwLjVcIiwgXCIjOTFEN0ExXCIpO1xuICAgICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoXCIxLjBcIiwgXCIjREREODMwXCIpO1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgRElNX1gsIERJTV9ZKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gZ3JhZGllbnQ7XG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcIjQ4cHggT3JiaXRyb25cIjtcbiAgICAgICAgdGhpcy5jZW50ZXJUZXh0KHRpdGxlLCB5KTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgICAgICB0aGlzLmN0eC5mb250ID0gXCIyNHB4IE9yYml0cm9uXCI7XG4gICAgICAgIHRoaXMuY2VudGVyVGV4dChlbnRlciwgeSArIDMwKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGUgPT4gdGhpcy5nYW1lU3RhcnQoZSkpO1xuICAgIH1cblxuICAgIGdhbWVPdmVyKCkge1xuICAgICAgICBpZiAodGhpcy5zY29yZSA+IHRoaXMuaGlnaFNjb3JlKSB7XG4gICAgICAgICAgICB0aGlzLmhpZ2hTY29yZSA9IHRoaXMuc2NvcmU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50aGVtZVNvbmcuc3RvcCgpO1xuICAgICAgICBpZiAodGhpcy5nT0xvb3ApIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXJTb25nLnBsYXkoKTtcbiAgICAgICAgICAgIHRoaXMuZ09Mb29wID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUNhbnZhc1wiKTtcbiAgICAgICAgY2FudmFzLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IChcIiM0ODYzOWNcIik7XG4gICAgICAgIGNvbnN0IGdyYWRpZW50ID0gdGhpcy5jdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIDApO1xuICAgICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoXCIwXCIsIFwiIzI2MjIyNFwiKTtcbiAgICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKFwiMC41XCIsIFwiI0YxREYwQ1wiKTtcbiAgICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKFwiMS4wXCIsIFwiI0Y3MDQyQ1wiKTtcbiAgICAgICAgdGhpcy53YWxscyA9IFtdO1xuICAgICAgICB0aGlzLnNwZWVkID0gWy0uMDAxLCAuMDAxXTtcbiAgICAgICAgbGV0IHkgPSB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyO1xuICAgICAgICBsZXQgdGl0bGUgPSBcIkdhbWUgT3ZlclwiO1xuICAgICAgICBsZXQgZW50ZXIgPSBcIlByZXNzIGVudGVyIHRvIHRyeSBhZ2FpblwiO1xuICAgICAgICBsZXQgc2NvcmUgPSBgU2NvcmU6ICR7dGhpcy5zY29yZX1gO1xuICAgICAgICBsZXQgaGlnaFNjb3JlID0gYEhpZ2ggU2NvcmU6ICR7dGhpcy5oaWdoU2NvcmV9YDtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIERJTV9YLCBESU1fWSk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IGdyYWRpZW50O1xuICAgICAgICB0aGlzLmN0eC5mb250ID0gXCI0OHB4IE9yYml0cm9uXCI7XG4gICAgICAgIHRoaXMuY2VudGVyVGV4dCh0aXRsZSwgeSArIDYwKTtcblxuICAgICAgICB0aGlzLmN0eC5mb250ID0gXCI0OHB4IE9yYml0cm9uXCI7XG4gICAgICAgIHRoaXMuY2VudGVyVGV4dChoaWdoU2NvcmUsIHkgLSAxMjApO1xuICAgICAgICB0aGlzLmNlbnRlclRleHQoc2NvcmUsIHkgLSA1MCk7XG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcIjI0cHggT3JiaXRyb25cIjtcbiAgICAgICAgdGhpcy5jZW50ZXJUZXh0KGVudGVyLCB5ICsgMTAwKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGUgPT4gdGhpcy5nYW1lU3RhcnQoZSkpO1xuICAgIH1cblxuICAgIGdhbWVTdGFydChlKXtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLmdPTG9vcCA9IHRydWU7XG4gICAgICAgIGlmKGUud2hpY2ggPT09IDEzIHx8IGUua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgICAgIHRoaXMudGhlbWVTb25nLnBsYXkoKTtcbiAgICAgICAgICAgIHRoaXMuaW5HYW1lID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuYmcgPSBcIiM0ODYzOWNcIlxuICAgICAgICAgICAgdGhpcy5kZWFkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnNjb3JlID0gMDtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgR2FtZSBmcm9tICcuL2dhbWUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lVmlldyB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBjdHgpIHtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmdhbWUgPSBuZXcgR2FtZSh0aGlzLmNhbnZhcywgdGhpcy5jdHgpO1xuICAgIH1cblxuICAgIFxuXG5cbiAgICBhbmltYXRlKCkge1xuICAgICAgICB0aGlzLmdhbWUuaW5pdCgpO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlLmJpbmQodGhpcykpO1xuICAgIH1cbn0iLCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FwIHtcbiAgICBjb25zdHJ1Y3RvcihjdHgsIHggLCB5LCByYWRpdXMsIGFuZ2xlLCByb3RhdGlvbiwgdGltZSl7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLnJhZGl1cyA9IHJhZGl1czsgXG4gICAgICAgIHRoaXMucm90YXRpb24gPSByb3RhdGlvbjtcbiAgICAgICAgdGhpcy5hbmdsZSA9IGFuZ2xlO1xuICAgICAgICB0aGlzLnBhcnRpYWxDaXJjbGVBbmdsZSA9IDIgKiBNYXRoLlBJIC0gMS4yO1xuICAgIH1cblxuICAgIGRyYXcoKXtcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4Lmdsb2JhbEFscGhhID0gMC4wO1xuICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSA4O1xuICAgICAgICB0aGlzLmN0eC5hcmModGhpcy54LCB0aGlzLnksIHRoaXMucmFkaXVzLCB0aGlzLmFuZ2xlLCB0aGlzLnBhcnRpYWxDaXJjbGVBbmdsZSArIHRoaXMuYW5nbGUsIHRydWUpO1xuICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4Lmdsb2JhbEFscGhhID0gMS4wO1xuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMucmFkaXVzID4gMzApIHtcbiAgICAgICAgICAgIHRoaXMucmFkaXVzIC09IDM7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kcmF3KCk7XG4gICAgfVxuXG4gICAgZ2V0UG9zaXRpb24oKXtcbiAgICAgICBjb25zdCBwb3NpdGlvbiA9IHtcbiAgICAgICAgICAgc3RhcnQ6IHRoaXMuYW5nbGUsXG4gICAgICAgICAgIGVuZDogdGhpcy5wYXJ0aWFsQ2lyY2xlQW5nbGUgKyB0aGlzLmFuZ2xlLFxuICAgICAgIH1cbiAgICAgICByZXR1cm4gcG9zaXRpb247XG4gICAgfVxuXG4gICAgZ2V0UG9pbnQoYzEsIGMyLCByYWRpdXMsIGFuZ2xlKSB7XG4gICAgICAgIHJldHVybiBbYzEgKyBNYXRoLmNvcyhhbmdsZSkgKiByYWRpdXMsIGMyICsgTWF0aC5zaW4oYW5nbGUpICogcmFkaXVzXTtcbiAgICB9XG59IiwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhleGFnb257XG4gICAgY29uc3RydWN0b3IoY3R4LCB4LCB5LCBkaXN0YW5jZSl7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLmRpc3RhbmNlID0gZGlzdGFuY2U7XG4gICAgICAgIHRoaXMubnVtU2lkZXMgPSA2O1xuICAgICAgICB0aGlzLmFuZ2xlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMzYwKTtcbiAgICB9XG5cbiAgICBkcmF3KCl7XG5cbiAgICAgICAgY29uc3QgY3ggPSAxMDAwICsgdGhpcy5kaXN0YW5jZTtcbiAgICAgICAgY29uc3QgY3kgPSA2MDAgKyB0aGlzLmRpc3RhbmNlO1xuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHguc2F2ZSgpO1xuICAgICAgICB0aGlzLmN0eC50cmFuc2xhdGUodGhpcy54LCB0aGlzLnkpO1xuICAgICAgICB0aGlzLmN0eC5yb3RhdGUoKHRoaXMuYW5nbGUpICogTWF0aC5QSSAvIDE4MCk7XG4gICAgICAgIHRoaXMuY3R4LnRyYW5zbGF0ZSgtdGhpcy54LCAtdGhpcy55KTtcbiAgICAgICAgdGhpcy5jdHgubW92ZVRvKHRoaXMueCArIHRoaXMuZGlzdGFuY2UgKiBNYXRoLmNvcygwKSwgdGhpcy55ICsgdGhpcy5kaXN0YW5jZSAqIE1hdGguc2luKDApKTtcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSBcIiMzODg2OTdcIjtcbiAgICAgICAgZm9yKGxldCBpID0gMTsgaSA8IHRoaXMubnVtU2lkZXM7IGkrKyl7XG4gICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8odGhpcy54ICsgdGhpcy5kaXN0YW5jZSAqIE1hdGguY29zKGkgKiAyICogTWF0aC5QSSAvIHRoaXMubnVtU2lkZXMpLCB0aGlzLnkgKyB0aGlzLmRpc3RhbmNlICogTWF0aC5zaW4oaSAqIDIgKiBNYXRoLlBJIC8gdGhpcy5udW1TaWRlcykpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gMzA7XG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuICAgICAgICB0aGlzLmN0eC5yZXN0b3JlKCk7XG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICBcbiAgICAgICAgLy8gY29uc3Qgc3RhcnQgPSBbKHRoaXMueCArIHRoaXMuZGlzdGFuY2UgKiBNYXRoLmNvcyg3ICogMiAqIE1hdGguUEkgLyB0aGlzLm51bVNpZGVzKSwgKHRoaXMueSArIHRoaXMuZGlzdGFuY2UgKiBNYXRoLnNpbig3ICogMiAqIE1hdGguUEkgLyB0aGlzLm51bVNpZGVzKSkpXTtcbiAgICB9XG5cbiAgICB1cGRhdGUoKXtcbiAgICAgICAgdGhpcy5kaXN0YW5jZSAtPSAzO1xuICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICB9XG5cbiAgICBcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY3R4KSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5zaXplID0gNTtcbiAgICAgICAgdGhpcy5yYWRpdXMgPSA1NTtcbiAgICAgICAgdGhpcy5zcGVlZCA9IDc7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gMDtcbiAgICAgICAgdGhpcy5hbmdsZSA9IDMwO1xuICAgICAgICB0aGlzLnBsYXllclBvcyA9IFwibGVmdFwiO1xuICAgICAgICB0aGlzLmRyYXcgPSB0aGlzLmRyYXcuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBkcmF3KCkge1xuICAgICAgIFxuICAgICAgICBjb25zdCBkeCA9ICh0aGlzLmNhbnZhcy53aWR0aCAvIDIpICsgKCh0aGlzLnJhZGl1cykgKiBNYXRoLmNvcyh0aGlzLmFuZ2xlICogTWF0aC5QSSAvIDE4MCkpO1xuICAgICAgICBjb25zdCBkeSA9ICh0aGlzLmNhbnZhcy5oZWlnaHQgLyAyKSArICgodGhpcy5yYWRpdXMpICogTWF0aC5zaW4odGhpcy5hbmdsZSAqIE1hdGguUEkgLyAxODApKTtcbiAgICAgICAgdGhpcy5hbmdsZSA9IHRoaXMuYW5nbGUgKyAodGhpcy5kaXJlY3Rpb24gKiB0aGlzLnNwZWVkKTtcblxuICAgICAgICBpZih0aGlzLmFuZ2xlIDwgMCkge1xuICAgICAgICAgICAgdGhpcy5hbmdsZSA9IDM2MCAtIHRoaXMuYW5nbGU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZih0aGlzLmFuZ2xlID4gMzYwKXtcbiAgICAgICAgICAgIHRoaXMuYW5nbGUgJT0gMzYwO1xuICAgICAgICB9XG4gICAgICAgIC8vIHRoaXMuY3R4LnNhdmUoKTtcbiAgICAgICAgdGhpcy5jdHgudHJhbnNsYXRlKGR4LCBkeSk7XG4gICAgICAgIHRoaXMuY3R4LnJvdGF0ZSh0aGlzLmFuZ2xlICogTWF0aC5QSSAvIDE4MCk7XG4gICAgICAgIC8vIHRoaXMuY3R4LnJlc3RvcmUoKTtcbiAgICAgICAgdGhpcy5jdHgudHJhbnNsYXRlKC1keCwgLWR5KTtcblxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICB0aGlzLmN0eC5tb3ZlVG8oZHggLSB0aGlzLnNpemUsIGR5IC0gdGhpcy5zaXplKTtcbiAgICAgICAgdGhpcy5jdHgubGluZVRvKGR4ICsgdGhpcy5zaXplLCBkeSk7XG4gICAgICAgIHRoaXMuY3R4LmxpbmVUbyhkeCAtIHRoaXMuc2l6ZSwgZHkgKyB0aGlzLnNpemUpO1xuICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgIHRoaXMuY3R4LnRyYW5zbGF0ZShkeCwgZHkpO1xuICAgICAgICB0aGlzLmN0eC5yb3RhdGUoLXRoaXMuYW5nbGUgKiBNYXRoLlBJIC8gMTgwKTtcbiAgICAgICAgdGhpcy5jdHgudHJhbnNsYXRlKC1keCwgLWR5KTtcblxuICAgIH1cbiAgICBoYW5kbGVQcmVzcyhlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgc3dpdGNoIChlLmtleSkge1xuICAgICAgICAgICAgY2FzZSAnQXJyb3dMZWZ0JzpcbiAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IC0xO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnQXJyb3dSaWdodCc6XG4gICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSAxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlS2V5VXAoZSl7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gMDtcbiAgICB9XG5cbiAgICBnZXRQb3NpdGlvbigpe1xuICAgICAgICByZXR1cm4gdGhpcy5hbmdsZTtcbiAgICB9XG59XG5cbiIsIlxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU291bmQge1xuICAgIGNvbnN0cnVjdG9yKHNyYyl7XG4gICAgICAgIHRoaXMuc291bmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXVkaW9cIik7XG4gICAgICAgIHRoaXMuc291bmQuc3JjID0gc3JjO1xuICAgICAgICB0aGlzLnNvdW5kLnNldEF0dHJpYnV0ZShcInByZWxvYWRcIiwgXCJhdXRvXCIpO1xuICAgICAgICB0aGlzLnNvdW5kLnNldEF0dHJpYnV0ZShcImNvbnRyb2xzXCIsIFwibm9uZVwiKTtcbiAgICAgICAgdGhpcy5zb3VuZC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5zb3VuZCk7XG4gICAgfVxuXG4gICAgcGxheSgpe1xuICAgICAgICB0aGlzLnNvdW5kLnBsYXkoKTtcbiAgICB9XG5cbiAgICBzdG9wKCl7XG4gICAgICAgIHRoaXMuc291bmQucGF1c2UoKTtcbiAgICAgICAgdGhpcy5zb3VuZC5jdXJyZW50VGltZSA9IDA7XG4gICAgfVxufVxuIiwiaW1wb3J0IEdhcCBmcm9tIFwiLi9nYXBcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2FsbCB7XG4gICAgY29uc3RydWN0b3IoY3R4LCB4LCB5LCByYWRpdXMsIGNvbG9yLCByb3RhdGlvbikge1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy5yYWRpdXMgPSByYWRpdXM7XG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICAgICAgdGhpcy50aW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIHRoaXMuYW5nbGUgPSBNYXRoLnJhbmRvbSgpICogKDIgKiBNYXRoLlBJKTtcbiAgICAgICAgdGhpcy5yb3RhdGlvbiA9IHJvdGF0aW9uO1xuICAgICAgICB0aGlzLmVuZEFuZ2xlID0gMiAqIE1hdGguUEkgLSAxLjI7XG4gICAgICAgIHRoaXMuZ2FwID0gbmV3IEdhcCh0aGlzLmN0eCwgdGhpcy54LCB0aGlzLnksIHRoaXMucmFkaXVzLCB0aGlzLmFuZ2xlLCB0aGlzLnJvdGF0aW9uLCB0aGlzLnRpbWUpO1xuICAgIH1cblxuICAgIGRyYXcoKXtcbiAgICAgICAgY29uc3QgbmV3VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICBsZXQgZGlmZiA9IG5ld1RpbWUgLSB0aGlzLnRpbWU7XG4gICAgICAgIHRoaXMudGltZSA9IG5ld1RpbWU7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSAxMjtcbiAgICAgICAgdGhpcy5jdHguYXJjKHRoaXMueCwgdGhpcy55LCB0aGlzLnJhZGl1cywgdGhpcy5hbmdsZSwgdGhpcy5lbmRBbmdsZSArIHRoaXMuYW5nbGUsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgIHRoaXMuYW5nbGUgKz0gZGlmZiAqIHRoaXMucm90YXRpb247XG4gICAgICAgIHRoaXMuYW5nbGUgJT0gMiAqIE1hdGguUEk7XG5cbiAgICAgICAgdGhpcy5nYXAuYW5nbGUgKz0gZGlmZiAqIHRoaXMucm90YXRpb247XG4gICAgICAgIHRoaXMuZ2FwLmFuZ2xlICU9IDIgKiBNYXRoLlBJO1xuXG4gICAgICAgIGlmICh0aGlzLmFuZ2xlIDwgMCkge1xuICAgICAgICAgICAgdGhpcy5hbmdsZSA9IDIgKiBNYXRoLlBJO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuYW5nbGUgPiAyICogTWF0aC5QSSkge1xuICAgICAgICAgICAgdGhpcy5hbmdsZSAlPSAyICogTWF0aC5QSTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmdhcC5hbmdsZSA8IDApIHtcbiAgICAgICAgICAgIHRoaXMuZ2FwLmFuZ2xlID0gMiAqIE1hdGguUEk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5nYXAuYW5nbGUgPiAyICogTWF0aC5QSSkge1xuICAgICAgICAgICAgdGhpcy5nYXAuYW5nbGUgJT0gMiAqIE1hdGguUEk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGUoKXtcbiAgICAgICAgaWYodGhpcy5yYWRpdXMgPiAzMCkge1xuICAgICAgICAgICAgdGhpcy5yYWRpdXMgLT0gMztcbiAgICAgICAgICAgIHRoaXMuZ2FwLnJhZGl1cyAtPSAzO1xuICAgICAgICB9IFxuICAgICAgICB0aGlzLmdhcC5kcmF3KCk7XG4gICAgICAgIHRoaXMuZHJhdygpO1xuICAgIH1cblxuXG4gICAgcmV2ZXJzZSgpe1xuICAgICAgICBpZih0aGlzLnJhZGl1cyA9PT0gMjkwKXtcbiAgICAgICAgICAgIHRoaXMucm90YXRpb24gKj0gLTEuMjtcbiAgICAgICAgfVxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9