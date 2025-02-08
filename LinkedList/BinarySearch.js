// Binary search only work Sorted array 

function BinarySearch(arr,target){
    let leftIndex =0
    let rightIndex = arr.length -1

    while(leftIndex <= rightIndex){
     let middleIndex = Math.floor((leftIndex + rightIndex) / 2 )
     if(target === arr[middleIndex]){
        return middleIndex
     }
     if(target > arr[middleIndex]){
        leftIndex = middleIndex + 1
     }else{
        rightIndex = middleIndex - 1
     }
    }
}

console.log(BinarySearch([-5,3,6,10,19],10))
console.log(BinarySearch([-5,3,6,10,19],6))
console.log(BinarySearch([-5,3,6,10,19],-5))

let arr =[-5,3,6,10,19]