function BinarySearch(arr, target, leftIndex = 0, rightIndex = arr.length - 1) {
    if (leftIndex > rightIndex) {
        return -1; 
    }

    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    
    if (target === arr[middleIndex]) {
        return middleIndex; 
    }
    
    if (target > arr[middleIndex]) {
        return BinarySearch(arr, target, middleIndex + 1, rightIndex);
    } else {
        return BinarySearch(arr, target, leftIndex, middleIndex - 1);
    }
}

console.log(BinarySearch([-5, 3, 6, 10, 19], 10)); // Output: 3
console.log(BinarySearch([-5, 3, 6, 10, 19], 6)); // Output: 2
console.log(BinarySearch([-5, 3, 6, 10, 19], -5)); // Output: 0

