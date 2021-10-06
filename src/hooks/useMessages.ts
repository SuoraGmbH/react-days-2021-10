import { Message } from "../domain/Message";

interface UseMessagesReturnValue {
  messages: Message[];
  addMessage: (message: Message) => void;
}

export const useMessages = (): UseMessagesReturnValue => {
  return {
    messages: [],
    addMessage: () => {},
  };
};
