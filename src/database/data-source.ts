import { DataSource } from "typeorm";
import entities from "./entities";

console.log({
  type: "mysql",
  host: process.env.HOST_DB,
  port: parseInt(`${process.env.PORT_DB}`),
  username: process.env.USERNAME_DB,
  password: process.env.PASSWORD_DB,
  database: process.env.NAME_DB,
  synchronize: process.env.SYNCHRONIZE_DB as unknown as boolean,
  logging: true,
  entities: [],
  subscribers: [],
  migrations: [],
});

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.HOST_DB,
  port: parseInt(`${process.env.PORT_DB}`),
  username: process.env.USERNAME_DB,
  password: process.env.PASSWORD_DB,
  database: process.env.NAME_DB,
  synchronize: process.env.SYNCHRONIZE_DB as unknown as boolean,
  logging: true,
  entities: entities,
  subscribers: [],
  migrations: [],
});
