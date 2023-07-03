interface IUser {
  id: string;
  username: string;
  age: number;
  hobbies: Array<string>;
}

type IUserDatabase = Array<IUser>;

export const database: IUserDatabase = [];

export const getAllUsers = async () => {
  return "users users users";
};
