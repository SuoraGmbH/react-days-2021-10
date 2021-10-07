import { createStore } from "redux";

export interface ApplicationState {}

const initialState: ApplicationState = {};

const reducer = (state = initialState) => state;

export const configureStore = () => {
  return createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
  );
};
