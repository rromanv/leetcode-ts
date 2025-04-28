/*
 * 88. Merge Sorted Array
 * https://leetcode.com/problems/merge-sorted-array
 * Easy
 *
 * Do not return anything, modify nums1 in-place instead.
 *
 * Algorithm: Reverse merge approach
 * Time complexity: O(m + n)
 * Space complexity: O(1)
 */

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let writeIdx = m + n - 1
  let mIdx = m - 1
  let nIdx = n - 1

  while (nIdx >= 0) {
    if (mIdx >= 0 && nums1[mIdx] > nums2[nIdx]) {
      nums1[writeIdx] = nums1[mIdx]
      mIdx--
    } else {
      nums1[writeIdx] = nums2[nIdx]
      nIdx--
    }
    writeIdx--
  }
}

export { merge }
