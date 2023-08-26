function reverseString(str) {
  let newString = "";
  if (str.length > 0) {
    for (let i = str.length - 1; i >= 0; i--) {
      newString += str[i];
    }
    return  newString;
  } else {
    throw new Error('String must be at least 1 character long');
  }
}

module.exports = reverseString;