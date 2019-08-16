import Player from './javascript/player';
import Game from './javascript/game';
import GameView from './javascript/game_view';

document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementsByTagName("canvas")[0];
    canvas.width = 1000;
    canvas.height = 600;

    const ctx = canvas.getContext("2d");


    const gameView = new GameView(canvas, ctx);
    document.addEventListener('keydown', e => gameView.game.player.handlePress(e));
    document.addEventListener('keyup', e => gameView.game.player.handleKeyUp(e));
    gameView.animate();
});



