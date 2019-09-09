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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qYXZhc2NyaXB0L2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2phdmFzY3JpcHQvZ2FtZV92aWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9qYXZhc2NyaXB0L2dhcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvamF2YXNjcmlwdC9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2phdmFzY3JpcHQvc291bmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2phdmFzY3JpcHQvd2FsbC5qcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXMiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsIndpZHRoIiwiaGVpZ2h0IiwiY3R4IiwiZ2V0Q29udGV4dCIsImdhbWVWaWV3IiwiR2FtZVZpZXciLCJnYW1lIiwicGxheWVyIiwiaGFuZGxlUHJlc3MiLCJlIiwiZ2FtZVN0YXJ0IiwiaGFuZGxlS2V5VXAiLCJhbmltYXRlIiwiRElNX1giLCJESU1fWSIsIkNPTE9SX1NDSEVNRSIsIkdhbWUiLCJQbGF5ZXIiLCJ3YWxscyIsInRpbWVyIiwic2NvcmUiLCJpbkdhbWUiLCJkZWFkIiwiYmciLCJoaWdoU2NvcmUiLCJzcGVlZCIsInRoZW1lU29uZyIsIlNvdW5kIiwicmFuZG9tQ29sb3IiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ0b1N0cmluZyIsImdldEVsZW1lbnRCeUlkIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJzdGFydFNjcmVlbiIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJydW4iLCJnYW1lT3ZlciIsIndhbGwiLCJXYWxsIiwibGVuZ3RoIiwicHVzaCIsInJhZGl1cyIsImluY3JlYXNlU3BlZWQiLCJtYXAiLCJmb3JFYWNoIiwicmV2ZXJzZSIsImJlZ2luUGF0aCIsImZvbnQiLCJmaWxsVGV4dCIsImNsb3NlUGF0aCIsInRleHQiLCJ5IiwibWVhc3VyZW1lbnQiLCJtZWFzdXJlVGV4dCIsIngiLCJjbGVhclJlY3QiLCJjZW50ZXJYIiwiY2VudGVyWSIsImxpbmVXaWR0aCIsInN0cm9rZVN0eWxlIiwiYXJjIiwiUEkiLCJzdHJva2UiLCJ1cGRhdGUiLCJkcmF3IiwiZG9XYWxsc0V4aXN0IiwiaXNXYWxsT25QbGF5ZXIiLCJzaXplIiwiY2hlY2tDb2xsaXNpb24iLCJnYXAiLCJzaG93U2NvcmUiLCJjb25zb2xlIiwibG9nIiwid2FsbFNwYWNlIiwic2V0VGltZW91dCIsImFkZFdhbGwiLCJzaGlmdCIsImluY3JlYXNlRGlmZmljdWx0eSIsInVwZGF0ZVNjb3JlIiwiY2hhbmdlQkciLCJzdG9wIiwiY29sb3IiLCJ0aXRsZSIsImVudGVyIiwiZmlsbFN0eWxlIiwiY2VudGVyVGV4dCIsImNvbGxpc2lvbiIsImdhcFBvcyIsImdldFBvc2l0aW9uIiwicGxheWVyQW5nbGUiLCJwbGF5ZXJMZWZ0Iiwic2luIiwiYW5nbGUiLCJlbmRBbmdsZSIsInBhcnRpYWxDaXJjbGVBbmdsZSIsInByZXZlbnREZWZhdWx0Iiwid2hpY2giLCJrZXlDb2RlIiwicGxheSIsImluaXQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJiaW5kIiwiR2FwIiwicm90YXRpb24iLCJ0aW1lIiwiZ2xvYmFsQWxwaGEiLCJwb3NpdGlvbiIsInN0YXJ0IiwiZW5kIiwiYzEiLCJjMiIsImNvcyIsImRpcmVjdGlvbiIsInBsYXllclBvcyIsImR4IiwiZHkiLCJ0cmFuc2xhdGUiLCJyb3RhdGUiLCJtb3ZlVG8iLCJsaW5lVG8iLCJmaWxsIiwia2V5Iiwic3JjIiwic291bmQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiZGlzcGxheSIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInBhdXNlIiwiY3VycmVudFRpbWUiLCJEYXRlIiwiZ2V0VGltZSIsIm5ld1RpbWUiLCJkaWZmIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7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QUwsQ0FBU3VCLEtBQVQsR0FBaUIsSUFBSWxFLEtBQUttQyxFQUE5QixFQUFrQztBQUM5QixxQkFBS1EsR0FBTCxDQUFTdUIsS0FBVCxJQUFrQixJQUFJbEUsS0FBS21DLEVBQTNCO0FBQ0g7QUFDSjs7O2lDQUVPOztBQUVKLGdCQUFHLEtBQUtwQixNQUFMLEdBQWMsRUFBakIsRUFBcUI7QUFDakIscUJBQUtBLE1BQUwsSUFBZSxDQUFmO0FBQ0EscUJBQUs0QixHQUFMLENBQVM1QixNQUFULElBQW1CLENBQW5CO0FBQ0g7QUFDRCxpQkFBSzRCLEdBQUwsQ0FBU0wsSUFBVDtBQUNBLGlCQUFLQSxJQUFMO0FBRUg7OztrQ0FFUTtBQUNMLGdCQUFHLEtBQUt2QixNQUFMLEtBQWdCLEdBQW5CLEVBQXVCO0FBQ25CLHFCQUFLOEQsUUFBTCxJQUFpQixDQUFDLEdBQWxCO0FBQ0g7QUFDSjs7Ozs7O2tCQS9EZ0JqRSxJIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFBsYXllciBmcm9tICcuL2phdmFzY3JpcHQvcGxheWVyJztcbmltcG9ydCBHYW1lIGZyb20gJy4vamF2YXNjcmlwdC9nYW1lJztcbmltcG9ydCBHYW1lVmlldyBmcm9tICcuL2phdmFzY3JpcHQvZ2FtZV92aWV3JztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiY2FudmFzXCIpWzBdO1xuICAgIGNhbnZhcy53aWR0aCA9IDEwMDA7XG4gICAgY2FudmFzLmhlaWdodCA9IDYwMDtcblxuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cblxuICAgIGNvbnN0IGdhbWVWaWV3ID0gbmV3IEdhbWVWaWV3KGNhbnZhcywgY3R4KTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZSA9PiBnYW1lVmlldy5nYW1lLnBsYXllci5oYW5kbGVQcmVzcyhlKSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGUgPT4gZ2FtZVZpZXcuZ2FtZS5nYW1lU3RhcnQoZSkpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZSA9PiBnYW1lVmlldy5nYW1lLnBsYXllci5oYW5kbGVLZXlVcChlKSk7XG4gICAgZ2FtZVZpZXcuYW5pbWF0ZSgpO1xufSk7XG5cblxuXG4iLCJpbXBvcnQgUGxheWVyIGZyb20gXCIuL3BsYXllclwiO1xuaW1wb3J0IFdhbGwgZnJvbSBcIi4vd2FsbFwiO1xuaW1wb3J0IFNvdW5kIGZyb20gJy4vc291bmQnO1xuY29uc3QgRElNX1ggPSAxMDAwO1xuY29uc3QgRElNX1kgPSA2MDA7XG5jb25zdCBDT0xPUl9TQ0hFTUUgPSBbXCIjQ0MyOTMzNlwiLCBcIkVCQkFCOVwiLCBcIiMzODg2OTdcIiwgXCIjQkZGRkUxXCJdXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGN0eCkge1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMucGxheWVyID0gbmV3IFBsYXllcih0aGlzLmNhbnZhcywgdGhpcy5jdHgpXG4gICAgICAgIHRoaXMud2FsbHMgPSBbXTtcbiAgICAgICAgdGhpcy50aW1lciA9IG51bGw7XG4gICAgICAgIHRoaXMuc2NvcmUgPSAwO1xuICAgICAgICB0aGlzLmluR2FtZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmRlYWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5iZyA9IFwiIzQ4NjM5Y1wiO1xuICAgICAgICB0aGlzLmhpZ2hTY29yZSA9IDA7XG4gICAgICAgIHRoaXMuc3BlZWQgPSBbLS4wMDEsIC4wMDFdO1xuICAgICAgICB0aGlzLnRoZW1lU29uZyA9IG5ldyBTb3VuZChcImdhbWV0aGVtZS5tcDNcIik7XG4gICAgfVxuXG4gICAgY2hhbmdlQkcoKSB7XG4gICAgICAgIGNvbnN0IHJhbmRvbUNvbG9yID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTY3NzcyMTUpLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUNhbnZhc1wiKTtcbiAgICAgICAgdGhpcy5iZyA9IGNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNcIiArIHJhbmRvbUNvbG9yO1xuICAgIH1cblxuICAgIGluaXQoKXtcbiAgICAgICAgaWYoIXRoaXMuaW5HYW1lKXtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRTY3JlZW4oKTtcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuaW5HYW1lICYmICF0aGlzLmRlYWQpe1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGUgPT4gdGhpcy5nYW1lU3RhcnQoZSkpO1xuICAgICAgICAgICAgdGhpcy5ydW4oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXIoKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgYWRkV2FsbCgpe1xuICAgICAgICBjb25zdCB3YWxsID0gbmV3IFdhbGwodGhpcy5jdHgsIHRoaXMuY2FudmFzLndpZHRoIC8gMiwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMiwgdGhpcy5jYW52YXMud2lkdGggLyAyLCBcIiMzODg2OTdcIiwgdGhpcy5zcGVlZFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLnNwZWVkLmxlbmd0aCldKVxuICAgICAgICB0aGlzLndhbGxzLnB1c2god2FsbCk7XG4gICAgICAgIHRoaXMudGltZXIgPSBudWxsO1xuICAgXG4gICAgfVxuXG4gICAgaW5jcmVhc2VEaWZmaWN1bHR5KCl7XG4gICAgICAgIGxldCByYWRpdXM7XG4gICAgICAgIGlmKHRoaXMud2FsbHMubGVuZ3RoKSB7IHJhZGl1cyA9IHRoaXMud2FsbHNbMF0ucmFkaXVzfVxuICAgICAgICBpZih0aGlzLnNjb3JlID09PSAxMCAmJiByYWRpdXMgPT09IDQ3KXtcbiAgICAgICAgICAgIHRoaXMuaW5jcmVhc2VTcGVlZCh0aGlzLndhbGxzKTtcbiAgICAgICAgICAgIFxuICAgICAgICB9IGVsc2UgaWYodGhpcy5zY29yZSA9PT0gMjAgJiYgcmFkaXVzID09PSA0Nyl7XG4gICAgICAgICAgICB0aGlzLmluY3JlYXNlU3BlZWQodGhpcy53YWxscyk7XG4gICAgICAgIH0gZWxzZSBpZih0aGlzLnNjb3JlID09PSAzMCAmJiByYWRpdXMgPT09IDQ3KXtcbiAgICAgICAgICAgIHRoaXMuaW5jcmVhc2VTcGVlZCh0aGlzLndhbGxzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHRoaXMuc2NvcmUgPT09IDQwICYmIHJhZGl1cyA9PT0gNDcpe1xuICAgICAgICAgICAgdGhpcy5pbmNyZWFzZVNwZWVkKHRoaXMud2FsbHMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuc2NvcmUgPT09IDUwICYmIHJhZGl1cyA9PT0gNDcpIHtcbiAgICAgICAgICAgIHRoaXMuaW5jcmVhc2VTcGVlZCh0aGlzLndhbGxzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLnNjb3JlID09PSA2MCAmJiByYWRpdXMgPT09IDQ3KSB7XG4gICAgICAgICAgICB0aGlzLmluY3JlYXNlU3BlZWQodGhpcy53YWxscyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5zY29yZSA9PT0gNzAgJiYgcmFkaXVzID09PSA0Nykge1xuICAgICAgICAgICAgdGhpcy5pbmNyZWFzZVNwZWVkKHRoaXMud2FsbHMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuc2NvcmUgPT09IDgwICYmIHJhZGl1cyA9PT0gNDcpe1xuICAgICAgICAgICAgdGhpcy5zcGVlZCA9IHRoaXMuc3BlZWQubWFwKHNwZWVkID0+IHNwZWVkICogMTApO1xuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMuc2NvcmUgPiAzMCl7XG4gICAgICAgICAgICB0aGlzLndhbGxzLmZvckVhY2god2FsbCA9PiB7XG4gICAgICAgICAgICAgICAgd2FsbC5yZXZlcnNlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB9XG4gICAgXG5cbiAgICBpbmNyZWFzZVNwZWVkKHdhbGxzKXtcbiAgICAgICAgdGhpcy5zcGVlZCA9IHRoaXMuc3BlZWQubWFwKHNwZWVkID0+IHNwZWVkICogMS4yKTtcbiAgICB9XG5cbiAgICBhbGxXYWxscygpe1xuICAgICAgICByZXR1cm4gdGhpcy53YWxscztcbiAgICB9XG5cbiAgICBzaG93U2NvcmUoKXtcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcIjIwcHggR2VvcmdpYVwiO1xuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIlNjb3JlOiBcIiArIHRoaXMuc2NvcmUsIHRoaXMuY2FudmFzLndpZHRoIC0gMTAwLCAzMCk7XG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuICAgIH1cblxuICAgIGNlbnRlclRleHQodGV4dCwgeSl7XG4gICAgICAgIGNvbnN0IG1lYXN1cmVtZW50ID0gdGhpcy5jdHgubWVhc3VyZVRleHQodGV4dCk7XG4gICAgICAgIGNvbnN0IHggPSAodGhpcy5jYW52YXMud2lkdGggLSBtZWFzdXJlbWVudC53aWR0aCkgLyAyO1xuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dCh0ZXh0LCB4LCB5KTtcbiAgICB9XG4gICAgXG4gICAgZHJhdygpIHtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIERJTV9YLCBESU1fWSk7XG4gICAgICAgIGNvbnN0IGNlbnRlclggPSBESU1fWCAvIDI7XG4gICAgICAgIGNvbnN0IGNlbnRlclkgPSBESU1fWSAvIDI7XG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSAxO1xuICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgdGhpcy5jdHguYXJjKGNlbnRlclgsIGNlbnRlclksIDMwLCAwLCAyICogTWF0aC5QSSwgZmFsc2UpO1xuICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG4gICAgICAgIHRoaXMud2FsbHMuZm9yRWFjaCh3YWxsID0+IHtcbiAgICAgICAgICAgIHdhbGwudXBkYXRlKCk7XG4gICAgICAgICAgICAvLyB3YWxsLmdhcC51cGRhdGUoKTtcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5wbGF5ZXIuZHJhdyg1KTtcblxuICAgICAgICBjb25zdCBkb1dhbGxzRXhpc3QgPSB0aGlzLndhbGxzLmxlbmd0aCA+IDA7XG4gICAgICAgIGlmKGRvV2FsbHNFeGlzdCl7XG5cbiAgICAgICAgICAgIC8vVE9ETzogd2UgY2hlY2sgZm9yIGNvbGxpc2lvbiB3aGVuIHRoZSB3YWxsIGlzIGxpdGVyYWxseSBvbnRvcCBvZiB0aGUgcGxheWVyXG4gICAgICAgICAgICAvLyBtYXliZSBmaW5kIGEgc3dlZXQgc3BvdCB3aXRoIHRoaXMucGxheWVyLnJhZGl1cyArIDEgb3Igc29tZXRoaW5nIGNhdXNlIHRoZSB0cmlhbmdsZSBoYXNcbiAgICAgICAgICAgIC8vIGEgc2l6ZSB0byBpdC5cbiAgICAgICAgICAgIGNvbnN0IGlzV2FsbE9uUGxheWVyID0gdGhpcy53YWxsc1swXS5yYWRpdXMgPD0gdGhpcy5wbGF5ZXIucmFkaXVzICsgdGhpcy5wbGF5ZXIuc2l6ZSArIDYgJiYgdGhpcy53YWxsc1swXS5yYWRpdXMgPj0gdGhpcy5wbGF5ZXIucmFkaXVzO1xuICAgICAgICAgICAgaWYgKGlzV2FsbE9uUGxheWVyKXtcbiAgICAgICAgICAgICAgICBpZighdGhpcy5jaGVja0NvbGxpc2lvbih0aGlzLnBsYXllciwgdGhpcy53YWxsc1swXS5nYXApKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWFkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMud2FsbHNbMF0uYW5nbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2hvd1Njb3JlKCk7XG4gICAgICAgIGlmKHRoaXMud2FsbHMubGVuZ3RoKSB7Y29uc29sZS5sb2codGhpcy53YWxsc1swXS5yYWRpdXMpIH07XG4gICAgICAgIC8vIHRoaXMuY3R4LnN0cm9rZSgpO1xuICAgICAgICAvLyB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcbiAgICB9XG4gICAgXG4gICAgcnVuKCl7XG4gICAgICAgIGNvbnN0IHdhbGxTcGFjZSA9IDEwMDA7XG4gICAgICAgIGlmKHRoaXMud2FsbHMubGVuZ3RoIDwgOCAmJiB0aGlzLnRpbWVyID09PSBudWxsKXtcbiAgICAgICAgICAgIHRoaXMudGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHRoaXMuYWRkV2FsbCgpLCB3YWxsU3BhY2UpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLndhbGxzLmxlbmd0aCA+IDAgJiYgdGhpcy53YWxsc1swXS5yYWRpdXMgPCAzMCkgeyB0aGlzLndhbGxzLnNoaWZ0KCl9XG4gICAgICAgIHRoaXMuaW5jcmVhc2VEaWZmaWN1bHR5KCk7XG4gICAgICAgIHRoaXMuZHJhdygpO1xuICAgICAgICB0aGlzLnVwZGF0ZVNjb3JlKCk7XG4gICAgICAgIH1cblxuICAgIHVwZGF0ZVNjb3JlKCl7XG4gICAgICAgIGlmKHRoaXMud2FsbHMubGVuZ3RoKXtcbiAgICAgICAgICAgIGlmICh0aGlzLndhbGxzWzBdLnJhZGl1cyA9PT0gMzIpIHsgXG4gICAgICAgICAgICAgICAgdGhpcy5zY29yZSArPSAxO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlQkcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG5cbiAgICBnYW1lT3Zlcigpe1xuICAgICAgICBpZih0aGlzLnNjb3JlID4gdGhpcy5oaWdoU2NvcmUpIHtcbiAgICAgICAgICAgIHRoaXMuaGlnaFNjb3JlID0gdGhpcy5zY29yZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRoZW1lU29uZy5zdG9wKCk7XG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlDYW52YXNcIik7XG4gICAgICAgIGNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAoXCIjNDg2MzljXCIpO1xuICAgICAgICB0aGlzLndhbGxzID0gW107XG4gICAgICAgIHRoaXMuc3BlZWQgPSBbLS4wMDEsIC4wMDFdO1xuICAgICAgICBsZXQgeSA9IHRoaXMuY2FudmFzLmhlaWdodCAvIDI7XG4gICAgICAgIGxldCBjb2xvciA9IFwiI0ZGMDAwMFwiO1xuICAgICAgICBsZXQgdGl0bGUgPSBcIkdhbWUgT3ZlclwiO1xuICAgICAgICBsZXQgZW50ZXIgPSBcIlRyeSBhZ2FpblwiO1xuICAgICAgICBsZXQgc2NvcmUgPSBgU2NvcmU6ICR7dGhpcy5zY29yZX1gO1xuICAgICAgICBsZXQgaGlnaFNjb3JlID0gYEhpZ2ggU2NvcmU6ICR7dGhpcy5oaWdoU2NvcmV9YDtcbiAgICAgICAgLy8gbGV0IGdhbWVPdmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgLy8gZ2FtZU92ZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJHYW1lIE92ZXJcIikpO1xuICAgICAgICAvLyBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGdhbWVPdmVyKTtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIERJTV9YLCBESU1fWSk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgICAgICB0aGlzLmN0eC5mb250ID0gXCI0OHB4IG1vbm9zcGFjZVwiO1xuICAgICAgICB0aGlzLmNlbnRlclRleHQodGl0bGUsIHkgKyA2MCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmN0eC5mb250ID0gXCIyNHB4IG1vbm9zcGFjZVwiO1xuICAgICAgICB0aGlzLmNlbnRlclRleHQoaGlnaFNjb3JlLCB5ICsgMjApO1xuICAgICAgICB0aGlzLmNlbnRlclRleHQoc2NvcmUsIHkpO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiMjRweCBtb25vc3BhY2VcIjtcbiAgICAgICAgdGhpcy5jZW50ZXJUZXh0KGVudGVyLCB5ICsgMTAwKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGUgPT4gdGhpcy5nYW1lU3RhcnQoZSkpO1xuICAgIH1cblxuICAgIGNoZWNrQ29sbGlzaW9uKHBsYXllciwgZ2FwKXtcbiAgICAgICAgbGV0IGNvbGxpc2lvbiA9IGZhbHNlO1xuICAgICAgICBsZXQgZ2FwUG9zID0gZ2FwLmdldFBvc2l0aW9uKCk7XG4gICAgICAgIGxldCBwbGF5ZXJBbmdsZSA9IHBsYXllci5nZXRQb3NpdGlvbigpICogTWF0aC5QSSAvIDE4MDtcbiAgICAgICAgbGV0IHBsYXllckxlZnQgPSAodGhpcy5jYW52YXMuaGVpZ2h0IC8gMikgKyAoKHRoaXMucmFkaXVzKSAqIE1hdGguc2luKHRoaXMuYW5nbGUgKiBNYXRoLlBJIC8gMTgwKSk7XG4gICAgICAgIGxldCBlbmRBbmdsZSA9IGdhcC5hbmdsZSAtICgyICogTWF0aC5QSSAtIGdhcC5wYXJ0aWFsQ2lyY2xlQW5nbGUpO1xuICAgICAgICBpZiAoZW5kQW5nbGUgPCAwKSB7XG4gICAgICAgICAgICBlbmRBbmdsZSArPSAyKk1hdGguUEk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZihwbGF5ZXJQb3MgPiBnYXBQb3Nbc3RhcnRdICYmIHBsYXllclBvcyA8IGdhcFBvc1tlbmRdKSBjb2xsaXNpb24gPSB0cnVlO1xuXG4gICAgICAgIC8vIHRoZSBjYXNlIHdoZW4gdGhlIGdhcCBzdHJhZGRsZXMgdGhlIGhvcml6b250YWxcblxuICAgICAgICBpZiAoZ2FwLmFuZ2xlIDwgZW5kQW5nbGUpe1xuICAgICAgICAgICAgaWYgKChwbGF5ZXJBbmdsZSAgPiBlbmRBbmdsZSBcbiAgICAgICAgICAgICAgICAmJiBwbGF5ZXJBbmdsZSA8IDIgKiBNYXRoLlBJKSBcbiAgICAgICAgICAgICAgICB8fCBwbGF5ZXJBbmdsZSA8IGdhcC5hbmdsZSAmJiBwbGF5ZXJBbmdsZSA+IDApe1xuICAgICAgICAgICAgICAgIGNvbGxpc2lvbiA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGxheWVyQW5nbGUgPCBnYXAuYW5nbGUgJiZcbiAgICAgICAgICAgIHBsYXllckFuZ2xlID4gZW5kQW5nbGUpIHtcbiAgICAgICAgICAgICAgICBjb2xsaXNpb24gPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIGlmKGNvbGxpc2lvbiA9PT0gdHJ1ZSl7XG4gICAgICAgICAgICAvLyB0aGlzLmN0eC5zdHJva2VTdHlsZSA9ICdibHVlJ1xuICAgICAgICAgICAgLy8gdGhpcy5jdHguc3Ryb2tlUmVjdChESU1fWCAvIDIgLSAyNSwgRElNX1kgLyAyIC0gMjUsIDUwLCA1MClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29sbGlzaW9uO1xuICAgIH1cblxuICAgIHN0YXJ0U2NyZWVuKCl7XG4gICAgICAgIGxldCB5ID0gdGhpcy5jYW52YXMuaGVpZ2h0IC8gMjtcbiAgICAgICAgbGV0IGNvbG9yID0gXCIjQ0MyOTMzNlwiO1xuICAgICAgICBsZXQgdGl0bGUgPSBcIkVzY2FwZSB0aGUgU2hhcGVcIjtcbiAgICAgICAgbGV0IGVudGVyID0gXCJQcmVzcyBFbnRlclwiO1xuICAgICAgICAvLyBsZXQgZW50ZXJMZW5ndGggPSB0aGlzLmN0eC5tZWFzdXJlVGV4dChlbnRlcik7XG4gICAgICAgIC8vIGxldCB0aXRsZUxlbmd0aCA9IHRoaXMuY3R4Lm1lYXN1cmVUZXh0KHRpdGxlKTtcbiAgICAgICAgLy8gbGV0IGVudGVyWCA9ICh0aGlzLmNhbnZhcy53aWR0aCAtIGVudGVyTGVuZ3RoLndpZHRoKSAvIDI7XG4gICAgICAgIC8vIGxldCB4ID0gKHRoaXMuY2FudmFzLndpZHRoIC0gdGl0bGVMZW5ndGgud2lkdGgpIC8gMjtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIERJTV9YLCBESU1fWSk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiNDhweCBtb25vc3BhY2VcIjtcbiAgICAgICAgdGhpcy5jZW50ZXJUZXh0KHRpdGxlLCB5KTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgICAgICB0aGlzLmN0eC5mb250ID0gXCIyNHB4IG1vbm9zcGFjZVwiO1xuICAgICAgICB0aGlzLmNlbnRlclRleHQoZW50ZXIsIHkgKyAzMCk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBlID0+IHRoaXMuZ2FtZVN0YXJ0KGUpKTtcbiAgICB9XG5cbiAgICBnYW1lU3RhcnQoZSl7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYoZS53aGljaCA9PT0gMTMgfHwgZS5rZXlDb2RlID09PSAxMykge1xuICAgICAgICAgICAgdGhpcy50aGVtZVNvbmcucGxheSgpO1xuICAgICAgICAgICAgdGhpcy5pbkdhbWUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5iZyA9IFwiIzQ4NjM5Y1wiXG4gICAgICAgICAgICB0aGlzLmRlYWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuc2NvcmUgPSAwO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCBHYW1lIGZyb20gJy4vZ2FtZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVWaWV3IHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGN0eCkge1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuZ2FtZSA9IG5ldyBHYW1lKHRoaXMuY2FudmFzLCB0aGlzLmN0eCk7XG4gICAgfVxuXG4gICAgXG5cblxuICAgIGFuaW1hdGUoKSB7XG4gICAgICAgIHRoaXMuZ2FtZS5pbml0KCk7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUuYmluZCh0aGlzKSk7XG4gICAgfVxufSIsIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYXAge1xuICAgIGNvbnN0cnVjdG9yKGN0eCwgeCAsIHksIHJhZGl1cywgYW5nbGUsIHJvdGF0aW9uLCB0aW1lKXtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMucmFkaXVzID0gcmFkaXVzOyBcbiAgICAgICAgdGhpcy5yb3RhdGlvbiA9IHJvdGF0aW9uO1xuICAgICAgICB0aGlzLmFuZ2xlID0gYW5nbGU7XG4gICAgICAgIHRoaXMucGFydGlhbENpcmNsZUFuZ2xlID0gMiAqIE1hdGguUEkgLSAxLjI7XG4gICAgfVxuXG4gICAgZHJhdygpe1xuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHguZ2xvYmFsQWxwaGEgPSAwLjA7XG4gICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDg7XG4gICAgICAgIHRoaXMuY3R4LmFyYyh0aGlzLngsIHRoaXMueSwgdGhpcy5yYWRpdXMsIHRoaXMuYW5nbGUsIHRoaXMucGFydGlhbENpcmNsZUFuZ2xlICsgdGhpcy5hbmdsZSwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHguZ2xvYmFsQWxwaGEgPSAxLjA7XG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgICBpZiAodGhpcy5yYWRpdXMgPiAzMCkge1xuICAgICAgICAgICAgdGhpcy5yYWRpdXMgLT0gMztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICB9XG5cbiAgICBnZXRQb3NpdGlvbigpe1xuICAgICAgIGNvbnN0IHBvc2l0aW9uID0ge1xuICAgICAgICAgICBzdGFydDogdGhpcy5hbmdsZSxcbiAgICAgICAgICAgZW5kOiB0aGlzLnBhcnRpYWxDaXJjbGVBbmdsZSArIHRoaXMuYW5nbGUsXG4gICAgICAgfVxuICAgICAgIHJldHVybiBwb3NpdGlvbjtcbiAgICB9XG5cbiAgICBnZXRQb2ludChjMSwgYzIsIHJhZGl1cywgYW5nbGUpIHtcbiAgICAgICAgcmV0dXJuIFtjMSArIE1hdGguY29zKGFuZ2xlKSAqIHJhZGl1cywgYzIgKyBNYXRoLnNpbihhbmdsZSkgKiByYWRpdXNdO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY3R4KSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5zaXplID0gNTtcbiAgICAgICAgdGhpcy5yYWRpdXMgPSA1NTtcbiAgICAgICAgdGhpcy5zcGVlZCA9IDc7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gMDtcbiAgICAgICAgdGhpcy5hbmdsZSA9IDMwO1xuICAgICAgICB0aGlzLnBsYXllclBvcyA9IFwibGVmdFwiO1xuICAgICAgICB0aGlzLmRyYXcgPSB0aGlzLmRyYXcuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBkcmF3KCkge1xuICAgICAgIFxuICAgICAgICBjb25zdCBkeCA9ICh0aGlzLmNhbnZhcy53aWR0aCAvIDIpICsgKCh0aGlzLnJhZGl1cykgKiBNYXRoLmNvcyh0aGlzLmFuZ2xlICogTWF0aC5QSSAvIDE4MCkpO1xuICAgICAgICBjb25zdCBkeSA9ICh0aGlzLmNhbnZhcy5oZWlnaHQgLyAyKSArICgodGhpcy5yYWRpdXMpICogTWF0aC5zaW4odGhpcy5hbmdsZSAqIE1hdGguUEkgLyAxODApKTtcbiAgICAgICAgdGhpcy5hbmdsZSA9IHRoaXMuYW5nbGUgKyAodGhpcy5kaXJlY3Rpb24gKiB0aGlzLnNwZWVkKTtcblxuICAgICAgICBpZih0aGlzLmFuZ2xlIDwgMCkge1xuICAgICAgICAgICAgdGhpcy5hbmdsZSA9IDM2MCAtIHRoaXMuYW5nbGU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZih0aGlzLmFuZ2xlID4gMzYwKXtcbiAgICAgICAgICAgIHRoaXMuYW5nbGUgJT0gMzYwO1xuICAgICAgICB9XG4gICAgICAgIC8vIHRoaXMuY3R4LnNhdmUoKTtcbiAgICAgICAgdGhpcy5jdHgudHJhbnNsYXRlKGR4LCBkeSk7XG4gICAgICAgIHRoaXMuY3R4LnJvdGF0ZSh0aGlzLmFuZ2xlICogTWF0aC5QSSAvIDE4MCk7XG4gICAgICAgIC8vIHRoaXMuY3R4LnJlc3RvcmUoKTtcbiAgICAgICAgdGhpcy5jdHgudHJhbnNsYXRlKC1keCwgLWR5KTtcblxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjRkZENzAwXCI7XG4gICAgICAgIHRoaXMuY3R4Lm1vdmVUbyhkeCAtIHRoaXMuc2l6ZSwgZHkgLSB0aGlzLnNpemUpO1xuICAgICAgICB0aGlzLmN0eC5saW5lVG8oZHggKyB0aGlzLnNpemUsIGR5KTtcbiAgICAgICAgdGhpcy5jdHgubGluZVRvKGR4IC0gdGhpcy5zaXplLCBkeSArIHRoaXMuc2l6ZSk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgdGhpcy5jdHgudHJhbnNsYXRlKGR4LCBkeSk7XG4gICAgICAgIHRoaXMuY3R4LnJvdGF0ZSgtdGhpcy5hbmdsZSAqIE1hdGguUEkgLyAxODApO1xuICAgICAgICB0aGlzLmN0eC50cmFuc2xhdGUoLWR4LCAtZHkpO1xuXG4gICAgICAgIFxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImR4XCIgKyBkeCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZHlcIiArIGR5KTtcbiAgICB9XG4gICAgaGFuZGxlUHJlc3MoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHN3aXRjaCAoZS5rZXkpIHtcbiAgICAgICAgICAgIC8vIGNhc2UgJ0Fycm93VXAnOlxuICAgICAgICAgICAgLy8gICAgIHRoaXMucGxheWVyUG9zID0gXCJ1cFwiO1xuICAgICAgICAgICAgLy8gICAgIGJyZWFrO1xuICAgICAgICAgICAgLy8gY2FzZSAnQXJyb3dEb3duJzpcbiAgICAgICAgICAgIC8vICAgICB0aGlzLnBsYXllclBvcyA9IFwiZG93blwiO1xuICAgICAgICAgICAgLy8gICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnQXJyb3dMZWZ0JzpcbiAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IC0xO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnQXJyb3dSaWdodCc6XG4gICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSAxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlS2V5VXAoZSl7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gMDtcbiAgICB9XG5cbiAgICBnZXRQb3NpdGlvbigpe1xuICAgICAgICByZXR1cm4gdGhpcy5hbmdsZTtcbiAgICB9XG59XG5cbiIsIlxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU291bmQge1xuICAgIGNvbnN0cnVjdG9yKHNyYyl7XG4gICAgICAgIHRoaXMuc291bmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXVkaW9cIik7XG4gICAgICAgIHRoaXMuc291bmQuc3JjID0gc3JjO1xuICAgICAgICB0aGlzLnNvdW5kLnNldEF0dHJpYnV0ZShcInByZWxvYWRcIiwgXCJhdXRvXCIpO1xuICAgICAgICB0aGlzLnNvdW5kLnNldEF0dHJpYnV0ZShcImNvbnRyb2xzXCIsIFwibm9uZVwiKTtcbiAgICAgICAgdGhpcy5zb3VuZC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5zb3VuZCk7XG4gICAgfVxuXG4gICAgcGxheSgpe1xuICAgICAgICB0aGlzLnNvdW5kLnBsYXkoKTtcbiAgICB9XG5cbiAgICBzdG9wKCl7XG4gICAgICAgIHRoaXMuc291bmQucGF1c2UoKTtcbiAgICAgICAgdGhpcy5zb3VuZC5jdXJyZW50VGltZSA9IDA7XG4gICAgfVxufVxuIiwiaW1wb3J0IEdhcCBmcm9tIFwiLi9nYXBcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2FsbCB7XG4gICAgY29uc3RydWN0b3IoY3R4LCB4LCB5LCByYWRpdXMsIGNvbG9yLCByb3RhdGlvbikge1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy5yYWRpdXMgPSByYWRpdXM7XG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICAgICAgdGhpcy50aW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIHRoaXMuYW5nbGUgPSBNYXRoLnJhbmRvbSgpICogKDIgKiBNYXRoLlBJKTtcbiAgICAgICAgdGhpcy5yb3RhdGlvbiA9IHJvdGF0aW9uO1xuICAgICAgICB0aGlzLmVuZEFuZ2xlID0gMiAqIE1hdGguUEkgLSAxLjI7XG4gICAgICAgIHRoaXMuZ2FwID0gbmV3IEdhcCh0aGlzLmN0eCwgdGhpcy54LCB0aGlzLnksIHRoaXMucmFkaXVzLCB0aGlzLmFuZ2xlLCB0aGlzLnJvdGF0aW9uLCB0aGlzLnRpbWUpO1xuICAgIH1cblxuICAgIGRyYXcoKXtcbiAgICAgICAgY29uc3QgbmV3VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICBsZXQgZGlmZiA9IG5ld1RpbWUgLSB0aGlzLnRpbWU7XG4gICAgICAgIHRoaXMudGltZSA9IG5ld1RpbWU7XG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDEyO1xuICAgICAgICB0aGlzLmN0eC5hcmModGhpcy54LCB0aGlzLnksIHRoaXMucmFkaXVzLCB0aGlzLmFuZ2xlLCB0aGlzLmVuZEFuZ2xlICsgdGhpcy5hbmdsZSwgZmFsc2UpO1xuICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgdGhpcy5hbmdsZSArPSBkaWZmICogdGhpcy5yb3RhdGlvbjtcbiAgICAgICAgdGhpcy5hbmdsZSAlPSAyICogTWF0aC5QSTtcblxuICAgICAgICB0aGlzLmdhcC5hbmdsZSArPSBkaWZmICogdGhpcy5yb3RhdGlvbjtcbiAgICAgICAgdGhpcy5nYXAuYW5nbGUgJT0gMiAqIE1hdGguUEk7XG5cbiAgICAgICAgaWYgKHRoaXMuYW5nbGUgPCAwKSB7XG4gICAgICAgICAgICB0aGlzLmFuZ2xlID0gMiAqIE1hdGguUEk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5hbmdsZSA+IDIgKiBNYXRoLlBJKSB7XG4gICAgICAgICAgICB0aGlzLmFuZ2xlICU9IDIgKiBNYXRoLlBJO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZ2FwLmFuZ2xlIDwgMCkge1xuICAgICAgICAgICAgdGhpcy5nYXAuYW5nbGUgPSAyICogTWF0aC5QSTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmdhcC5hbmdsZSA+IDIgKiBNYXRoLlBJKSB7XG4gICAgICAgICAgICB0aGlzLmdhcC5hbmdsZSAlPSAyICogTWF0aC5QSTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZSgpe1xuICAgICAgICBcbiAgICAgICAgaWYodGhpcy5yYWRpdXMgPiAzMCkge1xuICAgICAgICAgICAgdGhpcy5yYWRpdXMgLT0gMztcbiAgICAgICAgICAgIHRoaXMuZ2FwLnJhZGl1cyAtPSAzO1xuICAgICAgICB9IFxuICAgICAgICB0aGlzLmdhcC5kcmF3KCk7XG4gICAgICAgIHRoaXMuZHJhdygpO1xuICAgICAgICBcbiAgICB9XG5cbiAgICByZXZlcnNlKCl7XG4gICAgICAgIGlmKHRoaXMucmFkaXVzID09PSAyOTApe1xuICAgICAgICAgICAgdGhpcy5yb3RhdGlvbiAqPSAtMS4yO1xuICAgICAgICB9XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=