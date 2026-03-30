// arguments object - no longer bound with arrow functions

// const add = function (a,b) {
//     return (a + b);
// }
const add = (a,b) =>{ // anayonmusous function with parameters a and b, arrow function
    //console.log(arguments);
    return a + b;
}
console.log(add(55, 1, 1001)); //arguments object is not available in arrow functions, it will throw an error if we try to access it

//this keyword - no longer bound

const user = { //object with properties name and cities
    name:'kick',
    cities:['Hyderabad', 'Bangalore', 'Chennai'],
    printPlacesLived(){ //method to print name and cities, anonymous function // if we use arrow function here, 'this' will not refer to the user object, it will refer to the global object, which is window in browser and global in node.js
        // const that = this; //storing the value of 'this' in a variable 'that' to use inside the forEach function
        //1 const cityMessages = this.cities.map((city) => { //using map to iterate over cities array, arrow function
        // 1 return city + '!'; //returning a new array with city names followed by '!' using map function, city is the current city in the iteration
    return this.cities.map((city) => this.name + ' has lived in ' + city);//using map to iterate over cities array, arrow function
 //returning a new array with messages using map function, this.name is 'kick' and city is the current city in the iteration    
    // }); 
        //1 return cityMessages;
            //this.cities.forEach((city) => { //using forEach to iterate over cities array, arrow function
        //     console.log(this.name + ' has lived in ' + city); //that.name is 'kick' and city is the current city in the iteration
        // });
    }
};
console.log(user.printPlacesLived());

// Challenge area
const multiplier = { //object with properties numbers and multiplyBy
    numbers:[10,20,30],
    multiplyBy :3,
    multiply (){
        return this.numbers.map((number) => number * this.multiplyBy);
    }

};
console.log(multiplier.multiply());