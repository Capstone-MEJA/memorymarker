// Any reuseable interface are located here
// Any 1 time use interface are located at their respecitive files for clarity sakes

export interface IsPost {
  _id: string;
  title: string;
  description: string;
  tags: [string];
  latitude: number;
  longitude: number;
  user: IsUser;
}

export interface IsUser {
  _id: string;
  username: string;
  password: string;
  posts: [IsPost];
}

export interface AuthState {
  token: string;
  username: string;
  _id: string;
  registerStatus: string;
  registerError: string;
  loginStatus: string;
  loginError: string;
  userLoaded: boolean;
}
