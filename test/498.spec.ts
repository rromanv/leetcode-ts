import { describe, expect, it } from 'vitest'
import { findDiagonalOrder } from '../src/498'

describe('498. Diagonal Traverse', () => {
  it('should return elements in diagonal order for a 3x3 matrix', () => {
    const mat = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]
    const expected = [1, 2, 4, 7, 5, 3, 6, 8, 9]
    expect(findDiagonalOrder(mat)).toEqual(expected)
  })

  it('should return elements in diagonal order for a non-square matrix', () => {
    const mat = [
      [1, 2, 3],
      [4, 5, 6],
    ]
    const expected = [1, 2, 4, 5, 3, 6]
    expect(findDiagonalOrder(mat)).toEqual(expected)
  })

  it('should handle empty matrix', () => {
    expect(findDiagonalOrder([])).toEqual([])
  })

  it('should handle single element matrix', () => {
    expect(findDiagonalOrder([[1]])).toEqual([1])
  })

  it('should handle single row matrix', () => {
    expect(findDiagonalOrder([[1, 2, 3, 4]])).toEqual([1, 2, 3, 4])
  })

  it('should handle single column matrix', () => {
    expect(findDiagonalOrder([[1], [2], [3], [4]])).toEqual([1, 2, 3, 4])
  })

  it('should handle larger matrix with alternating diagonal directions', () => {
    const mat = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
    ]
    const expected = [1, 2, 5, 9, 6, 3, 4, 7, 10, 11, 8, 12]
    expect(findDiagonalOrder(mat)).toEqual(expected)
  })
})
