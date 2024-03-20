import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Status } from "./enums/status.enum";
@Entity()
export class ModulePermissionAdministrator {
  @PrimaryGeneratedColumn({
    comment: "llave primaria módulo permisos del administrador ejem:prodctos",
  })
  id: string;

  @Column({ comment: "Nombre del módulo" })
  name: string;

  @Column({ comment: "Ruta del módulo" })
  route: string;

  @Column({
    type: "enum",
    enum: Status,
    default: Status.active,
    comment: "Estado del módulo",
  })
  status: string;

  @CreateDateColumn({ comment: "Fecha de creación del módulo" })
  createAt: Date;

  @UpdateDateColumn({ comment: "Fecha de actualización del módulo" })
  updateAt: Date;

  @DeleteDateColumn({ comment: "Fecha de eliminación del módulo " })
  deletedAt: Date;
}
