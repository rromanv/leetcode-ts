/*
 * 88. Merge Sorted Array
 * https://leetcode.com/problems/merge-sorted-array
 * Easy
 *
 * Do not return anything, modify nums1 in-place instead.
 */

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  nums1.splice(m, nums1.length - m, ...nums2.slice(0, n))
  nums1.sort((a, b) => a - b)
}

export { merge }
