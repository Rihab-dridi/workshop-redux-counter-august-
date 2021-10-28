import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementHandler,
  decrementHandler,
  resetHandler,
} from "./redux/action";

function App() {
  //create a const for the hook useDispatch
  const dispatch = useDispatch();

  //dispatch the action
  const plus = () => {
    dispatch(incrementHandler());
  };
  const minus = () => {
    dispatch(decrementHandler());
  };

  //extact a global state from the store
  //const state = useSelector(state => state.state)
  const count = useSelector((state) => state.counter);
  console.log(count);
  return (
    <div className="App">
      <h1> Redux Counter Workshop</h1>
      <div className="counter">
        <button onClick={plus}> +</button>
        <h3> {count} </h3>
        <button onClick={minus}> -</button>
      </div>
      <button onClick={() => dispatch(resetHandler())}> Reset </button>
    </div>
  );
}

export default App;
