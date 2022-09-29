import { Router } from "express";
import { CreateMovieRentController } from "../modules/createMovieRent/useCases/createMovie/CreateMovieRentController";


const createMovieRentController = new CreateMovieRentController()

const movieRentRoutes = Router()

movieRentRoutes.post('/rent', createMovieRentController.handle)

export {movieRentRoutes}