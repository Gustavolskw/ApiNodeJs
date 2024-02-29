import NotFound from "../erros/NotFound.js";

const error404 = (req, res, next) => {
  const error404 = new NotFound(res);
  next(error404);
};


export default error404;