function isLeapYear(value) {
  let newDate = new Date(value);
  if (isNaN(newDate)) {
    return 'Invalid Date';
  }
  let newYear = newDate.getFullYear();
  if ((newYear % 4 === 0 && newYear % 100 !== 0) || newYear % 400 === 0) {
    return `${newYear} is a LeapYear`;
  } else {
    return `${newYear} is not a LeapYear`;
  }
}

isLeapYear(1213131313);