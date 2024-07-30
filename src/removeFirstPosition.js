// REMOVENDO VALORES NA PRIMERA POSIÇAO
Array.prototype.removeFirstPosition = function () {
  const newArray = [];

  // REMOVE THE FIRST ELEMENT OF ARRAY
  for (let i = 0; i < this.length; i++) {
    this[i] = this[i + 1];
  }

  // REMOVE "UNDEFINED" VALUES
  for (let j = 0; j < this.length; j++) {
    if (this[j] !== undefined) {
      newArray.push(this[j]);
    }
  }
  return newArray;
};

numbers = numbers.removeFirstPosition();

// console.log("Depois de remover", numbers);
