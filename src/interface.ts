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

export interface AddFormProps {
  lat: number | null;
  long: number | null;
  setTogglePostForm: (toggle: boolean) => void;
}
