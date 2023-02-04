import React, { useReducer, useEffect } from "react";

const initialState = {
  expression: "",
  result: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "CHANGE":
      return { ...state, expression: action.payload };
    case "CALCULATE":
      return { ...state, result: eval(state.expression) };
    default:
      break;
  }
}

const Calculator = () =>  {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    console.log(state);
  }, [state]);

  const expressionChange =(event) => {
    dispatch({ type: "CHANGE", payload: event.target.value });
  }

  const handleCalculate = () =>  {
    dispatch({ type: "CALCULATE" });
  }

 const mathSymbol = (symbol) => {
    dispatch({ type: "CHANGE", payload: state.expression + symbol });
  }

  return (
    <div>
      <input type="text" value={state.expression} onChange={expressionChange} />
      <button onClick={() => mathSymbol("+")}>+</button>
      <button onClick={() => mathSymbol("-")}>-</button>
      <button onClick={() => mathSymbol("/")}>/</button>
      <button onClick={() => mathSymbol("*")}>*</button>
      <button onClick={handleCalculate}>Calculate</button>
      <h1>Result: {state.result}</h1>
    </div>
  );
}

export default Calculator;
