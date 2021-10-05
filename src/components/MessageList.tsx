import { Message } from "../domain/Message";
import { MessageView } from "./MessageView";

export const MessageList: React.FunctionComponent = () => {
  const messages: Message[] = [
    { author: "Florian", date: 123, id: "asd", message: "Hallo" },
    { author: "Richard", date: 12423, id: "asdsadasd", message: "Hallo!!" },
    { author: "Anni", date: 12356, id: "a312231sd", message: "Hello!" },
  ];

  return (
    <>
      {messages.map((message) => (
        <MessageView message={message} key={message.id} />
      ))}
    </>
  );
};
