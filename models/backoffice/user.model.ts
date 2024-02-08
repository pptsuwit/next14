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
  user: IUserResponse;
}

interface IUserResponse {
  id?: string;
  firstName: string;
  lastName: string;
  username: string;
  assetFile: string;
  createdAt: Date;
  updatedAt: Date;
}
interface ILoginResponse {
  data: IUserLogin;
}
