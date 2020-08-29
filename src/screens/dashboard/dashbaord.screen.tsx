import React from 'react';
import {View, Button, Text} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {ROUTE_USER_DETAILS} from '../user-details';
import {ROUTE_USERS} from '../users';
import {AppRoutesParamsList} from '../../app.routes';

export const ROUTE_DASHBOARD = 'dashboard';

export interface DashboardScreenProps {
  navigation: StackNavigationProp<AppRoutesParamsList, typeof ROUTE_DASHBOARD>;
}

export class DashboardScreen extends React.Component<DashboardScreenProps> {
  goToUserDetails = () => {
    this.props.navigation.push(ROUTE_USER_DETAILS);
  };

  goToUsers = () => {
    this.props.navigation.push(ROUTE_USERS);
  };

  render() {
    return (
      <View>
        <Text>Dashboard Screen</Text>
        <Button title="User Details" onPress={this.goToUserDetails} />
        <Button title="Users" onPress={this.goToUsers} />
      </View>
    );
  }
}
