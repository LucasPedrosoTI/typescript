import {
  IState,
  IContext,
  ShowsActionTypes,
  CREATE_LIST,
  SET_SELECTED_ITEM,
  ADD_ITEM,
  SET_SEARCH_TERM,
} from "../types";
import { createContext } from "react";
import show from "../api/show";

export const INITIAL_STATE: IState = {
  shows: [],
  selected: null,
  searchTerm: "",
};

export const reducer = (
  state = INITIAL_STATE,
  action: ShowsActionTypes
): IState => {
  switch (action.type) {
    case CREATE_LIST:
      return { ...state, shows: action.payload };
    case SET_SELECTED_ITEM:
      return { ...state, selected: action.payload };
    case ADD_ITEM:
      const { shows } = state;
      show.post("/shows", action.payload);
      shows.push(action.payload);
      return { ...state, shows };
    case SET_SEARCH_TERM:
      return { ...state, searchTerm: action.payload };
    default:
      return state;
  }
};

export const AppContext = createContext<IContext>({
  dispatch: reducer,
});
