import { useDispatch } from "react-redux";
import { addedMessage } from "../redux/reducer";
import { MessageCompose } from "./MessageCompose";

export const MessageComposeForRedux = () => {
  const dispatch = useDispatch();
  return (
    <MessageCompose
      onMessageSend={(message) => {
        dispatch(addedMessage(message));
      }}
    />
  );
};
