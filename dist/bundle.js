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
            if (this.radius === 290) {
                this.reverse();
            }
            this.gap.draw();
            this.draw();
        }
    }, {
        key: "reverse",
        value: function reverse() {

            this.rotation *= -3;
        }
    }]);

    return Wall;
}();

exports.default = Wall;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qYXZhc2NyaXB0L2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2phdmFzY3JpcHQvZ2FtZV92aWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9qYXZhc2NyaXB0L2dhcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvamF2YXNjcmlwdC9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2phdmFzY3JpcHQvc291bmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2phdmFzY3JpcHQvd2FsbC5qcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXMiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsIndpZHRoIiwiaGVpZ2h0IiwiY3R4IiwiZ2V0Q29udGV4dCIsImdhbWVWaWV3IiwiR2FtZVZpZXciLCJnYW1lIiwicGxheWVyIiwiaGFuZGxlUHJlc3MiLCJlIiwiZ2FtZVN0YXJ0IiwiaGFuZGxlS2V5VXAiLCJhbmltYXRlIiwiRElNX1giLCJESU1fWSIsIkNPTE9SX1NDSEVNRSIsIkdhbWUiLCJQbGF5ZXIiLCJ3YWxscyIsInRpbWVyIiwic2NvcmUiLCJpbkdhbWUiLCJkZWFkIiwiYmciLCJoaWdoU2NvcmUiLCJ0aGVtZVNvbmciLCJTb3VuZCIsInJhbmRvbUNvbG9yIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwidG9TdHJpbmciLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwic3RhcnRTY3JlZW4iLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicnVuIiwiZ2FtZU92ZXIiLCJzbG93Um90YXRpb25zIiwibWVkUm90YXRpb25zIiwiZmFzdFJvdGF0aW9ucyIsIndhbGwiLCJXYWxsIiwibGVuZ3RoIiwicHVzaCIsImJlZ2luUGF0aCIsImZvbnQiLCJmaWxsVGV4dCIsImNsb3NlUGF0aCIsInRleHQiLCJ5IiwibWVhc3VyZW1lbnQiLCJtZWFzdXJlVGV4dCIsIngiLCJjbGVhclJlY3QiLCJjZW50ZXJYIiwiY2VudGVyWSIsImxpbmVXaWR0aCIsInN0cm9rZVN0eWxlIiwiYXJjIiwiUEkiLCJzdHJva2UiLCJmb3JFYWNoIiwidXBkYXRlIiwiZHJhdyIsImRvV2FsbHNFeGlzdCIsImlzV2FsbE9uUGxheWVyIiwicmFkaXVzIiwic2l6ZSIsImNoZWNrQ29sbGlzaW9uIiwiZ2FwIiwic2hvd1Njb3JlIiwiY29uc29sZSIsImxvZyIsIndhbGxTcGFjZSIsInNldFRpbWVvdXQiLCJhZGRXYWxsIiwic2hpZnQiLCJzdG9wIiwiY29sb3IiLCJ0aXRsZSIsImVudGVyIiwiZmlsbFN0eWxlIiwiY2VudGVyVGV4dCIsImNvbGxpc2lvbiIsImdhcFBvcyIsImdldFBvc2l0aW9uIiwicGxheWVyQW5nbGUiLCJlbmRBbmdsZSIsImFuZ2xlIiwicGFydGlhbENpcmNsZUFuZ2xlIiwidXBkYXRlU2NvcmUiLCJjaGFuZ2VCRyIsInByZXZlbnREZWZhdWx0Iiwid2hpY2giLCJrZXlDb2RlIiwicGxheSIsImluaXQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJiaW5kIiwiR2FwIiwicm90YXRpb24iLCJ0aW1lIiwiZ2xvYmFsQWxwaGEiLCJwb3NpdGlvbiIsInN0YXJ0IiwiZW5kIiwiYzEiLCJjMiIsImNvcyIsInNpbiIsInNwZWVkIiwiZGlyZWN0aW9uIiwicGxheWVyUG9zIiwiZHgiLCJkeSIsInRyYW5zbGF0ZSIsInJvdGF0ZSIsIm1vdmVUbyIsImxpbmVUbyIsImZpbGwiLCJrZXkiLCJzcmMiLCJzb3VuZCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJkaXNwbGF5IiwiYm9keSIsImFwcGVuZENoaWxkIiwicGF1c2UiLCJjdXJyZW50VGltZSIsIkRhdGUiLCJnZXRUaW1lIiwibmV3VGltZSIsImRpZmYiLCJyZXZlcnNlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNB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LEtBQUtpQyxFQUEzQjs7QUFFQSxnQkFBSSxLQUFLNkIsS0FBTCxHQUFhLENBQWpCLEVBQW9CO0FBQ2hCLHFCQUFLQSxLQUFMLEdBQWEsSUFBSTlELEtBQUtpQyxFQUF0QjtBQUNIOztBQUVELGdCQUFJLEtBQUs2QixLQUFMLEdBQWEsSUFBSTlELEtBQUtpQyxFQUExQixFQUE4QjtBQUMxQixxQkFBSzZCLEtBQUwsSUFBYyxJQUFJOUQsS0FBS2lDLEVBQXZCO0FBQ0g7O0FBRUQsZ0JBQUksS0FBS1UsR0FBTCxDQUFTbUIsS0FBVCxHQUFpQixDQUFyQixFQUF3QjtBQUNwQixxQkFBS25CLEdBQUwsQ0FBU21CLEtBQVQsR0FBaUIsSUFBSTlELEtBQUtpQyxFQUExQjtBQUNIOztBQUVELGdCQUFJLEtBQUtVLEdBQUwsQ0FBU21CLEtBQVQsR0FBaUIsSUFBSTlELEtBQUtpQyxFQUE5QixFQUFrQztBQUM5QixxQkFBS1UsR0FBTCxDQUFTbUIsS0FBVCxJQUFrQixJQUFJOUQsS0FBS2lDLEVBQTNCO0FBQ0g7QUFDSjs7O2lDQUVPO0FBQ0osZ0JBQUcsS0FBS08sTUFBTCxHQUFjLEVBQWpCLEVBQXFCO0FBQ2pCLHFCQUFLQSxNQUFMLElBQWUsQ0FBZjtBQUNBLHFCQUFLRyxHQUFMLENBQVNILE1BQVQsSUFBbUIsQ0FBbkI7QUFDSDtBQUNELGdCQUFHLEtBQUtBLE1BQUwsS0FBZ0IsR0FBbkIsRUFBdUI7QUFDbkIscUJBQUtvRSxPQUFMO0FBQ0g7QUFDRCxpQkFBS2pFLEdBQUwsQ0FBU04sSUFBVDtBQUNBLGlCQUFLQSxJQUFMO0FBQ0g7OztrQ0FFUTs7QUFFTCxpQkFBS3FDLFFBQUwsSUFBaUIsQ0FBQyxDQUFsQjtBQUVIOzs7Ozs7a0JBakVnQjNELEkiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgUGxheWVyIGZyb20gJy4vamF2YXNjcmlwdC9wbGF5ZXInO1xuaW1wb3J0IEdhbWUgZnJvbSAnLi9qYXZhc2NyaXB0L2dhbWUnO1xuaW1wb3J0IEdhbWVWaWV3IGZyb20gJy4vamF2YXNjcmlwdC9nYW1lX3ZpZXcnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJjYW52YXNcIilbMF07XG4gICAgY2FudmFzLndpZHRoID0gMTAwMDtcbiAgICBjYW52YXMuaGVpZ2h0ID0gNjAwO1xuXG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblxuXG4gICAgY29uc3QgZ2FtZVZpZXcgPSBuZXcgR2FtZVZpZXcoY2FudmFzLCBjdHgpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBlID0+IGdhbWVWaWV3LmdhbWUucGxheWVyLmhhbmRsZVByZXNzKGUpKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZSA9PiBnYW1lVmlldy5nYW1lLmdhbWVTdGFydChlKSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBlID0+IGdhbWVWaWV3LmdhbWUucGxheWVyLmhhbmRsZUtleVVwKGUpKTtcbiAgICBnYW1lVmlldy5hbmltYXRlKCk7XG59KTtcblxuXG5cbiIsImltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vcGxheWVyXCI7XG5pbXBvcnQgV2FsbCBmcm9tIFwiLi93YWxsXCI7XG5pbXBvcnQgU291bmQgZnJvbSAnLi9zb3VuZCc7XG5jb25zdCBESU1fWCA9IDEwMDA7XG5jb25zdCBESU1fWSA9IDYwMDtcbmNvbnN0IENPTE9SX1NDSEVNRSA9IFtcIiNDQzI5MzM2XCIsIFwiRUJCQUI5XCIsIFwiIzM4ODY5N1wiLCBcIiNCRkZGRTFcIl1cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY3R4KSB7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyKHRoaXMuY2FudmFzLCB0aGlzLmN0eClcbiAgICAgICAgdGhpcy53YWxscyA9IFtdO1xuICAgICAgICB0aGlzLnRpbWVyID0gbnVsbDtcbiAgICAgICAgdGhpcy5zY29yZSA9IDA7XG4gICAgICAgIHRoaXMuaW5HYW1lID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZGVhZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmJnID0gXCIjNDg2MzljXCI7XG4gICAgICAgIHRoaXMuaGlnaFNjb3JlID0gMDtcbiAgICAgICAgdGhpcy50aGVtZVNvbmcgPSBuZXcgU291bmQoXCJnYW1ldGhlbWUubXAzXCIpO1xuICAgIH1cblxuICAgIGNoYW5nZUJHKCkge1xuICAgICAgICBjb25zdCByYW5kb21Db2xvciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDE2Nzc3MjE1KS50b1N0cmluZygxNik7XG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlDYW52YXNcIik7XG4gICAgICAgIHRoaXMuYmcgPSBjYW52YXMuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjXCIgKyByYW5kb21Db2xvcjtcbiAgICB9XG5cbiAgICBpbml0KCl7XG4gICAgICAgIGlmKCF0aGlzLmluR2FtZSl7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0U2NyZWVuKCk7XG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmluR2FtZSAmJiAhdGhpcy5kZWFkKXtcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBlID0+IHRoaXMuZ2FtZVN0YXJ0KGUpKTtcbiAgICAgICAgICAgIHRoaXMucnVuKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmdhbWVPdmVyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGFkZFdhbGwoKXtcbiAgICAgICBjb25zdCBzbG93Um90YXRpb25zID0gWy0uMDAxLCAuMDAxXTtcbiAgICAgICBjb25zdCBtZWRSb3RhdGlvbnMgPSBbLS4wMDIsIC4wMDJdO1xuICAgICAgIGNvbnN0IGZhc3RSb3RhdGlvbnMgPSBbLS4wMDMsIC4wMDNdO1xuICAgICAgIGlmICh0aGlzLnNjb3JlIDwgMTApe1xuICAgICAgICBjb25zdCB3YWxsID0gbmV3IFdhbGwodGhpcy5jdHgsIHRoaXMuY2FudmFzLndpZHRoIC8gMiwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMiwgdGhpcy5jYW52YXMud2lkdGggLyAyLCBcIiMzODg2OTdcIiwgc2xvd1JvdGF0aW9uc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBzbG93Um90YXRpb25zLmxlbmd0aCldKVxuICAgICAgICB0aGlzLndhbGxzLnB1c2god2FsbCk7XG4gICAgICAgIHRoaXMudGltZXIgPSBudWxsO1xuICAgICAgIH0gZWxzZSBpZiAodGhpcy5zY29yZSA8IDIwKXtcbiAgICAgICAgICAgIGNvbnN0IHdhbGwgPSBuZXcgV2FsbCh0aGlzLmN0eCwgdGhpcy5jYW52YXMud2lkdGggLyAyLCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyLCB0aGlzLmNhbnZhcy53aWR0aCAvIDIsIFwiIzM4ODY5N1wiLCBtZWRSb3RhdGlvbnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbWVkUm90YXRpb25zLmxlbmd0aCldKVxuICAgICAgICAgICAgdGhpcy53YWxscy5wdXNoKHdhbGwpO1xuICAgICAgICAgICAgdGhpcy50aW1lciA9IG51bGw7XG4gICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHdhbGwgPSBuZXcgV2FsbCh0aGlzLmN0eCwgdGhpcy5jYW52YXMud2lkdGggLyAyLCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyLCB0aGlzLmNhbnZhcy53aWR0aCAvIDIsIFwiIzM4ODY5N1wiLCBmYXN0Um90YXRpb25zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGZhc3RSb3RhdGlvbnMubGVuZ3RoKV0pXG4gICAgICAgICAgICB0aGlzLndhbGxzLnB1c2god2FsbCk7XG4gICAgICAgICAgICB0aGlzLnRpbWVyID0gbnVsbDtcbiAgICAgICB9XG4gICAgfVxuXG4gICAgYWxsV2FsbHMoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMud2FsbHM7XG4gICAgfVxuXG4gICAgc2hvd1Njb3JlKCl7XG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5mb250ID0gXCIyMHB4IEdlb3JnaWFcIjtcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJTY29yZTogXCIgKyB0aGlzLnNjb3JlLCB0aGlzLmNhbnZhcy53aWR0aCAtIDEwMCwgMzApO1xuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcbiAgICB9XG5cbiAgICBjZW50ZXJUZXh0KHRleHQsIHkpe1xuICAgICAgICBjb25zdCBtZWFzdXJlbWVudCA9IHRoaXMuY3R4Lm1lYXN1cmVUZXh0KHRleHQpO1xuICAgICAgICBjb25zdCB4ID0gKHRoaXMuY2FudmFzLndpZHRoIC0gbWVhc3VyZW1lbnQud2lkdGgpIC8gMjtcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQodGV4dCwgeCwgeSk7XG4gICAgfVxuICAgIFxuICAgIGRyYXcoKSB7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCBESU1fWCwgRElNX1kpO1xuICAgICAgICBjb25zdCBjZW50ZXJYID0gRElNX1ggLyAyO1xuICAgICAgICBjb25zdCBjZW50ZXJZID0gRElNX1kgLyAyO1xuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gMTtcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgIHRoaXMuY3R4LmFyYyhjZW50ZXJYLCBjZW50ZXJZLCAzMCwgMCwgMiAqIE1hdGguUEksIGZhbHNlKTtcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICB0aGlzLndhbGxzLmZvckVhY2god2FsbCA9PiB7XG4gICAgICAgICAgICB3YWxsLnVwZGF0ZSgpO1xuICAgICAgICAgICAgLy8gd2FsbC5nYXAudXBkYXRlKCk7XG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMucGxheWVyLmRyYXcoNSk7XG5cbiAgICAgICAgY29uc3QgZG9XYWxsc0V4aXN0ID0gdGhpcy53YWxscy5sZW5ndGggPiAwO1xuICAgICAgICBpZihkb1dhbGxzRXhpc3Qpe1xuXG4gICAgICAgICAgICAvL1RPRE86IHdlIGNoZWNrIGZvciBjb2xsaXNpb24gd2hlbiB0aGUgd2FsbCBpcyBsaXRlcmFsbHkgb250b3Agb2YgdGhlIHBsYXllclxuICAgICAgICAgICAgLy8gbWF5YmUgZmluZCBhIHN3ZWV0IHNwb3Qgd2l0aCB0aGlzLnBsYXllci5yYWRpdXMgKyAxIG9yIHNvbWV0aGluZyBjYXVzZSB0aGUgdHJpYW5nbGUgaGFzXG4gICAgICAgICAgICAvLyBhIHNpemUgdG8gaXQuXG4gICAgICAgICAgICBjb25zdCBpc1dhbGxPblBsYXllciA9IHRoaXMud2FsbHNbMF0ucmFkaXVzIDw9IHRoaXMucGxheWVyLnJhZGl1cyArIHRoaXMucGxheWVyLnNpemUgJiYgdGhpcy53YWxsc1swXS5yYWRpdXMgPj0gdGhpcy5wbGF5ZXIucmFkaXVzICsgdGhpcy5wbGF5ZXIuc2l6ZSAtIDE7XG4gICAgICAgICAgICBpZiAoaXNXYWxsT25QbGF5ZXIpe1xuICAgICAgICAgICAgICAgIGlmKCF0aGlzLmNoZWNrQ29sbGlzaW9uKHRoaXMucGxheWVyLCB0aGlzLndhbGxzWzBdLmdhcCkpe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlYWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy53YWxsc1swXS5hbmdsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zaG93U2NvcmUoKTtcbiAgICAgICAgaWYodGhpcy53YWxscy5sZW5ndGgpIHtjb25zb2xlLmxvZyh0aGlzLndhbGxzWzBdLnJhZGl1cykgfTtcbiAgICAgICAgLy8gdGhpcy5jdHguc3Ryb2tlKCk7XG4gICAgICAgIC8vIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuICAgIH1cblxuICAgIHJ1bigpe1xuICAgICAgICBjb25zdCB3YWxsU3BhY2UgPSAxMDAwO1xuICAgICAgICBpZih0aGlzLndhbGxzLmxlbmd0aCA8IDggJiYgdGhpcy50aW1lciA9PT0gbnVsbCl7XG4gICAgICAgICAgICB0aGlzLnRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB0aGlzLmFkZFdhbGwoKSwgd2FsbFNwYWNlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy53YWxscy5sZW5ndGggPiAwICYmIHRoaXMud2FsbHNbMF0ucmFkaXVzIDwgMzApIHsgdGhpcy53YWxscy5zaGlmdCgpfVxuICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICAgICAgfVxuXG4gICAgdXBkYXRlU2NvcmUoKXtcbiAgICAgICAgdGhpcy5zY29yZSArPSAxO1xuICAgIH1cblxuICAgIGdhbWVPdmVyKCl7XG4gICAgICAgIGlmKHRoaXMuc2NvcmUgPiB0aGlzLmhpZ2hTY29yZSkge1xuICAgICAgICAgICAgdGhpcy5oaWdoU2NvcmUgPSB0aGlzLnNjb3JlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudGhlbWVTb25nLnN0b3AoKTtcbiAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUNhbnZhc1wiKTtcbiAgICAgICAgY2FudmFzLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IChcIiM0ODYzOWNcIik7XG4gICAgICAgIHRoaXMud2FsbHMgPSBbXTtcbiAgICAgICAgbGV0IHkgPSB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyO1xuICAgICAgICBsZXQgY29sb3IgPSBcIiNGRjAwMDBcIjtcbiAgICAgICAgbGV0IHRpdGxlID0gXCJHYW1lIE92ZXJcIjtcbiAgICAgICAgbGV0IGVudGVyID0gXCJUcnkgYWdhaW5cIjtcbiAgICAgICAgbGV0IHNjb3JlID0gYFNjb3JlOiAke3RoaXMuc2NvcmV9YDtcbiAgICAgICAgbGV0IGhpZ2hTY29yZSA9IGBIaWdoIFNjb3JlOiAke3RoaXMuaGlnaFNjb3JlfWA7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCBESU1fWCwgRElNX1kpO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiNDhweCBtb25vc3BhY2VcIjtcbiAgICAgICAgdGhpcy5jZW50ZXJUZXh0KHRpdGxlLCB5ICsgNjApO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiMjRweCBtb25vc3BhY2VcIjtcbiAgICAgICAgdGhpcy5jZW50ZXJUZXh0KGhpZ2hTY29yZSwgeSArIDIwKTtcbiAgICAgICAgdGhpcy5jZW50ZXJUZXh0KHNjb3JlLCB5KTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gY29sb3I7XG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcIjI0cHggbW9ub3NwYWNlXCI7XG4gICAgICAgIHRoaXMuY2VudGVyVGV4dChlbnRlciwgeSArIDEwMCk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBlID0+IHRoaXMuZ2FtZVN0YXJ0KGUpKTtcbiAgICB9XG5cbiAgICBjaGVja0NvbGxpc2lvbihwbGF5ZXIsIGdhcCl7XG4gICAgICAgIGxldCBjb2xsaXNpb24gPSBmYWxzZTtcbiAgICAgICAgbGV0IGdhcFBvcyA9IGdhcC5nZXRQb3NpdGlvbigpO1xuICAgICAgICBsZXQgcGxheWVyQW5nbGUgPSBwbGF5ZXIuZ2V0UG9zaXRpb24oKSAqIE1hdGguUEkgLyAxODA7XG4gICAgICAgIGxldCBlbmRBbmdsZSA9IGdhcC5hbmdsZSAtICgyICogTWF0aC5QSSAtIGdhcC5wYXJ0aWFsQ2lyY2xlQW5nbGUpO1xuICAgICAgICBpZiAoZW5kQW5nbGUgPCAwKSB7XG4gICAgICAgICAgICBlbmRBbmdsZSArPSAyKk1hdGguUEk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZihwbGF5ZXJQb3MgPiBnYXBQb3Nbc3RhcnRdICYmIHBsYXllclBvcyA8IGdhcFBvc1tlbmRdKSBjb2xsaXNpb24gPSB0cnVlO1xuXG4gICAgICAgIC8vIHRoZSBjYXNlIHdoZW4gdGhlIGdhcCBzdHJhZGRsZXMgdGhlIGhvcml6b250YWxcblxuICAgICAgICBpZiAoZ2FwLmFuZ2xlIDwgZW5kQW5nbGUpe1xuICAgICAgICAgICAgaWYgKChwbGF5ZXJBbmdsZSAgPiBlbmRBbmdsZSBcbiAgICAgICAgICAgICAgICAmJiBwbGF5ZXJBbmdsZSA8IDIgKiBNYXRoLlBJKSBcbiAgICAgICAgICAgICAgICB8fCBwbGF5ZXJBbmdsZSA8IGdhcC5hbmdsZSAmJiBwbGF5ZXJBbmdsZSA+IDApe1xuICAgICAgICAgICAgICAgIGNvbGxpc2lvbiA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGxheWVyQW5nbGUgPCBnYXAuYW5nbGUgJiZcbiAgICAgICAgICAgIHBsYXllckFuZ2xlID4gZW5kQW5nbGUpIHtcbiAgICAgICAgICAgICAgICBjb2xsaXNpb24gPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIGlmKGNvbGxpc2lvbiA9PT0gdHJ1ZSl7XG4gICAgICAgICAgICAvLyB0aGlzLmN0eC5zdHJva2VTdHlsZSA9ICdibHVlJ1xuICAgICAgICAgICAgLy8gdGhpcy5jdHguc3Ryb2tlUmVjdChESU1fWCAvIDIgLSAyNSwgRElNX1kgLyAyIC0gMjUsIDUwLCA1MClcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2NvcmUoKTtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlQkcoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29sbGlzaW9uO1xuICAgIH1cblxuICAgIHN0YXJ0U2NyZWVuKCl7XG4gICAgICAgIGxldCB5ID0gdGhpcy5jYW52YXMuaGVpZ2h0IC8gMjtcbiAgICAgICAgbGV0IGNvbG9yID0gXCIjQ0MyOTMzNlwiO1xuICAgICAgICBsZXQgdGl0bGUgPSBcIkVzY2FwZSB0aGUgU2hhcGVcIjtcbiAgICAgICAgbGV0IGVudGVyID0gXCJQcmVzcyBFbnRlclwiO1xuICAgICAgICAvLyBsZXQgZW50ZXJMZW5ndGggPSB0aGlzLmN0eC5tZWFzdXJlVGV4dChlbnRlcik7XG4gICAgICAgIC8vIGxldCB0aXRsZUxlbmd0aCA9IHRoaXMuY3R4Lm1lYXN1cmVUZXh0KHRpdGxlKTtcbiAgICAgICAgLy8gbGV0IGVudGVyWCA9ICh0aGlzLmNhbnZhcy53aWR0aCAtIGVudGVyTGVuZ3RoLndpZHRoKSAvIDI7XG4gICAgICAgIC8vIGxldCB4ID0gKHRoaXMuY2FudmFzLndpZHRoIC0gdGl0bGVMZW5ndGgud2lkdGgpIC8gMjtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIERJTV9YLCBESU1fWSk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiNDhweCBtb25vc3BhY2VcIjtcbiAgICAgICAgdGhpcy5jZW50ZXJUZXh0KHRpdGxlLCB5KTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgICAgICB0aGlzLmN0eC5mb250ID0gXCIyNHB4IG1vbm9zcGFjZVwiO1xuICAgICAgICB0aGlzLmNlbnRlclRleHQoZW50ZXIsIHkgKyAzMCk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBlID0+IHRoaXMuZ2FtZVN0YXJ0KGUpKTtcbiAgICB9XG5cbiAgICBnYW1lU3RhcnQoZSl7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYoZS53aGljaCA9PT0gMTMgfHwgZS5rZXlDb2RlID09PSAxMykge1xuICAgICAgICAgICAgdGhpcy50aGVtZVNvbmcucGxheSgpO1xuICAgICAgICAgICAgdGhpcy5pbkdhbWUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5iZyA9IFwiIzQ4NjM5Y1wiXG4gICAgICAgICAgICB0aGlzLmRlYWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuc2NvcmUgPSAwO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCBHYW1lIGZyb20gJy4vZ2FtZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVWaWV3IHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGN0eCkge1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuZ2FtZSA9IG5ldyBHYW1lKHRoaXMuY2FudmFzLCB0aGlzLmN0eCk7XG4gICAgfVxuXG4gICAgXG5cblxuICAgIGFuaW1hdGUoKSB7XG4gICAgICAgIHRoaXMuZ2FtZS5pbml0KCk7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUuYmluZCh0aGlzKSk7XG4gICAgfVxufSIsIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYXAge1xuICAgIGNvbnN0cnVjdG9yKGN0eCwgeCAsIHksIHJhZGl1cywgYW5nbGUsIHJvdGF0aW9uLCB0aW1lKXtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMucmFkaXVzID0gcmFkaXVzOyBcbiAgICAgICAgdGhpcy5yb3RhdGlvbiA9IHJvdGF0aW9uO1xuICAgICAgICB0aGlzLmFuZ2xlID0gYW5nbGU7XG4gICAgICAgIHRoaXMucGFydGlhbENpcmNsZUFuZ2xlID0gMiAqIE1hdGguUEkgLSAxLjI7XG4gICAgfVxuXG4gICAgZHJhdygpe1xuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHguZ2xvYmFsQWxwaGEgPSAwLjA7XG4gICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDg7XG4gICAgICAgIHRoaXMuY3R4LmFyYyh0aGlzLngsIHRoaXMueSwgdGhpcy5yYWRpdXMsIHRoaXMuYW5nbGUsIHRoaXMucGFydGlhbENpcmNsZUFuZ2xlICsgdGhpcy5hbmdsZSwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHguZ2xvYmFsQWxwaGEgPSAxLjA7XG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgICBpZiAodGhpcy5yYWRpdXMgPiAzMCkge1xuICAgICAgICAgICAgdGhpcy5yYWRpdXMgLT0gMztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICB9XG5cbiAgICBnZXRQb3NpdGlvbigpe1xuICAgICAgIGNvbnN0IHBvc2l0aW9uID0ge1xuICAgICAgICAgICBzdGFydDogdGhpcy5hbmdsZSxcbiAgICAgICAgICAgZW5kOiB0aGlzLnBhcnRpYWxDaXJjbGVBbmdsZSArIHRoaXMuYW5nbGUsXG4gICAgICAgfVxuICAgICAgIHJldHVybiBwb3NpdGlvbjtcbiAgICB9XG5cbiAgICBnZXRQb2ludChjMSwgYzIsIHJhZGl1cywgYW5nbGUpIHtcbiAgICAgICAgcmV0dXJuIFtjMSArIE1hdGguY29zKGFuZ2xlKSAqIHJhZGl1cywgYzIgKyBNYXRoLnNpbihhbmdsZSkgKiByYWRpdXNdO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY3R4KSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5zaXplID0gNTtcbiAgICAgICAgdGhpcy5yYWRpdXMgPSA1NTtcbiAgICAgICAgdGhpcy5zcGVlZCA9IDc7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gMDtcbiAgICAgICAgdGhpcy5hbmdsZSA9IDMwO1xuICAgICAgICB0aGlzLnBsYXllclBvcyA9IFwibGVmdFwiO1xuICAgICAgICB0aGlzLmRyYXcgPSB0aGlzLmRyYXcuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBkcmF3KCkge1xuICAgICAgICAvLyBzd2l0Y2ggKHRoaXMucGxheWVyUG9zKSB7XG4gICAgICAgIC8vICAgICBjYXNlIFwibGVmdFwiOlxuICAgICAgICAvLyAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuY3R4Lm1vdmVUbyh0aGlzLmNhbnZhcy53aWR0aCAvIDIgLSAzMCwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMiArIDUpO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyh0aGlzLmNhbnZhcy53aWR0aCAvIDIgLSA0MCwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMik7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5jdHgubGluZVRvKHRoaXMuY2FudmFzLndpZHRoIC8gMiAtIDMwLCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyIC0gNSk7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICAvLyAgICAgICAgIGJyZWFrO1xuICAgICAgICAvLyAgICAgY2FzZSBcInVwXCI6XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5jdHgubW92ZVRvKHRoaXMuY2FudmFzLndpZHRoIC8gMiAtIDUsIHRoaXMuY2FudmFzLmhlaWdodCAvIDIgLSAzMCk7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5jdHgubGluZVRvKHRoaXMuY2FudmFzLndpZHRoIC8gMiwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMiAtIDQwKTtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmN0eC5saW5lVG8odGhpcy5jYW52YXMud2lkdGggLyAyICsgNSwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMiAtIDMwKTtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgIC8vICAgICAgICAgYnJlYWs7XG4gICAgICAgIC8vICAgICBjYXNlIFwicmlnaHRcIjpcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmN0eC5tb3ZlVG8odGhpcy5jYW52YXMud2lkdGggLyAyICsgMzAsIHRoaXMuY2FudmFzLmhlaWdodCAvIDIgKyA1KTtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmN0eC5saW5lVG8odGhpcy5jYW52YXMud2lkdGggLyAyICsgNDAsIHRoaXMuY2FudmFzLmhlaWdodCAvIDIpO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyh0aGlzLmNhbnZhcy53aWR0aCAvIDIgKyAzMCwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMiAtIDUpO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgLy8gICAgICAgICBicmVhaztcbiAgICAgICAgLy8gICAgIGNhc2UgXCJkb3duXCI6XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5jdHgubW92ZVRvKHRoaXMuY2FudmFzLndpZHRoIC8gMiAtIDUsIHRoaXMuY2FudmFzLmhlaWdodCAvIDIgKyAzMCk7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5jdHgubGluZVRvKHRoaXMuY2FudmFzLndpZHRoIC8gMiwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMiArIDQwKTtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmN0eC5saW5lVG8odGhpcy5jYW52YXMud2lkdGggLyAyICsgNSwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMiArIDMwKTtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgIC8vICAgICAgICAgYnJlYWs7XG4gICAgICAgIC8vICAgICBkZWZhdWx0OlxuICAgICAgICAvLyAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICBjb25zdCBkeCA9ICh0aGlzLmNhbnZhcy53aWR0aCAvIDIpICsgKCh0aGlzLnJhZGl1cykgKiBNYXRoLmNvcyh0aGlzLmFuZ2xlICogTWF0aC5QSSAvIDE4MCkpO1xuICAgICAgICBjb25zdCBkeSA9ICh0aGlzLmNhbnZhcy5oZWlnaHQgLyAyKSArICgodGhpcy5yYWRpdXMpICogTWF0aC5zaW4odGhpcy5hbmdsZSAqIE1hdGguUEkgLyAxODApKTtcbiAgICAgICAgdGhpcy5hbmdsZSA9IHRoaXMuYW5nbGUgKyAodGhpcy5kaXJlY3Rpb24gKiB0aGlzLnNwZWVkKTtcblxuICAgICAgICBpZih0aGlzLmFuZ2xlIDwgMCkge1xuICAgICAgICAgICAgdGhpcy5hbmdsZSA9IDM2MCAtIHRoaXMuYW5nbGU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZih0aGlzLmFuZ2xlID4gMzYwKXtcbiAgICAgICAgICAgIHRoaXMuYW5nbGUgJT0gMzYwO1xuICAgICAgICB9XG4gICAgICAgIC8vIHRoaXMuY3R4LnNhdmUoKTtcbiAgICAgICAgdGhpcy5jdHgudHJhbnNsYXRlKGR4LCBkeSk7XG4gICAgICAgIHRoaXMuY3R4LnJvdGF0ZSh0aGlzLmFuZ2xlICogTWF0aC5QSSAvIDE4MCk7XG4gICAgICAgIC8vIHRoaXMuY3R4LnJlc3RvcmUoKTtcbiAgICAgICAgdGhpcy5jdHgudHJhbnNsYXRlKC1keCwgLWR5KTtcblxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICB0aGlzLmN0eC5tb3ZlVG8oZHggLSB0aGlzLnNpemUsIGR5IC0gdGhpcy5zaXplKTtcbiAgICAgICAgdGhpcy5jdHgubGluZVRvKGR4ICsgdGhpcy5zaXplLCBkeSk7XG4gICAgICAgIHRoaXMuY3R4LmxpbmVUbyhkeCAtIHRoaXMuc2l6ZSwgZHkgKyB0aGlzLnNpemUpO1xuICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgIHRoaXMuY3R4LnRyYW5zbGF0ZShkeCwgZHkpO1xuICAgICAgICB0aGlzLmN0eC5yb3RhdGUoLXRoaXMuYW5nbGUgKiBNYXRoLlBJIC8gMTgwKTtcbiAgICAgICAgdGhpcy5jdHgudHJhbnNsYXRlKC1keCwgLWR5KTtcblxuICAgICAgICBcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJkeFwiICsgZHgpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImR5XCIgKyBkeSk7XG4gICAgfVxuICAgIGhhbmRsZVByZXNzKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBzd2l0Y2ggKGUua2V5KSB7XG4gICAgICAgICAgICAvLyBjYXNlICdBcnJvd1VwJzpcbiAgICAgICAgICAgIC8vICAgICB0aGlzLnBsYXllclBvcyA9IFwidXBcIjtcbiAgICAgICAgICAgIC8vICAgICBicmVhaztcbiAgICAgICAgICAgIC8vIGNhc2UgJ0Fycm93RG93bic6XG4gICAgICAgICAgICAvLyAgICAgdGhpcy5wbGF5ZXJQb3MgPSBcImRvd25cIjtcbiAgICAgICAgICAgIC8vICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0Fycm93TGVmdCc6XG4gICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSAtMTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0Fycm93UmlnaHQnOlxuICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uID0gMTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZUtleVVwKGUpe1xuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IDA7XG4gICAgfVxuXG4gICAgZ2V0UG9zaXRpb24oKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuYW5nbGU7XG4gICAgfVxufVxuXG4iLCJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNvdW5kIHtcbiAgICBjb25zdHJ1Y3RvcihzcmMpe1xuICAgICAgICB0aGlzLnNvdW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImF1ZGlvXCIpO1xuICAgICAgICB0aGlzLnNvdW5kLnNyYyA9IHNyYztcbiAgICAgICAgdGhpcy5zb3VuZC5zZXRBdHRyaWJ1dGUoXCJwcmVsb2FkXCIsIFwiYXV0b1wiKTtcbiAgICAgICAgdGhpcy5zb3VuZC5zZXRBdHRyaWJ1dGUoXCJjb250cm9sc1wiLCBcIm5vbmVcIik7XG4gICAgICAgIHRoaXMuc291bmQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuc291bmQpO1xuICAgIH1cblxuICAgIHBsYXkoKXtcbiAgICAgICAgdGhpcy5zb3VuZC5wbGF5KCk7XG4gICAgfVxuXG4gICAgc3RvcCgpe1xuICAgICAgICB0aGlzLnNvdW5kLnBhdXNlKCk7XG4gICAgICAgIHRoaXMuc291bmQuY3VycmVudFRpbWUgPSAwO1xuICAgIH1cbn1cbiIsImltcG9ydCBHYXAgZnJvbSBcIi4vZ2FwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdhbGwge1xuICAgIGNvbnN0cnVjdG9yKGN0eCwgeCwgeSwgcmFkaXVzLCBjb2xvciwgcm90YXRpb24pIHtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMucmFkaXVzID0gcmFkaXVzO1xuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgICAgIHRoaXMudGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICB0aGlzLmFuZ2xlID0gTWF0aC5yYW5kb20oKSAqICgyICogTWF0aC5QSSk7XG4gICAgICAgIHRoaXMucm90YXRpb24gPSByb3RhdGlvbjtcbiAgICAgICAgdGhpcy5lbmRBbmdsZSA9IDIgKiBNYXRoLlBJIC0gMS4yO1xuICAgICAgICB0aGlzLmdhcCA9IG5ldyBHYXAodGhpcy5jdHgsIHRoaXMueCwgdGhpcy55LCB0aGlzLnJhZGl1cywgdGhpcy5hbmdsZSwgdGhpcy5yb3RhdGlvbiwgdGhpcy50aW1lKTtcbiAgICB9XG5cbiAgICBkcmF3KCl7XG4gICAgICAgIGNvbnN0IG5ld1RpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgbGV0IGRpZmYgPSBuZXdUaW1lIC0gdGhpcy50aW1lO1xuICAgICAgIFxuICAgICAgICB0aGlzLnRpbWUgPSBuZXdUaW1lO1xuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSAxMjtcbiAgICAgICAgdGhpcy5jdHguYXJjKHRoaXMueCwgdGhpcy55LCB0aGlzLnJhZGl1cywgdGhpcy5hbmdsZSwgdGhpcy5lbmRBbmdsZSArIHRoaXMuYW5nbGUsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgIHRoaXMuYW5nbGUgKz0gZGlmZiAqIHRoaXMucm90YXRpb247XG4gICAgICAgIHRoaXMuYW5nbGUgJT0gMiAqIE1hdGguUEk7XG5cbiAgICAgICAgdGhpcy5nYXAuYW5nbGUgKz0gZGlmZiAqIHRoaXMucm90YXRpb247XG4gICAgICAgIHRoaXMuZ2FwLmFuZ2xlICU9IDIgKiBNYXRoLlBJO1xuXG4gICAgICAgIGlmICh0aGlzLmFuZ2xlIDwgMCkge1xuICAgICAgICAgICAgdGhpcy5hbmdsZSA9IDIgKiBNYXRoLlBJO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuYW5nbGUgPiAyICogTWF0aC5QSSkge1xuICAgICAgICAgICAgdGhpcy5hbmdsZSAlPSAyICogTWF0aC5QSTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmdhcC5hbmdsZSA8IDApIHtcbiAgICAgICAgICAgIHRoaXMuZ2FwLmFuZ2xlID0gMiAqIE1hdGguUEk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5nYXAuYW5nbGUgPiAyICogTWF0aC5QSSkge1xuICAgICAgICAgICAgdGhpcy5nYXAuYW5nbGUgJT0gMiAqIE1hdGguUEk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGUoKXtcbiAgICAgICAgaWYodGhpcy5yYWRpdXMgPiAzMCkge1xuICAgICAgICAgICAgdGhpcy5yYWRpdXMgLT0gMztcbiAgICAgICAgICAgIHRoaXMuZ2FwLnJhZGl1cyAtPSAzO1xuICAgICAgICB9IFxuICAgICAgICBpZih0aGlzLnJhZGl1cyA9PT0gMjkwKXtcbiAgICAgICAgICAgIHRoaXMucmV2ZXJzZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZ2FwLmRyYXcoKTtcbiAgICAgICAgdGhpcy5kcmF3KCk7XG4gICAgfVxuXG4gICAgcmV2ZXJzZSgpe1xuICAgICAgICBcbiAgICAgICAgdGhpcy5yb3RhdGlvbiAqPSAtMztcbiAgICAgICAgXG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=