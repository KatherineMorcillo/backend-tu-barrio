import { initialApp } from "./boot/app";
import "reflect-metadata";
import { AppDataSource } from "./database/data-source";

function main() {
  initialApp();
  AppDataSource.initialize()
    .then(() => {
      console.log("Data Source has been initialized!");
    })
    .catch((err) => {
      console.error("Error during Data Source initialization", err);
    });
}

main();
