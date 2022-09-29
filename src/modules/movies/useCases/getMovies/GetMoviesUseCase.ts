import { Movie } from "@prisma/client";
import { prisma } from "../../../../prisma/prismaClient";
import "express-async-errors"

export class GetMoviesUseCase {
  async execute(): Promise<Movie[]> {
    //Verificar se filme já existe
    const movies = await prisma.movie.findMany({
      orderBy: {
        release_date: "desc"
      },
      include: {
        movie_rent:{
          select:{
            user:{
              select:{
                name: true,
                email: true,
              }
            }
          }
        }
      }
    });

    return movies;
  }
}
