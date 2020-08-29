import * as React from 'react';
import {View, Text} from 'react-native';

export interface UserDetailsScreenProps {}

export const ROUTE_USER_DETAILS = 'user-details';

export class UserDetailsScreen extends React.Component<UserDetailsScreenProps> {
  render() {
    return (
      <View>
        <Text>User Details Screen</Text>
      </View>
    );
  }
}
