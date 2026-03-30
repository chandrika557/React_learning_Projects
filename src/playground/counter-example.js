//stateless functional components
// count - setup default prop value to 0
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 0
    };
    }
    componentDidMount () {
        const stringCount = localStorage.getItem('count');
        const count = parseInt(stringCount, 10);
        if (!isNaN(count)) {
            this.setState(() => ({ count }));
        }

    }   
    componentDidUpdate(prevProps, prevState) {
        if(prevState.count !== this.state.count)
            localStorage.setItem('count', this.state.count);
    }
      handleAddOne() {
    this.setState((presentState) => {
      return {
        count: presentState.count + 1
      };
    })
    console.log('handleAddOne');
  }
  handleMinusOne() {
    this.setState((presentState) => {
      return {
        count: presentState.count -1
      };
    })
    console.log('handleMinusOne');
  }
  handleReset() {
     this.setState(() => {
      return {
        count: 0
      };
    });
    // this.setState({
    //     count:0
    // });
    // this.setState({
    //     count: this.state.count +1
    // });
  }
    render(){
        return(
            <div>
                {this.state.name}
                <h1>Count:{this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button> 
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        );
    }
}

Counter.defaultProps = {
    count:0
}

// create three methods - handleAddOne, handleMinusOne, handleReset 
//use console.log to print method name
//write up onclick & bind in the constructor
ReactDOM.render(<Counter count={10} />, document.getElementById('app')); //default value for


// let count = 0;
// const addOne = () => {
//     count++;
//     renderCounterApp();
// }
// //task 3 - create three functions - addOne, minusOne, reset - log something to the console
// const minusOne = () => {
//     //subtract 1 from count -render app after subtracting
//     count--;
//     renderCounterApp();
// }
// const reset = () => {
//     //set count to 0 a render app after resetting
//     count = 0;
//     renderCounterApp();
// }

// console.log(templateTwo);
// const appRoot = document.getElementById('app');
// const root = ReactDOM.createRoot(appRoot);


// //for rnderind
// const renderCounterApp = () => {
//     const templatefour = (
//     <div>
//     <h1>Count: {count}</h1>
//     <button onClick={addOne}>+1</button> 
//     <button onClick={minusOne}>-1</button>
//     <button onClick={reset}>reset</button>
//     </div>
// );
//     root.render(templatefour);
// }
// renderCounterApp();

