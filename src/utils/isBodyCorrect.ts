export interface IReqBody {
  username: string;
  age: number;
  hobbies: Array<string>;
}

export const isBodyCorrect = (reqBody: IReqBody) => {
  if (
    Object.keys(reqBody).includes("username") &&
    typeof reqBody.username === "string" &&
    Object.keys(reqBody).includes("age") &&
    typeof reqBody.age === "number" &&
    Object.keys(reqBody).includes("hobbies") &&
    reqBody.hobbies.length >= 0 &&
    reqBody.hobbies.every((item) => typeof item === "string")
  ) {
    return true;
  } else {
    return false;
  }
};
