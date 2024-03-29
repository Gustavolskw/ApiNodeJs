import NotFound from "../erros/NotFound.js";
import { autores } from "../models/Autor.js";

class AutorController {

  static listarAutor = async (req, res, next) => {
    try {
      const listaAutores = autores.find({});
      req.resultado = listaAutores;
      next();
    } catch (erro) {
      next(erro);
    }
  };
  static cadastrarAutor = async (req, res, next) => {
    try {
      const novoLivro = await autores.create(req.body);
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

      const autoresResultado = await autores.findById(id);

      if (autoresResultado !== null) {
        res.status(200).send("Encontrado");
      } else {
        next(new NotFound("Id do Autor não Encontrado"));
      }

    } catch (erro) {
      next(erro);

    }
  };

  static AtualizarAutor = async (req, res, next) => {
    try {
      const id = req.params.id;
      const updateAutor = await autores.findByIdAndUpdate(id, req.body);
      const newAutor = await autores.findById(id);
      if (updateAutor !== null) {
        res.status(200).json({ message: "livro atualizado", Autor_antigo: updateAutor, Autor_novo: newAutor });
      } else {
        next(new NotFound("Id do Autor nao Encontrado!"));
      }

    } catch (erro) {
      next(erro);
    }
  };

  static deletarAutor = async (req, res, next) => {
    try {
      const autorId = req.params.id;
      const autorDeletar = await autores.findByIdAndDelete(autorId);

      if (autorDeletar !== null) {
        res.status(204).json({ message: "livro excluido com sucesso" });
      } else {
        next(new NotFound("Id do autor não Encontrado!"));
      }

    } catch (erro) {
      next(erro);
    }
  };


}
export default AutorController;