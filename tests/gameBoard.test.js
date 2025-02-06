import Cell from "../Cell.mjs"
import GameBoard from "../GameBoard.mjs";
import { generateNeighbors, generateTable } from "./test_utills.js";
import { strict as assert } from 'node:assert';
import { before, beforeEach, describe, it, test } from 'node:test'


describe("A Game Board", () => {
	const w = 3
	const h = 3
	let board
	beforeEach(() => {
		board = new GameBoard(w, h)
	})

	it("populates the table with cells", () => {
		board.populateWith(Cell)
		assert.strictEqual(board.table[0][0] instanceof Cell, true)
		assert.strictEqual(board.table.length, h)
		assert.strictEqual(board.table[0].length, w)
	})

	it("generates neighbors for the specific cell", () => {
		/*******************
	 * 		  BOARD 3x3
		 *  | * | 1 | 1 |
		 *  | 1 | 1 | 1 |
		 *  | 1 | 1 | 1 |
		 * 
		 * *****************/
		board.populateWith(Cell)
		let neighbors = board.findNeighbors(0,0)
		assert.strictEqual(neighbors.length, 3)

		neighbors = board.findNeighbors(1,0)
		assert.strictEqual(neighbors.length, 5)

		neighbors = board.findNeighbors(2,0)
		assert.strictEqual(neighbors.length, 3)



		neighbors = board.findNeighbors(1,1)
		assert.strictEqual(neighbors.length, 8)

		neighbors = board.findNeighbors(2,2)
		assert.strictEqual(neighbors.length, 3)
	})

	it ("repopulate table with a new generation of cells", () => {
		let cells = [
			0, 0, 0,
			1, 1, 0,
			1, 1, 1
		]
		let newCells = [
			0, 0, 0,
			1, 0, 1,
			1, 0, 1
		]
		let mockTable = generateTable(w, h, cells)
		board.table = mockTable
		let resultTable = generateTable(w, h, newCells)
		board.repopulate()
		assert.deepStrictEqual(board.table, resultTable)

		cells = [
			1, 1, 1,
			1, 1, 1,
			1, 1, 1
		]
		newCells = [
			1, 0, 1,
			0, 0, 0,
			1, 0, 1
		]

		mockTable = generateTable(w, h, cells)
		board.table = mockTable
		resultTable = generateTable(w, h, newCells)
		board.repopulate()
		assert.deepStrictEqual(board.table, resultTable)
	})
})