import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Status } from "./enums/status.enum";
import { PermissionRoleAdministrator } from "./permission_role_administrator.entity";
@Entity()
export class ModulePermissionAdministrator {
  @PrimaryGeneratedColumn({
    comment: "Llave primaria módulo permisos del administrador ejem:productos",
  })
  id: number;

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
  status: Status;

  @OneToMany(
    () => PermissionRoleAdministrator,
    (permissionRoleAdministrator) => permissionRoleAdministrator.module
  ) // Un módulo puede tener muchos permisos
  permissions: PermissionRoleAdministrator;

  @CreateDateColumn({ comment: "Fecha de creación del módulo" })
  createAt: Date;

  @UpdateDateColumn({ comment: "Fecha de actualización del módulo" })
  updateAt: Date;

  @DeleteDateColumn({ comment: "Fecha de eliminación del módulo " })
  deletedAt: Date;
}
