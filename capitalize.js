const capitalize = (string) => {
  const arr = string.split('');
  const letter = arr.shift();
  const CapitalizedLetter = letter.toUpperCase();
  const newString = arr.join('');
  return CapitalizedLetter + newString;
};

module.exports = capitalize;
