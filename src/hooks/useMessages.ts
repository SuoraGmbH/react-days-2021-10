import { useState } from "react";
import { Message } from "../domain/Message";

interface UseMessagesReturnValue {
  messages: Message[];
  addMessage: (message: Message) => void;
}

export const useMessages = (): UseMessagesReturnValue => {
  const [messages, setMessages] = useState<Message[]>([]);

  return {
    messages: messages,
    addMessage: (message) => {
      setMessages([...messages, message]);
    },
  };
};
