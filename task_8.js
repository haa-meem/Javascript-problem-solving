// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

function findSecondSmallest(arr) {
    if (arr.length < 2) {
        return "Array must contain at least two elements.";
    }

    arr.sort((a, b) => a - b);

    if (arr[0] === arr[1]) {
        return "No distinct second smallest element found in the array.";
    }

    return arr[1];
}

const numbersArray = [3, 5, 2, 8, 1, 7];
const secondSmallestNumber = findSecondSmallest(numbersArray);
console.log(secondSmallestNumber);
