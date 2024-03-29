import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Status } from "./enums/status.enum";
import { StoreUser } from "./store_user.entity";

@Entity()
export class TokenStoreUser {
  @PrimaryGeneratedColumn({
    comment: "Llave primaria del token del usuario de la tienda",
  })
  id: number;

  @Column({ comment: "Token del usuario de la tienda" })
  token: string;

  @Column({ comment: "Fecha de uso del token" })
  useDate: string;

  @Column({
    type: "enum",
    enum: Status,
    default: Status.active,
    comment: "Estado del token del usuario: inactivo, activo",
  })
  status: Status;

  @ManyToOne(() => StoreUser, (storeUser) => storeUser.tokenStoreUser) // Muchos token pertenecen a un usuario
  storeUser: StoreUser;

  @CreateDateColumn({ comment: "Fecha de creación del token" })
  createAt: Date;

  @UpdateDateColumn({ comment: "Fecha de actualización del token" })
  updateAt: Date;

  @DeleteDateColumn({ comment: "Fecha de eliminación del token" })
  deleteAt: Date;
}
