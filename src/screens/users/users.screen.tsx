import * as React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {connect, MapStateToProps, MapDispatchToProps} from 'react-redux';
import {UserState, fetchUsersAction} from '../../redux/user';
import {ReducerState} from '../../redux/store';
import {AppRoutesParamsList} from '../../app.routes';
import {ROUTE_USER_DETAILS} from '../user-details';
import {UsersComponent} from './users.component';

export const ROUTE_USERS = 'users';

export interface UsersScreenProps {
  userState: UserState;
  fetchUsers: typeof fetchUsersAction;
  navigation: StackNavigationProp<AppRoutesParamsList, typeof ROUTE_USERS>;
}

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

  render() {
    return (
      <UsersComponent
        userState={this.props.userState}
        onViewDetailsPress={this.onViewDetailsPress}
      />
    );
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
