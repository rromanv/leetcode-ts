/**
 * 1004. Max Consecutive Ones III
 * https://leetcode.com/problems/max-consecutive-ones-iii/
 * Medium
 *
 * Given a binary array nums and an integer k, return the maximum number of consecutive 1's
 * in the array if you can flip at most k 0's.
 *
 * Algorithm: Sliding Window
 * Time Complexity: O(n) where n is the length of the nums array
 * Space Complexity: O(1)
 *
 * @param {number[]} nums - Binary array (contains only 0s and 1s)
 * @param {number} k - Maximum number of 0s that can be flipped to 1s
 * @return {number} - Maximum number of consecutive 1's
 */
function longestOnes(nums: number[], k: number): number {
  let left = 0
  let zeroCount = 0
  let maxLength = 0

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) {
      zeroCount++
    }

    while (zeroCount > k) {
      if (nums[left] === 0) {
        zeroCount--
      }
      left++
    }

    maxLength = Math.max(maxLength, right - left + 1)
  }

  return maxLength
}

export { longestOnes }
