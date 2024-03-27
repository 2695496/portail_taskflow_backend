import { Router } from "express";
import { EvenementController } from "../controllers/evenementController.js";

const routerEvenements = Router();

// Récupérer tous les événements
routerEvenements.get("/", EvenementController.getEvenements);

// Récupérer un événement par ID
routerEvenements.get("/:id", EvenementController.getEvenementById);

// Ajouter un nouvel événement
routerEvenements.post("/", EvenementController.createEvenement);

// Mettre à jour les informations d'un événement
routerEvenements.put("/:id", EvenementController.updateEvenement);

// Supprimer un événement
routerEvenements.delete("/:id", EvenementController.deleteEvenement);

export default routerEvenements;
