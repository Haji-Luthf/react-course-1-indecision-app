console.log('utils.js is running!');

//Named exports (Any number of named exports allowed)
export const square = (x) => x*x; 
export const add = (a,b) => a+b; 

// Default export (Only one per file allowed)
//const subtract = (a,b) => a-b; // cannot have export default during declaration
//export default subtract; // or export default (a,b) => a-b; 

//or
export default (n) => n*10;
//export {square, add, subtract as default};