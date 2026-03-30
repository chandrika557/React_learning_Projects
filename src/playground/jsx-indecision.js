'use strict';

console.log('App.js is running!');

//JSX - JavaScript XML extension to javascript. 
// const template = (
//     <div>
//         <h1>Indecision App</h1>
//         <p>This is some info</p>
//         <ol>
//             <li>Item one</li>
//             <li>Item two</li>
//         </ol>
//     </div>
// ); 

//task1 dynamically render values in templateTwo
// var userName = 'Jaya Chandrika';
// var userAge = 22;
// varuserLocation = 'Hyderabad';
// const user = {
//     name: 'Jaya Chandrika', //object with properties name, age and location
//     age: 22,
//     location: 'Hyderabad'
// };
// function getLocation(location) {
//     if (location) {
//         return <p>Location: {location}</p>;
//     }
// }
// const templateTwo = (
//     <div>
//         <h1>{user.name ? user.name : 'Anonymous'}</h1>   
//         {user.age >= 18 && <p>Age: {user.age}</p>}
//         {getLocation(user.location)}

//     </div>
// );

//task 2
//create app object title/sutitle
// use title/subtitle in template
// render template to the page
const app = { 
    title: 'Indecision App',
    subtitle: 'Happy to help you make decisions',
    options: ['One', 'Two']
};

const onFormSubmit = (e) => {
    e.preventDefault(); //preventing the default behavior of form submission which is to refresh the page
    //console.log('form submitted');

    const option = e.target.elements.option.value; //getting the value of the input field with name 'option' from the form submission event
        
    if (option) { //checking if the option is not empty
            app.options.push(option); //adding the new option to the options array in the app object
            e.target.elements.option.value = '';
        render(); //calling the render function to update the UI with the new option added to the options array
        }
};
const onRemoveAll = () => {
  app.options = [];
  render();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length); //generating a random number between 0 and the length of the options array
    const option = app.options[randomNum]; //getting the option at the index of the random number generated
    alert(option);     //logging the option at the index of the random number generated to the console
    console.log(randomNum);
};


// const templateThree = (
//    <div>
//     <h1>{app.title}</h1>
//     {app.subtitle && <p>{app.subtitle}</p>}
//     <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p> 
//     <p>{app.options.length}</p>
//    <ol>
//      <li>Item one</li>
//      <li>Item two</li>
//    </ol>
//    <form onSubmit={onFormSubmit}>
//     <input type="text" name="option"/> 
//    <button>Add Option</button>
//    </form>
//    </div>
// );

//create "Remove all" button above list
//on click -> wipe the array -> rerender
const appRoot = document.getElementById('app');
//ReactDOM.render(templateThree, appRoot);

const numbers = [55, 101, 1000];
//task 4

//create  render function that renders the new jsx
const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            {/* <p>{app.options.length}</p> */}
            <button disabled onClick={onMakeDecision}>what should i do?</button>
            <button onClick={onRemoveAll}>Remove All</button>
            {
                // numbers.map((number) => {
                //     return <p key={number}>Number: {number}</p>
                // })}
            }
            <ol>
                {/* map over app.options getting back an array of lis (set key and test) */}
                {app.options.map((option) => <li key={option}>{option}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );

    
// put this once at top-level (outside render)
const root = ReactDOM.createRoot(appRoot);

// and inside render()
root.render(template);

};
render();

//call it right away
//callit after options array added to



