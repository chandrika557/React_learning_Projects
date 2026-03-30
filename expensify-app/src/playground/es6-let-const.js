// var can be redeclared; the second declaration overwrites the first.
var nameVar = 'Jaya Chandrika';
var nameVar = 'Ediga';
console.log('nameVar', nameVar); // -> 'Ediga'

// let cannot be redeclared in the same scope, but can be reassigned.
let nameLet = 'Jaya';
nameLet = 'Chandrika';
console.log('nameLet', nameLet); // -> 'Chandrika'

// const cannot be reassigned; keep it constant.
const nameconst = 'lker';
console.log('nameconst', nameconst); // -> 'lker'

// block scoping demo
constfullName = 'Jaya Chandrika';
let firstName;

if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName); // -> 'Jaya'
}
console.log(firstName); // -> 'Jaya'
// Note: If you change 'var firstName' to 'let firstName', the last line will throw ReferenceError.