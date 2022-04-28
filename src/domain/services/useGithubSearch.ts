import axios, { Canceler } from 'axios';
import { useEffect, useContext } from 'react';
import { DispatchUsersContext, SetError } from '../context';
import { ActionTypes, UsersState } from '../context';
import { UsersResponse, UsersQuery } from '../models';
import { GITHUB_API, ITEMS_PER_PAGE, USERS_ENDPOINT } from './configs';

const axiosInstance = axios.create();

function useGithubSearch({ queryText, page = 0 }: UsersQuery) {
  const usersDispatch = useContext(DispatchUsersContext);

  useEffect(() => {
    if (!queryText) return;
    usersDispatch({
      type: ActionTypes.SET_ERROR,
      payload: { hasError: false }
    });
    usersDispatch({
      type: ActionTypes.SET_IS_LOADING,
      payload: { isLoading: true }
    });
    let canceler: Canceler;
    const endPoint = GITHUB_API + USERS_ENDPOINT;

    axiosInstance.get<UsersResponse>(endPoint, {
      params: { q: queryText, per_page: ITEMS_PER_PAGE, page },
      cancelToken: new axios.CancelToken(axiosCanceler => canceler = axiosCanceler)
    })
      .then(response => {
        const userState: UsersState = {
          users: response.data.items,
          hasError: false,
          isLoading: false,
          currentPage: page,
          lastQueryText: queryText,
          totalResults: response.data.total_count,
        };
        usersDispatch({
          type: ActionTypes.SET_USERS_STATE,
          payload: userState,
        });
      })
      .catch(error => {
        if (axios.isCancel(error)) return;
        const usersError: SetError = {
          type: ActionTypes.SET_ERROR,
          payload: { hasError: true, errorMessage: error.message }
        }
        usersDispatch(usersError);
        throw error;
      }).finally(() => {
        usersDispatch({
          type: ActionTypes.SET_IS_LOADING,
          payload: { isLoading: false }
        });
      });
    return () => canceler();
  }, [queryText, page, usersDispatch]);

  return {};

}

export default useGithubSearch;
