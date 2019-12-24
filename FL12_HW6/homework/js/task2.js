let a, b, c;

a = prompt('Enter first value').trim();
b = prompt('Enter second value').trim();
c = prompt('Enter third value').trim();

if (!parseInt(a) || !parseInt(b) || !parseInt(c)) {
   alert('input values should be ONLY numbers');
} else if (a === 0 || b === 0 || c === 0 || Math.sign(a) < 0 || Math.sign(b) < 0 || Math.sign(c) < 0 ) {
    alert('A triangle must have 3 sides with a positive definite length');
} else {
    a = Number(a);
    b = Number(b);
    c = Number(c);
    if ( a + b <= c || a + c <= b || b + c <= a ) {
        console.log('Triangle doesn’t exist');
    } else if (a === c && a === b) {
        console.log('Equilateral triangle');
    } else if (a !== b && b !== c && a !== c) {
        console.log('Scalene triangle');
    } else {
        console.log('Isosceles triangle');
    }
}