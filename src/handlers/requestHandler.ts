import { IncomingMessage, ServerResponse } from "http";
import { handleGet } from "./handleGet.js";
import { handlePost } from "./handlePost.js";
import { handlePut } from "./handlePut.js";

const headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10,
  "Content-Type": "application/json",
};

enum reqTypes {
  GET = "GET",
  PUT = "PUT",
  POST = "POST",
  DELETE = "DELETE",
}

export const reqHandler = async (req: IncomingMessage, res: ServerResponse) => {
  console.log(req.url, req.method);

  switch (req.method) {
    case reqTypes.GET:
      await handleGet(req, res);
      break;
    case reqTypes.POST:
      await handlePost(req, res);
      break;
    case reqTypes.PUT:
      await handlePut(req, res);
      break;

    default:
      const msg404 =
        "Page Not Found, but thank you for visiting! To get all users, please go to http://127.0.0.1:8080/api/users (Code 404)";
      sendRes(res, msg404, 404);
  }
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
