import { useSelector } from "react-redux";
import { getMessages } from "../redux/reducer";
import { MessageList } from "./MessageList";

export const MessageListFromRedux: React.FunctionComponent = () => {
  const messages = useSelector(getMessages);

  return <MessageList messages={messages} />;
};
