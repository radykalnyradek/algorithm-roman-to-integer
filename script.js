var romanToInt = function (s) {
  const roman = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000,
  };
  let total = 0;

  for (i = 0; i < s.length; i++) {
    const currentNumber = roman[s[i]];
    const nextNumber = roman[s[i+1]];
    if (nextNumber > currentNumber) {
      total += (nextNumber - currentNumber)
      i++;
    } else {
      total += currentNumber
    }
    console.log(total)
  }
};

romanToInt("MCMXCIV");
