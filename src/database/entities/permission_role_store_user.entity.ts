import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Status } from "./enums/status.enum";

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
