function linearSearch(arr,target){
    for(let i=0;i<arr.length;i++){
if(arr[i]=== target){
    return i
}
    }
    return 1
}

console.log(linearSearch([-5,3,6,10,9],10))
console.log(linearSearch([-5,3,6,10,9],6))
console.log(linearSearch([-5,3,6,10,9],3))