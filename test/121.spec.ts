import { expect, test } from 'vitest'
import { maxProfit } from '@/121'

test('prices = [7,1,5,3,6,4] => 5', () => {
  expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5)
})

test('prices = [7,6,4,3,1] => 0', () => {
  expect(maxProfit([7, 6, 4, 3, 1])).toBe(0)
})

test('empty array => 0', () => {
  expect(maxProfit([])).toBe(0)
})

test('single price => 0', () => {
  expect(maxProfit([5])).toBe(0)
})

test('prices = [2,4,1] => 2', () => {
  expect(maxProfit([2, 4, 1])).toBe(2)
})

test('prices with same values => 0', () => {
  expect(maxProfit([1, 1, 1, 1])).toBe(0)
})

test('large price increase => correct profit', () => {
  expect(maxProfit([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(9)
})
