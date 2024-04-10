import { AppDataSource } from "../data-source";
import { ModulePermissionRoleStoreUser } from "../entities/module_permission_role_store_user.entity,";
import AdministradorSeeder from "./administrator.seeder";
import ModulePermissionAdministratorSeeder from "./module_permission_administrator.seeder";
import { ModulePermissionStoreSeeder } from "./module_permission_user.seeder";
import PermissionRoleAdministratorSeeder from "./permission_role_administrator.seeder";
import PermisionRoleStoreUserSeeder from "./permission_role_storeuser.seeder";
import RoleAdministratorSeeder from "./role_administrator.seeder";
import { RoleStoreUserSeeder } from "./role_store_user.seeder";
import { StoreSeeder } from "./store.seeder";
import StoreUserSeeder from "./store_user.seeder";

async function runSeeders() {
  console.log("comenzó a ejecutar los seeders");
  const connection = await AppDataSource.initialize();
  //Comando para ejecutar ignorar llaves foraneas(truncate table)
  await connection.query("SET FOREIGN_KEY_CHECKS=0");
  //Ejecución de datos semilla
  await ModulePermissionAdministratorSeeder(connection);
  await RoleAdministratorSeeder(connection);
  await PermissionRoleAdministratorSeeder(connection);
  await AdministradorSeeder(connection, 1000);
  await ModulePermissionStoreSeeder(connection);
  await RoleStoreUserSeeder(connection);
  await PermisionRoleStoreUserSeeder(connection);
  await StoreSeeder(connection);
  await StoreUserSeeder(connection, 1000);

  //comando para revertir la ignoración de llaves foraneas
  await connection.query("SET FOREIGN_KEY_CHECKS=1");
  console.log("terminó de ejecutar los seeders");
}

runSeeders();
