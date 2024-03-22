import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Status } from "./enums/status.enum";
import { Administrator } from "./administrator.entity";
import { PermissionRoleAdministrator } from "./permission_role_administrator.entity";

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
    default: Status.active,
    comment: "Estado del rol del administrador:activo o inactivo",
  })
  status: Status;

  @OneToMany(
    () => Administrator,
    (administrator) => administrator.roleAdministrator
  ) // Un rol administrador posee muchos permisos
  administrator: Administrator[];

  @OneToMany(
    () => PermissionRoleAdministrator,
    (permissionRoleAdministrator) =>
      permissionRoleAdministrator.roleAdministrator
  ) //Permisos asociados al rol administrador
  permissionRoleAdministrator: PermissionRoleAdministrator[];

  @CreateDateColumn({ comment: "Fecha e creación del rol" })
  createAt: Date;

  @UpdateDateColumn({ comment: "Fecha de actualización del rol" })
  updateAt: Date;

  @DeleteDateColumn({ comment: "Fecha de eliminación del rol" })
  deleteAt: Date;
}
