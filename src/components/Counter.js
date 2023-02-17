import { useDispatch, useSelector } from "react-redux";
import { calculatorActions } from "../store/calculator/calculatorSlice";
import classes from "./Counter.module.css";

const Counter = () => {
  const result = useSelector((state) => state.calculator.result);

  const dispatch = useDispatch();

  const addHandler = () => {
    dispatch(calculatorActions.add(5));
  };
  const divideHAndler = () => {
    dispatch(calculatorActions.divide(4));
  };
  const subtractHandler = () => {
    dispatch(calculatorActions.subtract(10));
  };
  const multiplayHandler = () => {
    dispatch(calculatorActions.multiplay(2));
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Calculator</h1>
      <div className={classes.value}>Result: {result}</div>
      <button onClick={addHandler}>+ 5</button>
      <button className={classes.button} onClick={subtractHandler}>
        - 10
      </button>
      <button className={classes.button} onClick={multiplayHandler}>
        * 2
      </button>
      <button className={classes.button} onClick={divideHAndler}>
        / 4
      </button>
    </main>
  );
};

export default Counter;
