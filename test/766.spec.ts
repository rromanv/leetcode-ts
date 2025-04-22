import { describe, expect, it } from 'vitest'
import { isToeplitzMatrix } from '@/766'

describe('766. Toeplitz Matrix', () => {
  it('should return true for a valid Toeplitz matrix', () => {
    const matrix = [
      [1, 2, 3, 4],
      [5, 1, 2, 3],
      [9, 5, 1, 2],
    ]
    expect(isToeplitzMatrix(matrix)).toBe(true)
  })

  it('should return false for a non-Toeplitz matrix', () => {
    const matrix = [
      [1, 2],
      [2, 2],
    ]
    expect(isToeplitzMatrix(matrix)).toBe(false)
  })

  it('should return true for a single-row matrix', () => {
    const matrix = [[1, 2, 3]]
    expect(isToeplitzMatrix(matrix)).toBe(true)
  })

  it('should return true for a single-column matrix', () => {
    const matrix = [[1], [2], [3]]
    expect(isToeplitzMatrix(matrix)).toBe(true)
  })

  it('should return true for a 1x1 matrix', () => {
    const matrix = [[5]]
    expect(isToeplitzMatrix(matrix)).toBe(true)
  })

  it('should return true for a 2x2 Toeplitz matrix', () => {
    const matrix = [
      [1, 2],
      [3, 1],
    ]
    expect(isToeplitzMatrix(matrix)).toBe(true)
  })

  it('should return false for a 2x2 non-Toeplitz matrix', () => {
    const matrix = [
      [1, 2],
      [1, 3], // Mismatch at [1][1] vs [0][0]
    ]
    expect(isToeplitzMatrix(matrix)).toBe(false)
  })

  it('should handle larger matrices', () => {
    const matrix = [
      [1, 1, 1, 1, 1],
      [2, 1, 1, 1, 1],
      [3, 2, 1, 1, 1],
      [4, 3, 2, 1, 1],
      [5, 4, 3, 2, 1],
    ]
    expect(isToeplitzMatrix(matrix)).toBe(true)
  })

  it('should handle larger non-Toeplitz matrices', () => {
    const matrix = [
      [1, 1, 1, 1, 1],
      [2, 1, 1, 1, 1],
      [3, 2, 1, 9, 1], // Mismatch
      [4, 3, 2, 1, 1],
      [5, 4, 3, 2, 1],
    ]
    expect(isToeplitzMatrix(matrix)).toBe(false)
  })
})
