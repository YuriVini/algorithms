// Print Matrix
let averageTemp = [];

averageTemp[0] = [72, 75, 79, 79, 81, 81];
averageTemp[1] = [81, 79, 75, 75, 73, 73];

function printMatrix(myMatrix) {
  for (let i = 0; i < myMatrix.length; i++) {
    for (let j = 0; j < myMatrix[i].length; j++) {
      console.log(myMatrix[i][j]);
    }
  }
}

printMatrix(averageTemp);

const matrix3x3 = [];

for (let i = 0; i < 3; i++) {
  matrix3x3[i] = [];
  for (let j = 0; j < 3; j++) {
    matrix3x3[i][j] = [];
    for (let z = 0; z < 3; z++) {
      matrix3x3[i][j][z] = i + j + z;
    }
  }
}
