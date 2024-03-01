import express from "express";
import LivroController from "../controllers/livroController.js";
import { Pagination } from "../middlewares/pagination.js";
import { PaginationForAutor } from "../middlewares/pagination.js";

const routes = express.Router();


routes.route("/").get((req, res) => {
  res.status(200).send("Teste");
});

routes.get("/teste", (req, res) => {
  res.status(200).json("Working fine");
});


routes.get("/livros/busca", LivroController.listarPorFiltro, PaginationForAutor);
routes.get("/livros", LivroController.listarLivros, Pagination);
routes.get("/livros/all", LivroController.listarTodosLivros);

routes.get("/livros/:id", LivroController.listarLivroPorId);


routes.put("/livros/:id", LivroController.AtualizarLivro);

routes.delete("/livros/:id", LivroController.deletarLivro);
routes.post("/livros", LivroController.cadastrarLivros);






export default routes;