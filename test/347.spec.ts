import { expect, test } from 'vitest'
import { topKFrequent } from '@/347'

test('nums = [1,1,1,2,2,3], k = 2 => [1,2]', () => {
  // Most frequent elements are 1 (frequency 3) and 2 (frequency 2)
  const result = topKFrequent([1, 1, 1, 2, 2, 3], 2)
  // Sort for consistent test results since the order doesn't matter
  expect(result.sort()).toStrictEqual([1, 2])
})

test('nums = [1], k = 1 => [1]', () => {
  expect(topKFrequent([1], 1)).toStrictEqual([1])
})

test('nums = [1,2], k = 2 => [1,2]', () => {
  const result = topKFrequent([1, 2], 2)
  expect(result.sort()).toStrictEqual([1, 2])
})

test('nums = [4,1,-1,2,-1,2,3], k = 2 => [-1,2]', () => {
  // Most frequent elements are -1 (frequency 2) and 2 (frequency 2)
  const result = topKFrequent([4, 1, -1, 2, -1, 2, 3], 2)
  expect(result.sort((a, b) => a - b)).toStrictEqual([-1, 2])
})

test('nums = [3,0,1,0], k = 1 => [0]', () => {
  // Most frequent element is 0 (frequency 2)
  expect(topKFrequent([3, 0, 1, 0], 1)).toStrictEqual([0])
})
