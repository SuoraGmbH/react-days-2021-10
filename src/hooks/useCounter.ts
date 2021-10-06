interface UseCounterReturnValue {
  count: number;
  increase: () => void;
}
export const useCounter = (): UseCounterReturnValue => {};
