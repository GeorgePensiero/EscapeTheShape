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
            this.ctx.font = "20px Georgia";
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
            this.ctx.clearRect(0, 0, DIM_X, DIM_Y);
            this.ctx.fillStyle = color;
            this.ctx.font = "48px unicorn";
            this.centerText(title, y + 60);

            this.ctx.font = "48px unicorn";
            this.centerText(highScore, y - 100);
            this.centerText(score, y - 50);
            this.ctx.fillStyle = color;
            this.ctx.font = "24px unicorn";
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
            var gradient = this.ctx.createLinearGradient(0, 0, this.canvas.width, 0);
            gradient.addColorStop("0", "#C873C8");
            gradient.addColorStop("0.5", "#91D7A1");
            gradient.addColorStop("1.0", "#DDD830");
            this.ctx.clearRect(0, 0, DIM_X, DIM_Y);
            this.ctx.fillStyle = gradient;
            this.ctx.font = "48px unicorn";
            this.centerText(title, y);

            this.ctx.fillStyle = color;
            this.ctx.font = "24px unicorn";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qYXZhc2NyaXB0L2NpcmNsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvamF2YXNjcmlwdC9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9qYXZhc2NyaXB0L2dhbWVfdmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvamF2YXNjcmlwdC9nYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2phdmFzY3JpcHQvcGxheWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qYXZhc2NyaXB0L3NvdW5kLmpzIiwid2VicGFjazovLy8uL3NyYy9qYXZhc2NyaXB0L3dhbGwuanMiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJ3aWR0aCIsImhlaWdodCIsImN0eCIsImdldENvbnRleHQiLCJnYW1lVmlldyIsIkdhbWVWaWV3IiwiZ2FtZSIsInBsYXllciIsImhhbmRsZVByZXNzIiwiZSIsImdhbWVTdGFydCIsImhhbmRsZUtleVVwIiwiYW5pbWF0ZSIsIkNpcmNsZSIsIngiLCJ5IiwicmFkaXVzIiwiY29sb3IiLCJyYWRpYW5zIiwiTWF0aCIsInJhbmRvbSIsIlBJIiwidmVsb2NpdHkiLCJkaXN0YW5jZUZyb21DZW50ZXIiLCJyYW5kb21JbnRGcm9tUmFuZ2UiLCJwYXJ0aWNsZXMiLCJwcmV2aW91c1BvaW50IiwiY29zIiwic2luIiwiZHJhdyIsImJlZ2luUGF0aCIsInN0cm9rZVN0eWxlIiwibGluZVdpZHRoIiwibW92ZVRvIiwibGluZVRvIiwic3Ryb2tlIiwiY2xvc2VQYXRoIiwiaSIsInB1c2giLCJyYW5kb21Db2xvciIsImNvbG9ycyIsImZvckVhY2giLCJwYXJ0aWNsZSIsInVwZGF0ZSIsIm1pbiIsIm1heCIsImZsb29yIiwiRElNX1giLCJESU1fWSIsIkNPTE9SX1NDSEVNRSIsIkdhbWUiLCJQbGF5ZXIiLCJ3YWxscyIsInRpbWVyIiwic2NvcmUiLCJpbkdhbWUiLCJkZWFkIiwiYmciLCJoaWdoU2NvcmUiLCJzcGVlZCIsInRoZW1lU29uZyIsIlNvdW5kIiwiZ2FtZU92ZXJTb25nIiwiZ09Mb29wIiwibGVuZ3RoIiwiZ2V0RWxlbWVudEJ5SWQiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsInN0YXJ0U2NyZWVuIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJ1biIsImdhbWVPdmVyIiwid2FsbCIsIldhbGwiLCJpbmNyZWFzZVNwZWVkIiwibWFwIiwicmV2ZXJzZSIsImZvbnQiLCJmaWxsVGV4dCIsInRleHQiLCJtZWFzdXJlbWVudCIsIm1lYXN1cmVUZXh0IiwibWVhc3VyZW1lbnR3aWR0aCIsImNsZWFyUmVjdCIsImNlbnRlclgiLCJjZW50ZXJZIiwiYXJjIiwiZG9XYWxsc0V4aXN0IiwiaXNXYWxsT25QbGF5ZXIiLCJzaXplIiwiY2hlY2tDb2xsaXNpb24iLCJnYXAiLCJzaG93U2NvcmUiLCJjb25zb2xlIiwibG9nIiwid2FsbFNwYWNlIiwic2V0VGltZW91dCIsImFkZFdhbGwiLCJzaGlmdCIsImluY3JlYXNlRGlmZmljdWx0eSIsInVwZGF0ZVNjb3JlIiwiY2hhbmdlQkciLCJzdG9wIiwicGxheSIsInRpdGxlIiwiZW50ZXIiLCJmaWxsU3R5bGUiLCJjZW50ZXJUZXh0IiwiY29sbGlzaW9uIiwiZ2FwUG9zIiwiZ2V0UG9zaXRpb24iLCJwbGF5ZXJBbmdsZSIsInBsYXllckxlZnQiLCJhbmdsZSIsImVuZEFuZ2xlIiwicGFydGlhbENpcmNsZUFuZ2xlIiwiZ3JhZGllbnQiLCJjcmVhdGVMaW5lYXJHcmFkaWVudCIsImFkZENvbG9yU3RvcCIsInByZXZlbnREZWZhdWx0Iiwid2hpY2giLCJrZXlDb2RlIiwiaW5pdCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImJpbmQiLCJHYXAiLCJyb3RhdGlvbiIsInRpbWUiLCJnbG9iYWxBbHBoYSIsInBvc2l0aW9uIiwic3RhcnQiLCJlbmQiLCJjMSIsImMyIiwiZGlyZWN0aW9uIiwicGxheWVyUG9zIiwiZHgiLCJkeSIsInRyYW5zbGF0ZSIsInJvdGF0ZSIsImZpbGwiLCJrZXkiLCJzcmMiLCJzb3VuZCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJkaXNwbGF5IiwiYm9keSIsImFwcGVuZENoaWxkIiwicGF1c2UiLCJjdXJyZW50VGltZSIsIkRhdGUiLCJnZXRUaW1lIiwibmV3VGltZSIsImRpZmYiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBQSxTQUFTQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBWTtBQUN0RCxRQUFNQyxTQUFTRixTQUFTRyxvQkFBVCxDQUE4QixRQUE5QixFQUF3QyxDQUF4QyxDQUFmO0FBQ0FELFdBQU9FLEtBQVAsR0FBZSxJQUFmO0FBQ0FGLFdB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LEdBQUwsQ0FBUzlELElBQVQ7QUFDQSxpQkFBS0EsSUFBTDtBQUNIOzs7a0NBR1E7QUFDTCxnQkFBRyxLQUFLYixNQUFMLEtBQWdCLEdBQW5CLEVBQXVCO0FBQ25CLHFCQUFLOEcsUUFBTCxJQUFpQixDQUFDLEdBQWxCO0FBQ0g7QUFDSjs7Ozs7O2tCQS9EZ0JyRCxJIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFBsYXllciBmcm9tICcuL2phdmFzY3JpcHQvcGxheWVyJztcbmltcG9ydCBHYW1lIGZyb20gJy4vamF2YXNjcmlwdC9nYW1lJztcbmltcG9ydCBHYW1lVmlldyBmcm9tICcuL2phdmFzY3JpcHQvZ2FtZV92aWV3JztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiY2FudmFzXCIpWzBdO1xuICAgIGNhbnZhcy53aWR0aCA9IDEwMDA7XG4gICAgY2FudmFzLmhlaWdodCA9IDYwMDtcblxuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cblxuICAgIGNvbnN0IGdhbWVWaWV3ID0gbmV3IEdhbWVWaWV3KGNhbnZhcywgY3R4KTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZSA9PiBnYW1lVmlldy5nYW1lLnBsYXllci5oYW5kbGVQcmVzcyhlKSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGUgPT4gZ2FtZVZpZXcuZ2FtZS5nYW1lU3RhcnQoZSkpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZSA9PiBnYW1lVmlldy5nYW1lLnBsYXllci5oYW5kbGVLZXlVcChlKSk7XG4gICAgZ2FtZVZpZXcuYW5pbWF0ZSgpO1xufSk7XG5cblxuXG4iLCJcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENpcmNsZSB7XG4gICAgY29uc3RydWN0b3IoeCwgeSwgcmFkaXVzLCBjb2xvciwgY3R4KXtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy5yYWRpdXMgPSByYWRpdXM7XG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICAgICAgdGhpcy5yYWRpYW5zID0gTWF0aC5yYW5kb20oKSAqIE1hdGguUEkgKiAyO1xuICAgICAgICB0aGlzLnZlbG9jaXR5ID0gMC4wNTtcbiAgICAgICAgdGhpcy5kaXN0YW5jZUZyb21DZW50ZXIgPSB0aGlzLnJhbmRvbUludEZyb21SYW5nZSgwLCAzMCk7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLnBhcnRpY2xlcyA9IFtdO1xuICAgIH1cblxuICAgXG5cbiAgICB1cGRhdGUoKXtcbiAgICAgICAgY29uc3QgcHJldmlvdXNQb2ludCA9IHt4OiB0aGlzLngsIHk6IHRoaXMueX07XG4gICAgICAgIC8vIE1vdmUgcG9pbnRzIG92ZXIgdGltZVxuICAgICAgICB0aGlzLnJhZGlhbnMgKz0gdGhpcy52ZWxvY2l0eTtcbiAgICAgICAgdGhpcy54ID0gdGhpcy54ICsgTWF0aC5jb3ModGhpcy5yYWRpYW5zKSAqIHRoaXMuZGlzdGFuY2VGcm9tQ2VudGVyO1xuICAgICAgICB0aGlzLnkgPSB0aGlzLnkgKyBNYXRoLnNpbih0aGlzLnJhZGlhbnMpICogdGhpcy5kaXN0YW5jZUZyb21DZW50ZXI7XG4gICAgICAgIHRoaXMuZHJhdyhwcmV2aW91c1BvaW50KTtcbiAgICB9XG5cbiAgICBkcmF3KHByZXZpb3VzUG9pbnQpe1xuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSB0aGlzLnJhZGl1cztcbiAgICAgICAgdGhpcy5jdHgubW92ZVRvKHByZXZpb3VzUG9pbnQueCwgcHJldmlvdXNQb2ludC55KTtcbiAgICAgICAgdGhpcy5jdHgubGluZVRvKHRoaXMueCwgdGhpcy55KTtcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuICAgIH1cblxuICAgIGluaXQoKXtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IDUwOyBpKyspe1xuICAgICAgICAgICAgY29uc3QgcmFkaXVzID0gKE1hdGgucmFuZG9tKCkgKiAyKSArIDE7XG4gICAgICAgICAgICB0aGlzLnBhcnRpY2xlcy5wdXNoKG5ldyBDaXJjbGUoNTAwLCAzMDAsIHJhZGl1cywgdGhpcy5yYW5kb21Db2xvcihjb2xvcnMpLCBjdHgpKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYW5pbWF0ZSgpe1xuICAgICAgICB0aGlzLnBhcnRpY2xlcy5mb3JFYWNoKHBhcnRpY2xlID0+IHtcbiAgICAgICAgICAgIHBhcnRpY2xlLnVwZGF0ZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByYW5kb21JbnRGcm9tUmFuZ2UobWluLCBtYXgpe1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpICsgbWluKTtcbiAgICB9XG59IiwiaW1wb3J0IFBsYXllciBmcm9tIFwiLi9wbGF5ZXJcIjtcbmltcG9ydCBXYWxsIGZyb20gXCIuL3dhbGxcIjtcbmltcG9ydCBDaXJjbGUgZnJvbSAnLi9jaXJjbGUnO1xuaW1wb3J0IFNvdW5kIGZyb20gJy4vc291bmQnO1xuY29uc3QgRElNX1ggPSAxMDAwO1xuY29uc3QgRElNX1kgPSA2MDA7XG5jb25zdCBDT0xPUl9TQ0hFTUUgPSBbXCIjZmZjZTAwXCIsIFwiYzlmZjAwXCIsIFwiIzQ5ZmYwMFwiLCBcIiMwMGZmZWNcIiwgXCIjMDBkMmZmXCJdXG5jb25zdCBjb2xvcnMgPSBbXG4gICAgXCIjMDBiZGZmXCIsXG4gICAgXCIjNGQzOWNlXCIsXG4gICAgXCIjMDg4ZWZmXCIsXG5dO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBjdHgpIHtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIodGhpcy5jYW52YXMsIHRoaXMuY3R4KVxuICAgICAgICB0aGlzLndhbGxzID0gW107XG4gICAgICAgIHRoaXMudGltZXIgPSBudWxsO1xuICAgICAgICB0aGlzLnNjb3JlID0gMDtcbiAgICAgICAgdGhpcy5pbkdhbWUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kZWFkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYmcgPSBcIiM0ODYzOWNcIjtcbiAgICAgICAgdGhpcy5oaWdoU2NvcmUgPSAwO1xuICAgICAgICB0aGlzLnNwZWVkID0gWy0uMDAxLCAuMDAxXTtcbiAgICAgICAgdGhpcy50aGVtZVNvbmcgPSBuZXcgU291bmQoXCJnYW1ldGhlbWUubXAzXCIpO1xuICAgICAgICB0aGlzLmdhbWVPdmVyU29uZyA9IG5ldyBTb3VuZChcImdhbWVPdmVyLm1wM1wiKTtcbiAgICAgICAgdGhpcy5nT0xvb3AgPSB0cnVlO1xuICAgIH1cblxuICAgIHJhbmRvbUNvbG9yKGNvbG9ycykge1xuICAgICAgICByZXR1cm4gY29sb3JzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNvbG9ycy5sZW5ndGgpXTtcbiAgICB9XG5cbiAgICBjaGFuZ2VCRygpIHtcbiAgICAgICAgY29uc3QgcmFuZG9tQ29sb3IgPSBDT0xPUl9TQ0hFTUVbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogQ09MT1JfU0NIRU1FLmxlbmd0aCldO1xuICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15Q2FudmFzXCIpO1xuICAgICAgICB0aGlzLmJnID0gY2FudmFzLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHJhbmRvbUNvbG9yO1xuICAgIH1cblxuICAgIGluaXQoKXtcbiAgICAgICAgaWYoIXRoaXMuaW5HYW1lKXtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRTY3JlZW4oKTtcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuaW5HYW1lICYmICF0aGlzLmRlYWQpe1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGUgPT4gdGhpcy5nYW1lU3RhcnQoZSkpO1xuICAgICAgICAgICAgdGhpcy5ydW4oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXIoKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgYWRkV2FsbCgpe1xuICAgICAgICBjb25zdCB3YWxsID0gbmV3IFdhbGwodGhpcy5jdHgsIHRoaXMuY2FudmFzLndpZHRoIC8gMiwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMiwgdGhpcy5jYW52YXMud2lkdGggLyAyLCBcIiMyMjMxNDJcIiwgdGhpcy5zcGVlZFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLnNwZWVkLmxlbmd0aCldKVxuICAgICAgICB0aGlzLndhbGxzLnB1c2god2FsbCk7XG4gICAgICAgIHRoaXMudGltZXIgPSBudWxsO1xuICAgIH1cblxuICAgIGluY3JlYXNlRGlmZmljdWx0eSgpe1xuICAgICAgICBsZXQgcmFkaXVzO1xuICAgICAgICBpZih0aGlzLndhbGxzLmxlbmd0aCkgeyByYWRpdXMgPSB0aGlzLndhbGxzWzBdLnJhZGl1c31cbiAgICAgICAgaWYodGhpcy5zY29yZSA9PT0gMTAgJiYgcmFkaXVzID09PSA0Nyl7XG4gICAgICAgICAgICB0aGlzLmluY3JlYXNlU3BlZWQodGhpcy53YWxscyk7XG4gICAgICAgICAgICBcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuc2NvcmUgPT09IDIwICYmIHJhZGl1cyA9PT0gNDcpe1xuICAgICAgICAgICAgdGhpcy5pbmNyZWFzZVNwZWVkKHRoaXMud2FsbHMpO1xuICAgICAgICB9IGVsc2UgaWYodGhpcy5zY29yZSA9PT0gMzAgJiYgcmFkaXVzID09PSA0Nyl7XG4gICAgICAgICAgICB0aGlzLmluY3JlYXNlU3BlZWQodGhpcy53YWxscyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZih0aGlzLnNjb3JlID09PSA0MCAmJiByYWRpdXMgPT09IDQ3KXtcbiAgICAgICAgICAgIHRoaXMuaW5jcmVhc2VTcGVlZCh0aGlzLndhbGxzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLnNjb3JlID09PSA1MCAmJiByYWRpdXMgPT09IDQ3KSB7XG4gICAgICAgICAgICB0aGlzLmluY3JlYXNlU3BlZWQodGhpcy53YWxscyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5zY29yZSA9PT0gNjAgJiYgcmFkaXVzID09PSA0Nykge1xuICAgICAgICAgICAgdGhpcy5pbmNyZWFzZVNwZWVkKHRoaXMud2FsbHMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuc2NvcmUgPT09IDcwICYmIHJhZGl1cyA9PT0gNDcpIHtcbiAgICAgICAgICAgIHRoaXMuaW5jcmVhc2VTcGVlZCh0aGlzLndhbGxzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLnNjb3JlID09PSA4MCAmJiByYWRpdXMgPT09IDQ3KXtcbiAgICAgICAgICAgIHRoaXMuc3BlZWQgPSB0aGlzLnNwZWVkLm1hcChzcGVlZCA9PiBzcGVlZCAqIDEwKTtcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLnNjb3JlID4gMzApe1xuICAgICAgICAgICAgdGhpcy53YWxscy5mb3JFYWNoKHdhbGwgPT4ge1xuICAgICAgICAgICAgICAgIHdhbGwucmV2ZXJzZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgfVxuICAgIFxuXG4gICAgaW5jcmVhc2VTcGVlZCh3YWxscyl7XG4gICAgICAgIHRoaXMuc3BlZWQgPSB0aGlzLnNwZWVkLm1hcChzcGVlZCA9PiBzcGVlZCAqIDEuMik7XG4gICAgfVxuXG4gICAgYWxsV2FsbHMoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMud2FsbHM7XG4gICAgfVxuXG4gICAgc2hvd1Njb3JlKCl7XG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5mb250ID0gXCIyMHB4IEdlb3JnaWFcIjtcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJTY29yZTogXCIgKyB0aGlzLnNjb3JlLCB0aGlzLmNhbnZhcy53aWR0aCAtIDEwMCwgMzApO1xuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcbiAgICB9XG5cbiAgICBjZW50ZXJUZXh0KHRleHQsIHkpe1xuICAgICAgICBjb25zdCBtZWFzdXJlbWVudCA9IHRoaXMuY3R4Lm1lYXN1cmVUZXh0KHRleHQpO1xuICAgICAgICBjb25zdCBtZWFzdXJlbWVudHdpZHRoID0gKHRoaXMuY2FudmFzLndpZHRoIC0gbWVhc3VyZW1lbnQud2lkdGgpIC8gMjtcbiAgICAgICAgY29uc3QgeCA9ICh0aGlzLmNhbnZhcy53aWR0aCAtIG1lYXN1cmVtZW50LndpZHRoKSAvIDI7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KHRleHQsIHgsIHkpO1xuICAgIH1cbiAgICBcbiAgICBkcmF3KCkge1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgRElNX1gsIERJTV9ZKTtcbiAgICAgICAgY29uc3QgY2VudGVyWCA9IERJTV9YIC8gMjtcbiAgICAgICAgY29uc3QgY2VudGVyWSA9IERJTV9ZIC8gMjtcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDE7XG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICB0aGlzLmN0eC5hcmMoY2VudGVyWCwgY2VudGVyWSwgMzAsIDAsIDIgKiBNYXRoLlBJLCBmYWxzZSk7XG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgdGhpcy53YWxscy5mb3JFYWNoKHdhbGwgPT4ge1xuICAgICAgICAgICAgd2FsbC51cGRhdGUoKTtcbiAgICAgICAgICAgIC8vIHdhbGwuZ2FwLnVwZGF0ZSgpO1xuICAgICAgICB9KVxuICAgICAgICB0aGlzLnBsYXllci5kcmF3KDUpO1xuICAgIFxuICAgICAgICBjb25zdCBkb1dhbGxzRXhpc3QgPSB0aGlzLndhbGxzLmxlbmd0aCA+IDA7XG4gICAgICAgIGlmKGRvV2FsbHNFeGlzdCl7XG5cbiAgICAgICAgICAgIC8vVE9ETzogd2UgY2hlY2sgZm9yIGNvbGxpc2lvbiB3aGVuIHRoZSB3YWxsIGlzIGxpdGVyYWxseSBvbnRvcCBvZiB0aGUgcGxheWVyXG4gICAgICAgICAgICAvLyBtYXliZSBmaW5kIGEgc3dlZXQgc3BvdCB3aXRoIHRoaXMucGxheWVyLnJhZGl1cyArIDEgb3Igc29tZXRoaW5nIGNhdXNlIHRoZSB0cmlhbmdsZSBoYXNcbiAgICAgICAgICAgIC8vIGEgc2l6ZSB0byBpdC5cbiAgICAgICAgICAgIGNvbnN0IGlzV2FsbE9uUGxheWVyID0gdGhpcy53YWxsc1swXS5yYWRpdXMgPD0gdGhpcy5wbGF5ZXIucmFkaXVzICsgdGhpcy5wbGF5ZXIuc2l6ZSArIDYgJiYgdGhpcy53YWxsc1swXS5yYWRpdXMgPj0gdGhpcy5wbGF5ZXIucmFkaXVzO1xuICAgICAgICAgICAgaWYgKGlzV2FsbE9uUGxheWVyKXtcbiAgICAgICAgICAgICAgICBpZighdGhpcy5jaGVja0NvbGxpc2lvbih0aGlzLnBsYXllciwgdGhpcy53YWxsc1swXS5nYXApKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWFkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMud2FsbHNbMF0uYW5nbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2hvd1Njb3JlKCk7XG4gICAgICAgIGlmKHRoaXMud2FsbHMubGVuZ3RoKSB7Y29uc29sZS5sb2codGhpcy53YWxsc1swXS5yYWRpdXMpIH07XG4gICAgICAgIC8vIHRoaXMuY3R4LnN0cm9rZSgpO1xuICAgICAgICAvLyB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcbiAgICB9XG4gICAgXG4gICAgcnVuKCl7XG4gICAgICAgIGNvbnN0IHdhbGxTcGFjZSA9IDEwMDA7XG4gICAgICAgIGlmKHRoaXMud2FsbHMubGVuZ3RoIDwgOCAmJiB0aGlzLnRpbWVyID09PSBudWxsKXtcbiAgICAgICAgICAgIHRoaXMudGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHRoaXMuYWRkV2FsbCgpLCB3YWxsU3BhY2UpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLndhbGxzLmxlbmd0aCA+IDAgJiYgdGhpcy53YWxsc1swXS5yYWRpdXMgPCAzMCkgeyB0aGlzLndhbGxzLnNoaWZ0KCl9XG4gICAgICAgIHRoaXMuaW5jcmVhc2VEaWZmaWN1bHR5KCk7XG4gICAgICAgIHRoaXMuZHJhdygpO1xuICAgICAgICB0aGlzLnVwZGF0ZVNjb3JlKCk7XG4gICAgICAgIH1cblxuICAgIHVwZGF0ZVNjb3JlKCl7XG4gICAgICAgIGlmKHRoaXMud2FsbHMubGVuZ3RoKXtcbiAgICAgICAgICAgIGlmICh0aGlzLndhbGxzWzBdLnJhZGl1cyA9PT0gMzIpIHsgXG4gICAgICAgICAgICAgICAgdGhpcy5zY29yZSArPSAxO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlQkcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG5cbiAgICBnYW1lT3Zlcigpe1xuICAgICAgICBpZih0aGlzLnNjb3JlID4gdGhpcy5oaWdoU2NvcmUpIHtcbiAgICAgICAgICAgIHRoaXMuaGlnaFNjb3JlID0gdGhpcy5zY29yZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRoZW1lU29uZy5zdG9wKCk7XG4gICAgICAgIGlmKHRoaXMuZ09Mb29wKXtcbiAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXJTb25nLnBsYXkoKTtcbiAgICAgICAgICAgIHRoaXMuZ09Mb29wID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUNhbnZhc1wiKTtcbiAgICAgICAgY2FudmFzLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IChcIiM0ODYzOWNcIik7XG4gICAgICAgIHRoaXMud2FsbHMgPSBbXTtcbiAgICAgICAgdGhpcy5zcGVlZCA9IFstLjAwMSwgLjAwMV07XG4gICAgICAgIGxldCB5ID0gdGhpcy5jYW52YXMuaGVpZ2h0IC8gMjtcbiAgICAgICAgbGV0IGNvbG9yID0gXCIjRkYwMDAwXCI7XG4gICAgICAgIGxldCB0aXRsZSA9IFwiR2FtZSBPdmVyXCI7XG4gICAgICAgIGxldCBlbnRlciA9IFwiVHJ5IGFnYWluXCI7XG4gICAgICAgIGxldCBzY29yZSA9IGBTY29yZTogJHt0aGlzLnNjb3JlfWA7XG4gICAgICAgIGxldCBoaWdoU2NvcmUgPSBgSGlnaCBTY29yZTogJHt0aGlzLmhpZ2hTY29yZX1gO1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgRElNX1gsIERJTV9ZKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gY29sb3I7XG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcIjQ4cHggdW5pY29yblwiO1xuICAgICAgICB0aGlzLmNlbnRlclRleHQodGl0bGUsIHkgKyA2MCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmN0eC5mb250ID0gXCI0OHB4IHVuaWNvcm5cIjtcbiAgICAgICAgdGhpcy5jZW50ZXJUZXh0KGhpZ2hTY29yZSwgeSAtIDEwMCk7XG4gICAgICAgIHRoaXMuY2VudGVyVGV4dChzY29yZSwgeSAtIDUwKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gY29sb3I7XG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcIjI0cHggdW5pY29yblwiO1xuICAgICAgICB0aGlzLmNlbnRlclRleHQoZW50ZXIsIHkgKyAxMDApO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZSA9PiB0aGlzLmdhbWVTdGFydChlKSk7XG4gICAgfVxuXG4gICAgY2hlY2tDb2xsaXNpb24ocGxheWVyLCBnYXApe1xuICAgICAgICBsZXQgY29sbGlzaW9uID0gZmFsc2U7XG4gICAgICAgIGxldCBnYXBQb3MgPSBnYXAuZ2V0UG9zaXRpb24oKTtcbiAgICAgICAgbGV0IHBsYXllckFuZ2xlID0gcGxheWVyLmdldFBvc2l0aW9uKCkgKiBNYXRoLlBJIC8gMTgwO1xuICAgICAgICBsZXQgcGxheWVyTGVmdCA9ICh0aGlzLmNhbnZhcy5oZWlnaHQgLyAyKSArICgodGhpcy5yYWRpdXMpICogTWF0aC5zaW4odGhpcy5hbmdsZSAqIE1hdGguUEkgLyAxODApKTtcbiAgICAgICAgbGV0IGVuZEFuZ2xlID0gZ2FwLmFuZ2xlIC0gKDIgKiBNYXRoLlBJIC0gZ2FwLnBhcnRpYWxDaXJjbGVBbmdsZSk7XG4gICAgICAgIGlmIChlbmRBbmdsZSA8IDApIHtcbiAgICAgICAgICAgIGVuZEFuZ2xlICs9IDIqTWF0aC5QSTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmKHBsYXllclBvcyA+IGdhcFBvc1tzdGFydF0gJiYgcGxheWVyUG9zIDwgZ2FwUG9zW2VuZF0pIGNvbGxpc2lvbiA9IHRydWU7XG5cbiAgICAgICAgLy8gdGhlIGNhc2Ugd2hlbiB0aGUgZ2FwIHN0cmFkZGxlcyB0aGUgaG9yaXpvbnRhbFxuXG4gICAgICAgIGlmIChnYXAuYW5nbGUgPCBlbmRBbmdsZSl7XG4gICAgICAgICAgICBpZiAoKHBsYXllckFuZ2xlICA+IGVuZEFuZ2xlIFxuICAgICAgICAgICAgICAgICYmIHBsYXllckFuZ2xlIDwgMiAqIE1hdGguUEkpIFxuICAgICAgICAgICAgICAgIHx8IHBsYXllckFuZ2xlIDwgZ2FwLmFuZ2xlICYmIHBsYXllckFuZ2xlID4gMCl7XG4gICAgICAgICAgICAgICAgY29sbGlzaW9uID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwbGF5ZXJBbmdsZSA8IGdhcC5hbmdsZSAmJlxuICAgICAgICAgICAgcGxheWVyQW5nbGUgPiBlbmRBbmdsZSkge1xuICAgICAgICAgICAgICAgIGNvbGxpc2lvbiA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgaWYoY29sbGlzaW9uID09PSB0cnVlKXtcbiAgICAgICAgICAgIC8vIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gJ2JsdWUnXG4gICAgICAgICAgICAvLyB0aGlzLmN0eC5zdHJva2VSZWN0KERJTV9YIC8gMiAtIDI1LCBESU1fWSAvIDIgLSAyNSwgNTAsIDUwKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb2xsaXNpb247XG4gICAgfVxuXG4gICAgc3RhcnRTY3JlZW4oKXtcbiAgICAgICAgbGV0IHkgPSB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyO1xuICAgICAgICBsZXQgY29sb3IgPSBcIiNDQzI5MzM2XCI7XG4gICAgICAgIGxldCB0aXRsZSA9IFwiRXNjYXBlIHRoZSBTaGFwZVwiO1xuICAgICAgICBsZXQgZW50ZXIgPSBcIlByZXNzIEVudGVyXCI7XG4gICAgICAgIGNvbnN0IGdyYWRpZW50ID0gdGhpcy5jdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIDApO1xuICAgICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoXCIwXCIsIFwiI0M4NzNDOFwiKTtcbiAgICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKFwiMC41XCIsIFwiIzkxRDdBMVwiKTtcbiAgICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKFwiMS4wXCIsIFwiI0RERDgzMFwiKTtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIERJTV9YLCBESU1fWSk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IGdyYWRpZW50O1xuICAgICAgICB0aGlzLmN0eC5mb250ID0gXCI0OHB4IHVuaWNvcm5cIjtcbiAgICAgICAgdGhpcy5jZW50ZXJUZXh0KHRpdGxlLCB5KTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgICAgICB0aGlzLmN0eC5mb250ID0gXCIyNHB4IHVuaWNvcm5cIjtcbiAgICAgICAgdGhpcy5jZW50ZXJUZXh0KGVudGVyLCB5ICsgMzApO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZSA9PiB0aGlzLmdhbWVTdGFydChlKSk7XG4gICAgfVxuXG4gICAgZ2FtZVN0YXJ0KGUpe1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuZ09Mb29wID0gdHJ1ZTtcbiAgICAgICAgaWYoZS53aGljaCA9PT0gMTMgfHwgZS5rZXlDb2RlID09PSAxMykge1xuICAgICAgICAgICAgdGhpcy50aGVtZVNvbmcucGxheSgpO1xuICAgICAgICAgICAgdGhpcy5pbkdhbWUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5iZyA9IFwiIzQ4NjM5Y1wiXG4gICAgICAgICAgICB0aGlzLmRlYWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuc2NvcmUgPSAwO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCBHYW1lIGZyb20gJy4vZ2FtZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVWaWV3IHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGN0eCkge1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuZ2FtZSA9IG5ldyBHYW1lKHRoaXMuY2FudmFzLCB0aGlzLmN0eCk7XG4gICAgfVxuXG4gICAgXG5cblxuICAgIGFuaW1hdGUoKSB7XG4gICAgICAgIHRoaXMuZ2FtZS5pbml0KCk7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUuYmluZCh0aGlzKSk7XG4gICAgfVxufSIsIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYXAge1xuICAgIGNvbnN0cnVjdG9yKGN0eCwgeCAsIHksIHJhZGl1cywgYW5nbGUsIHJvdGF0aW9uLCB0aW1lKXtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMucmFkaXVzID0gcmFkaXVzOyBcbiAgICAgICAgdGhpcy5yb3RhdGlvbiA9IHJvdGF0aW9uO1xuICAgICAgICB0aGlzLmFuZ2xlID0gYW5nbGU7XG4gICAgICAgIHRoaXMucGFydGlhbENpcmNsZUFuZ2xlID0gMiAqIE1hdGguUEkgLSAxLjI7XG4gICAgfVxuXG4gICAgZHJhdygpe1xuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHguZ2xvYmFsQWxwaGEgPSAwLjA7XG4gICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDg7XG4gICAgICAgIHRoaXMuY3R4LmFyYyh0aGlzLngsIHRoaXMueSwgdGhpcy5yYWRpdXMsIHRoaXMuYW5nbGUsIHRoaXMucGFydGlhbENpcmNsZUFuZ2xlICsgdGhpcy5hbmdsZSwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHguZ2xvYmFsQWxwaGEgPSAxLjA7XG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgICBpZiAodGhpcy5yYWRpdXMgPiAzMCkge1xuICAgICAgICAgICAgdGhpcy5yYWRpdXMgLT0gMztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICB9XG5cbiAgICBnZXRQb3NpdGlvbigpe1xuICAgICAgIGNvbnN0IHBvc2l0aW9uID0ge1xuICAgICAgICAgICBzdGFydDogdGhpcy5hbmdsZSxcbiAgICAgICAgICAgZW5kOiB0aGlzLnBhcnRpYWxDaXJjbGVBbmdsZSArIHRoaXMuYW5nbGUsXG4gICAgICAgfVxuICAgICAgIHJldHVybiBwb3NpdGlvbjtcbiAgICB9XG5cbiAgICBnZXRQb2ludChjMSwgYzIsIHJhZGl1cywgYW5nbGUpIHtcbiAgICAgICAgcmV0dXJuIFtjMSArIE1hdGguY29zKGFuZ2xlKSAqIHJhZGl1cywgYzIgKyBNYXRoLnNpbihhbmdsZSkgKiByYWRpdXNdO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY3R4KSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5zaXplID0gNTtcbiAgICAgICAgdGhpcy5yYWRpdXMgPSA1NTtcbiAgICAgICAgdGhpcy5zcGVlZCA9IDc7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gMDtcbiAgICAgICAgdGhpcy5hbmdsZSA9IDMwO1xuICAgICAgICB0aGlzLnBsYXllclBvcyA9IFwibGVmdFwiO1xuICAgICAgICB0aGlzLmRyYXcgPSB0aGlzLmRyYXcuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBkcmF3KCkge1xuICAgICAgIFxuICAgICAgICBjb25zdCBkeCA9ICh0aGlzLmNhbnZhcy53aWR0aCAvIDIpICsgKCh0aGlzLnJhZGl1cykgKiBNYXRoLmNvcyh0aGlzLmFuZ2xlICogTWF0aC5QSSAvIDE4MCkpO1xuICAgICAgICBjb25zdCBkeSA9ICh0aGlzLmNhbnZhcy5oZWlnaHQgLyAyKSArICgodGhpcy5yYWRpdXMpICogTWF0aC5zaW4odGhpcy5hbmdsZSAqIE1hdGguUEkgLyAxODApKTtcbiAgICAgICAgdGhpcy5hbmdsZSA9IHRoaXMuYW5nbGUgKyAodGhpcy5kaXJlY3Rpb24gKiB0aGlzLnNwZWVkKTtcblxuICAgICAgICBpZih0aGlzLmFuZ2xlIDwgMCkge1xuICAgICAgICAgICAgdGhpcy5hbmdsZSA9IDM2MCAtIHRoaXMuYW5nbGU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZih0aGlzLmFuZ2xlID4gMzYwKXtcbiAgICAgICAgICAgIHRoaXMuYW5nbGUgJT0gMzYwO1xuICAgICAgICB9XG4gICAgICAgIC8vIHRoaXMuY3R4LnNhdmUoKTtcbiAgICAgICAgdGhpcy5jdHgudHJhbnNsYXRlKGR4LCBkeSk7XG4gICAgICAgIHRoaXMuY3R4LnJvdGF0ZSh0aGlzLmFuZ2xlICogTWF0aC5QSSAvIDE4MCk7XG4gICAgICAgIC8vIHRoaXMuY3R4LnJlc3RvcmUoKTtcbiAgICAgICAgdGhpcy5jdHgudHJhbnNsYXRlKC1keCwgLWR5KTtcblxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICB0aGlzLmN0eC5tb3ZlVG8oZHggLSB0aGlzLnNpemUsIGR5IC0gdGhpcy5zaXplKTtcbiAgICAgICAgdGhpcy5jdHgubGluZVRvKGR4ICsgdGhpcy5zaXplLCBkeSk7XG4gICAgICAgIHRoaXMuY3R4LmxpbmVUbyhkeCAtIHRoaXMuc2l6ZSwgZHkgKyB0aGlzLnNpemUpO1xuICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgIHRoaXMuY3R4LnRyYW5zbGF0ZShkeCwgZHkpO1xuICAgICAgICB0aGlzLmN0eC5yb3RhdGUoLXRoaXMuYW5nbGUgKiBNYXRoLlBJIC8gMTgwKTtcbiAgICAgICAgdGhpcy5jdHgudHJhbnNsYXRlKC1keCwgLWR5KTtcblxuICAgIH1cbiAgICBoYW5kbGVQcmVzcyhlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgc3dpdGNoIChlLmtleSkge1xuICAgICAgICAgICAgY2FzZSAnQXJyb3dMZWZ0JzpcbiAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IC0xO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnQXJyb3dSaWdodCc6XG4gICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSAxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlS2V5VXAoZSl7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gMDtcbiAgICB9XG5cbiAgICBnZXRQb3NpdGlvbigpe1xuICAgICAgICByZXR1cm4gdGhpcy5hbmdsZTtcbiAgICB9XG59XG5cbiIsIlxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU291bmQge1xuICAgIGNvbnN0cnVjdG9yKHNyYyl7XG4gICAgICAgIHRoaXMuc291bmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXVkaW9cIik7XG4gICAgICAgIHRoaXMuc291bmQuc3JjID0gc3JjO1xuICAgICAgICB0aGlzLnNvdW5kLnNldEF0dHJpYnV0ZShcInByZWxvYWRcIiwgXCJhdXRvXCIpO1xuICAgICAgICB0aGlzLnNvdW5kLnNldEF0dHJpYnV0ZShcImNvbnRyb2xzXCIsIFwibm9uZVwiKTtcbiAgICAgICAgdGhpcy5zb3VuZC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5zb3VuZCk7XG4gICAgfVxuXG4gICAgcGxheSgpe1xuICAgICAgICB0aGlzLnNvdW5kLnBsYXkoKTtcbiAgICB9XG5cbiAgICBzdG9wKCl7XG4gICAgICAgIHRoaXMuc291bmQucGF1c2UoKTtcbiAgICAgICAgdGhpcy5zb3VuZC5jdXJyZW50VGltZSA9IDA7XG4gICAgfVxufVxuIiwiaW1wb3J0IEdhcCBmcm9tIFwiLi9nYXBcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2FsbCB7XG4gICAgY29uc3RydWN0b3IoY3R4LCB4LCB5LCByYWRpdXMsIGNvbG9yLCByb3RhdGlvbikge1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy5yYWRpdXMgPSByYWRpdXM7XG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICAgICAgdGhpcy50aW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIHRoaXMuYW5nbGUgPSBNYXRoLnJhbmRvbSgpICogKDIgKiBNYXRoLlBJKTtcbiAgICAgICAgdGhpcy5yb3RhdGlvbiA9IHJvdGF0aW9uO1xuICAgICAgICB0aGlzLmVuZEFuZ2xlID0gMiAqIE1hdGguUEkgLSAxLjI7XG4gICAgICAgIHRoaXMuZ2FwID0gbmV3IEdhcCh0aGlzLmN0eCwgdGhpcy54LCB0aGlzLnksIHRoaXMucmFkaXVzLCB0aGlzLmFuZ2xlLCB0aGlzLnJvdGF0aW9uLCB0aGlzLnRpbWUpO1xuICAgIH1cblxuICAgIGRyYXcoKXtcbiAgICAgICAgY29uc3QgbmV3VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICBsZXQgZGlmZiA9IG5ld1RpbWUgLSB0aGlzLnRpbWU7XG4gICAgICAgIHRoaXMudGltZSA9IG5ld1RpbWU7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSAxMjtcbiAgICAgICAgdGhpcy5jdHguYXJjKHRoaXMueCwgdGhpcy55LCB0aGlzLnJhZGl1cywgdGhpcy5hbmdsZSwgdGhpcy5lbmRBbmdsZSArIHRoaXMuYW5nbGUsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgIHRoaXMuYW5nbGUgKz0gZGlmZiAqIHRoaXMucm90YXRpb247XG4gICAgICAgIHRoaXMuYW5nbGUgJT0gMiAqIE1hdGguUEk7XG5cbiAgICAgICAgdGhpcy5nYXAuYW5nbGUgKz0gZGlmZiAqIHRoaXMucm90YXRpb247XG4gICAgICAgIHRoaXMuZ2FwLmFuZ2xlICU9IDIgKiBNYXRoLlBJO1xuXG4gICAgICAgIGlmICh0aGlzLmFuZ2xlIDwgMCkge1xuICAgICAgICAgICAgdGhpcy5hbmdsZSA9IDIgKiBNYXRoLlBJO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuYW5nbGUgPiAyICogTWF0aC5QSSkge1xuICAgICAgICAgICAgdGhpcy5hbmdsZSAlPSAyICogTWF0aC5QSTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmdhcC5hbmdsZSA8IDApIHtcbiAgICAgICAgICAgIHRoaXMuZ2FwLmFuZ2xlID0gMiAqIE1hdGguUEk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5nYXAuYW5nbGUgPiAyICogTWF0aC5QSSkge1xuICAgICAgICAgICAgdGhpcy5nYXAuYW5nbGUgJT0gMiAqIE1hdGguUEk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGUoKXtcbiAgICAgICAgaWYodGhpcy5yYWRpdXMgPiAzMCkge1xuICAgICAgICAgICAgdGhpcy5yYWRpdXMgLT0gMztcbiAgICAgICAgICAgIHRoaXMuZ2FwLnJhZGl1cyAtPSAzO1xuICAgICAgICB9IFxuICAgICAgICB0aGlzLmdhcC5kcmF3KCk7XG4gICAgICAgIHRoaXMuZHJhdygpO1xuICAgIH1cblxuXG4gICAgcmV2ZXJzZSgpe1xuICAgICAgICBpZih0aGlzLnJhZGl1cyA9PT0gMjkwKXtcbiAgICAgICAgICAgIHRoaXMucm90YXRpb24gKj0gLTEuMjtcbiAgICAgICAgfVxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9