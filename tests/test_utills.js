import Cell from "../Cell.mjs"
export const generateNeighbors = (...rest) => {
	const result = rest.map(val => new Cell(0, 0, Boolean(val)))
	return result
}

export const generateTable = (w, h, args) => {
	const table = []
	let argInd = 0
	for (let y = 0; y < h; y++) {
		table[y] = []
		for (let x = 0; x < w; x++) {
			table[y][x] = new Cell(x, y, Boolean(args[argInd++]))
		}
	}
	return table
}