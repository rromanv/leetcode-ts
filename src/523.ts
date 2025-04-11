/**
 * 523. Continuous Subarray Sum
 * https://leetcode.com/problems/continuous-subarray-sum/
 * Medium
 *
 * Given an integer array nums and an integer k, return true if nums has a continuous subarray of size at least two
 * whose elements sum up to a multiple of k, or false otherwise.
 *
 * Algorithm: To be implemented
 * Time Complexity: To be implemented
 * Space Complexity: To be implemented
 *
 * @param {number[]} nums - Array of integers
 * @param {number} k - The divisor to check for
 * @returns {boolean} - Returns true if a continuous subarray with sum divisible by k exists
 */
function checkSubarraySum(nums: number[], k: number): boolean {
  if (nums.length < 2) {
    return false
  }

  type PrefixSum = number
  type Index = number
  const map = new Map<PrefixSum, Index>()

  map.set(0, -1)

  let prefixSum = 0

  for (let i = 0; i < nums.length; i++) {
    prefixSum += nums[i]

    if (k !== 0) {
      prefixSum = prefixSum % k
    }

    if (map.has(prefixSum)) {
      if (i - map.get(prefixSum)! >= 2) {
        return true
      }
      continue
    }

    map.set(prefixSum, i)
  }

  return false
}

export { checkSubarraySum }
