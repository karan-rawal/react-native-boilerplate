import {
  UsersListResponse,
  UsersListErr,
  UserDetailsResponse,
  UserDetailsErr,
} from '../../models';
import {
  TypeUserActions,
  ACTION_SET_USERS_ERR,
  ACTION_SET_USERS_LOADING,
  ACTION_SET_USERS_DATA,
  ACTION_SET_USER_LOADING,
  ACTION_SET_USER_DATA,
  ACTION_SET_USER_ERR,
} from './user.actions';

export interface UserState {
  usersLoading: boolean;
  usersData?: UsersListResponse;
  usersErr?: UsersListErr;
  userLoading: boolean;
  userData?: UserDetailsResponse;
  userErr?: UserDetailsErr;
}

const initialState: UserState = {
  usersLoading: false,
  userLoading: false,
};

export function userReducer(
  state = initialState,
  action: TypeUserActions,
): UserState {
  let tempState = initialState;
  switch (action.type) {
    case ACTION_SET_USERS_LOADING: {
      tempState = {
        ...state,
        usersLoading: action.payload,
        usersData: undefined,
        usersErr: undefined,
      };
      break;
    }
    case ACTION_SET_USERS_DATA: {
      tempState = {
        ...state,
        usersLoading: false,
        usersData: action.payload,
        usersErr: undefined,
      };
      break;
    }
    case ACTION_SET_USERS_ERR: {
      tempState = {
        ...state,
        usersLoading: false,
        usersData: undefined,
        usersErr: action.payload,
      };
      break;
    }
    case ACTION_SET_USER_LOADING: {
      tempState = {
        ...state,
        userLoading: action.payload,
        userData: undefined,
        userErr: undefined,
      };
      break;
    }
    case ACTION_SET_USER_DATA: {
      tempState = {
        ...state,
        userLoading: false,
        userData: action.payload,
        userErr: undefined,
      };
      break;
    }
    case ACTION_SET_USER_ERR: {
      tempState = {
        ...state,
        userLoading: false,
        userData: undefined,
        userErr: action.payload,
      };
      break;
    }
  }
  return tempState;
}
