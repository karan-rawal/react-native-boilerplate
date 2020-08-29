import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {DashboardScreen, ROUTE_DASHBOARD} from './screens/dashboard';
import {ROUTE_USERS, UsersScreen} from './screens/users';
import {ROUTE_USER_DETAILS, UserDetailsScreen} from './screens/user-details';

export type AppRoutesParamsList = {
  [ROUTE_DASHBOARD]: undefined;
  [ROUTE_USERS]: undefined;
  [ROUTE_USER_DETAILS]: {
    userId: number;
  };
};

export interface AppRoutesProps {}

const Stack = createStackNavigator<AppRoutesParamsList>();

export const AppRoutes: React.SFC<AppRoutesProps> = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={ROUTE_DASHBOARD} component={DashboardScreen} />
        <Stack.Screen name={ROUTE_USERS} component={UsersScreen} />
        <Stack.Screen name={ROUTE_USER_DETAILS} component={UserDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
