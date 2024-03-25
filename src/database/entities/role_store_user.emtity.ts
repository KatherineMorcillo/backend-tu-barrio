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
import { StoreUser } from "./store_user.entity";

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
  @OneToMany(() => StoreUser, (storeUser) => storeUser.roleStoreUser) // Un Rol pertenece a muchos usuarios
  storeUser: StoreUser;

  @CreateDateColumn({ comment: "Fecha de creación del rol" })
  createAt: Date;

  @UpdateDateColumn({ comment: "Fecha de actualización del rol" })
  updateAt: Date;

  @DeleteDateColumn({ comment: "Fecha de eliminación del rol" })
  deleteAt: Date;
}
