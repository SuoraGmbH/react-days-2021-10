import { useState } from "react";
import { Counter } from "./components/Counter";
import { CounterWithHook } from "./components/CounterWithHook";
import { DynamicMessageList } from "./components/DynamicMessageList";
import { GithubStats } from "./components/GithubStats";
import { MessageCompose } from "./components/MessageCompose";
import { MessageList } from "./components/MessageList";
import { MessageView } from "./components/MessageView";
import { Message } from "./domain/Message";
import { configureStore } from "./redux/configureStore";
import { Provider } from "react-redux";
import { MessageListFromRedux } from "./components/MessageListFromRedux";

const store = configureStore();

export function App() {
  const [messages, setMessages] = useState<Message[]>([]);

  const handleMessageSend = (message: Message) => {
    // messages.push() // not allowed because of Readonly in line 10
    setMessages([...messages, message]);
  };

  return (
    <Provider store={store}>
      <h1>Hallo Leipzig!</h1>
      <div style={{ border: "3px solid green" }}>
        <h3>Redux</h3>
        <MessageListFromRedux />
      </div>
      <MessageView
        message={{
          author: "Florian",
          date: 24,
          id: "42321",
          message: "Hallo welt",
        }}
      />
      <div style={{ border: "5px solid pink" }}>
        <DynamicMessageList />
        <CounterWithHook />
      </div>
      <MessageCompose onMessageSend={handleMessageSend} />
      <MessageList messages={messages} />
      <hr />
      <Counter />
      <GithubStats repo="SuoraGmbH/react-days-2021-10" />
    </Provider>
  );
}

export const App2 = () => {
  return <h1>Hallo Leipzig!</h1>;
};
