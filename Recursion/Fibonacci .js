function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2); 
}

console.log(fibonacci(5)); // Output: 5 (0, 1, 1, 2, 3, 5)
console.log(fibonacci(7)); // Output: 13
console.log(fibonacci(0)); // Output: 0


