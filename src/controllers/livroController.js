import livro from "../models/livro.js";

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
        try {
            const novoLivro = await livro.create(req.body)
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
            res.status(200).json(findedBook)
        } catch (erro) {
            res.status(500).json(`Erro durante a requisiçao de busca de livro${erro.message}`)
        }
    }

    static async AtualizarLivro(req, res) {
        try {
            const id = req.params.id;
            const findedBook = await livro.findByIdAndUpdate(id, req.body);
            res.status(200).json(findedBook)
        } catch (erro) {
            res.status(500).json(`Erro durante a requisiçao de busca de livro${erro.message}`)
        }
    }

}

export default LivroController