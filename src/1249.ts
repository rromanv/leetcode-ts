/*
 * 1249. Minimum Remove to Make Valid Parentheses
 * https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/description/
 * Medium
 */

function minRemoveToMakeValid(s: string): string {
  const OPEN = '(',
    CLOSE = ')'
  const indicesToRemove = new Array<number>()
  const parenthesesStack = new Array<number>()

  for (let index = 0; index < s.length; index++) {
    if (s.charAt(index) === OPEN) {
      parenthesesStack.push(index)
      continue
    }

    if (s.charAt(index) === CLOSE) {
      if (parenthesesStack.length === 0) {
        indicesToRemove.push(index)
        continue
      }

      parenthesesStack.pop()
    }
  }

  const result = s.split('')

  indicesToRemove.push(...parenthesesStack)

  while (indicesToRemove.length > 0) {
    const index = indicesToRemove.pop()!
    result.splice(index, 1)
  }

  return result.join('')
}

export { minRemoveToMakeValid }
