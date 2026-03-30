console.log('utils.js is running!')

export const square = (x) => x * x;
export const add =(a,b) => a + b;
// const subtract = (a,b) => a - b; //(a,b) => a - b ; function
// export default subtract; //another way
export default (a,b) => a - b;

 //export {square, add, subtract as default};   //not an object named exports
//exports - default export - named exports