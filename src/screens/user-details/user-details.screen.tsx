import * as React from 'react';
import {connect, MapStateToProps, MapDispatchToProps} from 'react-redux';
import {View, Text, StyleSheet} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {AppRoutesParamsList} from '../../app.routes';
import {UserState, fetchUserAction} from '../../redux/user';
import {ReducerState} from '../../redux/store';

export const ROUTE_USER_DETAILS = 'user-details';

export interface UserDetailsScreenProps {
  userState: UserState;
  fetchUser: typeof fetchUserAction;
  route: RouteProp<AppRoutesParamsList, typeof ROUTE_USER_DETAILS>;
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

class Component extends React.Component<UserDetailsScreenProps> {
  constructor(props: UserDetailsScreenProps) {
    super(props);
    this.props.fetchUser(props.route.params.userId);
  }

  render() {
    if (this.props.userState.userLoading || !this.props.userState.userData) {
      return (
        <View>
          <Text style={styles.textStyle}>Loading user.</Text>
        </View>
      );
    }

    const userData = this.props.userState.userData;

    return (
      <View>
        <Text style={styles.textStyle}>User Id: {userData.user?.userId}</Text>
        <Text style={styles.textStyle}>
          First Name: {userData.user?.firstName}
        </Text>
        <Text style={styles.textStyle}>
          Last Name: {userData.user?.lastName}
        </Text>
      </View>
    );
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
