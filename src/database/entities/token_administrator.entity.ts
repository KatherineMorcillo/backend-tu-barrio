import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Status } from "./enums/status.enum";

Entity();
export class TokenAdministrator {
  @PrimaryGeneratedColumn({
    comment: "Llave primaria token del administrador",
  })
  id: number;

  @Column({ comment: "Token del administrador" })
  token: string;

  @Column({ comment: "Fecha de uso del token" })
  useDate: string;

  @Column({
    type: "enum",
    enum: Status,
    default: Status.active,
    comment: "Estado del token del administrador: inactivo o activo",
  })
  status: string;

  @CreateDateColumn({ comment: "Fecha de creación del token" })
  createAt: Date;

  @UpdateDateColumn({ comment: "Fecha de actualización del token" })
  updateAt: Date;

  @DeleteDateColumn({ comment: "Fecha de eliminación del token" })
  deleteAt: Date;
}
