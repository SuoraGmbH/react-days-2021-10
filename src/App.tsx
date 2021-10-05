import React from "react";
import { MessageView } from "./components/MessageView";
import { Message } from "./domain/Message";

export function App() {
  const messageObject: Message = {
    author: "Florian",
    date: 24,
    id: "42321",
    message: "Hallo welt",
  };

  return (
    <>
      <h1>Hallo Leipzig!</h1>
      <MessageView message={messageObject} />
    </>
  );
}

export const App2 = () => {
  return <h1>Hallo Leipzig!</h1>;
};
