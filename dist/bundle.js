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
            var wall = new _wall2.default(this.ctx, this.canvas.width / 2, this.canvas.height / 2, this.canvas.width / 2, "#223142", this.speed[Math.floor(Math.random() * this.speed.length)]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qYXZhc2NyaXB0L2NpcmNsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvamF2YXNjcmlwdC9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9qYXZhc2NyaXB0L2dhbWVfdmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvamF2YXNjcmlwdC9nYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2phdmFzY3JpcHQvcGxheWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qYXZhc2NyaXB0L3NvdW5kLmpzIiwid2VicGFjazovLy8uL3NyYy9qYXZhc2NyaXB0L3dhbGwuanMiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJ3aWR0aCIsImhlaWdodCIsImN0eCIsImdldENvbnRleHQiLCJnYW1lVmlldyIsIkdhbWVWaWV3IiwiZ2FtZSIsInBsYXllciIsImhhbmRsZVByZXNzIiwiZSIsImdhbWVTdGFydCIsImhhbmRsZUtleVVwIiwiYW5pbWF0ZSIsIkNpcmNsZSIsIngiLCJ5IiwicmFkaXVzIiwiY29sb3IiLCJyYWRpYW5zIiwiTWF0aCIsInJhbmRvbSIsIlBJIiwidmVsb2NpdHkiLCJkaXN0YW5jZUZyb21DZW50ZXIiLCJyYW5kb21JbnRGcm9tUmFuZ2UiLCJwYXJ0aWNsZXMiLCJwcmV2aW91c1BvaW50IiwiY29zIiwic2luIiwiZHJhdyIsImJlZ2luUGF0aCIsInN0cm9rZVN0eWxlIiwibGluZVdpZHRoIiwibW92ZVRvIiwibGluZVRvIiwic3Ryb2tlIiwiY2xvc2VQYXRoIiwiaSIsInB1c2giLCJyYW5kb21Db2xvciIsImNvbG9ycyIsImZvckVhY2giLCJwYXJ0aWNsZSIsInVwZGF0ZSIsIm1pbiIsIm1heCIsImZsb29yIiwiRElNX1giLCJESU1fWSIsIkNPTE9SX1NDSEVNRSIsIkdhbWUiLCJQbGF5ZXIiLCJ3YWxscyIsInRpbWVyIiwic2NvcmUiLCJpbkdhbWUiLCJkZWFkIiwiYmciLCJoaWdoU2NvcmUiLCJzcGVlZCIsInRoZW1lU29uZyIsIlNvdW5kIiwiZ2FtZU92ZXJTb25nIiwiZ09Mb29wIiwibGVuZ3RoIiwiZ2V0RWxlbWVudEJ5SWQiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsInN0YXJ0U2NyZWVuIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJ1biIsImdhbWVPdmVyIiwid2FsbCIsIldhbGwiLCJpbmNyZWFzZVNwZWVkIiwibWFwIiwicmV2ZXJzZSIsImZvbnQiLCJmaWxsVGV4dCIsInRleHQiLCJtZWFzdXJlbWVudCIsIm1lYXN1cmVUZXh0IiwibWVhc3VyZW1lbnR3aWR0aCIsImNsZWFyUmVjdCIsImNlbnRlclgiLCJjZW50ZXJZIiwiYXJjIiwiZG9XYWxsc0V4aXN0IiwiaXNXYWxsT25QbGF5ZXIiLCJzaXplIiwiY2hlY2tDb2xsaXNpb24iLCJnYXAiLCJzaG93U2NvcmUiLCJ3YWxsU3BhY2UiLCJzZXRUaW1lb3V0IiwiYWRkV2FsbCIsInNoaWZ0IiwiaW5jcmVhc2VEaWZmaWN1bHR5IiwidXBkYXRlU2NvcmUiLCJjaGFuZ2VCRyIsImNvbGxpc2lvbiIsImdhcFBvcyIsImdldFBvc2l0aW9uIiwicGxheWVyQW5nbGUiLCJwbGF5ZXJMZWZ0IiwiYW5nbGUiLCJlbmRBbmdsZSIsInBhcnRpYWxDaXJjbGVBbmdsZSIsInRpdGxlIiwiZW50ZXIiLCJncmFkaWVudCIsImNyZWF0ZUxpbmVhckdyYWRpZW50IiwiYWRkQ29sb3JTdG9wIiwiZmlsbFN0eWxlIiwiY2VudGVyVGV4dCIsInN0b3AiLCJwbGF5IiwicHJldmVudERlZmF1bHQiLCJ3aGljaCIsImtleUNvZGUiLCJpbml0IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYmluZCIsIkdhcCIsInJvdGF0aW9uIiwidGltZSIsImdsb2JhbEFscGhhIiwicG9zaXRpb24iLCJzdGFydCIsImVuZCIsImMxIiwiYzIiLCJkaXJlY3Rpb24iLCJwbGF5ZXJQb3MiLCJkeCIsImR5IiwidHJhbnNsYXRlIiwicm90YXRlIiwiZmlsbCIsImtleSIsInNyYyIsInNvdW5kIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImRpc3BsYXkiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJwYXVzZSIsImN1cnJlbnRUaW1lIiwiRGF0ZSIsImdldFRpbWUiLCJuZXdUaW1lIiwiZGlmZiJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUFBLFNBQVNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFZO0FBQ3RELFFBQU1DLFNBQVNGLFNBQVNHLG9CQUFULENBQThCLFFBQTlCLEVBQXdDLENBQXhDLENBQWY7QUFDQUQsV0FBT0UsS0FBUCxHQUFlLElBQWY7QUFDQUYsV0FBT0csTUFBUCxHQUFnQixH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QUFMLENBQVMzRSxNQUFULElBQW1CLENBQW5CO0FBQ0g7QUFDRCxpQkFBSzJFLEdBQUwsQ0FBUzlELElBQVQ7QUFDQSxpQkFBS0EsSUFBTDtBQUNIOzs7a0NBR1E7QUFDTCxnQkFBRyxLQUFLYixNQUFMLEtBQWdCLEdBQW5CLEVBQXVCO0FBQ25CLHFCQUFLNEcsUUFBTCxJQUFpQixDQUFDLEdBQWxCO0FBQ0g7QUFDSjs7Ozs7O2tCQS9EZ0JuRCxJIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFBsYXllciBmcm9tICcuL2phdmFzY3JpcHQvcGxheWVyJztcbmltcG9ydCBHYW1lIGZyb20gJy4vamF2YXNjcmlwdC9nYW1lJztcbmltcG9ydCBHYW1lVmlldyBmcm9tICcuL2phdmFzY3JpcHQvZ2FtZV92aWV3JztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiY2FudmFzXCIpWzBdO1xuICAgIGNhbnZhcy53aWR0aCA9IDEwMDA7XG4gICAgY2FudmFzLmhlaWdodCA9IDYwMDtcblxuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cblxuICAgIGNvbnN0IGdhbWVWaWV3ID0gbmV3IEdhbWVWaWV3KGNhbnZhcywgY3R4KTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZSA9PiBnYW1lVmlldy5nYW1lLnBsYXllci5oYW5kbGVQcmVzcyhlKSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGUgPT4gZ2FtZVZpZXcuZ2FtZS5nYW1lU3RhcnQoZSkpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZSA9PiBnYW1lVmlldy5nYW1lLnBsYXllci5oYW5kbGVLZXlVcChlKSk7XG4gICAgZ2FtZVZpZXcuYW5pbWF0ZSgpO1xufSk7XG5cblxuXG4iLCJcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENpcmNsZSB7XG4gICAgY29uc3RydWN0b3IoeCwgeSwgcmFkaXVzLCBjb2xvciwgY3R4KXtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy5yYWRpdXMgPSByYWRpdXM7XG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICAgICAgdGhpcy5yYWRpYW5zID0gTWF0aC5yYW5kb20oKSAqIE1hdGguUEkgKiAyO1xuICAgICAgICB0aGlzLnZlbG9jaXR5ID0gMC4wNTtcbiAgICAgICAgdGhpcy5kaXN0YW5jZUZyb21DZW50ZXIgPSB0aGlzLnJhbmRvbUludEZyb21SYW5nZSgwLCAzMCk7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLnBhcnRpY2xlcyA9IFtdO1xuICAgIH1cblxuICAgXG5cbiAgICB1cGRhdGUoKXtcbiAgICAgICAgY29uc3QgcHJldmlvdXNQb2ludCA9IHt4OiB0aGlzLngsIHk6IHRoaXMueX07XG4gICAgICAgIC8vIE1vdmUgcG9pbnRzIG92ZXIgdGltZVxuICAgICAgICB0aGlzLnJhZGlhbnMgKz0gdGhpcy52ZWxvY2l0eTtcbiAgICAgICAgdGhpcy54ID0gdGhpcy54ICsgTWF0aC5jb3ModGhpcy5yYWRpYW5zKSAqIHRoaXMuZGlzdGFuY2VGcm9tQ2VudGVyO1xuICAgICAgICB0aGlzLnkgPSB0aGlzLnkgKyBNYXRoLnNpbih0aGlzLnJhZGlhbnMpICogdGhpcy5kaXN0YW5jZUZyb21DZW50ZXI7XG4gICAgICAgIHRoaXMuZHJhdyhwcmV2aW91c1BvaW50KTtcbiAgICB9XG5cbiAgICBkcmF3KHByZXZpb3VzUG9pbnQpe1xuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSB0aGlzLnJhZGl1cztcbiAgICAgICAgdGhpcy5jdHgubW92ZVRvKHByZXZpb3VzUG9pbnQueCwgcHJldmlvdXNQb2ludC55KTtcbiAgICAgICAgdGhpcy5jdHgubGluZVRvKHRoaXMueCwgdGhpcy55KTtcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuICAgIH1cblxuICAgIGluaXQoKXtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IDUwOyBpKyspe1xuICAgICAgICAgICAgY29uc3QgcmFkaXVzID0gKE1hdGgucmFuZG9tKCkgKiAyKSArIDE7XG4gICAgICAgICAgICB0aGlzLnBhcnRpY2xlcy5wdXNoKG5ldyBDaXJjbGUoNTAwLCAzMDAsIHJhZGl1cywgdGhpcy5yYW5kb21Db2xvcihjb2xvcnMpLCBjdHgpKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYW5pbWF0ZSgpe1xuICAgICAgICB0aGlzLnBhcnRpY2xlcy5mb3JFYWNoKHBhcnRpY2xlID0+IHtcbiAgICAgICAgICAgIHBhcnRpY2xlLnVwZGF0ZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByYW5kb21JbnRGcm9tUmFuZ2UobWluLCBtYXgpe1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpICsgbWluKTtcbiAgICB9XG59IiwiaW1wb3J0IFBsYXllciBmcm9tIFwiLi9wbGF5ZXJcIjtcbmltcG9ydCBXYWxsIGZyb20gXCIuL3dhbGxcIjtcbmltcG9ydCBDaXJjbGUgZnJvbSAnLi9jaXJjbGUnO1xuaW1wb3J0IFNvdW5kIGZyb20gJy4vc291bmQnO1xuY29uc3QgRElNX1ggPSAxMDAwO1xuY29uc3QgRElNX1kgPSA2MDA7XG5jb25zdCBDT0xPUl9TQ0hFTUUgPSBbXCIjZmZjZTAwXCIsIFwiYzlmZjAwXCIsIFwiIzQ5ZmYwMFwiLCBcIiMwMGZmZWNcIiwgXCIjMDBkMmZmXCJdXG5jb25zdCBjb2xvcnMgPSBbXG4gICAgXCIjMDBiZGZmXCIsXG4gICAgXCIjNGQzOWNlXCIsXG4gICAgXCIjMDg4ZWZmXCIsXG5dO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBjdHgpIHtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIodGhpcy5jYW52YXMsIHRoaXMuY3R4KVxuICAgICAgICB0aGlzLndhbGxzID0gW107XG4gICAgICAgIHRoaXMudGltZXIgPSBudWxsO1xuICAgICAgICB0aGlzLnNjb3JlID0gMDtcbiAgICAgICAgdGhpcy5pbkdhbWUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kZWFkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYmcgPSBcIiM0ODYzOWNcIjtcbiAgICAgICAgdGhpcy5oaWdoU2NvcmUgPSAwO1xuICAgICAgICB0aGlzLnNwZWVkID0gWy0uMDAxLCAuMDAxXTtcbiAgICAgICAgdGhpcy50aGVtZVNvbmcgPSBuZXcgU291bmQoXCJnYW1ldGhlbWUubXAzXCIpO1xuICAgICAgICB0aGlzLmdhbWVPdmVyU29uZyA9IG5ldyBTb3VuZChcImdhbWVPdmVyLm1wM1wiKTtcbiAgICAgICAgdGhpcy5nT0xvb3AgPSB0cnVlO1xuICAgIH1cblxuICAgIHJhbmRvbUNvbG9yKGNvbG9ycykge1xuICAgICAgICByZXR1cm4gY29sb3JzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNvbG9ycy5sZW5ndGgpXTtcbiAgICB9XG5cbiAgICBjaGFuZ2VCRygpIHtcbiAgICAgICAgY29uc3QgcmFuZG9tQ29sb3IgPSBDT0xPUl9TQ0hFTUVbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogQ09MT1JfU0NIRU1FLmxlbmd0aCldO1xuICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15Q2FudmFzXCIpO1xuICAgICAgICB0aGlzLmJnID0gY2FudmFzLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHJhbmRvbUNvbG9yO1xuICAgIH1cblxuICAgIGluaXQoKXtcbiAgICAgICAgaWYoIXRoaXMuaW5HYW1lKXtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRTY3JlZW4oKTtcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuaW5HYW1lICYmICF0aGlzLmRlYWQpe1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGUgPT4gdGhpcy5nYW1lU3RhcnQoZSkpO1xuICAgICAgICAgICAgdGhpcy5ydW4oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXIoKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgYWRkV2FsbCgpe1xuICAgICAgICBjb25zdCB3YWxsID0gbmV3IFdhbGwodGhpcy5jdHgsIHRoaXMuY2FudmFzLndpZHRoIC8gMiwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMiwgdGhpcy5jYW52YXMud2lkdGggLyAyLCBcIiMyMjMxNDJcIiwgdGhpcy5zcGVlZFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLnNwZWVkLmxlbmd0aCldKVxuICAgICAgICB0aGlzLndhbGxzLnB1c2god2FsbCk7XG4gICAgICAgIHRoaXMudGltZXIgPSBudWxsO1xuICAgIH1cblxuICAgIGluY3JlYXNlRGlmZmljdWx0eSgpe1xuICAgICAgICBsZXQgcmFkaXVzO1xuICAgICAgICBpZih0aGlzLndhbGxzLmxlbmd0aCkgeyByYWRpdXMgPSB0aGlzLndhbGxzWzBdLnJhZGl1c31cbiAgICAgICAgaWYodGhpcy5zY29yZSA9PT0gMTAgJiYgcmFkaXVzID09PSA0Nyl7XG4gICAgICAgICAgICB0aGlzLmluY3JlYXNlU3BlZWQodGhpcy53YWxscyk7XG4gICAgICAgICAgICBcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuc2NvcmUgPT09IDIwICYmIHJhZGl1cyA9PT0gNDcpe1xuICAgICAgICAgICAgdGhpcy5pbmNyZWFzZVNwZWVkKHRoaXMud2FsbHMpO1xuICAgICAgICB9IGVsc2UgaWYodGhpcy5zY29yZSA9PT0gMzAgJiYgcmFkaXVzID09PSA0Nyl7XG4gICAgICAgICAgICB0aGlzLmluY3JlYXNlU3BlZWQodGhpcy53YWxscyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZih0aGlzLnNjb3JlID09PSA0MCAmJiByYWRpdXMgPT09IDQ3KXtcbiAgICAgICAgICAgIHRoaXMuaW5jcmVhc2VTcGVlZCh0aGlzLndhbGxzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLnNjb3JlID09PSA1MCAmJiByYWRpdXMgPT09IDQ3KSB7XG4gICAgICAgICAgICB0aGlzLmluY3JlYXNlU3BlZWQodGhpcy53YWxscyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5zY29yZSA9PT0gNjAgJiYgcmFkaXVzID09PSA0Nykge1xuICAgICAgICAgICAgdGhpcy5pbmNyZWFzZVNwZWVkKHRoaXMud2FsbHMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuc2NvcmUgPT09IDcwICYmIHJhZGl1cyA9PT0gNDcpIHtcbiAgICAgICAgICAgIHRoaXMuaW5jcmVhc2VTcGVlZCh0aGlzLndhbGxzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLnNjb3JlID09PSA4MCAmJiByYWRpdXMgPT09IDQ3KXtcbiAgICAgICAgICAgIHRoaXMuc3BlZWQgPSB0aGlzLnNwZWVkLm1hcChzcGVlZCA9PiBzcGVlZCAqIDEwKTtcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLnNjb3JlID4gMzApe1xuICAgICAgICAgICAgdGhpcy53YWxscy5mb3JFYWNoKHdhbGwgPT4ge1xuICAgICAgICAgICAgICAgIHdhbGwucmV2ZXJzZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgfVxuICAgIFxuXG4gICAgaW5jcmVhc2VTcGVlZCh3YWxscyl7XG4gICAgICAgIHRoaXMuc3BlZWQgPSB0aGlzLnNwZWVkLm1hcChzcGVlZCA9PiBzcGVlZCAqIDEuMik7XG4gICAgfVxuXG4gICAgYWxsV2FsbHMoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMud2FsbHM7XG4gICAgfVxuXG4gICAgc2hvd1Njb3JlKCl7XG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5mb250ID0gXCIyMHB4IE9yYml0cm9uXCI7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiU2NvcmU6IFwiICsgdGhpcy5zY29yZSwgdGhpcy5jYW52YXMud2lkdGggLSAxMDAsIDMwKTtcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG4gICAgfVxuXG4gICAgY2VudGVyVGV4dCh0ZXh0LCB5KXtcbiAgICAgICAgY29uc3QgbWVhc3VyZW1lbnQgPSB0aGlzLmN0eC5tZWFzdXJlVGV4dCh0ZXh0KTtcbiAgICAgICAgY29uc3QgbWVhc3VyZW1lbnR3aWR0aCA9ICh0aGlzLmNhbnZhcy53aWR0aCAtIG1lYXN1cmVtZW50LndpZHRoKSAvIDI7XG4gICAgICAgIGNvbnN0IHggPSAodGhpcy5jYW52YXMud2lkdGggLSBtZWFzdXJlbWVudC53aWR0aCkgLyAyO1xuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dCh0ZXh0LCB4LCB5KTtcbiAgICB9XG4gICAgXG4gICAgZHJhdygpIHtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIERJTV9YLCBESU1fWSk7XG4gICAgICAgIGNvbnN0IGNlbnRlclggPSBESU1fWCAvIDI7XG4gICAgICAgIGNvbnN0IGNlbnRlclkgPSBESU1fWSAvIDI7XG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSAxO1xuICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgdGhpcy5jdHguYXJjKGNlbnRlclgsIGNlbnRlclksIDMwLCAwLCAyICogTWF0aC5QSSwgZmFsc2UpO1xuICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG4gICAgICAgIHRoaXMud2FsbHMuZm9yRWFjaCh3YWxsID0+IHtcbiAgICAgICAgICAgIHdhbGwudXBkYXRlKCk7XG4gICAgICAgICAgICAvLyB3YWxsLmdhcC51cGRhdGUoKTtcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5wbGF5ZXIuZHJhdyg1KTtcbiAgICBcbiAgICAgICAgY29uc3QgZG9XYWxsc0V4aXN0ID0gdGhpcy53YWxscy5sZW5ndGggPiAwO1xuICAgICAgICBpZihkb1dhbGxzRXhpc3Qpe1xuXG4gICAgICAgICAgICAvL1RPRE86IHdlIGNoZWNrIGZvciBjb2xsaXNpb24gd2hlbiB0aGUgd2FsbCBpcyBsaXRlcmFsbHkgb250b3Agb2YgdGhlIHBsYXllclxuICAgICAgICAgICAgLy8gbWF5YmUgZmluZCBhIHN3ZWV0IHNwb3Qgd2l0aCB0aGlzLnBsYXllci5yYWRpdXMgKyAxIG9yIHNvbWV0aGluZyBjYXVzZSB0aGUgdHJpYW5nbGUgaGFzXG4gICAgICAgICAgICAvLyBhIHNpemUgdG8gaXQuXG4gICAgICAgICAgICBjb25zdCBpc1dhbGxPblBsYXllciA9IHRoaXMud2FsbHNbMF0ucmFkaXVzIDw9IHRoaXMucGxheWVyLnJhZGl1cyArIHRoaXMucGxheWVyLnNpemUgKyA2ICYmIHRoaXMud2FsbHNbMF0ucmFkaXVzID49IHRoaXMucGxheWVyLnJhZGl1cztcbiAgICAgICAgICAgIGlmIChpc1dhbGxPblBsYXllcil7XG4gICAgICAgICAgICAgICAgaWYoIXRoaXMuY2hlY2tDb2xsaXNpb24odGhpcy5wbGF5ZXIsIHRoaXMud2FsbHNbMF0uZ2FwKSl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVhZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLndhbGxzWzBdLmFuZ2xlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNob3dTY29yZSgpO1xuICAgICAgICAvLyB0aGlzLmN0eC5zdHJva2UoKTtcbiAgICAgICAgLy8gdGhpcy5jdHguY2xvc2VQYXRoKCk7XG4gICAgfVxuICAgIFxuICAgIHJ1bigpe1xuICAgICAgICBjb25zdCB3YWxsU3BhY2UgPSAxMDAwO1xuICAgICAgICBpZih0aGlzLndhbGxzLmxlbmd0aCA8IDggJiYgdGhpcy50aW1lciA9PT0gbnVsbCl7XG4gICAgICAgICAgICB0aGlzLnRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB0aGlzLmFkZFdhbGwoKSwgd2FsbFNwYWNlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy53YWxscy5sZW5ndGggPiAwICYmIHRoaXMud2FsbHNbMF0ucmFkaXVzIDwgMzApIHsgdGhpcy53YWxscy5zaGlmdCgpfVxuICAgICAgICB0aGlzLmluY3JlYXNlRGlmZmljdWx0eSgpO1xuICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICAgICAgdGhpcy51cGRhdGVTY29yZSgpO1xuICAgICAgICB9XG5cbiAgICB1cGRhdGVTY29yZSgpe1xuICAgICAgICBpZih0aGlzLndhbGxzLmxlbmd0aCl7XG4gICAgICAgICAgICBpZiAodGhpcy53YWxsc1swXS5yYWRpdXMgPT09IDMyKSB7IFxuICAgICAgICAgICAgICAgIHRoaXMuc2NvcmUgKz0gMTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZUJHKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuXG4gICAgY2hlY2tDb2xsaXNpb24ocGxheWVyLCBnYXApe1xuICAgICAgICBsZXQgY29sbGlzaW9uID0gZmFsc2U7XG4gICAgICAgIGxldCBnYXBQb3MgPSBnYXAuZ2V0UG9zaXRpb24oKTtcbiAgICAgICAgbGV0IHBsYXllckFuZ2xlID0gcGxheWVyLmdldFBvc2l0aW9uKCkgKiBNYXRoLlBJIC8gMTgwO1xuICAgICAgICBsZXQgcGxheWVyTGVmdCA9ICh0aGlzLmNhbnZhcy5oZWlnaHQgLyAyKSArICgodGhpcy5yYWRpdXMpICogTWF0aC5zaW4odGhpcy5hbmdsZSAqIE1hdGguUEkgLyAxODApKTtcbiAgICAgICAgbGV0IGVuZEFuZ2xlID0gZ2FwLmFuZ2xlIC0gKDIgKiBNYXRoLlBJIC0gZ2FwLnBhcnRpYWxDaXJjbGVBbmdsZSk7XG4gICAgICAgIGlmIChlbmRBbmdsZSA8IDApIHtcbiAgICAgICAgICAgIGVuZEFuZ2xlICs9IDIqTWF0aC5QSTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmKHBsYXllclBvcyA+IGdhcFBvc1tzdGFydF0gJiYgcGxheWVyUG9zIDwgZ2FwUG9zW2VuZF0pIGNvbGxpc2lvbiA9IHRydWU7XG5cbiAgICAgICAgLy8gdGhlIGNhc2Ugd2hlbiB0aGUgZ2FwIHN0cmFkZGxlcyB0aGUgaG9yaXpvbnRhbFxuXG4gICAgICAgIGlmIChnYXAuYW5nbGUgPCBlbmRBbmdsZSl7XG4gICAgICAgICAgICBpZiAoKHBsYXllckFuZ2xlICA+IGVuZEFuZ2xlIFxuICAgICAgICAgICAgICAgICYmIHBsYXllckFuZ2xlIDwgMiAqIE1hdGguUEkpIFxuICAgICAgICAgICAgICAgIHx8IHBsYXllckFuZ2xlIDwgZ2FwLmFuZ2xlICYmIHBsYXllckFuZ2xlID4gMCl7XG4gICAgICAgICAgICAgICAgY29sbGlzaW9uID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwbGF5ZXJBbmdsZSA8IGdhcC5hbmdsZSAmJlxuICAgICAgICAgICAgcGxheWVyQW5nbGUgPiBlbmRBbmdsZSkge1xuICAgICAgICAgICAgICAgIGNvbGxpc2lvbiA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgaWYoY29sbGlzaW9uID09PSB0cnVlKXtcbiAgICAgICAgICAgIC8vIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gJ2JsdWUnXG4gICAgICAgICAgICAvLyB0aGlzLmN0eC5zdHJva2VSZWN0KERJTV9YIC8gMiAtIDI1LCBESU1fWSAvIDIgLSAyNSwgNTAsIDUwKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb2xsaXNpb247XG4gICAgfVxuXG4gICAgc3RhcnRTY3JlZW4oKXtcbiAgICAgICAgbGV0IHkgPSB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyO1xuICAgICAgICBsZXQgY29sb3IgPSBcIiNDQzI5MzM2XCI7XG4gICAgICAgIGxldCB0aXRsZSA9IFwiRXNjYXBlIHRoZSBTaGFwZVwiO1xuICAgICAgICBsZXQgZW50ZXIgPSBcIlByZXNzIEVudGVyXCI7XG4gICAgICAgIGNvbnN0IGdyYWRpZW50ID0gdGhpcy5jdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIDApO1xuICAgICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoXCIwXCIsIFwiI0M4NzNDOFwiKTtcbiAgICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKFwiMC41XCIsIFwiIzkxRDdBMVwiKTtcbiAgICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKFwiMS4wXCIsIFwiI0RERDgzMFwiKTtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIERJTV9YLCBESU1fWSk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IGdyYWRpZW50O1xuICAgICAgICB0aGlzLmN0eC5mb250ID0gXCI0OHB4IE9yYml0cm9uXCI7XG4gICAgICAgIHRoaXMuY2VudGVyVGV4dCh0aXRsZSwgeSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiMjRweCBPcmJpdHJvblwiO1xuICAgICAgICB0aGlzLmNlbnRlclRleHQoZW50ZXIsIHkgKyAzMCk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBlID0+IHRoaXMuZ2FtZVN0YXJ0KGUpKTtcbiAgICB9XG5cbiAgICBnYW1lT3ZlcigpIHtcbiAgICAgICAgaWYgKHRoaXMuc2NvcmUgPiB0aGlzLmhpZ2hTY29yZSkge1xuICAgICAgICAgICAgdGhpcy5oaWdoU2NvcmUgPSB0aGlzLnNjb3JlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudGhlbWVTb25nLnN0b3AoKTtcbiAgICAgICAgaWYgKHRoaXMuZ09Mb29wKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWVPdmVyU29uZy5wbGF5KCk7XG4gICAgICAgICAgICB0aGlzLmdPTG9vcCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlDYW52YXNcIik7XG4gICAgICAgIGNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAoXCIjNDg2MzljXCIpO1xuICAgICAgICBjb25zdCBncmFkaWVudCA9IHRoaXMuY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCAwKTtcbiAgICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKFwiMFwiLCBcIiMyNjIyMjRcIik7XG4gICAgICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcChcIjAuNVwiLCBcIiNGMURGMENcIik7XG4gICAgICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcChcIjEuMFwiLCBcIiNGNzA0MkNcIik7XG4gICAgICAgIHRoaXMud2FsbHMgPSBbXTtcbiAgICAgICAgdGhpcy5zcGVlZCA9IFstLjAwMSwgLjAwMV07XG4gICAgICAgIGxldCB5ID0gdGhpcy5jYW52YXMuaGVpZ2h0IC8gMjtcbiAgICAgICAgbGV0IHRpdGxlID0gXCJHYW1lIE92ZXJcIjtcbiAgICAgICAgbGV0IGVudGVyID0gXCJQcmVzcyBlbnRlciB0byB0cnkgYWdhaW5cIjtcbiAgICAgICAgbGV0IHNjb3JlID0gYFNjb3JlOiAke3RoaXMuc2NvcmV9YDtcbiAgICAgICAgbGV0IGhpZ2hTY29yZSA9IGBIaWdoIFNjb3JlOiAke3RoaXMuaGlnaFNjb3JlfWA7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCBESU1fWCwgRElNX1kpO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBncmFkaWVudDtcbiAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiNDhweCBPcmJpdHJvblwiO1xuICAgICAgICB0aGlzLmNlbnRlclRleHQodGl0bGUsIHkgKyA2MCk7XG5cbiAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiNDhweCBPcmJpdHJvblwiO1xuICAgICAgICB0aGlzLmNlbnRlclRleHQoaGlnaFNjb3JlLCB5IC0gMTIwKTtcbiAgICAgICAgdGhpcy5jZW50ZXJUZXh0KHNjb3JlLCB5IC0gNTApO1xuICAgICAgICB0aGlzLmN0eC5mb250ID0gXCIyNHB4IE9yYml0cm9uXCI7XG4gICAgICAgIHRoaXMuY2VudGVyVGV4dChlbnRlciwgeSArIDEwMCk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBlID0+IHRoaXMuZ2FtZVN0YXJ0KGUpKTtcbiAgICB9XG5cbiAgICBnYW1lU3RhcnQoZSl7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5nT0xvb3AgPSB0cnVlO1xuICAgICAgICBpZihlLndoaWNoID09PSAxMyB8fCBlLmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgICAgICB0aGlzLnRoZW1lU29uZy5wbGF5KCk7XG4gICAgICAgICAgICB0aGlzLmluR2FtZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmJnID0gXCIjNDg2MzljXCJcbiAgICAgICAgICAgIHRoaXMuZGVhZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5zY29yZSA9IDA7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IEdhbWUgZnJvbSAnLi9nYW1lJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVZpZXcge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY3R4KSB7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5nYW1lID0gbmV3IEdhbWUodGhpcy5jYW52YXMsIHRoaXMuY3R4KTtcbiAgICB9XG5cbiAgICBcblxuXG4gICAgYW5pbWF0ZSgpIHtcbiAgICAgICAgdGhpcy5nYW1lLmluaXQoKTtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpKTtcbiAgICB9XG59IiwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhcCB7XG4gICAgY29uc3RydWN0b3IoY3R4LCB4ICwgeSwgcmFkaXVzLCBhbmdsZSwgcm90YXRpb24sIHRpbWUpe1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy5yYWRpdXMgPSByYWRpdXM7IFxuICAgICAgICB0aGlzLnJvdGF0aW9uID0gcm90YXRpb247XG4gICAgICAgIHRoaXMuYW5nbGUgPSBhbmdsZTtcbiAgICAgICAgdGhpcy5wYXJ0aWFsQ2lyY2xlQW5nbGUgPSAyICogTWF0aC5QSSAtIDEuMjtcbiAgICB9XG5cbiAgICBkcmF3KCl7XG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5nbG9iYWxBbHBoYSA9IDAuMDtcbiAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gODtcbiAgICAgICAgdGhpcy5jdHguYXJjKHRoaXMueCwgdGhpcy55LCB0aGlzLnJhZGl1cywgdGhpcy5hbmdsZSwgdGhpcy5wYXJ0aWFsQ2lyY2xlQW5nbGUgKyB0aGlzLmFuZ2xlLCB0cnVlKTtcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5nbG9iYWxBbHBoYSA9IDEuMDtcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIGlmICh0aGlzLnJhZGl1cyA+IDMwKSB7XG4gICAgICAgICAgICB0aGlzLnJhZGl1cyAtPSAzO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZHJhdygpO1xuICAgIH1cblxuICAgIGdldFBvc2l0aW9uKCl7XG4gICAgICAgY29uc3QgcG9zaXRpb24gPSB7XG4gICAgICAgICAgIHN0YXJ0OiB0aGlzLmFuZ2xlLFxuICAgICAgICAgICBlbmQ6IHRoaXMucGFydGlhbENpcmNsZUFuZ2xlICsgdGhpcy5hbmdsZSxcbiAgICAgICB9XG4gICAgICAgcmV0dXJuIHBvc2l0aW9uO1xuICAgIH1cblxuICAgIGdldFBvaW50KGMxLCBjMiwgcmFkaXVzLCBhbmdsZSkge1xuICAgICAgICByZXR1cm4gW2MxICsgTWF0aC5jb3MoYW5nbGUpICogcmFkaXVzLCBjMiArIE1hdGguc2luKGFuZ2xlKSAqIHJhZGl1c107XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBjdHgpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLnNpemUgPSA1O1xuICAgICAgICB0aGlzLnJhZGl1cyA9IDU1O1xuICAgICAgICB0aGlzLnNwZWVkID0gNztcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSAwO1xuICAgICAgICB0aGlzLmFuZ2xlID0gMzA7XG4gICAgICAgIHRoaXMucGxheWVyUG9zID0gXCJsZWZ0XCI7XG4gICAgICAgIHRoaXMuZHJhdyA9IHRoaXMuZHJhdy5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGRyYXcoKSB7XG4gICAgICAgXG4gICAgICAgIGNvbnN0IGR4ID0gKHRoaXMuY2FudmFzLndpZHRoIC8gMikgKyAoKHRoaXMucmFkaXVzKSAqIE1hdGguY29zKHRoaXMuYW5nbGUgKiBNYXRoLlBJIC8gMTgwKSk7XG4gICAgICAgIGNvbnN0IGR5ID0gKHRoaXMuY2FudmFzLmhlaWdodCAvIDIpICsgKCh0aGlzLnJhZGl1cykgKiBNYXRoLnNpbih0aGlzLmFuZ2xlICogTWF0aC5QSSAvIDE4MCkpO1xuICAgICAgICB0aGlzLmFuZ2xlID0gdGhpcy5hbmdsZSArICh0aGlzLmRpcmVjdGlvbiAqIHRoaXMuc3BlZWQpO1xuXG4gICAgICAgIGlmKHRoaXMuYW5nbGUgPCAwKSB7XG4gICAgICAgICAgICB0aGlzLmFuZ2xlID0gMzYwIC0gdGhpcy5hbmdsZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHRoaXMuYW5nbGUgPiAzNjApe1xuICAgICAgICAgICAgdGhpcy5hbmdsZSAlPSAzNjA7XG4gICAgICAgIH1cbiAgICAgICAgLy8gdGhpcy5jdHguc2F2ZSgpO1xuICAgICAgICB0aGlzLmN0eC50cmFuc2xhdGUoZHgsIGR5KTtcbiAgICAgICAgdGhpcy5jdHgucm90YXRlKHRoaXMuYW5nbGUgKiBNYXRoLlBJIC8gMTgwKTtcbiAgICAgICAgLy8gdGhpcy5jdHgucmVzdG9yZSgpO1xuICAgICAgICB0aGlzLmN0eC50cmFuc2xhdGUoLWR4LCAtZHkpO1xuXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgIHRoaXMuY3R4Lm1vdmVUbyhkeCAtIHRoaXMuc2l6ZSwgZHkgLSB0aGlzLnNpemUpO1xuICAgICAgICB0aGlzLmN0eC5saW5lVG8oZHggKyB0aGlzLnNpemUsIGR5KTtcbiAgICAgICAgdGhpcy5jdHgubGluZVRvKGR4IC0gdGhpcy5zaXplLCBkeSArIHRoaXMuc2l6ZSk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgdGhpcy5jdHgudHJhbnNsYXRlKGR4LCBkeSk7XG4gICAgICAgIHRoaXMuY3R4LnJvdGF0ZSgtdGhpcy5hbmdsZSAqIE1hdGguUEkgLyAxODApO1xuICAgICAgICB0aGlzLmN0eC50cmFuc2xhdGUoLWR4LCAtZHkpO1xuXG4gICAgfVxuICAgIGhhbmRsZVByZXNzKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBzd2l0Y2ggKGUua2V5KSB7XG4gICAgICAgICAgICBjYXNlICdBcnJvd0xlZnQnOlxuICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uID0gLTE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdBcnJvd1JpZ2h0JzpcbiAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IDE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVLZXlVcChlKXtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSAwO1xuICAgIH1cblxuICAgIGdldFBvc2l0aW9uKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmFuZ2xlO1xuICAgIH1cbn1cblxuIiwiXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTb3VuZCB7XG4gICAgY29uc3RydWN0b3Ioc3JjKXtcbiAgICAgICAgdGhpcy5zb3VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhdWRpb1wiKTtcbiAgICAgICAgdGhpcy5zb3VuZC5zcmMgPSBzcmM7XG4gICAgICAgIHRoaXMuc291bmQuc2V0QXR0cmlidXRlKFwicHJlbG9hZFwiLCBcImF1dG9cIik7XG4gICAgICAgIHRoaXMuc291bmQuc2V0QXR0cmlidXRlKFwiY29udHJvbHNcIiwgXCJub25lXCIpO1xuICAgICAgICB0aGlzLnNvdW5kLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLnNvdW5kKTtcbiAgICB9XG5cbiAgICBwbGF5KCl7XG4gICAgICAgIHRoaXMuc291bmQucGxheSgpO1xuICAgIH1cblxuICAgIHN0b3AoKXtcbiAgICAgICAgdGhpcy5zb3VuZC5wYXVzZSgpO1xuICAgICAgICB0aGlzLnNvdW5kLmN1cnJlbnRUaW1lID0gMDtcbiAgICB9XG59XG4iLCJpbXBvcnQgR2FwIGZyb20gXCIuL2dhcFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXYWxsIHtcbiAgICBjb25zdHJ1Y3RvcihjdHgsIHgsIHksIHJhZGl1cywgY29sb3IsIHJvdGF0aW9uKSB7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cztcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgICAgICB0aGlzLnRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgdGhpcy5hbmdsZSA9IE1hdGgucmFuZG9tKCkgKiAoMiAqIE1hdGguUEkpO1xuICAgICAgICB0aGlzLnJvdGF0aW9uID0gcm90YXRpb247XG4gICAgICAgIHRoaXMuZW5kQW5nbGUgPSAyICogTWF0aC5QSSAtIDEuMjtcbiAgICAgICAgdGhpcy5nYXAgPSBuZXcgR2FwKHRoaXMuY3R4LCB0aGlzLngsIHRoaXMueSwgdGhpcy5yYWRpdXMsIHRoaXMuYW5nbGUsIHRoaXMucm90YXRpb24sIHRoaXMudGltZSk7XG4gICAgfVxuXG4gICAgZHJhdygpe1xuICAgICAgICBjb25zdCBuZXdUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIGxldCBkaWZmID0gbmV3VGltZSAtIHRoaXMudGltZTtcbiAgICAgICAgdGhpcy50aW1lID0gbmV3VGltZTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDEyO1xuICAgICAgICB0aGlzLmN0eC5hcmModGhpcy54LCB0aGlzLnksIHRoaXMucmFkaXVzLCB0aGlzLmFuZ2xlLCB0aGlzLmVuZEFuZ2xlICsgdGhpcy5hbmdsZSwgZmFsc2UpO1xuICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgdGhpcy5hbmdsZSArPSBkaWZmICogdGhpcy5yb3RhdGlvbjtcbiAgICAgICAgdGhpcy5hbmdsZSAlPSAyICogTWF0aC5QSTtcblxuICAgICAgICB0aGlzLmdhcC5hbmdsZSArPSBkaWZmICogdGhpcy5yb3RhdGlvbjtcbiAgICAgICAgdGhpcy5nYXAuYW5nbGUgJT0gMiAqIE1hdGguUEk7XG5cbiAgICAgICAgaWYgKHRoaXMuYW5nbGUgPCAwKSB7XG4gICAgICAgICAgICB0aGlzLmFuZ2xlID0gMiAqIE1hdGguUEk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5hbmdsZSA+IDIgKiBNYXRoLlBJKSB7XG4gICAgICAgICAgICB0aGlzLmFuZ2xlICU9IDIgKiBNYXRoLlBJO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZ2FwLmFuZ2xlIDwgMCkge1xuICAgICAgICAgICAgdGhpcy5nYXAuYW5nbGUgPSAyICogTWF0aC5QSTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmdhcC5hbmdsZSA+IDIgKiBNYXRoLlBJKSB7XG4gICAgICAgICAgICB0aGlzLmdhcC5hbmdsZSAlPSAyICogTWF0aC5QSTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZSgpe1xuICAgICAgICBpZih0aGlzLnJhZGl1cyA+IDMwKSB7XG4gICAgICAgICAgICB0aGlzLnJhZGl1cyAtPSAzO1xuICAgICAgICAgICAgdGhpcy5nYXAucmFkaXVzIC09IDM7XG4gICAgICAgIH0gXG4gICAgICAgIHRoaXMuZ2FwLmRyYXcoKTtcbiAgICAgICAgdGhpcy5kcmF3KCk7XG4gICAgfVxuXG5cbiAgICByZXZlcnNlKCl7XG4gICAgICAgIGlmKHRoaXMucmFkaXVzID09PSAyOTApe1xuICAgICAgICAgICAgdGhpcy5yb3RhdGlvbiAqPSAtMS4yO1xuICAgICAgICB9XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=