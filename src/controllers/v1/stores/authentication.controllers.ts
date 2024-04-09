import { Request, Response } from "express";
import { AppDataSource } from "../../../database/data-source";
import { Decrypt, Hash } from "../../../libraries/crypto";
import { StoreUser } from "../../../database/entities/store_user.entity";
import {
  GenerateToken,
  GenerateTokenValidate,
} from "../../../libraries/jsonwebtoken";

export class UserAuthenticationController {
  authenticationuser = async (req: Request, res: Response) => {
    console.log("entró");
    //Entidades
    const userEntity = AppDataSource.getRepository(StoreUser);
    try {
      console.log("entró");
      //Variables request
      const { email, password } = req.body;
      //Desencriptar la contraseña que envia el sistema
      const passwordDecypt = Decrypt(password);
      //Constultar para obtener un usuario de la tienda según su email
      const user = await userEntity.findOne({
        relations: { roleStoreUser: true },
        select: {
          id: true,
          email: true,
          names: true,
          photo: true,
          createAt: true,
          roleStoreUser: { id: true, name: true },
        },
        where: {
          email,
        },
      });

      //Validación si el usuario existe
      if (!user) {
        return res
          .status(400)
          .json({ message: "El usuario no existe dentro del sistema" });
      }
      //Consulta de validación si el password y el email coinciden

      const passwordValidate = await userEntity.findOne({
        where: {
          email,
          password: Hash(passwordDecypt),
        },
      });

      //Validación si existen coincidencias entre email y password
      if (!passwordValidate) {
        return res
          .status(400)
          .json({ message: "Su contraseña no es correcta" });
      }

      //Generación de token
      const token = GenerateToken({ id: user.id });

      //Guardar token en la tabla, función general: generate token validate: id, token, role(valor para obtener la tabla), column(valor para obtener la columna de relación)
      await GenerateTokenValidate(user.id, token, "storeUser", "storeUser");

      //Respuesta si el usuario existe dentro del sistema: envio de información del usuario
      return res.json({
        message: "Login del usuario de la tienda",
        user,
        token,
      });
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ error, message: "Ocurrió un error en el servidor" });
    }
  };
}
