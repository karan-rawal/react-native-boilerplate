import usersResponse from './users.mock.json';
import {UsersListResponse, UserDetailsResponse} from '../models';

export class UserService {
  static fetchUser(userId: number) {
    return new Promise<UserDetailsResponse>((res) => {
      setTimeout(() => {
        const user = usersResponse.users.find((usr) => usr.userId === userId);
        res({
          user,
        });
      }, 0);
    });
  }

  static fetchUsers() {
    return new Promise<UsersListResponse>((res) => {
      setTimeout(() => {
        res(usersResponse);
      }, 0);
    });
  }
}
