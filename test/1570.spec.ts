import { expect, test } from 'vitest'
import { SparseVector } from '@/1570'

test('Dot product of [1,0,0,2,3] and [0,3,0,4,0] should be 8', () => {
  const v1 = new SparseVector([1, 0, 0, 2, 3])
  const v2 = new SparseVector([0, 3, 0, 4, 0])
  expect(v1.dotProduct(v2)).toBe(8)
})

test('Dot product of [0,1,0,0,0] and [0,0,0,0,2] should be 0', () => {
  const v1 = new SparseVector([0, 1, 0, 0, 0])
  const v2 = new SparseVector([0, 0, 0, 0, 2])
  expect(v1.dotProduct(v2)).toBe(0)
})

test('Dot product of [0,1,0,0,2,0,0] and [1,0,0,0,3,0,4] should be 6', () => {
  const v1 = new SparseVector([0, 1, 0, 0, 2, 0, 0])
  const v2 = new SparseVector([1, 0, 0, 0, 3, 0, 4])
  expect(v1.dotProduct(v2)).toBe(6)
})

test('Handles empty vectors correctly', () => {
  const v1 = new SparseVector([])
  const v2 = new SparseVector([])
  expect(v1.dotProduct(v2)).toBe(0)
})
