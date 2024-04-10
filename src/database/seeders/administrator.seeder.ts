import { DataSource } from "typeorm";
import { Administrator } from "../entities/administrator.entity";

export default async function AdministradorSeeder(connection: DataSource) {
  const entity = connection.getRepository(Administrator);

  await entity.clear();

  const insertEntity = [
    {
      names: "",
      surnames: "",
      email: "",
      photo: "",
      password: "",
      roleAdministrator: "",
    },
  ];
}
