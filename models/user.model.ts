interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  token: string;
}
interface IUserData {
  id?: string;
  firstName: string;
  lastName: string;
  username: string;
  password?: string;
}
interface IUserTable {
  id: string;
  name: string;
  username: string;
}

interface IUserLogin {
  token: string;
  user: UserResponse;
}

interface UserResponse {
  id?: string;
  firstName: string;
  lastName: string;
  username: string;
  assetFile: string;
}
interface ILoginResponse {
  data: IUserLogin;
}
