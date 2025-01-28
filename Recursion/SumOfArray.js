// function sumArray(arr) {
//     if (arr.length === 0) {
//         return 0
//     }
//     return arr[0] + sumArray(arr.slice(1))
// }

// console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15
// console.log(sumArray([10, 20, 30])); // Output: 60
// console.log(sumArray([1])); // Output: 1


function sumArray(arr, index = 0) {
    // Base case: If index is out of bounds, return 0
    if (index === arr.length) {
        return 0;
    }

    // Recursive case: Add the current element to the sum of the remaining elements
    return arr[index] + sumArray(arr, index + 1);
}

console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15
console.log(sumArray([10, 20, 30])); // Output: 60
console.log(sumArray([1])); // Output: 1
