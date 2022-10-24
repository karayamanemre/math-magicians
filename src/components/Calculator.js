import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <span className="display">0</span>
        <button className="clear">AC</button>
        <button className="plus-minus">+/-</button>
        <button className="percent">%</button>
        <button className="operator divide">/</button>
        <button className="number">7</button>
        <button className="number">8</button>
        <button className="number">9</button>
        <button className="operator multiply">*</button>
        <button className="number">4</button>
        <button className="number">5</button>
        <button className="number">6</button>
        <button className="operator minus">-</button>
        <button className="number">1</button>
        <button className="number">2</button>
        <button className="number">3</button>
        <button className="operator plus">+</button>
        <button className="number zero">0</button>
        <button className="decimal">.</button>
        <button className="operator equal">=</button>
      </div>
    );
  }
}

export default Calculator;
