export default class GameBoard {
	constructor(w, h) {
		this.w = w
		this.h = h
		this.table = []
	}

	populateWith(Target) {
		for (let y = 0; y < this.h; y++) {
			this.table[y] = []
			for (let x = 0; x < this.w; x++) {
				this.table[y][x] = new Target(x, y)
			}
		}
	}

	findNeighbors(x, y) {
		let neighbors = []
		for (let row = y - 1; row <= y + 1; row++) {
			for (let col = x - 1; col <= x + 1; col++) {
				if (col < 0 || col >= this.w || row < 0 || row >= this.h) continue
				if (row === y && col === x) continue
				neighbors.push(this.table[row][col])
			}
		}
		return neighbors
	}

	repopulate() {
		let newTable = []
		for (let y = 0; y < this.h; y++) {
			newTable[y] = []
			for (let x = 0; x < this.w; x++) {
				const neighbors = this.findNeighbors(x, y)
				const newCell = this.table[y][x].evaluate(neighbors)
				newCell.posX = x;
				newCell.posY = y;
				newTable[y][x] = newCell
			}
		}
		this.table = newTable
	}
}