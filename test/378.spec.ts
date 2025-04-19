import { describe, it, expect } from 'vitest'
import { kthSmallest } from '../src/378'

describe('kthSmallest', () => {
  it('should return the kth smallest element in a typical matrix', () => {
    const matrix = [
      [1, 5, 9],
      [10, 11, 13],
      [12, 13, 15],
    ]
    const k = 8
    expect(kthSmallest(matrix, k)).toBe(13)
  })

  it('should return the kth smallest element when k is 1', () => {
    const matrix = [
      [1, 5, 9],
      [10, 11, 13],
      [12, 13, 15],
    ]
    const k = 1
    expect(kthSmallest(matrix, k)).toBe(1)
  })

  it('should return the kth smallest element when k is n*n', () => {
    const matrix = [
      [1, 5, 9],
      [10, 11, 13],
      [12, 13, 15],
    ]
    const k = 9
    expect(kthSmallest(matrix, k)).toBe(15)
  })

  it('should handle a matrix with negative numbers', () => {
    const matrix = [
      [-5, -4],
      [-3, -2],
    ]
    const k = 3
    expect(kthSmallest(matrix, k)).toBe(-3)
  })

  it('should handle a 1x1 matrix', () => {
    const matrix = [[-5]]
    const k = 1
    expect(kthSmallest(matrix, k)).toBe(-5)
  })

  it('should handle a larger matrix', () => {
    const matrix = [
      [1, 4, 7, 11, 15],
      [2, 5, 8, 12, 19],
      [3, 6, 9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30],
    ]
    const k = 5
    expect(kthSmallest(matrix, k)).toBe(5)
  })

  it('should handle a matrix with duplicate values correctly', () => {
    const matrix = [
      [1, 2],
      [1, 3],
    ]
    const k = 2
    // The sorted elements are 1, 1, 2, 3. The 2nd smallest is 1.
    expect(kthSmallest(matrix, k)).toBe(1)
  })

  it('should handle another case with duplicates', () => {
    const matrix = [
      [1, 3, 5],
      [6, 7, 12],
      [11, 14, 14],
    ]
    const k = 6
    // Sorted: 1, 3, 5, 6, 7, 11, 12, 14, 14. The 6th smallest is 11.
    expect(kthSmallest(matrix, k)).toBe(11)
  })

  it('should handle k equal to n*n in a matrix with duplicates', () => {
    const matrix = [
      [1, 1],
      [1, 1],
    ]
    const k = 4
    expect(kthSmallest(matrix, k)).toBe(1)
  })
})
