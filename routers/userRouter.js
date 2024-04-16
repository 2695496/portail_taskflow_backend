import { Router } from "express";
import { UserController } from "../controllers/userController.js";

const userRouter = Router();

// Obtenir un utilisateur par ID
userRouter.get("/", UserController.getUser);

// Créer un nouvel utilisateur
userRouter.post("/", UserController.createUser);


// Créer un nouvel utilisateur
userRouter.post("/connect", UserController.getUserByMatriculeAndPassword);

// Obtenir un utilisateur par ID
userRouter.get("/:id", UserController.getUserById);

// Mettre à jour un utilisateur
userRouter.put("/:id", UserController.updateUser);

// Supprimer un utilisateur
userRouter.delete("/:id", UserController.deleteUser);

export default userRouter;
