import { useState } from "react";

interface UseCounterReturnValue {
  count: number;
  increase: () => void;
}
export const useCounter = (): UseCounterReturnValue => {
  const [count, setCount] = useState(0);

  return {
    count,
    increase: () => {
      setCount((prevCount) => prevCount + 1);
    },
  };
};
