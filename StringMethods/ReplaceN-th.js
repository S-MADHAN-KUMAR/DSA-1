function replaceN(str,n){
//    with build in methods 

// return str.slice(n) + str.slice(0,n) 

//   without build in methods

//================================================================//

let result1 = ''
let result2 = ''
for (let i = 0; i < str.length; i++) {
    if (i < n) {
        result1 += str[i] 
    } else {
        result2 += str[i]
    }
}
return result2+result1

}
    let str = 'abcdef'
    let n = 4

    console.log(replaceN(str,n))
    