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
        this.speed = [-.001, .001];
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
            var medRotations = [-.002, .002];
            var fastRotations = [-.003, .003];
            //    if (this.score < 10){
            var wall = new _wall2.default(this.ctx, this.canvas.width / 2, this.canvas.height / 2, this.canvas.width / 2, "#388697", this.speed[Math.floor(Math.random() * this.speed.length)]);
            this.walls.push(wall);
            this.timer = null;
            //    } else if (this.score < 20){
            //         const wall = new Wall(this.ctx, this.canvas.width / 2, this.canvas.height / 2, this.canvas.width / 2, "#388697", medRotations[Math.floor(Math.random() * medRotations.length)])
            //         this.walls.push(wall);
            //         this.timer = null;
            //    } else {
            //         const wall = new Wall(this.ctx, this.canvas.width / 2, this.canvas.height / 2, this.canvas.width / 2, "#388697", fastRotations[Math.floor(Math.random() * fastRotations.length)])
            //         this.walls.push(wall);
            //         this.timer = null;
            //    }
        }
    }, {
        key: "increaseDifficulty",
        value: function increaseDifficulty() {
            if (this.score === 10 && this.walls[0].radius === 47) {
                this.increaseSpeed(this.walls);
            } else if (this.score > 30) {
                // this.increaseSpeed(this.walls);
                this.walls.forEach(function (wall) {
                    wall.reverse();
                });
            } else if (this.score > 40) {}
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
                var isWallOnPlayer = this.walls[0].radius <= this.player.radius + this.player.size && this.walls[0].radius >= this.player.radius + this.player.size - 1;
                if (isWallOnPlayer) {
                    if (!this.checkCollision(this.player, this.walls[0].gap)) {
                        this.dead = true;
                    };
                    // console.log(this.walls[0].angle);
                }
            }
            this.increaseDifficulty();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qYXZhc2NyaXB0L2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2phdmFzY3JpcHQvZ2FtZV92aWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9qYXZhc2NyaXB0L2dhcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvamF2YXNjcmlwdC9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2phdmFzY3JpcHQvc291bmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2phdmFzY3JpcHQvd2FsbC5qcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXMiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsIndpZHRoIiwiaGVpZ2h0IiwiY3R4IiwiZ2V0Q29udGV4dCIsImdhbWVWaWV3IiwiR2FtZVZpZXciLCJnYW1lIiwicGxheWVyIiwiaGFuZGxlUHJlc3MiLCJlIiwiZ2FtZVN0YXJ0IiwiaGFuZGxlS2V5VXAiLCJhbmltYXRlIiwiRElNX1giLCJESU1fWSIsIkNPTE9SX1NDSEVNRSIsIkdhbWUiLCJQbGF5ZXIiLCJ3YWxscyIsInRpbWVyIiwic2NvcmUiLCJpbkdhbWUiLCJkZWFkIiwiYmciLCJoaWdoU2NvcmUiLCJzcGVlZCIsInRoZW1lU29uZyIsIlNvdW5kIiwicmFuZG9tQ29sb3IiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ0b1N0cmluZyIsImdldEVsZW1lbnRCeUlkIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJzdGFydFNjcmVlbiIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJydW4iLCJnYW1lT3ZlciIsIm1lZFJvdGF0aW9ucyIsImZhc3RSb3RhdGlvbnMiLCJ3YWxsIiwiV2FsbCIsImxlbmd0aCIsInB1c2giLCJyYWRpdXMiLCJpbmNyZWFzZVNwZWVkIiwiZm9yRWFjaCIsInJldmVyc2UiLCJtYXAiLCJiZWdpblBhdGgiLCJmb250IiwiZmlsbFRleHQiLCJjbG9zZVBhdGgiLCJ0ZXh0IiwieSIsIm1lYXN1cmVtZW50IiwibWVhc3VyZVRleHQiLCJ4IiwiY2xlYXJSZWN0IiwiY2VudGVyWCIsImNlbnRlclkiLCJsaW5lV2lkdGgiLCJzdHJva2VTdHlsZSIsImFyYyIsIlBJIiwic3Ryb2tlIiwidXBkYXRlIiwiZHJhdyIsImRvV2FsbHNFeGlzdCIsImlzV2FsbE9uUGxheWVyIiwic2l6ZSIsImNoZWNrQ29sbGlzaW9uIiwiZ2FwIiwiaW5jcmVhc2VEaWZmaWN1bHR5Iiwic2hvd1Njb3JlIiwiY29uc29sZSIsImxvZyIsIndhbGxTcGFjZSIsInNldFRpbWVvdXQiLCJhZGRXYWxsIiwic2hpZnQiLCJzdG9wIiwiY29sb3IiLCJ0aXRsZSIsImVudGVyIiwiZmlsbFN0eWxlIiwiY2VudGVyVGV4dCIsImNvbGxpc2lvbiIsImdhcFBvcyIsImdldFBvc2l0aW9uIiwicGxheWVyQW5nbGUiLCJlbmRBbmdsZSIsImFuZ2xlIiwicGFydGlhbENpcmNsZUFuZ2xlIiwidXBkYXRlU2NvcmUiLCJjaGFuZ2VCRyIsInByZXZlbnREZWZhdWx0Iiwid2hpY2giLCJrZXlDb2RlIiwicGxheSIsImluaXQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJiaW5kIiwiR2FwIiwicm90YXRpb24iLCJ0aW1lIiwiZ2xvYmFsQWxwaGEiLCJwb3NpdGlvbiIsInN0YXJ0IiwiZW5kIiwiYzEiLCJjMiIsImNvcyIsInNpbiIsImRpcmVjdGlvbiIsInBsYXllclBvcyIsImR4IiwiZHkiLCJ0cmFuc2xhdGUiLCJyb3RhdGUiLCJtb3ZlVG8iLCJsaW5lVG8iLCJmaWxsIiwia2V5Iiwic3JjIiwic291bmQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiZGlzcGxheSIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInBhdXNlIiwiY3VycmVudFRpbWUiLCJEYXRlIiwiZ2V0VGltZSIsIm5ld1RpbWUiLCJkaWZmIl0sIm1hcHBp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QkFBSSxLQUFLUSxHQUFMLENBQVNvQixLQUFULEdBQWlCLENBQXJCLEVBQXdCO0FBQ3BCLHFCQUFLcEIsR0FBTCxDQUFTb0IsS0FBVCxHQUFpQixJQUFJakUsS0FBS3FDLEVBQTFCO0FBQ0g7O0FBRUQsZ0JBQUksS0FBS1EsR0FBTCxDQUFTb0IsS0FBVCxHQUFpQixJQUFJakUsS0FBS3FDLEVBQTlCLEVBQWtDO0FBQzlCLHFCQUFLUSxHQUFMLENBQVNvQixLQUFULElBQWtCLElBQUlqRSxLQUFLcUMsRUFBM0I7QUFDSDtBQUNKOzs7aUNBRU87QUFDSixnQkFBRyxLQUFLcEIsTUFBTCxHQUFjLEVBQWpCLEVBQXFCO0FBQ2pCLHFCQUFLQSxNQUFMLElBQWUsQ0FBZjtBQUNBLHFCQUFLNEIsR0FBTCxDQUFTNUIsTUFBVCxJQUFtQixDQUFuQjtBQUNIO0FBQ0QsaUJBQUs0QixHQUFMLENBQVNMLElBQVQ7QUFDQSxpQkFBS0EsSUFBTDtBQUNIOzs7a0NBRVE7QUFDTCxnQkFBRyxLQUFLdkIsTUFBTCxLQUFnQixHQUFuQixFQUF1QjtBQUNuQixxQkFBSzRELFFBQUwsSUFBaUIsQ0FBQyxHQUFsQjtBQUNIO0FBQ0o7Ozs7OztrQkE5RGdCL0QsSSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBQbGF5ZXIgZnJvbSAnLi9qYXZhc2NyaXB0L3BsYXllcic7XG5pbXBvcnQgR2FtZSBmcm9tICcuL2phdmFzY3JpcHQvZ2FtZSc7XG5pbXBvcnQgR2FtZVZpZXcgZnJvbSAnLi9qYXZhc2NyaXB0L2dhbWVfdmlldyc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImNhbnZhc1wiKVswXTtcbiAgICBjYW52YXMud2lkdGggPSAxMDAwO1xuICAgIGNhbnZhcy5oZWlnaHQgPSA2MDA7XG5cbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG5cbiAgICBjb25zdCBnYW1lVmlldyA9IG5ldyBHYW1lVmlldyhjYW52YXMsIGN0eCk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGUgPT4gZ2FtZVZpZXcuZ2FtZS5wbGF5ZXIuaGFuZGxlUHJlc3MoZSkpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBlID0+IGdhbWVWaWV3LmdhbWUuZ2FtZVN0YXJ0KGUpKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGUgPT4gZ2FtZVZpZXcuZ2FtZS5wbGF5ZXIuaGFuZGxlS2V5VXAoZSkpO1xuICAgIGdhbWVWaWV3LmFuaW1hdGUoKTtcbn0pO1xuXG5cblxuIiwiaW1wb3J0IFBsYXllciBmcm9tIFwiLi9wbGF5ZXJcIjtcbmltcG9ydCBXYWxsIGZyb20gXCIuL3dhbGxcIjtcbmltcG9ydCBTb3VuZCBmcm9tICcuL3NvdW5kJztcbmNvbnN0IERJTV9YID0gMTAwMDtcbmNvbnN0IERJTV9ZID0gNjAwO1xuY29uc3QgQ09MT1JfU0NIRU1FID0gW1wiI0NDMjkzMzZcIiwgXCJFQkJBQjlcIiwgXCIjMzg4Njk3XCIsIFwiI0JGRkZFMVwiXVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBjdHgpIHtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIodGhpcy5jYW52YXMsIHRoaXMuY3R4KVxuICAgICAgICB0aGlzLndhbGxzID0gW107XG4gICAgICAgIHRoaXMudGltZXIgPSBudWxsO1xuICAgICAgICB0aGlzLnNjb3JlID0gMDtcbiAgICAgICAgdGhpcy5pbkdhbWUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kZWFkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYmcgPSBcIiM0ODYzOWNcIjtcbiAgICAgICAgdGhpcy5oaWdoU2NvcmUgPSAwO1xuICAgICAgICB0aGlzLnNwZWVkID0gWy0uMDAxLCAuMDAxXTtcbiAgICAgICAgdGhpcy50aGVtZVNvbmcgPSBuZXcgU291bmQoXCJnYW1ldGhlbWUubXAzXCIpO1xuICAgIH1cblxuICAgIGNoYW5nZUJHKCkge1xuICAgICAgICBjb25zdCByYW5kb21Db2xvciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDE2Nzc3MjE1KS50b1N0cmluZygxNik7XG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlDYW52YXNcIik7XG4gICAgICAgIHRoaXMuYmcgPSBjYW52YXMuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjXCIgKyByYW5kb21Db2xvcjtcbiAgICB9XG5cbiAgICBpbml0KCl7XG4gICAgICAgIGlmKCF0aGlzLmluR2FtZSl7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0U2NyZWVuKCk7XG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmluR2FtZSAmJiAhdGhpcy5kZWFkKXtcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBlID0+IHRoaXMuZ2FtZVN0YXJ0KGUpKTtcbiAgICAgICAgICAgIHRoaXMucnVuKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmdhbWVPdmVyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGFkZFdhbGwoKXtcbiAgICAgICBjb25zdCBtZWRSb3RhdGlvbnMgPSBbLS4wMDIsIC4wMDJdO1xuICAgICAgIGNvbnN0IGZhc3RSb3RhdGlvbnMgPSBbLS4wMDMsIC4wMDNdO1xuICAgIC8vICAgIGlmICh0aGlzLnNjb3JlIDwgMTApe1xuICAgICAgICBjb25zdCB3YWxsID0gbmV3IFdhbGwodGhpcy5jdHgsIHRoaXMuY2FudmFzLndpZHRoIC8gMiwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMiwgdGhpcy5jYW52YXMud2lkdGggLyAyLCBcIiMzODg2OTdcIiwgdGhpcy5zcGVlZFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLnNwZWVkLmxlbmd0aCldKVxuICAgICAgICB0aGlzLndhbGxzLnB1c2god2FsbCk7XG4gICAgICAgIHRoaXMudGltZXIgPSBudWxsO1xuICAgIC8vICAgIH0gZWxzZSBpZiAodGhpcy5zY29yZSA8IDIwKXtcbiAgICAvLyAgICAgICAgIGNvbnN0IHdhbGwgPSBuZXcgV2FsbCh0aGlzLmN0eCwgdGhpcy5jYW52YXMud2lkdGggLyAyLCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyLCB0aGlzLmNhbnZhcy53aWR0aCAvIDIsIFwiIzM4ODY5N1wiLCBtZWRSb3RhdGlvbnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbWVkUm90YXRpb25zLmxlbmd0aCldKVxuICAgIC8vICAgICAgICAgdGhpcy53YWxscy5wdXNoKHdhbGwpO1xuICAgIC8vICAgICAgICAgdGhpcy50aW1lciA9IG51bGw7XG4gICAgLy8gICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAgIGNvbnN0IHdhbGwgPSBuZXcgV2FsbCh0aGlzLmN0eCwgdGhpcy5jYW52YXMud2lkdGggLyAyLCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyLCB0aGlzLmNhbnZhcy53aWR0aCAvIDIsIFwiIzM4ODY5N1wiLCBmYXN0Um90YXRpb25zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGZhc3RSb3RhdGlvbnMubGVuZ3RoKV0pXG4gICAgLy8gICAgICAgICB0aGlzLndhbGxzLnB1c2god2FsbCk7XG4gICAgLy8gICAgICAgICB0aGlzLnRpbWVyID0gbnVsbDtcbiAgICAvLyAgICB9XG4gICAgfVxuXG4gICAgaW5jcmVhc2VEaWZmaWN1bHR5KCl7XG4gICAgICAgIGlmKHRoaXMuc2NvcmUgPT09IDEwICYmIHRoaXMud2FsbHNbMF0ucmFkaXVzID09PSA0Nyl7XG4gICAgICAgICAgICB0aGlzLmluY3JlYXNlU3BlZWQodGhpcy53YWxscyk7XG4gICAgICAgICAgICBcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuc2NvcmUgPiAzMCl7XG4gICAgICAgICAgICAvLyB0aGlzLmluY3JlYXNlU3BlZWQodGhpcy53YWxscyk7XG4gICAgICAgICAgICB0aGlzLndhbGxzLmZvckVhY2god2FsbCA9PiB7XG4gICAgICAgICAgICAgICAgd2FsbC5yZXZlcnNlKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgXG4gICAgICAgIH0gXG4gICAgICAgICAgICBlbHNlIGlmKHRoaXMuc2NvcmUgPiA0MCl7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBcblxuICAgIGluY3JlYXNlU3BlZWQod2FsbHMpe1xuICAgICAgICB0aGlzLnNwZWVkID0gdGhpcy5zcGVlZC5tYXAoc3BlZWQgPT4gc3BlZWQgKiAxLjIpO1xuICAgIH1cblxuICAgIGFsbFdhbGxzKCl7XG4gICAgICAgIHJldHVybiB0aGlzLndhbGxzO1xuICAgIH1cblxuICAgIHNob3dTY29yZSgpe1xuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiMjBweCBHZW9yZ2lhXCI7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiU2NvcmU6IFwiICsgdGhpcy5zY29yZSwgdGhpcy5jYW52YXMud2lkdGggLSAxMDAsIDMwKTtcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG4gICAgfVxuXG4gICAgY2VudGVyVGV4dCh0ZXh0LCB5KXtcbiAgICAgICAgY29uc3QgbWVhc3VyZW1lbnQgPSB0aGlzLmN0eC5tZWFzdXJlVGV4dCh0ZXh0KTtcbiAgICAgICAgY29uc3QgeCA9ICh0aGlzLmNhbnZhcy53aWR0aCAtIG1lYXN1cmVtZW50LndpZHRoKSAvIDI7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KHRleHQsIHgsIHkpO1xuICAgIH1cbiAgICBcbiAgICBkcmF3KCkge1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgRElNX1gsIERJTV9ZKTtcbiAgICAgICAgY29uc3QgY2VudGVyWCA9IERJTV9YIC8gMjtcbiAgICAgICAgY29uc3QgY2VudGVyWSA9IERJTV9ZIC8gMjtcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDE7XG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICB0aGlzLmN0eC5hcmMoY2VudGVyWCwgY2VudGVyWSwgMzAsIDAsIDIgKiBNYXRoLlBJLCBmYWxzZSk7XG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgdGhpcy53YWxscy5mb3JFYWNoKHdhbGwgPT4ge1xuICAgICAgICAgICAgd2FsbC51cGRhdGUoKTtcbiAgICAgICAgICAgIC8vIHdhbGwuZ2FwLnVwZGF0ZSgpO1xuICAgICAgICB9KVxuICAgICAgICB0aGlzLnBsYXllci5kcmF3KDUpO1xuXG4gICAgICAgIGNvbnN0IGRvV2FsbHNFeGlzdCA9IHRoaXMud2FsbHMubGVuZ3RoID4gMDtcbiAgICAgICAgaWYoZG9XYWxsc0V4aXN0KXtcblxuICAgICAgICAgICAgLy9UT0RPOiB3ZSBjaGVjayBmb3IgY29sbGlzaW9uIHdoZW4gdGhlIHdhbGwgaXMgbGl0ZXJhbGx5IG9udG9wIG9mIHRoZSBwbGF5ZXJcbiAgICAgICAgICAgIC8vIG1heWJlIGZpbmQgYSBzd2VldCBzcG90IHdpdGggdGhpcy5wbGF5ZXIucmFkaXVzICsgMSBvciBzb21ldGhpbmcgY2F1c2UgdGhlIHRyaWFuZ2xlIGhhc1xuICAgICAgICAgICAgLy8gYSBzaXplIHRvIGl0LlxuICAgICAgICAgICAgY29uc3QgaXNXYWxsT25QbGF5ZXIgPSB0aGlzLndhbGxzWzBdLnJhZGl1cyA8PSB0aGlzLnBsYXllci5yYWRpdXMgKyB0aGlzLnBsYXllci5zaXplICYmIHRoaXMud2FsbHNbMF0ucmFkaXVzID49IHRoaXMucGxheWVyLnJhZGl1cyArIHRoaXMucGxheWVyLnNpemUgLSAxO1xuICAgICAgICAgICAgaWYgKGlzV2FsbE9uUGxheWVyKXtcbiAgICAgICAgICAgICAgICBpZighdGhpcy5jaGVja0NvbGxpc2lvbih0aGlzLnBsYXllciwgdGhpcy53YWxsc1swXS5nYXApKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWFkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMud2FsbHNbMF0uYW5nbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW5jcmVhc2VEaWZmaWN1bHR5KCk7XG4gICAgICAgIHRoaXMuc2hvd1Njb3JlKCk7XG4gICAgICAgIGlmKHRoaXMud2FsbHMubGVuZ3RoKSB7Y29uc29sZS5sb2codGhpcy53YWxsc1swXS5yYWRpdXMpIH07XG4gICAgICAgIC8vIHRoaXMuY3R4LnN0cm9rZSgpO1xuICAgICAgICAvLyB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcbiAgICB9XG5cbiAgICBydW4oKXtcbiAgICAgICAgY29uc3Qgd2FsbFNwYWNlID0gMTAwMDtcbiAgICAgICAgaWYodGhpcy53YWxscy5sZW5ndGggPCA4ICYmIHRoaXMudGltZXIgPT09IG51bGwpe1xuICAgICAgICAgICAgdGhpcy50aW1lciA9IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5hZGRXYWxsKCksIHdhbGxTcGFjZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMud2FsbHMubGVuZ3RoID4gMCAmJiB0aGlzLndhbGxzWzBdLnJhZGl1cyA8IDMwKSB7IHRoaXMud2FsbHMuc2hpZnQoKX1cbiAgICAgICAgdGhpcy5kcmF3KCk7XG4gICAgICAgIH1cblxuICAgIHVwZGF0ZVNjb3JlKCl7XG4gICAgICAgIHRoaXMuc2NvcmUgKz0gMTtcbiAgICB9XG5cbiAgICBnYW1lT3Zlcigpe1xuICAgICAgICBpZih0aGlzLnNjb3JlID4gdGhpcy5oaWdoU2NvcmUpIHtcbiAgICAgICAgICAgIHRoaXMuaGlnaFNjb3JlID0gdGhpcy5zY29yZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRoZW1lU29uZy5zdG9wKCk7XG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlDYW52YXNcIik7XG4gICAgICAgIGNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAoXCIjNDg2MzljXCIpO1xuICAgICAgICB0aGlzLndhbGxzID0gW107XG4gICAgICAgIGxldCB5ID0gdGhpcy5jYW52YXMuaGVpZ2h0IC8gMjtcbiAgICAgICAgbGV0IGNvbG9yID0gXCIjRkYwMDAwXCI7XG4gICAgICAgIGxldCB0aXRsZSA9IFwiR2FtZSBPdmVyXCI7XG4gICAgICAgIGxldCBlbnRlciA9IFwiVHJ5IGFnYWluXCI7XG4gICAgICAgIGxldCBzY29yZSA9IGBTY29yZTogJHt0aGlzLnNjb3JlfWA7XG4gICAgICAgIGxldCBoaWdoU2NvcmUgPSBgSGlnaCBTY29yZTogJHt0aGlzLmhpZ2hTY29yZX1gO1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgRElNX1gsIERJTV9ZKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gY29sb3I7XG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcIjQ4cHggbW9ub3NwYWNlXCI7XG4gICAgICAgIHRoaXMuY2VudGVyVGV4dCh0aXRsZSwgeSArIDYwKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcIjI0cHggbW9ub3NwYWNlXCI7XG4gICAgICAgIHRoaXMuY2VudGVyVGV4dChoaWdoU2NvcmUsIHkgKyAyMCk7XG4gICAgICAgIHRoaXMuY2VudGVyVGV4dChzY29yZSwgeSk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgICAgICB0aGlzLmN0eC5mb250ID0gXCIyNHB4IG1vbm9zcGFjZVwiO1xuICAgICAgICB0aGlzLmNlbnRlclRleHQoZW50ZXIsIHkgKyAxMDApO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZSA9PiB0aGlzLmdhbWVTdGFydChlKSk7XG4gICAgfVxuXG4gICAgY2hlY2tDb2xsaXNpb24ocGxheWVyLCBnYXApe1xuICAgICAgICBsZXQgY29sbGlzaW9uID0gZmFsc2U7XG4gICAgICAgIGxldCBnYXBQb3MgPSBnYXAuZ2V0UG9zaXRpb24oKTtcbiAgICAgICAgbGV0IHBsYXllckFuZ2xlID0gcGxheWVyLmdldFBvc2l0aW9uKCkgKiBNYXRoLlBJIC8gMTgwO1xuICAgICAgICBsZXQgZW5kQW5nbGUgPSBnYXAuYW5nbGUgLSAoMiAqIE1hdGguUEkgLSBnYXAucGFydGlhbENpcmNsZUFuZ2xlKTtcbiAgICAgICAgaWYgKGVuZEFuZ2xlIDwgMCkge1xuICAgICAgICAgICAgZW5kQW5nbGUgKz0gMipNYXRoLlBJO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYocGxheWVyUG9zID4gZ2FwUG9zW3N0YXJ0XSAmJiBwbGF5ZXJQb3MgPCBnYXBQb3NbZW5kXSkgY29sbGlzaW9uID0gdHJ1ZTtcblxuICAgICAgICAvLyB0aGUgY2FzZSB3aGVuIHRoZSBnYXAgc3RyYWRkbGVzIHRoZSBob3Jpem9udGFsXG5cbiAgICAgICAgaWYgKGdhcC5hbmdsZSA8IGVuZEFuZ2xlKXtcbiAgICAgICAgICAgIGlmICgocGxheWVyQW5nbGUgID4gZW5kQW5nbGUgXG4gICAgICAgICAgICAgICAgJiYgcGxheWVyQW5nbGUgPCAyICogTWF0aC5QSSkgXG4gICAgICAgICAgICAgICAgfHwgcGxheWVyQW5nbGUgPCBnYXAuYW5nbGUgJiYgcGxheWVyQW5nbGUgPiAwKXtcbiAgICAgICAgICAgICAgICBjb2xsaXNpb24gPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBsYXllckFuZ2xlIDwgZ2FwLmFuZ2xlICYmXG4gICAgICAgICAgICBwbGF5ZXJBbmdsZSA+IGVuZEFuZ2xlKSB7XG4gICAgICAgICAgICAgICAgY29sbGlzaW9uID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICBpZihjb2xsaXNpb24gPT09IHRydWUpe1xuICAgICAgICAgICAgLy8gdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAnYmx1ZSdcbiAgICAgICAgICAgIC8vIHRoaXMuY3R4LnN0cm9rZVJlY3QoRElNX1ggLyAyIC0gMjUsIERJTV9ZIC8gMiAtIDI1LCA1MCwgNTApXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNjb3JlKCk7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZUJHKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbGxpc2lvbjtcbiAgICB9XG5cbiAgICBzdGFydFNjcmVlbigpe1xuICAgICAgICBsZXQgeSA9IHRoaXMuY2FudmFzLmhlaWdodCAvIDI7XG4gICAgICAgIGxldCBjb2xvciA9IFwiI0NDMjkzMzZcIjtcbiAgICAgICAgbGV0IHRpdGxlID0gXCJFc2NhcGUgdGhlIFNoYXBlXCI7XG4gICAgICAgIGxldCBlbnRlciA9IFwiUHJlc3MgRW50ZXJcIjtcbiAgICAgICAgLy8gbGV0IGVudGVyTGVuZ3RoID0gdGhpcy5jdHgubWVhc3VyZVRleHQoZW50ZXIpO1xuICAgICAgICAvLyBsZXQgdGl0bGVMZW5ndGggPSB0aGlzLmN0eC5tZWFzdXJlVGV4dCh0aXRsZSk7XG4gICAgICAgIC8vIGxldCBlbnRlclggPSAodGhpcy5jYW52YXMud2lkdGggLSBlbnRlckxlbmd0aC53aWR0aCkgLyAyO1xuICAgICAgICAvLyBsZXQgeCA9ICh0aGlzLmNhbnZhcy53aWR0aCAtIHRpdGxlTGVuZ3RoLndpZHRoKSAvIDI7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCBESU1fWCwgRElNX1kpO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcIjQ4cHggbW9ub3NwYWNlXCI7XG4gICAgICAgIHRoaXMuY2VudGVyVGV4dCh0aXRsZSwgeSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiMjRweCBtb25vc3BhY2VcIjtcbiAgICAgICAgdGhpcy5jZW50ZXJUZXh0KGVudGVyLCB5ICsgMzApO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZSA9PiB0aGlzLmdhbWVTdGFydChlKSk7XG4gICAgfVxuXG4gICAgZ2FtZVN0YXJ0KGUpe1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmKGUud2hpY2ggPT09IDEzIHx8IGUua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgICAgIHRoaXMudGhlbWVTb25nLnBsYXkoKTtcbiAgICAgICAgICAgIHRoaXMuaW5HYW1lID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuYmcgPSBcIiM0ODYzOWNcIlxuICAgICAgICAgICAgdGhpcy5kZWFkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnNjb3JlID0gMDtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgR2FtZSBmcm9tICcuL2dhbWUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lVmlldyB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBjdHgpIHtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmdhbWUgPSBuZXcgR2FtZSh0aGlzLmNhbnZhcywgdGhpcy5jdHgpO1xuICAgIH1cblxuICAgIFxuXG5cbiAgICBhbmltYXRlKCkge1xuICAgICAgICB0aGlzLmdhbWUuaW5pdCgpO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlLmJpbmQodGhpcykpO1xuICAgIH1cbn0iLCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FwIHtcbiAgICBjb25zdHJ1Y3RvcihjdHgsIHggLCB5LCByYWRpdXMsIGFuZ2xlLCByb3RhdGlvbiwgdGltZSl7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLnJhZGl1cyA9IHJhZGl1czsgXG4gICAgICAgIHRoaXMucm90YXRpb24gPSByb3RhdGlvbjtcbiAgICAgICAgdGhpcy5hbmdsZSA9IGFuZ2xlO1xuICAgICAgICB0aGlzLnBhcnRpYWxDaXJjbGVBbmdsZSA9IDIgKiBNYXRoLlBJIC0gMS4yO1xuICAgIH1cblxuICAgIGRyYXcoKXtcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4Lmdsb2JhbEFscGhhID0gMC4wO1xuICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSA4O1xuICAgICAgICB0aGlzLmN0eC5hcmModGhpcy54LCB0aGlzLnksIHRoaXMucmFkaXVzLCB0aGlzLmFuZ2xlLCB0aGlzLnBhcnRpYWxDaXJjbGVBbmdsZSArIHRoaXMuYW5nbGUsIHRydWUpO1xuICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4Lmdsb2JhbEFscGhhID0gMS4wO1xuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMucmFkaXVzID4gMzApIHtcbiAgICAgICAgICAgIHRoaXMucmFkaXVzIC09IDM7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kcmF3KCk7XG4gICAgfVxuXG4gICAgZ2V0UG9zaXRpb24oKXtcbiAgICAgICBjb25zdCBwb3NpdGlvbiA9IHtcbiAgICAgICAgICAgc3RhcnQ6IHRoaXMuYW5nbGUsXG4gICAgICAgICAgIGVuZDogdGhpcy5wYXJ0aWFsQ2lyY2xlQW5nbGUgKyB0aGlzLmFuZ2xlLFxuICAgICAgIH1cbiAgICAgICByZXR1cm4gcG9zaXRpb247XG4gICAgfVxuXG4gICAgZ2V0UG9pbnQoYzEsIGMyLCByYWRpdXMsIGFuZ2xlKSB7XG4gICAgICAgIHJldHVybiBbYzEgKyBNYXRoLmNvcyhhbmdsZSkgKiByYWRpdXMsIGMyICsgTWF0aC5zaW4oYW5nbGUpICogcmFkaXVzXTtcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGN0eCkge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuc2l6ZSA9IDU7XG4gICAgICAgIHRoaXMucmFkaXVzID0gNTU7XG4gICAgICAgIHRoaXMuc3BlZWQgPSA3O1xuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IDA7XG4gICAgICAgIHRoaXMuYW5nbGUgPSAzMDtcbiAgICAgICAgdGhpcy5wbGF5ZXJQb3MgPSBcImxlZnRcIjtcbiAgICAgICAgdGhpcy5kcmF3ID0gdGhpcy5kcmF3LmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgZHJhdygpIHtcbiAgICAgICAgLy8gc3dpdGNoICh0aGlzLnBsYXllclBvcykge1xuICAgICAgICAvLyAgICAgY2FzZSBcImxlZnRcIjpcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmN0eC5tb3ZlVG8odGhpcy5jYW52YXMud2lkdGggLyAyIC0gMzAsIHRoaXMuY2FudmFzLmhlaWdodCAvIDIgKyA1KTtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmN0eC5saW5lVG8odGhpcy5jYW52YXMud2lkdGggLyAyIC0gNDAsIHRoaXMuY2FudmFzLmhlaWdodCAvIDIpO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyh0aGlzLmNhbnZhcy53aWR0aCAvIDIgLSAzMCwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMiAtIDUpO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgLy8gICAgICAgICBicmVhaztcbiAgICAgICAgLy8gICAgIGNhc2UgXCJ1cFwiOlxuICAgICAgICAvLyAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuY3R4Lm1vdmVUbyh0aGlzLmNhbnZhcy53aWR0aCAvIDIgLSA1LCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyIC0gMzApO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyh0aGlzLmNhbnZhcy53aWR0aCAvIDIsIHRoaXMuY2FudmFzLmhlaWdodCAvIDIgLSA0MCk7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5jdHgubGluZVRvKHRoaXMuY2FudmFzLndpZHRoIC8gMiArIDUsIHRoaXMuY2FudmFzLmhlaWdodCAvIDIgLSAzMCk7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICAvLyAgICAgICAgIGJyZWFrO1xuICAgICAgICAvLyAgICAgY2FzZSBcInJpZ2h0XCI6XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5jdHgubW92ZVRvKHRoaXMuY2FudmFzLndpZHRoIC8gMiArIDMwLCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyICsgNSk7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5jdHgubGluZVRvKHRoaXMuY2FudmFzLndpZHRoIC8gMiArIDQwLCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyKTtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmN0eC5saW5lVG8odGhpcy5jYW52YXMud2lkdGggLyAyICsgMzAsIHRoaXMuY2FudmFzLmhlaWdodCAvIDIgLSA1KTtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgIC8vICAgICAgICAgYnJlYWs7XG4gICAgICAgIC8vICAgICBjYXNlIFwiZG93blwiOlxuICAgICAgICAvLyAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuY3R4Lm1vdmVUbyh0aGlzLmNhbnZhcy53aWR0aCAvIDIgLSA1LCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyICsgMzApO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyh0aGlzLmNhbnZhcy53aWR0aCAvIDIsIHRoaXMuY2FudmFzLmhlaWdodCAvIDIgKyA0MCk7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5jdHgubGluZVRvKHRoaXMuY2FudmFzLndpZHRoIC8gMiArIDUsIHRoaXMuY2FudmFzLmhlaWdodCAvIDIgKyAzMCk7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICAvLyAgICAgICAgIGJyZWFrO1xuICAgICAgICAvLyAgICAgZGVmYXVsdDpcbiAgICAgICAgLy8gICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgY29uc3QgZHggPSAodGhpcy5jYW52YXMud2lkdGggLyAyKSArICgodGhpcy5yYWRpdXMpICogTWF0aC5jb3ModGhpcy5hbmdsZSAqIE1hdGguUEkgLyAxODApKTtcbiAgICAgICAgY29uc3QgZHkgPSAodGhpcy5jYW52YXMuaGVpZ2h0IC8gMikgKyAoKHRoaXMucmFkaXVzKSAqIE1hdGguc2luKHRoaXMuYW5nbGUgKiBNYXRoLlBJIC8gMTgwKSk7XG4gICAgICAgIHRoaXMuYW5nbGUgPSB0aGlzLmFuZ2xlICsgKHRoaXMuZGlyZWN0aW9uICogdGhpcy5zcGVlZCk7XG5cbiAgICAgICAgaWYodGhpcy5hbmdsZSA8IDApIHtcbiAgICAgICAgICAgIHRoaXMuYW5nbGUgPSAzNjAgLSB0aGlzLmFuZ2xlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYodGhpcy5hbmdsZSA+IDM2MCl7XG4gICAgICAgICAgICB0aGlzLmFuZ2xlICU9IDM2MDtcbiAgICAgICAgfVxuICAgICAgICAvLyB0aGlzLmN0eC5zYXZlKCk7XG4gICAgICAgIHRoaXMuY3R4LnRyYW5zbGF0ZShkeCwgZHkpO1xuICAgICAgICB0aGlzLmN0eC5yb3RhdGUodGhpcy5hbmdsZSAqIE1hdGguUEkgLyAxODApO1xuICAgICAgICAvLyB0aGlzLmN0eC5yZXN0b3JlKCk7XG4gICAgICAgIHRoaXMuY3R4LnRyYW5zbGF0ZSgtZHgsIC1keSk7XG5cbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgdGhpcy5jdHgubW92ZVRvKGR4IC0gdGhpcy5zaXplLCBkeSAtIHRoaXMuc2l6ZSk7XG4gICAgICAgIHRoaXMuY3R4LmxpbmVUbyhkeCArIHRoaXMuc2l6ZSwgZHkpO1xuICAgICAgICB0aGlzLmN0eC5saW5lVG8oZHggLSB0aGlzLnNpemUsIGR5ICsgdGhpcy5zaXplKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgICAgICB0aGlzLmN0eC50cmFuc2xhdGUoZHgsIGR5KTtcbiAgICAgICAgdGhpcy5jdHgucm90YXRlKC10aGlzLmFuZ2xlICogTWF0aC5QSSAvIDE4MCk7XG4gICAgICAgIHRoaXMuY3R4LnRyYW5zbGF0ZSgtZHgsIC1keSk7XG5cbiAgICAgICAgXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZHhcIiArIGR4KTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJkeVwiICsgZHkpO1xuICAgIH1cbiAgICBoYW5kbGVQcmVzcyhlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgc3dpdGNoIChlLmtleSkge1xuICAgICAgICAgICAgLy8gY2FzZSAnQXJyb3dVcCc6XG4gICAgICAgICAgICAvLyAgICAgdGhpcy5wbGF5ZXJQb3MgPSBcInVwXCI7XG4gICAgICAgICAgICAvLyAgICAgYnJlYWs7XG4gICAgICAgICAgICAvLyBjYXNlICdBcnJvd0Rvd24nOlxuICAgICAgICAgICAgLy8gICAgIHRoaXMucGxheWVyUG9zID0gXCJkb3duXCI7XG4gICAgICAgICAgICAvLyAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdBcnJvd0xlZnQnOlxuICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uID0gLTE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdBcnJvd1JpZ2h0JzpcbiAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IDE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVLZXlVcChlKXtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSAwO1xuICAgIH1cblxuICAgIGdldFBvc2l0aW9uKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmFuZ2xlO1xuICAgIH1cbn1cblxuIiwiXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTb3VuZCB7XG4gICAgY29uc3RydWN0b3Ioc3JjKXtcbiAgICAgICAgdGhpcy5zb3VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhdWRpb1wiKTtcbiAgICAgICAgdGhpcy5zb3VuZC5zcmMgPSBzcmM7XG4gICAgICAgIHRoaXMuc291bmQuc2V0QXR0cmlidXRlKFwicHJlbG9hZFwiLCBcImF1dG9cIik7XG4gICAgICAgIHRoaXMuc291bmQuc2V0QXR0cmlidXRlKFwiY29udHJvbHNcIiwgXCJub25lXCIpO1xuICAgICAgICB0aGlzLnNvdW5kLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLnNvdW5kKTtcbiAgICB9XG5cbiAgICBwbGF5KCl7XG4gICAgICAgIHRoaXMuc291bmQucGxheSgpO1xuICAgIH1cblxuICAgIHN0b3AoKXtcbiAgICAgICAgdGhpcy5zb3VuZC5wYXVzZSgpO1xuICAgICAgICB0aGlzLnNvdW5kLmN1cnJlbnRUaW1lID0gMDtcbiAgICB9XG59XG4iLCJpbXBvcnQgR2FwIGZyb20gXCIuL2dhcFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXYWxsIHtcbiAgICBjb25zdHJ1Y3RvcihjdHgsIHgsIHksIHJhZGl1cywgY29sb3IsIHJvdGF0aW9uKSB7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cztcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgICAgICB0aGlzLnRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgdGhpcy5hbmdsZSA9IE1hdGgucmFuZG9tKCkgKiAoMiAqIE1hdGguUEkpO1xuICAgICAgICB0aGlzLnJvdGF0aW9uID0gcm90YXRpb247XG4gICAgICAgIHRoaXMuZW5kQW5nbGUgPSAyICogTWF0aC5QSSAtIDEuMjtcbiAgICAgICAgdGhpcy5nYXAgPSBuZXcgR2FwKHRoaXMuY3R4LCB0aGlzLngsIHRoaXMueSwgdGhpcy5yYWRpdXMsIHRoaXMuYW5nbGUsIHRoaXMucm90YXRpb24sIHRoaXMudGltZSk7XG4gICAgfVxuXG4gICAgZHJhdygpe1xuICAgICAgICBjb25zdCBuZXdUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIGxldCBkaWZmID0gbmV3VGltZSAtIHRoaXMudGltZTtcbiAgICAgICBcbiAgICAgICAgdGhpcy50aW1lID0gbmV3VGltZTtcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gMTI7XG4gICAgICAgIHRoaXMuY3R4LmFyYyh0aGlzLngsIHRoaXMueSwgdGhpcy5yYWRpdXMsIHRoaXMuYW5nbGUsIHRoaXMuZW5kQW5nbGUgKyB0aGlzLmFuZ2xlLCBmYWxzZSk7XG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgICAgICB0aGlzLmFuZ2xlICs9IGRpZmYgKiB0aGlzLnJvdGF0aW9uO1xuICAgICAgICB0aGlzLmFuZ2xlICU9IDIgKiBNYXRoLlBJO1xuXG4gICAgICAgIHRoaXMuZ2FwLmFuZ2xlICs9IGRpZmYgKiB0aGlzLnJvdGF0aW9uO1xuICAgICAgICB0aGlzLmdhcC5hbmdsZSAlPSAyICogTWF0aC5QSTtcblxuICAgICAgICBpZiAodGhpcy5hbmdsZSA8IDApIHtcbiAgICAgICAgICAgIHRoaXMuYW5nbGUgPSAyICogTWF0aC5QSTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmFuZ2xlID4gMiAqIE1hdGguUEkpIHtcbiAgICAgICAgICAgIHRoaXMuYW5nbGUgJT0gMiAqIE1hdGguUEk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5nYXAuYW5nbGUgPCAwKSB7XG4gICAgICAgICAgICB0aGlzLmdhcC5hbmdsZSA9IDIgKiBNYXRoLlBJO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZ2FwLmFuZ2xlID4gMiAqIE1hdGguUEkpIHtcbiAgICAgICAgICAgIHRoaXMuZ2FwLmFuZ2xlICU9IDIgKiBNYXRoLlBJO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlKCl7XG4gICAgICAgIGlmKHRoaXMucmFkaXVzID4gMzApIHtcbiAgICAgICAgICAgIHRoaXMucmFkaXVzIC09IDM7XG4gICAgICAgICAgICB0aGlzLmdhcC5yYWRpdXMgLT0gMztcbiAgICAgICAgfSBcbiAgICAgICAgdGhpcy5nYXAuZHJhdygpO1xuICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICB9XG5cbiAgICByZXZlcnNlKCl7XG4gICAgICAgIGlmKHRoaXMucmFkaXVzID09PSAyOTApe1xuICAgICAgICAgICAgdGhpcy5yb3RhdGlvbiAqPSAtMS4yO1xuICAgICAgICB9XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=