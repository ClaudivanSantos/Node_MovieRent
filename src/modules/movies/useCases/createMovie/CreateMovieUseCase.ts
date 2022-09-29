import { Movie } from "@prisma/client";
import { prisma } from "../../../../prisma/prismaClient";
import "express-async-errors"

interface IMovieProps {
  title: string;
  duration: number;
  release_date: string;
}

export class CreateMovieUseCase {
  async execute({ title, duration, release_date }: IMovieProps): Promise<Movie> {
    //Verificar se filme já existe
    const movieAlreadyExists = await prisma.movie.findUnique({
      where: {
        title,
      },
    });

    if (movieAlreadyExists) {
      throw new Error("Movie already exists")
    }

    //Criar usuario
    const movie = await prisma.movie.create({
      data: { title, duration, release_date},
    });
    return movie;
  }
}
