import { expect, test } from 'vitest'
import { maxAreaOfIsland } from '@/695'

test('Example 1: Grid with multiple islands of varying sizes => 6', () => {
  const grid = [
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  ]
  expect(maxAreaOfIsland(grid)).toBe(6)
})

test('Example 2: Grid with only water => 0', () => {
  const grid = [[0, 0, 0, 0, 0, 0, 0, 0]]
  expect(maxAreaOfIsland(grid)).toBe(0)
})

test('Grid with single cell island => 1', () => {
  const grid = [
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ]
  expect(maxAreaOfIsland(grid)).toBe(1)
})

test('Grid with one large island => 25', () => {
  const grid = [
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
  ]
  expect(maxAreaOfIsland(grid)).toBe(25)
})

test('Grid with multiple islands of the same max size => 4', () => {
  const grid = [
    [1, 1, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 1, 1],
    [0, 0, 0, 1, 1],
  ]
  expect(maxAreaOfIsland(grid)).toBe(4)
})

test('Grid with islands that form complex shapes => 10', () => {
  const grid = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 0, 0],
    [0, 1, 0, 0, 1, 0, 0],
    [0, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
  ]
  expect(maxAreaOfIsland(grid)).toBe(10)
})

test('Grid with diagonal lands (should not count as connected) => 1', () => {
  const grid = [
    [1, 0, 1],
    [0, 0, 0],
    [1, 0, 1],
  ]
  expect(maxAreaOfIsland(grid)).toBe(1)
})

test('Empty grid => 0', () => {
  expect(maxAreaOfIsland([])).toBe(0)
})

test('Grid with single row => 3', () => {
  const grid = [[1, 1, 1, 0, 0, 1, 1]]
  expect(maxAreaOfIsland(grid)).toBe(3)
})

test('Grid with single column => 2', () => {
  const grid = [[1], [1], [0], [0], [1]]
  expect(maxAreaOfIsland(grid)).toBe(2)
})
