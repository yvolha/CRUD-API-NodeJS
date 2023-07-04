export interface IUser {
  id: string;
  username: string;
  age: number;
  hobbies: Array<string>;
}

type IUserDatabase = Array<IUser>;

export const database: IUserDatabase = [];

export const getAllUsers = async () => {
  return database;
};

export const getUser = (uuid: string) => {
  return database.find((el) => el.id === uuid);
};

export const postUser = (newUser: IUser) => {
  database.push(newUser);
};
