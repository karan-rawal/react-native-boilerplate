import * as React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {connect, MapStateToProps, MapDispatchToProps} from 'react-redux';
import {View, Text, StyleSheet, Button} from 'react-native';
import {UserState, fetchUsersAction} from '../../redux/user';
import {ReducerState} from '../../redux/store';
import {AppRoutesParamsList} from '../../app.routes';
import {ROUTE_USER_DETAILS} from '../user-details';

export const ROUTE_USERS = 'users';

export interface UsersScreenProps {
  userState: UserState;
  fetchUsers: typeof fetchUsersAction;
  navigation: StackNavigationProp<AppRoutesParamsList, typeof ROUTE_USERS>;
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
  usersListItem: {
    flexDirection: 'column',
  },
  usersList: {flex: 1, flexDirection: 'column'},
});

class Component extends React.Component<UsersScreenProps> {
  constructor(props: UsersScreenProps) {
    super(props);
    this.props.fetchUsers();
  }

  onViewDetailsPress = (userId: number) => {
    this.props.navigation.push(ROUTE_USER_DETAILS, {
      userId,
    });
  };

  renderUsers = () => {
    if (!this.props.userState.usersData) {
      return (
        <View>
          <Text>No Users.</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.usersList}>
          {this.props.userState.usersData.users.map((user) => (
            <View style={styles.usersListItem}>
              <Text>FirstName: {user.firstName}</Text>
              <Text>LastName: {user.lastName}</Text>
              <Text>Id: {user.userId}</Text>
              <Button
                title={'View Details'}
                onPress={() => this.onViewDetailsPress(user.userId)}
              />
            </View>
          ))}
        </View>
      );
    }
  };

  render() {
    if (this.props.userState.usersLoading || !this.props.userState.usersData) {
      return (
        <View>
          <Text style={styles.textStyle}>Loading users.</Text>
        </View>
      );
    }

    return this.renderUsers();
  }
}

const mapDispatchToProps: MapDispatchToProps<{}, UsersScreenProps> = {
  fetchUsers: fetchUsersAction,
};

const mapStateToProps: MapStateToProps<{}, UsersScreenProps, ReducerState> = (
  state: ReducerState,
) => {
  return {
    userState: state.userState,
  };
};

export const UsersScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);
