import { GithubUser } from "../models";

// model

export interface UsersState {
  hasError?: boolean;
  isLoading?: boolean;
  users?: GithubUser[];
  currentPage?: number;
  totalResults?: number;
  errorMessage?: string;
  lastQueryText?: string;
}

// meta

interface Error {
  hasError?: boolean;
  errorMessage?: string;
}

interface Loading {
  isLoading?: boolean;
}

interface LastQueryText {
  lastQueryText?: string;
}

// types

export enum ActionTypes {
  SET_ERROR = 'SET_ERROR',
  SET_IS_LOADING = 'SET_IS_LOADING',
  SET_USERS_STATE = 'SET_USERS_STATE',
  SET_LAST_QUERY_TEXT = 'SET_LAST_QUERY_TEXT'
}

// actions

export interface SetUsersAction {
  payload: UsersState;
  type: ActionTypes.SET_USERS_STATE;
};

export type SetError = {
  payload: Error;
  type: ActionTypes.SET_ERROR;
};

export type SetIsLoading = {
  payload: Loading;
  type: ActionTypes.SET_IS_LOADING;
};

export type SetLastQueryText = {
  payload: LastQueryText;
  type: ActionTypes.SET_LAST_QUERY_TEXT;
}


