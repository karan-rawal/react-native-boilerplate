import * as React from 'react';
import {View, Text} from 'react-native';
import {styles} from './user-details.styles';
import {UserState} from '../../redux/user';

export interface UserDetailsComponentProps {
  userState: UserState;
}

const renderLoading = () => {
  return (
    <View>
      <Text style={styles.textStyle}>Loading user.</Text>
    </View>
  );
};

const UserDetailsComponent: React.SFC<UserDetailsComponentProps> = ({
  userState,
}) => {
  const userData = userState.userData;
  if (userState.userLoading || !userData) {
    renderLoading();
  }
  return (
    <View>
      <Text style={styles.textStyle}>User Id: {userData?.user?.userId}</Text>
      <Text style={styles.textStyle}>
        First Name: {userData?.user?.firstName}
      </Text>
      <Text style={styles.textStyle}>
        Last Name: {userData?.user?.lastName}
      </Text>
    </View>
  );
};

export default UserDetailsComponent;
