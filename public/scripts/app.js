//stateless functional components
// count - setup default prop value to 0
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Counter = (function (_React$Component) {
  _inherits(Counter, _React$Component);

  function Counter(props) {
    _classCallCheck(this, Counter);

    _get(Object.getPrototypeOf(Counter.prototype), 'constructor', this).call(this, props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 0
    };
  }

  _createClass(Counter, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var stringCount = localStorage.getItem('count');
      var count = parseInt(stringCount, 10);
      if (!isNaN(count)) {
        this.setState(function () {
          return { count: count };
        });
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.count !== this.state.count) localStorage.setItem('count', this.state.count);
    }
  }, {
    key: 'handleAddOne',
    value: function handleAddOne() {
      this.setState(function (presentState) {
        return {
          count: presentState.count + 1
        };
      });
      console.log('handleAddOne');
    }
  }, {
    key: 'handleMinusOne',
    value: function handleMinusOne() {
      this.setState(function (presentState) {
        return {
          count: presentState.count - 1
        };
      });
      console.log('handleMinusOne');
    }
  }, {
    key: 'handleReset',
    value: function handleReset() {
      this.setState(function () {
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
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        this.state.name,
        React.createElement(
          'h1',
          null,
          'Count:',
          this.state.count
        ),
        React.createElement(
          'button',
          { onClick: this.handleAddOne },
          '+1'
        ),
        React.createElement(
          'button',
          { onClick: this.handleMinusOne },
          '-1'
        ),
        React.createElement(
          'button',
          { onClick: this.handleReset },
          'reset'
        )
      );
    }
  }]);

  return Counter;
})(React.Component);

Counter.defaultProps = {
  count: 0
};

// create three methods - handleAddOne, handleMinusOne, handleReset
//use console.log to print method name
//write up onclick & bind in the constructor
ReactDOM.render(React.createElement(Counter, { count: 10 }), document.getElementById('app')); //default value for

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
