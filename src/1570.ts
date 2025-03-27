/**
 * 1570. Dot Product of Two Sparse Vectors
 * https://leetcode.com/problems/dot-product-of-two-sparse-vectors/
 * Medium
 *
 * Computes the dot product of two sparse vectors
 *
 * Algorithm: Store Index and non Zeroes on a Map
 * Time Complexity: O(min(n, m)) where n and m are the number of non-zero elements in each vector
 * Space Complexity: O(n+m)
 *
 * @param {number[]} nums - Array of numbers representing a sparse vector
 */
class SparseVector {
  /**
   * Initializes a sparse vector from an array of numbers
   * @param {number[]} nums - The array representation of the sparse vector
   */
  private size: number
  public vector = new Map<number, number>()
  constructor(nums: number[]) {
    this.size = nums.length
    for (const [index, num] of nums.entries()) if (num !== 0) this.vector.set(index, num)
  }

  /**
   * Computes the dot product of this sparse vector with another sparse vector
   * @param {SparseVector} vec - Another sparse vector
   * @return {number} - The dot product of the two vectors
   */
  dotProduct(vec: SparseVector): number {
    if (vec.size !== this.size) throw new Error('Vectors are not of the same size')
    let result = 0
    for (const [index, val] of vec.vector.entries()) {
      if (this.vector.has(index)) result += this.vector.get(index)! * val
    }

    return result
  }
}

export { SparseVector }
