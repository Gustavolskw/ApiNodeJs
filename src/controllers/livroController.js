
import livro from "../models/livro.js";
import { autor } from "../models/Autor.js";

class LivroController {

  static listarLivros = async (req, res, next) => {
    try {
      throw new Error();
      const listaLivros = await livro.find({});
      res.status(200).json(listaLivros);
    } catch (erro) {
      next(erro);
    }
  };
  /*
  static cadastrarLivros = async (req, res, next) => {
    const novoLivro = req.body;
    try {
      const autorEncontrado = await autor.findById(novoLivro.autor);
      const livroCompleto = { ...novoLivro, autor: { ...autorEncontrado._doc } };

      await livro.create(livroCompleto);
      res.status(200).json({
        message: "Criado com sucesso",
        livro: novoLivro
      });
    } catch (erro) {
      next(erro);
    }
  };
  */
  static cadastrarLivros = async (req, res, next) => {
    try {
      let livroNovo = new livro(req.body);

      const livroResultado = await livroNovo.save();

      res.status(201).send(livroResultado.toJSON());
    } catch (erro) {
      next(erro);
    }
  };

  static listarLivroPorId = async (req, res, next) => {
    try {
      const id = req.params.id;

      const findedBook = await livro.findById(id);
      const autorDoLivro = await autor.findById(findedBook.autor);
      findedBook.autor = autorDoLivro;
      const livroCompleto = {
        livro: { findedBook }
      };
      if (findedBook !== null) {
        res.status(200).json(livroCompleto);
      } else {
        res.status(400).json("Erro durante a requisiçao de busca de livro");
      }

    } catch (erro) {
      next(erro);
    }
  };

  static AtualizarLivro = async (req, res, next) => {
    try {
      const id = req.params.id;
      const livroEnt = req.body;

      if (livroEnt.autor) {
        const dadosAutor = await autor.findById(livroEnt.autor);
        livroEnt.autor = dadosAutor;
      }

      await livro.findByIdAndUpdate(id, req.body);
      const newBook = await livro.findById(id);



      res.status(200).json({ message: "livro atualizado", livro: { newBook } });
    } catch (erro) {
      next(erro);
    }
  };

  static deletarLivro = async (req, res, next) => {
    try {
      const livroId = req.params.id;
      await livro.findByIdAndDelete(livroId);
      res.status(204).json({ message: "livro excluido com sucesso" });
    } catch (erro) {
      next(erro);
    }
  };

  static listarPorEditora = async (req, res, next) => {
    const editora = req.query.editora;
    try {
      const livrosPorEditora = await livro.find({ editora: editora });
      res.status(200).json(livrosPorEditora);

    } catch (err) {
      next(err);
    }
  };




}

export default LivroController;