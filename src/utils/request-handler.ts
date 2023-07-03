import { IncomingMessage, ServerResponse } from "http";
import { getAllUsers } from "../database/database.js";

const headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10,
  "Content-Type": "application/json",
};

export const reqHandler = async (req: IncomingMessage, res: ServerResponse) => {
  console.log(req.url);

  switch (req.url) {
    case "/api/users":
      const allUsers = await getAllUsers();
      sendRes(res, allUsers);
      break;
    case "/":
      const msgStart = 'This is the App Start Page. To get all users, please go to http://127.0.0.1:8080/api/users'
      sendRes(res, msgStart);
      break;
    default:
      const msg404 =
        "404 Page Not Found, but thank you for visiting! To get all users, please go to http://127.0.0.1:8080/api/users";
      sendRes(res, msg404, 404);
  }

  /*
  const action = actions[req.method];
  if (action) action(req, res);
  else sendRes(res, 404, 'Not Found');
  */
};

export const sendRes = (res: ServerResponse, data?: unknown, statusCode?: number) => {
  const statCode = statusCode || 200;
  res.writeHead(statCode, headers);
  res.end(JSON.stringify(data));
};

export const sendErr = (res: ServerResponse, statusCode: number, message: string) => {
  res.statusCode = statusCode;
  res.end(JSON.stringify({ message }));
};
