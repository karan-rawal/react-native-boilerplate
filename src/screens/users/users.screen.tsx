import * as React from 'react';
import {View, Text} from 'react-native';

export interface UsersScreenProps {}

export const ROUTE_USERS = 'users';

export class UsersScreen extends React.Component<UsersScreenProps> {
  render() {
    return (
      <View>
        <Text>Users Screen</Text>
      </View>
    );
  }
}
