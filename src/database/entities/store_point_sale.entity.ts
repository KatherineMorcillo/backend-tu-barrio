import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Status } from "./enums/status.enum";

@Entity()
export class StorePointSale {
  @PrimaryGeneratedColumn({
    comment: "Llave primaria del punto de venta de la tienda",
  })
  id: string;

  @Column({ comment: "Dirección del punto de venta de la tienda" })
  address: string;

  @Column({
    comment: "Longitud de la dirección del punto de venta de la tienda",
  })
  lng: string;

  @Column({
    comment: "Latitud de la dirección del punto de venta de la tienda",
  })
  lat: string;

  @Column({
    type: "enum",
    enum: Status,
    default: Status.active,
    comment: "Estado el punto de venta de la tienda : activo, inactivo",
  })
  status: Status;

  @CreateDateColumn({
    comment: "Fecha de creación del punto de venta de la tienda",
  })
  createAt: Date;

  @UpdateDateColumn({
    comment: "Fecha de actualización del punto de venta de la tienda",
  })
  updateAt: Date;

  @DeleteDateColumn({
    comment: "Fecha de eliminación del punto de venta de la tienda",
  })
  deleteAt: Date;
}
