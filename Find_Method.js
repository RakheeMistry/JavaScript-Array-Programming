// Rule 1: No elements satisfy the condition
const arr = [1, 2, 3, 4, 5];
const result1 = arr.find(element => element > 10);
console.log(result1); // Output: undefined

// Rule 2: First element satisfies the condition
const result2 = arr.find(element => element > 3);
console.log(result2); // Output: 4