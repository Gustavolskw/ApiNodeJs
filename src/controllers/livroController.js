import NotFound from "../erros/NotFound.js";
import livro from "../models/livro.js";
import { autor } from "../models/Autor.js";

class LivroController {

  static listarLivros = async (req, res, next) => {
    try {
      const listaLivros = await livro.find({});
      res.status(200).json(listaLivros);
    } catch (erro) {
      next(erro);
    }
  };

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
        next(new NotFound("Id de livro nao encontrado!"));
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

      const livroAtualizar = await livro.findByIdAndUpdate(id, req.body);
      const newBook = await livro.findById(id);
      if (livroAtualizar !== null) {
        res.status(200).json({ message: "livro atualizado", livro: { newBook } });
      } else {
        next(new NotFound("Id o Livro para Atualizar nao encontrado!"));
      }
    } catch (erro) {
      next(erro);
    }
  };

  static deletarLivro = async (req, res, next) => {
    try {
      const livroId = req.params.id;
      await livro.findByIdAndDelete(livroId);
      if (livroId !== null) {
        res.status(204).json({ message: "livro excluido com sucesso" });
      } else {
        next(new NotFound("Id do livro para deletar não encontrado!"));
      }
    } catch (erro) {
      next(erro);
    }
  };

  static listarPorFiltro = async (req, res, next) => {
    try {
      const busca = processaBusca(req.query);

      const livrosPorEditora = await livro.find(busca);

      if (livrosPorEditora) {
        res.status(200).json(livrosPorEditora);
      } else {
        next(new NotFound("Id da Editora nao encontrado!"));
      }


    } catch (err) {
      next(err);
    }
  };




}

function processaBusca(params) {
  const { editora, titulo, minPags, maxPags } = params;

  const regexpTitulo = new RegExp(titulo, "i");

  const busca = {};
  if (editora) busca.editora = { $regex: editora, $options: "i" };
  if (titulo) busca.titulo = regexpTitulo;

  if (minPags || maxPags) busca.paginas = {};
  //$gte: maior ou igual a que :{parmas}
  if (minPags) busca.paginas.$gte = minPags;
  //$lte:menor ou igual a que :{params}
  if (maxPags) busca.paginas = { $lte: maxPags };

  return busca;
}
/*
    {
    numeroPaginas: { $gte: 500 }
        }
  Esse operador também é de comparação, e ele irá verificar se o valor cadastrado no campo numeroPaginas é maior ou igual a 500.

  ///////////////////////////////
  Mas e se quisermos que os livros retornados tenham apenas até 1000 páginas? Para isso, devemos utilizar o operador $lte, que vem da expressão em inglês “Less Than or Equal”, que significa “menor ou igual que”. O objeto de busca agora ficaria assim:

  {
    numeroPaginas: { $lte: 1000 }
  }
  Assim como o $gte, o operador $ltetambém é de comparação, e ele irá verificar se o valor cadastrado no campo numeroPaginas é menor ou igual a 1000.

   ///////////////////////////////////
   Por fim, e se quisermos retornar os livros que possuem o número de páginas entre 500 e 1000? Nesse caso, os operadores $gte e $lte devem ser aplicados ao mesmo tempo no campo numeroPaginas. Para isso, o MongoDB permite a seguinte sintaxe para o objeto de busca:

    {
      numeroPaginas: {
        $gte: 500,
        $lte: 1000
      }
    }
    Dessa forma, ao fornecer dois operadores ao objeto numeroPaginas, esse campo deve atender às duas comparações ao mesmo tempo.
    */


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




export default LivroController;