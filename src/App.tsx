import { useState } from "react";
import { Counter } from "./components/Counter";
import { GithubStats } from "./components/GithubStats";
import { MessageCompose } from "./components/MessageCompose";
import { MessageList } from "./components/MessageList";
import { MessageView } from "./components/MessageView";
import { Message } from "./domain/Message";

export function App() {
  const [messages, setMessages] = useState<Message[]>([]);

  const handleMessageSend = (message: Message) => {
    // messages.push() // not allowed because of Readonly in line 10
    setMessages([...messages, message]);
  };

  return (
    <>
      <h1>Hallo Leipzig!</h1>
      <MessageView
        message={{
          author: "Florian",
          date: 24,
          id: "42321",
          message: "Hallo welt",
        }}
      />
      <MessageCompose onMessageSend={handleMessageSend} />
      <MessageList messages={messages} />
      <hr />
      <Counter />
      <GithubStats repo="SuoraGmbH/react-days-2021-10" />
    </>
  );
}

export const App2 = () => {
  return <h1>Hallo Leipzig!</h1>;
};
