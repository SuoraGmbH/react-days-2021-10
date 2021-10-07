import { useMessages } from "../hooks/useMessages";
import { useMessagesFromRedux } from "../hooks/useMessagesFromRedux";
import { MessageCompose } from "./MessageCompose";
import { MessageList } from "./MessageList";

export const DynamicMessageList: React.FunctionComponent = () => {
  const { messages, addMessage } = useMessagesFromRedux();

  return (
    <>
      <MessageCompose onMessageSend={addMessage} />
      <MessageList messages={messages} />
    </>
  );
};
