import express from "express";
import AutorController from "../controllers/autorController.js";

const autorRoutes = express.Router();

autorRoutes.get("/autor", AutorController.listarAutor);
autorRoutes.get("/autor/:id", AutorController.listarAutorPorId)
autorRoutes.put("/autor/:id", AutorController.AtualizarAutor)
autorRoutes.delete("/autor/:id", AutorController.deletarAutor)
autorRoutes.post("/autor", AutorController.cadastrarAutor)





export default autorRoutes;