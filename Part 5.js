//Remove all the duplicated number/elements from an array

const originalValues = [13, 2, 2, 4, 4, 5, 6, 11, 11, 11];
const finalValues = [];  //[13]
finalValues[0] = originalValues[0];//a[1,2,3,4,5,6];

originalValues.forEach((originalValue, i) => {
  let counter = 0;
  finalValues.forEach((finalValue, j) => {
    if (finalValue == originalValue)
      counter++;
  })
  if (counter == 0) {
    finalValues[finalValues.length] = originalValue;
  }
})

console.log(originalValues);
console.log(finalValues);
