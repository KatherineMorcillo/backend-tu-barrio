import jwt from "jsonwebtoken";
import { AppDataSource } from "../database/data-source";
import { TokenAdministrator } from "../database/entities/token_administrator.entity";
import { TokenStoreUser } from "../database/entities/token_store_user.entity";

export const GenerateToken = (text: string | object | Buffer) => {
  return jwt.sign(text, `${process.env.SECRET_JWT}`);
};

export const GenerateTokenValidate = async (
  id: string,
  token: string,
  role: string,
  column: string
) => {
  let repository: any;

  //Validación del rol para obtener su respectiva tabla
  if (role === "administrator") {
    //Obteniendo la tabla de token administrator
    repository = AppDataSource.getRepository(TokenAdministrator);
  }

  if (role === "storeUser") {
    //Obteniendo la tabla de token user
    repository = AppDataSource.getRepository(TokenStoreUser);
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
