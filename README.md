# JavaScript NaN Bug with Null Addition

This repository demonstrates a common JavaScript error involving the addition of a number and null.  When adding a number and null, JavaScript performs type coercion, resulting in an unexpected NaN (Not a Number) result instead of the expected numerical sum. The issue is detailed in the `bug.js` file. A solution to avoid this is presented in the `bugSolution.js` file.

## Bug
The bug lies in the `foo` function.  While adding a number and null might seem straightforward, it leads to NaN if you aren't careful. In this specific instance, the expected output is 1, but instead it returns NaN.

## Solution
The solution involves explicitly checking for null or using a method to handle the type coercion issue before performing the addition.  The `bugSolution.js` file shows a correct implementation that addresses the bug using a conditional check for null values before adding the numbers. 
