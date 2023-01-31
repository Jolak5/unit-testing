const stringLength = (string) => {
  //   return string.length;
  return string.length > 0 && string.length < 10
    ? string.length
    : 'please enter a string below 10';
};

module.exports = stringLength;
