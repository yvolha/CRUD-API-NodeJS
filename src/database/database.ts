interface IUser {
    id: string;
    username: string;
    age: number;
    hobbies: Array<string>;
}

type IUserDatabase = Map<string, IUser>

export const database: IUserDatabase = new Map();
