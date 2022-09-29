import express, { NextFunction, Request, Response } from "express";
import { movieRentRoutes } from "./routes/movieRentRoutes";
import { movieRoutes } from "./routes/movieRoutes";
import { userRoutes } from "./routes/userRoutes";

const app = express();

app.use(express.json());

app.use(userRoutes)
app.use(movieRoutes)
app.use(movieRentRoutes)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof Error) {
      return res.status(400).json({
        message: err.message,
      });
    }
    return res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  });

app.listen(3333, ()=> console.log("Server is running"))