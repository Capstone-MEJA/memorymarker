// All reusable interfaces
// Any single use interfaces are defined in their respective components

export interface IPost {
  _id: string;
  title: string;
  description: string;
  tags: [string];
  latitude: number;
  longitude: number;
  user: IUser;
  createdAt: number;
  timeStamp: string;
}

export interface IUser {
  _id: string;
  username: string;
  password: string;
  posts: [IPost];
}

export interface AuthState {
  token: string;
  username: string;
  _id: string;
  registerStatus: string;
  registerError: string[];
  loginStatus: string;
  loginError: string;
  userLoaded: boolean;
}
