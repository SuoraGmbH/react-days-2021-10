import { useState } from "react";
import { Counter } from "./components/Counter";
import { GithubStats } from "./components/GithubStats";
import { MessageCompose } from "./components/MessageCompose";
import { MessageList } from "./components/MessageList";
import { MessageView } from "./components/MessageView";
import { Message } from "./domain/Message";

export function App() {
  const [messages, setMessages] = useState([
    { author: "Florian", date: 123, id: "asd", message: "Hallooooo" },
    { author: "Richard", date: 12423, id: "asdsadasd", message: "Hallo!!" },
    { author: "Anni", date: 12356, id: "a312231sd", message: "Hello!" },
  ]);

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
      <MessageCompose />
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
