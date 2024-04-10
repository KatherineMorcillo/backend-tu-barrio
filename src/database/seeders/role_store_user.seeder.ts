import { DataSource } from "typeorm";
import { RoleStoreUser } from "../entities/role_store_user.emtity";

export async function RoleStoreUserSeeder(connection: DataSource) {
  const entity = connection.getRepository(RoleStoreUser);

  await entity.clear();

  const insertEntity = [
    {
      name: "Administrador",
    },
    {
      name: "Gerente",
    },
    {
      name: "Coordinador",
    },
  ];
  await entity.save(insertEntity);
}
