import { Counter } from "./components/Counter";
import { GithubStats } from "./components/GithubStats";
import { MessageCompose } from "./components/MessageCompose";
import { MessageList } from "./components/MessageList";
import { MessageView } from "./components/MessageView";

export function App() {
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
      <MessageList />
      <hr />
      <Counter />
      <GithubStats repo="SuoraGmbH/react-days-2021-10" />
    </>
  );
}

export const App2 = () => {
  return <h1>Hallo Leipzig!</h1>;
};
