// function reverseString(str) {
//     if (str === "") {
//         return ""; // Base case
//     }
//     return reverseString(str.substring(1)) + str[0]; // Recursive case
// }

// console.log(reverseString("hello")); // Output: "olleh"
// console.log(reverseString("world")); // Output: "dlrow"

function reverseString(str, index = str.length - 1) {
    if (index < 0) {
        return '';
    }

    return str[index] + reverseString(str, index - 1);
}

console.log(reverseString("hello")); // Output: "olleh"
console.log(reverseString("world")); // Output: "dlrow"

