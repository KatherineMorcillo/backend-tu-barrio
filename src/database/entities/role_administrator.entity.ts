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
export class RoleAdministraror {
  @PrimaryGeneratedColumn({
    comment: "Llave primaria rol del adimistrador",
  })
  id: number;

  @Column({ comment: "Nombre del rol del administrador" })
  name: string;

  @Column({
    type: "enum",
    enum: Status,
    default: Status,
    comment: "Estado del rol del administrador:activo o inactivo",
  })
  status: string;

  @CreateDateColumn({ comment: "Fecha e creación del rol" })
  createAt: Date;

  @UpdateDateColumn({ comment: "Fecha de actualización del rol" })
  updateAt: Date;

  @DeleteDateColumn({ comment: "Fecha de eliminación del rol" })
  deleteAt: Date;
}
