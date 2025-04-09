# GitHub Copilot Instructions

This repository follows specific coding conventions and project structures. Please adhere to the following guidelines when generating a new LeetCode exercise.

## Function Implementation Guidelines

- **File Creation:**

  - Create a new TypeScript file in the `@/` folder (located in `src/`) with the format `<NUMBER>.ts`.
  - The `<NUMBER>` is a LeetCode problem/exercise number.
  - The file should contain only the function signature (shell function) **without implementation**.
  - The function should be **exported at the end** of the file using `export { functionName };`.
  - ⚠️ **Important:** If Copilot suggests an implementation, please remove it and leave only the shell function.

- **JSDoc Documentation:**
  - Each function should start with a JSDoc comment.
  - Follow the format used in the existing `@/1.ts` file.
  - Ensure the JSDoc includes a brief description, parameter details, and return type.

## Testing Guidelines

- **Test File:**
  - Create a corresponding test file in the `test/` folder.
  - The test file should be fully implemented and include multiple test cases.
  - Use meaningful test descriptions and cover a variety of scenarios, including:
    - Typical/expected inputs
    - Edge cases (e.g., empty input, large numbers, invalid inputs if applicable)
    - Boundary conditions (e.g., maximum/minimum constraints)
  - Ensure test names clearly describe the expected behavior.

## Documentation Update

- **README Table Update:**
  - Add an entry for the newly created function to the table in the `README.md` file.
  - Follow the existing format for consistency.
  - It is important **not to implement** a solution, just the shell function.
  - ⚠️ **Reminder:** Ensure the function remains a shell with no implementation at this stage.

## Review Process

- **Implementation Review:**
  - When requesting a review, the expected solution will be compared with your implementation.
  - Feedback will be provided as if from a **Senior or Principal-level Engineer**.
  - The review will focus on **code efficiency, readability, maintainability, and adherence to best practices**.
  - The function creation guidelines do **not** apply during the review process; the focus is strictly on evaluating the provided implementation.

## Optional: Teach Area — Step-by-Step Solution Guide

> 🧩 _Use this only when you explicitly request to work through a problem step by step._
> By default, contributors only need to create the shell function and tests.  
> If you want to implement a solution together, follow this process:

1. **Understand the Problem**

   - Carefully read the problem statement.
   - Identify input types, constraints, and expected output.
   - Write down any assumptions.

2. **Break Down with Examples**

   - Manually work through a few sample inputs and outputs.
   - Write them in comments inside your function file or in your notes.
   - Identify patterns or repeated operations.

3. **Define the Approach**

   - Consider brute-force methods first.
   - Think about optimizations (sorting, hash maps, dynamic programming, etc.).
   - Select an approach based on problem constraints.

4. **Write Pseudocode**

   - Outline your logic in plain language or comments.
   - Make sure your steps are clear enough to translate directly to code.

5. **Implement Incrementally**

   - Translate pseudocode to actual TypeScript code.
   - Test parts of your solution as you write.

6. **Test Thoroughly**

   - Use the test file to validate your function.
   - Add cases for expected, edge, and boundary conditions.
   - Confirm all tests pass.

7. **Refactor & Optimize**

   - Review your solution for readability and efficiency.
   - Refactor variable names, simplify logic, and ensure clarity.

8. **Request Review**
   - Submit your implementation for review.
   - Be open to feedback for improvements!

> ✅ _Tip: Document your thought process in comments during the solution phase. It helps during review and personal learning._
