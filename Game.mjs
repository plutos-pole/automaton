import { WIDTH, HEIGHT, CELL_DIMENSION } from "./config.js"
export default class Game {
	constructor (w, h) {
		this.w = w
		this.h = h
		this.board = null
		const wrapper = document.getElementById("wrapper")
		this.canvas = document.createElement("canvas")
		this.canvas.width = this.w
		this.canvas.height = this.h
		this.canvas.id = "canvas"
		this.ctx = this.canvas.getContext("2d")
		wrapper.appendChild(this.canvas)
	}

	init(w, h) {
		this.ctx.beginPath()
		for (let i = 0; i <= w; i++) {
			this.ctx.moveTo(i * CELL_DIMENSION, 0)
			this.ctx.lineTo(i * CELL_DIMENSION, HEIGHT)
			this.ctx.stroke()
		}
		for (let i = 0; i <= h; i++) {
			this.ctx.moveTo(0, i * CELL_DIMENSION)
			this.ctx.lineTo(WIDTH, i * CELL_DIMENSION)
			this.ctx.stroke()
		}
	}

	setup(w, h, GameBoard, Cell) {
		this.board = new GameBoard(w, h)
		this.board.populateWith(Cell)
		console.log(this.board.table)
	}

	display() {
		for (let y = 0; y < this.board.h; y++) {
			for (let x = 0; x < this.board.w; x++) {
				if (this.board.table[y][x].isAlive) {
					const posX = x * CELL_DIMENSION
					const posY = y * CELL_DIMENSION
					this.ctx.fillRect(posX + 2, posY + 2, CELL_DIMENSION - 4, CELL_DIMENSION - 4)
				}
			}
		}
	}

	handleClick(event) {
		const mPosX = event.offsetX;
		const mposY = event.offsetY;
		const x = Math.floor(mPosX / CELL_DIMENSION)
		const y = Math.floor(mposY / CELL_DIMENSION)
		this.board.table[y][x].isAlive = true
		this.display()
	}


}