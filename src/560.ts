/**
 * 560. Subarray Sum Equals K
 * https://leetcode.com/problems/subarray-sum-equals-k
 * Medium
 *
 * Given an array of integers nums and an integer k, return the total number
 * of subarrays whose sum equals to k
 *
 * Algorithm: Store prefix sums on Set
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {number[]} nums - Array of integers
 * @param {number} k - Target sum
 */
function subarraySum(nums: number[], k: number): number {
  if (!Array.isArray(nums)) throw new Error('First parameter must be an array')
  if (typeof k !== 'number') throw new Error('Second parameter must be a number')
  if (nums.length === 0) throw new Error('Array of integers "nums" should be provided')

  type Sum = number
  type Count = number

  // Init prefix sums count
  const prefixSumCount = new Map<Sum, Count>([[0, 1]])

  const safeGet = (map: Map<Sum, Count>, key: Sum): Count => map.get(key) ?? 0

  let count = 0
  let currentSum = 0

  for (const num of nums) {
    currentSum += num
    const currentTarget = currentSum - k
    if (prefixSumCount.has(currentTarget)) count += safeGet(prefixSumCount, currentTarget)

    prefixSumCount.set(currentSum, safeGet(prefixSumCount, currentSum) + 1)
  }

  return count
}

export { subarraySum }
