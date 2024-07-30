function someNumber(numberArray) {
    let finalNumber = 0;
  
    for (let j = 0; j < numberArray.length; j++) {
      finalNumber += numberArray[j];
    }
    return finalNumber;
  }
  
  function solution(roman) {
    let array = roman.split("");
    let element = "";
    let numbers = [0];
  
    for (let index = 0; index < array.length; index++) {
      element = array[index];
      if (element === "I" && array[index + 1] !== "V") {
        numbers.push(1);
      }
      console.log(array[index + 1]);
    }
    return someNumber(numbers);
  }
  
  solution("I");
  