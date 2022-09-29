import { Router } from "express";
import { CreateMovieController } from "../modules/movies/useCases/createMovie/CreateMovieController";
import { GetMoviesController } from "../modules/movies/useCases/getMovies/GetMoviesController";

const createMovieController = new CreateMovieController()
const getMovieController = new GetMoviesController()

const movieRoutes = Router()

movieRoutes.post('/createmovie', createMovieController.handle)
movieRoutes.get('/movies', getMovieController.handle)

export {movieRoutes}