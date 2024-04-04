import jwt from "jsonwebtoken";
import { AppDataSource } from "../database/data-source";
import { TokenAdministrator } from "../database/entities/token_administrator.entity";

export const GenerateToken = (text: string | object | Buffer) => {
  return jwt.sign(text, `${process.env.SECRET_JWT}`);
};

export const GenerateTokenValidate = async (
  id: string,
  token: string,
  role: string,
  column: string
) => {
  let repository;

  //Validación del rol para obtener su respectiva tabla
  if (role === "administrator") {
    //Obteniendo la tyabla de token asministrator
    repository = AppDataSource.getRepository(TokenAdministrator);
  }

  console.log({ token, useDate: new Date(), [column]: id });

  //Validar si el token existe
  const tokenExist = await repository?.findOne({
    where: {
      [column]: { id },
    },
  });

  // si no existe se crea un token
  if (!tokenExist) {
    await repository?.save({ token, useDate: new Date(), [column]: id });
  } else {
    await repository?.update(
      { id: tokenExist.id },
      { token, useDate: new Date() }
    );
  }

  return token;
};
