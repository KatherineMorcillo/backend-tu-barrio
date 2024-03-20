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
export class Permission_role_administrator {
  @PrimaryGeneratedColumn("uuid", {
    comment: "LLave primaria de permisos del rol del administrador",
  })
  id: string;

  @Column({ comment: "" })
  permission: string;

  @Column({
    type: "enum",
    enum: Status,
    default: Status.active,
    comment: "Estado del permiso del rol del administrador",
  })
  status: string;

  @Column({ comment: "Permidso de crear" })
  created: string;

  @Column({ comment: "Permiso de actualizar" })
  updated: string;

  @Column({ comment: "Permiso de eleminar" })
  deleted: string;

  @Column({ comment: "Permiso de visualizar" })
  views: string;

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
