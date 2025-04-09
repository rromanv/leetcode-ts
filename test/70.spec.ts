import { describe, expect, it } from 'vitest'
import { climbStairs } from '../src/70'

describe('70. Climbing Stairs', () => {
  it('should return 1 when n = 1', () => {
    expect(climbStairs(1)).toBe(1)
  })

  it('should return 2 when n = 2', () => {
    expect(climbStairs(2)).toBe(2)
  })

  it('should return 3 when n = 3', () => {
    expect(climbStairs(3)).toBe(3)
  })

  it('should return 5 when n = 4', () => {
    expect(climbStairs(4)).toBe(5)
  })

  it('should return 8 when n = 5', () => {
    expect(climbStairs(5)).toBe(8)
  })

  it('should handle n = 0 (edge case)', () => {
    expect(climbStairs(0)).toBe(1)
  })

  it('should handle larger n', () => {
    expect(climbStairs(10)).toBe(89)
    expect(climbStairs(20)).toBe(10946)
  })
})
