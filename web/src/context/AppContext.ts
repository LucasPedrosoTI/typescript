import { createContext } from 'react';

export const INITIAL_STATE = {};

export const reducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const AppContext = createContext<null>(null);
