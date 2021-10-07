import { Message } from "../domain/Message";

export interface ApplicationState {
  messages: Message[];
}

const initialState: ApplicationState = {
  messages: [],
};

const MESSAGE_ADDED = "Message/Added";

interface MessageAddedAction {
  type: string;
  payload: Message;
}

export const reducer = (
  state: ApplicationState = initialState,
  action: MessageAddedAction
): ApplicationState => {
  if (action.type === MESSAGE_ADDED) {
    return {
      ...state,
      messages: [...state.messages, action.payload],
    };
  }

  return state;
};
