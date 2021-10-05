import { Message } from "../domain/Message";

interface Props {
  message: Message;
}

export function MessageView({ message }: Props): JSX.Element {
  return (
    <article>
      {message.message}
      <footer>{message.author.toUpperCase()}</footer>
    </article>
  );
}
