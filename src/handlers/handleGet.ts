import { IncomingMessage, ServerResponse } from "http";
import { getAllUsers, getUser } from "../database/database.js";
import { sendErr, sendRes } from "./requestHandler.js";
import { isUuidValid } from "../utils/isUuidValid.js";

export const handleGet = async (req: IncomingMessage, res: ServerResponse) => {
  if (req.url === "/api/users") {
    const allUsers = await getAllUsers();
    sendRes(res, allUsers);
  } else if (req.url?.startsWith("/api/users/") && req.url.split("/").length === 4) {
    const potentialUuid = req.url.split("/").pop();

    if (!isUuidValid(potentialUuid)) {
      sendErr(res, 400, "Passed userId is invalid (not uuid) (Code 400).");
    } else {
      const user = getUser(potentialUuid as string);
      if (!user) {
        sendErr(res, 404, "User with passed userId does not exist (Code 404).");
      } else {
        sendRes(res, user);
      }
    }
  } else {
    const msg404 =
      "404 Page Not Found, but thank you for visiting! To get all users, please go to http://127.0.0.1:8080/api/users";
    sendRes(res, msg404, 404);
  }
};
