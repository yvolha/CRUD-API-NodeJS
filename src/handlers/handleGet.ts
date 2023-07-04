import { IncomingMessage, ServerResponse } from "http";
import { getAllUsers } from "../database/database.js";
import { sendRes } from "./requestHandler.js";

export const handleGet = async (req: IncomingMessage, res: ServerResponse) => {
  if (req.url === "/api/users") {
    const allUsers = await getAllUsers();
    sendRes(res, allUsers);
  } else if (req.url?.startsWith("/api/users/") && req.url.split('/').length === 4) {
  } else {
    const msg404 =
      "404 Page Not Found, but thank you for visiting! To get all users, please go to http://127.0.0.1:8080/api/users";
    sendRes(res, msg404, 404);
  }
};
