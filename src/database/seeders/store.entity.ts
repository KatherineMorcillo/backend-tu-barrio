import { DataSource } from "typeorm";
import { Store } from "../entities/store.entity";

export default async function StoreSeeder(connection: DataSource) {
  const entity = connection.getRepository(Store);

  await entity.clear();

  const insertEntity = [
    {
      name: "Store 1",
      description: "Descripción 1",
      photo: "photo 1",
    },
    {
      name: "Store 2",
      description: "Descripción 2",
      photo: "photo 2",
    },
    {
      name: "Store 3",
      description: "Descripción 3",
      photo: "photo 3",
    },
  ];
  await entity.save(insertEntity);
}
