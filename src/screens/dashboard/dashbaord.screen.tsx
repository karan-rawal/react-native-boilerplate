import React, {useCallback} from 'react';
import {View, Button, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {ROUTE_USER_DETAILS} from '../user-details';
import {ROUTE_USERS} from '../users';
import {AppRoutesParamsList} from '../../app.routes';
import {CounterComponent} from './components/counter.component';

export const ROUTE_DASHBOARD = 'dashboard';

export interface DashboardScreenProps {}
type DashboardNavigationProp = StackNavigationProp<
  AppRoutesParamsList,
  typeof ROUTE_DASHBOARD
>;

export const DashboardScreen: React.SFC<DashboardScreenProps> = ({}) => {
  const navigation = useNavigation<DashboardNavigationProp>();

  const goToUserDetails = useCallback(() => {
    navigation.push(ROUTE_USER_DETAILS, {
      userId: 1,
    });
  }, [navigation]);

  const goToUsers = useCallback(() => {
    navigation.push(ROUTE_USERS);
  }, [navigation]);

  return (
    <View>
      <Text>Dashboard Screen</Text>
      <Button title="User Details" onPress={goToUserDetails} />
      <Button title="Users" onPress={goToUsers} />
      <CounterComponent />
    </View>
  );
};
