export type Shows = {
  id?: number;
  name?: string;
  permalink?: string;
  start_date?: string;
  description?: string;
  end_date?: string | null;
  genre?: string;
  country?: string;
  network?: string;
  status?: string;
  upvotes?: number;
  downvotes?: number;
  image_thumbnail_path?: string;
};

export interface IState {
  shows: Shows[];
  selected: Shows | null;
  searchTerm: string;
}

export const CREATE_LIST = "CREATE_LIST";
export const SET_SELECTED_ITEM = "SET_SELECTED_ITEM";
export const ADD_ITEM = "ADD_ITEM";
export const SET_SEARCH_TERM = "SET_SEARCH_TERM";

export interface ICreateListAction {
  type: typeof CREATE_LIST;
  payload: Shows[];
}

export interface ISetSelectItemAction {
  type: typeof SET_SELECTED_ITEM;
  payload: Shows;
}

export interface IAddItem {
  type: typeof ADD_ITEM;
  payload: Shows;
}

export interface ISetSearch {
  type: typeof SET_SEARCH_TERM;
  payload: string;
}

export type ShowsActionTypes =
  | ICreateListAction
  | ISetSelectItemAction
  | IAddItem
  | ISetSearch;

export interface IContext {
  state?: IState;
  dispatch: Function;
}
