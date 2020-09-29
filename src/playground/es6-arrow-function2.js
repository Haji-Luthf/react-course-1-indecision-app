// arguments object in ES5 function
const sum = function(a,b) {
    console.log(arguments); // prints 7,8,6
    return a+b;
}
console.log(sum(7,8,6)); // prints 15

// arguments object in arrow function
const sumArrow = (a,b) => {
   // console.log(arguments); // Uncaught ReferenceError: arguments is not defined
    return a+b;
}
console.log(sumArrow(7,8,6));

// this keyword is bound to the ES5 function
const user = {
    name: 'Hajira',
    cities: ['Bengaluru', 'Chennai', 'Mysuru'],
    printPlacesLived: function(){
        console.log(this.name);
        console.log(this.cities);
        this.cities.forEach(function(city) {
         //   console.log(this.name + ' has lived in ' + city); // Uncaught TypeError: Cannot read property 'name' of undefined
        });
    }
}
user.printPlacesLived();

// this keyword is bound to the parent of arrow function
const userArrow = {
    name: 'Hajira',
    cities: ['Bengaluru', 'Chennai', 'Mysuru'],
    printPlacesLived() {
        console.log(this.name);
        console.log(this.cities);
        this.cities.forEach((city) => console.log(this.name + ' has lived in ' + city));
    }
}
userArrow.printPlacesLived();

// using map instead of forEach
const userArrowMap = {
    name: 'Hajira',
    cities: ['Bengaluru', 'Chennai', 'Mysuru'],
    printPlacesLived() {
       return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
}
console.log(userArrowMap.printPlacesLived());

// challenge
const product = {
    numbers: [1,2,3,4],
    multiplier: 10,
    multiply() {
        return this.numbers.map((number) => number * this.multiplier);
    }
}
console.log(product.multiply());