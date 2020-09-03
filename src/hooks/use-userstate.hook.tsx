import {ReducerState} from '../redux/store';
import {UserState, fetchUsersAction, fetchUserAction} from '../redux/user';
import {useSelector, useDispatch} from 'react-redux';
import {useCallback} from 'react';

const userStateSelector = (state: ReducerState): UserState => {
  return state.userState;
};
export const useUserState = () => {
  const dispatch = useDispatch();
  const userState = useSelector<ReducerState, UserState>(userStateSelector);

  const fetchUsers = useCallback(() => dispatch(fetchUsersAction()), [
    dispatch,
  ]);

  const fetchUser = useCallback(
    (userId: number) => {
      dispatch(fetchUserAction(userId));
    },
    [dispatch],
  );

  return {
    userState,
    fetchUsers,
    fetchUser,
  };
};
