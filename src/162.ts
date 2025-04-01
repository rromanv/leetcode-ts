/**
 *  162. Find Peak Element
 *  https://leetcode.com/problems/find-peak-element/
 *  Medium
 *
 * A peak element is an element that is strictly greater than its neighbors.
 * Given an integer array nums, find a peak element, and return its index.
 * If the array contains multiple peaks, return the index to any of the peaks.
 *
 * Algorithm: Single pass
 * Time Complexity: O(log n) where n is the length of nums array
 * Space Complexity: O(1)
 *
 * @param {number[]} nums - Array of numbers where to find a peak element
 * @returns {number} - Index of a peak element
 */
function findPeakElement(nums: number[]): number {
  if (!Array.isArray(nums) || nums.length === 0) throw new Error('Array must be provided')

  if (nums.length < 3) return nums.indexOf(Math.max(...nums))

  for (let index = 1; index < nums.length; index++) {
    const prev = nums[index - 1]
    const current = nums[index]
    const next = index === nums.length - 1 ? -Infinity : nums[index + 1]

    if (current > prev && current > next) return index
  }

  return 0
}

function findPeakElement2(nums: number[]): number {
  if (!Array.isArray(nums) || nums.length === 0) {
    throw new Error('Array must be provided')
  }

  let left = 0
  let right = nums.length - 1

  while (left < right) {
    const mid = Math.floor((left + right) / 2)

    if (nums[mid] > nums[mid + 1]) {
      right = mid
    } else {
      left = mid + 1
    }
  }

  return left
}

export { findPeakElement }
