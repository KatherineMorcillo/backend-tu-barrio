import { DataSource } from "typeorm";
import { Store } from "../entities/store.entity";

export async function StoreSeeder(connection: DataSource) {
  const entity = connection.getRepository(Store);

  await entity.clear();

  const insertEntity = [
    {
      name: "Tienda 1",
      description: "Descripción tienda 1",
      photo: "photo tienda 1",
    },
    {
      name: "Tienda 2",
      description: "Descripción tienda 2",
      photo: "photo tienda 2",
    },
    {
      name: "Tienda 3",
      description: "Descripción tienda 3",
      photo: "photo tienda 3",
    },
  ];
  await entity.save(insertEntity);
}
