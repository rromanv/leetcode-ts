import { describe, it, expect } from 'vitest'
import { medianSlidingWindow } from '@/480'

describe('480. Sliding Window Median', () => {
  it('should return the median for each window - Example 1', () => {
    const nums = [1, 3, -1, -3, 5, 3, 6, 7]
    const k = 3
    const expected = [1, -1, -1, 3, 5, 6]
    expect(medianSlidingWindow(nums, k)).toEqual(expected)
  })

  it('should return the median for each window with even k', () => {
    const nums = [1, 2, 3, 4, 2, 3, 1, 4, 2]
    const k = 4
    const expected = [2.5, 2.5, 3.0, 2.5, 2.5, 2.5] // Medians are averages of middle two elements
    expect(medianSlidingWindow(nums, k)).toEqual(expected)
  })

  it('should handle window size equal to array length', () => {
    const nums = [1, 4, 2, 3]
    const k = 4
    const expected = [2.5] // Median of [1, 2, 3, 4] is (2+3)/2 = 2.5
    expect(medianSlidingWindow(nums, k)).toEqual(expected)
  })

  it('should handle window size of 1', () => {
    const nums = [1, 3, -1, -3, 5]
    const k = 1
    const expected = [1, 3, -1, -3, 5]
    expect(medianSlidingWindow(nums, k)).toEqual(expected)
  })

  it('should handle empty input array', () => {
    const nums: number[] = []
    const k = 3
    const expected: number[] = []
    expect(medianSlidingWindow(nums, k)).toEqual(expected)
  })

  it('should handle k larger than array length', () => {
    const nums = [1, 2]
    const k = 3
    const expected: number[] = []
    expect(medianSlidingWindow(nums, k)).toEqual(expected)
  })

  it('should handle array with duplicate numbers', () => {
    const nums = [1, 1, 1, 1, 1]
    const k = 3
    const expected = [1, 1, 1]
    expect(medianSlidingWindow(nums, k)).toEqual(expected)
  })

  it('should handle negative numbers', () => {
    const nums = [-5, -2, -8, -1, -4]
    const k = 3
    const expected = [-5, -2, -4] // [-8, -5, -2] -> -5; [-8, -2, -1] -> -2; [-8, -4, -1] -> -4
    expect(medianSlidingWindow(nums, k)).toEqual(expected)
  })

  it('should handle large numbers', () => {
    const nums = [2147483647, 2147483647]
    const k = 2
    const expected = [2147483647.0]
    expect(medianSlidingWindow(nums, k)).toEqual(expected)
  })
})
