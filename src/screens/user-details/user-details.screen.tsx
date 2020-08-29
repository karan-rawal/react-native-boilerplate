import * as React from 'react';
import {connect, MapStateToProps, MapDispatchToProps} from 'react-redux';
import {RouteProp} from '@react-navigation/native';
import {AppRoutesParamsList} from '../../app.routes';
import {UserState, fetchUserAction} from '../../redux/user';
import {ReducerState} from '../../redux/store';
import UserDetailsComponent from './user-details.component';

export const ROUTE_USER_DETAILS = 'user-details';

export interface UserDetailsScreenProps {
  userState: UserState;
  fetchUser: typeof fetchUserAction;
  route: RouteProp<AppRoutesParamsList, typeof ROUTE_USER_DETAILS>;
}

class Component extends React.Component<UserDetailsScreenProps> {
  constructor(props: UserDetailsScreenProps) {
    super(props);
    this.props.fetchUser(props.route.params.userId);
  }

  render() {
    return <UserDetailsComponent userState={this.props.userState} />;
  }
}

const mapStateToProps: MapStateToProps<
  {},
  UserDetailsScreenProps,
  ReducerState
> = (state) => {
  return {
    userState: state.userState,
  };
};

const mapDispatchToProps: MapDispatchToProps<{}, UserDetailsScreenProps> = {
  fetchUser: fetchUserAction,
};

export const UserDetailsScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);
