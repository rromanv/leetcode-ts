import { expect, test } from 'vitest'
import { largestIsland } from '@/827'

test('Example 1: grid = [[1,0],[0,1]] => 3', () => {
  expect(
    largestIsland([
      [1, 0],
      [0, 1],
    ]),
  ).toBe(3)
})

test('Example 2: grid = [[1,1],[1,0]] => 4', () => {
  expect(
    largestIsland([
      [1, 1],
      [1, 0],
    ]),
  ).toBe(4)
})

test('Example 3: grid = [[1,1],[1,1]] => 4', () => {
  expect(
    largestIsland([
      [1, 1],
      [1, 1],
    ]),
  ).toBe(4)
})

test('Grid with separated islands: grid = [[1,1,0],[1,0,1],[0,1,1]] => 7', () => {
  expect(
    largestIsland([
      [1, 1, 0],
      [1, 0, 1],
      [0, 1, 1],
    ]),
  ).toBe(7)
})

test('Single cell grid with 0: grid = [[0]] => 1', () => {
  expect(largestIsland([[0]])).toBe(1)
})

test('Single cell grid with 1: grid = [[1]] => 1', () => {
  expect(largestIsland([[1]])).toBe(1)
})

test('Large grid with multiple islands', () => {
  const grid = [
    [1, 1, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 1, 1],
    [0, 0, 0, 1, 1],
    [0, 0, 0, 0, 0],
  ]
  expect(largestIsland(grid)).toBe(5)
})

test('Grid where changing 0 connects multiple islands', () => {
  const grid = [
    [1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1],
    [0, 0, 0, 0, 0],
    [1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1],
  ]
  expect(largestIsland(grid)).toBe(9)
})

test('Grid with all 0s', () => {
  expect(
    largestIsland([
      [0, 0],
      [0, 0],
    ]),
  ).toBe(1)
})

test('Grid with all 1s', () => {
  expect(
    largestIsland([
      [1, 1, 1],
      [1, 1, 1],
      [1, 1, 1],
    ]),
  ).toBe(9)
})
