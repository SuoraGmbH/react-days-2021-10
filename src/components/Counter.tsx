import React, { useState, useEffect } from "react";
import { MessageCompose } from "./MessageCompose";
export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <MessageCompose key={count} />
    </div>
  );
}
