import { Router } from "express";
import { CreateUserController } from "../modules/users/useCases/createUser/CreateUserController";
import { GetUserController } from "../modules/users/useCases/getUsers/GetUsersController";

const createUserController = new CreateUserController()
const getUserController = new GetUserController()

const userRoutes = Router()

userRoutes.post('/createuser', createUserController.handle)
userRoutes.get('/users', getUserController.handle)

export {userRoutes}