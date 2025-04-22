/**
 * 53. Maximum Subarray
 * {@link https://leetcode.com/problems/maximum-subarray/ | Link}
 * Difficulty: Medium
 *
 * Given an integer array nums, find the subarray with the largest sum, and return its sum.
 *
 * Algorithm: Iterates through the array, keeping track of the maximum sum
 *            ending at the current position and the overall maximum sum found so far.
 * Time Complexity: O(N)
 * Space Complexity: O(1)
 *
 * @param nums The input array of numbers.
 * @returns The maximum subarray sum.
 */
function maxSubArray(nums: number[]): number {
  if (!nums || nums.length === 0) return 0

  let maxSoFar = nums[0]
  let currentMax = maxSoFar

  for (let index = 1; index < nums.length; index++) {
    currentMax = Math.max(nums[index], currentMax + nums[index])
    maxSoFar = Math.max(maxSoFar, currentMax)
  }

  return maxSoFar
}

export { maxSubArray }
