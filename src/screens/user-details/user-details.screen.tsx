import * as React from 'react';
import {useEffect, useCallback} from 'react';
import {useRoute} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {RouteProp} from '@react-navigation/native';
import {AppRoutesParamsList} from '../../app.routes';
import {UserState, fetchUserAction} from '../../redux/user';
import {ReducerState} from '../../redux/store';
import UserDetailsComponent from './user-details.component';

export const ROUTE_USER_DETAILS = 'user-details';

export interface UserDetailsScreenProps {}
type UserDetailsRouteProp = RouteProp<
  AppRoutesParamsList,
  typeof ROUTE_USER_DETAILS
>;

const userStateSelector = (state: ReducerState): UserState => {
  return state.userState;
};

export const UserDetailsScreen: React.SFC<UserDetailsScreenProps> = ({}: UserDetailsScreenProps) => {
  const userState = useSelector<ReducerState, UserState>(userStateSelector);
  const dispatch = useDispatch();
  const route = useRoute<UserDetailsRouteProp>();

  const fetchUser = useCallback(
    (userId: number) => {
      dispatch(fetchUserAction(userId));
    },
    [dispatch],
  );

  useEffect(() => {
    fetchUser(route.params.userId);
  }, [route.params.userId, fetchUser]);

  return <UserDetailsComponent userState={userState} />;
};

// class Component extends React.Component<UserDetailsScreenProps> {
//   constructor(props: UserDetailsScreenProps) {
//     super(props);
//     this.props.fetchUser(props.route.params.userId);
//   }

//   render() {
//     return <UserDetailsComponent userState={this.props.userState} />;
//   }
// }

// const mapStateToProps: MapStateToProps<
//   {},
//   UserDetailsScreenProps,
//   ReducerState
// > = (state) => {
//   return {
//     userState: state.userState,
//   };
// };

// const mapDispatchToProps: MapDispatchToProps<{}, UserDetailsScreenProps> = {
//   fetchUser: fetchUserAction,
// };

// export const UserDetailsScreen = connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(Component);
