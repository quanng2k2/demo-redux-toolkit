import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counterSlice";
import "./App.css";

interface RootState {
  counter: {
    value: number;
  };
}

function App() {
  const counter = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter App</h1>
      <p>Count: {counter}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default App;
