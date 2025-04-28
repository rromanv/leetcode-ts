/*
 * 88. Merge Sorted Array
 * https://leetcode.com/problems/merge-sorted-array
 * Easy
 *
 * Do not return anything, modify nums1 in-place instead.
 */

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let write = m + n - 1
  let index1 = m - 1
  let index2 = n - 1
  while (index2 >= 0) {
    nums1[write--] = index1 >= 0 && nums1[index1] > nums2[index2] ? nums1[index1--] : nums2[index2--]
  }
}

export { merge }
