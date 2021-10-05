import { Message } from "../domain/Message";

interface MessageViewProps {
  message: Message;
}

export const MessageView: React.FunctionComponent<MessageViewProps> = ({
  message,
}) => {
  return (
    <article>
      {message.message}
      <footer>{message.author.toUpperCase()}</footer>
    </article>
  );
};
