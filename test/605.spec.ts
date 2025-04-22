import { describe, expect, it } from 'vitest'
import { canPlaceFlowers } from '@/605'

describe('605. Can Place Flowers', () => {
  it('should return true if n flowers can be placed', () => {
    expect(canPlaceFlowers([1, 0, 0, 0, 1], 1)).toBe(true)
  })

  it('should return false if n flowers cannot be placed', () => {
    expect(canPlaceFlowers([1, 0, 0, 0, 1], 2)).toBe(false)
  })

  it('should handle empty flowerbed', () => {
    expect(canPlaceFlowers([], 1)).toBe(false) // Cannot place in empty bed
    expect(canPlaceFlowers([], 0)).toBe(true) // Can place 0 flowers
  })

  it('should handle flowerbed with only zeros', () => {
    expect(canPlaceFlowers([0, 0, 0, 0, 0], 3)).toBe(true)
    expect(canPlaceFlowers([0, 0, 0, 0, 0], 4)).toBe(false)
  })

  it('should handle flowerbed with only ones', () => {
    expect(canPlaceFlowers([1, 1, 1, 1, 1], 1)).toBe(false)
    expect(canPlaceFlowers([1, 1, 1, 1, 1], 0)).toBe(true)
  })

  it('should handle placing zero flowers', () => {
    expect(canPlaceFlowers([1, 0, 1, 0, 1], 0)).toBe(true)
    expect(canPlaceFlowers([0, 0, 0], 0)).toBe(true)
  })

  it('should handle edge cases with single plot', () => {
    expect(canPlaceFlowers([0], 1)).toBe(true)
    expect(canPlaceFlowers([1], 1)).toBe(false)
    expect(canPlaceFlowers([0], 0)).toBe(true)
    expect(canPlaceFlowers([1], 0)).toBe(true)
  })

  it('should handle cases where placement is possible at the beginning or end', () => {
    expect(canPlaceFlowers([0, 0, 1, 0, 0], 2)).toBe(true) // Place at index 0 and 4
    expect(canPlaceFlowers([0, 0, 1, 0, 1], 1)).toBe(true) // Place at index 0
    expect(canPlaceFlowers([1, 0, 1, 0, 0], 1)).toBe(true) // Place at index 4
  })

  it('should handle larger inputs', () => {
    const largeBed = Array(1000).fill(0)
    expect(canPlaceFlowers(largeBed, 500)).toBe(true)
    expect(canPlaceFlowers(largeBed, 501)).toBe(false)

    const alternatingBed = Array(1000)
      .fill(0)
      .map((_, i) => i % 2) // [0, 1, 0, 1, ...]
    expect(canPlaceFlowers(alternatingBed, 1)).toBe(false)
    expect(canPlaceFlowers(alternatingBed, 0)).toBe(true)
  })
})
