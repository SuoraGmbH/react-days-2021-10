import { useCounter } from "../hooks/useCounter";

export function Counter() {
  const { count, increase } = useCounter();
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => increase()}>Increment</button>
    </div>
  );
}
