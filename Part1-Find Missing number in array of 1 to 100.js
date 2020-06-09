//Find the missing number in a integer array of 1 to 100
//calculate the total sum of array from 1 to 100
//calculate total sum of given array
//calculate the difference 

let numbers = [];
let total = 0;
let total2 = 0;
for (let i = 1; i <= 100; i++) {
  if (i != 30)
    numbers.push(i);
  total += i;
}

for (let i = 0; i < numbers.length; i++) {
  total2 += numbers[i];
}
console.log(`Missing number is ${total-total2}`);