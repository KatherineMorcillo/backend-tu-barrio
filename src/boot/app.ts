import express from "express";
import * as http from "http";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

export const initialApp = () => {
  dotenv.config();
  const app = express();

  app.use(bodyParser.json());
  app.use(cors());
  app.use(helmet());
  app.use(morgan("dev"));

  const server = http.createServer(app);

  server.listen(process.env.PORT, () => {
    console.log("corriendo en el puerto " + process.env.PORT);
  });
};
