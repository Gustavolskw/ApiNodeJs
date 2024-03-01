import express from "express";
import AutorController from "../controllers/autorController.js";
import { PaginationRouteAutor } from "../middlewares/pagination.js";

const autorRoutes = express.Router();

autorRoutes.get("/autores", AutorController.listarAutor, PaginationRouteAutor);
autorRoutes.get("/autores/:id", AutorController.listarAutorPorId);
autorRoutes.put("/autores/:id", AutorController.AtualizarAutor);
autorRoutes.delete("/autores/:id", AutorController.deletarAutor);
autorRoutes.post("/autores", AutorController.cadastrarAutor);





export default autorRoutes;