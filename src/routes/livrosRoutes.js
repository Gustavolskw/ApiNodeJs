import express from "express";
import LivroController from "../controllers/livroController.js";

const routes = express.Router();


routes.route("/").get((req, res) => {
    res.status(200).send("Teste");
})

routes.get("/teste", (req, res) => {
    res.status(200).json("Working fine");
})

routes.get("/livros", LivroController.listarLivros);
routes.get("/livros/busca", LivroController.listarPorEditora);
routes.get("/livros/:id", LivroController.listarLivroPorId);


routes.put("/livros/:id", LivroController.AtualizarLivro);

routes.delete("/livros/:id", LivroController.deletarLivro);
routes.post("/livros", LivroController.cadastrarLivros);






export default routes;