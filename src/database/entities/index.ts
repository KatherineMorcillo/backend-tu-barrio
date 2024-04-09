import { Administrator } from "./administrator.entity";
import { ModulePermissionAdministrator } from "./module_permission_administrator.entity";
import { ModulePermissionRoleStoreUser } from "./module_permission_role_store_user.entity,";
import { PermissionRoleAdministrator } from "./permission_role_administrator.entity";
import { PermissionRoleStoreUser } from "./permission_role_store_user.entity";
import { RoleAdministrator } from "./role_administrator.entity";
import { RoleStoreUser } from "./role_store_user.emtity";
import { Store } from "./store.entity";
import { StorePointSale } from "./store_point_sale.entity";
import { StoreUser } from "./store_user.entity";
import { TokenAdministrator } from "./token_administrator.entity";
import { TokenStoreUser } from "./token_store_user.entity";

export default [
  TokenAdministrator,
  RoleAdministrator,
  Administrator,
  ModulePermissionAdministrator,
  PermissionRoleAdministrator,
  ModulePermissionRoleStoreUser,
  PermissionRoleStoreUser,
  RoleStoreUser,
  StorePointSale,
  Store,
  StoreUser,
  TokenStoreUser,
];
