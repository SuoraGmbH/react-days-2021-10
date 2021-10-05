import { Message } from "../domain/Message";

interface Props {
  message: Message;
}

export const MessageView: React.FunctionComponent<Props> = ({ message }) => {
  return (
    <article>
      {message.message}
      <footer>{message.author.toUpperCase()}</footer>
    </article>
  );
};
