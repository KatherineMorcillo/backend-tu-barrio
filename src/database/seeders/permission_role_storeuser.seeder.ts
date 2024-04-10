import { DataSource } from "typeorm";
import { PermissionRoleStoreUser } from "../entities/permission_role_store_user.entity";

export default async function PermisionRoleStoreUserSeeder(
  connection: DataSource
) {
  const entity = connection.getRepository(PermissionRoleStoreUser);

  await entity.clear();

  const insertEntity: any = [
    {
      created: true,
      update: true,
      deleted: true,
      views: true,
      roleStoreUser: { id: 1 },
      modulePermissionRoleStoreUser: { id: 1 },
    },
    {
      created: true,
      update: true,
      deleted: true,
      views: true,
      roleStoreUser: { id: 2 },
      modulePermissionRoleStoreUser: { id: 2 },
    },
    {
      created: true,
      update: true,
      deleted: true,
      views: true,
      roleStoreUser: { id: 3 },
      modulePermissionRoleStoreUser: { id: 3 },
    },
    {
      created: true,
      update: true,
      deleted: true,
      views: true,
      roleStoreUser: { id: 1 },
      modulePermissionRoleStoreUser: { id: 4 },
    },
  ];
  await entity.save(insertEntity);
}
