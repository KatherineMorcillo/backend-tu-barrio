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
import { TokenAdministrator } from "./token_administrator.entity";

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
  photo?: string;

  @Column({ comment: "Contraseña del administrador", select: false })
  password: string;

  @Column({
    type: "enum",
    enum: Status,
    default: Status.active,
    comment: "Estado del administrador: activo e inactivo",
  })
  status: Status;

  @ManyToOne(
    () => RoleAdministrator,
    (roleAdministrator) => roleAdministrator.administrator
  ) //Un administrador puede tener un rol
  roleAdministrator: RoleAdministrator;

  @OneToMany(
    () => TokenAdministrator,
    (tokenAdministrator) => tokenAdministrator.administrator
  ) //un administrador puede tener muchos token
  tokens: TokenAdministrator[];

  @CreateDateColumn({ comment: "Fecha de creación del administrador" })
  createdAt: Date;

  @UpdateDateColumn({ comment: "Fecha de actualización del administrador" })
  updateAt: Date;

  @DeleteDateColumn({ comment: "Fecha de eliminación del administrador" })
  deleteAt: Date;
}
