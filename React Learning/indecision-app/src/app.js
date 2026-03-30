
import React from 'react';
import ReactDOM from 'react-dom/client';  
import IndecisionApp from './components/IndecisionApp';
import './styles/styles.css';
// stateless functional component

//moving the component code
//setup import/export
//move the imports to that files (and setup an import here)
// class IndecisionApp extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
//     this.handlePick = this.handlePick.bind(this);
//     this.handleAddOption = this.handleAddOption.bind(this);
//     this.handleDeleteOption = this.handleDeleteOption.bind(this);
//     this.state = {
//       options: props.options
//     };
//   }
//   componentDidMount() {
//   try {
//     const json = localStorage.getItem('options');
//     const options = JSON.parse(json);
//     if (options) {
//         this.setState(() => ({ options }));
//     }
//   } catch (e) {
//     //do nothing
//   }
// }
//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.options.length !== this.state.options.length) {
//       const json = JSON.stringify(this.state.options);
//     localStorage.setItem('options', json);
//     }
//   }
//   componentWillUnmount() {
//     console.log('componentWillUnmount');
//   }
//   handleDeleteOptions() {
//     this.setState(() => ({ options: [] }));
//   }
//   handleDeleteOption(optionToRemove) {
//     this.setState((prevState) => ({
//       options: prevState.options.filter((option) => optionToRemove !== option)
//     }));
//   }
//   handlePick() {
//     const randomNum = Math.floor(Math.random() * this.state.options.length);
//     const option = this.state.options[randomNum];
//     alert(option);
//   }
//   handleAddOption(option) {
//     if (!option) {
//       return 'Enter valid value to add item';
//     } else if (this.state.options.indexOf(option) > -1) {
//       return 'This option already exists';
//     }

//     this.setState((prevState) => ({
//       options: prevState.options.concat(option)
//     }));
//   }
//   render() {
//     const subtitle = 'Put your life in the hands of a computer';

//     return (
//       <div>
//         <Header subtitle={subtitle} />
//         <Action
//           hasOptions={this.state.options.length > 0}
//           handlePick={this.handlePick}
//         />
//         <Options
//           options={this.state.options}
//           handleDeleteOptions={this.handleDeleteOptions}
//           handleDeleteOption={this.handleDeleteOption}
//         />
//         <AddOption
//           handleAddOption={this.handleAddOption}
//         />
//       </div>
//     );
//   }
// }

// IndecisionApp.defaultProps = {
//   options: []
// };

// // create the file , copy the copy, setup import/export
// const Header = ({ title = 'Indecision', subtitle }) => {
//     return (
//       <div>
//         <h1>{title}</h1>
//         {subtitle && <h2>{subtitle}</h2>}
//       </div>
//     );
// };
// // Header.defaultProps = {
// //   title: 'Indecision'
// // };

// const Action = (props) => {
//   return (
//     <div>
//       <button
//         onClick={props.handlePick}
//         disabled={!props.hasOptions}
//       >
//         What should I do?
//       </button>
//     </div>
//   );
// };

// const Options = (props) => {
//   return (
//     <div>
//       <button onClick={props.handleDeleteOptions}>Remove All</button>
//       {props.options.length === 0 && <p>Please add an option to get started!</p>}
//       {
//         props.options.map((option) => (
//           <Option
//             key={option}
//             optionText={option}
//             handleDeleteOption={props.handleDeleteOption}
//           />
//         ))
//       }
//     </div>
//   );
// };

// const Option = (props) => {
//   return (
//     <div>
//       {props.optionText}
//       <button
//         onClick={(e) => {
//           props.handleDeleteOption(props.optionText);
//         }}
//       >
//         remove
//       </button>
//     </div>
//   );
// };

// class AddOption extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleAddOption = this.handleAddOption.bind(this);
//     this.state = {
//       error: undefined
//     };
//   }
//   handleAddOption(e) {
//     e.preventDefault();

//     const option = e.target.elements.option.value.trim();
//     const error = this.props.handleAddOption(option);

//     this.setState(() => ({ error })); 

//     if (!error) {
//       e.target.elements.option.value = '';
//     }
//   }
//   render() {
//     return (
//       <div>
//         {this.state.error && <p>{this.state.error}</p>}
//         <form onSubmit={this.handleAddOption}>
//           <input type="text" name="option" />
//           <button>Add Option</button>
//         </form>
//       </div>
//     );
//   }
// }

// const User = (props) => {
//   return (
//     <div>
//       <p>Name: {props.name}</p>
//       <p>Age: {props.age}</p>
//     </div>
//   );
// };

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<IndecisionApp />);



//root.render(<Layout />);
// divied into simple componets each one for easy updation etc.,

// webpack make easyly tract and make small chunks

// class OldSyntax {
//   constructor() {
//     this.name = 'jaya';
//     this.getGreeting = this.getGreeting.bind(this);
//   }
//   getGreeting() {
//     return `Hi. My name is ${this.name}`;  //  backticks
//   }
// }
// const oldSyntax = new OldSyntax();         // lowercase
// const getGreeting = oldSyntax.getGreeting;
// console.log(getGreeting());

// class NewSyntax {
//   name = 'jen';
//   getGreeting = () => {
//     return `Hi. My name is ${this.name}.`;
//   }
// }
// const newSyntax = new NewSyntax();         // lowercase
// console.log(newSyntax.getGreeting());      // call the method