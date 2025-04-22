/**
 * 605. Can Place Flowers
 * {@link https://leetcode.com/problems/can-place-flowers/ | Link}
 * Difficulty: Easy
 *
 * You have a long flowerbed in which some of the plots are planted, and some are not.
 * However, flowers cannot be planted in adjacent plots.
 * Given an integer array flowerbed containing 0s and 1s, where 0 means empty and 1 means not empty,
 * and an integer n, return true if n new flowers can be planted in the flowerbed without violating
 * the no-adjacent-flowers rule and false otherwise.
 *
 * Algorithm: Loop trough Array and skip one index if current can allocate
 * Time Complexity: O(N)
 * Space Complexity: O(1)
 *
 * @param {number[]} flowerbed
 * @param {number} n
 * @returns {boolean}
 */
function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  let canAllocate = 0

  for (let index = 0; index < flowerbed.length; index++) {
    if ((flowerbed[index - 1] || 0) === 0 && flowerbed[index] === 0 && (flowerbed[index + 1] || 0) === 0) {
      canAllocate++
      index++
    }

    if (canAllocate >= n) return true
  }

  return canAllocate >= n
}

export { canPlaceFlowers }
