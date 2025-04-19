/**
 * 378. Kth Smallest Element in a Sorted Matrix
 * https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix
 * Difficulty: Medium
 *
 * Given an n x n matrix where each of the rows and columns is sorted in ascending order,
 * return the kth smallest element in the matrix.
 * Note that it is the kth smallest element in the sorted order, not the kth distinct element.
 * You must find a solution with a memory complexity better than O(n^2).
 *
 * Algorithm: Binary Search on Value Range
 * Time Complexity: O(n * log(maxVal - minVal))
 * Space Complexity: O(1)
 *
 * @param {number[][]} matrix The input n x n matrix with sorted rows and columns.
 * @param {number} k The kth smallest element to find.
 * @return {number} The kth smallest element in the matrix.
 */
function kthSmallest(matrix: number[][], k: number): number {
  const n = matrix.length
  let low = matrix[0][0]
  let high = matrix[n - 1][n - 1]

  const countLessEqual = (target: number): number => {
    let count = 0
    let row = n - 1
    let col = 0
    while (row >= 0 && col < n) {
      if (matrix[row][col] <= target) {
        count += row + 1
        col++
      } else {
        row--
      }
    }
    return count
  }

  while (low <= high) {
    const mid = Math.floor(low + (high - low) / 2)
    const count = countLessEqual(mid)

    if (count < k) {
      low = mid + 1
    } else {
      high = mid - 1
    }
  }

  return low
}

export { kthSmallest }
