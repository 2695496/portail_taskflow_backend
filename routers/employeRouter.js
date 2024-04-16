import { Router } from "express";
import { EmployeController } from "../controllers/employeController.js";

const employeRouter = Router();

// Récupérer tous les employés
employeRouter.get("/", EmployeController.getEmployes);

// Récupérer un employé par ID
employeRouter.get("/:id", EmployeController.getEmployeById);

// Ajouter un nouvel employé
employeRouter.post("/", EmployeController.createEmploye);

// Mettre à jour les informations d'un employé
employeRouter.put("/:id", EmployeController.updateEmploye);

// Supprimer un employé
employeRouter.delete("/:id", EmployeController.deleteEmploye);

export default employeRouter;
