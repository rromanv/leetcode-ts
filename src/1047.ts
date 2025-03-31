// filepath: /Users/rromanv/projects/leetcode-ts/src/1047.ts
/**
 * 1047. Remove All Adjacent Duplicates In String
 * https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/
 * Easy
 *
 * Given a string S of lowercase letters, a duplicate removal consists of choosing two
 * adjacent and equal letters, and removing them.
 * We repeatedly make duplicate removals on S until we no longer can.
 *
 * Algorithm: Uses a stack to keep track of characters. For each character:
 * - If it matches the top of stack, pop the top (removing the pair)
 * - Otherwise, push the character onto the stack
 * Time Complexity: O(n) where n is the length of the input string
 * Space Complexity: O(n) for the stack storage

 * @param {string} s - The input string
 * @returns {string} The final string after all possible duplicate removals
 */
function removeDuplicates(s: string): string {
  const stack = new Array<string>()
  for (const char of s) {
    const lastChar = stack[stack.length - 1]

    if (lastChar && lastChar === char) {
      stack.pop()
      continue
    }

    stack.push(char)
  }

  return stack.join('')
}

export { removeDuplicates }
