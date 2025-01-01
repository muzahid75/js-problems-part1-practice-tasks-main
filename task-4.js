function findLongestWord(str) {
    // Split the string into an array of words
    const words = str.split(' ');

    // Initialize a variable to keep track of the longest word
    let longestWord = '';

    // Loop through each word in the array
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }

    return longestWord;
}

// Example usage
const input = "I am learning Programming to become a programmer";
console.log(`The longest word is: ${findLongestWord(input)}`);
