// @ts-nocheck
'use client'
import { createContext,useReducer } from "react";

const carProperty={
    key:undefined,
    value:undefined
}

export const SearchContext = createContext(carProperty);

const SearchReducer = (state, action) => {
  switch (action.type) {
    case "NEW_SEARCH":
      return action.payload;
    case "RESET_SEARCH":
      return carProperty;
    default:
      return state;
  }
};

export const SearchContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SearchReducer, carProperty);

  return (
    <SearchContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
