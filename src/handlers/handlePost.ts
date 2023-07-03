import { v4 as uuidv4 } from "uuid";
import { IncomingMessage, ServerResponse } from "http";
import { IUser, postUser } from "../database/database.js";
import { sendErr, sendRes } from "./requestHandler.js";
import { isJsonString } from "../utils/isJSONParsed.js";
import { IReqBody, isBodyCorrect } from "../utils/isBodyCorrect.js";

export const handlePost = (req: IncomingMessage, res: ServerResponse) => {
  let data = "";

  req.on("data", (chunk) => {
    data += chunk;
  });

  req.on("end", async () => {
    if (isJsonString(data)) {
      const reqBody: IReqBody = JSON.parse(data);

      if (isBodyCorrect(reqBody)) {
        const newUser: IUser = { id: uuidv4(), ...reqBody };

        postUser(newUser);
        sendRes(res, newUser, 201);
      } else {
        sendErr(res, 400, "Body does not contain all required fields (Code 400).");
      }
    } else {
      sendErr(res, 500, "A processing error occurred (Code 500).");
    }
  });
};
