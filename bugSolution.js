function foo(a, b) {
  // Check if either a or b is null and replace with 0
  a = (a === null) ? 0 : a;
  b = (b === null) ? 0 : b;
  return a + b; 
}
console.log(foo(1, null)); // Output: 1
console.log(foo(null, 5)); // Output: 5
console.log(foo(null, null)); //Output: 0