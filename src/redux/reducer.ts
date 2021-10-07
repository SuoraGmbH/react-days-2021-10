import { Message } from "../domain/Message";

export interface ApplicationState {
  messages: Message[];
}

const initialState: ApplicationState = {
  messages: [],
};

interface MessageAddedAction {
  type: "Message/Added";
  payload: Message;
}

interface InitAction {
  type: "@@INIT";
}

type MessageAction = MessageAddedAction;
type ApplicationAction = InitAction | MessageAction;

export const reducer = (
  state: ApplicationState = initialState,
  action: ApplicationAction
): ApplicationState => {
  if (action.type === "Message/Added") {
    return {
      ...state,
      messages: [...state.messages, action.payload],
    };
  }

  return state;
};

export const getMessages = (state: ApplicationState): Message[] => {
  return state.messages;
};
