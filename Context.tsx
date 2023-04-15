import React, { ReactElement, JSXElementConstructor, createContext, useReducer, useState, useContext } from "react";

const initialState: any = {
    isSignedIn: false,
    userId: '',
    userName: ''
}

function reducer(state: any, action: any) {
  switch (action.type) {
    case 'isSignedIn:true':
        return {
            isSignedIn: true
        };

    case 'isSignedIn:false':
        return {
            isSignedIn: false
        };
      default:
      return state;
  }
}

const StateContext = createContext(null);
const DispatchContext = createContext(null);



function AppProvider(props: any) {
  const [state, dispatch]: any = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}

      </DispatchContext.Provider>
    </StateContext.Provider>

  );
}

export function useAppState() {
  const context = useContext(StateContext)
  if (!context) {
    throw new Error("Cannot find Provider");
  }
  return context;
}

export function useAppDispatch() {
  const context = useContext(DispatchContext)
  if (!context) {
    throw new Error("Cannot find Provider");
  }
  return context;
}

export default AppProvider;