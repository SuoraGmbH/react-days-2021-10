import { MessageCompose } from "./MessageCompose";
import { MessageList } from "./MessageList";

export const DynamicMessageList: React.FunctionComponent = () => {
  // @ts-expect-error
  const { messages, addMessage } = useMessages();

  return (
    <>
      <MessageCompose onMessageSend={addMessage} />
      <MessageList messages={messages} />
    </>
  );
};
