//setup a constructor to take name and age (default to 0)
//getDescription - name is jaya and age is 22
//
class Person {
constructor(name='anonymous',age=0) { //setup a constructor to take name and age (default to 0)
    this.name = name;
    this.age = age;
  }
  getGreeting(){ //method to return a greeting message using the name property of the Person class
   return `Hi. I am ${this.name} says hi`; //${this.name} is a template string that will be replaced with the value of this.name when the string is evaluated
  }
  getDescription(){ //method to return a description message using the name and age properties of the Person class
    return `Name is ${this.name} and age is ${this.age}`;
  }
}
class Student extends Person { //creating a new class student that extends the Person class, which means that the student class will inherit all the properties and methods of the Person class
constructor(name,age,major) { //constructor function for the student class that takes in name, age and major as arguments
    super(name,age); // calling the constructor function of the parent class (Person) using the super keyword and passing in the name and age arguments to initialize the properties of the student class that are inherited from the Person class
    this.major = major;
 }
 hasMajor() { //method to check if the student has a major
    return !!this.major; //returning true if the major property is truthy, otherwise returning false
 }
 getDescription() { //overriding the getDescription method of the Person class to include the major property of the student class
    let description = super.getDescription();
    if (this.hasMajor()) {
      description += ` Their major is ${this.major}`;
    }
    return description;
  } //calling the getDescription method of the parent class (Person) using the super keyword and storing the result in a variable description
}
class Traveller extends Person { //creating a new class traveller that extends the Person class, which means that the traveller class will inherit all the properties and methods of the Person class
    constructor(name,age,homeLocation) { //constructor function for the traveller class that takes in name, age and homeLocation as arguments
        super(name,age); // calling the constructor function of the parent class (Person) using the super keyword and passing in the name and age arguments to initialize the properties of the traveller class that are inherited from the Person class
        this.homeLocation = homeLocation;
     }
     hasHomeLocation() { //method to check if the traveller has a home location
        return !!this.homeLocation; //returning true if the homeLocation property is truthy, otherwise returning false
     }
     getGreeting() { //overriding the getGreeting method of the Person class to include the homeLocation property of the traveller class    
        let greeting = super.getGreeting();
        
        if (this.hasHomeLocation()) {
          greeting += ` I am visiting from ${this.homeLocation}`;
        }
        return greeting;
      } //calling the getGreeting method of the parent class (Person) using the super keyword and storing the result in a variable greeting

}
const me = new Traveller('Jaya', 22,'Hyderabad'); //creating a new instance of the Student class and passing in the arguments 'Jaya', 22 and 'Hyderabad' to the constructor function of the Student class, which will be used to initialize the properties of the new object created from the Student class
console.log(me.getGreeting());

const other = new Traveller(undefined,undefined,'Nowhere'); //creating a new instance of the Student class without passing in any arguments, which will result in the properties of the new object being undefined
console.log(other.getGreeting());