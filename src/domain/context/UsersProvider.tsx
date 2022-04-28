import { ActionTypes } from '.';
import { createContext, useReducer, ReactNode } from 'react';
import { UsersState, SetUsersAction, SetError, SetIsLoading, SetLastQueryText } from './UsersProvider.model';
export const DispatchUsersContext = createContext<any | null>(null);

export const UsersContext = createContext<UsersState | null>(null);

const reducer = (
  state: UsersState | null,
  action: SetUsersAction | SetError | SetIsLoading | SetLastQueryText
): UsersState | null => {
  if (action.type === ActionTypes.SET_USERS_STATE) {
    return { ...state, ...action.payload };
  }
  if (action.type === ActionTypes.SET_ERROR) {
    return { ...{ users: [] }, ...action.payload };
  }
  if (action.type === ActionTypes.SET_IS_LOADING) {
    return { ...state, ...action.payload };
  }
  if (action.type === ActionTypes.SET_LAST_QUERY_TEXT) {
    return { ...state, ...action.payload };
  }
  return state;
};

export const UsersProvider = ({ children }: { children: ReactNode }): any => {
  const [state, dispatch] = useReducer(reducer, {});

  return (
    <DispatchUsersContext.Provider value={dispatch}>
      <UsersContext.Provider value={state}>{children}</UsersContext.Provider>
    </DispatchUsersContext.Provider>
  );
};

