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
export class Store {
  @PrimaryGeneratedColumn({ comment: "Llave primaria de la tabla tienda" })
  id: number;

  @Column({ comment: "Nombre de la tienda" })
  name: string;

  @Column({ comment: "Descripción de la tienda" })
  description: string;

  @Column({ comment: "Foto de la tienda" })
  photo: string;

  @Column({
    type: "enum",
    enum: Status,
    default: Status.active,
    comment: "Estado en el que se encuentra la tienda: activa o inactiva",
  })
  status: Status;

  @OneToMany(() => StoreUser, (storeuser) => storeuser.store) // Una tienda contiene muchos usuarios
  storeUser: StoreUser;

  @CreateDateColumn({ comment: "Fecha de creación de la tienda" })
  createAt: Date;

  @UpdateDateColumn({ comment: "Fecha de actualización de la tienda" })
  updateAt: Date;

  @DeleteDateColumn({ comment: "Fecha de eliminación" })
  deleteAt: Date;
}
