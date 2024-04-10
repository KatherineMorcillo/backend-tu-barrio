import { DataSource } from "typeorm";
import { RoleAdministrator } from "../entities/role_administrator.entity";

export default async function RoleAdministratorSeeder(connection: DataSource) {
  const entity = connection.getRepository(RoleAdministrator);

  await entity.clear();

  const insertEntity = [
    {
      name: "Administrador",
    },
    {
      name: "Superadministrador",
    },
  ];

  await entity.save(insertEntity);
}
