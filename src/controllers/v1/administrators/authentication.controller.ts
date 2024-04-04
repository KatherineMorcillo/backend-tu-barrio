import { Request, Response } from "express";
import { AppDataSource } from "../../../database/data-source";
import { Administrator } from "../../../database/entities/administrator.entity";
import { Decrypt, Hash } from "../../../libraries/crypto";
import {
  GenerateToken,
  GenerateTokenValidate,
} from "../../../libraries/jsonwebtoken";

export class AdministratorAuthenticatorController {
  authentication = async (req: Request, res: Response) => {
    // Entities
    const administratorEntity = AppDataSource.getRepository(Administrator);
    try {
      //Variables request
      const { email, password } = req.body;

      // Desencriptar la contraseña que e envia el sistema (front-end)
      const passwordDecypt = Decrypt(password);

      //Consulta para obtener un administrador según su email SELECT *FROM administrator WHERE email= ?
      const administrator = await administratorEntity.findOne({
        relations: { roleAdministrator: true },
        select: {
          id: true,
          email: true,
          surnames: true,
          names: true,
          photo: true,
          createdAt: true,
          roleAdministrator: { id: true, name: true },
        },
        where: {
          email,
        },
      });

      //Validación si el administrador existe
      if (!administrator) {
        return res
          .status(400)
          .json({ message: "El usuario no existe dentro del sistema" });
      }

      //Consulta de validació si el password y el email coinciden SELECT * FROM administrator WHERE email = ? AND password = ?
      const passwordValidate = await administratorEntity.findOne({
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

      // Generación de Token
      const token = GenerateToken({ id: administrator.id });

      // guardar token en la tabla llamando la funcion general generateTokenValidate
      await GenerateTokenValidate(
        administrator.id,
        token,
        "administrator",
        "administrator"
      );

      //Respuesta si el usuario existe dentro del sistema se envia la información de usuario
      return res.json({
        message: "Login desde el administrador",
        administrator,
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
