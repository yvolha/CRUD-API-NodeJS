import { IncomingMessage, ServerResponse } from "http";
import { database, getUser } from "../database/database.js";
import { sendErr, sendRes } from "./requestHandler.js";
import { isUuidValid } from "../utils/isUuidValid.js";

export const handleDelete = async (req: IncomingMessage, res: ServerResponse) => {
  if (req.url?.startsWith("/api/users/") && req.url.split("/").length === 4) {
    const potentialUuid = req.url.split("/").pop();

    if (!isUuidValid(potentialUuid)) {
      sendErr(res, 400, "Passed userId is invalid (not uuid) (Code 400).");
    } else {
      const userToDelete = getUser(potentialUuid as string);
      if (!userToDelete) {
        sendErr(res, 404, "User with passed userId does not exist (Code 404).");
      } else {
        database.splice(
          database.findIndex((item) => item.id === userToDelete.id),
          1
        );
        sendRes(res, {}, 204);
      }
    }
  } else {
    const msg404 =
      "Page Not Found, but thank you for visiting! To get all users, please go to http://127.0.0.1:8080/api/users (Code 404)";
    sendRes(res, msg404, 404);
  }
};
