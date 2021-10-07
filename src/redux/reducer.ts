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

export const addedMessage = (message: Message): MessageAddedAction => {
  return {
    type: "Message/Added",
    payload: message,
  };
};

export const fetchMessages = () => (dispatch) => {
  fetch("from backend")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((message) => {
        dispatch(addedMessage(message));
      });
    });
};

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
