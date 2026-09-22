// Rule 1: No elements satisfy the condition
const arr = [1, 2, 3, 4, 5];
const result1 = arr.find(element => element > 10);
console.log(result1); // Output: undefined

// Rule 2: First element satisfies the condition
const result2 = arr.find(element => element > 3);
console.log(result2); // Output: 4

// Rule 3: Handle empty slots in the array
const arrWithEmptySlots = [1, , 3, , 5];
const result3 = arrWithEmptySlots.find(element => element === undefined);   
console.log(result3); // Output: undefined

// Rule 4: Handle NaN values in the array
const arrWithNaN = [1, 2, NaN, 4, 5];
const result4 = arrWithNaN.find(element => Number.isNaN(element));
console.log(result4); // Output: NaN