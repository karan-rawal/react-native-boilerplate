import * as React from 'react';
import {useEffect} from 'react';
import {useRoute} from '@react-navigation/native';
import {RouteProp} from '@react-navigation/native';
import {AppRoutesParamsList} from '../../app.routes';
import UserDetailsComponent from './user-details.component';
import {useUserState} from '../../hooks/use-userstate.hook';

export const ROUTE_USER_DETAILS = 'user-details';

export interface UserDetailsScreenProps {}
type UserDetailsRouteProp = RouteProp<
  AppRoutesParamsList,
  typeof ROUTE_USER_DETAILS
>;

export const UserDetailsScreen: React.SFC<UserDetailsScreenProps> = ({}: UserDetailsScreenProps) => {
  const {userState, fetchUser} = useUserState();
  const route = useRoute<UserDetailsRouteProp>();

  useEffect(() => {
    fetchUser(route.params.userId);
  }, [route.params.userId, fetchUser]);

  return <UserDetailsComponent userState={userState} />;
};
