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
            this.ctx.font = "48px Orbitron";
            this.centerText(title, y + 60);

            this.ctx.font = "48px Orbitron";
            this.centerText(highScore, y - 100);
            this.centerText(score, y - 50);
            this.ctx.fillStyle = color;
            this.ctx.font = "24px Orbitron";
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
            this.ctx.font = "48px Orbitron";
            this.centerText(title, y);

            this.ctx.fillStyle = color;
            this.ctx.font = "24px Orbitron";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qYXZhc2NyaXB0L2NpcmNsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvamF2YXNjcmlwdC9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9qYXZhc2NyaXB0L2dhbWVfdmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvamF2YXNjcmlwdC9nYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2phdmFzY3JpcHQvcGxheWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qYXZhc2NyaXB0L3NvdW5kLmpzIiwid2VicGFjazovLy8uL3NyYy9qYXZhc2NyaXB0L3dhbGwuanMiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJ3aWR0aCIsImhlaWdodCIsImN0eCIsImdldENvbnRleHQiLCJnYW1lVmlldyIsIkdhbWVWaWV3IiwiZ2FtZSIsInBsYXllciIsImhhbmRsZVByZXNzIiwiZSIsImdhbWVTdGFydCIsImhhbmRsZUtleVVwIiwiYW5pbWF0ZSIsIkNpcmNsZSIsIngiLCJ5IiwicmFkaXVzIiwiY29sb3IiLCJyYWRpYW5zIiwiTWF0aCIsInJhbmRvbSIsIlBJIiwidmVsb2NpdHkiLCJkaXN0YW5jZUZyb21DZW50ZXIiLCJyYW5kb21JbnRGcm9tUmFuZ2UiLCJwYXJ0aWNsZXMiLCJwcmV2aW91c1BvaW50IiwiY29zIiwic2luIiwiZHJhdyIsImJlZ2luUGF0aCIsInN0cm9rZVN0eWxlIiwibGluZVdpZHRoIiwibW92ZVRvIiwibGluZVRvIiwic3Ryb2tlIiwiY2xvc2VQYXRoIiwiaSIsInB1c2giLCJyYW5kb21Db2xvciIsImNvbG9ycyIsImZvckVhY2giLCJwYXJ0aWNsZSIsInVwZGF0ZSIsIm1pbiIsIm1heCIsImZsb29yIiwiRElNX1giLCJESU1fWSIsIkNPTE9SX1NDSEVNRSIsIkdhbWUiLCJQbGF5ZXIiLCJ3YWxscyIsInRpbWVyIiwic2NvcmUiLCJpbkdhbWUiLCJkZWFkIiwiYmciLCJoaWdoU2NvcmUiLCJzcGVlZCIsInRoZW1lU29uZyIsIlNvdW5kIiwiZ2FtZU92ZXJTb25nIiwiZ09Mb29wIiwibGVuZ3RoIiwiZ2V0RWxlbWVudEJ5SWQiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsInN0YXJ0U2NyZWVuIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJ1biIsImdhbWVPdmVyIiwid2FsbCIsIldhbGwiLCJpbmNyZWFzZVNwZWVkIiwibWFwIiwicmV2ZXJzZSIsImZvbnQiLCJmaWxsVGV4dCIsInRleHQiLCJtZWFzdXJlbWVudCIsIm1lYXN1cmVUZXh0IiwibWVhc3VyZW1lbnR3aWR0aCIsImNsZWFyUmVjdCIsImNlbnRlclgiLCJjZW50ZXJZIiwiYXJjIiwiZG9XYWxsc0V4aXN0IiwiaXNXYWxsT25QbGF5ZXIiLCJzaXplIiwiY2hlY2tDb2xsaXNpb24iLCJnYXAiLCJzaG93U2NvcmUiLCJ3YWxsU3BhY2UiLCJzZXRUaW1lb3V0IiwiYWRkV2FsbCIsInNoaWZ0IiwiaW5jcmVhc2VEaWZmaWN1bHR5IiwidXBkYXRlU2NvcmUiLCJjaGFuZ2VCRyIsInN0b3AiLCJwbGF5IiwidGl0bGUiLCJlbnRlciIsImZpbGxTdHlsZSIsImNlbnRlclRleHQiLCJjb2xsaXNpb24iLCJnYXBQb3MiLCJnZXRQb3NpdGlvbiIsInBsYXllckFuZ2xlIiwicGxheWVyTGVmdCIsImFuZ2xlIiwiZW5kQW5nbGUiLCJwYXJ0aWFsQ2lyY2xlQW5nbGUiLCJncmFkaWVudCIsImNyZWF0ZUxpbmVhckdyYWRpZW50IiwiYWRkQ29sb3JTdG9wIiwicHJldmVudERlZmF1bHQiLCJ3aGljaCIsImtleUNvZGUiLCJpbml0IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYmluZCIsIkdhcCIsInJvdGF0aW9uIiwidGltZSIsImdsb2JhbEFscGhhIiwicG9zaXRpb24iLCJzdGFydCIsImVuZCIsImMxIiwiYzIiLCJkaXJlY3Rpb24iLCJwbGF5ZXJQb3MiLCJkeCIsImR5IiwidHJhbnNsYXRlIiwicm90YXRlIiwiZmlsbCIsImtleSIsInNyYyIsInNvdW5kIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImRpc3BsYXkiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJwYXVzZSIsImN1cnJlbnRUaW1lIiwiRGF0ZSIsImdldFRpbWUiLCJuZXdUaW1lIiwiZGlmZiJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUFBLFNBQVNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFZO0FBQ3RELFFBQU1DLFNBQVNGLFNBQVNHLG9CQUFULENBQThCLFFBQTlCLEVBQXdDLENBQXhDLENBQWY7QUFDQUQsV0FBT0UsS0FBUCxHQUFlLElBQWY7QUFDQUYsV0FBT0csTUFBUCxHQUFnQixH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QUFDSDtBQUNKOzs7Ozs7a0JBL0RnQm5ELEkiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgUGxheWVyIGZyb20gJy4vamF2YXNjcmlwdC9wbGF5ZXInO1xuaW1wb3J0IEdhbWUgZnJvbSAnLi9qYXZhc2NyaXB0L2dhbWUnO1xuaW1wb3J0IEdhbWVWaWV3IGZyb20gJy4vamF2YXNjcmlwdC9nYW1lX3ZpZXcnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJjYW52YXNcIilbMF07XG4gICAgY2FudmFzLndpZHRoID0gMTAwMDtcbiAgICBjYW52YXMuaGVpZ2h0ID0gNjAwO1xuXG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblxuXG4gICAgY29uc3QgZ2FtZVZpZXcgPSBuZXcgR2FtZVZpZXcoY2FudmFzLCBjdHgpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBlID0+IGdhbWVWaWV3LmdhbWUucGxheWVyLmhhbmRsZVByZXNzKGUpKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZSA9PiBnYW1lVmlldy5nYW1lLmdhbWVTdGFydChlKSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBlID0+IGdhbWVWaWV3LmdhbWUucGxheWVyLmhhbmRsZUtleVVwKGUpKTtcbiAgICBnYW1lVmlldy5hbmltYXRlKCk7XG59KTtcblxuXG5cbiIsIlxuXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2lyY2xlIHtcbiAgICBjb25zdHJ1Y3Rvcih4LCB5LCByYWRpdXMsIGNvbG9yLCBjdHgpe1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cztcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgICAgICB0aGlzLnJhZGlhbnMgPSBNYXRoLnJhbmRvbSgpICogTWF0aC5QSSAqIDI7XG4gICAgICAgIHRoaXMudmVsb2NpdHkgPSAwLjA1O1xuICAgICAgICB0aGlzLmRpc3RhbmNlRnJvbUNlbnRlciA9IHRoaXMucmFuZG9tSW50RnJvbVJhbmdlKDAsIDMwKTtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMucGFydGljbGVzID0gW107XG4gICAgfVxuXG4gICBcblxuICAgIHVwZGF0ZSgpe1xuICAgICAgICBjb25zdCBwcmV2aW91c1BvaW50ID0ge3g6IHRoaXMueCwgeTogdGhpcy55fTtcbiAgICAgICAgLy8gTW92ZSBwb2ludHMgb3ZlciB0aW1lXG4gICAgICAgIHRoaXMucmFkaWFucyArPSB0aGlzLnZlbG9jaXR5O1xuICAgICAgICB0aGlzLnggPSB0aGlzLnggKyBNYXRoLmNvcyh0aGlzLnJhZGlhbnMpICogdGhpcy5kaXN0YW5jZUZyb21DZW50ZXI7XG4gICAgICAgIHRoaXMueSA9IHRoaXMueSArIE1hdGguc2luKHRoaXMucmFkaWFucykgKiB0aGlzLmRpc3RhbmNlRnJvbUNlbnRlcjtcbiAgICAgICAgdGhpcy5kcmF3KHByZXZpb3VzUG9pbnQpO1xuICAgIH1cblxuICAgIGRyYXcocHJldmlvdXNQb2ludCl7XG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IHRoaXMucmFkaXVzO1xuICAgICAgICB0aGlzLmN0eC5tb3ZlVG8ocHJldmlvdXNQb2ludC54LCBwcmV2aW91c1BvaW50LnkpO1xuICAgICAgICB0aGlzLmN0eC5saW5lVG8odGhpcy54LCB0aGlzLnkpO1xuICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG4gICAgfVxuXG4gICAgaW5pdCgpe1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgNTA7IGkrKyl7XG4gICAgICAgICAgICBjb25zdCByYWRpdXMgPSAoTWF0aC5yYW5kb20oKSAqIDIpICsgMTtcbiAgICAgICAgICAgIHRoaXMucGFydGljbGVzLnB1c2gobmV3IENpcmNsZSg1MDAsIDMwMCwgcmFkaXVzLCB0aGlzLnJhbmRvbUNvbG9yKGNvbG9ycyksIGN0eCkpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhbmltYXRlKCl7XG4gICAgICAgIHRoaXMucGFydGljbGVzLmZvckVhY2gocGFydGljbGUgPT4ge1xuICAgICAgICAgICAgcGFydGljbGUudXBkYXRlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJhbmRvbUludEZyb21SYW5nZShtaW4sIG1heCl7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pO1xuICAgIH1cbn0iLCJpbXBvcnQgUGxheWVyIGZyb20gXCIuL3BsYXllclwiO1xuaW1wb3J0IFdhbGwgZnJvbSBcIi4vd2FsbFwiO1xuaW1wb3J0IENpcmNsZSBmcm9tICcuL2NpcmNsZSc7XG5pbXBvcnQgU291bmQgZnJvbSAnLi9zb3VuZCc7XG5jb25zdCBESU1fWCA9IDEwMDA7XG5jb25zdCBESU1fWSA9IDYwMDtcbmNvbnN0IENPTE9SX1NDSEVNRSA9IFtcIiNmZmNlMDBcIiwgXCJjOWZmMDBcIiwgXCIjNDlmZjAwXCIsIFwiIzAwZmZlY1wiLCBcIiMwMGQyZmZcIl1cbmNvbnN0IGNvbG9ycyA9IFtcbiAgICBcIiMwMGJkZmZcIixcbiAgICBcIiM0ZDM5Y2VcIixcbiAgICBcIiMwODhlZmZcIixcbl07XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGN0eCkge1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMucGxheWVyID0gbmV3IFBsYXllcih0aGlzLmNhbnZhcywgdGhpcy5jdHgpXG4gICAgICAgIHRoaXMud2FsbHMgPSBbXTtcbiAgICAgICAgdGhpcy50aW1lciA9IG51bGw7XG4gICAgICAgIHRoaXMuc2NvcmUgPSAwO1xuICAgICAgICB0aGlzLmluR2FtZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmRlYWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5iZyA9IFwiIzQ4NjM5Y1wiO1xuICAgICAgICB0aGlzLmhpZ2hTY29yZSA9IDA7XG4gICAgICAgIHRoaXMuc3BlZWQgPSBbLS4wMDEsIC4wMDFdO1xuICAgICAgICB0aGlzLnRoZW1lU29uZyA9IG5ldyBTb3VuZChcImdhbWV0aGVtZS5tcDNcIik7XG4gICAgICAgIHRoaXMuZ2FtZU92ZXJTb25nID0gbmV3IFNvdW5kKFwiZ2FtZU92ZXIubXAzXCIpO1xuICAgICAgICB0aGlzLmdPTG9vcCA9IHRydWU7XG4gICAgfVxuXG4gICAgcmFuZG9tQ29sb3IoY29sb3JzKSB7XG4gICAgICAgIHJldHVybiBjb2xvcnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY29sb3JzLmxlbmd0aCldO1xuICAgIH1cblxuICAgIGNoYW5nZUJHKCkge1xuICAgICAgICBjb25zdCByYW5kb21Db2xvciA9IENPTE9SX1NDSEVNRVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBDT0xPUl9TQ0hFTUUubGVuZ3RoKV07XG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlDYW52YXNcIik7XG4gICAgICAgIHRoaXMuYmcgPSBjYW52YXMuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gcmFuZG9tQ29sb3I7XG4gICAgfVxuXG4gICAgaW5pdCgpe1xuICAgICAgICBpZighdGhpcy5pbkdhbWUpe1xuICAgICAgICAgICAgdGhpcy5zdGFydFNjcmVlbigpO1xuICAgICAgICB9IGVsc2UgaWYodGhpcy5pbkdhbWUgJiYgIXRoaXMuZGVhZCl7XG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZSA9PiB0aGlzLmdhbWVTdGFydChlKSk7XG4gICAgICAgICAgICB0aGlzLnJ1bigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5nYW1lT3ZlcigpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBhZGRXYWxsKCl7XG4gICAgICAgIGNvbnN0IHdhbGwgPSBuZXcgV2FsbCh0aGlzLmN0eCwgdGhpcy5jYW52YXMud2lkdGggLyAyLCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyLCB0aGlzLmNhbnZhcy53aWR0aCAvIDIsIFwiIzIyMzE0MlwiLCB0aGlzLnNwZWVkW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuc3BlZWQubGVuZ3RoKV0pXG4gICAgICAgIHRoaXMud2FsbHMucHVzaCh3YWxsKTtcbiAgICAgICAgdGhpcy50aW1lciA9IG51bGw7XG4gICAgfVxuXG4gICAgaW5jcmVhc2VEaWZmaWN1bHR5KCl7XG4gICAgICAgIGxldCByYWRpdXM7XG4gICAgICAgIGlmKHRoaXMud2FsbHMubGVuZ3RoKSB7IHJhZGl1cyA9IHRoaXMud2FsbHNbMF0ucmFkaXVzfVxuICAgICAgICBpZih0aGlzLnNjb3JlID09PSAxMCAmJiByYWRpdXMgPT09IDQ3KXtcbiAgICAgICAgICAgIHRoaXMuaW5jcmVhc2VTcGVlZCh0aGlzLndhbGxzKTtcbiAgICAgICAgICAgIFxuICAgICAgICB9IGVsc2UgaWYodGhpcy5zY29yZSA9PT0gMjAgJiYgcmFkaXVzID09PSA0Nyl7XG4gICAgICAgICAgICB0aGlzLmluY3JlYXNlU3BlZWQodGhpcy53YWxscyk7XG4gICAgICAgIH0gZWxzZSBpZih0aGlzLnNjb3JlID09PSAzMCAmJiByYWRpdXMgPT09IDQ3KXtcbiAgICAgICAgICAgIHRoaXMuaW5jcmVhc2VTcGVlZCh0aGlzLndhbGxzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHRoaXMuc2NvcmUgPT09IDQwICYmIHJhZGl1cyA9PT0gNDcpe1xuICAgICAgICAgICAgdGhpcy5pbmNyZWFzZVNwZWVkKHRoaXMud2FsbHMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuc2NvcmUgPT09IDUwICYmIHJhZGl1cyA9PT0gNDcpIHtcbiAgICAgICAgICAgIHRoaXMuaW5jcmVhc2VTcGVlZCh0aGlzLndhbGxzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLnNjb3JlID09PSA2MCAmJiByYWRpdXMgPT09IDQ3KSB7XG4gICAgICAgICAgICB0aGlzLmluY3JlYXNlU3BlZWQodGhpcy53YWxscyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5zY29yZSA9PT0gNzAgJiYgcmFkaXVzID09PSA0Nykge1xuICAgICAgICAgICAgdGhpcy5pbmNyZWFzZVNwZWVkKHRoaXMud2FsbHMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuc2NvcmUgPT09IDgwICYmIHJhZGl1cyA9PT0gNDcpe1xuICAgICAgICAgICAgdGhpcy5zcGVlZCA9IHRoaXMuc3BlZWQubWFwKHNwZWVkID0+IHNwZWVkICogMTApO1xuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMuc2NvcmUgPiAzMCl7XG4gICAgICAgICAgICB0aGlzLndhbGxzLmZvckVhY2god2FsbCA9PiB7XG4gICAgICAgICAgICAgICAgd2FsbC5yZXZlcnNlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB9XG4gICAgXG5cbiAgICBpbmNyZWFzZVNwZWVkKHdhbGxzKXtcbiAgICAgICAgdGhpcy5zcGVlZCA9IHRoaXMuc3BlZWQubWFwKHNwZWVkID0+IHNwZWVkICogMS4yKTtcbiAgICB9XG5cbiAgICBhbGxXYWxscygpe1xuICAgICAgICByZXR1cm4gdGhpcy53YWxscztcbiAgICB9XG5cbiAgICBzaG93U2NvcmUoKXtcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcIjIwcHggT3JiaXRyb25cIjtcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJTY29yZTogXCIgKyB0aGlzLnNjb3JlLCB0aGlzLmNhbnZhcy53aWR0aCAtIDEwMCwgMzApO1xuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcbiAgICB9XG5cbiAgICBjZW50ZXJUZXh0KHRleHQsIHkpe1xuICAgICAgICBjb25zdCBtZWFzdXJlbWVudCA9IHRoaXMuY3R4Lm1lYXN1cmVUZXh0KHRleHQpO1xuICAgICAgICBjb25zdCBtZWFzdXJlbWVudHdpZHRoID0gKHRoaXMuY2FudmFzLndpZHRoIC0gbWVhc3VyZW1lbnQud2lkdGgpIC8gMjtcbiAgICAgICAgY29uc3QgeCA9ICh0aGlzLmNhbnZhcy53aWR0aCAtIG1lYXN1cmVtZW50LndpZHRoKSAvIDI7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KHRleHQsIHgsIHkpO1xuICAgIH1cbiAgICBcbiAgICBkcmF3KCkge1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgRElNX1gsIERJTV9ZKTtcbiAgICAgICAgY29uc3QgY2VudGVyWCA9IERJTV9YIC8gMjtcbiAgICAgICAgY29uc3QgY2VudGVyWSA9IERJTV9ZIC8gMjtcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDE7XG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICB0aGlzLmN0eC5hcmMoY2VudGVyWCwgY2VudGVyWSwgMzAsIDAsIDIgKiBNYXRoLlBJLCBmYWxzZSk7XG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgdGhpcy53YWxscy5mb3JFYWNoKHdhbGwgPT4ge1xuICAgICAgICAgICAgd2FsbC51cGRhdGUoKTtcbiAgICAgICAgICAgIC8vIHdhbGwuZ2FwLnVwZGF0ZSgpO1xuICAgICAgICB9KVxuICAgICAgICB0aGlzLnBsYXllci5kcmF3KDUpO1xuICAgIFxuICAgICAgICBjb25zdCBkb1dhbGxzRXhpc3QgPSB0aGlzLndhbGxzLmxlbmd0aCA+IDA7XG4gICAgICAgIGlmKGRvV2FsbHNFeGlzdCl7XG5cbiAgICAgICAgICAgIC8vVE9ETzogd2UgY2hlY2sgZm9yIGNvbGxpc2lvbiB3aGVuIHRoZSB3YWxsIGlzIGxpdGVyYWxseSBvbnRvcCBvZiB0aGUgcGxheWVyXG4gICAgICAgICAgICAvLyBtYXliZSBmaW5kIGEgc3dlZXQgc3BvdCB3aXRoIHRoaXMucGxheWVyLnJhZGl1cyArIDEgb3Igc29tZXRoaW5nIGNhdXNlIHRoZSB0cmlhbmdsZSBoYXNcbiAgICAgICAgICAgIC8vIGEgc2l6ZSB0byBpdC5cbiAgICAgICAgICAgIGNvbnN0IGlzV2FsbE9uUGxheWVyID0gdGhpcy53YWxsc1swXS5yYWRpdXMgPD0gdGhpcy5wbGF5ZXIucmFkaXVzICsgdGhpcy5wbGF5ZXIuc2l6ZSArIDYgJiYgdGhpcy53YWxsc1swXS5yYWRpdXMgPj0gdGhpcy5wbGF5ZXIucmFkaXVzO1xuICAgICAgICAgICAgaWYgKGlzV2FsbE9uUGxheWVyKXtcbiAgICAgICAgICAgICAgICBpZighdGhpcy5jaGVja0NvbGxpc2lvbih0aGlzLnBsYXllciwgdGhpcy53YWxsc1swXS5nYXApKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWFkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMud2FsbHNbMF0uYW5nbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2hvd1Njb3JlKCk7XG4gICAgICAgIC8vIHRoaXMuY3R4LnN0cm9rZSgpO1xuICAgICAgICAvLyB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcbiAgICB9XG4gICAgXG4gICAgcnVuKCl7XG4gICAgICAgIGNvbnN0IHdhbGxTcGFjZSA9IDEwMDA7XG4gICAgICAgIGlmKHRoaXMud2FsbHMubGVuZ3RoIDwgOCAmJiB0aGlzLnRpbWVyID09PSBudWxsKXtcbiAgICAgICAgICAgIHRoaXMudGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHRoaXMuYWRkV2FsbCgpLCB3YWxsU3BhY2UpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLndhbGxzLmxlbmd0aCA+IDAgJiYgdGhpcy53YWxsc1swXS5yYWRpdXMgPCAzMCkgeyB0aGlzLndhbGxzLnNoaWZ0KCl9XG4gICAgICAgIHRoaXMuaW5jcmVhc2VEaWZmaWN1bHR5KCk7XG4gICAgICAgIHRoaXMuZHJhdygpO1xuICAgICAgICB0aGlzLnVwZGF0ZVNjb3JlKCk7XG4gICAgICAgIH1cblxuICAgIHVwZGF0ZVNjb3JlKCl7XG4gICAgICAgIGlmKHRoaXMud2FsbHMubGVuZ3RoKXtcbiAgICAgICAgICAgIGlmICh0aGlzLndhbGxzWzBdLnJhZGl1cyA9PT0gMzIpIHsgXG4gICAgICAgICAgICAgICAgdGhpcy5zY29yZSArPSAxO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlQkcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG5cbiAgICBnYW1lT3Zlcigpe1xuICAgICAgICBpZih0aGlzLnNjb3JlID4gdGhpcy5oaWdoU2NvcmUpIHtcbiAgICAgICAgICAgIHRoaXMuaGlnaFNjb3JlID0gdGhpcy5zY29yZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRoZW1lU29uZy5zdG9wKCk7XG4gICAgICAgIGlmKHRoaXMuZ09Mb29wKXtcbiAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXJTb25nLnBsYXkoKTtcbiAgICAgICAgICAgIHRoaXMuZ09Mb29wID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUNhbnZhc1wiKTtcbiAgICAgICAgY2FudmFzLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IChcIiM0ODYzOWNcIik7XG4gICAgICAgIHRoaXMud2FsbHMgPSBbXTtcbiAgICAgICAgdGhpcy5zcGVlZCA9IFstLjAwMSwgLjAwMV07XG4gICAgICAgIGxldCB5ID0gdGhpcy5jYW52YXMuaGVpZ2h0IC8gMjtcbiAgICAgICAgbGV0IGNvbG9yID0gXCIjRkYwMDAwXCI7XG4gICAgICAgIGxldCB0aXRsZSA9IFwiR2FtZSBPdmVyXCI7XG4gICAgICAgIGxldCBlbnRlciA9IFwiVHJ5IGFnYWluXCI7XG4gICAgICAgIGxldCBzY29yZSA9IGBTY29yZTogJHt0aGlzLnNjb3JlfWA7XG4gICAgICAgIGxldCBoaWdoU2NvcmUgPSBgSGlnaCBTY29yZTogJHt0aGlzLmhpZ2hTY29yZX1gO1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgRElNX1gsIERJTV9ZKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gY29sb3I7XG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcIjQ4cHggT3JiaXRyb25cIjtcbiAgICAgICAgdGhpcy5jZW50ZXJUZXh0KHRpdGxlLCB5ICsgNjApO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiNDhweCBPcmJpdHJvblwiO1xuICAgICAgICB0aGlzLmNlbnRlclRleHQoaGlnaFNjb3JlLCB5IC0gMTAwKTtcbiAgICAgICAgdGhpcy5jZW50ZXJUZXh0KHNjb3JlLCB5IC0gNTApO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiMjRweCBPcmJpdHJvblwiO1xuICAgICAgICB0aGlzLmNlbnRlclRleHQoZW50ZXIsIHkgKyAxMDApO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZSA9PiB0aGlzLmdhbWVTdGFydChlKSk7XG4gICAgfVxuXG4gICAgY2hlY2tDb2xsaXNpb24ocGxheWVyLCBnYXApe1xuICAgICAgICBsZXQgY29sbGlzaW9uID0gZmFsc2U7XG4gICAgICAgIGxldCBnYXBQb3MgPSBnYXAuZ2V0UG9zaXRpb24oKTtcbiAgICAgICAgbGV0IHBsYXllckFuZ2xlID0gcGxheWVyLmdldFBvc2l0aW9uKCkgKiBNYXRoLlBJIC8gMTgwO1xuICAgICAgICBsZXQgcGxheWVyTGVmdCA9ICh0aGlzLmNhbnZhcy5oZWlnaHQgLyAyKSArICgodGhpcy5yYWRpdXMpICogTWF0aC5zaW4odGhpcy5hbmdsZSAqIE1hdGguUEkgLyAxODApKTtcbiAgICAgICAgbGV0IGVuZEFuZ2xlID0gZ2FwLmFuZ2xlIC0gKDIgKiBNYXRoLlBJIC0gZ2FwLnBhcnRpYWxDaXJjbGVBbmdsZSk7XG4gICAgICAgIGlmIChlbmRBbmdsZSA8IDApIHtcbiAgICAgICAgICAgIGVuZEFuZ2xlICs9IDIqTWF0aC5QSTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmKHBsYXllclBvcyA+IGdhcFBvc1tzdGFydF0gJiYgcGxheWVyUG9zIDwgZ2FwUG9zW2VuZF0pIGNvbGxpc2lvbiA9IHRydWU7XG5cbiAgICAgICAgLy8gdGhlIGNhc2Ugd2hlbiB0aGUgZ2FwIHN0cmFkZGxlcyB0aGUgaG9yaXpvbnRhbFxuXG4gICAgICAgIGlmIChnYXAuYW5nbGUgPCBlbmRBbmdsZSl7XG4gICAgICAgICAgICBpZiAoKHBsYXllckFuZ2xlICA+IGVuZEFuZ2xlIFxuICAgICAgICAgICAgICAgICYmIHBsYXllckFuZ2xlIDwgMiAqIE1hdGguUEkpIFxuICAgICAgICAgICAgICAgIHx8IHBsYXllckFuZ2xlIDwgZ2FwLmFuZ2xlICYmIHBsYXllckFuZ2xlID4gMCl7XG4gICAgICAgICAgICAgICAgY29sbGlzaW9uID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwbGF5ZXJBbmdsZSA8IGdhcC5hbmdsZSAmJlxuICAgICAgICAgICAgcGxheWVyQW5nbGUgPiBlbmRBbmdsZSkge1xuICAgICAgICAgICAgICAgIGNvbGxpc2lvbiA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgaWYoY29sbGlzaW9uID09PSB0cnVlKXtcbiAgICAgICAgICAgIC8vIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gJ2JsdWUnXG4gICAgICAgICAgICAvLyB0aGlzLmN0eC5zdHJva2VSZWN0KERJTV9YIC8gMiAtIDI1LCBESU1fWSAvIDIgLSAyNSwgNTAsIDUwKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb2xsaXNpb247XG4gICAgfVxuXG4gICAgc3RhcnRTY3JlZW4oKXtcbiAgICAgICAgbGV0IHkgPSB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyO1xuICAgICAgICBsZXQgY29sb3IgPSBcIiNDQzI5MzM2XCI7XG4gICAgICAgIGxldCB0aXRsZSA9IFwiRXNjYXBlIHRoZSBTaGFwZVwiO1xuICAgICAgICBsZXQgZW50ZXIgPSBcIlByZXNzIEVudGVyXCI7XG4gICAgICAgIGNvbnN0IGdyYWRpZW50ID0gdGhpcy5jdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIDApO1xuICAgICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoXCIwXCIsIFwiI0M4NzNDOFwiKTtcbiAgICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKFwiMC41XCIsIFwiIzkxRDdBMVwiKTtcbiAgICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKFwiMS4wXCIsIFwiI0RERDgzMFwiKTtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIERJTV9YLCBESU1fWSk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IGdyYWRpZW50O1xuICAgICAgICB0aGlzLmN0eC5mb250ID0gXCI0OHB4IE9yYml0cm9uXCI7XG4gICAgICAgIHRoaXMuY2VudGVyVGV4dCh0aXRsZSwgeSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiMjRweCBPcmJpdHJvblwiO1xuICAgICAgICB0aGlzLmNlbnRlclRleHQoZW50ZXIsIHkgKyAzMCk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBlID0+IHRoaXMuZ2FtZVN0YXJ0KGUpKTtcbiAgICB9XG5cbiAgICBnYW1lU3RhcnQoZSl7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5nT0xvb3AgPSB0cnVlO1xuICAgICAgICBpZihlLndoaWNoID09PSAxMyB8fCBlLmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgICAgICB0aGlzLnRoZW1lU29uZy5wbGF5KCk7XG4gICAgICAgICAgICB0aGlzLmluR2FtZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmJnID0gXCIjNDg2MzljXCJcbiAgICAgICAgICAgIHRoaXMuZGVhZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5zY29yZSA9IDA7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IEdhbWUgZnJvbSAnLi9nYW1lJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVZpZXcge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY3R4KSB7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5nYW1lID0gbmV3IEdhbWUodGhpcy5jYW52YXMsIHRoaXMuY3R4KTtcbiAgICB9XG5cbiAgICBcblxuXG4gICAgYW5pbWF0ZSgpIHtcbiAgICAgICAgdGhpcy5nYW1lLmluaXQoKTtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpKTtcbiAgICB9XG59IiwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhcCB7XG4gICAgY29uc3RydWN0b3IoY3R4LCB4ICwgeSwgcmFkaXVzLCBhbmdsZSwgcm90YXRpb24sIHRpbWUpe1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy5yYWRpdXMgPSByYWRpdXM7IFxuICAgICAgICB0aGlzLnJvdGF0aW9uID0gcm90YXRpb247XG4gICAgICAgIHRoaXMuYW5nbGUgPSBhbmdsZTtcbiAgICAgICAgdGhpcy5wYXJ0aWFsQ2lyY2xlQW5nbGUgPSAyICogTWF0aC5QSSAtIDEuMjtcbiAgICB9XG5cbiAgICBkcmF3KCl7XG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5nbG9iYWxBbHBoYSA9IDAuMDtcbiAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gODtcbiAgICAgICAgdGhpcy5jdHguYXJjKHRoaXMueCwgdGhpcy55LCB0aGlzLnJhZGl1cywgdGhpcy5hbmdsZSwgdGhpcy5wYXJ0aWFsQ2lyY2xlQW5nbGUgKyB0aGlzLmFuZ2xlLCB0cnVlKTtcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5nbG9iYWxBbHBoYSA9IDEuMDtcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIGlmICh0aGlzLnJhZGl1cyA+IDMwKSB7XG4gICAgICAgICAgICB0aGlzLnJhZGl1cyAtPSAzO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZHJhdygpO1xuICAgIH1cblxuICAgIGdldFBvc2l0aW9uKCl7XG4gICAgICAgY29uc3QgcG9zaXRpb24gPSB7XG4gICAgICAgICAgIHN0YXJ0OiB0aGlzLmFuZ2xlLFxuICAgICAgICAgICBlbmQ6IHRoaXMucGFydGlhbENpcmNsZUFuZ2xlICsgdGhpcy5hbmdsZSxcbiAgICAgICB9XG4gICAgICAgcmV0dXJuIHBvc2l0aW9uO1xuICAgIH1cblxuICAgIGdldFBvaW50KGMxLCBjMiwgcmFkaXVzLCBhbmdsZSkge1xuICAgICAgICByZXR1cm4gW2MxICsgTWF0aC5jb3MoYW5nbGUpICogcmFkaXVzLCBjMiArIE1hdGguc2luKGFuZ2xlKSAqIHJhZGl1c107XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBjdHgpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLnNpemUgPSA1O1xuICAgICAgICB0aGlzLnJhZGl1cyA9IDU1O1xuICAgICAgICB0aGlzLnNwZWVkID0gNztcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSAwO1xuICAgICAgICB0aGlzLmFuZ2xlID0gMzA7XG4gICAgICAgIHRoaXMucGxheWVyUG9zID0gXCJsZWZ0XCI7XG4gICAgICAgIHRoaXMuZHJhdyA9IHRoaXMuZHJhdy5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGRyYXcoKSB7XG4gICAgICAgXG4gICAgICAgIGNvbnN0IGR4ID0gKHRoaXMuY2FudmFzLndpZHRoIC8gMikgKyAoKHRoaXMucmFkaXVzKSAqIE1hdGguY29zKHRoaXMuYW5nbGUgKiBNYXRoLlBJIC8gMTgwKSk7XG4gICAgICAgIGNvbnN0IGR5ID0gKHRoaXMuY2FudmFzLmhlaWdodCAvIDIpICsgKCh0aGlzLnJhZGl1cykgKiBNYXRoLnNpbih0aGlzLmFuZ2xlICogTWF0aC5QSSAvIDE4MCkpO1xuICAgICAgICB0aGlzLmFuZ2xlID0gdGhpcy5hbmdsZSArICh0aGlzLmRpcmVjdGlvbiAqIHRoaXMuc3BlZWQpO1xuXG4gICAgICAgIGlmKHRoaXMuYW5nbGUgPCAwKSB7XG4gICAgICAgICAgICB0aGlzLmFuZ2xlID0gMzYwIC0gdGhpcy5hbmdsZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHRoaXMuYW5nbGUgPiAzNjApe1xuICAgICAgICAgICAgdGhpcy5hbmdsZSAlPSAzNjA7XG4gICAgICAgIH1cbiAgICAgICAgLy8gdGhpcy5jdHguc2F2ZSgpO1xuICAgICAgICB0aGlzLmN0eC50cmFuc2xhdGUoZHgsIGR5KTtcbiAgICAgICAgdGhpcy5jdHgucm90YXRlKHRoaXMuYW5nbGUgKiBNYXRoLlBJIC8gMTgwKTtcbiAgICAgICAgLy8gdGhpcy5jdHgucmVzdG9yZSgpO1xuICAgICAgICB0aGlzLmN0eC50cmFuc2xhdGUoLWR4LCAtZHkpO1xuXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgIHRoaXMuY3R4Lm1vdmVUbyhkeCAtIHRoaXMuc2l6ZSwgZHkgLSB0aGlzLnNpemUpO1xuICAgICAgICB0aGlzLmN0eC5saW5lVG8oZHggKyB0aGlzLnNpemUsIGR5KTtcbiAgICAgICAgdGhpcy5jdHgubGluZVRvKGR4IC0gdGhpcy5zaXplLCBkeSArIHRoaXMuc2l6ZSk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgdGhpcy5jdHgudHJhbnNsYXRlKGR4LCBkeSk7XG4gICAgICAgIHRoaXMuY3R4LnJvdGF0ZSgtdGhpcy5hbmdsZSAqIE1hdGguUEkgLyAxODApO1xuICAgICAgICB0aGlzLmN0eC50cmFuc2xhdGUoLWR4LCAtZHkpO1xuXG4gICAgfVxuICAgIGhhbmRsZVByZXNzKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBzd2l0Y2ggKGUua2V5KSB7XG4gICAgICAgICAgICBjYXNlICdBcnJvd0xlZnQnOlxuICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uID0gLTE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdBcnJvd1JpZ2h0JzpcbiAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IDE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVLZXlVcChlKXtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSAwO1xuICAgIH1cblxuICAgIGdldFBvc2l0aW9uKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmFuZ2xlO1xuICAgIH1cbn1cblxuIiwiXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTb3VuZCB7XG4gICAgY29uc3RydWN0b3Ioc3JjKXtcbiAgICAgICAgdGhpcy5zb3VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhdWRpb1wiKTtcbiAgICAgICAgdGhpcy5zb3VuZC5zcmMgPSBzcmM7XG4gICAgICAgIHRoaXMuc291bmQuc2V0QXR0cmlidXRlKFwicHJlbG9hZFwiLCBcImF1dG9cIik7XG4gICAgICAgIHRoaXMuc291bmQuc2V0QXR0cmlidXRlKFwiY29udHJvbHNcIiwgXCJub25lXCIpO1xuICAgICAgICB0aGlzLnNvdW5kLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLnNvdW5kKTtcbiAgICB9XG5cbiAgICBwbGF5KCl7XG4gICAgICAgIHRoaXMuc291bmQucGxheSgpO1xuICAgIH1cblxuICAgIHN0b3AoKXtcbiAgICAgICAgdGhpcy5zb3VuZC5wYXVzZSgpO1xuICAgICAgICB0aGlzLnNvdW5kLmN1cnJlbnRUaW1lID0gMDtcbiAgICB9XG59XG4iLCJpbXBvcnQgR2FwIGZyb20gXCIuL2dhcFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXYWxsIHtcbiAgICBjb25zdHJ1Y3RvcihjdHgsIHgsIHksIHJhZGl1cywgY29sb3IsIHJvdGF0aW9uKSB7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cztcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgICAgICB0aGlzLnRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgdGhpcy5hbmdsZSA9IE1hdGgucmFuZG9tKCkgKiAoMiAqIE1hdGguUEkpO1xuICAgICAgICB0aGlzLnJvdGF0aW9uID0gcm90YXRpb247XG4gICAgICAgIHRoaXMuZW5kQW5nbGUgPSAyICogTWF0aC5QSSAtIDEuMjtcbiAgICAgICAgdGhpcy5nYXAgPSBuZXcgR2FwKHRoaXMuY3R4LCB0aGlzLngsIHRoaXMueSwgdGhpcy5yYWRpdXMsIHRoaXMuYW5nbGUsIHRoaXMucm90YXRpb24sIHRoaXMudGltZSk7XG4gICAgfVxuXG4gICAgZHJhdygpe1xuICAgICAgICBjb25zdCBuZXdUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIGxldCBkaWZmID0gbmV3VGltZSAtIHRoaXMudGltZTtcbiAgICAgICAgdGhpcy50aW1lID0gbmV3VGltZTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDEyO1xuICAgICAgICB0aGlzLmN0eC5hcmModGhpcy54LCB0aGlzLnksIHRoaXMucmFkaXVzLCB0aGlzLmFuZ2xlLCB0aGlzLmVuZEFuZ2xlICsgdGhpcy5hbmdsZSwgZmFsc2UpO1xuICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgdGhpcy5hbmdsZSArPSBkaWZmICogdGhpcy5yb3RhdGlvbjtcbiAgICAgICAgdGhpcy5hbmdsZSAlPSAyICogTWF0aC5QSTtcblxuICAgICAgICB0aGlzLmdhcC5hbmdsZSArPSBkaWZmICogdGhpcy5yb3RhdGlvbjtcbiAgICAgICAgdGhpcy5nYXAuYW5nbGUgJT0gMiAqIE1hdGguUEk7XG5cbiAgICAgICAgaWYgKHRoaXMuYW5nbGUgPCAwKSB7XG4gICAgICAgICAgICB0aGlzLmFuZ2xlID0gMiAqIE1hdGguUEk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5hbmdsZSA+IDIgKiBNYXRoLlBJKSB7XG4gICAgICAgICAgICB0aGlzLmFuZ2xlICU9IDIgKiBNYXRoLlBJO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZ2FwLmFuZ2xlIDwgMCkge1xuICAgICAgICAgICAgdGhpcy5nYXAuYW5nbGUgPSAyICogTWF0aC5QSTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmdhcC5hbmdsZSA+IDIgKiBNYXRoLlBJKSB7XG4gICAgICAgICAgICB0aGlzLmdhcC5hbmdsZSAlPSAyICogTWF0aC5QSTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZSgpe1xuICAgICAgICBpZih0aGlzLnJhZGl1cyA+IDMwKSB7XG4gICAgICAgICAgICB0aGlzLnJhZGl1cyAtPSAzO1xuICAgICAgICAgICAgdGhpcy5nYXAucmFkaXVzIC09IDM7XG4gICAgICAgIH0gXG4gICAgICAgIHRoaXMuZ2FwLmRyYXcoKTtcbiAgICAgICAgdGhpcy5kcmF3KCk7XG4gICAgfVxuXG5cbiAgICByZXZlcnNlKCl7XG4gICAgICAgIGlmKHRoaXMucmFkaXVzID09PSAyOTApe1xuICAgICAgICAgICAgdGhpcy5yb3RhdGlvbiAqPSAtMS4yO1xuICAgICAgICB9XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=