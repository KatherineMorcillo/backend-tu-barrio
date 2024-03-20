import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Status } from "./enums/status.enum";
import { Administrator } from "./administrator.entity";

@Entity()
export class RoleAdministrator {
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

  @OneToMany(() => Administrator, (administrator) => administrator.roles) //un rol puede tener muchos administradores
  administrator: Administrator[];

  @CreateDateColumn({ comment: "Fecha e creación del rol" })
  createAt: Date;

  @UpdateDateColumn({ comment: "Fecha de actualización del rol" })
  updateAt: Date;

  @DeleteDateColumn({ comment: "Fecha de eliminación del rol" })
  deleteAt: Date;
}
