export default class Cell {

	constructor(x, y) {
		this.posX = x
		this.posY = y
		this.isAlive = false
	}

	evaluate(neighbors) {
		return new Cell(this.posX, this.posY)
	}
}