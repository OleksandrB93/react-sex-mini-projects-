import React from "react";
import { useState } from "react";
import { H1, H2, Button } from "./Counter.styled";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="counter">
      <div>
        <div>
          <H2>Counter:</H2>
          <H1>{count}</H1>
          <Button
            onClick={() => {
              setCount(count - 1);
            }}
            className="minus"
          >
            -Minus
          </Button>
          <Button
            onClick={() => {
              setCount(count + 1);
            }}
            className="plus"
          >
            Plus+
          </Button>
        </div>
      </div>
    </div>
  );
}
