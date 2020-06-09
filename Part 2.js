//Find the duplicate number in an array

const values = [1, 2, 3, 4, 5, 5, 7, 7, 9, 11];

//For single duplicate number
// function findDuplicate(datas) {
//   for (let i = 0; i < values.length; i++) {
//     for (j = i + 1; j < values.length; j++) {
//       if (datas[i] == datas[j])
//         return datas[i];
//     }
//   }
//   return -1;
// }

// const result = findDuplicate(values);
// if (result != -1) {
//   console.log('Duplicate Number is', result);
// } else
//   console.log('Not any duplicate Number');


// For multiple duplicate numbers 
function findDuplicate(datas) {
  const duplicates = [];
  for (let i = 0; i < values.length; i++) {
    for (j = i + 1; j < values.length; j++) {
      if (datas[i] == datas[j])
        duplicates.push(datas[i]);
    }
  }
  return duplicates;
}

const result = findDuplicate(values);
if (result.length > 0) {
  console.log('Duplicate Number are', result);
} else
  console.log('Not any duplicate Number');