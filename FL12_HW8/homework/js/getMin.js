function getMin() {
  let minArg = arguments[0];
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] < minArg) {
      minArg = arguments[i];
    }
  }
  return minArg;
}
getMin();