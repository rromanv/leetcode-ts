// filepath: /Users/rromanv/projects/leetcode-ts/test/34.spec.ts
import { expect, test } from 'vitest'
import { searchRange } from '@/34'

test('nums = [5,7,7,8,8,10], target = 8 => [3,4]', () => {
  expect(searchRange([5, 7, 7, 8, 8, 10], 8)).toStrictEqual([3, 4])
})

test('nums = [5,7,7,8,8,10], target = 6 => [-1,-1]', () => {
  expect(searchRange([5, 7, 7, 8, 8, 10], 6)).toStrictEqual([-1, -1])
})

test('nums = [], target = 0 => [-1,-1]', () => {
  expect(searchRange([], 0)).toStrictEqual([-1, -1])
})

test('nums = [1], target = 1 => [0,0]', () => {
  expect(searchRange([1], 1)).toStrictEqual([0, 0])
})

test('nums = [2,2], target = 2 => [0,1]', () => {
  expect(searchRange([2, 2], 2)).toStrictEqual([0, 1])
})

test('nums = [1,2,3,3,3,3,4,5,9], target = 3 => [2,5]', () => {
  expect(searchRange([1, 2, 3, 3, 3, 3, 4, 5, 9], 3)).toStrictEqual([2, 5])
})
