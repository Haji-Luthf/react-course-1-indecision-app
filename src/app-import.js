// import './utils.js';

import subtract, {square, add} from './utils.js';
import drinkPermit from './person.js';
import validator from 'validator';

console.log(validator.isEmail('test'));

console.log('app.js is running!');
console.log(square(4));
console.log(add(4,8));
console.log(subtract(60, 5));
//console.log(isAdult(4));
console.log(drinkPermit(40));