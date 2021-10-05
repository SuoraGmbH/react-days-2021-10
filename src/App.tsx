import React from "react";
import { MessageView } from "./components/MessageView";

export function App() {
  return (
    <>
      <h1>Hallo Leipzig!</h1>
      <MessageView name="Florian" opinion="React ist knorke!" />
      <MessageView opinion="React ist nicht so toll!" />
    </>
  );
}

export const App2 = () => {
  return <h1>Hallo Leipzig!</h1>;
};
