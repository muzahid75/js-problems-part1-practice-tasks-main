// function countVowels(str) {
//     const vowels = "aeiouAEIOU";
//     let count = 0;

//     for (let i = 0; i < str.length; i++) {
//         if (vowels.includes(str[i])) {
//             count++;
//         }
//     }

//     return count;
// }
function countVowels(str) {
    let vowels =["a","e","i","o","u","A","E","I","O","U"]
    let normal = Array.from(str);
    count=0;
    normal.forEach(function(value){
        if(vowels.includes(value)){
            count++;
        }
    })

    return count;
}

// Example usage
const input = "Hello World";
console.log(`Number of vowels: ${countVowels(input)}`);
