import { autor } from "../models/Autor.js";

class AutorController {

  static listarAutor = async (req, res, next) => {
    try {
      const listaAutores = await autor.find({});
      res.status(200).json(listaAutores);
    } catch (erro) {
      next(erro);
    }
  };
  static cadastrarAutor = async (req, res, next) => {
    try {
      const novoLivro = await autor.create(req.body);
      res.status(200).json({
        message: "Criado com sucesso",
        autor: novoLivro
      });
    } catch (erro) {
      next(erro);
    }
  };

  static listarAutorPorId = async (req, res, next) => {
    try {
      const id = req.params.id;

      const autoresResultado = await autor.findById(id);

      if (autoresResultado !== null) {
        res.status(200).send("Encontrado");
      } else {
        res.status(404).send({ message: "Id do Autor não localizado." });
      }

    } catch (erro) {
      next(erro);

    }
  };

  static AtualizarAutor = async (req, res, next) => {
    try {
      const id = req.params.id;
      const updateAutor = await autor.findByIdAndUpdate(id, req.body);
      const newAutor = await autor.findById(id);
      res.status(200).json({ message: "livro atualizado", Autor_antigo: updateAutor, Autor_novo: newAutor });
    } catch (erro) {
      next(erro);
    }
  };

  static deletarAutor = async (req, res, next) => {
    try {
      const autorId = req.params.id;
      await autor.findByIdAndDelete(autorId);
      res.status(204).json({ message: "livro excluido com sucesso" });
    } catch (erro) {
      next(erro);
    }
  };


}
export default AutorController;