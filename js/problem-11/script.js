function longestConsecutiveOnes(n) {
  let binaryString = (n >>> 0).toString(2); // Convert to binary string
  let maxRunLength = 0;
  let currentRunLength = 0;

  for (let i = 0; i < binaryString.length; i++) {
    if (binaryString[i] === '1') {
      currentRunLength++;
      maxRunLength = Math.max(maxRunLength, currentRunLength);
    } else {
      currentRunLength = 0;
    }
  }

  return maxRunLength;
}
