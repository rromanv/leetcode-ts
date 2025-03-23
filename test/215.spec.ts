import { expect, test } from 'vitest'
import { findKthLargest } from '@/215'

test('nums = [3,2,1,5,6,4], k = 2 => 5', () => {
  expect(findKthLargest([3, 2, 1, 5, 6, 4], 2)).toBe(5)
})

test('nums = [3,2,3,1,2,4,5,5,6], k = 4 => 4', () => {
  expect(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)).toBe(4)
})
