import Cell from "../Cell.mjs"
import { generateNeighbors } from "./test_utills.js";
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

	it ("dies if the number of alive members is less than 2", () => {
		let neighbors = generateNeighbors(1,0,0,0)
		const newCell = cell.evaluate(neighbors)
		assert.strictEqual(newCell.isAlive, false)
	})

	it ("dies if the number of alive members is more than 3", () => {
		let neighbors = generateNeighbors(1,0,1,1,1)
		const newCell = cell.evaluate(neighbors)
		assert.strictEqual(newCell.isAlive, false)
	})
	it ("lives if the number of alive neighbors is 2 and it's alive", () => {
		let neighbors = generateNeighbors(1,0,1,0,0)
		cell.isAlive = true
		const newCell = cell.evaluate(neighbors)
		assert.strictEqual(newCell.isAlive, true)
	})

	it ("stays death if the number of alive neighbors is not exactly 3 and it's death", () => {
		let neighbors = generateNeighbors(1,0,1,0,0)
		const newCell = cell.evaluate(neighbors)
		assert.strictEqual(newCell.isAlive, false)
	})

	it ("reborns if the number of alive neighbors is 3", () => {
		let neighbors = generateNeighbors(1,0,1,0,1)
		const newCell = cell.evaluate(neighbors)
		assert.strictEqual(newCell.isAlive, true)
	})

})
