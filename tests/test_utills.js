import Cell from "../Cell.mjs"
export const generateNeighbors = (...rest) => {
	const result = rest.map(val => new Cell(0, 0, Boolean(val)))
	return result
}