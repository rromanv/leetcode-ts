/*
 * 227. Basic Calculator II
 * https://leetcode.com/problems/basic-calculator-ii
 * Medium
 */

function calculate(s: string): number {
  type Operator = '+' | '-' | '*' | '/'

  const operandStack: number[] = []
  let currentNum = 0
  let index = 0
  let prevOperator: Operator = '+'

  s = s.trim()

  if (s.charAt(index) === '-') {
    prevOperator = '-'
    index++
  }

  const operate = (operator: Operator, val: number) => {
    if (operator === '+') operandStack.push(val)
    if (operator === '-') operandStack.push(-val)
    if (operator === '*') operandStack.push(operandStack.pop()! * val)
    if (operator === '/') operandStack.push(Math.trunc(operandStack.pop()! / val))
  }

  const isDigit = (char: string) => /\d/.test(char)
  const isSpace = (char: string) => /\s/.test(char)
  const isOperator = (char: string): char is Operator => char === '+' || char === '-' || char === '*' || char === '/'

  for (; index < s.length; index++) {
    const char = s.charAt(index)

    if (isDigit(char)) {
      currentNum = currentNum * 10 + Number(char)
    }

    if ((!isDigit(char) && !isSpace(char)) || index === s.length - 1) {
      operate(prevOperator, currentNum)
      if (isOperator(char)) prevOperator = char
      currentNum = 0
    }
  }

  return operandStack.reduce((sum, curr) => sum + curr, 0)
}

export { calculate }
