function square(x) {
    return x * x;
}
console.log(square(8));

const squareArrow = (x) => {
    return x * x;
}
console.log(squareArrow(8));

const squareArrow2 = (x) => x * x;
console.log(squareArrow2(8));

const firstName = (fullName) => {
    return fullName.split(' ')[0];
}
console.log(firstName('Hajira Raheem'));

const firstName2 = (fullName) => fullName.split(' ')[0];
console.log(firstName2('Hajira Raheem'));