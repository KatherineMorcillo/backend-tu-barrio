import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Status } from "./enums/status.enum";
import { TokenStoreUser } from "./token_store_user.entity";
import { RoleStoreUser } from "./role_store_user.emtity";
import { Store } from "./store.entity";

@Entity()
export class StoreUser {
  @PrimaryGeneratedColumn("uuid", {
    comment: "Llave primaria módulo permisos del usuario de la tienda",
  })
  id: string;

  @Column({ comment: "Nombres de los usuarios de la tienda" })
  names: string;

  @Column({ comment: "Apellidos de los usuarios de la tienda" })
  surnames: string;

  @Column({ comment: "Correo electrónico del susuario de la tienda" })
  email: string;

  @Column({ comment: "Foto del usuario de la tienda" })
  photo: string;

  @Column({ comment: "Contraseña del usuario de la tienda", select: false })
  password: string;

  @Column({
    type: "enum",
    enum: Status,
    default: Status.active,
    comment: "Estado del usuario de la tienda: activo o inactivo",
  })
  status: Status;

  @OneToMany(() => TokenStoreUser, (tokenStoreUser) => tokenStoreUser.storeUser) // Un usuario tiene muchos token
  tokenStoreUser: TokenStoreUser;

  @ManyToOne(() => RoleStoreUser, (roleStoreUser) => roleStoreUser.storeUser) // Muchos usuarios pertenecen a un rol
  roleStoreUser: RoleStoreUser;

  @ManyToOne(() => Store, (store) => store.storeUser) // Muchos usuarios pertenecen a una tienda
  store: Store;

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
