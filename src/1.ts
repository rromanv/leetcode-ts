/*
 *  1. Two Sum
 *  https://leetcode.com/problems/two-sum/description/
 *  Easy
 */
function twoSum(nums: number[], target: number): number[] {
  const seenIndexes = new Map<number, number>()

  for (const [index, num] of nums.entries()) {
    const looking = target - num

    if (seenIndexes.has(looking)) {
      return [seenIndexes.get(looking)!, index]
    }

    seenIndexes.set(num, index)
  }

  return [-1, -1]
}

export { twoSum }
