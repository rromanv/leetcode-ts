import { describe, it, expect } from 'vitest'
import { search } from '../src/33'

describe('33', () => {
  it('should return the index if target is found in rotated array', () => {
    expect(search([4, 5, 6, 7, 0, 1, 2], 0)).toBe(4)
  })

  it('should return the index if target is found at the beginning', () => {
    expect(search([4, 5, 6, 7, 0, 1, 2], 4)).toBe(0)
  })

  it('should return the index if target is found at the end', () => {
    expect(search([4, 5, 6, 7, 0, 1, 2], 2)).toBe(6)
  })

  it('should return -1 if target is not found', () => {
    expect(search([4, 5, 6, 7, 0, 1, 2], 3)).toBe(-1)
  })

  it('should handle array not rotated', () => {
    expect(search([1, 2, 3, 4, 5, 6], 4)).toBe(3)
  })

  it('should handle array not rotated and target not found', () => {
    expect(search([1, 2, 3, 4, 5, 6], 7)).toBe(-1)
  })

  it('should handle array with one element, target found', () => {
    expect(search([1], 1)).toBe(0)
  })

  it('should handle array with one element, target not found', () => {
    expect(search([1], 0)).toBe(-1)
  })

  it('should handle empty array', () => {
    expect(search([], 5)).toBe(-1)
  })

  it('should handle rotation at the last element', () => {
    expect(search([3, 1], 1)).toBe(1)
    expect(search([3, 1], 3)).toBe(0)
    expect(search([3, 1], 0)).toBe(-1)
  })

  it('should handle rotation at the first element (no rotation)', () => {
    expect(search([1, 3], 1)).toBe(0)
    expect(search([1, 3], 3)).toBe(1)
    expect(search([1, 3], 0)).toBe(-1)
  })
})
