function sumOfPositiveNumbers(numbers) {
    let sum = 0;

    for (let number of numbers) {
        if (number > 0) {
            sum = sum + number;
        }
    }

    return sum;
}

const inputArray = [2, -5, 10, -3, 7];
const output = sumOfPositiveNumbers(inputArray);
console.log(output);
