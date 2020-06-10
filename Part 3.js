//Find the Largest and smallest number in an unsorted integer array

const values = [13, 2, 3, 4, 10, 5, 6, 7, 9, 11];

let largest = values[0];
let smallest = values[0];

for (let i = 0; i < values.length; i++) {
  if (values[i] > largest)
    largest = values[i];

  if (values[i] < smallest)
    smallest = values[i];
}

console.log(`Largest ${largest}`);
console.log(`Smallest ${smallest}`);