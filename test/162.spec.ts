import { expect, test } from 'vitest'
import { findPeakElement } from '@/162'

test('nums = [1,2,3,1] => 2', () => {
  // Peak is at index 2 (value 3)
  expect(findPeakElement([1, 2, 3, 1])).toBe(2)
})

test('nums = [1] => 0', () => {
  // Single element is always a peak
  expect(findPeakElement([1])).toBe(0)
})

test('nums = [1,2] => 1', () => {
  // Peak is at index 1 (value 2)
  expect(findPeakElement([1, 2])).toBe(1)
})

test('nums = [3,2,1] => 0', () => {
  // Peak is at index 0 (value 3)
  expect(findPeakElement([3, 2, 1])).toBe(0)
})
