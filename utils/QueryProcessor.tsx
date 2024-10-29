export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  // Modify this block to include the required prefix
  if (query.toLowerCase().includes("andrewid")) {
    return "andrewID: maidarus"; // Correctly format the output
  }

  if (query.includes("What is your name?")) {
    return "maidarus";
  }

  if (query.includes("Which of the following numbers is the largest:")) {
    // Extract numbers from the query
    const numbersRegex = /\d+/g;
    const numbers = query.match(numbersRegex);

    if (numbers && numbers.length >= 2) {
      // Convert extracted numbers to an array of integers
      const intNumbers = numbers.map((num) => parseInt(num, 10));

      // Find the largest number
      const largestNumber = Math.max(...intNumbers);

      // Return the largest number as a number
      return largestNumber.toString();
    }
  }

  if (query.includes("plus")) {
    // Extract numbers x and y
    const numbersRegex = /\d+/g;
    const numbers = query.match(numbersRegex);

    if (numbers && numbers.length === 2) {
      // Convert extracted numbers to integers
      const x = parseInt(numbers[0], 10);
      const y = parseInt(numbers[1], 10);

      // Perform the addition
      const result = x + y;

      // Return the result as a number
      return result.toString();
    }
  }

  if (query.includes("multiplied")) {
    // Extract numbers x and y
    const numbersRegex = /\d+/g;
    const numbers = query.match(numbersRegex);

    if (numbers && numbers.length === 2) {
      // Convert extracted numbers to integers
      const x = parseInt(numbers[0], 10);
      const y = parseInt(numbers[1], 10);

      // Perform the addition
      const result = x * y;

      // Return the result as a number
      return result.toString();
    }
  }

  if (query.includes("Which of the following numbers is both a square and a cube:")) {
    // Extract numbers from the query
    const numbersRegex = /\d+/g;
    const numbers = query.match(numbersRegex);

    if (numbers && numbers.length >= 1) {
      // Convert extracted numbers to an array of integers
      const intNumbers = numbers.map((num) => parseInt(num, 10));

      // Find the numbers that are both squares and cubes
      const squareAndCubeNumbers = intNumbers.filter((num) => {
        const sqrt = Math.sqrt(num);
        const cubeRoot = Math.cbrt(num);
        return Number.isInteger(sqrt) && Number.isInteger(cubeRoot);
      });

      // Return the first number that meets the condition as a number
      if (squareAndCubeNumbers.length > 0) {
        return squareAndCubeNumbers[0].toString();
      }
    }
  }

  return "";
}
