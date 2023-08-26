 function capitalize(str) {
  if (typeof str !== 'string' || str.length === 0) {
    throw new Error('String must be  of type string and be at least 2 character long');
  }
  const firstLetter = str.charAt(0).toUpperCase();
  const restString = str.slice(1);
  return firstLetter + restString;
}


module.exports = capitalize;