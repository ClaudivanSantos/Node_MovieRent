import { prisma } from "../../../../prisma/prismaClient";
import "express-async-errors"
import { User } from "@prisma/client";

export class GetUsersUseCase {
  async execute(): Promise<User[]> {
    //Verificar se filme já existe
    const users = await prisma.user.findMany({
      orderBy: {
        name: "asc"
      },include:{
        movie_rent: {
          select:{
            movie:{
              select: {
                title: true,
                
              }
            }
          }
        }
      }
    });

    return users;
  }
}
