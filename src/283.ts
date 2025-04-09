/**
 * Moves all zeros in the array to the end while maintaining the relative order of the non-zero elements.
 *
 * Algorithm: Two-pointer technique
 * - Use one pointer to track the position of the next non-zero element.
 * - Iterate through the array, swapping non-zero elements to the front.
 *
 * Time Complexity: O(n) - We iterate through the array once.
 * Space Complexity: O(1) - No additional space is used; the array is modified in-place.
 *
 * @param nums - An array of numbers.
 * @returns void - Modifies the array in-place.
 */
function moveZeroes(nums: number[]): void {
  let nonZeroIndex = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      ;[nums[nonZeroIndex], nums[i]] = [nums[i], nums[nonZeroIndex]]
      nonZeroIndex++
    }
  }
}

export { moveZeroes }
