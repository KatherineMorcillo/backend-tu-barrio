import { DataSource } from "typeorm";
import { ModulePermissionAdministrator } from "../entities/module_permission_administrator.entity";

export default async function ModulePermissionAdministratorSeeder(
  connection: DataSource
) {
  const entity = connection.getRepository(ModulePermissionAdministrator);

  await entity.clear();

  const insertEntity = [
    {
      name: "Administradores",
      route: "administrators",
    },
    {
      name: "Tiendas",
      route: "stores",
    },
    {
      name: "Productos",
      route: "products",
    },
    {
      name: "Usuarios",
      route: "users",
    },
  ];

  await entity.save(insertEntity);
}
