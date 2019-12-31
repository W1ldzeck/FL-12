function countNumbers(string) {
  let numberString = '';
  let numberObject = {};
  for (let i = 0; i < string.length; i++) {
    if (parseInt(string[i]) || parseInt(string[i]) === 0) {
      numberString += string[i];
    }
  }
  for (let j = 0; j < numberString.length; j++) {
   numberObject[numberString[j]] = numberObject[numberString[j]] ? numberObject[numberString[j]] + 1 : 1;
  }
  return numberObject;
}
countNumbers();