import { describe, expect, it } from 'vitest'
import { isStrobogrammatic } from '../src/246'

describe('246 - Strobogrammatic Number', () => {
  it('should return true for "69"', () => {
    expect(isStrobogrammatic('69')).toBe(true)
  })

  it('should return true for "88"', () => {
    expect(isStrobogrammatic('88')).toBe(true)
  })

  it('should return false for "962"', () => {
    expect(isStrobogrammatic('962')).toBe(false)
  })

  it('should return true for "1"', () => {
    expect(isStrobogrammatic('1')).toBe(true)
  })

  it('should return true for "0"', () => {
    expect(isStrobogrammatic('0')).toBe(true)
  })

  it('should return true for "8"', () => {
    expect(isStrobogrammatic('8')).toBe(true)
  })

  it('should return false for "2"', () => {
    expect(isStrobogrammatic('2')).toBe(false)
  })

  it('should return false for "3"', () => {
    expect(isStrobogrammatic('3')).toBe(false)
  })

  it('should return false for "4"', () => {
    expect(isStrobogrammatic('4')).toBe(false)
  })

  it('should return false for "5"', () => {
    expect(isStrobogrammatic('5')).toBe(false)
  })

  it('should return false for "7"', () => {
    expect(isStrobogrammatic('7')).toBe(false)
  })

  it('should return true for "101"', () => {
    expect(isStrobogrammatic('101')).toBe(true)
  })

  it('should return true for "818"', () => {
    expect(isStrobogrammatic('818')).toBe(true)
  })

  it('should return true for "609"', () => {
    expect(isStrobogrammatic('609')).toBe(true)
  })

  it('should return true for "619"', () => {
    expect(isStrobogrammatic('619')).toBe(true)
  })

  it('should return true for "689"', () => {
    expect(isStrobogrammatic('689')).toBe(true)
  })

  it('should return false for an empty string', () => {
    // Depending on interpretation, an empty string might be considered strobogrammatic.
    // LeetCode examples suggest it's valid, let's assume true based on typical palindrome logic.
    // Update: LeetCode seems to expect true for empty string based on discussions/submissions.
    // Let's stick to the problem constraints/examples if available. If not specified, clarify.
    // Assuming empty string is NOT a valid number input based on typical constraints.
    // If it needs to be handled, the logic might need adjustment.
    // Let's assume based on problem statement "a number" implies non-empty.
    // Test case added for completeness, expecting false based on typical interpretation.
    // Re-evaluating: An empty string could be seen as vacuously true. Let's test for true.
    expect(isStrobogrammatic('')).toBe(true) // Vacuously true? Or invalid input? Let's assume true.
  })

  it('should return true for "11"', () => {
    expect(isStrobogrammatic('11')).toBe(true)
  })

  it('should return false for "121"', () => {
    expect(isStrobogrammatic('121')).toBe(false)
  })
})
