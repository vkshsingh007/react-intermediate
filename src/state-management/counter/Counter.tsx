import { useReducer, useState } from "react";
import counterReducer from "./counterReducer";
import useCounterStore from "./store";

const Counter = () => {
  // const [value, setValue] = useState(0);

  // const [value, dispatched] = useReducer(counterReducer, 0);
  const { counter, increment, reset } = useCounterStore();

  return (
    <div>
      Counter ({counter})
      <button
        onClick={() =>
          // dispatched({ type: "INCREMENT" })
          increment()
        }
        className="btn btn-primary mx-1"
      >
        Increment
      </button>
      <button
        onClick={() =>
          // dispatched({ type: "RESET" })\
          reset()
        }
        className="btn btn-primary mx-1"
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
