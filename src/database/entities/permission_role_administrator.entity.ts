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
export class PermissionRoleAdministrator {
  @PrimaryGeneratedColumn({
    comment: "LLave primaria de permisos del rol del administrador",
  })
  id: number;

  @Column({ comment: "" })
  permission: string;

  @Column({
    type: "enum",
    enum: Status,
    default: Status.active,
    comment: "Estado del permiso del rol del administrador",
  })
  status: string;

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
