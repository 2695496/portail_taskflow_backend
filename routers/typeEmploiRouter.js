import { Router } from "express";
import { TypeEmploiController } from "../controllers/typeEmploiController.js";

const routerTypeEmplois = Router();

// Récupérer tous les types d'emploi
routerTypeEmplois.get("/", TypeEmploiController.getTypeEmplois);

// Récupérer un type d'emploi par ID
routerTypeEmplois.get("/:id", TypeEmploiController.getTypeEmploiById);

// Ajouter un nouveau type d'emploi
routerTypeEmplois.post("/", TypeEmploiController.createTypeEmploi);

// Mettre à jour les informations d'un type d'emploi
routerTypeEmplois.put("/:id", TypeEmploiController.updateTypeEmploi);

// Supprimer un type d'emploi
routerTypeEmplois.delete("/:id", TypeEmploiController.deleteTypeEmploi);

export default routerTypeEmplois;
