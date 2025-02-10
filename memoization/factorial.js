// Object to store previously computed factorials
const memo = {};

// Factorial function with memoization
function factorial(n) {
    if (n === 0 || n === 1) return 1; // Base case
    if (memo[n]) return memo[n]; // Return if already computed

    // Compute and store in memo
    memo[n] = n * factorial(n - 1);
    return memo[n];
}

// Example Usage
console.log(factorial(5)); // Output: 120
console.log(factorial(6)); // Output: 720 (faster due to memoization)

