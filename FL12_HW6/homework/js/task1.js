let a, b, c, d, x, x1, x2;
let two = 2;
let four = 4;

a = prompt('Enter first value').trim();
b = prompt('Enter second value').trim();
c = prompt('Enter third value').trim();

if ( a === 0 || isNaN(a) || isNaN(b) || isNaN(c) || a === '' || b === '' || c === '' ) {
    console.log('Invalid input data');
} else {
    d = b * b - four * a * c;
    if (d < 0) {
        console.log('no solution');
    } else if (d === 0) {
        x = -b / (two * a);
        console.log('x = ' + x);
    } else {
        x1 = (-b + d * d) / (two * a);
        x2 = (-b - d * d) / (two * a);
        console.log('x1 = ' + x1 + ' and x2 = ' + x2);
    }
}