/**
 * 1539. Kth Missing Positive Number
 * https://leetcode.com/problems/kth-missing-positive-number/
 * Easy
 *
 * Given an array arr of positive integers sorted in a strictly increasing order,
 * and an integer k, return the kth positive integer that is missing from this array.
 *
 * Algorithm: Binary Search
 * Time Complexity: O(log n) where n is length of input array
 * Space Complexity: O(1) for constant extra space
 *
 * @param {number[]} arr - Array of strictly increasing positive integers
 * @param {number} k - Position of missing number to find
 * @return {number} - The kth missing positive integer
 */
function findKthPositive(arr: number[], k: number): number {
  let left = 0
  let right = arr.length - 1

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    if (arr[mid] - mid - 1 < k) left = mid + 1
    else right = mid - 1
  }

  return left + k
}

export { findKthPositive }
