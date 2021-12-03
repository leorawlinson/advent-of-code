const data = ``;

let depthNumbers = data.split("\n").map((x) => parseInt(x));

depthNumbers = depthNumbers
  .map((x, i) => {
    return x + depthNumbers[i + 1] + depthNumbers[i + 2];
  })
  .slice(0, depthNumbers.length - 2);

let plus = 0;

depthNumbers.map((x, i) => {
  if (i > 0 && x > depthNumbers[i - 1]) {
    plus++;
  }
});

console.log(plus);
