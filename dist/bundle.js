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

var _sound = __webpack_require__(/*! ./sound */ "./src/javascript/sound.js");

var _sound2 = _interopRequireDefault(_sound);

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
        this.highScore = 0;
        this.themeSong = new _sound2.default("gametheme.mp3");
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

            if (this.score > this.highScore) {
                this.highScore = this.score;
            }
            this.themeSong.stop();
            var canvas = document.getElementById("myCanvas");
            canvas.style.backgroundColor = "#48639c";
            this.walls = [];
            var y = this.canvas.height / 2;
            var color = "#FF0000";
            var title = "Game Over";
            var enter = "Try again";
            var score = "Score: " + this.score;
            var highScore = "High Score: " + this.highScore;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qYXZhc2NyaXB0L2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2phdmFzY3JpcHQvZ2FtZV92aWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9qYXZhc2NyaXB0L2dhcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvamF2YXNjcmlwdC9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2phdmFzY3JpcHQvc291bmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2phdmFzY3JpcHQvd2FsbC5qcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXMiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsIndpZHRoIiwiaGVpZ2h0IiwiY3R4IiwiZ2V0Q29udGV4dCIsImdhbWVWaWV3IiwiR2FtZVZpZXciLCJnYW1lIiwicGxheWVyIiwiaGFuZGxlUHJlc3MiLCJlIiwiZ2FtZVN0YXJ0IiwiaGFuZGxlS2V5VXAiLCJhbmltYXRlIiwiRElNX1giLCJESU1fWSIsIkNPTE9SX1NDSEVNRSIsIkdhbWUiLCJQbGF5ZXIiLCJ3YWxscyIsInRpbWVyIiwic2NvcmUiLCJpbkdhbWUiLCJkZWFkIiwiYmciLCJoaWdoU2NvcmUiLCJ0aGVtZVNvbmciLCJTb3VuZCIsInJhbmRvbUNvbG9yIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwidG9TdHJpbmciLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwic3RhcnRTY3JlZW4iLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicnVuIiwiZ2FtZU92ZXIiLCJzbG93Um90YXRpb25zIiwibWVkUm90YXRpb25zIiwiZmFzdFJvdGF0aW9ucyIsIndhbGwiLCJXYWxsIiwibGVuZ3RoIiwicHVzaCIsImJlZ2luUGF0aCIsImZvbnQiLCJmaWxsVGV4dCIsImNsb3NlUGF0aCIsInRleHQiLCJ5IiwibWVhc3VyZW1lbnQiLCJtZWFzdXJlVGV4dCIsIngiLCJjbGVhclJlY3QiLCJjZW50ZXJYIiwiY2VudGVyWSIsImxpbmVXaWR0aCIsInN0cm9rZVN0eWxlIiwiYXJjIiwiUEkiLCJzdHJva2UiLCJmb3JFYWNoIiwidXBkYXRlIiwiZHJhdyIsImRvV2FsbHNFeGlzdCIsImlzV2FsbE9uUGxheWVyIiwicmFkaXVzIiwic2l6ZSIsImNoZWNrQ29sbGlzaW9uIiwiZ2FwIiwic2hvd1Njb3JlIiwid2FsbFNwYWNlIiwic2V0VGltZW91dCIsImFkZFdhbGwiLCJzaGlmdCIsInN0b3AiLCJjb2xvciIsInRpdGxlIiwiZW50ZXIiLCJmaWxsU3R5bGUiLCJjZW50ZXJUZXh0IiwiY29sbGlzaW9uIiwiZ2FwUG9zIiwiZ2V0UG9zaXRpb24iLCJwbGF5ZXJBbmdsZSIsImVuZEFuZ2xlIiwiYW5nbGUiLCJwYXJ0aWFsQ2lyY2xlQW5nbGUiLCJ1cGRhdGVTY29yZSIsImNoYW5nZUJHIiwicHJldmVudERlZmF1bHQiLCJ3aGljaCIsImtleUNvZGUiLCJwbGF5IiwiaW5pdCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImJpbmQiLCJHYXAiLCJyb3RhdGlvbiIsInRpbWUiLCJnbG9iYWxBbHBoYSIsInBvc2l0aW9uIiwic3RhcnQiLCJlbmQiLCJjMSIsImMyIiwiY29zIiwic2luIiwic3BlZWQiLCJkaXJlY3Rpb24iLCJwbGF5ZXJQb3MiLCJkeCIsImR5IiwidHJhbnNsYXRlIiwicm90YXRlIiwibW92ZVRvIiwibGluZVRvIiwiZmlsbCIsImtleSIsInNyYyIsInNvdW5kIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImRpc3BsYXkiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJwYXVzZSIsImN1cnJlbnRUaW1lIiwiRGF0ZSIsImdldFRpbWUiLCJuZXdUaW1lIiwiZGlmZiJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNB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NUQsS0FBS2lDLEVBQTFCLEVBQThCO0FBQzFCLHFCQUFLMkIsS0FBTCxJQUFjLElBQUk1RCxLQUFLaUMsRUFBdkI7QUFDSDs7QUFFRCxnQkFBSSxLQUFLVSxHQUFMLENBQVNpQixLQUFULEdBQWlCLENBQXJCLEVBQXdCO0FBQ3BCLHFCQUFLakIsR0FBTCxDQUFTaUIsS0FBVCxHQUFpQixJQUFJNUQsS0FBS2lDLEVBQTFCO0FBQ0g7O0FBRUQsZ0JBQUksS0FBS1UsR0FBTCxDQUFTaUIsS0FBVCxHQUFpQixJQUFJNUQsS0FBS2lDLEVBQTlCLEVBQWtDO0FBQzlCLHFCQUFLVSxHQUFMLENBQVNpQixLQUFULElBQWtCLElBQUk1RCxLQUFLaUMsRUFBM0I7QUFDSDtBQUNKOzs7aUNBRU87QUFDSixnQkFBRyxLQUFLTyxNQUFMLEdBQWMsRUFBakIsRUFBcUI7QUFDakIscUJBQUtBLE1BQUwsSUFBZSxDQUFmO0FBQ0EscUJBQUtHLEdBQUwsQ0FBU0gsTUFBVCxJQUFtQixDQUFuQjtBQUNIO0FBQ0QsaUJBQUtHLEdBQUwsQ0FBU04sSUFBVDtBQUNBLGlCQUFLQSxJQUFMO0FBQ0g7Ozs7OztrQkF4RGdCdEIsSSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBQbGF5ZXIgZnJvbSAnLi9qYXZhc2NyaXB0L3BsYXllcic7XG5pbXBvcnQgR2FtZSBmcm9tICcuL2phdmFzY3JpcHQvZ2FtZSc7XG5pbXBvcnQgR2FtZVZpZXcgZnJvbSAnLi9qYXZhc2NyaXB0L2dhbWVfdmlldyc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImNhbnZhc1wiKVswXTtcbiAgICBjYW52YXMud2lkdGggPSAxMDAwO1xuICAgIGNhbnZhcy5oZWlnaHQgPSA2MDA7XG5cbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG5cbiAgICBjb25zdCBnYW1lVmlldyA9IG5ldyBHYW1lVmlldyhjYW52YXMsIGN0eCk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGUgPT4gZ2FtZVZpZXcuZ2FtZS5wbGF5ZXIuaGFuZGxlUHJlc3MoZSkpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBlID0+IGdhbWVWaWV3LmdhbWUuZ2FtZVN0YXJ0KGUpKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGUgPT4gZ2FtZVZpZXcuZ2FtZS5wbGF5ZXIuaGFuZGxlS2V5VXAoZSkpO1xuICAgIGdhbWVWaWV3LmFuaW1hdGUoKTtcbn0pO1xuXG5cblxuIiwiaW1wb3J0IFBsYXllciBmcm9tIFwiLi9wbGF5ZXJcIjtcbmltcG9ydCBXYWxsIGZyb20gXCIuL3dhbGxcIjtcbmltcG9ydCBTb3VuZCBmcm9tICcuL3NvdW5kJztcbmNvbnN0IERJTV9YID0gMTAwMDtcbmNvbnN0IERJTV9ZID0gNjAwO1xuY29uc3QgQ09MT1JfU0NIRU1FID0gW1wiI0NDMjkzMzZcIiwgXCJFQkJBQjlcIiwgXCIjMzg4Njk3XCIsIFwiI0JGRkZFMVwiXVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBjdHgpIHtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIodGhpcy5jYW52YXMsIHRoaXMuY3R4KVxuICAgICAgICB0aGlzLndhbGxzID0gW107XG4gICAgICAgIHRoaXMudGltZXIgPSBudWxsO1xuICAgICAgICB0aGlzLnNjb3JlID0gMDtcbiAgICAgICAgdGhpcy5pbkdhbWUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kZWFkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYmcgPSBcIiM0ODYzOWNcIjtcbiAgICAgICAgdGhpcy5oaWdoU2NvcmUgPSAwO1xuICAgICAgICB0aGlzLnRoZW1lU29uZyA9IG5ldyBTb3VuZChcImdhbWV0aGVtZS5tcDNcIik7XG4gICAgfVxuXG4gICAgY2hhbmdlQkcoKSB7XG4gICAgICAgIGNvbnN0IHJhbmRvbUNvbG9yID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTY3NzcyMTUpLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUNhbnZhc1wiKTtcbiAgICAgICAgdGhpcy5iZyA9IGNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNcIiArIHJhbmRvbUNvbG9yO1xuICAgIH1cblxuICAgIGluaXQoKXtcbiAgICAgICAgaWYoIXRoaXMuaW5HYW1lKXtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRTY3JlZW4oKTtcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuaW5HYW1lICYmICF0aGlzLmRlYWQpe1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGUgPT4gdGhpcy5nYW1lU3RhcnQoZSkpO1xuICAgICAgICAgICAgdGhpcy5ydW4oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXIoKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgYWRkV2FsbCgpe1xuICAgICAgIGNvbnN0IHNsb3dSb3RhdGlvbnMgPSBbLS4wMDEsIC4wMDFdO1xuICAgICAgIGNvbnN0IG1lZFJvdGF0aW9ucyA9IFstLjAwMiwgLjAwMl07XG4gICAgICAgY29uc3QgZmFzdFJvdGF0aW9ucyA9IFstLjAwMywgLjAwM107XG4gICAgICAgaWYgKHRoaXMuc2NvcmUgPCAxMCl7XG4gICAgICAgIGNvbnN0IHdhbGwgPSBuZXcgV2FsbCh0aGlzLmN0eCwgdGhpcy5jYW52YXMud2lkdGggLyAyLCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyLCB0aGlzLmNhbnZhcy53aWR0aCAvIDIsIFwiIzM4ODY5N1wiLCBzbG93Um90YXRpb25zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHNsb3dSb3RhdGlvbnMubGVuZ3RoKV0pXG4gICAgICAgIHRoaXMud2FsbHMucHVzaCh3YWxsKTtcbiAgICAgICAgdGhpcy50aW1lciA9IG51bGw7XG4gICAgICAgfSBlbHNlIGlmICh0aGlzLnNjb3JlIDwgMjApe1xuICAgICAgICAgICAgY29uc3Qgd2FsbCA9IG5ldyBXYWxsKHRoaXMuY3R4LCB0aGlzLmNhbnZhcy53aWR0aCAvIDIsIHRoaXMuY2FudmFzLmhlaWdodCAvIDIsIHRoaXMuY2FudmFzLndpZHRoIC8gMiwgXCIjMzg4Njk3XCIsIG1lZFJvdGF0aW9uc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtZWRSb3RhdGlvbnMubGVuZ3RoKV0pXG4gICAgICAgICAgICB0aGlzLndhbGxzLnB1c2god2FsbCk7XG4gICAgICAgICAgICB0aGlzLnRpbWVyID0gbnVsbDtcbiAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3Qgd2FsbCA9IG5ldyBXYWxsKHRoaXMuY3R4LCB0aGlzLmNhbnZhcy53aWR0aCAvIDIsIHRoaXMuY2FudmFzLmhlaWdodCAvIDIsIHRoaXMuY2FudmFzLndpZHRoIC8gMiwgXCIjMzg4Njk3XCIsIGZhc3RSb3RhdGlvbnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZmFzdFJvdGF0aW9ucy5sZW5ndGgpXSlcbiAgICAgICAgICAgIHRoaXMud2FsbHMucHVzaCh3YWxsKTtcbiAgICAgICAgICAgIHRoaXMudGltZXIgPSBudWxsO1xuICAgICAgIH1cbiAgICB9XG5cbiAgICBhbGxXYWxscygpe1xuICAgICAgICByZXR1cm4gdGhpcy53YWxscztcbiAgICB9XG5cbiAgICBzaG93U2NvcmUoKXtcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcIjIwcHggR2VvcmdpYVwiO1xuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIlNjb3JlOiBcIiArIHRoaXMuc2NvcmUsIHRoaXMuY2FudmFzLndpZHRoIC0gMTAwLCAzMCk7XG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuICAgIH1cblxuICAgIGNlbnRlclRleHQodGV4dCwgeSl7XG4gICAgICAgIGNvbnN0IG1lYXN1cmVtZW50ID0gdGhpcy5jdHgubWVhc3VyZVRleHQodGV4dCk7XG4gICAgICAgIGNvbnN0IHggPSAodGhpcy5jYW52YXMud2lkdGggLSBtZWFzdXJlbWVudC53aWR0aCkgLyAyO1xuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dCh0ZXh0LCB4LCB5KTtcbiAgICB9XG4gICAgXG4gICAgZHJhdygpIHtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIERJTV9YLCBESU1fWSk7XG4gICAgICAgIGNvbnN0IGNlbnRlclggPSBESU1fWCAvIDI7XG4gICAgICAgIGNvbnN0IGNlbnRlclkgPSBESU1fWSAvIDI7XG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSAxO1xuICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgdGhpcy5jdHguYXJjKGNlbnRlclgsIGNlbnRlclksIDMwLCAwLCAyICogTWF0aC5QSSwgZmFsc2UpO1xuICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG4gICAgICAgIHRoaXMud2FsbHMuZm9yRWFjaCh3YWxsID0+IHtcbiAgICAgICAgICAgIHdhbGwudXBkYXRlKCk7XG4gICAgICAgICAgICAvLyB3YWxsLmdhcC51cGRhdGUoKTtcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5wbGF5ZXIuZHJhdyg1KTtcblxuICAgICAgICBjb25zdCBkb1dhbGxzRXhpc3QgPSB0aGlzLndhbGxzLmxlbmd0aCA+IDA7XG4gICAgICAgIGlmKGRvV2FsbHNFeGlzdCl7XG5cbiAgICAgICAgICAgIC8vVE9ETzogd2UgY2hlY2sgZm9yIGNvbGxpc2lvbiB3aGVuIHRoZSB3YWxsIGlzIGxpdGVyYWxseSBvbnRvcCBvZiB0aGUgcGxheWVyXG4gICAgICAgICAgICAvLyBtYXliZSBmaW5kIGEgc3dlZXQgc3BvdCB3aXRoIHRoaXMucGxheWVyLnJhZGl1cyArIDEgb3Igc29tZXRoaW5nIGNhdXNlIHRoZSB0cmlhbmdsZSBoYXNcbiAgICAgICAgICAgIC8vIGEgc2l6ZSB0byBpdC5cbiAgICAgICAgICAgIGNvbnN0IGlzV2FsbE9uUGxheWVyID0gdGhpcy53YWxsc1swXS5yYWRpdXMgPD0gdGhpcy5wbGF5ZXIucmFkaXVzICsgdGhpcy5wbGF5ZXIuc2l6ZSAmJiB0aGlzLndhbGxzWzBdLnJhZGl1cyA+PSB0aGlzLnBsYXllci5yYWRpdXMgKyB0aGlzLnBsYXllci5zaXplIC0gMTtcbiAgICAgICAgICAgIGlmIChpc1dhbGxPblBsYXllcil7XG4gICAgICAgICAgICAgICAgaWYoIXRoaXMuY2hlY2tDb2xsaXNpb24odGhpcy5wbGF5ZXIsIHRoaXMud2FsbHNbMF0uZ2FwKSl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVhZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLndhbGxzWzBdLmFuZ2xlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNob3dTY29yZSgpO1xuICAgICAgICAvLyB0aGlzLmN0eC5zdHJva2UoKTtcbiAgICAgICAgLy8gdGhpcy5jdHguY2xvc2VQYXRoKCk7XG4gICAgfVxuXG4gICAgcnVuKCl7XG4gICAgICAgIGNvbnN0IHdhbGxTcGFjZSA9IDEwMDA7XG4gICAgICAgIGlmKHRoaXMud2FsbHMubGVuZ3RoIDwgOCAmJiB0aGlzLnRpbWVyID09PSBudWxsKXtcbiAgICAgICAgICAgIHRoaXMudGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHRoaXMuYWRkV2FsbCgpLCB3YWxsU3BhY2UpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLndhbGxzLmxlbmd0aCA+IDAgJiYgdGhpcy53YWxsc1swXS5yYWRpdXMgPCAzMCkgeyB0aGlzLndhbGxzLnNoaWZ0KCl9XG4gICAgICAgIHRoaXMuZHJhdygpO1xuICAgICAgICB9XG5cbiAgICB1cGRhdGVTY29yZSgpe1xuICAgICAgICB0aGlzLnNjb3JlICs9IDE7XG4gICAgfVxuXG4gICAgZ2FtZU92ZXIoKXtcbiAgICAgICAgaWYodGhpcy5zY29yZSA+IHRoaXMuaGlnaFNjb3JlKSB7XG4gICAgICAgICAgICB0aGlzLmhpZ2hTY29yZSA9IHRoaXMuc2NvcmU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50aGVtZVNvbmcuc3RvcCgpO1xuICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15Q2FudmFzXCIpO1xuICAgICAgICBjYW52YXMuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gKFwiIzQ4NjM5Y1wiKTtcbiAgICAgICAgdGhpcy53YWxscyA9IFtdO1xuICAgICAgICBsZXQgeSA9IHRoaXMuY2FudmFzLmhlaWdodCAvIDI7XG4gICAgICAgIGxldCBjb2xvciA9IFwiI0ZGMDAwMFwiO1xuICAgICAgICBsZXQgdGl0bGUgPSBcIkdhbWUgT3ZlclwiO1xuICAgICAgICBsZXQgZW50ZXIgPSBcIlRyeSBhZ2FpblwiO1xuICAgICAgICBsZXQgc2NvcmUgPSBgU2NvcmU6ICR7dGhpcy5zY29yZX1gO1xuICAgICAgICBsZXQgaGlnaFNjb3JlID0gYEhpZ2ggU2NvcmU6ICR7dGhpcy5oaWdoU2NvcmV9YDtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIERJTV9YLCBESU1fWSk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgICAgICB0aGlzLmN0eC5mb250ID0gXCI0OHB4IG1vbm9zcGFjZVwiO1xuICAgICAgICB0aGlzLmNlbnRlclRleHQodGl0bGUsIHkgKyA2MCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmN0eC5mb250ID0gXCIyNHB4IG1vbm9zcGFjZVwiO1xuICAgICAgICB0aGlzLmNlbnRlclRleHQoaGlnaFNjb3JlLCB5ICsgMjApO1xuICAgICAgICB0aGlzLmNlbnRlclRleHQoc2NvcmUsIHkpO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiMjRweCBtb25vc3BhY2VcIjtcbiAgICAgICAgdGhpcy5jZW50ZXJUZXh0KGVudGVyLCB5ICsgMTAwKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGUgPT4gdGhpcy5nYW1lU3RhcnQoZSkpO1xuICAgIH1cblxuICAgIGNoZWNrQ29sbGlzaW9uKHBsYXllciwgZ2FwKXtcbiAgICAgICAgbGV0IGNvbGxpc2lvbiA9IGZhbHNlO1xuICAgICAgICBsZXQgZ2FwUG9zID0gZ2FwLmdldFBvc2l0aW9uKCk7XG4gICAgICAgIGxldCBwbGF5ZXJBbmdsZSA9IHBsYXllci5nZXRQb3NpdGlvbigpICogTWF0aC5QSSAvIDE4MDtcbiAgICAgICAgbGV0IGVuZEFuZ2xlID0gZ2FwLmFuZ2xlIC0gKDIgKiBNYXRoLlBJIC0gZ2FwLnBhcnRpYWxDaXJjbGVBbmdsZSk7XG4gICAgICAgIGlmIChlbmRBbmdsZSA8IDApIHtcbiAgICAgICAgICAgIGVuZEFuZ2xlICs9IDIqTWF0aC5QSTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmKHBsYXllclBvcyA+IGdhcFBvc1tzdGFydF0gJiYgcGxheWVyUG9zIDwgZ2FwUG9zW2VuZF0pIGNvbGxpc2lvbiA9IHRydWU7XG5cbiAgICAgICAgLy8gdGhlIGNhc2Ugd2hlbiB0aGUgZ2FwIHN0cmFkZGxlcyB0aGUgaG9yaXpvbnRhbFxuXG4gICAgICAgIGlmIChnYXAuYW5nbGUgPCBlbmRBbmdsZSl7XG4gICAgICAgICAgICBpZiAoKHBsYXllckFuZ2xlICA+IGVuZEFuZ2xlIFxuICAgICAgICAgICAgICAgICYmIHBsYXllckFuZ2xlIDwgMiAqIE1hdGguUEkpIFxuICAgICAgICAgICAgICAgIHx8IHBsYXllckFuZ2xlIDwgZ2FwLmFuZ2xlICYmIHBsYXllckFuZ2xlID4gMCl7XG4gICAgICAgICAgICAgICAgY29sbGlzaW9uID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwbGF5ZXJBbmdsZSA8IGdhcC5hbmdsZSAmJlxuICAgICAgICAgICAgcGxheWVyQW5nbGUgPiBlbmRBbmdsZSkge1xuICAgICAgICAgICAgICAgIGNvbGxpc2lvbiA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgaWYoY29sbGlzaW9uID09PSB0cnVlKXtcbiAgICAgICAgICAgIC8vIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gJ2JsdWUnXG4gICAgICAgICAgICAvLyB0aGlzLmN0eC5zdHJva2VSZWN0KERJTV9YIC8gMiAtIDI1LCBESU1fWSAvIDIgLSAyNSwgNTAsIDUwKVxuICAgICAgICAgICAgdGhpcy51cGRhdGVTY29yZSgpO1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VCRygpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb2xsaXNpb247XG4gICAgfVxuXG4gICAgc3RhcnRTY3JlZW4oKXtcbiAgICAgICAgbGV0IHkgPSB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyO1xuICAgICAgICBsZXQgY29sb3IgPSBcIiNDQzI5MzM2XCI7XG4gICAgICAgIGxldCB0aXRsZSA9IFwiRXNjYXBlIHRoZSBTaGFwZVwiO1xuICAgICAgICBsZXQgZW50ZXIgPSBcIlByZXNzIEVudGVyXCI7XG4gICAgICAgIC8vIGxldCBlbnRlckxlbmd0aCA9IHRoaXMuY3R4Lm1lYXN1cmVUZXh0KGVudGVyKTtcbiAgICAgICAgLy8gbGV0IHRpdGxlTGVuZ3RoID0gdGhpcy5jdHgubWVhc3VyZVRleHQodGl0bGUpO1xuICAgICAgICAvLyBsZXQgZW50ZXJYID0gKHRoaXMuY2FudmFzLndpZHRoIC0gZW50ZXJMZW5ndGgud2lkdGgpIC8gMjtcbiAgICAgICAgLy8gbGV0IHggPSAodGhpcy5jYW52YXMud2lkdGggLSB0aXRsZUxlbmd0aC53aWR0aCkgLyAyO1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgRElNX1gsIERJTV9ZKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICB0aGlzLmN0eC5mb250ID0gXCI0OHB4IG1vbm9zcGFjZVwiO1xuICAgICAgICB0aGlzLmNlbnRlclRleHQodGl0bGUsIHkpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gY29sb3I7XG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcIjI0cHggbW9ub3NwYWNlXCI7XG4gICAgICAgIHRoaXMuY2VudGVyVGV4dChlbnRlciwgeSArIDMwKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGUgPT4gdGhpcy5nYW1lU3RhcnQoZSkpO1xuICAgIH1cblxuICAgIGdhbWVTdGFydChlKXtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZihlLndoaWNoID09PSAxMyB8fCBlLmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgICAgICB0aGlzLnRoZW1lU29uZy5wbGF5KCk7XG4gICAgICAgICAgICB0aGlzLmluR2FtZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmJnID0gXCIjNDg2MzljXCJcbiAgICAgICAgICAgIHRoaXMuZGVhZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5zY29yZSA9IDA7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IEdhbWUgZnJvbSAnLi9nYW1lJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVZpZXcge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY3R4KSB7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5nYW1lID0gbmV3IEdhbWUodGhpcy5jYW52YXMsIHRoaXMuY3R4KTtcbiAgICB9XG5cbiAgICBcblxuXG4gICAgYW5pbWF0ZSgpIHtcbiAgICAgICAgdGhpcy5nYW1lLmluaXQoKTtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpKTtcbiAgICB9XG59IiwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhcCB7XG4gICAgY29uc3RydWN0b3IoY3R4LCB4ICwgeSwgcmFkaXVzLCBhbmdsZSwgcm90YXRpb24sIHRpbWUpe1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy5yYWRpdXMgPSByYWRpdXM7IFxuICAgICAgICB0aGlzLnJvdGF0aW9uID0gcm90YXRpb247XG4gICAgICAgIHRoaXMuYW5nbGUgPSBhbmdsZTtcbiAgICAgICAgdGhpcy5wYXJ0aWFsQ2lyY2xlQW5nbGUgPSAyICogTWF0aC5QSSAtIDEuMjtcbiAgICB9XG5cbiAgICBkcmF3KCl7XG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5nbG9iYWxBbHBoYSA9IDAuMDtcbiAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gODtcbiAgICAgICAgdGhpcy5jdHguYXJjKHRoaXMueCwgdGhpcy55LCB0aGlzLnJhZGl1cywgdGhpcy5hbmdsZSwgdGhpcy5wYXJ0aWFsQ2lyY2xlQW5nbGUgKyB0aGlzLmFuZ2xlLCB0cnVlKTtcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5nbG9iYWxBbHBoYSA9IDEuMDtcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIGlmICh0aGlzLnJhZGl1cyA+IDMwKSB7XG4gICAgICAgICAgICB0aGlzLnJhZGl1cyAtPSAzO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZHJhdygpO1xuICAgIH1cblxuICAgIGdldFBvc2l0aW9uKCl7XG4gICAgICAgY29uc3QgcG9zaXRpb24gPSB7XG4gICAgICAgICAgIHN0YXJ0OiB0aGlzLmFuZ2xlLFxuICAgICAgICAgICBlbmQ6IHRoaXMucGFydGlhbENpcmNsZUFuZ2xlICsgdGhpcy5hbmdsZSxcbiAgICAgICB9XG4gICAgICAgcmV0dXJuIHBvc2l0aW9uO1xuICAgIH1cblxuICAgIGdldFBvaW50KGMxLCBjMiwgcmFkaXVzLCBhbmdsZSkge1xuICAgICAgICByZXR1cm4gW2MxICsgTWF0aC5jb3MoYW5nbGUpICogcmFkaXVzLCBjMiArIE1hdGguc2luKGFuZ2xlKSAqIHJhZGl1c107XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBjdHgpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLnNpemUgPSA1O1xuICAgICAgICB0aGlzLnJhZGl1cyA9IDU1O1xuICAgICAgICB0aGlzLnNwZWVkID0gNztcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSAwO1xuICAgICAgICB0aGlzLmFuZ2xlID0gMzA7XG4gICAgICAgIHRoaXMucGxheWVyUG9zID0gXCJsZWZ0XCI7XG4gICAgICAgIHRoaXMuZHJhdyA9IHRoaXMuZHJhdy5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGRyYXcoKSB7XG4gICAgICAgIC8vIHN3aXRjaCAodGhpcy5wbGF5ZXJQb3MpIHtcbiAgICAgICAgLy8gICAgIGNhc2UgXCJsZWZ0XCI6XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5jdHgubW92ZVRvKHRoaXMuY2FudmFzLndpZHRoIC8gMiAtIDMwLCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyICsgNSk7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5jdHgubGluZVRvKHRoaXMuY2FudmFzLndpZHRoIC8gMiAtIDQwLCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyKTtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmN0eC5saW5lVG8odGhpcy5jYW52YXMud2lkdGggLyAyIC0gMzAsIHRoaXMuY2FudmFzLmhlaWdodCAvIDIgLSA1KTtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgIC8vICAgICAgICAgYnJlYWs7XG4gICAgICAgIC8vICAgICBjYXNlIFwidXBcIjpcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmN0eC5tb3ZlVG8odGhpcy5jYW52YXMud2lkdGggLyAyIC0gNSwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMiAtIDMwKTtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmN0eC5saW5lVG8odGhpcy5jYW52YXMud2lkdGggLyAyLCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyIC0gNDApO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyh0aGlzLmNhbnZhcy53aWR0aCAvIDIgKyA1LCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyIC0gMzApO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgLy8gICAgICAgICBicmVhaztcbiAgICAgICAgLy8gICAgIGNhc2UgXCJyaWdodFwiOlxuICAgICAgICAvLyAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuY3R4Lm1vdmVUbyh0aGlzLmNhbnZhcy53aWR0aCAvIDIgKyAzMCwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMiArIDUpO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyh0aGlzLmNhbnZhcy53aWR0aCAvIDIgKyA0MCwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMik7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5jdHgubGluZVRvKHRoaXMuY2FudmFzLndpZHRoIC8gMiArIDMwLCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyIC0gNSk7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICAvLyAgICAgICAgIGJyZWFrO1xuICAgICAgICAvLyAgICAgY2FzZSBcImRvd25cIjpcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmN0eC5tb3ZlVG8odGhpcy5jYW52YXMud2lkdGggLyAyIC0gNSwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMiArIDMwKTtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmN0eC5saW5lVG8odGhpcy5jYW52YXMud2lkdGggLyAyLCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyICsgNDApO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyh0aGlzLmNhbnZhcy53aWR0aCAvIDIgKyA1LCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyICsgMzApO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgLy8gICAgICAgICBicmVhaztcbiAgICAgICAgLy8gICAgIGRlZmF1bHQ6XG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIGNvbnN0IGR4ID0gKHRoaXMuY2FudmFzLndpZHRoIC8gMikgKyAoKHRoaXMucmFkaXVzKSAqIE1hdGguY29zKHRoaXMuYW5nbGUgKiBNYXRoLlBJIC8gMTgwKSk7XG4gICAgICAgIGNvbnN0IGR5ID0gKHRoaXMuY2FudmFzLmhlaWdodCAvIDIpICsgKCh0aGlzLnJhZGl1cykgKiBNYXRoLnNpbih0aGlzLmFuZ2xlICogTWF0aC5QSSAvIDE4MCkpO1xuICAgICAgICB0aGlzLmFuZ2xlID0gdGhpcy5hbmdsZSArICh0aGlzLmRpcmVjdGlvbiAqIHRoaXMuc3BlZWQpO1xuXG4gICAgICAgIGlmKHRoaXMuYW5nbGUgPCAwKSB7XG4gICAgICAgICAgICB0aGlzLmFuZ2xlID0gMzYwIC0gdGhpcy5hbmdsZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHRoaXMuYW5nbGUgPiAzNjApe1xuICAgICAgICAgICAgdGhpcy5hbmdsZSAlPSAzNjA7XG4gICAgICAgIH1cbiAgICAgICAgLy8gdGhpcy5jdHguc2F2ZSgpO1xuICAgICAgICB0aGlzLmN0eC50cmFuc2xhdGUoZHgsIGR5KTtcbiAgICAgICAgdGhpcy5jdHgucm90YXRlKHRoaXMuYW5nbGUgKiBNYXRoLlBJIC8gMTgwKTtcbiAgICAgICAgLy8gdGhpcy5jdHgucmVzdG9yZSgpO1xuICAgICAgICB0aGlzLmN0eC50cmFuc2xhdGUoLWR4LCAtZHkpO1xuXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgIHRoaXMuY3R4Lm1vdmVUbyhkeCAtIHRoaXMuc2l6ZSwgZHkgLSB0aGlzLnNpemUpO1xuICAgICAgICB0aGlzLmN0eC5saW5lVG8oZHggKyB0aGlzLnNpemUsIGR5KTtcbiAgICAgICAgdGhpcy5jdHgubGluZVRvKGR4IC0gdGhpcy5zaXplLCBkeSArIHRoaXMuc2l6ZSk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgdGhpcy5jdHgudHJhbnNsYXRlKGR4LCBkeSk7XG4gICAgICAgIHRoaXMuY3R4LnJvdGF0ZSgtdGhpcy5hbmdsZSAqIE1hdGguUEkgLyAxODApO1xuICAgICAgICB0aGlzLmN0eC50cmFuc2xhdGUoLWR4LCAtZHkpO1xuXG4gICAgICAgIFxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImR4XCIgKyBkeCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZHlcIiArIGR5KTtcbiAgICB9XG4gICAgaGFuZGxlUHJlc3MoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHN3aXRjaCAoZS5rZXkpIHtcbiAgICAgICAgICAgIC8vIGNhc2UgJ0Fycm93VXAnOlxuICAgICAgICAgICAgLy8gICAgIHRoaXMucGxheWVyUG9zID0gXCJ1cFwiO1xuICAgICAgICAgICAgLy8gICAgIGJyZWFrO1xuICAgICAgICAgICAgLy8gY2FzZSAnQXJyb3dEb3duJzpcbiAgICAgICAgICAgIC8vICAgICB0aGlzLnBsYXllclBvcyA9IFwiZG93blwiO1xuICAgICAgICAgICAgLy8gICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnQXJyb3dMZWZ0JzpcbiAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IC0xO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnQXJyb3dSaWdodCc6XG4gICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSAxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlS2V5VXAoZSl7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gMDtcbiAgICB9XG5cbiAgICBnZXRQb3NpdGlvbigpe1xuICAgICAgICByZXR1cm4gdGhpcy5hbmdsZTtcbiAgICB9XG59XG5cbiIsIlxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU291bmQge1xuICAgIGNvbnN0cnVjdG9yKHNyYyl7XG4gICAgICAgIHRoaXMuc291bmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXVkaW9cIik7XG4gICAgICAgIHRoaXMuc291bmQuc3JjID0gc3JjO1xuICAgICAgICB0aGlzLnNvdW5kLnNldEF0dHJpYnV0ZShcInByZWxvYWRcIiwgXCJhdXRvXCIpO1xuICAgICAgICB0aGlzLnNvdW5kLnNldEF0dHJpYnV0ZShcImNvbnRyb2xzXCIsIFwibm9uZVwiKTtcbiAgICAgICAgdGhpcy5zb3VuZC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5zb3VuZCk7XG4gICAgfVxuXG4gICAgcGxheSgpe1xuICAgICAgICB0aGlzLnNvdW5kLnBsYXkoKTtcbiAgICB9XG5cbiAgICBzdG9wKCl7XG4gICAgICAgIHRoaXMuc291bmQucGF1c2UoKTtcbiAgICAgICAgdGhpcy5zb3VuZC5jdXJyZW50VGltZSA9IDA7XG4gICAgfVxufVxuIiwiaW1wb3J0IEdhcCBmcm9tIFwiLi9nYXBcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2FsbCB7XG4gICAgY29uc3RydWN0b3IoY3R4LCB4LCB5LCByYWRpdXMsIGNvbG9yLCByb3RhdGlvbikge1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy5yYWRpdXMgPSByYWRpdXM7XG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICAgICAgdGhpcy50aW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIHRoaXMuYW5nbGUgPSBNYXRoLnJhbmRvbSgpICogKDIgKiBNYXRoLlBJKTtcbiAgICAgICAgdGhpcy5yb3RhdGlvbiA9IHJvdGF0aW9uO1xuICAgICAgICB0aGlzLmVuZEFuZ2xlID0gMiAqIE1hdGguUEkgLSAxLjI7XG4gICAgICAgIHRoaXMuZ2FwID0gbmV3IEdhcCh0aGlzLmN0eCwgdGhpcy54LCB0aGlzLnksIHRoaXMucmFkaXVzLCB0aGlzLmFuZ2xlLCB0aGlzLnJvdGF0aW9uLCB0aGlzLnRpbWUpO1xuICAgIH1cblxuICAgIGRyYXcoKXtcbiAgICAgICAgY29uc3QgbmV3VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICBsZXQgZGlmZiA9IG5ld1RpbWUgLSB0aGlzLnRpbWU7XG4gICAgICAgXG4gICAgICAgIHRoaXMudGltZSA9IG5ld1RpbWU7XG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDg7XG4gICAgICAgIHRoaXMuY3R4LmFyYyh0aGlzLngsIHRoaXMueSwgdGhpcy5yYWRpdXMsIHRoaXMuYW5nbGUsIHRoaXMuZW5kQW5nbGUgKyB0aGlzLmFuZ2xlLCBmYWxzZSk7XG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgICAgICB0aGlzLmFuZ2xlICs9IGRpZmYgKiB0aGlzLnJvdGF0aW9uO1xuICAgICAgICB0aGlzLmFuZ2xlICU9IDIgKiBNYXRoLlBJO1xuXG4gICAgICAgIHRoaXMuZ2FwLmFuZ2xlICs9IGRpZmYgKiB0aGlzLnJvdGF0aW9uO1xuICAgICAgICB0aGlzLmdhcC5hbmdsZSAlPSAyICogTWF0aC5QSTtcblxuICAgICAgICBpZiAodGhpcy5hbmdsZSA8IDApIHtcbiAgICAgICAgICAgIHRoaXMuYW5nbGUgPSAyICogTWF0aC5QSTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmFuZ2xlID4gMiAqIE1hdGguUEkpIHtcbiAgICAgICAgICAgIHRoaXMuYW5nbGUgJT0gMiAqIE1hdGguUEk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5nYXAuYW5nbGUgPCAwKSB7XG4gICAgICAgICAgICB0aGlzLmdhcC5hbmdsZSA9IDIgKiBNYXRoLlBJO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZ2FwLmFuZ2xlID4gMiAqIE1hdGguUEkpIHtcbiAgICAgICAgICAgIHRoaXMuZ2FwLmFuZ2xlICU9IDIgKiBNYXRoLlBJO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlKCl7XG4gICAgICAgIGlmKHRoaXMucmFkaXVzID4gMzApIHtcbiAgICAgICAgICAgIHRoaXMucmFkaXVzIC09IDM7XG4gICAgICAgICAgICB0aGlzLmdhcC5yYWRpdXMgLT0gMztcbiAgICAgICAgfSBcbiAgICAgICAgdGhpcy5nYXAuZHJhdygpO1xuICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==