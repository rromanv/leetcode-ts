/**
 * 71. Simplify Path
 * https://leetcode.com/problems/simplify-path/
 * Medium
 *
 * Given a string path, which is an absolute path (starting with a slash '/') to a file or directory
 * in a Unix-style file system, convert it to the simplified canonical path.
 *
 * Algorithm: Stack-based approach
 * Time Complexity: O(n) where n is the length of the path string
 * Space Complexity: O(n) for the stack storage
 *
 * @param {string} path - The Unix-style file path to simplify
 * @returns {string} - The simplified canonical path
 */
function simplifyPath(path: string): string {
  const simplePath = new Array<string>()
  const folders = path.split('/').filter((p) => p !== '' && p !== '.')

  for (const folder of folders) {
    if (folder === '..') {
      simplePath.pop()
      continue
    }

    simplePath.push(folder)
  }

  return '/' + simplePath.join('/')
}

export { simplifyPath }
