import { expect, test } from 'vitest'
import { Solution } from '@/398'

test('nums = [1,2,3,3,3], target = 3 should return indices 2, 3, or 4 with equal probability', () => {
  const solution = new Solution([1, 2, 3, 3, 3])

  expect(solution.pick(3)).toBeGreaterThanOrEqual(2)
  expect(solution.pick(3)).toBeGreaterThanOrEqual(2)
  expect(solution.pick(3)).toBeGreaterThanOrEqual(2)
})

test('nums = [1], target = 1 should always return index 0', () => {
  const solution = new Solution([1])
  expect(solution.pick(1)).toBe(0)
})

test('nums = [1,2,3,3,3,4,4,5], target = 4 should return indices 5 or 6 with equal probability', () => {
  const solution = new Solution([1, 2, 3, 3, 3, 4, 4, 5])

  expect(solution.pick(4)).toBeGreaterThanOrEqual(5)
  expect(solution.pick(4)).toBeLessThan(7)
  expect(solution.pick(4)).toBeGreaterThanOrEqual(5)
  expect(solution.pick(4)).toBeLessThan(7)
  expect(solution.pick(4)).toBeGreaterThanOrEqual(5)
  expect(solution.pick(4)).toBeLessThan(7)
  expect(solution.pick(4)).toBeGreaterThanOrEqual(5)
  expect(solution.pick(4)).toBeLessThan(7)
})

test('nums = [-1,-1,1,1,1,1,2,2], target = 1 should return indices 2,3,4,5 with equal probability', () => {
  const solution = new Solution([-1, -1, 1, 1, 1, 1, 2, 2])

  expect(solution.pick(1)).toBeGreaterThanOrEqual(2)
  expect(solution.pick(1)).toBeLessThan(6)
  expect(solution.pick(1)).toBeGreaterThanOrEqual(2)
  expect(solution.pick(1)).toBeLessThan(6)
  expect(solution.pick(1)).toBeGreaterThanOrEqual(2)
  expect(solution.pick(1)).toBeLessThan(6)
})
