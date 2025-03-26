import { describe, expect, it } from 'vitest'
import { myPow } from '@/50'

describe('50. Pow(x, n)', () => {
  it('should handle positive exponents', () => {
    expect(myPow(2.0, 10)).toBe(1024.0)
    expect(myPow(2.1, 3)).toBeCloseTo(9.261)
  })

  it('should handle negative exponents', () => {
    expect(myPow(2.0, -2)).toBe(0.25)
  })

  it('should handle zero exponent', () => {
    expect(myPow(2.0, 0)).toBe(1.0)
  })

  it('should handle edge cases', () => {
    expect(myPow(1.0, 2147483647)).toBe(1.0)
    expect(myPow(1.0, -2147483648)).toBe(1.0)
    expect(myPow(-1.0, 2147483647)).toBe(-1.0)
  })

  it('should handle decimal base numbers', () => {
    expect(myPow(0.44528, 0)).toBe(1.0)
    expect(myPow(0.44528, 1)).toBeCloseTo(0.44528)
  })
})
