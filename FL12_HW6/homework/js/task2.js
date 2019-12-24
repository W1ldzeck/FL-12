let a, b, c;

a = prompt('Enter first value');
b = prompt('Enter second value');
c = prompt('Enter third value');

if (!parseInt(a) || !parseInt(b) || !parseInt(c)) {
   alert('input values should be ONLY numbers');
} else if (a === 0 || b === 0 || c === 0 || Math.sign(a) < 0 || Math.sign(b) < 0 || Math.sign(c) < 0 ) {
    alert('A triangle must have 3 sides with a positive definite length');
} else {
    if (a === b && a === c) {
        console.log('Equilateral triangle');
    } else if (a !== b && b !== c && a !== c) {
        console.log('Scalene triangle');
    } else if (a === b || b === c || a === c) {
        console.log('Isosceles triangle')
    } else {
        console.log('Triangle doesn’t exist');
    }
}