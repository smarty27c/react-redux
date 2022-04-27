import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementByAmount } from "./counterSlice";

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  let [amount, setAmount] = useState(0);

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <div>
          <button onClick={() => dispatch(incrementByAmount(parseInt(amount)))}>
            Increment by amount: -
          </button>
          <input name="amount" onChange={(e) => setAmount(e.target.value)} />
        </div>
      </div>
    </div>
  );
}
