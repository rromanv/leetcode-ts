import { describe, expect, it } from 'vitest'
import { getLargestOutlier } from '../src/3371'

describe('getLargestOutlier', () => {
  it('should find the odd outlier in an array numbers', () => {
    expect(getLargestOutlier([2, 3, 5, 10])).toBe(10)
  })
  it('should find the odd outlier in an array negative numbers', () => {
    expect(getLargestOutlier([-2, -1, -3, -6, 4])).toBe(4)
  })
  it('should find the odd outlier in an array mostly same number', () => {
    expect(getLargestOutlier([1, 1, 1, 1, 1, 5, 5])).toBe(5)
  })
})
