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

// Rule 5: Handle null values in the array
const arrWithNull = [1, 2, null, 4, 5];
const result5 = arrWithNull.find(element => element === null);
console.log(result5); // Output: null

// Rule 6: Handle boolean values in the array
const arrWithBoolean = [1, 2, true, 4, 5];
const result6 = arrWithBoolean.find(element => element === true);
console.log(result6); // Output: true

// Rule 7: Handle string values in the array
const arrWithString = [1, 2, "hello", 4, 5];
const result7 = arrWithString.find(element => element === "hello");
console.log(result7); // Output: "hello"    

// Rule 8: Handle empty array
const emptyArr = [];
const result8 = emptyArr.find(element => element > 0);
console.log(result8); // Output: undefined