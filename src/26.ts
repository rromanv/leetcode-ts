/**
 * 26. Remove Duplicates from Sorted Array
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 * Easy
 *
 * Given an integer array nums sorted in non-decreasing order, remove the duplicates
 * in-place such that each unique element appears only once. The relative order of
 * the elements should be kept the same. Then return the number of unique elements in nums.
 *
 * Consider the number of unique elements of nums to be k. To get accepted, you need to do the following things:
 * - Change the array nums such that the first k elements of nums contain the unique elements
 *   in the order they were present in nums initially. The remaining elements of nums are not important
 *   as well as the size of nums.
 * - Return k.
 *
 * Algorithm: Two Pointer Technique
 * Time Complexity: O(n) where n is the length of the input array
 * Space Complexity: O(1) as we modify the array in-place
 *
 * @param {number[]} nums - The input array sorted in non-decreasing order
 * @return {number} - The number of unique elements in the array
 */
function removeDuplicates(nums: number[]): number {
  if (nums.length < 2) return nums.length

  let slow = 0
  let fast = slow + 1

  while (fast < nums.length) {
    if (nums[slow] < nums[fast]) {
      slow++
      nums[slow] = nums[fast]
    }
    fast++
  }
  return slow + 1
}

export { removeDuplicates }
