import GameBoard from "./GameBoard.mjs";
import Cell from "./Cell.mjs";
import Game from "./Game.mjs";
import {WIDTH, HEIGHT, COLS, ROWS} from "./config.js"

const button = document.getElementById("play")
const restart = document.getElementById("restart")
document.addEventListener("DOMContentLoaded", () => {
	const game = new Game(WIDTH, HEIGHT)
	game.init(COLS, ROWS)
	game.setup(COLS, ROWS, GameBoard, Cell)

	game.canvas.addEventListener("click", game.handleClick.bind(game))

	button.addEventListener("click", () => {
		game.isRunning = true;
		window.requestAnimationFrame(game.tick.bind(game))
	})
	restart.addEventListener("click", () => {
		game.isRunning = false
		game.clear();
	})

})