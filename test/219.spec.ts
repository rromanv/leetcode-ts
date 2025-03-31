import { expect, test } from 'vitest'
import { containsNearbyDuplicate } from '@/219'

test('nums = [1,2,3,1], k = 3 => true', () => {
  expect(containsNearbyDuplicate([1, 2, 3, 1], 3)).toBe(true)
})

test('nums = [1,0,1,1], k = 1 => true', () => {
  expect(containsNearbyDuplicate([1, 0, 1, 1], 1)).toBe(true)
})

test('nums = [1,2,3,1,2,3], k = 2 => false', () => {
  expect(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)).toBe(false)
})

test('empty array returns false', () => {
  expect(containsNearbyDuplicate([], 1)).toBe(false)
})

test('array with single element returns false', () => {
  expect(containsNearbyDuplicate([1], 1)).toBe(false)
})

test('array with all same elements and k=1 returns true', () => {
  expect(containsNearbyDuplicate([1, 1, 1], 1)).toBe(true)
})

test('k=0 returns false for any array', () => {
  expect(containsNearbyDuplicate([1, 1], 0)).toBe(false)
})

test('large k value returns true if duplicates exist', () => {
  expect(containsNearbyDuplicate([1, 2, 3, 1], 10)).toBe(true)
})
