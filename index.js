/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the length of the array
 */
function getLength(numbers) {
  return numbers.length;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the sum of the numbers
 */
function getSum(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the mean of the numbers
 */
function getMean(numbers) {
  const sum = getSum(numbers);
  const length = getLength(numbers);

  return sum / length;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the smallest of the numbers
 */
function getMin(numbers) {
  let min = numbers[0];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
  }

  return min;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the largest of the numbers
 */
function getMax(numbers) {
  let max = numbers[0];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }

  return max;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the range of the numbers (max - min)
 */
function getRange(numbers) {
  const min = getMin(numbers);
  const max = getMax(numbers);

  return `${min} to ${max}`;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number[]} the even numbers in the array
 */
function getEvens(numbers) {
  const result = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      result.push(numbers[i]);
    }
  }

  return result;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number[]} the odd numbers in the array
 */
function getOdds(numbers) {
  const result = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 1 || numbers[i] % 2 === -1) {
      result.push(numbers[i]);
    }
  }

  return result;
}

// === READ BUT DO NOT EDIT THE CODE BELOW ===

/**
 * @param {string} commaSeparatedNumbers
 * @returns {number[]} the string converted into an array of numbers
 */
function convertStringToNumbers(commaSeparatedNumbers) {
  // Split the string of numbers into an array of strings.
  const strings = commaSeparatedNumbers.split(",");

  // Convert the array of strings into an array of numbers
  const numbers = [];
  for (const s of strings) {
    const number = parseInt(s);
    numbers.push(number);
  }
  return numbers;
}

/**
 * Prints some descriptive statistics about the provided numbers.
 * @param {number[]} numbers
 */
function describeNumbers(numbers) {
  console.log(numbers);
  console.log(`You have given ${getLength(numbers)} numbers.`);
  console.log(`The sum of your numbers is ${getSum(numbers)}.`);
  console.log(`The mean of your numbers is ${getMean(numbers)}.`);
  console.log(`The smallest of your numbers is ${getMin(numbers)}.`);
  console.log(`The largest of your numbers is ${getMax(numbers)}.`);
  console.log(`The range of your numbers is ${getRange(numbers)}.`);
  console.log(`The even numbers you gave are ${getEvens(numbers)}.`);
  console.log(`The odd numbers you gave are ${getOdds(numbers)}.`);
}

function checkIfInputIsValid(userInputString) {
  if (
    userInputString[0] === "," ||
    userInputString[userInputString.length - 1] === ","
  ) {
    return false;
  }

  for (let i = 0; i < userInputString.length; i++) {
    if (!/[0-9-,]/.test(userInputString[i])) {
      return false;
    }
  }

  return true;
}

let userInputString = prompt(
  "Please enter some integers separated by commas.",
  "28,-15,30,975,400"
);
let isValid = checkIfInputIsValid(userInputString);

let numbers;

function validateInput() {
  if (isValid) {
    numbers = convertStringToNumbers(userInputString);
  } else {
    alert("Invalid input. Please enter some integers separated by commas.");
    userInputString = prompt(
      "Please enter some integers separated by commas.",
      "28,-15,30,975,400"
    );
    isValid = checkIfInputIsValid(userInputString);
    validateInput();
  }
}
validateInput();

// const numbers = convertStringToNumbers(userInputString);
describeNumbers(numbers);
