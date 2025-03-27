import { describe, expect, it } from 'vitest'
import { MovingAverage } from '@/346'

describe('346. Moving Average from Data Stream', () => {
  it('should calculate moving average with window size 3', () => {
    const movingAverage = new MovingAverage(3)
    expect(movingAverage.next(1)).toBeCloseTo(1.0, 5)
    expect(movingAverage.next(10)).toBeCloseTo(5.5, 5)
    expect(movingAverage.next(3)).toBeCloseTo(4.666667, 5)
    expect(movingAverage.next(5)).toBeCloseTo(6.0, 5)
  })

  it('should calculate moving average with window size 1', () => {
    const movingAverage = new MovingAverage(1)
    expect(movingAverage.next(4)).toBe(4.0)
    expect(movingAverage.next(8)).toBe(8.0)
    expect(movingAverage.next(16)).toBe(16.0)
  })

  it('should calculate moving average with window size 5', () => {
    const movingAverage = new MovingAverage(5)
    expect(movingAverage.next(1)).toBe(1.0)
    expect(movingAverage.next(2)).toBe(1.5)
    expect(movingAverage.next(3)).toBe(2.0)
    expect(movingAverage.next(4)).toBe(2.5)
    expect(movingAverage.next(5)).toBe(3.0)
    expect(movingAverage.next(6)).toBe(4.0)
    expect(movingAverage.next(7)).toBe(5.0)
  })
})
