import { DataSource } from "typeorm";
import { PermissionRoleAdministrator } from "../entities/permission_role_administrator.entity";

export default async function PermissionRoleAdministratorSeeder(
  connection: DataSource
) {
  const entity = connection.getRepository(PermissionRoleAdministrator);

  await entity.clear();

  const insertEntity = [
    {
      created: true,
      updated: true,
      deleted: true,
      views: true,
      roleAdministrator: { id: 1 },
      module: { id: 1 },
    },
    {
      created: true,
      updated: true,
      deleted: true,
      views: true,
      roleAdministrator: { id: 1 },
      module: { id: 2 },
    },
    {
      created: true,
      updated: true,
      deleted: true,
      views: true,
      roleAdministrator: { id: 1 },
      module: { id: 3 },
    },
    {
      created: true,
      updated: true,
      deleted: true,
      views: true,
      roleAdministrator: { id: 1 },
      module: { id: 4 },
    },
  ];

  await entity.save(insertEntity);
}
