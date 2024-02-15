import express from "express";
import LivroController from "../controllers/livroController.js";

const routes = express.Router();


routes.route("/").get((req, res) => {
    res.status(200).send("Teste")
})

routes.get("/teste", (req, res) => {
    res.status(200).json("Working fine");
})

routes.get("/livros", LivroController.listarLivros);

routes.get("/livros/:id", LivroController.listarLivroPorId)


routes.put("/livros/:id",)

routes.delete("/livros/:id",)
routes.post("/livros",)





export default routes;