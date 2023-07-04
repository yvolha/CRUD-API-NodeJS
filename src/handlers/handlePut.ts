import { IncomingMessage, ServerResponse } from "http";
import { isJsonString } from "../utils/isJSONParsed.js";
import { IReqBody, isBodyCorrect } from "../utils/isBodyCorrect.js";
import { getUser } from "../database/database.js";
import { sendErr, sendRes } from "./requestHandler.js";
import { isUuidValid } from "../utils/isUuidValid.js";

export const handlePut = async (req: IncomingMessage, res: ServerResponse) => {
  let data = "";

  req.on("data", (chunk) => {
    if (chunk) {
      data += chunk;
    } else return;
  });

  req.on("end", () => {
    if (data.length && isJsonString(data)) {
      const reqBody: IReqBody = JSON.parse(data);

      if (isBodyCorrect(reqBody)) {
        if (req.url?.startsWith("/api/users/") && req.url.split("/").length === 4) {
          const potentialUuid = req.url.split("/").pop();

          if (!isUuidValid(potentialUuid)) {
            sendErr(res, 400, "Passed userId is invalid (not uuid) (Code 400).");
          } else {
            const updatedUser = getUser(potentialUuid as string);
            if (!updatedUser) {
              sendErr(res, 404, "User with passed userId does not exist (Code 404).");
            } else {
              updatedUser.username = reqBody.username;
              updatedUser.age = reqBody.age;
              updatedUser.hobbies = reqBody.hobbies;

              sendRes(res, updatedUser);
            }
          }
        } else {
          const msg404 =
            "Page Not Found, but thank you for visiting! To get all users, please go to http://127.0.0.1:8080/api/users (Code 404)";
          sendRes(res, msg404, 404);
        }
      } else {
        sendErr(res, 400, "Body does not contain all required fields (Code 400).");
      }
    } else {
      sendErr(res, 500, "Processing error occurred (Code 500).");
    }
  });
};
