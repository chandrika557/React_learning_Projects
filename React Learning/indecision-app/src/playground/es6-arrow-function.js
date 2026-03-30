const square = function(x) {
    return x * x;
};
console.log(square(3));

const squareArrow = x => x*x;
console.log(squareArrow(8));

//challenge - get first name from full name
//getfirstName('Mike smith') -> 'Mike'
//create regular arrow function
// const getFirstName = (fullName) => {
//     return fullName.split(' ')[0];
// };

const getFirstName = (fullname)=> fullname.split(' ')[0];
console.log(getFirstName('Jaya Chandrika'));