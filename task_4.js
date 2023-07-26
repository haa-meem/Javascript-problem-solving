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

