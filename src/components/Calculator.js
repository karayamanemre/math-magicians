import React from 'react';
import calculate from '../logic/calculate.js';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
    this.onClickHandler = this.onClickHandler.bind(this);
  }
  handleClick(e) {
    this.setState((state) => calculate(state, e.target.innerText));
  }
  onClickHandler(e) {
    this.setState((state) => calculate(state, e.target.innerText));
  }
  render() {
    const { next, total, operation } = this.state;
    return (
      <div className="container">
        <span className="display">
          {total}
          {operation}
          {next}
        </span>
        <button className="clear" onClick={this.onClickHandler}>
          AC
        </button>
        <button className="plus-minus" onClick={this.onClickHandler}>
          +/-
        </button>
        <button className="percent" onClick={this.onClickHandler}>
          %
        </button>
        <button className="operator divide" onClick={this.onClickHandler}>
          ÷
        </button>
        <button className="number" onClick={this.onClickHandler}>
          7
        </button>
        <button className="number" onClick={this.onClickHandler}>
          8
        </button>
        <button className="number" onClick={this.onClickHandler}>
          9
        </button>
        <button className="operator multiply" onClick={this.onClickHandler}>
          x
        </button>
        <button className="number" onClick={this.onClickHandler}>
          4
        </button>
        <button className="number" onClick={this.onClickHandler}>
          5
        </button>
        <button className="number" onClick={this.onClickHandler}>
          6
        </button>
        <button className="operator minus" onClick={this.onClickHandler}>
          -
        </button>
        <button className="number" onClick={this.onClickHandler}>
          1
        </button>
        <button className="number" onClick={this.onClickHandler}>
          2
        </button>
        <button className="number" onClick={this.onClickHandler}>
          3
        </button>
        <button className="operator plus" onClick={this.onClickHandler}>
          +
        </button>
        <button className="number zero" onClick={this.onClickHandler}>
          0
        </button>
        <button className="decimal" onClick={this.onClickHandler}>
          .
        </button>
        <button className="operator equal" onClick={this.onClickHandler}>
          =
        </button>
      </div>
    );
  }
}

export default Calculator;
