const RandomNumber = () => {
  // I did not include the zero, for the first digit
  var digits = "123456789".split(""),
    first = shuffle(digits).pop();
  // Add "0" to the array
  digits.push("0");
  return parseInt(first + shuffle(digits).join("").substring(0, 3), 10);

  function shuffle(o) {
    for (
      var j, x, i = o.length;
      i;
      j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x
    );
    return o;
  }
};

export default RandomNumber;
