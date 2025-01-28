function countDown(n) {
    if (n < 0) {
        return; // Base case
    }
    console.log(n); // Print the current number
    countDown(n - 1); // Recursive case
}

countDown(5); // Output: 5, 4, 3, 2, 1, 0
