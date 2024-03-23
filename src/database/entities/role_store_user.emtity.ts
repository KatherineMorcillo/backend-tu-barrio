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
export class RoleStoreUser {
  @PrimaryGeneratedColumn({
    comment: "Llave primaria del Rol del usuario de la tienda",
  })
  id: string;

  @Column({ comment: "Nombre del rol" })
  name: string;

  @Column({
    type: "enum",
    enum: Status,
    default: Status.active,
    comment: "Estado del rol: activo, inactivo",
  })
  status: Status;

  @CreateDateColumn({ comment: "Fecha de creación del rol" })
  createAt: Date;

  @UpdateDateColumn({ comment: "Fecha de actualización del rol" })
  updateAt: Date;

  @DeleteDateColumn({ comment: "Fecha de eliminación del rol" })
  deleteAt: Date;
}
