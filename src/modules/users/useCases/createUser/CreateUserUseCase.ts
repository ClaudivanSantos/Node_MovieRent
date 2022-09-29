import { User } from "@prisma/client";
import { prisma } from "../../../../prisma/prismaClient";
import "express-async-errors"

interface IUserProps {
  name: string;
  email: string;
}

export class CreateUserUseCase {
  async execute({ name, email }: IUserProps): Promise<User> {
    //Verificar se usuario já existe
    const userAlreadyExists = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (userAlreadyExists) {
      throw new Error("User already exists")
    }

    //Criar usuario
    const user = await prisma.user.create({
      data: { name: name, email: email },
    });
    return user;
  }
}
