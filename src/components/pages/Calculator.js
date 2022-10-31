import React, { useState } from 'react';
import calculate from '../../logic/calculate.js';

const Calculator = () => {
  const [state, setState] = useState({ total: 0, next: null, operation: null });
  const onClickHandler = (e) => {
    setState(() => calculate(state, e.target.innerText));
  };
  const { total, operation, next } = state;
  return (
    <section className="calculator">
      <h2>Let's Do Some Math!</h2>
      <div className="calculatorContainer">
        <span className="display">
          {total}
          {operation}
          {next}
        </span>
        <button className="clear" onClick={onClickHandler}>
          AC
        </button>
        <button className="plus-minus" onClick={onClickHandler}>
          +/-
        </button>
        <button className="percent" onClick={onClickHandler}>
          %
        </button>
        <button className="operator divide" onClick={onClickHandler}>
          ÷
        </button>
        <button className="number" onClick={onClickHandler}>
          7
        </button>
        <button className="number" onClick={onClickHandler}>
          8
        </button>
        <button className="number" onClick={onClickHandler}>
          9
        </button>
        <button className="operator multiply" onClick={onClickHandler}>
          x
        </button>
        <button className="number" onClick={onClickHandler}>
          4
        </button>
        <button className="number" onClick={onClickHandler}>
          5
        </button>
        <button className="number" onClick={onClickHandler}>
          6
        </button>
        <button className="operator minus" onClick={onClickHandler}>
          -
        </button>
        <button className="number" onClick={onClickHandler}>
          1
        </button>
        <button className="number" onClick={onClickHandler}>
          2
        </button>
        <button className="number" onClick={onClickHandler}>
          3
        </button>
        <button className="operator plus" onClick={onClickHandler}>
          +
        </button>
        <button className="number zero" onClick={onClickHandler}>
          0
        </button>
        <button className="decimal" onClick={onClickHandler}>
          .
        </button>
        <button className="operator equal" onClick={onClickHandler}>
          =
        </button>
      </div>
    </section>
  );
};

export default Calculator;
