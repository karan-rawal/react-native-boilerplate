import * as React from 'react';
import {useEffect, useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useSelector, useDispatch} from 'react-redux';
import {UserState, fetchUsersAction} from '../../redux/user';
import {ReducerState} from '../../redux/store';
import {AppRoutesParamsList} from '../../app.routes';
import {ROUTE_USER_DETAILS} from '../user-details';
import {UsersComponent} from './users.component';

export const ROUTE_USERS = 'users';

export interface UsersScreenProps {}
export type UsersScreenNavigationProp = StackNavigationProp<
  AppRoutesParamsList,
  typeof ROUTE_USERS
>;

const userStateSelector = (state: ReducerState): UserState => {
  return state.userState;
};

export const UsersScreen: React.SFC<UsersScreenProps> = ({}: UsersScreenProps) => {
  const dispatch = useDispatch();
  const userState = useSelector<ReducerState, UserState>(userStateSelector);
  const navigation = useNavigation<UsersScreenNavigationProp>();
  const fetchUsers = useCallback(() => dispatch(fetchUsersAction()), [
    dispatch,
  ]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const onViewDetailsPress = useCallback(
    (userId: number) =>
      navigation.push(ROUTE_USER_DETAILS, {
        userId,
      }),
    [navigation],
  );

  return (
    <UsersComponent
      userState={userState}
      onViewDetailsPress={onViewDetailsPress}
    />
  );
};
