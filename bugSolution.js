function foo(a, b) {
  if (a === null || b === null) {
    throw new Error("Null values are not allowed."); // Throw an error
  }
  return a + b;
}

// Alternative solution using default values
function foo2(a = 0, b = 0) {
  return a + b;
}

console.log(foo2(1, 2)); // Output: 3
console.log(foo2(null, 2)); // Output: 2
console.log(foo2(1, null)); // Output: 1
console.log(foo2(null, null)); // Output: 0

// Example of using try...catch block
try {
  console.log(foo(1, null));
} catch (error) {
  console.error("Error: ", error.message);
}