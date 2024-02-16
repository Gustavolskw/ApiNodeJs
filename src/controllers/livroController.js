import livro from "../models/livro.js";
import { autor } from "../models/Autor.js";

class LivroController {

    static async listarLivros(req, res) {
        try {
            const listaLivros = await livro.find({});
            res.status(200).json(listaLivros)
        } catch (erro) {
            res.status(500).json(`Erro durante a requisiçao de busca de livros${erro.message}`)
        }
    }
    static async cadastrarLivros(req, res) {
        const novoLivro = req.body;
        try {
            const autorEncontrado = await autor.findById(novoLivro.autor);
            const livroCompleto = { ...novoLivro, autor: { ...autorEncontrado._doc } };
            const livroCriado = await livro.create(livroCompleto);
            res.status(200).json({
                message: "Criado com sucesso",
                livro: novoLivro
            });
        } catch (erro) {
            res.status(500).json({
                message: `${erro.message} - falaha ao cadastrar livro`
            })
        }
    }

    static async listarLivroPorId(req, res) {
        try {
            const id = req.params.id;
            const findedBook = await livro.findById(id);
            res.status(200).json(findedBook);
        } catch (erro) {
            res.status(500).json(`Erro durante a requisiçao de busca de livro${erro.message}`);
        }
    }

    static async AtualizarLivro(req, res) {
        try {
            const id = req.params.id;
            const livroEnt = req.body;

            if (livroEnt.autor) {
                const dadosAutor = await autor.findById(livroEnt.autor)
                livroEnt.autor = dadosAutor;
            }

            const updateBook = await livro.findByIdAndUpdate(id, req.body);
            const newBook = await livro.findById(id)



            res.status(200).json({ message: "livro atualizado" })
        } catch (erro) {
            res.status(500).json(`Erro durante a requisiçao de busca de livro${erro.message}`)
        }
    }

    static async deletarLivro(req, res) {
        try {
            const livroId = req.params.id;
            const deleteBook = await livro.findByIdAndDelete(livroId);
            res.status(204).json({ message: "livro excluido com sucesso" })
        } catch (erro) {
            res.status(500).json(`Erro durante a exclusão do livro${erro.message}`)
        }
    }

    static async listarPorEditora(req, res) {
        const editora = req.query.editora;
    }




}

export default LivroController