function squareRoot(num: number | null | undefined): number | string {
  if (num === null || num === undefined) {
    return "Input is undefined or null.";
  }

  if (isNaN(num)) {
    return "Invalid input. Please enter a valid number.";
  }

  if (num < 0) {
    return "Cannot calculate square root of a negative number.";
  }

  return Math.sqrt(num);
}

const userInput = prompt("Enter a number to calculate the square root:");

const numberInput: number | undefined = userInput ? parseFloat(userInput) : undefined;

const result = squareRoot(numberInput);
console.log(result);
