let data = `00100
11110
10110
10111
10101
01111
00111
11100
10000
11001
00010
01010`;

//convert data to array and transpose the array
let valuesArr = transpose(data.split("\n").map((value) => value.split("")));

//function to transpose array
function transpose(matrix) {
  return matrix[0].map((col, i) => matrix.map((row) => row[i]));
}

//covert values of nested array to integers
let convertedArr = valuesArr.map((value) =>
  value.map((innerVal) => parseInt(innerVal))
);

//reduce nested array values (not working)
let reducedArr = convertedArr.map((arr) =>
  arr.reduce((a, b) => {
    a + b;
  }, 0)
);

console.log(reducedArr);
