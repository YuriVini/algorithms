// FIBONACCI SEQUENCE
const fibonacci = [];

fibonacci[1] = 1;
fibonacci[2] = 2;

for (let i = 3; i < 20; i++) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

for (let j = 1; j < fibonacci.length; j++) {
  // SHOWING FIBONACCI SEQUENCE
  // console.log(fibonacci[j]);
}
