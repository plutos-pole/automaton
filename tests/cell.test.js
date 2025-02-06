import Cell from "../Cell.mjs"
import { strict as assert } from 'node:assert';
import { before, beforeEach, describe, it, test } from 'node:test'


describe("A cell", () => {
	let x = 0
	let y = 0
	let cell
	beforeEach(() => {
		cell = new Cell(x, y)
	})
	it("has x and y position", () => {
		assert.strictEqual(typeof cell.posX, 'number')
		assert.strictEqual(typeof cell.posY, 'number')
	})

	it ("starts dead", () => {
		assert.strictEqual(cell.isAlive, false)
	})

	it ("evaluates its next state and returns itself in potentially new state", () => {
		const neighbors = []
		const new_cell = cell.evaluate(neighbors)
		assert.strictEqual(new_cell instanceof Cell, true)
	})

})
