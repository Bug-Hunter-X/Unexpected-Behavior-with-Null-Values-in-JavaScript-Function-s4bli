# Unexpected Behavior with Null Values in JavaScript Function

This repository demonstrates a potential bug in a JavaScript function related to the handling of null values. The function `foo` adds two numbers but returns 0 if either input is null. This may not always be the intended behavior and might lead to unexpected results in applications.

## Bug Description

The `foo` function returns 0 when either parameter `a` or `b` is null. In certain scenarios, this could be interpreted as a silent error and might lead to logical errors within the application. A more robust approach might involve throwing an error or implementing a more sophisticated null handling mechanism that better suits the application's requirements.

## Solution

The provided solution demonstrates alternative approaches to handle null values. Instead of silently returning 0, the solution throws an error or utilizes a default value, making the function's behavior more predictable and transparent.

## How to reproduce

1. Clone this repository.
2. Open `bug.js` and examine the implementation of the `foo` function.
3. Run the `bug.js` file using a JavaScript runtime (e.g., Node.js).
4. Observe the output for different input combinations, including null values.
5. Open `bugSolution.js` to view improved implementations of the function.