import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Status } from "./enums/status.enum";
import { RoleAdministrator } from "./role_administrator.entity";
import { ModulePermissionAdministrator } from "./module_permission_administrator.entity";

@Entity()
export class PermissionRoleAdministrator {
  @PrimaryGeneratedColumn({
    comment: "LLave primaria de permisos del rol del administrador",
  })
  id: number;

  @Column({
    type: "enum",
    enum: Status,
    default: Status.active,
    comment: "Estado del permiso del rol del administrador",
  })
  status: Status;

  @Column({ comment: "Permiso de crear" })
  created: boolean;

  @Column({ comment: "Permiso de actualizar" })
  updated: boolean;

  @Column({ comment: "Permiso de eliminar" })
  deleted: boolean;

  @Column({ comment: "Permiso de visualizar" })
  views: boolean;

  @ManyToOne(
    () => RoleAdministrator,
    (roleAdministrator) => roleAdministrator.permissionRoleAdministrator
  ) // Muchos permisos puede tener un rol administrador
  roleAdministrator: RoleAdministrator;

  @ManyToOne(
    () => ModulePermissionAdministrator,
    (modulePermissionAdministrator) => modulePermissionAdministrator.permissions
  ) // Muchos modulos pertenecen a un rol administrador
  module: ModulePermissionAdministrator;

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
