import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Status } from "./enums/status.enum";
import { RoleAdministrator } from "./role_administrator.entity";

@Entity()
export class Administrator {
  @PrimaryGeneratedColumn("uuid", { comment: "Llave primaria administradores" })
  id: string;

  @Column({ comment: "Nombres del administrador" })
  names: string;

  @Column({ comment: "Apellidos del administrador" })
  surnames: string;

  @Column({ comment: "Correo electrónico del administrador" })
  email: string;

  @Column({ comment: "Foto del administrador" })
  photo: string;

  @Column({
    type: "enum",
    enum: Status,
    default: Status.active,
    comment: "Estado del administrador: activo e inactivo",
  })
  status: string;

  @ManyToOne(
    () => RoleAdministrator,
    (roleAdministrator) => roleAdministrator.administraror
  ) //Un administrador puede tener un rol
  roles: RoleAdministrator;

  @CreateDateColumn({ comment: "Fecha de creación del administrador" })
  createdAt: Date;

  @UpdateDateColumn({ comment: "Fecha de actualización del administrador" })
  updateAt: Date;

  @DeleteDateColumn({ comment: "Fecha de eliminación del administrador" })
  deleteAt: Date;
  static roles: any;
}
