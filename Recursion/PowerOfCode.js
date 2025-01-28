function power(base, exponent) {
    if (exponent === 0) {
        return 1; // Base case
    }
    return base * power(base, exponent - 1); // Recursive case
}

console.log(power(2, 3)); // Output: 8 (2^3)
console.log(power(5, 0)); // Output: 1 (5^0)
console.log(power(3, 2)); // Output: 9 (3^2)
