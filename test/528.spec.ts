import { expect, test, describe, beforeEach, vi } from 'vitest'
import { Solution } from '@/528'

describe('528. Random Pick with Weight', () => {
  // Mock for Math.random to make tests deterministic
  let randomMock: ReturnType<typeof vi.spyOn>

  beforeEach(() => {
    // Reset mock before each test
    randomMock = vi.spyOn(Math, 'random')
  })

  test('Example 1: w = [1] should always pick index 0', () => {
    randomMock.mockReturnValue(0) // Doesn't matter in this case
    const solution = new Solution([1])
    expect(solution.pickIndex()).toBe(0)
  })

  test('Example 2: w = [1, 3] should pick index 1 with 75% probability', () => {
    // For w = [1, 3], prefixSums = [1, 4], totalSum = 4
    // If random value is < 0.25, pick index 0, else pick index 1

    // Mock random to return values that would select index 0
    randomMock.mockReturnValueOnce(0.1) // 0.1 * 4 = 0.4, should pick index 0
    const solution1 = new Solution([1, 3])
    expect(solution1.pickIndex()).toBe(0)

    // Mock random to return values that would select index 1
    randomMock.mockReturnValueOnce(0.5) // 0.5 * 4 = 2, should pick index 1
    expect(solution1.pickIndex()).toBe(1)

    randomMock.mockReturnValueOnce(0.8) // 0.8 * 4 = 3.2, should pick index 1
    expect(solution1.pickIndex()).toBe(1)
  })

  test('Example 3: w = [1, 1, 1, 1] should pick each index with equal probability', () => {
    const solution = new Solution([1, 1, 1, 1])

    // Mock to test each possible index
    randomMock.mockReturnValueOnce(0.1) // 0.1 * 4 = 0.4, should pick index 0
    expect(solution.pickIndex()).toBe(0)

    randomMock.mockReturnValueOnce(0.3) // 0.3 * 4 = 1.2, should pick index 1
    expect(solution.pickIndex()).toBe(1)

    randomMock.mockReturnValueOnce(0.6) // 0.6 * 4 = 2.4, should pick index 2
    expect(solution.pickIndex()).toBe(2)

    randomMock.mockReturnValueOnce(0.9) // 0.9 * 4 = 3.6, should pick index 3
    expect(solution.pickIndex()).toBe(3)
  })

  test('Complex case: w = [3, 14, 1, 7]', () => {
    const solution = new Solution([3, 14, 1, 7])
    // prefixSums = [3, 17, 18, 25], totalSum = 25

    randomMock.mockReturnValueOnce(0.05) // 0.05 * 25 = 1.25, should pick index 0
    expect(solution.pickIndex()).toBe(0)

    randomMock.mockReturnValueOnce(0.2) // 0.2 * 25 = 5, should pick index 1
    expect(solution.pickIndex()).toBe(1)

    randomMock.mockReturnValueOnce(0.6) // 0.6 * 25 = 15, should pick index 1
    expect(solution.pickIndex()).toBe(1)

    randomMock.mockReturnValueOnce(0.7) // 0.7 * 25 = 17.5, should pick index 2
    expect(solution.pickIndex()).toBe(2)

    randomMock.mockReturnValueOnce(0.8) // 0.8 * 25 = 20, should pick index 3
    expect(solution.pickIndex()).toBe(3)
  })

  test('Edge case: all weights are very large', () => {
    const solution = new Solution([1000, 9000])
    // prefixSums = [1000, 10000], totalSum = 10000

    randomMock.mockReturnValueOnce(0.05) // 0.05 * 10000 = 500, should pick index 0
    expect(solution.pickIndex()).toBe(0)

    randomMock.mockReturnValueOnce(0.5) // 0.5 * 10000 = 5000, should pick index 1
    expect(solution.pickIndex()).toBe(1)
  })
})
