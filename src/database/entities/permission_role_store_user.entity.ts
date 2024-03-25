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
import { RoleStoreUser } from "./role_store_user.emtity";

@Entity()
export class PermissionRoleStoreUser {
  @PrimaryGeneratedColumn({
    comment: "Llave primaria permisos del rol del usuario",
  })
  id: number;

  @Column({
    type: "enum",
    enum: Status,
    default: Status.active,

    comment: "Estado del permiso del rol del usuario",
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
    () => RoleStoreUser,
    (roleStoreUser) => roleStoreUser.permissionRoleStoreUser
  ) // Muchos permisos pertenecen a un rol
  roleStoreUser: RoleStoreUser;

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
