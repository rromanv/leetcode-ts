import { expect, test } from 'vitest'
import { shortestPathBinaryMatrix } from '@/1091'

test('grid = [[0,1],[1,0]] => 2', () => {
  expect(
    shortestPathBinaryMatrix([
      [0, 1],
      [1, 0],
    ]),
  ).toBe(2)
})

test('grid = [[0,0,0],[1,1,0],[1,1,0]] => 4', () => {
  expect(
    shortestPathBinaryMatrix([
      [0, 0, 0],
      [1, 1, 0],
      [1, 1, 0],
    ]),
  ).toBe(4)
})

test('grid = [[1,0,0],[1,1,0],[1,1,0]] => -1 (top-left cell is blocked)', () => {
  expect(
    shortestPathBinaryMatrix([
      [1, 0, 0],
      [1, 1, 0],
      [1, 1, 0],
    ]),
  ).toBe(-1)
})

test('grid = [[0,0,0],[0,1,0],[0,0,0]] => 4', () => {
  expect(
    shortestPathBinaryMatrix([
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0],
    ]),
  ).toBe(4)
})

test('grid = [[0,0],[0,0]] => 2 (small grid)', () => {
  expect(
    shortestPathBinaryMatrix([
      [0, 0],
      [0, 0],
    ]),
  ).toBe(2)
})

test('grid = [[0]] => 1 (single cell grid)', () => {
  expect(shortestPathBinaryMatrix([[0]])).toBe(1)
})

test('grid = [[0,1,1],[1,1,1],[1,1,0]] => -1 (no valid path)', () => {
  expect(
    shortestPathBinaryMatrix([
      [0, 1, 1],
      [1, 1, 1],
      [1, 1, 0],
    ]),
  ).toBe(-1)
})

test('large grid with path', () => {
  const grid = Array(10)
    .fill(0)
    .map(() => Array(10).fill(0))
  // Add some obstacles
  for (let i = 0; i < 8; i++) {
    grid[i][5] = 1
  }
  expect(shortestPathBinaryMatrix(grid)).toBe(13)
})
