console.log('utils.js is running!');

export const square = (x) => x*x;
export const add = (a,b) => a+b;
const subtract = (a,b) => a-b; // cannot have export default during declaration
export default subtract; // or export default (a,b) => a-b; 
//export {square, add, subtract as default};