import React, { useState } from "react";
import { Message } from "../domain/Message";

interface Props {
  onMessageSend: (message: Message) => void;
}

export const MessageCompose: React.FunctionComponent<Props> = () => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    if (inputValue !== "") {
      console.log("Abgesendete Nachricht: ", inputValue);
      setInputValue("");
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={inputValue} onChange={handleChange} />
      {inputValue}
      <button type="submit">Absenden</button>
    </form>
  );
};
