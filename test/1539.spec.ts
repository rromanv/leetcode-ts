import { expect, test } from 'vitest'
import { findKthPositive } from '@/1539'

test('arr = [2,3,4,7,11], k = 5 => 9', () => {
  expect(findKthPositive([2, 3, 4, 7, 11], 5)).toBe(9)
})

test('arr = [1,2,3,4], k = 2 => 6', () => {
  expect(findKthPositive([1, 2, 3, 4], 2)).toBe(6)
})

test('arr = [2], k = 1 => 1', () => {
  expect(findKthPositive([2], 1)).toBe(1)
})

test('arr = [3,4,5], k = 2 => 2', () => {
  expect(findKthPositive([3, 4, 5], 2)).toBe(2)
})

test('arr = [1,2,3,4,5], k = 1 => 6', () => {
  expect(findKthPositive([1, 2, 3, 4, 5], 1)).toBe(6)
})

test('arr = [], k = 1 => 1', () => {
  expect(findKthPositive([], 1)).toBe(1)
})

test('arr = [2,3], k = 3 => 5', () => {
  expect(findKthPositive([2, 3], 3)).toBe(5)
})
