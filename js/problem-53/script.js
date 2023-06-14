const isHappy = (number) => {
  const cycleValues = new Set();
  let currentNumber = number;

  while (currentNumber !== 1) {
    if (number === 1) {
      break;
    }

    const arrayOfNumbers = String(currentNumber).split("");
    const arrayPower2 = arrayOfNumbers.map((num) => Math.pow(num, 2));

    const sumOfPowers = arrayPower2.reduce((el, curr) => {
      return (curr += el);
    });

    if (cycleValues.has(sumOfPowers)) {
      return false;
    } else {
      cycleValues.add(sumOfPowers);
      currentNumber = sumOfPowers;
    }
  }

  return true;
};
