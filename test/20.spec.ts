import { describe, expect, it } from 'vitest'
import { isValid } from '../src/20'

describe('20. Valid Parentheses', () => {
  it('should return true for valid simple parentheses', () => {
    expect(isValid('()')).toBe(true)
  })

  it('should return true for valid nested parentheses', () => {
    expect(isValid('()[]{}')).toBe(true)
  })

  it('should return true for valid mixed and nested parentheses', () => {
    expect(isValid('{[]}')).toBe(true)
  })

  it('should return false for invalid closing order', () => {
    expect(isValid('([)]')).toBe(false)
  })

  it('should return false for unmatched opening brackets', () => {
    expect(isValid('((')).toBe(false)
  })

  it('should return false for unmatched closing brackets', () => {
    expect(isValid('))')).toBe(false)
  })

  it('should return false for wrong bracket types', () => {
    expect(isValid('(]')).toBe(false)
  })

  it('should return true for empty string', () => {
    expect(isValid('')).toBe(true)
  })

  it('should return false for alternating open and close brackets of different types', () => {
    expect(isValid('([)]')).toBe(false)
  })

  it('should return true for complex nested valid parentheses', () => {
    expect(isValid('({[()]}{[()]})')).toBe(true)
  })
})
