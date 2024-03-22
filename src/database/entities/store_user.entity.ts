import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class StoreUser {
  @PrimaryGeneratedColumn({
    comment: "Llave primaria módulo permisos del usuario de la tienda",
  })
  id: string;

  @Column({ comment: "Nombres de los usuarios de la tienda" })
  names: string;

  @Column({ comment: "Correo electrónico del susuario de la tienda" })
  email: string;

  @Column({ comment: "Foto del usuario de la tienda" })
  photo: string;

  @Column({ comment: "Estado del usuario de la tienda: activo o inactivo" })
  status: string;

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
