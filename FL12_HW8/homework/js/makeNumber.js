function makeNumber(string) {
  let numberString = '';
  for (let i = 0; i < string.length; i++) {
    if (parseInt(string[i]) || parseInt(string[i]) === 0) {
      numberString += string[i];
    }
  }
  return numberString;
}
makeNumber();