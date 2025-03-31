/**
 * 415. Add Strings
 * https://leetcode.com/problems/add-strings/
 * Easy
 *
 * Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.
 * Note:
 * 1. The length of both num1 and num2 is < 5100.
 * 2. Both num1 and num2 contain only digits 0-9.
 * 3. Both num1 and num2 do not contain any leading zero.
 * 4. You must not use any built-in BigInteger library or convert the inputs to integer directly.
 *
 * @param {string} num1 - First number as a string
 * @param {string} num2 - Second number as a string
 * @return {string} - Sum of the two numbers as a string
 */
function addStrings(num1: string, num2: string): string {
  const areDigits = (num: string) => /^\d+$/.test(num)
  if (!areDigits(num1) || !areDigits(num2)) throw new Error('Input must contain only digits')

  let carry = 0
  let result = ''
  let num1Index = num1.length - 1
  let num2Index = num2.length - 1

  while (num1Index >= 0 || num2Index >= 0 || carry > 0) {
    const digit1 = num1Index >= 0 ? Number(num1[num1Index]) : 0
    const digit2 = num2Index >= 0 ? Number(num2[num2Index]) : 0
    const sum = digit1 + digit2 + carry

    result = (sum % 10) + result
    carry = Math.floor(sum / 10)
    num1Index--
    num2Index--
  }

  return result
}

export { addStrings }
