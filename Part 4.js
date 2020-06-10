//Find all the pair of integer array whose sum is equal to given number
// if given number=15
const values = [13, 2, 3, 4, 10, 5, 6, 7, 9, 11];

for (let i = 0; i < values.length; i++) {
  for (let j = i + 1; j < values.length; j++) {
    if (values[i] + values[j] == 15)
      console.log(`Pair of numbers whose sum is equal to 12 are ${values[i]}, ${values[j]}`);
  }
}
