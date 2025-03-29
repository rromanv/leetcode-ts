import { expect, test } from 'vitest'
import { numIslands } from '@/200'

test('Example 1: grid with multiple islands => 1', () => {
  const grid = [
    ['1', '1', '1', '1', '0'],
    ['1', '1', '0', '1', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '0', '0', '0'],
  ]
  expect(numIslands(grid)).toBe(1)
})

test('Example 2: grid with multiple islands => 3', () => {
  const grid = [
    ['1', '1', '0', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '0', '1', '1'],
  ]
  expect(numIslands(grid)).toBe(3)
})

test('Empty grid => 0', () => {
  expect(numIslands([])).toBe(0)
})

test('Grid with only water => 0', () => {
  const grid = [
    ['0', '0', '0'],
    ['0', '0', '0'],
    ['0', '0', '0'],
  ]
  expect(numIslands(grid)).toBe(0)
})

test('Grid with only land => 1', () => {
  const grid = [
    ['1', '1', '1'],
    ['1', '1', '1'],
    ['1', '1', '1'],
  ]
  expect(numIslands(grid)).toBe(1)
})

test('Single cell grid with land => 1', () => {
  const grid = [['1']]
  expect(numIslands(grid)).toBe(1)
})

test('Single cell grid with water => 0', () => {
  const grid = [['0']]
  expect(numIslands(grid)).toBe(0)
})

test('Grid with diagonal lands (should not count as connected) => 5', () => {
  const grid = [
    ['1', '0', '1'],
    ['0', '1', '0'],
    ['1', '0', '1'],
  ]
  expect(numIslands(grid)).toBe(5)
})

test('Non-square grid => 2', () => {
  const grid = [
    ['1', '1', '0', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '0', '1', '1'],
  ]
  expect(numIslands(grid)).toBe(2)
})

test('Complex shaped islands => 2', () => {
  const grid = [
    ['1', '1', '0', '0', '0'],
    ['1', '0', '0', '0', '1'],
    ['1', '0', '1', '0', '1'],
    ['0', '0', '1', '1', '1'],
  ]
  expect(numIslands(grid)).toBe(2)
})
