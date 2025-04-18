import { describe, expect, it } from 'vitest'
import { MedianFinder } from '@/295'

describe('295. Find Median from Data Stream', () => {
  it('should return median after each insertion for odd number of elements', () => {
    const mf = new MedianFinder()
    mf.addNum(1)
    expect(mf.findMedian()).toBe(1)
    mf.addNum(3)
    expect(mf.findMedian()).toBe((1 + 3) / 2)
    mf.addNum(2)
    expect(mf.findMedian()).toBe(2)
  })

  it('should return median after each insertion for even number of elements', () => {
    const mf = new MedianFinder()
    mf.addNum(5)
    mf.addNum(15)
    expect(mf.findMedian()).toBe((5 + 15) / 2)
    mf.addNum(10)
    mf.addNum(20)
    expect(mf.findMedian()).toBe((10 + 15) / 2)
  })

  it('should handle negative and duplicate numbers', () => {
    const mf = new MedianFinder()
    mf.addNum(-1)
    mf.addNum(-1)
    expect(mf.findMedian()).toBe(-1)
    mf.addNum(-1)
    expect(mf.findMedian()).toBe(-1)
  })

  it('should handle a large sequence of numbers', () => {
    const mf = new MedianFinder()
    const nums = Array.from({ length: 16 }, (_, i) => i)
    nums.forEach((num) => mf.addNum(num))
    expect(mf.findMedian()).toBe((7 + 8) / 2)
  })
})
