import { describe, expect, it } from 'vitest'
import { calculate } from '@/224'

describe('224. Basic Calculator', () => {
  it('should evaluate simple addition', () => {
    expect(calculate('1 + 1')).toBe(2)
  })

  it('should evaluate subtraction and addition with spaces', () => {
    expect(calculate(' 2-1 + 2 ')).toBe(3)
  })

  it('should evaluate complex expression with parentheses', () => {
    expect(calculate('(1+(4+5+2)-3)+(6+8)')).toBe(23)
  })

  it('should handle single number', () => {
    expect(calculate('0')).toBe(0)
  })

  it('should handle number with spaces', () => {
    expect(calculate(' 42 ')).toBe(42)
  })

  it('should handle nested parentheses', () => {
    expect(calculate(' ( 3 + (4 + 5)) ')).toBe(12)
  })

  it('should handle leading minus sign within parentheses', () => {
    expect(calculate('(-1+2)')).toBe(1)
  })

  it('should handle complex expression with leading minus', () => {
    expect(calculate('-(1+2)+3')).toBe(0)
  })

  it('should handle expression starting with parentheses', () => {
    expect(calculate('(5+3)-4')).toBe(4)
  })

  it('should handle expression with multiple spaces', () => {
    expect(calculate('  1 +   2  - 3 ')).toBe(0)
  })

  // LeetCode example test case
  it('should handle LeetCode example 1', () => {
    expect(calculate('1 + 1')).toBe(2)
  })

  // LeetCode example test case
  it('should handle LeetCode example 2', () => {
    expect(calculate(' 2-1 + 2 ')).toBe(3)
  })

  // LeetCode example test case
  it('should handle LeetCode example 3', () => {
    expect(calculate('(1+(4+5+2)-3)+(6+8)')).toBe(23)
  })

  // Additional test case for unary minus and parentheses
  it('should handle unary minus with nested parentheses', () => {
    expect(calculate(' - (3 + (4 + 5))')).toBe(-12)
  })

  // Additional test case for negative number inside parentheses
  it('should handle negative number inside parentheses', () => {
    expect(calculate('   (  -2 ) ')).toBe(-2)
  })

  it('should handle complex expression with multiple subtractions', () => {
    expect(calculate('1-(     -2)')).toBe(3) // 1 - (-2) = 3
  })

  it('should handle complex expression with multiple operations and parentheses', () => {
    expect(calculate('2-(5-6)')).toBe(3) // 2 - (-1) = 3
  })

  it('should handle expression ending with number', () => {
    expect(calculate('1+2-3+4')).toBe(4)
  })
})
