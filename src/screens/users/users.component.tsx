import * as React from 'react';

import {UserState} from '../../redux/user';
import {View, Text, Button} from 'react-native';

import {styles} from './users.styles';

export interface UsersComponentProps {
  userState: UserState;
  onViewDetailsPress: (userId: number) => void;
}

const renderUsers = (
  userState: UserState,
  onViewDetailsPress: (userId: number) => void,
) => {
  if (!userState.usersData) {
    return (
      <View>
        <Text>No Users.</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.usersList}>
        {userState.usersData.users.map((user) => (
          <View key={user.userId} style={styles.usersListItem}>
            <Text>FirstName: {user.firstName}</Text>
            <Text>LastName: {user.lastName}</Text>
            <Text>Id: {user.userId}</Text>
            <Button
              title={'View Details'}
              onPress={() => onViewDetailsPress(user.userId)}
            />
          </View>
        ))}
      </View>
    );
  }
};

export const UsersComponent: React.SFC<UsersComponentProps> = (props) => {
  if (props.userState.usersLoading || !props.userState.usersData) {
    return (
      <View>
        <Text style={styles.textStyle}>Loading users.</Text>
      </View>
    );
  }

  return renderUsers(props.userState, props.onViewDetailsPress);
};
