function reverseEachWord(str) {
    let result = "";
    let word = "";

    for (let i = 0; i <= str.length; i++) {
        if (i < str.length && str[i] !== ' ') {
            word = str[i] + word; // Prepend character to reverse the word
        } else {
            result += word; // Add reversed word to result
            if (i < str.length) {
                result += " "; // Add space if it's not the last word
            }
            word = ""; // Reset word
        }
    }

    return result;
}

let str = "hello world";
console.log(reverseEachWord(str)); // Output: "olleh dlrow"
