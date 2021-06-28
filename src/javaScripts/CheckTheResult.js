const CheckTheResult = (GuessedNumber, RandomNumber) => {
  const GuessedNumberArray = Array.from(GuessedNumber.toString()).map(Number);
  const RandomNumberArray = Array.from(RandomNumber.toString()).map(Number);
  let resultPositive = 0;
  let resultNegative = 0;
  for (var i = 0; i < RandomNumberArray.length; i++) {
    if (GuessedNumberArray[i] === RandomNumberArray[i]) {
      resultPositive = resultPositive + 1;
    } else {
      for (var k = 0; k < RandomNumberArray.length; k++) {
        if (GuessedNumberArray[i] === RandomNumberArray[k]) {
          resultNegative = resultNegative - 1;
        }
      }
    }
  }
  if (resultPositive === 0 && resultNegative === 0) {
    return "0";
  } else if (resultPositive > 0 && resultNegative === 0) {
    return "+" + resultPositive;
  } else if (resultPositive > 0 && resultNegative < 0) {
    return "+" + resultPositive + resultNegative;
  } else if (resultPositive === 0 && resultNegative < 0) {
    return resultNegative.toString();
  }
};

export default CheckTheResult;
