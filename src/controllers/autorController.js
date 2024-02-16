import { autor } from "../models/Autor.js";

class AutorController {

    static async listarAutor(req, res) {
        try {
            const listaAutores = await autor.find({});
            res.status(200).json(listaAutores)
        } catch (erro) {
            res.status(500).json(`Erro durante a requisiçao de busca de Autores${erro.message}`)
        }
    }
    static async cadastrarAutor(req, res) {
        try {
            const novoLivro = await autor.create(req.body)
            res.status(200).json({
                message: "Criado com sucesso",
                autor: novoLivro
            });
        } catch (erro) {
            res.status(500).json({
                message: `${erro.message} - falaha ao cadastrar autor`
            })
        }
    }

    static async listarAutorPorId(req, res) {
        try {
            const id = req.params.id;
            const autorEnc = await autor.findById(id);
            res.status(200).json(autorEnc)
        } catch (erro) {
            res.status(500).json(`Erro durante a requisiçao de busca de Autor${erro.message}`)
        }
    }

    static async AtualizarAutor(req, res) {
        try {
            const id = req.params.id;
            const updateAutor = await autor.findByIdAndUpdate(id, req.body);
            const newAutor = await autor.findById(id)
            res.status(200).json({ message: "livro atualizado", Autor_antigo: updateAutor, Autor_novo: newAutor })
        } catch (erro) {
            res.status(500).json(`Erro durante a requisiçao de busca de Autor${erro.message}`)
        }
    }

    static async deletarAutor(req, res) {
        try {
            const autorId = req.params.id;
            const deltAutor = await autor.findByIdAndDelete(autorId);
            res.status(204).json({ message: "livro excluido com sucesso" })
        } catch (erro) {
            res.status(500).json(`Erro durante a exclusão do Autor${erro.message}`)
        }
    }


}
export default AutorController;