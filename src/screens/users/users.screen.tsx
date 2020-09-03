import * as React from 'react';
import {useEffect, useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {AppRoutesParamsList} from '../../app.routes';
import {ROUTE_USER_DETAILS} from '../user-details';
import {UsersComponent} from './users.component';
import {useUserState} from '../../hooks/use-userstate.hook';

export const ROUTE_USERS = 'users';

export interface UsersScreenProps {}
export type UsersScreenNavigationProp = StackNavigationProp<
  AppRoutesParamsList,
  typeof ROUTE_USERS
>;

export const UsersScreen: React.SFC<UsersScreenProps> = ({}: UsersScreenProps) => {
  const {fetchUsers, userState} = useUserState();
  const navigation = useNavigation<UsersScreenNavigationProp>();

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
