const data = ``;

let horizontalP = 0;
let depth = 0;
let aim = 0;
// let numbers = [];
// let direction = []

// //filter the numbers into seperate array
// data.filter((num) => {
//   if (num.length <= 1) {
//     numbers.append(num);
//   }
// });

// //filter the direction into seperate array
// data.filter((direction) => {
//     if(direction.length >= 2) {
//         direction.append(direction)
//     }
// })

// //convert the numbers from strings to numbers
// let numbers = numbers.map((x) => parseInt(x));

//
// let directions = data.split("\n").map((value) => {
//   if (value.length <= 1) {
//     parseInt(value);
//   }
// });
let directions = data
  .split("\n")
  .map((value) => value.split(" "))
  .map(([dir, value]) => [dir, parseInt(value)])
  .map(([dir, value]) => {
    switch (dir) {
      case "forward":
        horizontalP = horizontalP + value;
        depth = depth + aim * value;
        break;
      case "up":
        aim = aim - value;
        break;
      case "down":
        aim = aim + value;
        break;
    }
    return horizontalP * depth;
  });

console.log(directions[directions.length - 1]);
