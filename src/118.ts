/**
 * Generates the first numRows of Pascal's Triangle.
 * @param {number} numRows - The number of rows to generate.
 * @returns {number[][]} The generated Pascal's Triangle.
 */
function generate(numRows: number): number[][] {
  const triangle = new Array<number[]>()

  for (let rowNum = 0; rowNum < numRows; rowNum++) {
    const row = new Array<number>()
    for (let element = 0; element <= rowNum; element++) {
      if (element === 0 || element === rowNum) {
        row.push(1)
        continue
      }
      row.push(triangle[rowNum - 1][element - 1] + triangle[rowNum - 1][element])
    }
    triangle.push(row)
  }

  return triangle
}

export { generate }
