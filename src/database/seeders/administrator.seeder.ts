import { DataSource } from "typeorm";
import { Administrator } from "../entities/administrator.entity";
import { faker } from "@faker-js/faker";
import { Hash } from "../../libraries/crypto";

export default async function AdministradorSeeder(
  connection: DataSource,
  total: number
) {
  const entity = connection.getRepository(Administrator);

  await entity.clear();

  const insertEntity: any = [];

  for (let i = 0; i < total; i++) {
    insertEntity.push({
      names: faker.person.firstName(),
      surnames: faker.person.lastName(),
      email: faker.internet.email(),
      photo: faker.image.avatar(),
      password: Hash("prueba123"),
      roleAdministrator: {
        id: faker.helpers.rangeToNumber({
          min: 1,
          max: 2,
        }),
      },
    });
  }

  await entity.save(insertEntity);
}
