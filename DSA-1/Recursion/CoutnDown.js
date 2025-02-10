function countDown(n) {
    if (n < 0) {
        return; 
    }
    console.log(n); 
    countDown(n - 1); 
}

countDown(5); // Output: 5, 4, 3, 2, 1, 0
