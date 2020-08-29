import {Action} from 'redux';
import {ThunkAction} from 'redux-thunk';
import {
  UsersListResponse,
  UsersListErr,
  UserDetailsResponse,
  UserDetailsErr,
} from '../../models';
import {UserService} from '../../services';

export const ACTION_SET_USERS_LOADING = 'ACTION_SET_USERS_LOADING';
export const ACTION_SET_USERS_DATA = 'ACTION_SET_USERS_DATA';
export const ACTION_SET_USERS_ERR = 'ACTION_SET_USERS_ERR';

export const ACTION_SET_USER_LOADING = 'ACTION_SET_USER_LOADING';
export const ACTION_SET_USER_DATA = 'ACTION_SET_USER_DATA';
export const ACTION_SET_USER_ERR = 'ACTION_SET_USER_ERR';

export interface TypeSetUsersLoading
  extends Action<typeof ACTION_SET_USERS_LOADING> {
  payload: boolean;
}

export interface TypeSetUsersData extends Action<typeof ACTION_SET_USERS_DATA> {
  payload?: UsersListResponse;
}

export interface TypeSetUsersErr extends Action<typeof ACTION_SET_USERS_ERR> {
  payload?: UsersListErr;
}

export interface TypeSetUserLoading
  extends Action<typeof ACTION_SET_USER_LOADING> {
  payload: boolean;
}

export interface TypeSetUserData extends Action<typeof ACTION_SET_USER_DATA> {
  payload?: UserDetailsResponse;
}

export interface TypeSetUserErr extends Action<typeof ACTION_SET_USER_ERR> {
  payload?: UserDetailsErr;
}

export type TypeUserActions =
  | TypeSetUsersData
  | TypeSetUsersErr
  | TypeSetUsersLoading
  | TypeSetUserData
  | TypeSetUserErr
  | TypeSetUserLoading;

export function setUsersLoadingAction(isLoading: boolean): TypeSetUsersLoading {
  return {
    type: ACTION_SET_USERS_LOADING,
    payload: isLoading,
  };
}

export function setUsersDataAction(data: UsersListResponse): TypeSetUsersData {
  return {
    type: ACTION_SET_USERS_DATA,
    payload: data,
  };
}

export function setUsersErrAction(err: UsersListErr): TypeSetUsersErr {
  return {
    type: ACTION_SET_USERS_ERR,
    payload: err,
  };
}

export function setUserLoadingAction(isLoading: boolean): TypeSetUserLoading {
  return {
    type: ACTION_SET_USER_LOADING,
    payload: isLoading,
  };
}

export function setUserDataAction(data: UserDetailsResponse): TypeSetUserData {
  return {
    type: ACTION_SET_USER_DATA,
    payload: data,
  };
}

export function setUserErrAction(err: UserDetailsErr): TypeSetUserErr {
  return {
    type: ACTION_SET_USER_ERR,
    payload: err,
  };
}

export const fetchUsersAction = (): ThunkAction<
  void,
  void,
  void,
  TypeSetUsersData | TypeSetUsersErr | TypeSetUsersLoading
> => {
  return async (dispatch) => {
    dispatch(setUsersLoadingAction(true));
    try {
      const response = await UserService.fetchUsers();
      dispatch(setUsersDataAction(response));
    } catch (e) {
      dispatch(setUsersErrAction(e));
    }
  };
};

export const fetchUserAction = (
  userId: number,
): ThunkAction<
  void,
  void,
  void,
  TypeSetUserData | TypeSetUserErr | TypeSetUserLoading
> => {
  return async (dispatch) => {
    dispatch(setUserLoadingAction(true));
    try {
      const response = await UserService.fetchUser(userId);
      dispatch(setUserDataAction(response));
    } catch (e) {
      dispatch(setUserErrAction(e));
    }
  };
};
