// let numbers = [5,6,11,12,98, 5];

// let result = numbers.filter(function(value,index){
//     return value !== index;
// });

// console.log(result);
// let numbers = [5,6,11,12,98, 5];

// let result = numbers.filter(function(value,index){
//     return value === index;
// }).length;

// console.log(result);
// Sample input array and the number to find


const numbers = [5, 6, 11, 12, 98, 5];
const find = 25;

// Function to count occurrences using the filter method
function countOccurrences(array, value) {
    return array.filter(function(num) {
        return num === value;
    }).length;
}

// Call the function to count occurrences and store the result
const occurrences = countOccurrences(numbers, find);

// Display the result in the console
console.log(occurrences);
