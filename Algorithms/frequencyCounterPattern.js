/*
Write a function called same, which accepts two arrays. 
The function should return true if every value in the array has it's corresponding value squared
 in the second array. The frequency of values must be the same.
 */

// Function 'same' which takes two arrays
function same(arrayOne, arrayTwo) {
  // Check if the lengths of the arrays are the same
  if (arrayOne.length !== arrayTwo.length) {
    console.log("Lengths don't match");
    return false;
  }
  // Check if the two arrays are empty
  if (arrayOne.length === 0 || arrayTwo.length === 0) {
    console.log("Both arrays must contain at least one value");
    return false;
  }

  let arrayOneduplicates = {};
  let arrayTwoduplicates = {};

  arrayOne.forEach((value) => {
    // Create an object with the values as keys
    arrayOneduplicates[value] = ++arrayOneduplicates[value] || 1;
  });

  // Loop over the second array and insert the values as keys
  arrayTwo.forEach((value) => {
    // Create an object with the values as keys
    arrayTwoduplicates[value] = ++arrayTwoduplicates[value] || 1;
  });

  for (const key in arrayOneduplicates) {
    if (!arrayTwoduplicates.hasOwnProperty(key ** 2)) {
      console.log(`No squared value for: ${key} found in the second array`);
      return false;
    }

    if (arrayTwoduplicates[key ** 2] !== arrayOneduplicates[key]) {
      return false;
    }
  }
  return true;
}

const arrayOne = [1, 2, 3];
const arrayTwo = [4, 1, 9];

const returnedValue = same(arrayOne, arrayTwo);
console.log(returnedValue);
