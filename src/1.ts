/**
 *  1. Two Sum
 *  https://leetcode.com/problems/two-sum/description/
 *  Easy
 *
 * Finds two numbers in an array that add up to a target value
 *
 * Algorithm: Hash map-based single-pass approach
 * Time Complexity: O(n) where n is the length of nums array
 * Space Complexity: O(n) for the hash map storage
 *
 * @param {number[]} nums - Array of numbers where to search the needed "target"
 * @param {number} target - Sum result to search inside "nums"
 */
function twoSum(nums: number[], target: number): number[] {
  if (!Array.isArray(nums) || nums.length < 2) {
    throw new Error('Input must be an array with at least two elements')
  }

  const seenIndexes = new Map<number, number>()

  for (const [index, num] of nums.entries()) {
    const looking = target - num

    if (seenIndexes.has(looking)) {
      return [seenIndexes.get(looking)!, index]
    }

    seenIndexes.set(num, index)
  }

  return [-1, -1]
}

export { twoSum }
