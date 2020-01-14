// Task 1
function convert() {
  let newArray = [];
  for (let i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] === 'string') {
      newArray[i] = parseInt(arguments[i]);
    } else {
      newArray[i] = String(arguments[i]);
    }
  }
  return newArray;
}

// Task 2
function executeforEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i]);
  }
}

function multiFunc(el) {
  let multiplier = 2;
  console.log(el * multiplier);
}

// Task 3
function mapArray(array, callback) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    callback[i] = plusFunc(array[i]);
  }
  return newArray;
}

function plusFunc(el) {
  let three = 3;
  if (typeof el === 'string') {
    return parseInt(el) + three;
  } else {
    return el + three;
  }
}

// Task 4
function filterArray(array, callback) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    let callbackResult = callback(array[i]);
    if (callbackResult) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

function evenFunc(el) {
  let even = 2;
  if (el % even === 0) {
    return el;
  }
}

// Task 5
function flipOver(string) {
  let newStr = '';
  for (let i = string.length - 1; i >= 0; i = i - 1) {
    newStr += string[i];
  }
  return newStr;
}

// Task 6
function makeListFromRange(array) {
  let newArr = [];
  for (let i = array[0]; i <= array[1]; i++) {
    newArr.push(i);
  }
  return newArr;
}

// Task 7
function getArrayOfKeys(objects, keyName) {
  let newArr = [];
  for (let i = 0; i < objects.length; i++) {
    newArr.push(objects[i][keyName]);
  }
  return newArr;
}

// Task 8
function substitute(array) {
  let limit = 30;
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < limit) {
      newArr.push('*');
    } else {
      newArr.push(array[i]);
    }
  }
  return newArr;
}

// Task 9
function getPastDay(date, days) {
  let dateCopy = new Date(date);
  dateCopy.setDate(date.getDate() - days);
  return dateCopy.getDate();
}

// Task 10
function formatDate(date) {
  const range = 10;

  let nDate = date.getDate();
  let nyear = date.getFullYear();
  let nmonth = date.getMonth() + 1;
  let nhours = date.getHours();
  let nminutes = date.getMinutes();

  if (nhours < range) {
    nhours = '0' + nhours;
  }

  return `${nyear}/${nmonth}/${nDate} ${nhours}:${nminutes}`;
}