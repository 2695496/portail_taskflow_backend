import "dotenv/config";
import express, { json, urlencoded } from "express";
import helmet from "helmet";
import compression from "compression";
import cors from "cors";
import morgan from "morgan";





import routerEvenements from "./routers/evenementRouter.js";







// Création du serveur
const app = express();

// Ajout de middlewares
app.use(helmet());
app.use(compression());
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: false }));








// Ajouter des routes
app.use("/api/evenement",  routerEvenements);


// Démarrage du serveur
app.listen(process.env.PORT);