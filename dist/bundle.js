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
            // this.ctx.beginPath();
            // this.ctx.lineWidth = 1;
            // this.ctx.strokeStyle = "black"
            // // this.ctx.arc(centerX, centerY, 30, 0, 2 * Math.PI, false);
            // this.ctx.stroke();
            // this.ctx.closePath();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qYXZhc2NyaXB0L2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2phdmFzY3JpcHQvZ2FtZV92aWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9qYXZhc2NyaXB0L2dhcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvamF2YXNjcmlwdC9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2phdmFzY3JpcHQvd2FsbC5qcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXMiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsIndpZHRoIiwiaGVpZ2h0IiwiY3R4IiwiZ2V0Q29udGV4dCIsImdhbWVWaWV3IiwiR2FtZVZpZXciLCJnYW1lIiwicGxheWVyIiwiaGFuZGxlUHJlc3MiLCJlIiwiZ2FtZVN0YXJ0IiwiaGFuZGxlS2V5VXAiLCJhbmltYXRlIiwiRElNX1giLCJESU1fWSIsIkNPTE9SX1NDSEVNRSIsIkdhbWUiLCJQbGF5ZXIiLCJ3YWxscyIsInRpbWVyIiwic2NvcmUiLCJpbkdhbWUiLCJkZWFkIiwic3RhcnRTY3JlZW4iLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicnVuIiwiZ2FtZU92ZXIiLCJzbG93Um90YXRpb25zIiwibWVkUm90YXRpb25zIiwiZmFzdFJvdGF0aW9ucyIsIndhbGwiLCJXYWxsIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwicHVzaCIsImJlZ2luUGF0aCIsImZvbnQiLCJmaWxsVGV4dCIsImNsb3NlUGF0aCIsInRleHQiLCJ5IiwibWVhc3VyZW1lbnQiLCJtZWFzdXJlVGV4dCIsIngiLCJjbGVhclJlY3QiLCJjZW50ZXJYIiwiY2VudGVyWSIsImZvckVhY2giLCJ1cGRhdGUiLCJkcmF3IiwiZG9XYWxsc0V4aXN0IiwiaXNXYWxsT25QbGF5ZXIiLCJyYWRpdXMiLCJzaXplIiwiY2hlY2tDb2xsaXNpb24iLCJnYXAiLCJzaG93U2NvcmUiLCJ3YWxsU3BhY2UiLCJzZXRUaW1lb3V0IiwiYWRkV2FsbCIsInNoaWZ0IiwiY29sb3IiLCJ0aXRsZSIsImVudGVyIiwiZmlsbFN0eWxlIiwiY2VudGVyVGV4dCIsImNvbGxpc2lvbiIsImdhcFBvcyIsImdldFBvc2l0aW9uIiwicGxheWVyQW5nbGUiLCJQSSIsImVuZEFuZ2xlIiwiYW5nbGUiLCJwYXJ0aWFsQ2lyY2xlQW5nbGUiLCJ1cGRhdGVTY29yZSIsInByZXZlbnREZWZhdWx0Iiwid2hpY2giLCJrZXlDb2RlIiwiaW5pdCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImJpbmQiLCJHYXAiLCJyb3RhdGlvbiIsInN0cm9rZVN0eWxlIiwibGluZVdpZHRoIiwiYXJjIiwic3Ryb2tlIiwicG9zaXRpb24iLCJzdGFydCIsImVuZCIsImMxIiwiYzIiLCJjb3MiLCJzaW4iLCJzcGVlZCIsImRpcmVjdGlvbiIsInBsYXllclBvcyIsImR4IiwiZHkiLCJ0cmFuc2xhdGUiLCJyb3RhdGUiLCJtb3ZlVG8iLCJsaW5lVG8iLCJmaWxsIiwia2V5IiwidGltZSIsIkRhdGUiLCJnZXRUaW1lIiwibmV3VGltZSIsImRpZmYiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBQSxTQUFTQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBWTtBQUN0RCxRQUFNQyxTQUFTRixTQUFTRyxvQkFBVCxDQUE4QixRQUE5QixFQUF3QyxDQUF4QyxDQUFmO0FBQ0FELFdBQU9FLEtBQVAsR0FBZSxJQUFmO0FBQ0FGLFdBQU9HLE1BQVAsR0FBZ0IsR0FBaEI7O0FBRUEsUUFBTUMsTUFBTUosT0FBT0ssVUFBUCxDQUFrQixJQUFsQixDQUFaOztBQUdBLFFBQU1DLFdBQVcsSUFBSUMsbUJBQUosQ0FBYVAsTUFBYixFQUFxQkksR0FBckIsQ0FBakI7QUFDQU4sYUFBU0MsZ0JBQVQsQ0FBMEIsU0FBMUIsRUFBcUM7QUFBQSxlQUFLTyxTQUFTRSxJQUFULENBQWNDLE1BQWQsQ0FBcUJDLFdBQXJCLENBQWlDQyxDQUFqQyxDQUFMO0FBQUEsS0FBckM7QUFDQWIsYUFBU0MsZ0JBQVQsQ0FBMEIsU0FBMUIsRUFBcUM7QUFBQSxlQUFLTyxTQUFTRSxJQUFULENBQWNJLFNBQWQsQ0FBd0JELENBQXhCLENBQUw7QUFBQSxLQUFyQztBQUNBYixhQUFTQyxnQkFBVCxDQUEwQixPQUExQixFQUFtQztBQUFBLGVBQUtPLFNBQVNFLElBQVQsQ0FBY0MsTUFBZCxDQUFxQkksV0FBckIsQ0FBaUNGLENBQWpDLENBQUw7QUFBQSxLQUFuQztBQUNBTCxhQUFTUSxPQUFUO0FBQ0gsQ0FiRCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBOzs7O0FBQ0E7Ozs7Ozs7O0FBRUEsSUFBTUMsUUFBUSxJQUFkO0FBQ0EsSUFBTUMsUUFBUSxHQUFkO0FBQ0EsSUFBTUMsZUFBZSxDQUFDLFVBQUQsRUFBYSxRQUFiLEVBQXVCLFNBQXZCLEVBQWtDLFNBQWxDLENBQXJCOztJQUNxQkMsSTtBQUNqQixrQkFBWWxCLE1BQVosRUFBb0JJLEdBQXBCLEVBQXlCO0FBQUE7O0FBQ3JCLGFBQUtBLEdBQUwsR0FBV0EsR0FBWDtBQUNBLGFBQUtKLE1BQUwsR0FBY0EsTUFBZDtBQUNBLGFBQUtTLE1BQUwsR0FBYyxJQUFJVSxnQkFBSixDQUFXLEtBQUtuQixNQUFoQixFQUF3QixLQUFLSSxHQUE3QixDQUFkO0FBQ0EsYUFBS2dCLEtBQUwsR0FBYSxFQUFiO0FBQ0EsYUFBS0MsS0FBTCxHQUFhLElBQWI7QUFDQSxhQUFLQyxLQUFMLEdBQWEsQ0FBYjtBQUNBLGFBQUtDLE1BQUwsR0FBYyxLQUFkO0FBQ0EsYUFBS0MsSUFBTCxHQUFZLEtBQVo7QUFDSDs7OzsrQkFFSztBQUFBOztBQUNGLGdCQUFHLENBQUMsS0FBS0QsTUFBVCxFQUFnQjtBQUNaLHFCQUFLRSxXQUFMO0FBQ0gsYUFGRCxNQUVPLElBQUcsS0FBS0YsTUFBTCxJQUFlLENBQUMsS0FBS0MsSUFBeEIsRUFBNkI7QUFDaEMxQix5QkFBUzRCLG1CQUFULENBQTZCLFNBQTdCLEVBQXdDO0FBQUEsMkJBQUssTUFBS2QsU0FBTCxDQUFlRCxDQUFmLENBQUw7QUFBQSxpQkFBeEM7QUFDQSxxQkFBS2dCLEdBQUw7QUFDSCxhQUhNLE1BR0E7QUFDSCxxQkFBS0MsUUFBTDtBQUNIO0FBQ0o7OztrQ0FHUTtBQUNOLGdCQUFNQyxnQkFBZ0IsQ0FBQyxDQUFDLElBQUYsRUFBUSxJQUFSLENBQXRCO0FBQ0EsZ0JBQU1DLGVBQWUsQ0FBQyxDQUFDLElBQUYsRUFBUSxJQUFSLENBQXJCO0FBQ0EsZ0JBQU1DLGdCQUFnQixDQUFDLENBQUMsSUFBRixFQUFRLElBQVIsQ0FBdEI7QUFDQSxnQkFBSSxLQUFLVCxLQUFMLEdBQWEsRUFBakIsRUFBb0I7QUFDbkIsb0JBQU1VLE9BQU8sSUFBSUMsY0FBSixDQUFTLEtBQUs3QixHQUFkLEVBQW1CLEtBQUtKLE1BQUwsQ0FBWUUsS0FBWixHQUFvQixDQUF2QyxFQUEwQyxLQUFLRixNQUFMLENBQVlHLE1BQVosR0FBcUIsQ0FBL0QsRUFBa0UsS0FBS0gsTUFBTCxDQUFZRSxLQUFaLEdBQW9CLENBQXRGLEVBQXlGLFNBQXpGLEVBQW9HMkIsY0FBY0ssS0FBS0MsS0FBTCxDQUFXRCxLQUFLRSxNQUFMLEtBQWdCUCxjQUFjUSxNQUF6QyxDQUFkLENBQXBHLENBQWI7QUFDQSxxQkFBS2pCLEtBQUwsQ0FBV2tCLElBQVgsQ0FBZ0JOLElBQWhCO0FBQ0EscUJBQUtYLEtBQUwsR0FBYSxJQUFiO0FBQ0EsYUFKRCxNQUlPLElBQUksS0FBS0MsS0FBTCxHQUFhLEVBQWpCLEVBQW9CO0FBQ3RCLG9CQUFNVSxRQUFPLElBQUlDLGNBQUosQ0FBUyxLQUFLN0IsR0FBZCxFQUFtQixLQUFLSixNQUFMLENBQVlFLEtBQVosR0FBb0IsQ0FBdkMsRUFBMEMsS0FBS0YsTUFBTCxDQUFZRyxNQUFaLEdBQXFCLENBQS9ELEVBQWtFLEtBQUtILE1BQUwsQ0FBWUUsS0FBWixHQUFvQixDQUF0RixFQUF5RixTQUF6RixFQUFvRzRCLGFBQWFJLEtBQUtDLEtBQUwsQ0FBV0QsS0FBS0UsTUFBTCxLQUFnQk4sYUFBYU8sTUFBeEMsQ0FBYixDQUFwRyxDQUFiO0FBQ0EscUJBQUtqQixLQUFMLENBQVdrQixJQUFYLENBQWdCTixLQUFoQjtBQUNBLHFCQUFLWCxLQUFMLEdBQWEsSUFBYjtBQUNKLGFBSk0sTUFJQTtBQUNGLG9CQUFNVyxTQUFPLElBQUlDLGNBQUosQ0FBUyxLQUFLN0IsR0FBZCxFQUFtQixLQUFLSixNQUFMLENBQVlFLEtBQVosR0FBb0IsQ0FBdkMsRUFBMEMsS0FBS0YsTUFBTCxDQUFZRyxNQUFaLEdBQXFCLENBQS9ELEVBQWtFLEtBQUtILE1BQUwsQ0FBWUUsS0FBWixHQUFvQixDQUF0RixFQUF5RixTQUF6RixFQUFvRzZCLGNBQWNHLEtBQUtDLEtBQUwsQ0FBV0QsS0FBS0UsTUFBTCxLQUFnQkwsY0FBY00sTUFBekMsQ0FBZCxDQUFwRyxDQUFiO0FBQ0EscUJBQUtqQixLQUFMLENBQVdrQixJQUFYLENBQWdCTixNQUFoQjtBQUNBLHFCQUFLWCxLQUFMLEdBQWEsSUFBYjtBQUNKO0FBQ0g7OzttQ0FFUztBQUNOLG1CQUFPLEtBQUtELEtBQVo7QUFDSDs7O29DQUVVO0FBQ1AsaUJBQUtoQixHQUFMLENBQVNtQyxTQUFUO0FBQ0EsaUJBQUtuQyxHQUFMLENBQVNvQyxJQUFULEdBQWdCLGNBQWhCO0FBQ0EsaUJBQUtwQyxHQUFMLENBQVNxQyxRQUFULENBQWtCLFlBQVksS0FBS25CLEtBQW5DLEVBQTBDLEtBQUt0QixNQUFMLENBQVlFLEtBQVosR0FBb0IsR0FBOUQsRUFBbUUsRUFBbkU7QUFDQSxpQkFBS0UsR0FBTCxDQUFTc0MsU0FBVDtBQUNIOzs7bUNBRVVDLEksRUFBTUMsQyxFQUFFO0FBQ2YsZ0JBQU1DLGNBQWMsS0FBS3pDLEdBQUwsQ0FBUzBDLFdBQVQsQ0FBcUJILElBQXJCLENBQXBCO0FBQ0EsZ0JBQU1JLElBQUksQ0FBQyxLQUFLL0MsTUFBTCxDQUFZRSxLQUFaLEdBQW9CMkMsWUFBWTNDLEtBQWpDLElBQTBDLENBQXBEO0FBQ0EsaUJBQUtFLEdBQUwsQ0FBU3FDLFFBQVQsQ0FBa0JFLElBQWxCLEVBQXdCSSxDQUF4QixFQUEyQkgsQ0FBM0I7QUFDSDs7OytCQUVNO0FBQ0gsaUJBQUt4QyxHQUFMLENBQVM0QyxTQUFULENBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCakMsS0FBekIsRUFBZ0NDLEtBQWhDO0FBQ0EsZ0JBQU1pQyxVQUFVbEMsUUFBUSxDQUF4QjtBQUNBLGdCQUFNbUMsVUFBVWxDLFFBQVEsQ0FBeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBS0ksS0FBTCxDQUFXK0IsT0FBWCxDQUFtQixnQkFBUTtBQUN2Qm5CLHFCQUFLb0IsTUFBTDtBQUNBO0FBQ0gsYUFIRDtBQUlBLGlCQUFLM0MsTUFBTCxDQUFZNEMsSUFBWixDQUFpQixDQUFqQjs7QUFFQSxnQkFBTUMsZUFBZSxLQUFLbEMsS0FBTCxDQUFXaUIsTUFBWCxHQUFvQixDQUF6QztBQUNBLGdCQUFHaUIsWUFBSCxFQUFnQjs7QUFFWjtBQUNBO0FBQ0E7QUFDQSxvQkFBTUMsaUJBQWlCLEtBQUtuQyxLQUFMLENBQVcsQ0FBWCxFQUFjb0MsTUFBZCxJQUF3QixLQUFLL0MsTUFBTCxDQUFZK0MsTUFBWixHQUFxQixLQUFLL0MsTUFBTCxDQUFZZ0QsSUFBekQsSUFBaUUsS0FBS3JDLEtBQUwsQ0FBVyxDQUFYLEVBQWNvQyxNQUFkLElBQXdCLEtBQUsvQyxNQUFMLENBQVkrQyxNQUFaLEdBQXFCLEtBQUsvQyxNQUFMLENBQVlnRCxJQUFqQyxHQUF3QyxDQUF4SjtBQUNBLG9CQUFJRixjQUFKLEVBQW1CO0FBQ2Ysd0JBQUcsQ0FBQyxLQUFLRyxjQUFMLENBQW9CLEtBQUtqRCxNQUF6QixFQUFpQyxLQUFLVyxLQUFMLENBQVcsQ0FBWCxFQUFjdUMsR0FBL0MsQ0FBSixFQUF3RDtBQUNwRCw2QkFBS25DLElBQUwsR0FBWSxJQUFaO0FBQ0g7QUFDRDtBQUNIO0FBQ0o7QUFDRCxpQkFBS29DLFNBQUw7QUFDQTtBQUNBO0FBQ0g7Ozs4QkFFSTtBQUFBOztBQUNELGdCQUFNQyxZQUFZLElBQWxCO0FBQ0EsZ0JBQUcsS0FBS3pDLEtBQUwsQ0FBV2lCLE1BQVgsR0FBb0IsQ0FBcEIsSUFBeUIsS0FBS2hCLEtBQUwsS0FBZSxJQUEzQyxFQUFnRDtBQUM1QyxxQkFBS0EsS0FBTCxHQUFheUMsV0FBVztBQUFBLDJCQUFNLE9BQUtDLE9BQUwsRUFBTjtBQUFBLGlCQUFYLEVBQWlDRixTQUFqQyxDQUFiO0FBQ0g7QUFDRCxnQkFBSSxLQUFLekMsS0FBTCxDQUFXaUIsTUFBWCxHQUFvQixDQUFwQixJQUF5QixLQUFLakIsS0FBTCxDQUFXLENBQVgsRUFBY29DLE1BQWQsR0FBdUIsRUFBcEQsRUFBd0Q7QUFBRSxxQkFBS3BDLEtBQUwsQ0FBVzRDLEtBQVg7QUFBbUI7QUFDN0UsaUJBQUtYLElBQUw7QUFDQzs7O3NDQUVRO0FBQ1QsaUJBQUsvQixLQUFMLElBQWMsQ0FBZDtBQUNIOzs7bUNBRVM7QUFBQTs7QUFDTixpQkFBS0YsS0FBTCxHQUFhLEVBQWI7QUFDQSxnQkFBSXdCLElBQUksS0FBSzVDLE1BQUwsQ0FBWUcsTUFBWixHQUFxQixDQUE3QjtBQUNBLGdCQUFJOEQsUUFBUSxTQUFaO0FBQ0EsZ0JBQUlDLFFBQVEsV0FBWjtBQUNBLGdCQUFJQyxRQUFRLFdBQVo7QUFDQSxnQkFBSTdDLG9CQUFrQixLQUFLQSxLQUEzQjtBQUNBLGlCQUFLbEIsR0FBTCxDQUFTNEMsU0FBVCxDQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QmpDLEtBQXpCLEVBQWdDQyxLQUFoQztBQUNBLGlCQUFLWixHQUFMLENBQVNnRSxTQUFULEdBQXFCSCxLQUFyQjtBQUNBLGlCQUFLN0QsR0FBTCxDQUFTb0MsSUFBVCxHQUFnQixnQkFBaEI7QUFDQSxpQkFBSzZCLFVBQUwsQ0FBZ0JILEtBQWhCLEVBQXVCdEIsSUFBSSxFQUEzQjs7QUFFQSxpQkFBS3hDLEdBQUwsQ0FBU29DLElBQVQsR0FBZ0IsZ0JBQWhCO0FBQ0EsaUJBQUs2QixVQUFMLENBQWdCL0MsS0FBaEIsRUFBdUJzQixDQUF2QjtBQUNBLGlCQUFLeEMsR0FBTCxDQUFTZ0UsU0FBVCxHQUFxQkgsS0FBckI7QUFDQSxpQkFBSzdELEdBQUwsQ0FBU29DLElBQVQsR0FBZ0IsZ0JBQWhCO0FBQ0EsaUJBQUs2QixVQUFMLENBQWdCRixLQUFoQixFQUF1QnZCLElBQUksRUFBM0I7O0FBRUE5QyxxQkFBU0MsZ0JBQVQsQ0FBMEIsU0FBMUIsRUFBcUM7QUFBQSx1QkFBSyxPQUFLYSxTQUFMLENBQWVELENBQWYsQ0FBTDtBQUFBLGFBQXJDO0FBQ0g7Ozt1Q0FFY0YsTSxFQUFRa0QsRyxFQUFJO0FBQ3ZCLGdCQUFJVyxZQUFZLEtBQWhCO0FBQ0EsZ0JBQUlDLFNBQVNaLElBQUlhLFdBQUosRUFBYjtBQUNBLGdCQUFJQyxjQUFjaEUsT0FBTytELFdBQVAsS0FBdUJ0QyxLQUFLd0MsRUFBNUIsR0FBaUMsR0FBbkQ7QUFDQSxnQkFBSUMsV0FBV2hCLElBQUlpQixLQUFKLElBQWEsSUFBSTFDLEtBQUt3QyxFQUFULEdBQWNmLElBQUlrQixrQkFBL0IsQ0FBZjtBQUNBLGdCQUFJRixXQUFXLENBQWYsRUFBa0I7QUFDZEEsNEJBQVksSUFBRXpDLEtBQUt3QyxFQUFuQjtBQUNIOztBQUVEOztBQUVBOztBQUVBLGdCQUFJZixJQUFJaUIsS0FBSixHQUFZRCxRQUFoQixFQUF5QjtBQUNyQixvQkFBS0YsY0FBZUUsUUFBZixJQUNFRixjQUFjLElBQUl2QyxLQUFLd0MsRUFEMUIsSUFFR0QsY0FBY2QsSUFBSWlCLEtBQWxCLElBQTJCSCxjQUFjLENBRmhELEVBRWtEO0FBQzlDSCxnQ0FBWSxJQUFaO0FBQ0g7QUFDSjs7QUFFRCxnQkFBSUcsY0FBY2QsSUFBSWlCLEtBQWxCLElBQ0FILGNBQWNFLFFBRGxCLEVBQzRCO0FBQ3BCTCw0QkFBWSxJQUFaO0FBQ0g7O0FBRUwsZ0JBQUdBLGNBQWMsSUFBakIsRUFBc0I7QUFDbEI7QUFDQTtBQUNBLHFCQUFLUSxXQUFMO0FBQ0g7QUFDRCxtQkFBT1IsU0FBUDtBQUNIOzs7c0NBRVk7QUFBQTs7QUFDVCxnQkFBSTFCLElBQUksS0FBSzVDLE1BQUwsQ0FBWUcsTUFBWixHQUFxQixDQUE3QjtBQUNBLGdCQUFJOEQsUUFBUSxVQUFaO0FBQ0EsZ0JBQUlDLFFBQVEsa0JBQVo7QUFDQSxnQkFBSUMsUUFBUSxhQUFaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBSy9ELEdBQUwsQ0FBUzRDLFNBQVQsQ0FBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUJqQyxLQUF6QixFQUFnQ0MsS0FBaEM7QUFDQSxpQkFBS1osR0FBTCxDQUFTZ0UsU0FBVCxHQUFxQixPQUFyQjtBQUNBLGlCQUFLaEUsR0FBTCxDQUFTb0MsSUFBVCxHQUFnQixnQkFBaEI7QUFDQSxpQkFBSzZCLFVBQUwsQ0FBZ0JILEtBQWhCLEVBQXVCdEIsQ0FBdkI7O0FBRUEsaUJBQUt4QyxHQUFMLENBQVNnRSxTQUFULEdBQXFCSCxLQUFyQjtBQUNBLGlCQUFLN0QsR0FBTCxDQUFTb0MsSUFBVCxHQUFnQixnQkFBaEI7QUFDQSxpQkFBSzZCLFVBQUwsQ0FBZ0JGLEtBQWhCLEVBQXVCdkIsSUFBSSxFQUEzQjtBQUNBOUMscUJBQVNDLGdCQUFULENBQTBCLFNBQTFCLEVBQXFDO0FBQUEsdUJBQUssT0FBS2EsU0FBTCxDQUFlRCxDQUFmLENBQUw7QUFBQSxhQUFyQztBQUNIOzs7a0NBRVNBLEMsRUFBRTtBQUNSQSxjQUFFb0UsY0FBRjtBQUNBLGdCQUFHcEUsRUFBRXFFLEtBQUYsS0FBWSxFQUFaLElBQWtCckUsRUFBRXNFLE9BQUYsS0FBYyxFQUFuQyxFQUF1QztBQUNuQyxxQkFBSzFELE1BQUwsR0FBYyxJQUFkO0FBQ0EscUJBQUtDLElBQUwsR0FBWSxLQUFaO0FBQ0EscUJBQUtGLEtBQUwsR0FBYSxDQUFiO0FBQ0g7QUFDSjs7Ozs7O2tCQTlMZ0JKLEk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTnJCOzs7Ozs7OztJQUVxQlgsUTtBQUNqQixzQkFBWVAsTUFBWixFQUFvQkksR0FBcEIsRUFBeUI7QUFBQTs7QUFDckIsYUFBS0EsR0FBTCxHQUFXQSxHQUFYO0FBQ0EsYUFBS0osTUFBTCxHQUFjQSxNQUFkO0FBQ0EsYUFBS1EsSUFBTCxHQUFZLElBQUlVLGNBQUosQ0FBUyxLQUFLbEIsTUFBZCxFQUFzQixLQUFLSSxHQUEzQixDQUFaO0FBQ0g7Ozs7a0NBR1M7QUFDTixpQkFBS0ksSUFBTCxDQUFVMEUsSUFBVjtBQUNBQyxrQ0FBc0IsS0FBS3JFLE9BQUwsQ0FBYXNFLElBQWIsQ0FBa0IsSUFBbEIsQ0FBdEI7QUFDSDs7Ozs7O2tCQVhnQjdFLFE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNBQThFLEc7QUFDakIsaUJBQVlqRixHQUFaLEVBQWlCMkMsQ0FBakIsRUFBcUJILENBQXJCLEVBQXdCWSxNQUF4QixFQUFnQ29CLEtBQWhDLEVBQXVDVSxRQUF2QyxFQUFnRDtBQUFBOztBQUM1QyxhQUFLbEYsR0FBTCxHQUFXQSxHQUFYO0FBQ0EsYUFBSzJDLENBQUwsR0FBU0EsQ0FBVDtBQUNBLGFBQUtILENBQUwsR0FBU0EsQ0FBVDtBQUNBLGFBQUtZLE1BQUwsR0FBY0EsTUFBZDtBQUNBLGFBQUs4QixRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLGFBQUtWLEtBQUwsR0FBYUEsS0FBYjtBQUNBLGFBQUtDLGtCQUFMLEdBQTBCLElBQUkzQyxLQUFLd0MsRUFBVCxHQUFjLEdBQXhDO0FBQ0g7Ozs7K0JBRUs7QUFDRixpQkFBS3RFLEdBQUwsQ0FBU21DLFNBQVQ7QUFDQSxpQkFBS25DLEdBQUwsQ0FBU21GLFdBQVQsR0FBdUIsU0FBdkI7QUFDQSxpQkFBS25GLEdBQUwsQ0FBU29GLFNBQVQsR0FBcUIsQ0FBckI7QUFDQSxpQkFBS3BGLEdBQUwsQ0FBU3FGLEdBQVQsQ0FBYSxLQUFLMUMsQ0FBbEIsRUFBcUIsS0FBS0gsQ0FBMUIsRUFBNkIsS0FBS1ksTUFBbEMsRUFBMEMsS0FBS29CLEtBQS9DLEVBQXNELEtBQUtDLGtCQUFMLEdBQTBCLEtBQUtELEtBQXJGLEVBQTRGLElBQTVGO0FBQ0EsaUJBQUt4RSxHQUFMLENBQVNzRixNQUFUO0FBQ0EsaUJBQUt0RixHQUFMLENBQVNzQyxTQUFUO0FBQ0g7OztpQ0FFUTtBQUNMLGdCQUFJLEtBQUtjLE1BQUwsR0FBYyxFQUFsQixFQUFzQjtBQUNsQixxQkFBS0EsTUFBTCxJQUFlLENBQWY7QUFDSDtBQUNELGlCQUFLSCxJQUFMO0FBQ0g7OztzQ0FFWTtBQUNWLGdCQUFNc0MsV0FBVztBQUNiQyx1QkFBTyxLQUFLaEIsS0FEQztBQUViaUIscUJBQUssS0FBS2hCLGtCQUFMLEdBQTBCLEtBQUtEO0FBRnZCLGFBQWpCO0FBSUEsbUJBQU9lLFFBQVA7QUFDRjs7O2lDQUVRRyxFLEVBQUlDLEUsRUFBSXZDLE0sRUFBUW9CLEssRUFBTztBQUM1QixtQkFBTyxDQUFDa0IsS0FBSzVELEtBQUs4RCxHQUFMLENBQVNwQixLQUFULElBQWtCcEIsTUFBeEIsRUFBZ0N1QyxLQUFLN0QsS0FBSytELEdBQUwsQ0FBU3JCLEtBQVQsSUFBa0JwQixNQUF2RCxDQUFQO0FBQ0g7Ozs7OztrQkFyQ2dCNkIsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0ZBbEUsTTtBQUNqQixvQkFBWW5CLE1BQVosRUFBb0JJLEdBQXBCLEVBQXlCO0FBQUE7O0FBQ3JCLGFBQUtKLE1BQUwsR0FBY0EsTUFBZDtBQUNBLGFBQUtJLEdBQUwsR0FBV0EsR0FBWDtBQUNBLGFBQUtxRCxJQUFMLEdBQVksQ0FBWjtBQUNBLGFBQUtELE1BQUwsR0FBYyxFQUFkO0FBQ0EsYUFBSzBDLEtBQUwsR0FBYSxDQUFiO0FBQ0EsYUFBS0MsU0FBTCxHQUFpQixDQUFqQjtBQUNBLGFBQUt2QixLQUFMLEdBQWEsRUFBYjtBQUNBLGFBQUt3QixTQUFMLEdBQWlCLE1BQWpCO0FBQ0EsYUFBSy9DLElBQUwsR0FBWSxLQUFLQSxJQUFMLENBQVUrQixJQUFWLENBQWUsSUFBZixDQUFaO0FBQ0g7Ozs7K0JBRU07QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFNaUIsS0FBTSxLQUFLckcsTUFBTCxDQUFZRSxLQUFaLEdBQW9CLENBQXJCLEdBQTRCLEtBQUtzRCxNQUFOLEdBQWdCdEIsS0FBSzhELEdBQUwsQ0FBUyxLQUFLcEIsS0FBTCxHQUFhMUMsS0FBS3dDLEVBQWxCLEdBQXVCLEdBQWhDLENBQXREO0FBQ0EsZ0JBQU00QixLQUFNLEtBQUt0RyxNQUFMLENBQVlHLE1BQVosR0FBcUIsQ0FBdEIsR0FBNkIsS0FBS3FELE1BQU4sR0FBZ0J0QixLQUFLK0QsR0FBTCxDQUFTLEtBQUtyQixLQUFMLEdBQWExQyxLQUFLd0MsRUFBbEIsR0FBdUIsR0FBaEMsQ0FBdkQ7QUFDQSxpQkFBS0UsS0FBTCxHQUFhLEtBQUtBLEtBQUwsR0FBYyxLQUFLdUIsU0FBTCxHQUFpQixLQUFLRCxLQUFqRDs7QUFFQSxnQkFBRyxLQUFLdEIsS0FBTCxHQUFhLENBQWhCLEVBQW1CO0FBQ2YscUJBQUtBLEtBQUwsR0FBYSxNQUFNLEtBQUtBLEtBQXhCO0FBQ0gsYUFGRCxNQUdLLElBQUcsS0FBS0EsS0FBTCxHQUFhLEdBQWhCLEVBQW9CO0FBQ3JCLHFCQUFLQSxLQUFMLElBQWMsR0FBZDtBQUNIO0FBQ0Q7QUFDQSxpQkFBS3hFLEdBQUwsQ0FBU21HLFNBQVQsQ0FBbUJGLEVBQW5CLEVBQXVCQyxFQUF2QjtBQUNBLGlCQUFLbEcsR0FBTCxDQUFTb0csTUFBVCxDQUFnQixLQUFLNUIsS0FBTCxHQUFhMUMsS0FBS3dDLEVBQWxCLEdBQXVCLEdBQXZDO0FBQ0E7QUFDQSxpQkFBS3RFLEdBQUwsQ0FBU21HLFNBQVQsQ0FBbUIsQ0FBQ0YsRUFBcEIsRUFBd0IsQ0FBQ0MsRUFBekI7O0FBRUEsaUJBQUtsRyxHQUFMLENBQVNtQyxTQUFUO0FBQ0EsaUJBQUtuQyxHQUFMLENBQVNnRSxTQUFULEdBQXFCLE9BQXJCO0FBQ0EsaUJBQUtoRSxHQUFMLENBQVNxRyxNQUFULENBQWdCSixLQUFLLEtBQUs1QyxJQUExQixFQUFnQzZDLEtBQUssS0FBSzdDLElBQTFDO0FBQ0EsaUJBQUtyRCxHQUFMLENBQVNzRyxNQUFULENBQWdCTCxLQUFLLEtBQUs1QyxJQUExQixFQUFnQzZDLEVBQWhDO0FBQ0EsaUJBQUtsRyxHQUFMLENBQVNzRyxNQUFULENBQWdCTCxLQUFLLEtBQUs1QyxJQUExQixFQUFnQzZDLEtBQUssS0FBSzdDLElBQTFDO0FBQ0EsaUJBQUtyRCxHQUFMLENBQVN1RyxJQUFUO0FBQ0EsaUJBQUt2RyxHQUFMLENBQVNzQyxTQUFUOztBQUVBLGlCQUFLdEMsR0FBTCxDQUFTbUcsU0FBVCxDQUFtQkYsRUFBbkIsRUFBdUJDLEVBQXZCO0FBQ0EsaUJBQUtsRyxHQUFMLENBQVNvRyxNQUFULENBQWdCLENBQUMsS0FBSzVCLEtBQU4sR0FBYzFDLEtBQUt3QyxFQUFuQixHQUF3QixHQUF4QztBQUNBLGlCQUFLdEUsR0FBTCxDQUFTbUcsU0FBVCxDQUFtQixDQUFDRixFQUFwQixFQUF3QixDQUFDQyxFQUF6Qjs7QUFHQTtBQUNBO0FBQ0g7OztvQ0FDVzNGLEMsRUFBRztBQUNYQSxjQUFFb0UsY0FBRjtBQUNBLG9CQUFRcEUsRUFBRWlHLEdBQVY7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBSyxXQUFMO0FBQ0kseUJBQUtULFNBQUwsR0FBaUIsQ0FBQyxDQUFsQjtBQUNBO0FBQ0oscUJBQUssWUFBTDtBQUNJLHlCQUFLQSxTQUFMLEdBQWlCLENBQWpCO0FBQ0E7QUFaUjtBQWNIOzs7b0NBRVd4RixDLEVBQUU7QUFDVixpQkFBS3dGLFNBQUwsR0FBaUIsQ0FBakI7QUFDSDs7O3NDQUVZO0FBQ1QsbUJBQU8sS0FBS3ZCLEtBQVo7QUFDSDs7Ozs7O2tCQXJHZ0J6RCxNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FyQjs7Ozs7Ozs7SUFFcUJjLEk7QUFDakIsa0JBQVk3QixHQUFaLEVBQWlCMkMsQ0FBakIsRUFBb0JILENBQXBCLEVBQXVCWSxNQUF2QixFQUErQlMsS0FBL0IsRUFBc0NxQixRQUF0QyxFQUFnRDtBQUFBOztBQUM1QyxhQUFLbEYsR0FBTCxHQUFXQSxHQUFYO0FBQ0EsYUFBSzJDLENBQUwsR0FBU0EsQ0FBVDtBQUNBLGFBQUtILENBQUwsR0FBU0EsQ0FBVDtBQUNBLGFBQUtZLE1BQUwsR0FBY0EsTUFBZDtBQUNBLGFBQUtTLEtBQUwsR0FBYUEsS0FBYjtBQUNBLGFBQUs0QyxJQUFMLEdBQVksSUFBSUMsSUFBSixHQUFXQyxPQUFYLEVBQVo7QUFDQSxhQUFLbkMsS0FBTCxHQUFhMUMsS0FBS0UsTUFBTCxNQUFpQixJQUFJRixLQUFLd0MsRUFBMUIsQ0FBYjtBQUNBLGFBQUtZLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsYUFBS1gsUUFBTCxHQUFnQixJQUFJekMsS0FBS3dDLEVBQVQsR0FBYyxHQUE5QjtBQUNBLGFBQUtmLEdBQUwsR0FBVyxJQUFJMEIsYUFBSixDQUFRLEtBQUtqRixHQUFiLEVBQWtCLEtBQUsyQyxDQUF2QixFQUEwQixLQUFLSCxDQUEvQixFQUFrQyxLQUFLWSxNQUF2QyxFQUErQyxLQUFLb0IsS0FBcEQsRUFBMkQsS0FBS1UsUUFBaEUsRUFBMEUsS0FBS3VCLElBQS9FLENBQVg7QUFDSDs7OzsrQkFFSztBQUNGLGdCQUFNRyxVQUFVLElBQUlGLElBQUosR0FBV0MsT0FBWCxFQUFoQjtBQUNBLGdCQUFJRSxPQUFPRCxVQUFVLEtBQUtILElBQTFCO0FBQ0EsaUJBQUtBLElBQUwsR0FBWUcsT0FBWjtBQUNBLGlCQUFLNUcsR0FBTCxDQUFTbUMsU0FBVDtBQUNBLGlCQUFLbkMsR0FBTCxDQUFTbUYsV0FBVCxHQUF1QixLQUFLdEIsS0FBNUI7QUFDQSxpQkFBSzdELEdBQUwsQ0FBU29GLFNBQVQsR0FBcUIsQ0FBckI7QUFDQSxpQkFBS3BGLEdBQUwsQ0FBU3FGLEdBQVQsQ0FBYSxLQUFLMUMsQ0FBbEIsRUFBcUIsS0FBS0gsQ0FBMUIsRUFBNkIsS0FBS1ksTUFBbEMsRUFBMEMsS0FBS29CLEtBQS9DLEVBQXNELEtBQUtELFFBQUwsR0FBZ0IsS0FBS0MsS0FBM0UsRUFBa0YsS0FBbEY7QUFDQSxpQkFBS3hFLEdBQUwsQ0FBU3NGLE1BQVQ7QUFDQSxpQkFBS3RGLEdBQUwsQ0FBU3NDLFNBQVQ7O0FBRUEsaUJBQUtrQyxLQUFMLElBQWNxQyxPQUFPLEtBQUszQixRQUExQjtBQUNBLGlCQUFLVixLQUFMLElBQWMsSUFBSTFDLEtBQUt3QyxFQUF2Qjs7QUFFQSxpQkFBS2YsR0FBTCxDQUFTaUIsS0FBVCxJQUFrQnFDLE9BQU8sS0FBSzNCLFFBQTlCO0FBQ0EsaUJBQUszQixHQUFMLENBQVNpQixLQUFULElBQWtCLElBQUkxQyxLQUFLd0MsRUFBM0I7O0FBRUEsZ0JBQUksS0FBS0UsS0FBTCxHQUFhLENBQWpCLEVBQW9CO0FBQ2hCLHFCQUFLQSxLQUFMLEdBQWEsSUFBSTFDLEtBQUt3QyxFQUF0QjtBQUNIOztBQUVELGdCQUFJLEtBQUtFLEtBQUwsR0FBYSxJQUFJMUMsS0FBS3dDLEVBQTFCLEVBQThCO0FBQzFCLHFCQUFLRSxLQUFMLElBQWMsSUFBSTFDLEtBQUt3QyxFQUF2QjtBQUNIOztBQUVELGdCQUFJLEtBQUtmLEdBQUwsQ0FBU2lCLEtBQVQsR0FBaUIsQ0FBckIsRUFBd0I7QUFDcEIscUJBQUtqQixHQUFMLENBQVNpQixLQUFULEdBQWlCLElBQUkxQyxLQUFLd0MsRUFBMUI7QUFDSDs7QUFFRCxnQkFBSSxLQUFLZixHQUFMLENBQVNpQixLQUFULEdBQWlCLElBQUkxQyxLQUFLd0MsRUFBOUIsRUFBa0M7QUFDOUIscUJBQUtmLEdBQUwsQ0FBU2lCLEtBQVQsSUFBa0IsSUFBSTFDLEtBQUt3QyxFQUEzQjtBQUNIO0FBQ0o7OztpQ0FFTztBQUNKLGdCQUFHLEtBQUtsQixNQUFMLEdBQWMsRUFBakIsRUFBcUI7QUFDakIscUJBQUtBLE1BQUwsSUFBZSxDQUFmO0FBQ0EscUJBQUtHLEdBQUwsQ0FBU0gsTUFBVCxJQUFtQixDQUFuQjtBQUNIO0FBQ0QsaUJBQUtHLEdBQUwsQ0FBU04sSUFBVDtBQUNBLGlCQUFLQSxJQUFMO0FBQ0g7Ozs7OztrQkF2RGdCcEIsSSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBQbGF5ZXIgZnJvbSAnLi9qYXZhc2NyaXB0L3BsYXllcic7XG5pbXBvcnQgR2FtZSBmcm9tICcuL2phdmFzY3JpcHQvZ2FtZSc7XG5pbXBvcnQgR2FtZVZpZXcgZnJvbSAnLi9qYXZhc2NyaXB0L2dhbWVfdmlldyc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImNhbnZhc1wiKVswXTtcbiAgICBjYW52YXMud2lkdGggPSAxMDAwO1xuICAgIGNhbnZhcy5oZWlnaHQgPSA2MDA7XG5cbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG5cbiAgICBjb25zdCBnYW1lVmlldyA9IG5ldyBHYW1lVmlldyhjYW52YXMsIGN0eCk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGUgPT4gZ2FtZVZpZXcuZ2FtZS5wbGF5ZXIuaGFuZGxlUHJlc3MoZSkpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBlID0+IGdhbWVWaWV3LmdhbWUuZ2FtZVN0YXJ0KGUpKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGUgPT4gZ2FtZVZpZXcuZ2FtZS5wbGF5ZXIuaGFuZGxlS2V5VXAoZSkpO1xuICAgIGdhbWVWaWV3LmFuaW1hdGUoKTtcbn0pO1xuXG5cblxuIiwiaW1wb3J0IFBsYXllciBmcm9tIFwiLi9wbGF5ZXJcIjtcbmltcG9ydCBXYWxsIGZyb20gXCIuL3dhbGxcIjtcblxuY29uc3QgRElNX1ggPSAxMDAwO1xuY29uc3QgRElNX1kgPSA2MDA7XG5jb25zdCBDT0xPUl9TQ0hFTUUgPSBbXCIjQ0MyOTMzNlwiLCBcIkVCQkFCOVwiLCBcIiMzODg2OTdcIiwgXCIjQkZGRkUxXCJdXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGN0eCkge1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMucGxheWVyID0gbmV3IFBsYXllcih0aGlzLmNhbnZhcywgdGhpcy5jdHgpXG4gICAgICAgIHRoaXMud2FsbHMgPSBbXTtcbiAgICAgICAgdGhpcy50aW1lciA9IG51bGw7XG4gICAgICAgIHRoaXMuc2NvcmUgPSAwO1xuICAgICAgICB0aGlzLmluR2FtZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmRlYWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpbml0KCl7XG4gICAgICAgIGlmKCF0aGlzLmluR2FtZSl7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0U2NyZWVuKCk7XG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmluR2FtZSAmJiAhdGhpcy5kZWFkKXtcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBlID0+IHRoaXMuZ2FtZVN0YXJ0KGUpKTtcbiAgICAgICAgICAgIHRoaXMucnVuKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmdhbWVPdmVyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGFkZFdhbGwoKXtcbiAgICAgICBjb25zdCBzbG93Um90YXRpb25zID0gWy0uMDAxLCAuMDAxXTtcbiAgICAgICBjb25zdCBtZWRSb3RhdGlvbnMgPSBbLS4wMDIsIC4wMDJdO1xuICAgICAgIGNvbnN0IGZhc3RSb3RhdGlvbnMgPSBbLS4wMDMsIC4wMDNdO1xuICAgICAgIGlmICh0aGlzLnNjb3JlIDwgMTApe1xuICAgICAgICBjb25zdCB3YWxsID0gbmV3IFdhbGwodGhpcy5jdHgsIHRoaXMuY2FudmFzLndpZHRoIC8gMiwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMiwgdGhpcy5jYW52YXMud2lkdGggLyAyLCBcIiMzODg2OTdcIiwgc2xvd1JvdGF0aW9uc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBzbG93Um90YXRpb25zLmxlbmd0aCldKVxuICAgICAgICB0aGlzLndhbGxzLnB1c2god2FsbCk7XG4gICAgICAgIHRoaXMudGltZXIgPSBudWxsO1xuICAgICAgIH0gZWxzZSBpZiAodGhpcy5zY29yZSA8IDIwKXtcbiAgICAgICAgICAgIGNvbnN0IHdhbGwgPSBuZXcgV2FsbCh0aGlzLmN0eCwgdGhpcy5jYW52YXMud2lkdGggLyAyLCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyLCB0aGlzLmNhbnZhcy53aWR0aCAvIDIsIFwiIzM4ODY5N1wiLCBtZWRSb3RhdGlvbnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbWVkUm90YXRpb25zLmxlbmd0aCldKVxuICAgICAgICAgICAgdGhpcy53YWxscy5wdXNoKHdhbGwpO1xuICAgICAgICAgICAgdGhpcy50aW1lciA9IG51bGw7XG4gICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHdhbGwgPSBuZXcgV2FsbCh0aGlzLmN0eCwgdGhpcy5jYW52YXMud2lkdGggLyAyLCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyLCB0aGlzLmNhbnZhcy53aWR0aCAvIDIsIFwiIzM4ODY5N1wiLCBmYXN0Um90YXRpb25zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGZhc3RSb3RhdGlvbnMubGVuZ3RoKV0pXG4gICAgICAgICAgICB0aGlzLndhbGxzLnB1c2god2FsbCk7XG4gICAgICAgICAgICB0aGlzLnRpbWVyID0gbnVsbDtcbiAgICAgICB9XG4gICAgfVxuXG4gICAgYWxsV2FsbHMoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMud2FsbHM7XG4gICAgfVxuXG4gICAgc2hvd1Njb3JlKCl7XG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5mb250ID0gXCIyMHB4IEdlb3JnaWFcIjtcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJTY29yZTogXCIgKyB0aGlzLnNjb3JlLCB0aGlzLmNhbnZhcy53aWR0aCAtIDEwMCwgMzApO1xuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcbiAgICB9XG5cbiAgICBjZW50ZXJUZXh0KHRleHQsIHkpe1xuICAgICAgICBjb25zdCBtZWFzdXJlbWVudCA9IHRoaXMuY3R4Lm1lYXN1cmVUZXh0KHRleHQpO1xuICAgICAgICBjb25zdCB4ID0gKHRoaXMuY2FudmFzLndpZHRoIC0gbWVhc3VyZW1lbnQud2lkdGgpIC8gMjtcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQodGV4dCwgeCwgeSk7XG4gICAgfVxuICAgIFxuICAgIGRyYXcoKSB7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCBESU1fWCwgRElNX1kpO1xuICAgICAgICBjb25zdCBjZW50ZXJYID0gRElNX1ggLyAyO1xuICAgICAgICBjb25zdCBjZW50ZXJZID0gRElNX1kgLyAyO1xuICAgICAgICAvLyB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgLy8gdGhpcy5jdHgubGluZVdpZHRoID0gMTtcbiAgICAgICAgLy8gdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCJcbiAgICAgICAgLy8gLy8gdGhpcy5jdHguYXJjKGNlbnRlclgsIGNlbnRlclksIDMwLCAwLCAyICogTWF0aC5QSSwgZmFsc2UpO1xuICAgICAgICAvLyB0aGlzLmN0eC5zdHJva2UoKTtcbiAgICAgICAgLy8gdGhpcy5jdHguY2xvc2VQYXRoKCk7XG4gICAgICAgIHRoaXMud2FsbHMuZm9yRWFjaCh3YWxsID0+IHtcbiAgICAgICAgICAgIHdhbGwudXBkYXRlKCk7XG4gICAgICAgICAgICAvLyB3YWxsLmdhcC51cGRhdGUoKTtcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5wbGF5ZXIuZHJhdyg1KTtcblxuICAgICAgICBjb25zdCBkb1dhbGxzRXhpc3QgPSB0aGlzLndhbGxzLmxlbmd0aCA+IDA7XG4gICAgICAgIGlmKGRvV2FsbHNFeGlzdCl7XG5cbiAgICAgICAgICAgIC8vVE9ETzogd2UgY2hlY2sgZm9yIGNvbGxpc2lvbiB3aGVuIHRoZSB3YWxsIGlzIGxpdGVyYWxseSBvbnRvcCBvZiB0aGUgcGxheWVyXG4gICAgICAgICAgICAvLyBtYXliZSBmaW5kIGEgc3dlZXQgc3BvdCB3aXRoIHRoaXMucGxheWVyLnJhZGl1cyArIDEgb3Igc29tZXRoaW5nIGNhdXNlIHRoZSB0cmlhbmdsZSBoYXNcbiAgICAgICAgICAgIC8vIGEgc2l6ZSB0byBpdC5cbiAgICAgICAgICAgIGNvbnN0IGlzV2FsbE9uUGxheWVyID0gdGhpcy53YWxsc1swXS5yYWRpdXMgPD0gdGhpcy5wbGF5ZXIucmFkaXVzICsgdGhpcy5wbGF5ZXIuc2l6ZSAmJiB0aGlzLndhbGxzWzBdLnJhZGl1cyA+PSB0aGlzLnBsYXllci5yYWRpdXMgKyB0aGlzLnBsYXllci5zaXplIC0gMTtcbiAgICAgICAgICAgIGlmIChpc1dhbGxPblBsYXllcil7XG4gICAgICAgICAgICAgICAgaWYoIXRoaXMuY2hlY2tDb2xsaXNpb24odGhpcy5wbGF5ZXIsIHRoaXMud2FsbHNbMF0uZ2FwKSl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVhZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLndhbGxzWzBdLmFuZ2xlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNob3dTY29yZSgpO1xuICAgICAgICAvLyB0aGlzLmN0eC5zdHJva2UoKTtcbiAgICAgICAgLy8gdGhpcy5jdHguY2xvc2VQYXRoKCk7XG4gICAgfVxuXG4gICAgcnVuKCl7XG4gICAgICAgIGNvbnN0IHdhbGxTcGFjZSA9IDEwMDA7XG4gICAgICAgIGlmKHRoaXMud2FsbHMubGVuZ3RoIDwgOCAmJiB0aGlzLnRpbWVyID09PSBudWxsKXtcbiAgICAgICAgICAgIHRoaXMudGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHRoaXMuYWRkV2FsbCgpLCB3YWxsU3BhY2UpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLndhbGxzLmxlbmd0aCA+IDAgJiYgdGhpcy53YWxsc1swXS5yYWRpdXMgPCAzMCkgeyB0aGlzLndhbGxzLnNoaWZ0KCl9XG4gICAgICAgIHRoaXMuZHJhdygpO1xuICAgICAgICB9XG5cbiAgICB1cGRhdGVTY29yZSgpe1xuICAgICAgICB0aGlzLnNjb3JlICs9IDE7XG4gICAgfVxuXG4gICAgZ2FtZU92ZXIoKXtcbiAgICAgICAgdGhpcy53YWxscyA9IFtdO1xuICAgICAgICBsZXQgeSA9IHRoaXMuY2FudmFzLmhlaWdodCAvIDI7XG4gICAgICAgIGxldCBjb2xvciA9IFwiI0ZGMDAwMFwiO1xuICAgICAgICBsZXQgdGl0bGUgPSBcIkdhbWUgT3ZlclwiO1xuICAgICAgICBsZXQgZW50ZXIgPSBcIlRyeSBhZ2FpblwiO1xuICAgICAgICBsZXQgc2NvcmUgPSBgU2NvcmU6ICR7dGhpcy5zY29yZX1gO1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgRElNX1gsIERJTV9ZKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gY29sb3I7XG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcIjQ4cHggbW9ub3NwYWNlXCI7XG4gICAgICAgIHRoaXMuY2VudGVyVGV4dCh0aXRsZSwgeSArIDMwKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcIjI0cHggbW9ub3NwYWNlXCI7XG4gICAgICAgIHRoaXMuY2VudGVyVGV4dChzY29yZSwgeSk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgICAgICB0aGlzLmN0eC5mb250ID0gXCIyNHB4IG1vbm9zcGFjZVwiO1xuICAgICAgICB0aGlzLmNlbnRlclRleHQoZW50ZXIsIHkgKyA2MCk7XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGUgPT4gdGhpcy5nYW1lU3RhcnQoZSkpO1xuICAgIH1cblxuICAgIGNoZWNrQ29sbGlzaW9uKHBsYXllciwgZ2FwKXtcbiAgICAgICAgbGV0IGNvbGxpc2lvbiA9IGZhbHNlO1xuICAgICAgICBsZXQgZ2FwUG9zID0gZ2FwLmdldFBvc2l0aW9uKCk7XG4gICAgICAgIGxldCBwbGF5ZXJBbmdsZSA9IHBsYXllci5nZXRQb3NpdGlvbigpICogTWF0aC5QSSAvIDE4MDtcbiAgICAgICAgbGV0IGVuZEFuZ2xlID0gZ2FwLmFuZ2xlIC0gKDIgKiBNYXRoLlBJIC0gZ2FwLnBhcnRpYWxDaXJjbGVBbmdsZSk7XG4gICAgICAgIGlmIChlbmRBbmdsZSA8IDApIHtcbiAgICAgICAgICAgIGVuZEFuZ2xlICs9IDIqTWF0aC5QSTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmKHBsYXllclBvcyA+IGdhcFBvc1tzdGFydF0gJiYgcGxheWVyUG9zIDwgZ2FwUG9zW2VuZF0pIGNvbGxpc2lvbiA9IHRydWU7XG5cbiAgICAgICAgLy8gdGhlIGNhc2Ugd2hlbiB0aGUgZ2FwIHN0cmFkZGxlcyB0aGUgaG9yaXpvbnRhbFxuXG4gICAgICAgIGlmIChnYXAuYW5nbGUgPCBlbmRBbmdsZSl7XG4gICAgICAgICAgICBpZiAoKHBsYXllckFuZ2xlICA+IGVuZEFuZ2xlIFxuICAgICAgICAgICAgICAgICYmIHBsYXllckFuZ2xlIDwgMiAqIE1hdGguUEkpIFxuICAgICAgICAgICAgICAgIHx8IHBsYXllckFuZ2xlIDwgZ2FwLmFuZ2xlICYmIHBsYXllckFuZ2xlID4gMCl7XG4gICAgICAgICAgICAgICAgY29sbGlzaW9uID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwbGF5ZXJBbmdsZSA8IGdhcC5hbmdsZSAmJlxuICAgICAgICAgICAgcGxheWVyQW5nbGUgPiBlbmRBbmdsZSkge1xuICAgICAgICAgICAgICAgIGNvbGxpc2lvbiA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgaWYoY29sbGlzaW9uID09PSB0cnVlKXtcbiAgICAgICAgICAgIC8vIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gJ2JsdWUnXG4gICAgICAgICAgICAvLyB0aGlzLmN0eC5zdHJva2VSZWN0KERJTV9YIC8gMiAtIDI1LCBESU1fWSAvIDIgLSAyNSwgNTAsIDUwKVxuICAgICAgICAgICAgdGhpcy51cGRhdGVTY29yZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb2xsaXNpb247XG4gICAgfVxuXG4gICAgc3RhcnRTY3JlZW4oKXtcbiAgICAgICAgbGV0IHkgPSB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyO1xuICAgICAgICBsZXQgY29sb3IgPSBcIiNDQzI5MzM2XCI7XG4gICAgICAgIGxldCB0aXRsZSA9IFwiRXNjYXBlIHRoZSBTaGFwZVwiO1xuICAgICAgICBsZXQgZW50ZXIgPSBcIlByZXNzIEVudGVyXCI7XG4gICAgICAgIC8vIGxldCBlbnRlckxlbmd0aCA9IHRoaXMuY3R4Lm1lYXN1cmVUZXh0KGVudGVyKTtcbiAgICAgICAgLy8gbGV0IHRpdGxlTGVuZ3RoID0gdGhpcy5jdHgubWVhc3VyZVRleHQodGl0bGUpO1xuICAgICAgICAvLyBsZXQgZW50ZXJYID0gKHRoaXMuY2FudmFzLndpZHRoIC0gZW50ZXJMZW5ndGgud2lkdGgpIC8gMjtcbiAgICAgICAgLy8gbGV0IHggPSAodGhpcy5jYW52YXMud2lkdGggLSB0aXRsZUxlbmd0aC53aWR0aCkgLyAyO1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgRElNX1gsIERJTV9ZKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICB0aGlzLmN0eC5mb250ID0gXCI0OHB4IG1vbm9zcGFjZVwiO1xuICAgICAgICB0aGlzLmNlbnRlclRleHQodGl0bGUsIHkpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gY29sb3I7XG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcIjI0cHggbW9ub3NwYWNlXCI7XG4gICAgICAgIHRoaXMuY2VudGVyVGV4dChlbnRlciwgeSArIDMwKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGUgPT4gdGhpcy5nYW1lU3RhcnQoZSkpO1xuICAgIH1cblxuICAgIGdhbWVTdGFydChlKXtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZihlLndoaWNoID09PSAxMyB8fCBlLmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgICAgICB0aGlzLmluR2FtZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmRlYWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuc2NvcmUgPSAwO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCBHYW1lIGZyb20gJy4vZ2FtZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVWaWV3IHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGN0eCkge1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuZ2FtZSA9IG5ldyBHYW1lKHRoaXMuY2FudmFzLCB0aGlzLmN0eCk7XG4gICAgfVxuXG5cbiAgICBhbmltYXRlKCkge1xuICAgICAgICB0aGlzLmdhbWUuaW5pdCgpO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlLmJpbmQodGhpcykpO1xuICAgIH1cbn0iLCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FwIHtcbiAgICBjb25zdHJ1Y3RvcihjdHgsIHggLCB5LCByYWRpdXMsIGFuZ2xlLCByb3RhdGlvbil7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLnJhZGl1cyA9IHJhZGl1czsgXG4gICAgICAgIHRoaXMucm90YXRpb24gPSByb3RhdGlvbjtcbiAgICAgICAgdGhpcy5hbmdsZSA9IGFuZ2xlO1xuICAgICAgICB0aGlzLnBhcnRpYWxDaXJjbGVBbmdsZSA9IDIgKiBNYXRoLlBJIC0gMS4yO1xuICAgIH1cblxuICAgIGRyYXcoKXtcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gXCIjNDg2MzljXCJcbiAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gODtcbiAgICAgICAgdGhpcy5jdHguYXJjKHRoaXMueCwgdGhpcy55LCB0aGlzLnJhZGl1cywgdGhpcy5hbmdsZSwgdGhpcy5wYXJ0aWFsQ2lyY2xlQW5nbGUgKyB0aGlzLmFuZ2xlLCB0cnVlKTtcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMucmFkaXVzID4gMzApIHtcbiAgICAgICAgICAgIHRoaXMucmFkaXVzIC09IDM7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kcmF3KCk7XG4gICAgfVxuXG4gICAgZ2V0UG9zaXRpb24oKXtcbiAgICAgICBjb25zdCBwb3NpdGlvbiA9IHtcbiAgICAgICAgICAgc3RhcnQ6IHRoaXMuYW5nbGUsXG4gICAgICAgICAgIGVuZDogdGhpcy5wYXJ0aWFsQ2lyY2xlQW5nbGUgKyB0aGlzLmFuZ2xlLFxuICAgICAgIH1cbiAgICAgICByZXR1cm4gcG9zaXRpb247XG4gICAgfVxuXG4gICAgZ2V0UG9pbnQoYzEsIGMyLCByYWRpdXMsIGFuZ2xlKSB7XG4gICAgICAgIHJldHVybiBbYzEgKyBNYXRoLmNvcyhhbmdsZSkgKiByYWRpdXMsIGMyICsgTWF0aC5zaW4oYW5nbGUpICogcmFkaXVzXTtcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGN0eCkge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuc2l6ZSA9IDU7XG4gICAgICAgIHRoaXMucmFkaXVzID0gNTU7XG4gICAgICAgIHRoaXMuc3BlZWQgPSA3O1xuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IDA7XG4gICAgICAgIHRoaXMuYW5nbGUgPSAzMDtcbiAgICAgICAgdGhpcy5wbGF5ZXJQb3MgPSBcImxlZnRcIjtcbiAgICAgICAgdGhpcy5kcmF3ID0gdGhpcy5kcmF3LmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgZHJhdygpIHtcbiAgICAgICAgLy8gc3dpdGNoICh0aGlzLnBsYXllclBvcykge1xuICAgICAgICAvLyAgICAgY2FzZSBcImxlZnRcIjpcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmN0eC5tb3ZlVG8odGhpcy5jYW52YXMud2lkdGggLyAyIC0gMzAsIHRoaXMuY2FudmFzLmhlaWdodCAvIDIgKyA1KTtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmN0eC5saW5lVG8odGhpcy5jYW52YXMud2lkdGggLyAyIC0gNDAsIHRoaXMuY2FudmFzLmhlaWdodCAvIDIpO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyh0aGlzLmNhbnZhcy53aWR0aCAvIDIgLSAzMCwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMiAtIDUpO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgLy8gICAgICAgICBicmVhaztcbiAgICAgICAgLy8gICAgIGNhc2UgXCJ1cFwiOlxuICAgICAgICAvLyAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuY3R4Lm1vdmVUbyh0aGlzLmNhbnZhcy53aWR0aCAvIDIgLSA1LCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyIC0gMzApO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyh0aGlzLmNhbnZhcy53aWR0aCAvIDIsIHRoaXMuY2FudmFzLmhlaWdodCAvIDIgLSA0MCk7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5jdHgubGluZVRvKHRoaXMuY2FudmFzLndpZHRoIC8gMiArIDUsIHRoaXMuY2FudmFzLmhlaWdodCAvIDIgLSAzMCk7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICAvLyAgICAgICAgIGJyZWFrO1xuICAgICAgICAvLyAgICAgY2FzZSBcInJpZ2h0XCI6XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5jdHgubW92ZVRvKHRoaXMuY2FudmFzLndpZHRoIC8gMiArIDMwLCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyICsgNSk7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5jdHgubGluZVRvKHRoaXMuY2FudmFzLndpZHRoIC8gMiArIDQwLCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyKTtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmN0eC5saW5lVG8odGhpcy5jYW52YXMud2lkdGggLyAyICsgMzAsIHRoaXMuY2FudmFzLmhlaWdodCAvIDIgLSA1KTtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgIC8vICAgICAgICAgYnJlYWs7XG4gICAgICAgIC8vICAgICBjYXNlIFwiZG93blwiOlxuICAgICAgICAvLyAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuY3R4Lm1vdmVUbyh0aGlzLmNhbnZhcy53aWR0aCAvIDIgLSA1LCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyICsgMzApO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyh0aGlzLmNhbnZhcy53aWR0aCAvIDIsIHRoaXMuY2FudmFzLmhlaWdodCAvIDIgKyA0MCk7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5jdHgubGluZVRvKHRoaXMuY2FudmFzLndpZHRoIC8gMiArIDUsIHRoaXMuY2FudmFzLmhlaWdodCAvIDIgKyAzMCk7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICAvLyAgICAgICAgIGJyZWFrO1xuICAgICAgICAvLyAgICAgZGVmYXVsdDpcbiAgICAgICAgLy8gICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgY29uc3QgZHggPSAodGhpcy5jYW52YXMud2lkdGggLyAyKSArICgodGhpcy5yYWRpdXMpICogTWF0aC5jb3ModGhpcy5hbmdsZSAqIE1hdGguUEkgLyAxODApKTtcbiAgICAgICAgY29uc3QgZHkgPSAodGhpcy5jYW52YXMuaGVpZ2h0IC8gMikgKyAoKHRoaXMucmFkaXVzKSAqIE1hdGguc2luKHRoaXMuYW5nbGUgKiBNYXRoLlBJIC8gMTgwKSk7XG4gICAgICAgIHRoaXMuYW5nbGUgPSB0aGlzLmFuZ2xlICsgKHRoaXMuZGlyZWN0aW9uICogdGhpcy5zcGVlZCk7XG5cbiAgICAgICAgaWYodGhpcy5hbmdsZSA8IDApIHtcbiAgICAgICAgICAgIHRoaXMuYW5nbGUgPSAzNjAgLSB0aGlzLmFuZ2xlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYodGhpcy5hbmdsZSA+IDM2MCl7XG4gICAgICAgICAgICB0aGlzLmFuZ2xlICU9IDM2MDtcbiAgICAgICAgfVxuICAgICAgICAvLyB0aGlzLmN0eC5zYXZlKCk7XG4gICAgICAgIHRoaXMuY3R4LnRyYW5zbGF0ZShkeCwgZHkpO1xuICAgICAgICB0aGlzLmN0eC5yb3RhdGUodGhpcy5hbmdsZSAqIE1hdGguUEkgLyAxODApO1xuICAgICAgICAvLyB0aGlzLmN0eC5yZXN0b3JlKCk7XG4gICAgICAgIHRoaXMuY3R4LnRyYW5zbGF0ZSgtZHgsIC1keSk7XG5cbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgdGhpcy5jdHgubW92ZVRvKGR4IC0gdGhpcy5zaXplLCBkeSAtIHRoaXMuc2l6ZSk7XG4gICAgICAgIHRoaXMuY3R4LmxpbmVUbyhkeCArIHRoaXMuc2l6ZSwgZHkpO1xuICAgICAgICB0aGlzLmN0eC5saW5lVG8oZHggLSB0aGlzLnNpemUsIGR5ICsgdGhpcy5zaXplKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgICAgICB0aGlzLmN0eC50cmFuc2xhdGUoZHgsIGR5KTtcbiAgICAgICAgdGhpcy5jdHgucm90YXRlKC10aGlzLmFuZ2xlICogTWF0aC5QSSAvIDE4MCk7XG4gICAgICAgIHRoaXMuY3R4LnRyYW5zbGF0ZSgtZHgsIC1keSk7XG5cbiAgICAgICAgXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZHhcIiArIGR4KTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJkeVwiICsgZHkpO1xuICAgIH1cbiAgICBoYW5kbGVQcmVzcyhlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgc3dpdGNoIChlLmtleSkge1xuICAgICAgICAgICAgLy8gY2FzZSAnQXJyb3dVcCc6XG4gICAgICAgICAgICAvLyAgICAgdGhpcy5wbGF5ZXJQb3MgPSBcInVwXCI7XG4gICAgICAgICAgICAvLyAgICAgYnJlYWs7XG4gICAgICAgICAgICAvLyBjYXNlICdBcnJvd0Rvd24nOlxuICAgICAgICAgICAgLy8gICAgIHRoaXMucGxheWVyUG9zID0gXCJkb3duXCI7XG4gICAgICAgICAgICAvLyAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdBcnJvd0xlZnQnOlxuICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uID0gLTE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdBcnJvd1JpZ2h0JzpcbiAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IDE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVLZXlVcChlKXtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSAwO1xuICAgIH1cblxuICAgIGdldFBvc2l0aW9uKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmFuZ2xlO1xuICAgIH1cbn1cblxuIiwiaW1wb3J0IEdhcCBmcm9tIFwiLi9nYXBcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2FsbCB7XG4gICAgY29uc3RydWN0b3IoY3R4LCB4LCB5LCByYWRpdXMsIGNvbG9yLCByb3RhdGlvbikge1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy5yYWRpdXMgPSByYWRpdXM7XG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICAgICAgdGhpcy50aW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIHRoaXMuYW5nbGUgPSBNYXRoLnJhbmRvbSgpICogKDIgKiBNYXRoLlBJKTtcbiAgICAgICAgdGhpcy5yb3RhdGlvbiA9IHJvdGF0aW9uO1xuICAgICAgICB0aGlzLmVuZEFuZ2xlID0gMiAqIE1hdGguUEkgLSAxLjI7XG4gICAgICAgIHRoaXMuZ2FwID0gbmV3IEdhcCh0aGlzLmN0eCwgdGhpcy54LCB0aGlzLnksIHRoaXMucmFkaXVzLCB0aGlzLmFuZ2xlLCB0aGlzLnJvdGF0aW9uLCB0aGlzLnRpbWUpO1xuICAgIH1cblxuICAgIGRyYXcoKXtcbiAgICAgICAgY29uc3QgbmV3VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICBsZXQgZGlmZiA9IG5ld1RpbWUgLSB0aGlzLnRpbWU7XG4gICAgICAgIHRoaXMudGltZSA9IG5ld1RpbWU7XG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDg7XG4gICAgICAgIHRoaXMuY3R4LmFyYyh0aGlzLngsIHRoaXMueSwgdGhpcy5yYWRpdXMsIHRoaXMuYW5nbGUsIHRoaXMuZW5kQW5nbGUgKyB0aGlzLmFuZ2xlLCBmYWxzZSk7XG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgICAgICB0aGlzLmFuZ2xlICs9IGRpZmYgKiB0aGlzLnJvdGF0aW9uO1xuICAgICAgICB0aGlzLmFuZ2xlICU9IDIgKiBNYXRoLlBJO1xuXG4gICAgICAgIHRoaXMuZ2FwLmFuZ2xlICs9IGRpZmYgKiB0aGlzLnJvdGF0aW9uO1xuICAgICAgICB0aGlzLmdhcC5hbmdsZSAlPSAyICogTWF0aC5QSTtcblxuICAgICAgICBpZiAodGhpcy5hbmdsZSA8IDApIHtcbiAgICAgICAgICAgIHRoaXMuYW5nbGUgPSAyICogTWF0aC5QSTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmFuZ2xlID4gMiAqIE1hdGguUEkpIHtcbiAgICAgICAgICAgIHRoaXMuYW5nbGUgJT0gMiAqIE1hdGguUEk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5nYXAuYW5nbGUgPCAwKSB7XG4gICAgICAgICAgICB0aGlzLmdhcC5hbmdsZSA9IDIgKiBNYXRoLlBJO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZ2FwLmFuZ2xlID4gMiAqIE1hdGguUEkpIHtcbiAgICAgICAgICAgIHRoaXMuZ2FwLmFuZ2xlICU9IDIgKiBNYXRoLlBJO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlKCl7XG4gICAgICAgIGlmKHRoaXMucmFkaXVzID4gMzApIHtcbiAgICAgICAgICAgIHRoaXMucmFkaXVzIC09IDM7XG4gICAgICAgICAgICB0aGlzLmdhcC5yYWRpdXMgLT0gMztcbiAgICAgICAgfSBcbiAgICAgICAgdGhpcy5nYXAuZHJhdygpO1xuICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==