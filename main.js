import GameBoard from "./GameBoard.mjs";
import Cell from "./Cell.mjs";
import Game from "./Game.mjs";
import {WIDTH, HEIGHT, COLS, ROWS} from "./config.js"

document.addEventListener("DOMContentLoaded", () => {
	console.log("Here")
	const game = new Game(WIDTH, HEIGHT)
	game.init(COLS, ROWS)
	game.setup(COLS, ROWS, GameBoard, Cell)

	game.canvas.addEventListener("click", game.handleClick.bind(game))
	game.display()

})