import { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { minusNum, plusNum } from "./redux/modules/calculator";

function App() {
  const number = useSelector((state) => state.calculator.number);
  console.log(number);
  const [num, setNum] = useState("");
  const dispatch = useDispatch();

  const changeHandler = (e) => {
    console.log(e.target.value);
    setNum(e.target.value);
  };

  const plusBtn = () => {
    dispatch(plusNum(num));
  };

  const minusBtn = () => {
    dispatch(minusNum(num));
  };

  return (
    <div className="App">
      <h1>덧셈과 뺄셈이 가능한 앱 만들기</h1>
      <div>
        <input type="number" value={num} onChange={(e) => changeHandler(e)} /> 만큼을 <button onClick={plusBtn}>더할게요</button> <button onClick={minusBtn}>뺄게요</button>
      </div>
      <hr />
      <div>
        <h3>결과</h3>
        <p>{number}</p>
      </div>
    </div>
  );
}

export default App;
