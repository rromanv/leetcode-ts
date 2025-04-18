/**
 *  15. 3Sum
 *  https://leetcode.com/problems/3sum/description/
 *  Medium
 *
 * Finds all unique triplets in the array which gives the sum of zero.
 *
 * Algorithm: Two pointer approach after sorting array
 * Time Complexity: O(n^2)
 * Space Complexity: O(k) where k are the number of triplets found
 *
 * @param {number[]} nums - Array of integers
 * @returns {number[][]} List of triplets
 */
function threeSum(nums: number[]): number[][] {
  const result: number[][] = []
  nums.sort((a, b) => a - b)

  for (let index = 0; index < nums.length - 2; index++) {
    if (index > 0 && nums[index] === nums[index - 1]) continue

    let left = index + 1
    let right = nums.length - 1

    while (left < right) {
      const sum = nums[index] + nums[left] + nums[right]
      if (sum === 0) {
        result.push([nums[index], nums[left], nums[right]])
        left++
        right--

        while (left < right && nums[left] === nums[left - 1]) left++
        while (left < right && nums[right] === nums[right + 1]) right--
      } else if (sum < 0) left++
      else right--
    }
  }

  return result
}

export { threeSum }
