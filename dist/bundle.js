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
            this.increaseDifficulty();
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
            this.speed = [-.001, .001];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qYXZhc2NyaXB0L2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2phdmFzY3JpcHQvZ2FtZV92aWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9qYXZhc2NyaXB0L2dhcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvamF2YXNjcmlwdC9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2phdmFzY3JpcHQvc291bmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2phdmFzY3JpcHQvd2FsbC5qcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXMiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsIndpZHRoIiwiaGVpZ2h0IiwiY3R4IiwiZ2V0Q29udGV4dCIsImdhbWVWaWV3IiwiR2FtZVZpZXciLCJnYW1lIiwicGxheWVyIiwiaGFuZGxlUHJlc3MiLCJlIiwiZ2FtZVN0YXJ0IiwiaGFuZGxlS2V5VXAiLCJhbmltYXRlIiwiRElNX1giLCJESU1fWSIsIkNPTE9SX1NDSEVNRSIsIkdhbWUiLCJQbGF5ZXIiLCJ3YWxscyIsInRpbWVyIiwic2NvcmUiLCJpbkdhbWUiLCJkZWFkIiwiYmciLCJoaWdoU2NvcmUiLCJzcGVlZCIsInRoZW1lU29uZyIsIlNvdW5kIiwicmFuZG9tQ29sb3IiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ0b1N0cmluZyIsImdldEVsZW1lbnRCeUlkIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJzdGFydFNjcmVlbiIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJydW4iLCJnYW1lT3ZlciIsIm1lZFJvdGF0aW9ucyIsImZhc3RSb3RhdGlvbnMiLCJ3YWxsIiwiV2FsbCIsImxlbmd0aCIsInB1c2giLCJyYWRpdXMiLCJpbmNyZWFzZVNwZWVkIiwibWFwIiwiZm9yRWFjaCIsInJldmVyc2UiLCJiZWdpblBhdGgiLCJmb250IiwiZmlsbFRleHQiLCJjbG9zZVBhdGgiLCJ0ZXh0IiwieSIsIm1lYXN1cmVtZW50IiwibWVhc3VyZVRleHQiLCJ4IiwiY2xlYXJSZWN0IiwiY2VudGVyWCIsImNlbnRlclkiLCJsaW5lV2lkdGgiLCJzdHJva2VTdHlsZSIsImFyYyIsIlBJIiwic3Ryb2tlIiwidXBkYXRlIiwiZHJhdyIsImRvV2FsbHNFeGlzdCIsImlzV2FsbE9uUGxheWVyIiwic2l6ZSIsImNoZWNrQ29sbGlzaW9uIiwiZ2FwIiwic2hvd1Njb3JlIiwiY29uc29sZSIsImxvZyIsIndhbGxTcGFjZSIsInNldFRpbWVvdXQiLCJhZGRXYWxsIiwic2hpZnQiLCJpbmNyZWFzZURpZmZpY3VsdHkiLCJzdG9wIiwiY29sb3IiLCJ0aXRsZSIsImVudGVyIiwiZmlsbFN0eWxlIiwiY2VudGVyVGV4dCIsImNvbGxpc2lvbiIsImdhcFBvcyIsImdldFBvc2l0aW9uIiwicGxheWVyQW5nbGUiLCJlbmRBbmdsZSIsImFuZ2xlIiwicGFydGlhbENpcmNsZUFuZ2xlIiwidXBkYXRlU2NvcmUiLCJjaGFuZ2VCRyIsInByZXZlbnREZWZhdWx0Iiwid2hpY2giLCJrZXlDb2RlIiwicGxheSIsImluaXQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJiaW5kIiwiR2FwIiwicm90YXRpb24iLCJ0aW1lIiwiZ2xvYmFsQWxwaGEiLCJwb3NpdGlvbiIsInN0YXJ0IiwiZW5kIiwiYzEiLCJjMiIsImNvcyIsInNpbiIsImRpcmVjdGlvbiIsInBsYXllclBvcyIsImR4IiwiZHkiLCJ0cmFuc2xhdGUiLCJyb3RhdGUiLCJtb3ZlVG8iLCJsaW5lVG8iLCJmaWxsIiwia2V5Iiwic3JjIiwic291bmQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiZGlzcGxheSIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInBhdXNlIiwiY3VycmVudFRpbWUiLCJEYXRlIiwiZ2V0VGltZSIsIm5ld1RpbWUiLCJkaWZmIl0sIm1hcHBp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cEIscUJBQUtwQixHQUFMLENBQVNvQixLQUFULEdBQWlCLElBQUlqRSxLQUFLcUMsRUFBMUI7QUFDSDs7QUFFRCxnQkFBSSxLQUFLUSxHQUFMLENBQVNvQixLQUFULEdBQWlCLElBQUlqRSxLQUFLcUMsRUFBOUIsRUFBa0M7QUFDOUIscUJBQUtRLEdBQUwsQ0FBU29CLEtBQVQsSUFBa0IsSUFBSWpFLEtBQUtxQyxFQUEzQjtBQUNIO0FBQ0o7OztpQ0FFTztBQUNKLGdCQUFHLEtBQUtwQixNQUFMLEdBQWMsRUFBakIsRUFBcUI7QUFDakIscUJBQUtBLE1BQUwsSUFBZSxDQUFmO0FBQ0EscUJBQUs0QixHQUFMLENBQVM1QixNQUFULElBQW1CLENBQW5CO0FBQ0g7QUFDRCxpQkFBSzRCLEdBQUwsQ0FBU0wsSUFBVDtBQUNBLGlCQUFLQSxJQUFMO0FBQ0g7OztrQ0FFUTtBQUNMLGdCQUFHLEtBQUt2QixNQUFMLEtBQWdCLEdBQW5CLEVBQXVCO0FBQ25CLHFCQUFLNEQsUUFBTCxJQUFpQixDQUFDLEdBQWxCO0FBQ0g7QUFDSjs7Ozs7O2tCQTlEZ0IvRCxJIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFBsYXllciBmcm9tICcuL2phdmFzY3JpcHQvcGxheWVyJztcbmltcG9ydCBHYW1lIGZyb20gJy4vamF2YXNjcmlwdC9nYW1lJztcbmltcG9ydCBHYW1lVmlldyBmcm9tICcuL2phdmFzY3JpcHQvZ2FtZV92aWV3JztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiY2FudmFzXCIpWzBdO1xuICAgIGNhbnZhcy53aWR0aCA9IDEwMDA7XG4gICAgY2FudmFzLmhlaWdodCA9IDYwMDtcblxuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cblxuICAgIGNvbnN0IGdhbWVWaWV3ID0gbmV3IEdhbWVWaWV3KGNhbnZhcywgY3R4KTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZSA9PiBnYW1lVmlldy5nYW1lLnBsYXllci5oYW5kbGVQcmVzcyhlKSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGUgPT4gZ2FtZVZpZXcuZ2FtZS5nYW1lU3RhcnQoZSkpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZSA9PiBnYW1lVmlldy5nYW1lLnBsYXllci5oYW5kbGVLZXlVcChlKSk7XG4gICAgZ2FtZVZpZXcuYW5pbWF0ZSgpO1xufSk7XG5cblxuXG4iLCJpbXBvcnQgUGxheWVyIGZyb20gXCIuL3BsYXllclwiO1xuaW1wb3J0IFdhbGwgZnJvbSBcIi4vd2FsbFwiO1xuaW1wb3J0IFNvdW5kIGZyb20gJy4vc291bmQnO1xuY29uc3QgRElNX1ggPSAxMDAwO1xuY29uc3QgRElNX1kgPSA2MDA7XG5jb25zdCBDT0xPUl9TQ0hFTUUgPSBbXCIjQ0MyOTMzNlwiLCBcIkVCQkFCOVwiLCBcIiMzODg2OTdcIiwgXCIjQkZGRkUxXCJdXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGN0eCkge1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMucGxheWVyID0gbmV3IFBsYXllcih0aGlzLmNhbnZhcywgdGhpcy5jdHgpXG4gICAgICAgIHRoaXMud2FsbHMgPSBbXTtcbiAgICAgICAgdGhpcy50aW1lciA9IG51bGw7XG4gICAgICAgIHRoaXMuc2NvcmUgPSAwO1xuICAgICAgICB0aGlzLmluR2FtZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmRlYWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5iZyA9IFwiIzQ4NjM5Y1wiO1xuICAgICAgICB0aGlzLmhpZ2hTY29yZSA9IDA7XG4gICAgICAgIHRoaXMuc3BlZWQgPSBbLS4wMDEsIC4wMDFdO1xuICAgICAgICB0aGlzLnRoZW1lU29uZyA9IG5ldyBTb3VuZChcImdhbWV0aGVtZS5tcDNcIik7XG4gICAgfVxuXG4gICAgY2hhbmdlQkcoKSB7XG4gICAgICAgIGNvbnN0IHJhbmRvbUNvbG9yID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTY3NzcyMTUpLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUNhbnZhc1wiKTtcbiAgICAgICAgdGhpcy5iZyA9IGNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNcIiArIHJhbmRvbUNvbG9yO1xuICAgIH1cblxuICAgIGluaXQoKXtcbiAgICAgICAgaWYoIXRoaXMuaW5HYW1lKXtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRTY3JlZW4oKTtcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuaW5HYW1lICYmICF0aGlzLmRlYWQpe1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGUgPT4gdGhpcy5nYW1lU3RhcnQoZSkpO1xuICAgICAgICAgICAgdGhpcy5ydW4oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXIoKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgYWRkV2FsbCgpe1xuICAgICAgIGNvbnN0IG1lZFJvdGF0aW9ucyA9IFstLjAwMiwgLjAwMl07XG4gICAgICAgY29uc3QgZmFzdFJvdGF0aW9ucyA9IFstLjAwMywgLjAwM107XG4gICAgLy8gICAgaWYgKHRoaXMuc2NvcmUgPCAxMCl7XG4gICAgICAgIGNvbnN0IHdhbGwgPSBuZXcgV2FsbCh0aGlzLmN0eCwgdGhpcy5jYW52YXMud2lkdGggLyAyLCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyLCB0aGlzLmNhbnZhcy53aWR0aCAvIDIsIFwiIzM4ODY5N1wiLCB0aGlzLnNwZWVkW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuc3BlZWQubGVuZ3RoKV0pXG4gICAgICAgIHRoaXMud2FsbHMucHVzaCh3YWxsKTtcbiAgICAgICAgdGhpcy50aW1lciA9IG51bGw7XG4gICAgLy8gICAgfSBlbHNlIGlmICh0aGlzLnNjb3JlIDwgMjApe1xuICAgIC8vICAgICAgICAgY29uc3Qgd2FsbCA9IG5ldyBXYWxsKHRoaXMuY3R4LCB0aGlzLmNhbnZhcy53aWR0aCAvIDIsIHRoaXMuY2FudmFzLmhlaWdodCAvIDIsIHRoaXMuY2FudmFzLndpZHRoIC8gMiwgXCIjMzg4Njk3XCIsIG1lZFJvdGF0aW9uc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtZWRSb3RhdGlvbnMubGVuZ3RoKV0pXG4gICAgLy8gICAgICAgICB0aGlzLndhbGxzLnB1c2god2FsbCk7XG4gICAgLy8gICAgICAgICB0aGlzLnRpbWVyID0gbnVsbDtcbiAgICAvLyAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgY29uc3Qgd2FsbCA9IG5ldyBXYWxsKHRoaXMuY3R4LCB0aGlzLmNhbnZhcy53aWR0aCAvIDIsIHRoaXMuY2FudmFzLmhlaWdodCAvIDIsIHRoaXMuY2FudmFzLndpZHRoIC8gMiwgXCIjMzg4Njk3XCIsIGZhc3RSb3RhdGlvbnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZmFzdFJvdGF0aW9ucy5sZW5ndGgpXSlcbiAgICAvLyAgICAgICAgIHRoaXMud2FsbHMucHVzaCh3YWxsKTtcbiAgICAvLyAgICAgICAgIHRoaXMudGltZXIgPSBudWxsO1xuICAgIC8vICAgIH1cbiAgICB9XG5cbiAgICBpbmNyZWFzZURpZmZpY3VsdHkoKXtcbiAgICAgICAgbGV0IHJhZGl1cztcbiAgICAgICAgaWYodGhpcy53YWxscy5sZW5ndGgpIHsgcmFkaXVzID0gdGhpcy53YWxsc1swXS5yYWRpdXN9XG4gICAgICAgIGlmKHRoaXMuc2NvcmUgPT09IDEwICYmIHJhZGl1cyA9PT0gNDcpe1xuICAgICAgICAgICAgdGhpcy5pbmNyZWFzZVNwZWVkKHRoaXMud2FsbHMpO1xuICAgICAgICAgICAgXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLnNjb3JlID09PSAyMCAmJiByYWRpdXMgPT09IDQ3KXtcbiAgICAgICAgICAgIHRoaXMuaW5jcmVhc2VTcGVlZCh0aGlzLndhbGxzKTtcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuc2NvcmUgPT09IDMwICYmIHJhZGl1cyA9PT0gNDcpe1xuICAgICAgICAgICAgdGhpcy5pbmNyZWFzZVNwZWVkKHRoaXMud2FsbHMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYodGhpcy5zY29yZSA9PT0gNDAgJiYgcmFkaXVzID09PSA0Nyl7XG4gICAgICAgICAgICB0aGlzLmluY3JlYXNlU3BlZWQodGhpcy53YWxscyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5zY29yZSA9PT0gNTAgJiYgcmFkaXVzID09PSA0Nykge1xuICAgICAgICAgICAgdGhpcy5pbmNyZWFzZVNwZWVkKHRoaXMud2FsbHMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuc2NvcmUgPT09IDYwICYmIHJhZGl1cyA9PT0gNDcpIHtcbiAgICAgICAgICAgIHRoaXMuaW5jcmVhc2VTcGVlZCh0aGlzLndhbGxzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLnNjb3JlID09PSA3MCAmJiByYWRpdXMgPT09IDQ3KSB7XG4gICAgICAgICAgICB0aGlzLmluY3JlYXNlU3BlZWQodGhpcy53YWxscyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5zY29yZSA9PT0gODAgJiYgcmFkaXVzID09PSA0Nyl7XG4gICAgICAgICAgICB0aGlzLnNwZWVkID0gdGhpcy5zcGVlZC5tYXAoc3BlZWQgPT4gc3BlZWQgKiAxMCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5zY29yZSA+IDMwKXtcbiAgICAgICAgICAgIHRoaXMud2FsbHMuZm9yRWFjaCh3YWxsID0+IHtcbiAgICAgICAgICAgICAgICB3YWxsLnJldmVyc2UoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIH1cbiAgICBcblxuICAgIGluY3JlYXNlU3BlZWQod2FsbHMpe1xuICAgICAgICB0aGlzLnNwZWVkID0gdGhpcy5zcGVlZC5tYXAoc3BlZWQgPT4gc3BlZWQgKiAxLjIpO1xuICAgIH1cblxuICAgIGFsbFdhbGxzKCl7XG4gICAgICAgIHJldHVybiB0aGlzLndhbGxzO1xuICAgIH1cblxuICAgIHNob3dTY29yZSgpe1xuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiMjBweCBHZW9yZ2lhXCI7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiU2NvcmU6IFwiICsgdGhpcy5zY29yZSwgdGhpcy5jYW52YXMud2lkdGggLSAxMDAsIDMwKTtcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG4gICAgfVxuXG4gICAgY2VudGVyVGV4dCh0ZXh0LCB5KXtcbiAgICAgICAgY29uc3QgbWVhc3VyZW1lbnQgPSB0aGlzLmN0eC5tZWFzdXJlVGV4dCh0ZXh0KTtcbiAgICAgICAgY29uc3QgeCA9ICh0aGlzLmNhbnZhcy53aWR0aCAtIG1lYXN1cmVtZW50LndpZHRoKSAvIDI7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KHRleHQsIHgsIHkpO1xuICAgIH1cbiAgICBcbiAgICBkcmF3KCkge1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgRElNX1gsIERJTV9ZKTtcbiAgICAgICAgY29uc3QgY2VudGVyWCA9IERJTV9YIC8gMjtcbiAgICAgICAgY29uc3QgY2VudGVyWSA9IERJTV9ZIC8gMjtcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDE7XG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICB0aGlzLmN0eC5hcmMoY2VudGVyWCwgY2VudGVyWSwgMzAsIDAsIDIgKiBNYXRoLlBJLCBmYWxzZSk7XG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgdGhpcy53YWxscy5mb3JFYWNoKHdhbGwgPT4ge1xuICAgICAgICAgICAgd2FsbC51cGRhdGUoKTtcbiAgICAgICAgICAgIC8vIHdhbGwuZ2FwLnVwZGF0ZSgpO1xuICAgICAgICB9KVxuICAgICAgICB0aGlzLnBsYXllci5kcmF3KDUpO1xuXG4gICAgICAgIGNvbnN0IGRvV2FsbHNFeGlzdCA9IHRoaXMud2FsbHMubGVuZ3RoID4gMDtcbiAgICAgICAgaWYoZG9XYWxsc0V4aXN0KXtcblxuICAgICAgICAgICAgLy9UT0RPOiB3ZSBjaGVjayBmb3IgY29sbGlzaW9uIHdoZW4gdGhlIHdhbGwgaXMgbGl0ZXJhbGx5IG9udG9wIG9mIHRoZSBwbGF5ZXJcbiAgICAgICAgICAgIC8vIG1heWJlIGZpbmQgYSBzd2VldCBzcG90IHdpdGggdGhpcy5wbGF5ZXIucmFkaXVzICsgMSBvciBzb21ldGhpbmcgY2F1c2UgdGhlIHRyaWFuZ2xlIGhhc1xuICAgICAgICAgICAgLy8gYSBzaXplIHRvIGl0LlxuICAgICAgICAgICAgY29uc3QgaXNXYWxsT25QbGF5ZXIgPSB0aGlzLndhbGxzWzBdLnJhZGl1cyA8PSB0aGlzLnBsYXllci5yYWRpdXMgKyB0aGlzLnBsYXllci5zaXplICYmIHRoaXMud2FsbHNbMF0ucmFkaXVzID49IHRoaXMucGxheWVyLnJhZGl1cyArIHRoaXMucGxheWVyLnNpemUgLSAxO1xuICAgICAgICAgICAgaWYgKGlzV2FsbE9uUGxheWVyKXtcbiAgICAgICAgICAgICAgICBpZighdGhpcy5jaGVja0NvbGxpc2lvbih0aGlzLnBsYXllciwgdGhpcy53YWxsc1swXS5nYXApKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWFkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMud2FsbHNbMF0uYW5nbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2hvd1Njb3JlKCk7XG4gICAgICAgIGlmKHRoaXMud2FsbHMubGVuZ3RoKSB7Y29uc29sZS5sb2codGhpcy53YWxsc1swXS5yYWRpdXMpIH07XG4gICAgICAgIC8vIHRoaXMuY3R4LnN0cm9rZSgpO1xuICAgICAgICAvLyB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcbiAgICB9XG4gICAgXG4gICAgcnVuKCl7XG4gICAgICAgIGNvbnN0IHdhbGxTcGFjZSA9IDEwMDA7XG4gICAgICAgIGlmKHRoaXMud2FsbHMubGVuZ3RoIDwgOCAmJiB0aGlzLnRpbWVyID09PSBudWxsKXtcbiAgICAgICAgICAgIHRoaXMudGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHRoaXMuYWRkV2FsbCgpLCB3YWxsU3BhY2UpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLndhbGxzLmxlbmd0aCA+IDAgJiYgdGhpcy53YWxsc1swXS5yYWRpdXMgPCAzMCkgeyB0aGlzLndhbGxzLnNoaWZ0KCl9XG4gICAgICAgIHRoaXMuaW5jcmVhc2VEaWZmaWN1bHR5KCk7XG4gICAgICAgIHRoaXMuZHJhdygpO1xuICAgICAgICB9XG5cbiAgICB1cGRhdGVTY29yZSgpe1xuICAgICAgICB0aGlzLnNjb3JlICs9IDE7XG4gICAgfVxuXG4gICAgZ2FtZU92ZXIoKXtcbiAgICAgICAgaWYodGhpcy5zY29yZSA+IHRoaXMuaGlnaFNjb3JlKSB7XG4gICAgICAgICAgICB0aGlzLmhpZ2hTY29yZSA9IHRoaXMuc2NvcmU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50aGVtZVNvbmcuc3RvcCgpO1xuICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15Q2FudmFzXCIpO1xuICAgICAgICBjYW52YXMuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gKFwiIzQ4NjM5Y1wiKTtcbiAgICAgICAgdGhpcy53YWxscyA9IFtdO1xuICAgICAgICB0aGlzLnNwZWVkID0gWy0uMDAxLCAuMDAxXTtcbiAgICAgICAgbGV0IHkgPSB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyO1xuICAgICAgICBsZXQgY29sb3IgPSBcIiNGRjAwMDBcIjtcbiAgICAgICAgbGV0IHRpdGxlID0gXCJHYW1lIE92ZXJcIjtcbiAgICAgICAgbGV0IGVudGVyID0gXCJUcnkgYWdhaW5cIjtcbiAgICAgICAgbGV0IHNjb3JlID0gYFNjb3JlOiAke3RoaXMuc2NvcmV9YDtcbiAgICAgICAgbGV0IGhpZ2hTY29yZSA9IGBIaWdoIFNjb3JlOiAke3RoaXMuaGlnaFNjb3JlfWA7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCBESU1fWCwgRElNX1kpO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiNDhweCBtb25vc3BhY2VcIjtcbiAgICAgICAgdGhpcy5jZW50ZXJUZXh0KHRpdGxlLCB5ICsgNjApO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiMjRweCBtb25vc3BhY2VcIjtcbiAgICAgICAgdGhpcy5jZW50ZXJUZXh0KGhpZ2hTY29yZSwgeSArIDIwKTtcbiAgICAgICAgdGhpcy5jZW50ZXJUZXh0KHNjb3JlLCB5KTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gY29sb3I7XG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcIjI0cHggbW9ub3NwYWNlXCI7XG4gICAgICAgIHRoaXMuY2VudGVyVGV4dChlbnRlciwgeSArIDEwMCk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBlID0+IHRoaXMuZ2FtZVN0YXJ0KGUpKTtcbiAgICB9XG5cbiAgICBjaGVja0NvbGxpc2lvbihwbGF5ZXIsIGdhcCl7XG4gICAgICAgIGxldCBjb2xsaXNpb24gPSBmYWxzZTtcbiAgICAgICAgbGV0IGdhcFBvcyA9IGdhcC5nZXRQb3NpdGlvbigpO1xuICAgICAgICBsZXQgcGxheWVyQW5nbGUgPSBwbGF5ZXIuZ2V0UG9zaXRpb24oKSAqIE1hdGguUEkgLyAxODA7XG4gICAgICAgIGxldCBlbmRBbmdsZSA9IGdhcC5hbmdsZSAtICgyICogTWF0aC5QSSAtIGdhcC5wYXJ0aWFsQ2lyY2xlQW5nbGUpO1xuICAgICAgICBpZiAoZW5kQW5nbGUgPCAwKSB7XG4gICAgICAgICAgICBlbmRBbmdsZSArPSAyKk1hdGguUEk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZihwbGF5ZXJQb3MgPiBnYXBQb3Nbc3RhcnRdICYmIHBsYXllclBvcyA8IGdhcFBvc1tlbmRdKSBjb2xsaXNpb24gPSB0cnVlO1xuXG4gICAgICAgIC8vIHRoZSBjYXNlIHdoZW4gdGhlIGdhcCBzdHJhZGRsZXMgdGhlIGhvcml6b250YWxcblxuICAgICAgICBpZiAoZ2FwLmFuZ2xlIDwgZW5kQW5nbGUpe1xuICAgICAgICAgICAgaWYgKChwbGF5ZXJBbmdsZSAgPiBlbmRBbmdsZSBcbiAgICAgICAgICAgICAgICAmJiBwbGF5ZXJBbmdsZSA8IDIgKiBNYXRoLlBJKSBcbiAgICAgICAgICAgICAgICB8fCBwbGF5ZXJBbmdsZSA8IGdhcC5hbmdsZSAmJiBwbGF5ZXJBbmdsZSA+IDApe1xuICAgICAgICAgICAgICAgIGNvbGxpc2lvbiA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGxheWVyQW5nbGUgPCBnYXAuYW5nbGUgJiZcbiAgICAgICAgICAgIHBsYXllckFuZ2xlID4gZW5kQW5nbGUpIHtcbiAgICAgICAgICAgICAgICBjb2xsaXNpb24gPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIGlmKGNvbGxpc2lvbiA9PT0gdHJ1ZSl7XG4gICAgICAgICAgICAvLyB0aGlzLmN0eC5zdHJva2VTdHlsZSA9ICdibHVlJ1xuICAgICAgICAgICAgLy8gdGhpcy5jdHguc3Ryb2tlUmVjdChESU1fWCAvIDIgLSAyNSwgRElNX1kgLyAyIC0gMjUsIDUwLCA1MClcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2NvcmUoKTtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlQkcoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29sbGlzaW9uO1xuICAgIH1cblxuICAgIHN0YXJ0U2NyZWVuKCl7XG4gICAgICAgIGxldCB5ID0gdGhpcy5jYW52YXMuaGVpZ2h0IC8gMjtcbiAgICAgICAgbGV0IGNvbG9yID0gXCIjQ0MyOTMzNlwiO1xuICAgICAgICBsZXQgdGl0bGUgPSBcIkVzY2FwZSB0aGUgU2hhcGVcIjtcbiAgICAgICAgbGV0IGVudGVyID0gXCJQcmVzcyBFbnRlclwiO1xuICAgICAgICAvLyBsZXQgZW50ZXJMZW5ndGggPSB0aGlzLmN0eC5tZWFzdXJlVGV4dChlbnRlcik7XG4gICAgICAgIC8vIGxldCB0aXRsZUxlbmd0aCA9IHRoaXMuY3R4Lm1lYXN1cmVUZXh0KHRpdGxlKTtcbiAgICAgICAgLy8gbGV0IGVudGVyWCA9ICh0aGlzLmNhbnZhcy53aWR0aCAtIGVudGVyTGVuZ3RoLndpZHRoKSAvIDI7XG4gICAgICAgIC8vIGxldCB4ID0gKHRoaXMuY2FudmFzLndpZHRoIC0gdGl0bGVMZW5ndGgud2lkdGgpIC8gMjtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIERJTV9YLCBESU1fWSk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiNDhweCBtb25vc3BhY2VcIjtcbiAgICAgICAgdGhpcy5jZW50ZXJUZXh0KHRpdGxlLCB5KTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgICAgICB0aGlzLmN0eC5mb250ID0gXCIyNHB4IG1vbm9zcGFjZVwiO1xuICAgICAgICB0aGlzLmNlbnRlclRleHQoZW50ZXIsIHkgKyAzMCk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBlID0+IHRoaXMuZ2FtZVN0YXJ0KGUpKTtcbiAgICB9XG5cbiAgICBnYW1lU3RhcnQoZSl7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYoZS53aGljaCA9PT0gMTMgfHwgZS5rZXlDb2RlID09PSAxMykge1xuICAgICAgICAgICAgdGhpcy50aGVtZVNvbmcucGxheSgpO1xuICAgICAgICAgICAgdGhpcy5pbkdhbWUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5iZyA9IFwiIzQ4NjM5Y1wiXG4gICAgICAgICAgICB0aGlzLmRlYWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuc2NvcmUgPSAwO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCBHYW1lIGZyb20gJy4vZ2FtZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVWaWV3IHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGN0eCkge1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuZ2FtZSA9IG5ldyBHYW1lKHRoaXMuY2FudmFzLCB0aGlzLmN0eCk7XG4gICAgfVxuXG4gICAgXG5cblxuICAgIGFuaW1hdGUoKSB7XG4gICAgICAgIHRoaXMuZ2FtZS5pbml0KCk7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUuYmluZCh0aGlzKSk7XG4gICAgfVxufSIsIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYXAge1xuICAgIGNvbnN0cnVjdG9yKGN0eCwgeCAsIHksIHJhZGl1cywgYW5nbGUsIHJvdGF0aW9uLCB0aW1lKXtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMucmFkaXVzID0gcmFkaXVzOyBcbiAgICAgICAgdGhpcy5yb3RhdGlvbiA9IHJvdGF0aW9uO1xuICAgICAgICB0aGlzLmFuZ2xlID0gYW5nbGU7XG4gICAgICAgIHRoaXMucGFydGlhbENpcmNsZUFuZ2xlID0gMiAqIE1hdGguUEkgLSAxLjI7XG4gICAgfVxuXG4gICAgZHJhdygpe1xuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHguZ2xvYmFsQWxwaGEgPSAwLjA7XG4gICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDg7XG4gICAgICAgIHRoaXMuY3R4LmFyYyh0aGlzLngsIHRoaXMueSwgdGhpcy5yYWRpdXMsIHRoaXMuYW5nbGUsIHRoaXMucGFydGlhbENpcmNsZUFuZ2xlICsgdGhpcy5hbmdsZSwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHguZ2xvYmFsQWxwaGEgPSAxLjA7XG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgICBpZiAodGhpcy5yYWRpdXMgPiAzMCkge1xuICAgICAgICAgICAgdGhpcy5yYWRpdXMgLT0gMztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICB9XG5cbiAgICBnZXRQb3NpdGlvbigpe1xuICAgICAgIGNvbnN0IHBvc2l0aW9uID0ge1xuICAgICAgICAgICBzdGFydDogdGhpcy5hbmdsZSxcbiAgICAgICAgICAgZW5kOiB0aGlzLnBhcnRpYWxDaXJjbGVBbmdsZSArIHRoaXMuYW5nbGUsXG4gICAgICAgfVxuICAgICAgIHJldHVybiBwb3NpdGlvbjtcbiAgICB9XG5cbiAgICBnZXRQb2ludChjMSwgYzIsIHJhZGl1cywgYW5nbGUpIHtcbiAgICAgICAgcmV0dXJuIFtjMSArIE1hdGguY29zKGFuZ2xlKSAqIHJhZGl1cywgYzIgKyBNYXRoLnNpbihhbmdsZSkgKiByYWRpdXNdO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY3R4KSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5zaXplID0gNTtcbiAgICAgICAgdGhpcy5yYWRpdXMgPSA1NTtcbiAgICAgICAgdGhpcy5zcGVlZCA9IDc7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gMDtcbiAgICAgICAgdGhpcy5hbmdsZSA9IDMwO1xuICAgICAgICB0aGlzLnBsYXllclBvcyA9IFwibGVmdFwiO1xuICAgICAgICB0aGlzLmRyYXcgPSB0aGlzLmRyYXcuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBkcmF3KCkge1xuICAgICAgICAvLyBzd2l0Y2ggKHRoaXMucGxheWVyUG9zKSB7XG4gICAgICAgIC8vICAgICBjYXNlIFwibGVmdFwiOlxuICAgICAgICAvLyAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuY3R4Lm1vdmVUbyh0aGlzLmNhbnZhcy53aWR0aCAvIDIgLSAzMCwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMiArIDUpO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyh0aGlzLmNhbnZhcy53aWR0aCAvIDIgLSA0MCwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMik7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5jdHgubGluZVRvKHRoaXMuY2FudmFzLndpZHRoIC8gMiAtIDMwLCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyIC0gNSk7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICAvLyAgICAgICAgIGJyZWFrO1xuICAgICAgICAvLyAgICAgY2FzZSBcInVwXCI6XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5jdHgubW92ZVRvKHRoaXMuY2FudmFzLndpZHRoIC8gMiAtIDUsIHRoaXMuY2FudmFzLmhlaWdodCAvIDIgLSAzMCk7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5jdHgubGluZVRvKHRoaXMuY2FudmFzLndpZHRoIC8gMiwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMiAtIDQwKTtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmN0eC5saW5lVG8odGhpcy5jYW52YXMud2lkdGggLyAyICsgNSwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMiAtIDMwKTtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgIC8vICAgICAgICAgYnJlYWs7XG4gICAgICAgIC8vICAgICBjYXNlIFwicmlnaHRcIjpcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmN0eC5tb3ZlVG8odGhpcy5jYW52YXMud2lkdGggLyAyICsgMzAsIHRoaXMuY2FudmFzLmhlaWdodCAvIDIgKyA1KTtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmN0eC5saW5lVG8odGhpcy5jYW52YXMud2lkdGggLyAyICsgNDAsIHRoaXMuY2FudmFzLmhlaWdodCAvIDIpO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyh0aGlzLmNhbnZhcy53aWR0aCAvIDIgKyAzMCwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMiAtIDUpO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgLy8gICAgICAgICBicmVhaztcbiAgICAgICAgLy8gICAgIGNhc2UgXCJkb3duXCI6XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5jdHgubW92ZVRvKHRoaXMuY2FudmFzLndpZHRoIC8gMiAtIDUsIHRoaXMuY2FudmFzLmhlaWdodCAvIDIgKyAzMCk7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5jdHgubGluZVRvKHRoaXMuY2FudmFzLndpZHRoIC8gMiwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMiArIDQwKTtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmN0eC5saW5lVG8odGhpcy5jYW52YXMud2lkdGggLyAyICsgNSwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMiArIDMwKTtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgIC8vICAgICAgICAgYnJlYWs7XG4gICAgICAgIC8vICAgICBkZWZhdWx0OlxuICAgICAgICAvLyAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICBjb25zdCBkeCA9ICh0aGlzLmNhbnZhcy53aWR0aCAvIDIpICsgKCh0aGlzLnJhZGl1cykgKiBNYXRoLmNvcyh0aGlzLmFuZ2xlICogTWF0aC5QSSAvIDE4MCkpO1xuICAgICAgICBjb25zdCBkeSA9ICh0aGlzLmNhbnZhcy5oZWlnaHQgLyAyKSArICgodGhpcy5yYWRpdXMpICogTWF0aC5zaW4odGhpcy5hbmdsZSAqIE1hdGguUEkgLyAxODApKTtcbiAgICAgICAgdGhpcy5hbmdsZSA9IHRoaXMuYW5nbGUgKyAodGhpcy5kaXJlY3Rpb24gKiB0aGlzLnNwZWVkKTtcblxuICAgICAgICBpZih0aGlzLmFuZ2xlIDwgMCkge1xuICAgICAgICAgICAgdGhpcy5hbmdsZSA9IDM2MCAtIHRoaXMuYW5nbGU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZih0aGlzLmFuZ2xlID4gMzYwKXtcbiAgICAgICAgICAgIHRoaXMuYW5nbGUgJT0gMzYwO1xuICAgICAgICB9XG4gICAgICAgIC8vIHRoaXMuY3R4LnNhdmUoKTtcbiAgICAgICAgdGhpcy5jdHgudHJhbnNsYXRlKGR4LCBkeSk7XG4gICAgICAgIHRoaXMuY3R4LnJvdGF0ZSh0aGlzLmFuZ2xlICogTWF0aC5QSSAvIDE4MCk7XG4gICAgICAgIC8vIHRoaXMuY3R4LnJlc3RvcmUoKTtcbiAgICAgICAgdGhpcy5jdHgudHJhbnNsYXRlKC1keCwgLWR5KTtcblxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICB0aGlzLmN0eC5tb3ZlVG8oZHggLSB0aGlzLnNpemUsIGR5IC0gdGhpcy5zaXplKTtcbiAgICAgICAgdGhpcy5jdHgubGluZVRvKGR4ICsgdGhpcy5zaXplLCBkeSk7XG4gICAgICAgIHRoaXMuY3R4LmxpbmVUbyhkeCAtIHRoaXMuc2l6ZSwgZHkgKyB0aGlzLnNpemUpO1xuICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgIHRoaXMuY3R4LnRyYW5zbGF0ZShkeCwgZHkpO1xuICAgICAgICB0aGlzLmN0eC5yb3RhdGUoLXRoaXMuYW5nbGUgKiBNYXRoLlBJIC8gMTgwKTtcbiAgICAgICAgdGhpcy5jdHgudHJhbnNsYXRlKC1keCwgLWR5KTtcblxuICAgICAgICBcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJkeFwiICsgZHgpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImR5XCIgKyBkeSk7XG4gICAgfVxuICAgIGhhbmRsZVByZXNzKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBzd2l0Y2ggKGUua2V5KSB7XG4gICAgICAgICAgICAvLyBjYXNlICdBcnJvd1VwJzpcbiAgICAgICAgICAgIC8vICAgICB0aGlzLnBsYXllclBvcyA9IFwidXBcIjtcbiAgICAgICAgICAgIC8vICAgICBicmVhaztcbiAgICAgICAgICAgIC8vIGNhc2UgJ0Fycm93RG93bic6XG4gICAgICAgICAgICAvLyAgICAgdGhpcy5wbGF5ZXJQb3MgPSBcImRvd25cIjtcbiAgICAgICAgICAgIC8vICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0Fycm93TGVmdCc6XG4gICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSAtMTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0Fycm93UmlnaHQnOlxuICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uID0gMTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZUtleVVwKGUpe1xuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IDA7XG4gICAgfVxuXG4gICAgZ2V0UG9zaXRpb24oKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuYW5nbGU7XG4gICAgfVxufVxuXG4iLCJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNvdW5kIHtcbiAgICBjb25zdHJ1Y3RvcihzcmMpe1xuICAgICAgICB0aGlzLnNvdW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImF1ZGlvXCIpO1xuICAgICAgICB0aGlzLnNvdW5kLnNyYyA9IHNyYztcbiAgICAgICAgdGhpcy5zb3VuZC5zZXRBdHRyaWJ1dGUoXCJwcmVsb2FkXCIsIFwiYXV0b1wiKTtcbiAgICAgICAgdGhpcy5zb3VuZC5zZXRBdHRyaWJ1dGUoXCJjb250cm9sc1wiLCBcIm5vbmVcIik7XG4gICAgICAgIHRoaXMuc291bmQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuc291bmQpO1xuICAgIH1cblxuICAgIHBsYXkoKXtcbiAgICAgICAgdGhpcy5zb3VuZC5wbGF5KCk7XG4gICAgfVxuXG4gICAgc3RvcCgpe1xuICAgICAgICB0aGlzLnNvdW5kLnBhdXNlKCk7XG4gICAgICAgIHRoaXMuc291bmQuY3VycmVudFRpbWUgPSAwO1xuICAgIH1cbn1cbiIsImltcG9ydCBHYXAgZnJvbSBcIi4vZ2FwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdhbGwge1xuICAgIGNvbnN0cnVjdG9yKGN0eCwgeCwgeSwgcmFkaXVzLCBjb2xvciwgcm90YXRpb24pIHtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMucmFkaXVzID0gcmFkaXVzO1xuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgICAgIHRoaXMudGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICB0aGlzLmFuZ2xlID0gTWF0aC5yYW5kb20oKSAqICgyICogTWF0aC5QSSk7XG4gICAgICAgIHRoaXMucm90YXRpb24gPSByb3RhdGlvbjtcbiAgICAgICAgdGhpcy5lbmRBbmdsZSA9IDIgKiBNYXRoLlBJIC0gMS4yO1xuICAgICAgICB0aGlzLmdhcCA9IG5ldyBHYXAodGhpcy5jdHgsIHRoaXMueCwgdGhpcy55LCB0aGlzLnJhZGl1cywgdGhpcy5hbmdsZSwgdGhpcy5yb3RhdGlvbiwgdGhpcy50aW1lKTtcbiAgICB9XG5cbiAgICBkcmF3KCl7XG4gICAgICAgIGNvbnN0IG5ld1RpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgbGV0IGRpZmYgPSBuZXdUaW1lIC0gdGhpcy50aW1lO1xuICAgICAgIFxuICAgICAgICB0aGlzLnRpbWUgPSBuZXdUaW1lO1xuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSAxMjtcbiAgICAgICAgdGhpcy5jdHguYXJjKHRoaXMueCwgdGhpcy55LCB0aGlzLnJhZGl1cywgdGhpcy5hbmdsZSwgdGhpcy5lbmRBbmdsZSArIHRoaXMuYW5nbGUsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgIHRoaXMuYW5nbGUgKz0gZGlmZiAqIHRoaXMucm90YXRpb247XG4gICAgICAgIHRoaXMuYW5nbGUgJT0gMiAqIE1hdGguUEk7XG5cbiAgICAgICAgdGhpcy5nYXAuYW5nbGUgKz0gZGlmZiAqIHRoaXMucm90YXRpb247XG4gICAgICAgIHRoaXMuZ2FwLmFuZ2xlICU9IDIgKiBNYXRoLlBJO1xuXG4gICAgICAgIGlmICh0aGlzLmFuZ2xlIDwgMCkge1xuICAgICAgICAgICAgdGhpcy5hbmdsZSA9IDIgKiBNYXRoLlBJO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuYW5nbGUgPiAyICogTWF0aC5QSSkge1xuICAgICAgICAgICAgdGhpcy5hbmdsZSAlPSAyICogTWF0aC5QSTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmdhcC5hbmdsZSA8IDApIHtcbiAgICAgICAgICAgIHRoaXMuZ2FwLmFuZ2xlID0gMiAqIE1hdGguUEk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5nYXAuYW5nbGUgPiAyICogTWF0aC5QSSkge1xuICAgICAgICAgICAgdGhpcy5nYXAuYW5nbGUgJT0gMiAqIE1hdGguUEk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGUoKXtcbiAgICAgICAgaWYodGhpcy5yYWRpdXMgPiAzMCkge1xuICAgICAgICAgICAgdGhpcy5yYWRpdXMgLT0gMztcbiAgICAgICAgICAgIHRoaXMuZ2FwLnJhZGl1cyAtPSAzO1xuICAgICAgICB9IFxuICAgICAgICB0aGlzLmdhcC5kcmF3KCk7XG4gICAgICAgIHRoaXMuZHJhdygpO1xuICAgIH1cblxuICAgIHJldmVyc2UoKXtcbiAgICAgICAgaWYodGhpcy5yYWRpdXMgPT09IDI5MCl7XG4gICAgICAgICAgICB0aGlzLnJvdGF0aW9uICo9IC0xLjI7XG4gICAgICAgIH1cbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==