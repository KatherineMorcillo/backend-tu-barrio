import express from "express";
import * as http from "http";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import routes from "../routes";

export const initialApp = () => {
  const app = express();

  app.use(bodyParser.json());
  app.use(cors());
  app.use(helmet());
  app.use(morgan("dev"));

  //Rutas
  app.use(routes());

  const server = http.createServer(app);

  server.listen(process.env.PORT, () => {
    console.log("corriendo en el puerto " + process.env.PORT);
  });
};
