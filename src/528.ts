/**
 * 528. Random Pick with Weight
 * https://leetcode.com/problems/random-pick-with-weight/
 * Medium
 *
 * You are given an array of positive integers w where w[i] describes the weight of the ith index.
 * Implement the Solution class:
 * - Solution(int[] w) Initializes the object with the array of weights w.
 * - pickIndex() Randomly picks an index in the range [0, w.length - 1] (inclusive) and returns it.
 *   The probability of picking an index i is w[i] / sum(w).
 *
 * Algorithm: Prefix Sum + Binary Search
 * Time Complexity:
 *   - Constructor: O(n) where n is the length of w array
 *   - pickIndex: O(log n) using binary search
 * Space Complexity: O(n) for the prefix sum array
 */

class Solution {
  private prefixSums: number[]
  private totalSum: number

  /**
   * Initializes the object with the array of weights w
   * @param {number[]} w - Array of weights
   */
  constructor(w: number[]) {
    let runningSum = 0

    this.prefixSums = w.map((weight) => {
      runningSum += weight
      return runningSum
    })

    this.totalSum = runningSum
  }

  /**
   * Randomly picks an index in the range [0, w.length - 1]
   * @returns {number} - The randomly picked index
   */
  pickIndex(): number {
    // Generate random number between 0 and totalSum
    const target = Math.random() * this.totalSum

    // Binary search to find the first index where prefixSum >= target
    let left = 0
    let right = this.prefixSums.length - 1

    while (left < right) {
      const mid = Math.floor((left + right) / 2)

      if (this.prefixSums[mid] < target) {
        left = mid + 1
      } else {
        right = mid
      }
    }

    return left
  }
}

export { Solution }
