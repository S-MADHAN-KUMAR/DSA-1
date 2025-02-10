function factorial(n) {
    if (n <= 1) {
        return 1; 
    }
    return n * factorial(n - 1)
}

console.log(factorial(5)); // Output: 120
console.log(factorial(3)); // Output: 6
console.log(factorial(1)); // Output: 1
