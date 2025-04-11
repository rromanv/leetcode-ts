import { expect, test } from 'vitest'
import { checkSubarraySum } from '@/523'

test('nums = [23,2,4,6,7], k = 6 => true', () => {
  expect(checkSubarraySum([23, 2, 4, 6, 7], 6)).toBe(true)
})

test('nums = [23,2,6,4,7], k = 6 => true', () => {
  expect(checkSubarraySum([23, 2, 6, 4, 7], 6)).toBe(true)
})

test('nums = [23,2,6,4,7], k = 13 => false', () => {
  expect(checkSubarraySum([23, 2, 6, 4, 7], 13)).toBe(false)
})

// Edge cases
test('nums = [0,0], k = 1 => true (sum of zeros is divisible by any k)', () => {
  expect(checkSubarraySum([0, 0], 1)).toBe(true)
})

test('nums = [1,0], k = 2 => false (no valid subarray)', () => {
  expect(checkSubarraySum([1, 0], 2)).toBe(false)
})

test('nums = [5,0,0,0], k = 3 => true (subarray [0,0] has sum 0 which is divisible by 3)', () => {
  expect(checkSubarraySum([5, 0, 0, 0], 3)).toBe(true)
})

// Boundary cases
test('nums = [1], k = 1 => false (subarray must be at least size 2)', () => {
  expect(checkSubarraySum([1], 1)).toBe(false)
})

test('nums = [1,2,3,4,5,6], k = 0 => false (k = 0 is a special case as division by 0 is undefined)', () => {
  expect(checkSubarraySum([1, 2, 3, 4, 5, 6], 0)).toBe(false)
})

test('nums = [23,2,4,6,7], k = -6 => true (negative k should work the same as positive k)', () => {
  expect(checkSubarraySum([23, 2, 4, 6, 7], -6)).toBe(true)
})

test('nums = [0,0], k = -1 => true (sum of zeros is divisible by any non-zero k)', () => {
  expect(checkSubarraySum([0, 0], -1)).toBe(true)
})
