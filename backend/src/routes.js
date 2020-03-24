import { Router } from "express";
import IncidentController from "./controllers/IncidentController";
import OngController from "./controllers/OngController";
import ProfileController from "./controllers/ProfileController";
import SessionController from "./controllers/SessionController";

const routes = new Router();

routes.get("/incidents", IncidentController.index);
routes.post("/incidents", IncidentController.store);
routes.delete("/incidents/:id", IncidentController.delete);

routes.get("/ongs", OngController.index);
routes.post("/ongs", OngController.store);

routes.get("/profile", ProfileController.index);

routes.post("/sessions", SessionController.store);

export default routes;
