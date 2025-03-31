/**
 * 398. Random Pick Index
 * https://leetcode.com/problems/random-pick-index/
 * Medium
 *
 * Given an integer array nums with possible duplicates, randomly output the index of a given target number.
 * You can assume that the given target number must exist in the array.
 *
 * Implement the Solution class:
 * - Solution(int[] nums) Initializes the object with the array nums.
 * - int pick(int target) Picks a random index i such that nums[i] == target.
 *   Each index should be returned with equal probability.
 *
 * Algorithm: Reservoir Sampling
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {number[]} nums - Input array of numbers
 */

class Solution {
  nums: number[]
  /**
   * @param {number[]} nums
   */
  constructor(nums: number[]) {
    this.nums = nums
  }

  private getRandom(max: number) {
    return Math.floor(Math.random() * max) + 1
  }

  /**
   * @param {number} target
   * @return {number}
   */
  pick(target: number): number {
    let count = 0
    let pickedIndex = 0
    for (const [index, num] of this.nums.entries()) {
      if (num === target) {
        count++
        if (this.getRandom(count) === count) pickedIndex = index
      }
    }
    return pickedIndex
  }
}

export { Solution }
