import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Status } from "./enums/status.enum";
import { PermissionRoleStoreUser } from "./permission_role_store_user.entity";

@Entity()
export class ModulePermissionRoleStoreUser {
  @PrimaryGeneratedColumn({
    comment: "Llave primaria de permisos del módulo del usuario",
  })
  id: number;

  @Column({ comment: "Nombre del módulo" })
  name: string;

  @Column({ comment: "Ruta del módulo" })
  route: string;

  @Column({
    type: "enum",
    enum: Status,
    default: Status.active,
    comment: "Estado del módulo:activo, inactivo",
  })
  status: Status;

  @OneToMany(
    () => PermissionRoleStoreUser,
    (permissionRoleStoreUser) =>
      permissionRoleStoreUser.modulePermissionRoleStoreUser
  ) // Un módulo puede tener muchos permisos
  permissionRoleStoreUser: PermissionRoleStoreUser;

  @CreateDateColumn({
    comment: "Fecha de creación del permiso del rol del administrador",
  })
  createAt: Date;

  @UpdateDateColumn({
    comment: "Actualización del permiso del rol del administrador",
  })
  updateAt: Date;

  @DeleteDateColumn({
    comment: "Fecha de eliminación del permiso del rol del adimistrador",
  })
  deleteAt: Date;
}
