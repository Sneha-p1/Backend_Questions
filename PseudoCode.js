const readline = require('readline');

// Static array
const staticArray = [1, 2, 3, 4, 5];

// Function to get user input
function getUserInput() {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    rl.question('Enter values separated by commas: ', (answer) => {
      const dynamicArray = answer.split(',').map(Number);
      rl.close();
      resolve(dynamicArray);
    });
  });
}

// Function to create a promise with setTimeout
function createDelayPromise(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(time);
    }, time);
  });
}

// Function to double array elements with delay
function doubleArrayElementsWithDelay(array) {
  return new Promise((resolve) => {
    let promise = Promise.resolve();

    array.forEach((element, index) => {
      promise = promise.then(() => {
        return createDelayPromise(1000).then(() => {
          array[index] = element * 2;
          console.log(`Element ${index + 1} doubled to ${array[index]}`);
        });
      });
    });

    promise.then(() => {
      resolve(array);
    });
  });
}

// Main function
async function main() {
  let arrayToProcess = staticArray;

  const dynamicArray = await getUserInput();
  if (dynamicArray.length > 0) {
    arrayToProcess = dynamicArray;
  }

  doubleArrayElementsWithDelay(arrayToProcess).then((doubledArray) => {
    console.log('Final doubled array:', doubledArray);
  });
}

// Call the main function
main();