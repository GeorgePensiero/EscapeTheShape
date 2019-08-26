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
    }

    _createClass(Game, [{
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

            this.walls = [];
            var y = this.canvas.height / 2;
            var color = "#FF0000";
            var title = "Game Over";
            var enter = "Try again";
            var score = "Score: " + this.score;
            this.ctx.clearRect(0, 0, DIM_X, DIM_Y);
            this.ctx.fillStyle = color;
            this.ctx.font = "48px monospace";
            this.centerText(title, y + 30);

            this.ctx.font = "24px monospace";
            this.centerText(score, y);
            this.ctx.fillStyle = color;
            this.ctx.font = "24px monospace";
            this.centerText(enter, y + 60);

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
                this.inGame = true;
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
    function Gap(ctx, x, y, radius, angle, rotation) {
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
            this.ctx.strokeStyle = "#48639c";
            this.ctx.lineWidth = 8;
            this.ctx.arc(this.x, this.y, this.radius, this.angle, this.partialCircleAngle + this.angle, true);
            this.ctx.stroke();
            this.ctx.closePath();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qYXZhc2NyaXB0L2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2phdmFzY3JpcHQvZ2FtZV92aWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9qYXZhc2NyaXB0L2dhcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvamF2YXNjcmlwdC9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2phdmFzY3JpcHQvd2FsbC5qcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXMiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsIndpZHRoIiwiaGVpZ2h0IiwiY3R4IiwiZ2V0Q29udGV4dCIsImdhbWVWaWV3IiwiR2FtZVZpZXciLCJnYW1lIiwicGxheWVyIiwiaGFuZGxlUHJlc3MiLCJlIiwiZ2FtZVN0YXJ0IiwiaGFuZGxlS2V5VXAiLCJhbmltYXRlIiwiRElNX1giLCJESU1fWSIsIkNPTE9SX1NDSEVNRSIsIkdhbWUiLCJQbGF5ZXIiLCJ3YWxscyIsInRpbWVyIiwic2NvcmUiLCJpbkdhbWUiLCJkZWFkIiwic3RhcnRTY3JlZW4iLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicnVuIiwiZ2FtZU92ZXIiLCJzbG93Um90YXRpb25zIiwibWVkUm90YXRpb25zIiwiZmFzdFJvdGF0aW9ucyIsIndhbGwiLCJXYWxsIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwicHVzaCIsImJlZ2luUGF0aCIsImZvbnQiLCJmaWxsVGV4dCIsImNsb3NlUGF0aCIsInRleHQiLCJ5IiwibWVhc3VyZW1lbnQiLCJtZWFzdXJlVGV4dCIsIngiLCJjbGVhclJlY3QiLCJjZW50ZXJYIiwiY2VudGVyWSIsImxpbmVXaWR0aCIsInN0cm9rZVN0eWxlIiwiYXJjIiwiUEkiLCJzdHJva2UiLCJmb3JFYWNoIiwidXBkYXRlIiwiZHJhdyIsImRvV2FsbHNFeGlzdCIsImlzV2FsbE9uUGxheWVyIiwicmFkaXVzIiwic2l6ZSIsImNoZWNrQ29sbGlzaW9uIiwiZ2FwIiwic2hvd1Njb3JlIiwid2FsbFNwYWNlIiwic2V0VGltZW91dCIsImFkZFdhbGwiLCJzaGlmdCIsImNvbG9yIiwidGl0bGUiLCJlbnRlciIsImZpbGxTdHlsZSIsImNlbnRlclRleHQiLCJjb2xsaXNpb24iLCJnYXBQb3MiLCJnZXRQb3NpdGlvbiIsInBsYXllckFuZ2xlIiwiZW5kQW5nbGUiLCJhbmdsZSIsInBhcnRpYWxDaXJjbGVBbmdsZSIsInVwZGF0ZVNjb3JlIiwicHJldmVudERlZmF1bHQiLCJ3aGljaCIsImtleUNvZGUiLCJpbml0IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYmluZCIsIkdhcCIsInJvdGF0aW9uIiwicG9zaXRpb24iLCJzdGFydCIsImVuZCIsImMxIiwiYzIiLCJjb3MiLCJzaW4iLCJzcGVlZCIsImRpcmVjdGlvbiIsInBsYXllclBvcyIsImR4IiwiZHkiLCJ0cmFuc2xhdGUiLCJyb3RhdGUiLCJtb3ZlVG8iLCJsaW5lVG8iLCJmaWxsIiwia2V5IiwidGltZSIsIkRhdGUiLCJnZXRUaW1lIiwibmV3VGltZSIsImRpZmYiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hB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SUFBSTlDLEtBQUtvQixFQUF2Qjs7QUFFQSxpQkFBS1UsR0FBTCxDQUFTZ0IsS0FBVCxJQUFrQmlDLE9BQU8sS0FBS3ZCLFFBQTlCO0FBQ0EsaUJBQUsxQixHQUFMLENBQVNnQixLQUFULElBQWtCLElBQUk5QyxLQUFLb0IsRUFBM0I7O0FBRUEsZ0JBQUksS0FBSzBCLEtBQUwsR0FBYSxDQUFqQixFQUFvQjtBQUNoQixxQkFBS0EsS0FBTCxHQUFhLElBQUk5QyxLQUFLb0IsRUFBdEI7QUFDSDs7QUFFRCxnQkFBSSxLQUFLMEIsS0FBTCxHQUFhLElBQUk5QyxLQUFLb0IsRUFBMUIsRUFBOEI7QUFDMUIscUJBQUswQixLQUFMLElBQWMsSUFBSTlDLEtBQUtvQixFQUF2QjtBQUNIOztBQUVELGdCQUFJLEtBQUtVLEdBQUwsQ0FBU2dCLEtBQVQsR0FBaUIsQ0FBckIsRUFBd0I7QUFDcEIscUJBQUtoQixHQUFMLENBQVNnQixLQUFULEdBQWlCLElBQUk5QyxLQUFLb0IsRUFBMUI7QUFDSDs7QUFFRCxnQkFBSSxLQUFLVSxHQUFMLENBQVNnQixLQUFULEdBQWlCLElBQUk5QyxLQUFLb0IsRUFBOUIsRUFBa0M7QUFDOUIscUJBQUtVLEdBQUwsQ0FBU2dCLEtBQVQsSUFBa0IsSUFBSTlDLEtBQUtvQixFQUEzQjtBQUNIO0FBQ0o7OztpQ0FFTztBQUNKLGdCQUFHLEtBQUtPLE1BQUwsR0FBYyxFQUFqQixFQUFxQjtBQUNqQixxQkFBS0EsTUFBTCxJQUFlLENBQWY7QUFDQSxxQkFBS0csR0FBTCxDQUFTSCxNQUFULElBQW1CLENBQW5CO0FBQ0g7QUFDRCxpQkFBS0csR0FBTCxDQUFTTixJQUFUO0FBQ0EsaUJBQUtBLElBQUw7QUFDSDs7Ozs7O2tCQXZEZ0J6QixJIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFBsYXllciBmcm9tICcuL2phdmFzY3JpcHQvcGxheWVyJztcbmltcG9ydCBHYW1lIGZyb20gJy4vamF2YXNjcmlwdC9nYW1lJztcbmltcG9ydCBHYW1lVmlldyBmcm9tICcuL2phdmFzY3JpcHQvZ2FtZV92aWV3JztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiY2FudmFzXCIpWzBdO1xuICAgIGNhbnZhcy53aWR0aCA9IDEwMDA7XG4gICAgY2FudmFzLmhlaWdodCA9IDYwMDtcblxuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cblxuICAgIGNvbnN0IGdhbWVWaWV3ID0gbmV3IEdhbWVWaWV3KGNhbnZhcywgY3R4KTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZSA9PiBnYW1lVmlldy5nYW1lLnBsYXllci5oYW5kbGVQcmVzcyhlKSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGUgPT4gZ2FtZVZpZXcuZ2FtZS5nYW1lU3RhcnQoZSkpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZSA9PiBnYW1lVmlldy5nYW1lLnBsYXllci5oYW5kbGVLZXlVcChlKSk7XG4gICAgZ2FtZVZpZXcuYW5pbWF0ZSgpO1xufSk7XG5cblxuXG4iLCJpbXBvcnQgUGxheWVyIGZyb20gXCIuL3BsYXllclwiO1xuaW1wb3J0IFdhbGwgZnJvbSBcIi4vd2FsbFwiO1xuXG5jb25zdCBESU1fWCA9IDEwMDA7XG5jb25zdCBESU1fWSA9IDYwMDtcbmNvbnN0IENPTE9SX1NDSEVNRSA9IFtcIiNDQzI5MzM2XCIsIFwiRUJCQUI5XCIsIFwiIzM4ODY5N1wiLCBcIiNCRkZGRTFcIl1cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY3R4KSB7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyKHRoaXMuY2FudmFzLCB0aGlzLmN0eClcbiAgICAgICAgdGhpcy53YWxscyA9IFtdO1xuICAgICAgICB0aGlzLnRpbWVyID0gbnVsbDtcbiAgICAgICAgdGhpcy5zY29yZSA9IDA7XG4gICAgICAgIHRoaXMuaW5HYW1lID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZGVhZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGluaXQoKXtcbiAgICAgICAgaWYoIXRoaXMuaW5HYW1lKXtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRTY3JlZW4oKTtcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuaW5HYW1lICYmICF0aGlzLmRlYWQpe1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGUgPT4gdGhpcy5nYW1lU3RhcnQoZSkpO1xuICAgICAgICAgICAgdGhpcy5ydW4oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXIoKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgYWRkV2FsbCgpe1xuICAgICAgIGNvbnN0IHNsb3dSb3RhdGlvbnMgPSBbLS4wMDEsIC4wMDFdO1xuICAgICAgIGNvbnN0IG1lZFJvdGF0aW9ucyA9IFstLjAwMiwgLjAwMl07XG4gICAgICAgY29uc3QgZmFzdFJvdGF0aW9ucyA9IFstLjAwMywgLjAwM107XG4gICAgICAgaWYgKHRoaXMuc2NvcmUgPCAxMCl7XG4gICAgICAgIGNvbnN0IHdhbGwgPSBuZXcgV2FsbCh0aGlzLmN0eCwgdGhpcy5jYW52YXMud2lkdGggLyAyLCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyLCB0aGlzLmNhbnZhcy53aWR0aCAvIDIsIFwiIzM4ODY5N1wiLCBzbG93Um90YXRpb25zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHNsb3dSb3RhdGlvbnMubGVuZ3RoKV0pXG4gICAgICAgIHRoaXMud2FsbHMucHVzaCh3YWxsKTtcbiAgICAgICAgdGhpcy50aW1lciA9IG51bGw7XG4gICAgICAgfSBlbHNlIGlmICh0aGlzLnNjb3JlIDwgMjApe1xuICAgICAgICAgICAgY29uc3Qgd2FsbCA9IG5ldyBXYWxsKHRoaXMuY3R4LCB0aGlzLmNhbnZhcy53aWR0aCAvIDIsIHRoaXMuY2FudmFzLmhlaWdodCAvIDIsIHRoaXMuY2FudmFzLndpZHRoIC8gMiwgXCIjMzg4Njk3XCIsIG1lZFJvdGF0aW9uc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtZWRSb3RhdGlvbnMubGVuZ3RoKV0pXG4gICAgICAgICAgICB0aGlzLndhbGxzLnB1c2god2FsbCk7XG4gICAgICAgICAgICB0aGlzLnRpbWVyID0gbnVsbDtcbiAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3Qgd2FsbCA9IG5ldyBXYWxsKHRoaXMuY3R4LCB0aGlzLmNhbnZhcy53aWR0aCAvIDIsIHRoaXMuY2FudmFzLmhlaWdodCAvIDIsIHRoaXMuY2FudmFzLndpZHRoIC8gMiwgXCIjMzg4Njk3XCIsIGZhc3RSb3RhdGlvbnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZmFzdFJvdGF0aW9ucy5sZW5ndGgpXSlcbiAgICAgICAgICAgIHRoaXMud2FsbHMucHVzaCh3YWxsKTtcbiAgICAgICAgICAgIHRoaXMudGltZXIgPSBudWxsO1xuICAgICAgIH1cbiAgICB9XG5cbiAgICBhbGxXYWxscygpe1xuICAgICAgICByZXR1cm4gdGhpcy53YWxscztcbiAgICB9XG5cbiAgICBzaG93U2NvcmUoKXtcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcIjIwcHggR2VvcmdpYVwiO1xuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIlNjb3JlOiBcIiArIHRoaXMuc2NvcmUsIHRoaXMuY2FudmFzLndpZHRoIC0gMTAwLCAzMCk7XG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuICAgIH1cblxuICAgIGNlbnRlclRleHQodGV4dCwgeSl7XG4gICAgICAgIGNvbnN0IG1lYXN1cmVtZW50ID0gdGhpcy5jdHgubWVhc3VyZVRleHQodGV4dCk7XG4gICAgICAgIGNvbnN0IHggPSAodGhpcy5jYW52YXMud2lkdGggLSBtZWFzdXJlbWVudC53aWR0aCkgLyAyO1xuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dCh0ZXh0LCB4LCB5KTtcbiAgICB9XG4gICAgXG4gICAgZHJhdygpIHtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIERJTV9YLCBESU1fWSk7XG4gICAgICAgIGNvbnN0IGNlbnRlclggPSBESU1fWCAvIDI7XG4gICAgICAgIGNvbnN0IGNlbnRlclkgPSBESU1fWSAvIDI7XG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSAxO1xuICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIlxuICAgICAgICB0aGlzLmN0eC5hcmMoY2VudGVyWCwgY2VudGVyWSwgMzAsIDAsIDIgKiBNYXRoLlBJLCBmYWxzZSk7XG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgdGhpcy53YWxscy5mb3JFYWNoKHdhbGwgPT4ge1xuICAgICAgICAgICAgd2FsbC51cGRhdGUoKTtcbiAgICAgICAgICAgIC8vIHdhbGwuZ2FwLnVwZGF0ZSgpO1xuICAgICAgICB9KVxuICAgICAgICB0aGlzLnBsYXllci5kcmF3KDUpO1xuXG4gICAgICAgIGNvbnN0IGRvV2FsbHNFeGlzdCA9IHRoaXMud2FsbHMubGVuZ3RoID4gMDtcbiAgICAgICAgaWYoZG9XYWxsc0V4aXN0KXtcblxuICAgICAgICAgICAgLy9UT0RPOiB3ZSBjaGVjayBmb3IgY29sbGlzaW9uIHdoZW4gdGhlIHdhbGwgaXMgbGl0ZXJhbGx5IG9udG9wIG9mIHRoZSBwbGF5ZXJcbiAgICAgICAgICAgIC8vIG1heWJlIGZpbmQgYSBzd2VldCBzcG90IHdpdGggdGhpcy5wbGF5ZXIucmFkaXVzICsgMSBvciBzb21ldGhpbmcgY2F1c2UgdGhlIHRyaWFuZ2xlIGhhc1xuICAgICAgICAgICAgLy8gYSBzaXplIHRvIGl0LlxuICAgICAgICAgICAgY29uc3QgaXNXYWxsT25QbGF5ZXIgPSB0aGlzLndhbGxzWzBdLnJhZGl1cyA8PSB0aGlzLnBsYXllci5yYWRpdXMgKyB0aGlzLnBsYXllci5zaXplICYmIHRoaXMud2FsbHNbMF0ucmFkaXVzID49IHRoaXMucGxheWVyLnJhZGl1cyArIHRoaXMucGxheWVyLnNpemUgLSAxO1xuICAgICAgICAgICAgaWYgKGlzV2FsbE9uUGxheWVyKXtcbiAgICAgICAgICAgICAgICBpZighdGhpcy5jaGVja0NvbGxpc2lvbih0aGlzLnBsYXllciwgdGhpcy53YWxsc1swXS5nYXApKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWFkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMud2FsbHNbMF0uYW5nbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2hvd1Njb3JlKCk7XG4gICAgICAgIC8vIHRoaXMuY3R4LnN0cm9rZSgpO1xuICAgICAgICAvLyB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcbiAgICB9XG5cbiAgICBydW4oKXtcbiAgICAgICAgY29uc3Qgd2FsbFNwYWNlID0gMTAwMDtcbiAgICAgICAgaWYodGhpcy53YWxscy5sZW5ndGggPCA4ICYmIHRoaXMudGltZXIgPT09IG51bGwpe1xuICAgICAgICAgICAgdGhpcy50aW1lciA9IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5hZGRXYWxsKCksIHdhbGxTcGFjZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMud2FsbHMubGVuZ3RoID4gMCAmJiB0aGlzLndhbGxzWzBdLnJhZGl1cyA8IDMwKSB7IHRoaXMud2FsbHMuc2hpZnQoKX1cbiAgICAgICAgdGhpcy5kcmF3KCk7XG4gICAgICAgIH1cblxuICAgIHVwZGF0ZVNjb3JlKCl7XG4gICAgICAgIHRoaXMuc2NvcmUgKz0gMTtcbiAgICB9XG5cbiAgICBnYW1lT3Zlcigpe1xuICAgICAgICB0aGlzLndhbGxzID0gW107XG4gICAgICAgIGxldCB5ID0gdGhpcy5jYW52YXMuaGVpZ2h0IC8gMjtcbiAgICAgICAgbGV0IGNvbG9yID0gXCIjRkYwMDAwXCI7XG4gICAgICAgIGxldCB0aXRsZSA9IFwiR2FtZSBPdmVyXCI7XG4gICAgICAgIGxldCBlbnRlciA9IFwiVHJ5IGFnYWluXCI7XG4gICAgICAgIGxldCBzY29yZSA9IGBTY29yZTogJHt0aGlzLnNjb3JlfWA7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCBESU1fWCwgRElNX1kpO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiNDhweCBtb25vc3BhY2VcIjtcbiAgICAgICAgdGhpcy5jZW50ZXJUZXh0KHRpdGxlLCB5ICsgMzApO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiMjRweCBtb25vc3BhY2VcIjtcbiAgICAgICAgdGhpcy5jZW50ZXJUZXh0KHNjb3JlLCB5KTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gY29sb3I7XG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcIjI0cHggbW9ub3NwYWNlXCI7XG4gICAgICAgIHRoaXMuY2VudGVyVGV4dChlbnRlciwgeSArIDYwKTtcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZSA9PiB0aGlzLmdhbWVTdGFydChlKSk7XG4gICAgfVxuXG4gICAgY2hlY2tDb2xsaXNpb24ocGxheWVyLCBnYXApe1xuICAgICAgICBsZXQgY29sbGlzaW9uID0gZmFsc2U7XG4gICAgICAgIGxldCBnYXBQb3MgPSBnYXAuZ2V0UG9zaXRpb24oKTtcbiAgICAgICAgbGV0IHBsYXllckFuZ2xlID0gcGxheWVyLmdldFBvc2l0aW9uKCkgKiBNYXRoLlBJIC8gMTgwO1xuICAgICAgICBsZXQgZW5kQW5nbGUgPSBnYXAuYW5nbGUgLSAoMiAqIE1hdGguUEkgLSBnYXAucGFydGlhbENpcmNsZUFuZ2xlKTtcbiAgICAgICAgaWYgKGVuZEFuZ2xlIDwgMCkge1xuICAgICAgICAgICAgZW5kQW5nbGUgKz0gMipNYXRoLlBJO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYocGxheWVyUG9zID4gZ2FwUG9zW3N0YXJ0XSAmJiBwbGF5ZXJQb3MgPCBnYXBQb3NbZW5kXSkgY29sbGlzaW9uID0gdHJ1ZTtcblxuICAgICAgICAvLyB0aGUgY2FzZSB3aGVuIHRoZSBnYXAgc3RyYWRkbGVzIHRoZSBob3Jpem9udGFsXG5cbiAgICAgICAgaWYgKGdhcC5hbmdsZSA8IGVuZEFuZ2xlKXtcbiAgICAgICAgICAgIGlmICgocGxheWVyQW5nbGUgID4gZW5kQW5nbGUgXG4gICAgICAgICAgICAgICAgJiYgcGxheWVyQW5nbGUgPCAyICogTWF0aC5QSSkgXG4gICAgICAgICAgICAgICAgfHwgcGxheWVyQW5nbGUgPCBnYXAuYW5nbGUgJiYgcGxheWVyQW5nbGUgPiAwKXtcbiAgICAgICAgICAgICAgICBjb2xsaXNpb24gPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBsYXllckFuZ2xlIDwgZ2FwLmFuZ2xlICYmXG4gICAgICAgICAgICBwbGF5ZXJBbmdsZSA+IGVuZEFuZ2xlKSB7XG4gICAgICAgICAgICAgICAgY29sbGlzaW9uID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICBpZihjb2xsaXNpb24gPT09IHRydWUpe1xuICAgICAgICAgICAgLy8gdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAnYmx1ZSdcbiAgICAgICAgICAgIC8vIHRoaXMuY3R4LnN0cm9rZVJlY3QoRElNX1ggLyAyIC0gMjUsIERJTV9ZIC8gMiAtIDI1LCA1MCwgNTApXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNjb3JlKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbGxpc2lvbjtcbiAgICB9XG5cbiAgICBzdGFydFNjcmVlbigpe1xuICAgICAgICBsZXQgeSA9IHRoaXMuY2FudmFzLmhlaWdodCAvIDI7XG4gICAgICAgIGxldCBjb2xvciA9IFwiI0NDMjkzMzZcIjtcbiAgICAgICAgbGV0IHRpdGxlID0gXCJFc2NhcGUgdGhlIFNoYXBlXCI7XG4gICAgICAgIGxldCBlbnRlciA9IFwiUHJlc3MgRW50ZXJcIjtcbiAgICAgICAgLy8gbGV0IGVudGVyTGVuZ3RoID0gdGhpcy5jdHgubWVhc3VyZVRleHQoZW50ZXIpO1xuICAgICAgICAvLyBsZXQgdGl0bGVMZW5ndGggPSB0aGlzLmN0eC5tZWFzdXJlVGV4dCh0aXRsZSk7XG4gICAgICAgIC8vIGxldCBlbnRlclggPSAodGhpcy5jYW52YXMud2lkdGggLSBlbnRlckxlbmd0aC53aWR0aCkgLyAyO1xuICAgICAgICAvLyBsZXQgeCA9ICh0aGlzLmNhbnZhcy53aWR0aCAtIHRpdGxlTGVuZ3RoLndpZHRoKSAvIDI7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCBESU1fWCwgRElNX1kpO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcIjQ4cHggbW9ub3NwYWNlXCI7XG4gICAgICAgIHRoaXMuY2VudGVyVGV4dCh0aXRsZSwgeSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiMjRweCBtb25vc3BhY2VcIjtcbiAgICAgICAgdGhpcy5jZW50ZXJUZXh0KGVudGVyLCB5ICsgMzApO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZSA9PiB0aGlzLmdhbWVTdGFydChlKSk7XG4gICAgfVxuXG4gICAgZ2FtZVN0YXJ0KGUpe1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmKGUud2hpY2ggPT09IDEzIHx8IGUua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgICAgIHRoaXMuaW5HYW1lID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuZGVhZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5zY29yZSA9IDA7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IEdhbWUgZnJvbSAnLi9nYW1lJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVZpZXcge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY3R4KSB7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5nYW1lID0gbmV3IEdhbWUodGhpcy5jYW52YXMsIHRoaXMuY3R4KTtcbiAgICB9XG5cblxuICAgIGFuaW1hdGUoKSB7XG4gICAgICAgIHRoaXMuZ2FtZS5pbml0KCk7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUuYmluZCh0aGlzKSk7XG4gICAgfVxufSIsIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYXAge1xuICAgIGNvbnN0cnVjdG9yKGN0eCwgeCAsIHksIHJhZGl1cywgYW5nbGUsIHJvdGF0aW9uKXtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMucmFkaXVzID0gcmFkaXVzOyBcbiAgICAgICAgdGhpcy5yb3RhdGlvbiA9IHJvdGF0aW9uO1xuICAgICAgICB0aGlzLmFuZ2xlID0gYW5nbGU7XG4gICAgICAgIHRoaXMucGFydGlhbENpcmNsZUFuZ2xlID0gMiAqIE1hdGguUEkgLSAxLjI7XG4gICAgfVxuXG4gICAgZHJhdygpe1xuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSBcIiM0ODYzOWNcIlxuICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSA4O1xuICAgICAgICB0aGlzLmN0eC5hcmModGhpcy54LCB0aGlzLnksIHRoaXMucmFkaXVzLCB0aGlzLmFuZ2xlLCB0aGlzLnBhcnRpYWxDaXJjbGVBbmdsZSArIHRoaXMuYW5nbGUsIHRydWUpO1xuICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgICBpZiAodGhpcy5yYWRpdXMgPiAzMCkge1xuICAgICAgICAgICAgdGhpcy5yYWRpdXMgLT0gMztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICB9XG5cbiAgICBnZXRQb3NpdGlvbigpe1xuICAgICAgIGNvbnN0IHBvc2l0aW9uID0ge1xuICAgICAgICAgICBzdGFydDogdGhpcy5hbmdsZSxcbiAgICAgICAgICAgZW5kOiB0aGlzLnBhcnRpYWxDaXJjbGVBbmdsZSArIHRoaXMuYW5nbGUsXG4gICAgICAgfVxuICAgICAgIHJldHVybiBwb3NpdGlvbjtcbiAgICB9XG5cbiAgICBnZXRQb2ludChjMSwgYzIsIHJhZGl1cywgYW5nbGUpIHtcbiAgICAgICAgcmV0dXJuIFtjMSArIE1hdGguY29zKGFuZ2xlKSAqIHJhZGl1cywgYzIgKyBNYXRoLnNpbihhbmdsZSkgKiByYWRpdXNdO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY3R4KSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5zaXplID0gNTtcbiAgICAgICAgdGhpcy5yYWRpdXMgPSA1NTtcbiAgICAgICAgdGhpcy5zcGVlZCA9IDc7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gMDtcbiAgICAgICAgdGhpcy5hbmdsZSA9IDMwO1xuICAgICAgICB0aGlzLnBsYXllclBvcyA9IFwibGVmdFwiO1xuICAgICAgICB0aGlzLmRyYXcgPSB0aGlzLmRyYXcuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBkcmF3KCkge1xuICAgICAgICAvLyBzd2l0Y2ggKHRoaXMucGxheWVyUG9zKSB7XG4gICAgICAgIC8vICAgICBjYXNlIFwibGVmdFwiOlxuICAgICAgICAvLyAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuY3R4Lm1vdmVUbyh0aGlzLmNhbnZhcy53aWR0aCAvIDIgLSAzMCwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMiArIDUpO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyh0aGlzLmNhbnZhcy53aWR0aCAvIDIgLSA0MCwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMik7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5jdHgubGluZVRvKHRoaXMuY2FudmFzLndpZHRoIC8gMiAtIDMwLCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyIC0gNSk7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICAvLyAgICAgICAgIGJyZWFrO1xuICAgICAgICAvLyAgICAgY2FzZSBcInVwXCI6XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5jdHgubW92ZVRvKHRoaXMuY2FudmFzLndpZHRoIC8gMiAtIDUsIHRoaXMuY2FudmFzLmhlaWdodCAvIDIgLSAzMCk7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5jdHgubGluZVRvKHRoaXMuY2FudmFzLndpZHRoIC8gMiwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMiAtIDQwKTtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmN0eC5saW5lVG8odGhpcy5jYW52YXMud2lkdGggLyAyICsgNSwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMiAtIDMwKTtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgIC8vICAgICAgICAgYnJlYWs7XG4gICAgICAgIC8vICAgICBjYXNlIFwicmlnaHRcIjpcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmN0eC5tb3ZlVG8odGhpcy5jYW52YXMud2lkdGggLyAyICsgMzAsIHRoaXMuY2FudmFzLmhlaWdodCAvIDIgKyA1KTtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmN0eC5saW5lVG8odGhpcy5jYW52YXMud2lkdGggLyAyICsgNDAsIHRoaXMuY2FudmFzLmhlaWdodCAvIDIpO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyh0aGlzLmNhbnZhcy53aWR0aCAvIDIgKyAzMCwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMiAtIDUpO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgLy8gICAgICAgICBicmVhaztcbiAgICAgICAgLy8gICAgIGNhc2UgXCJkb3duXCI6XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5jdHgubW92ZVRvKHRoaXMuY2FudmFzLndpZHRoIC8gMiAtIDUsIHRoaXMuY2FudmFzLmhlaWdodCAvIDIgKyAzMCk7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5jdHgubGluZVRvKHRoaXMuY2FudmFzLndpZHRoIC8gMiwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMiArIDQwKTtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmN0eC5saW5lVG8odGhpcy5jYW52YXMud2lkdGggLyAyICsgNSwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMiArIDMwKTtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgIC8vICAgICAgICAgYnJlYWs7XG4gICAgICAgIC8vICAgICBkZWZhdWx0OlxuICAgICAgICAvLyAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICBjb25zdCBkeCA9ICh0aGlzLmNhbnZhcy53aWR0aCAvIDIpICsgKCh0aGlzLnJhZGl1cykgKiBNYXRoLmNvcyh0aGlzLmFuZ2xlICogTWF0aC5QSSAvIDE4MCkpO1xuICAgICAgICBjb25zdCBkeSA9ICh0aGlzLmNhbnZhcy5oZWlnaHQgLyAyKSArICgodGhpcy5yYWRpdXMpICogTWF0aC5zaW4odGhpcy5hbmdsZSAqIE1hdGguUEkgLyAxODApKTtcbiAgICAgICAgdGhpcy5hbmdsZSA9IHRoaXMuYW5nbGUgKyAodGhpcy5kaXJlY3Rpb24gKiB0aGlzLnNwZWVkKTtcblxuICAgICAgICBpZih0aGlzLmFuZ2xlIDwgMCkge1xuICAgICAgICAgICAgdGhpcy5hbmdsZSA9IDM2MCAtIHRoaXMuYW5nbGU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZih0aGlzLmFuZ2xlID4gMzYwKXtcbiAgICAgICAgICAgIHRoaXMuYW5nbGUgJT0gMzYwO1xuICAgICAgICB9XG4gICAgICAgIC8vIHRoaXMuY3R4LnNhdmUoKTtcbiAgICAgICAgdGhpcy5jdHgudHJhbnNsYXRlKGR4LCBkeSk7XG4gICAgICAgIHRoaXMuY3R4LnJvdGF0ZSh0aGlzLmFuZ2xlICogTWF0aC5QSSAvIDE4MCk7XG4gICAgICAgIC8vIHRoaXMuY3R4LnJlc3RvcmUoKTtcbiAgICAgICAgdGhpcy5jdHgudHJhbnNsYXRlKC1keCwgLWR5KTtcblxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICB0aGlzLmN0eC5tb3ZlVG8oZHggLSB0aGlzLnNpemUsIGR5IC0gdGhpcy5zaXplKTtcbiAgICAgICAgdGhpcy5jdHgubGluZVRvKGR4ICsgdGhpcy5zaXplLCBkeSk7XG4gICAgICAgIHRoaXMuY3R4LmxpbmVUbyhkeCAtIHRoaXMuc2l6ZSwgZHkgKyB0aGlzLnNpemUpO1xuICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgIHRoaXMuY3R4LnRyYW5zbGF0ZShkeCwgZHkpO1xuICAgICAgICB0aGlzLmN0eC5yb3RhdGUoLXRoaXMuYW5nbGUgKiBNYXRoLlBJIC8gMTgwKTtcbiAgICAgICAgdGhpcy5jdHgudHJhbnNsYXRlKC1keCwgLWR5KTtcblxuICAgICAgICBcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJkeFwiICsgZHgpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImR5XCIgKyBkeSk7XG4gICAgfVxuICAgIGhhbmRsZVByZXNzKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBzd2l0Y2ggKGUua2V5KSB7XG4gICAgICAgICAgICAvLyBjYXNlICdBcnJvd1VwJzpcbiAgICAgICAgICAgIC8vICAgICB0aGlzLnBsYXllclBvcyA9IFwidXBcIjtcbiAgICAgICAgICAgIC8vICAgICBicmVhaztcbiAgICAgICAgICAgIC8vIGNhc2UgJ0Fycm93RG93bic6XG4gICAgICAgICAgICAvLyAgICAgdGhpcy5wbGF5ZXJQb3MgPSBcImRvd25cIjtcbiAgICAgICAgICAgIC8vICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0Fycm93TGVmdCc6XG4gICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSAtMTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0Fycm93UmlnaHQnOlxuICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uID0gMTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZUtleVVwKGUpe1xuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IDA7XG4gICAgfVxuXG4gICAgZ2V0UG9zaXRpb24oKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuYW5nbGU7XG4gICAgfVxufVxuXG4iLCJpbXBvcnQgR2FwIGZyb20gXCIuL2dhcFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXYWxsIHtcbiAgICBjb25zdHJ1Y3RvcihjdHgsIHgsIHksIHJhZGl1cywgY29sb3IsIHJvdGF0aW9uKSB7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cztcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgICAgICB0aGlzLnRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgdGhpcy5hbmdsZSA9IE1hdGgucmFuZG9tKCkgKiAoMiAqIE1hdGguUEkpO1xuICAgICAgICB0aGlzLnJvdGF0aW9uID0gcm90YXRpb247XG4gICAgICAgIHRoaXMuZW5kQW5nbGUgPSAyICogTWF0aC5QSSAtIDEuMjtcbiAgICAgICAgdGhpcy5nYXAgPSBuZXcgR2FwKHRoaXMuY3R4LCB0aGlzLngsIHRoaXMueSwgdGhpcy5yYWRpdXMsIHRoaXMuYW5nbGUsIHRoaXMucm90YXRpb24sIHRoaXMudGltZSk7XG4gICAgfVxuXG4gICAgZHJhdygpe1xuICAgICAgICBjb25zdCBuZXdUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIGxldCBkaWZmID0gbmV3VGltZSAtIHRoaXMudGltZTtcbiAgICAgICAgdGhpcy50aW1lID0gbmV3VGltZTtcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gODtcbiAgICAgICAgdGhpcy5jdHguYXJjKHRoaXMueCwgdGhpcy55LCB0aGlzLnJhZGl1cywgdGhpcy5hbmdsZSwgdGhpcy5lbmRBbmdsZSArIHRoaXMuYW5nbGUsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgIHRoaXMuYW5nbGUgKz0gZGlmZiAqIHRoaXMucm90YXRpb247XG4gICAgICAgIHRoaXMuYW5nbGUgJT0gMiAqIE1hdGguUEk7XG5cbiAgICAgICAgdGhpcy5nYXAuYW5nbGUgKz0gZGlmZiAqIHRoaXMucm90YXRpb247XG4gICAgICAgIHRoaXMuZ2FwLmFuZ2xlICU9IDIgKiBNYXRoLlBJO1xuXG4gICAgICAgIGlmICh0aGlzLmFuZ2xlIDwgMCkge1xuICAgICAgICAgICAgdGhpcy5hbmdsZSA9IDIgKiBNYXRoLlBJO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuYW5nbGUgPiAyICogTWF0aC5QSSkge1xuICAgICAgICAgICAgdGhpcy5hbmdsZSAlPSAyICogTWF0aC5QSTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmdhcC5hbmdsZSA8IDApIHtcbiAgICAgICAgICAgIHRoaXMuZ2FwLmFuZ2xlID0gMiAqIE1hdGguUEk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5nYXAuYW5nbGUgPiAyICogTWF0aC5QSSkge1xuICAgICAgICAgICAgdGhpcy5nYXAuYW5nbGUgJT0gMiAqIE1hdGguUEk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGUoKXtcbiAgICAgICAgaWYodGhpcy5yYWRpdXMgPiAzMCkge1xuICAgICAgICAgICAgdGhpcy5yYWRpdXMgLT0gMztcbiAgICAgICAgICAgIHRoaXMuZ2FwLnJhZGl1cyAtPSAzO1xuICAgICAgICB9IFxuICAgICAgICB0aGlzLmdhcC5kcmF3KCk7XG4gICAgICAgIHRoaXMuZHJhdygpO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9