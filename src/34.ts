// filepath: /Users/rromanv/projects/leetcode-ts/src/34.ts
/**
 *  34. Find First and Last Position of Element in Sorted Array
 *  https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
 *  Medium
 *
 * Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.
 * If target is not found in the array, return [-1, -1].
 * You must write an algorithm with O(log n) runtime complexity.
 *
 * @param {number[]} nums - Sorted array of integers
 * @param {number} target - Target value to search for
 * @return {number[]} Array containing the first and last position of target, or [-1, -1] if not found
 */
function searchRange2(nums: number[], target: number): number[] {
  if (!Array.isArray(nums) || !nums.includes(target)) return [-1, -1]

  const result: [number, number] = [-1, -1]

  for (let index = 0; index < nums.length; index++) {
    if (nums[index] === target) {
      result[0] = index
      break
    }
  }

  for (let index = nums.length - 1; index >= result[0]; index--) {
    if (nums[index] === target) {
      result[1] = index
      break
    }
  }

  return result
}

function searchRange(nums: number[], target: number): number[] {
  return [findTarget(nums, target, 'first'), findTarget(nums, target, 'last')]
}

type LookingFor = 'first' | 'last'

const findTarget = (nums: number[], target: number, lookingFor: LookingFor) => {
  let left = 0
  let right = nums.length - 1
  let result = -1

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)

    if (nums[mid] === target) {
      result = mid
      lookingFor === 'first' ? (right = mid - 1) : (left = mid + 1)
      continue
    }

    nums[mid] < target ? (left = mid + 1) : (right = mid - 1)
  }
  return result
}

export { searchRange }
