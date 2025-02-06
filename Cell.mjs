export default class Cell {

	constructor(x, y, isAlive) {
		this.posX = x || 0
		this.posY = y || 0
		this.isAlive = isAlive || false
	}

	evaluate(neighbors) {
		let childCell
		let aliveNeighbors = 0
		neighbors.forEach((cell) => {
			if (cell.isAlive) aliveNeighbors++
		})

		if (aliveNeighbors < 2 || aliveNeighbors > 3) {
			return new Cell()
		}
		if (this.isAlive == false && aliveNeighbors !== 3) {
			return new Cell()
		}
		childCell = new Cell()
		childCell.isAlive = true
		return childCell 
	}
}