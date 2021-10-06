import { useCounter } from "../hooks/useCounter";

export function CounterWithHook() {
  const { count, increase } = useCounter();
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => increase()}>Increment</button>
    </div>
  );
}
