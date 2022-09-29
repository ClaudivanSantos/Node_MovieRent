import {  MovieRent } from "@prisma/client";
import { prisma } from "../../../../prisma/prismaClient";
import "express-async-errors"

interface IMovieRentProps {
  movieId: string;
  userId: string;
}

export class CreateMovieRentUseCase {
  async execute({ movieId, userId }: IMovieRentProps): Promise<MovieRent>{
    //Verificar se filme já existe
    const movieExists = await prisma.movie.findUnique({
      where: {
        id: movieId,
      },
    });

    if (!movieExists) {
      throw new Error("Movie does not exists")
    }

    //Verificar se filme já esta alugado
    const movieAlreadyRented = await prisma.movieRent.findFirst({
      where:{
        movieId: movieId,
      }
    })
    if (movieAlreadyRented) {
      throw new Error("Movie already rented")
    }

    //Verificar se filme já existe
    const userExists = await prisma.user.findUnique({ 
      where:{
        id: userId,
      }
    })
    if (!userExists) {
      throw new Error("User does not exists")
    }

    //Criar localção
    const movieRent = await prisma.movieRent.create({
      data: { movieId, userId},
    });
    return movieRent;
  }
}
