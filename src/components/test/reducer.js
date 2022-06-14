import { createStore } from "redux";

export const INIT_STATE = {
  storage: ["Pan", "Leche", "Arroz", "Coca-cola", "Queso"],
  client: [],
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "INCREASE":
      return { ...state, client: [...state.client, action.payload] };
    case "DECREASE":
      return {
        ...state,
        client: state.client.filter((item, idx) => idx !== action.payload),
      };
    case "RESET":
      return { ...state, client: [] };

    default:
      return state;
  }
};

export default createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
