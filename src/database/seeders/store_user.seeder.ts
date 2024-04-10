import { DataSource } from "typeorm";
import { StoreUser } from "../entities/store_user.entity";
import { faker } from "@faker-js/faker";
import { Hash } from "../../libraries/crypto";

export default async function StoreUserSeeder(
  connection: DataSource,
  total: number
) {
  const entity = connection.getRepository(StoreUser);

  await entity.clear();

  const insertEntity: any = [];

  for (let i = 0; i < total; i++) {
    insertEntity.push({
      names: faker.person.firstName(),
      surnames: faker.person.lastName(),
      email: faker.internet.email(),
      photo: faker.image.avatar(),
      password: Hash("prueba123"),
      roleStoreUser: {
        id: faker.helpers.rangeToNumber({
          min: 1,
          max: 3,
        }),
      },
      store: {
        id: faker.helpers.rangeToNumber({
          min: 1,
          max: 3,
        }),
      },
    });
  }

  await entity.save(insertEntity);
}
