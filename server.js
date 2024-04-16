import "dotenv/config";
import express, { json, urlencoded } from "express";
import helmet from "helmet";
import compression from "compression";
import cors from "cors";
import morgan from "morgan";





import routerEvenements from "./routers/evenementRouter.js";
import employeRouter from "./routers/employeRouter.js";
import userRouter from "./routers/userRouter.js";
import AuthUtils from "./auth/auth.js";
import routerTypeEmplois from "./routers/typeEmploiRouter.js";







// Création du serveur
const app = express();

// Ajout de middlewares
app.use(helmet());
app.use(compression());
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: false }));



app.use(AuthUtils.authenticateApiKey)




// Ajouter des routes
app.use("/api/evenement",  routerEvenements);
app.use("/api/employe",employeRouter)
app.use('/api/utilisateur', userRouter)
app.use('/api/typeEmploi', routerTypeEmplois)

// Démarrage du serveur
app.listen(process.env.PORT);