import { AppDataSource } from "../data-source";
import ModulePermissionAdministratorSeeder from "./module_permission_administrator.seeder";
import PermissionRoleAdministratorSeeder from "./permission_role_administrator.seeder";
import RoleAdministratorSeeder from "./role_administrator.seeder";

async function runSeeders() {
  console.log("comenzó a ejecutar los seeders");
  const connection = await AppDataSource.initialize();
  //Comando para ejecutar ignorar llaves foraneas(truncate table)
  await connection.query("SET FOREIGN_KEY_CHECKS=0");
  //Ejecución de datos semilla
  await ModulePermissionAdministratorSeeder(connection);
  await RoleAdministratorSeeder(connection);
  await PermissionRoleAdministratorSeeder(connection);
  //comando para revertir la ignoración de llaves foraneas
  await connection.query("SET FOREIGN_KEY_CHECKS=1");
  console.log("terminó de ejecutar los seeders");
}

runSeeders();
