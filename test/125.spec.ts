import { describe, it, expect } from 'vitest'
import { isPalindrome } from '../src/125'

describe('125. Valid Palindrome', () => {
  it('should return true for basic palindromes', () => {
    expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true)
    expect(isPalindrome('race a car')).toBe(false)
  })

  it('should handle empty strings', () => {
    expect(isPalindrome('')).toBe(true)
    expect(isPalindrome(' ')).toBe(true)
  })

  it('should ignore case', () => {
    expect(isPalindrome('Racecar')).toBe(true)
    expect(isPalindrome('A Santa at Nasa')).toBe(true)
  })

  it('should handle strings with special characters', () => {
    expect(isPalindrome('A man, a plan, a canal: Panama!')).toBe(true)
    expect(isPalindrome('0P')).toBe(false)
  })

  it('should handle purely numeric palindromes', () => {
    expect(isPalindrome('121')).toBe(true)
    expect(isPalindrome('123')).toBe(false)
  })

  it('should handle alphanumeric mixed palindromes', () => {
    expect(isPalindrome('a1b2b1a')).toBe(true)
    expect(isPalindrome('a1b2c')).toBe(false)
  })
})
