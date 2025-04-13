/**
 *  207. Course Schedule
 *  https://leetcode.com/problems/course-schedule/
 *  Medium
 *
 * There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1.
 * You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you
 * must take course bi first if you want to take course ai.
 *
 * For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
 *
 * Return true if you can finish all courses. Otherwise, return false.
 *
 * Algorithm: Graph-based approach using cycle detection through DFS
 * Time Complexity: O(V + E) where V is the number of courses and E is the number of prerequisites
 * Space Complexity: O(V + E)
 *
 * @param {number} numCourses - Number of courses
 * @param {number[][]} prerequisites - Array of prerequisite pairs
 * @return {boolean} - Whether it's possible to finish all courses
 */
function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  if (prerequisites.length === 0) return true
  const preMap = new Map<number, Set<number>>()

  for (let course = 0; course < numCourses; course++) {
    preMap.set(course, new Set())
  }

  for (const [course, preReq] of prerequisites) {
    preMap.get(course)!.add(preReq)
  }

  const cycleDetection = new Set<number>()

  const dfs = (currentCourse: number) => {
    if (cycleDetection.has(currentCourse)) return false

    if (preMap.get(currentCourse)!.size === 0) return true

    cycleDetection.add(currentCourse)

    for (const preReq of preMap.get(currentCourse)!) {
      if (!dfs(preReq)) return false
    }
    cycleDetection.delete(currentCourse)
    preMap.set(currentCourse, new Set<number>())
    return true
  }

  for (let course = 0; course < numCourses; course++) {
    if (!dfs(course)) return false
  }

  return true
}

export { canFinish }
