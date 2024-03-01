import BadRequest from "../erros/BadRequest.js";




async function Pagination(req, res, next) {
  try {

    let { limite = 5, page = 1, by = "autor" } = req.query;

    limite = parseInt(limite);
    page = parseInt(page);

    const resultado = req.resultado;
    if (limite > 0 && page > 0) {
      const listaLivrosPages = await resultado.find({}).sort({ [by]: "asc" }).skip((page - 1) * limite).limit(limite).populate("autor").exec();
      res.status(200).json(listaLivrosPages);
    } else {
      next(new BadRequest("valor para campo pagina nao existente!"));
    }
  } catch (erro) {
    next(erro);
  }



}
async function PaginationRouteAutor(req, res, next) {
  try {

    let { limite = 5, page = 1, by = "nome" } = req.query;

    limite = parseInt(limite);
    page = parseInt(page);

    const resultado = req.resultado;
    if (limite > 0 && page > 0) {
      const listaLivrosPages = await resultado.find({}).sort({ [by]: "asc" }).skip((page - 1) * limite).limit(limite).exec();
      res.status(200).json(listaLivrosPages);
    } else {
      next(new BadRequest("valor para campo pagina nao existente!"));
    }
  } catch (erro) {
    next(erro);
  }



}
async function PaginationForAutor(req, res, next) {
  try {

    let { limite = 5, page = 1, by = "titulo" } = req.query;

    limite = parseInt(limite);
    page = parseInt(page);

    const resultado = req.resultado;
    if (limite > 0 && page > 0) {
      const listaLivrosPages = await resultado.find({}).sort({ [by]: "asc" }).skip((page - 1) * limite).limit(limite).populate("autor").exec();
      res.status(200).json(listaLivrosPages);
    } else {
      next(new BadRequest("valor para campo pagina nao existente!"));
    }
  } catch (erro) {
    next(erro);
  }



}



export { Pagination, PaginationForAutor, PaginationRouteAutor };
