// Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

// Example Input: ([1, 3, 6, 8, 11, 15], 9) Example Output: [1, 2] (numbers at indices 1 and 2: 3 + 6 = 9)

function findTwoSumIndices(arr, target) {
    const numIndexMap = {};

    for (let i = 0; i < arr.length; i++) {
        const complement = target - arr[i];

        if (complement in numIndexMap) {
            return [numIndexMap[complement], i];
        }

        numIndexMap[arr[i]] = i;
    }

    return "No two numbers found that add up to the target value.";
}

const numbersArray = [1, 3, 6, 8, 11, 15];
const targetValue = 9;
const indices = findTwoSumIndices(numbersArray, targetValue);
console.log(indices);

