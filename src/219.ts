/*
 * 219. Contains Duplicate II
 * https://leetcode.com/problems/contains-duplicate-ii
 * Easy
 *
 * Given an integer array nums and an integer k, return true if there are two
 * distinct indices i and j in the array such that nums[i] == nums[j] and
 * abs(i - j) <= k.
 */

/**
 * Determines if array contains duplicates within k distance
 * @param nums - The input array of integers
 * @param k - The maximum distance between duplicate elements
 * @returns True if there are duplicates within k distance, false otherwise
 */
function containsNearbyDuplicate(nums: number[], k: number): boolean {
  if (!Array.isArray(nums)) return false
  const numMap = new Map<number, number>()

  for (const [index, num] of nums.entries()) {
    if (numMap.has(num) && index - numMap.get(num)! <= k) return true
    numMap.set(num, index)
  }

  return false
}

export { containsNearbyDuplicate }
