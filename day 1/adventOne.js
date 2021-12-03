const data = ``;

let depthNumbers = data.split("\n").map((x) => parseInt(x));

let plus = 0;

depthNumbers.map((x, i) => {
  if (i > 0 && x > depthNumbers[i - 1]) {
    plus++;
  }
});

console.log(plus);
