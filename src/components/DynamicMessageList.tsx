import { useMessages } from "../hooks/useMessages";
import { MessageCompose } from "./MessageCompose";
import { MessageList } from "./MessageList";

export const DynamicMessageList: React.FunctionComponent = () => {
  const { messages, addMessage } = useMessages();

  return (
    <>
      <MessageCompose onMessageSend={addMessage} />
      <MessageList messages={messages} />
    </>
  );
};
