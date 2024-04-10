import { DataSource } from "typeorm";
import { ModulePermissionRoleStoreUser } from "../entities/module_permission_role_store_user.entity,";
import routes from "../../routes";

export async function ModulePermissionStoreSeeder(connection: DataSource) {
  const entity = connection.getRepository(ModulePermissionRoleStoreUser);

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
}
