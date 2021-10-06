import { Message } from "../domain/Message";
import { MessageView } from "./MessageView";

interface Props {
  messages: Message[];
}

export const MessageList: React.FunctionComponent<Props> = ({ messages }) => {
  return (
    <>
      {messages.map((message) => (
        <MessageView message={message} key={message.id} />
      ))}
    </>
  );
};
