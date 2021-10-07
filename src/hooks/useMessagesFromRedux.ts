import { useDispatch, useSelector } from "react-redux";
import { addedMessage, fetchMessages, getMessages } from "../redux/reducer";
import { UseMessagesReturnValue } from "./useMessages";

export const useMessagesFromRedux = (): UseMessagesReturnValue => {
  const dispatch = useDispatch();
  const messages = useSelector(getMessages);
  dispatch(fetchMessages());

  return {
    messages: messages,
    addMessage: (message) => {
      dispatch(addedMessage(message));
    },
  };
};
