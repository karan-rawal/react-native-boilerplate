export interface User {
  userId: number;
  firstName: string;
  lastName: string;
}

export interface UserDetailsResponse {
  user?: User;
}

export interface UserDetailsErr {
  error: string;
}

export interface UsersListResponse {
  users: Array<User>;
}

export interface UsersListErr {
  error: string;
}
