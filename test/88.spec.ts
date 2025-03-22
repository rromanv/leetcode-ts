import { expect, test } from 'vitest'
import { merge } from '@/88'

test('nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3 => [1,2,2,3,5,6]', () => {
  const nums1 = [1, 2, 3, 0, 0, 0],
    m = 3,
    nums2 = [2, 5, 6],
    n = 3

  merge(nums1, m, nums2, n)
  expect(nums1).toStrictEqual([1, 2, 2, 3, 5, 6])
})

test('nums1 = [1], m = 1, nums2 = [], n = 0 => [1]', () => {
  const nums1 = [1],
    m = 1,
    nums2 = new Array<number>(),
    n = 1

  merge(nums1, m, nums2, n)
  expect(nums1).toStrictEqual([1])
})

test('nums1 = [0], m = 0, nums2 = [1], n = 1 => [1]', () => {
  const nums1 = [0],
    m = 0,
    nums2 = [1],
    n = 1

  merge(nums1, m, nums2, n)
  expect(nums1).toStrictEqual([1])
})
