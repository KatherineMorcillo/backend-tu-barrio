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
import { TokenStoreUser } from "./token_store_user.entity";

@Entity()
export class StoreUser {
  @PrimaryGeneratedColumn("uuid", {
    comment: "Llave primaria módulo permisos del usuario de la tienda",
  })
  id: string;

  @Column({ comment: "Nombres de los usuarios de la tienda" })
  names: string;

  @Column({ comment: "Correo electrónico del susuario de la tienda" })
  email: string;

  @Column({ comment: "Foto del usuario de la tienda" })
  photo: string;

  @Column({
    type: "enum",
    enum: Status,
    default: Status.active,
    comment: "Estado del usuario de la tienda: activo o inactivo",
  })
  status: Status;

  @OneToMany(() => TokenStoreUser, (tokenStoreUser) => tokenStoreUser.storeUser) // Muchos permisos puede tener un rol administrador
  tokenStoreUser: TokenStoreUser;

  @CreateDateColumn({ comment: "Fecha de creación del usuario de la tienda" })
  createAt: Date;

  @UpdateDateColumn({
    comment: "Fecha de actualización del usuario de la tienda ",
  })
  updateAt: Date;

  @DeleteDateColumn({
    comment: "Fecha de eliminación del usuario de la tienda",
  })
  deletedAt: Date;
}
