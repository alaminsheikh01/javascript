import { useState } from "react";

const initialInputState = {
  a: 0,
  b: 0,
};

const App = () => {
  const [inputState, setInputState] = useState({ ...initialInputState });

  const handleChangeField = (e) => {
    setInputState({
      ...inputState,
      [e.target.name]: e.target.value,
      /**
       * same logic
       * a: e.target.value
       * b: e.target.value
       */
    });
  };

  const handleClear = () => {
    setInputState({
      ...initialInputState,
    });
  };

  const handleArithmethicOps = (operations) => {
    const f = new Function(
      "operations",
      `return ${inputState.a} ${operations}  ${inputState.b}`
    );
    console.log(f(operations));
  };

  return (
    <div style={{ width: "50%", margin: "0 auto" }}>
      <h1>Result: 0</h1>

      <div>
        <p>Inputs</p>
        <input
          type="number"
          value={inputState.a}
          onChange={handleChangeField}
          name="a"
        />
        <input
          type="number"
          value={inputState.b}
          onChange={handleChangeField}
          name="b"
        />
      </div>
      <div>
        <p>Operators</p>
        <button onClick={() => handleArithmethicOps("+")}>+</button>
        <button onClick={() => handleArithmethicOps("-")}>-</button>
        <button onClick={() => handleArithmethicOps("*")}>*</button>
        <button onClick={() => handleArithmethicOps("/")}>/</button>
        <button onClick={handleClear}>Clear</button>
      </div>
      <div>
        <p>History</p>
        <p>
          <small>There is no history</small>
        </p>
      </div>
    </div>
  );
};

export default App;