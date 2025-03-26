# GitHub Copilot Instructions

This repository follows specific coding conventions and project structures. Please adhere to the following guidelines when generating a new LeetCode exercise.

## Function Implementation Guidelines

- **File Creation:**
  - Create a new TypeScript file in the `@/` folder (located in `src/`) with the format `<NUMBER>.ts`.
  - The `<NUMBER>` is a LeetCode problem/exercise number.
  - The file should contain only the function signature (shell function) **without implementation**.
  - The function should be **exported at the end** of the file using `export { functionName };`.
- **JSDoc Documentation:**
  - Each function should start with a JSDoc comment.
  - Follow the format used in the existing `@/1.ts` file.
  - Ensure the JSDoc includes a brief description, parameter details, and return type.

## Testing Guidelines

- **Test File:**
  - Create a corresponding test file in the `test/` folder.
  - The test file should be fully implemented and include multiple test cases.
  - Use meaningful test descriptions and edge case coverage.

## Documentation Update

- **README Table Update:**
  - Add an entry for the newly created function to the table in the `README.md` file.
  - Follow the existing format for consistency.
  - It is important **not to implement** a solution, just the shell function.

## Review Process

- **Implementation Review:**
  - When requesting a review, the expected solution will be compared with your implementation.
  - Feedback will be provided as if from a **Senior or Principal-level Engineer**.
  - The review will focus on **code efficiency, readability, maintainability, and adherence to best practices**.
  - The function creation guidelines do **not** apply during the review process; the focus is strictly on evaluating the provided implementation.
