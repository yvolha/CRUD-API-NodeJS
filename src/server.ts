import * as dotenv from "dotenv";
import http from "http";
import { reqHandler, sendErr } from "./handlers/requestHandler.js";
//import { database } from "./database/database.js";

dotenv.config();

const hostname = "127.0.0.1";
const port = process.env.PORT;

process.on("SIGINT", () => {
  setImmediate(() => process.exit(0));
});

const server = http.createServer((req, res) => {
  try {
    reqHandler(req, res);
  } catch (e) {
    sendErr(res, 500, "A processing error occurred (Code 500).");
  }
});

server.listen(port, Number(hostname), () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
