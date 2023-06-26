const containsDuplicate = (array, k) => {
  const keyValPairs = new Map();

  for (let i = 0; i < array.length; i++) {
    // If we have a matching value && the condition is true => return true
    if (i - keyValPairs.get(array[i]) <= k) {
      return true;
    }

    // else create a key value pair with the number form the array and the current index
    keyValPairs.set(array[i], i);
  }

  return false;
};

console.log(containsDuplicate([1, 2, 3, 1], 3));
